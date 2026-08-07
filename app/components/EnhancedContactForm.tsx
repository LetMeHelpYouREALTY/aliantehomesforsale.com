'use client';

import { useState, useId } from 'react';

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

  // Generate unique IDs for accessibility
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const inquiryTypeId = useId();
  const messageId = useId();
  const newsletterId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: 'contact_form',
        event_category: 'contact',
      });
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! We'll be in touch within 2 hours.");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        newsletter: false,
      });
    }, 1000);
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
          Fill out the form below and we'll get back to you within 2 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
