'use client';

import { useState } from 'react';

/**
 * Unified Contact Form - Multi-Platform Lead Sync
 *
 * Submits to /api/integrations/lead-sync which:
 * 1. Creates contact in Follow Up Boss (FUB)
 * 2. Syncs to RealScout (for buyers)
 * 3. Syncs to Homebot (for all)
 *
 * Features:
 * - Buyer/Seller/Both type selection
 * - Property preferences for buyers
 * - Source tracking
 * - Real-time validation
 * - Loading/success/error states
 */

type LeadType = 'buyer' | 'seller' | 'both';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  type: LeadType;
  source: string;
  property_preferences: {
    min_price: string;
    max_price: string;
    bedrooms: string;
    bathrooms: string;
    neighborhoods: string[];
    property_types: string[];
  };
  notes: string;
}

interface FormProps {
  source?: string;
  defaultType?: LeadType;
  onSuccess?: (result: any) => void;
  className?: string;
}

const ALIANTE_NEIGHBORHOODS = [
  'Prominence',
  'Desert Willows',
  'Club Aliante',
  'The Paseos',
  'Sun City Aliante',
  'Tule Springs',
];

const PROPERTY_TYPES = [
  { value: 'SFR', label: 'Single Family' },
  { value: 'CONDO', label: 'Condo/Townhome' },
  { value: 'GOLF', label: 'Golf Course Home' },
  { value: 'GATED', label: 'Gated Community' },
  { value: '55PLUS', label: '55+ Active Adult' },
];

export default function UnifiedContactForm({
  source = 'website_contact',
  defaultType = 'buyer',
  onSuccess,
  className = '',
}: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    type: defaultType,
    source,
    property_preferences: {
      min_price: '',
      max_price: '',
      bedrooms: '',
      bathrooms: '',
      neighborhoods: [],
      property_types: [],
    },
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith('property_preferences.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        property_preferences: {
          ...prev.property_preferences,
          [field]: value,
        },
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (field: 'neighborhoods' | 'property_types', value: string) => {
    setFormData(prev => {
      const current = prev.property_preferences[field];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];

      return {
        ...prev,
        property_preferences: {
          ...prev.property_preferences,
          [field]: updated,
        },
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWarnings([]);
    setSuccess(false);

    try {
      // Prepare payload
      const payload = {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.replace(/\D/g, ''),
        type: formData.type,
        source: formData.source,
        notes: formData.notes.trim(),
        property_preferences:
          formData.type === 'buyer' || formData.type === 'both'
            ? {
                min_price: formData.property_preferences.min_price
                  ? parseInt(formData.property_preferences.min_price)
                  : undefined,
                max_price: formData.property_preferences.max_price
                  ? parseInt(formData.property_preferences.max_price)
                  : undefined,
                bedrooms: formData.property_preferences.bedrooms
                  ? parseInt(formData.property_preferences.bedrooms)
                  : undefined,
                bathrooms: formData.property_preferences.bathrooms
                  ? parseFloat(formData.property_preferences.bathrooms)
                  : undefined,
                neighborhoods: formData.property_preferences.neighborhoods,
                property_types: formData.property_preferences.property_types,
              }
            : undefined,
      };

      const response = await fetch('/api/integrations/lead-sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.errors?.[0] || 'Failed to submit form');
      }

      if (result.warnings?.length > 0) {
        setWarnings(result.warnings);
      }

      setSuccess(true);

      if (onSuccess) {
        onSuccess(result);
      }

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          type: defaultType,
          source,
          property_preferences: {
            min_price: '',
            max_price: '',
            bedrooms: '',
            bathrooms: '',
            neighborhoods: [],
            property_types: [],
          },
          notes: '',
        });
        setSuccess(false);
        setWarnings([]);
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const showPropertyPreferences = formData.type === 'buyer' || formData.type === 'both';

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md ${className}`}
    >
      <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a365d' }}>
        Get Started Today
      </h2>

      {/* Success Message */}
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">✓ Thank you! We'll be in touch shortly.</p>
          {warnings.length > 0 && (
            <ul className="mt-2 text-sm text-yellow-700">
              {warnings.map((warning, i) => (
                <li key={i}>⚠ {warning}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">✗ {error}</p>
        </div>
      )}

      {/* Lead Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: '#2c5aa0' }}>
          I'm interested in:
        </label>
        <div className="grid grid-cols-3 gap-3">
          {(['buyer', 'seller', 'both'] as LeadType[]).map(type => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, type }))}
              className={`p-3 rounded-lg border-2 font-medium transition-all ${
                formData.type === type
                  ? 'border-[#2c5aa0] bg-[#2c5aa0] text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-[#2c5aa0]'
              }`}
            >
              {type === 'buyer' && 'Buying'}
              {type === 'seller' && 'Selling'}
              {type === 'both' && 'Both'}
            </button>
          ))}
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium mb-2" style={{ color: '#2c5aa0' }}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-medium mb-2" style={{ color: '#2c5aa0' }}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent"
          />
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#2c5aa0' }}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#2c5aa0' }}>
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="702-555-1234"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent"
          />
        </div>
      </div>

      {/* Property Preferences (Buyers Only) */}
      {showPropertyPreferences && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#1a365d' }}>
            Property Preferences
          </h3>

          {/* Price Range */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="property_preferences.min_price" className="block text-sm font-medium mb-2">
                Min Price
              </label>
              <input
                type="number"
                id="property_preferences.min_price"
                name="property_preferences.min_price"
                value={formData.property_preferences.min_price}
                onChange={handleInputChange}
                placeholder="500000"
                step="50000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="property_preferences.max_price" className="block text-sm font-medium mb-2">
                Max Price
              </label>
              <input
                type="number"
                id="property_preferences.max_price"
                name="property_preferences.max_price"
                value={formData.property_preferences.max_price}
                onChange={handleInputChange}
                placeholder="750000"
                step="50000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent"
              />
            </div>
          </div>

          {/* Beds/Baths */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="property_preferences.bedrooms" className="block text-sm font-medium mb-2">
                Bedrooms
              </label>
              <select
                id="property_preferences.bedrooms"
                name="property_preferences.bedrooms"
                value={formData.property_preferences.bedrooms}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div>
              <label htmlFor="property_preferences.bathrooms" className="block text-sm font-medium mb-2">
                Bathrooms
              </label>
              <select
                id="property_preferences.bathrooms"
                name="property_preferences.bathrooms"
                value={formData.property_preferences.bathrooms}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="2.5">2.5+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>

          {/* Neighborhoods */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Preferred Neighborhoods</label>
            <div className="grid grid-cols-2 gap-2">
              {ALIANTE_NEIGHBORHOODS.map(neighborhood => (
                <label key={neighborhood} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.property_preferences.neighborhoods.includes(neighborhood)}
                    onChange={() => handleCheckboxChange('neighborhoods', neighborhood)}
                    className="w-4 h-4 text-[#2c5aa0] border-gray-300 rounded focus:ring-[#2c5aa0]"
                  />
                  <span className="text-sm">{neighborhood}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Property Types */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Property Types</label>
            <div className="grid grid-cols-2 gap-2">
              {PROPERTY_TYPES.map(({ value, label }) => (
                <label key={value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.property_preferences.property_types.includes(value)}
                    onChange={() => handleCheckboxChange('property_types', value)}
                    className="w-4 h-4 text-[#2c5aa0] border-gray-300 rounded focus:ring-[#2c5aa0]"
                  />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Notes */}
      <div className="mb-6">
        <label htmlFor="notes" className="block text-sm font-medium mb-2" style={{ color: '#2c5aa0' }}>
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={4}
          placeholder="Tell us about your needs, timeline, or any questions you have..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-transparent"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || success}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all ${
          loading || success
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#2c5aa0] hover:bg-[#1a365d]'
        }`}
      >
        {loading ? 'Submitting...' : success ? '✓ Submitted!' : 'Get Started'}
      </button>

      {/* Privacy Notice */}
      <p className="mt-4 text-xs text-gray-600 text-center">
        By submitting this form, you agree to be contacted by Dr. Jan Duffy regarding your real estate needs.
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
