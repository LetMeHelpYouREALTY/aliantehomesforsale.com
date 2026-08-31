'use client';

import { useId, useState } from 'react';

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Generate unique IDs for accessibility
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const inquiryTypeId = useId();
  const messageId = useId();
  const newsletterId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: 'contact_form',
        event_category: 'contact',
      });
    }

    try {
      const response = await fetch('/api/leads/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          inquiryType: formData.inquiryType,
          message: formData.message,
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus({
          type: 'error',
          message:
            payload.error ||
            'We could not send this form. Call (702) 707-7273 so we do not miss your request.',
        });
        return;
      }

      setStatus({
        type: 'success',
        message: 'Received. I will follow up — or call (702) 707-7273 if you need me sooner.',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        newsletter: false,
      });
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error. Call (702) 707-7273 so we do not miss your request.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
          Get Expert Guidance
        </h2>
        <p className="text-lg text-gray-600">
          Fill out the form below. I follow up during office hours — or call (702) 707-7273.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {status ? (
          <output
            className={`block rounded-lg px-4 py-3 text-sm font-medium ${
              status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}
          >
            {status.message}
          </output>
        ) : null}
        {/* Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor={firstNameId}
              className="block text-sm font-bold mb-2"
              style={{ color: '#1a365d' }}
            >
              First Name *
            </label>
            <input
              type="text"
              id={firstNameId}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Your first name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              style={{ minHeight: '48px' }}
            />
          </div>

          <div>
            <label
              htmlFor={lastNameId}
              className="block text-sm font-bold mb-2"
              style={{ color: '#1a365d' }}
            >
              Last Name *
            </label>
            <input
              type="text"
              id={lastNameId}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Your last name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              style={{ minHeight: '48px' }}
            />
          </div>
        </div>

        {/* Email & Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor={emailId}
              className="block text-sm font-bold mb-2"
              style={{ color: '#1a365d' }}
            >
              Email *
            </label>
            <input
              type="email"
              id={emailId}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              style={{ minHeight: '48px' }}
            />
          </div>

          <div>
            <label
              htmlFor={phoneId}
              className="block text-sm font-bold mb-2"
              style={{ color: '#1a365d' }}
            >
              Phone *
            </label>
            <input
              type="tel"
              id={phoneId}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(702) XXX-XXXX"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              style={{ minHeight: '48px' }}
            />
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label
            htmlFor={inquiryTypeId}
            className="block text-sm font-bold mb-2"
            style={{ color: '#1a365d' }}
          >
            What can we help you with? *
          </label>
          <select
            id={inquiryTypeId}
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
            style={{ minHeight: '48px' }}
          >
            <option value="">Select an option</option>
            <option value="buy">Buy a home in Aliante</option>
            <option value="sell">Sell my Aliante home</option>
            <option value="new-construction">New construction guidance</option>
            <option value="market-report">Get market report</option>
            <option value="valuation">Home valuation</option>
            <option value="investment">Investment properties</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor={messageId}
            className="block text-sm font-bold mb-2"
            style={{ color: '#1a365d' }}
          >
            Additional Details
          </label>
          <textarea
            id={messageId}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us more about what you're looking for, any specific neighborhoods, or questions you have..."
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-vertical"
          />
        </div>

        {/* Newsletter Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id={newsletterId}
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor={newsletterId} className="text-gray-700 cursor-pointer">
            Subscribe to our newsletter for market updates and new listings
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-8 rounded-lg font-bold text-lg text-white transition-all transform hover:scale-[1.02] hover:shadow-xl focus:ring-4 focus:ring-orange-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: '#ed8936',
            minHeight: '56px',
          }}
          onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#dd6b20')}
          onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#ed8936')}
        >
          {isSubmitting ? 'Sending...' : '✉️ Send Message'}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          By submitting this form, you agree to our{' '}
          <a href="/privacy-policy" className="underline hover:text-blue-600">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
}
