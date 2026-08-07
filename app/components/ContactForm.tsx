'use client';

import { useState, useId } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    newsletter: false,
  });

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
    // Analytics tracking for Core Web Vitals
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: 'contact_form',
        event_category: 'contact',
      });
    }
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
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
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor={firstNameId}>First Name *</label>
          <input
            type="text"
            id={firstNameId}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Your first name"
          />
        </div>

        <div className="form-group">
          <label htmlFor={lastNameId}>Last Name *</label>
          <input
            type="text"
            id={lastNameId}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor={emailId}>Email *</label>
          <input
            type="email"
            id={emailId}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor={phoneId}>Phone *</label>
          <input
            type="tel"
            id={phoneId}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(702) XXX-XXXX"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor={inquiryTypeId}>What can we help you with? *</label>
        <select
          id={inquiryTypeId}
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
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

      <div className="form-group">
        <label htmlFor={messageId}>Additional Details</label>
        <textarea
          id={messageId}
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us more about what you're looking for, any specific neighborhoods, or questions you have..."
        ></textarea>
      </div>

      <div className="form-group checkbox-group">
        <label htmlFor={newsletterId} className="checkbox-label">
          <input
            type="checkbox"
            id={newsletterId}
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          <span>Subscribe to our newsletter for market updates and new listings</span>
        </label>
      </div>

      <button type="submit" className="submit-button">
        Send Message
      </button>
    </form>
  );
}
