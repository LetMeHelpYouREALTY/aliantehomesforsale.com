'use client';

import { useEffect, useState } from 'react';

/**
 * Homebot Home Valuation Widget
 *
 * Integrates Homebot's home valuation and market insights platform.
 * Homeowners can:
 * - Get instant home valuations
 * - Receive monthly market updates
 * - Track equity growth
 * - See neighborhood trends
 *
 * Integration Points:
 * - Creates Homebot client via /api/integrations/homebot-client
 * - Syncs with Follow Up Boss CRM
 * - Tracks engagement for follow-up triggers
 */

interface HomebotWidgetProps {
  // Homebot embed type
  type?: 'digest' | 'cma' | 'valuation';

  // Pre-fill data (from URL params or contact form)
  prefill?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
  };

  // Styling
  className?: string;
  height?: string;

  // Callbacks
  onSubmit?: (data: any) => void;
  onEngagement?: (event: string) => void;
}

export default function HomebotWidget({
  type = 'valuation',
  prefill,
  className = '',
  height = '600px',
  onSubmit,
  onEngagement,
}: HomebotWidgetProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Homebot script if not already present
    if (typeof window !== 'undefined' && !(window as any).Homebot) {
      const script = document.createElement('script');
      script.src = 'https://embed.homebot.ai/js/embed.js';
      script.async = true;
      script.onload = () => {
        console.log('[Homebot] Script loaded');
        setLoaded(true);
      };
      script.onerror = () => {
        console.error('[Homebot] Failed to load script');
        setError('Failed to load Homebot widget');
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else if ((window as any).Homebot) {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded || !(window as any).Homebot) return;

    // Initialize Homebot widget
    try {
      const homebotConfig = {
        agent_id: process.env.NEXT_PUBLIC_HOMEBOT_AGENT_ID || 'YOUR_HOMEBOT_AGENT_ID',
        type: type,

        // Pre-fill data
        ...(prefill && {
          email: prefill.email,
          first_name: prefill.firstName,
          last_name: prefill.lastName,
          phone: prefill.phone,
          address: prefill.address,
          city: prefill.city,
          state: prefill.state,
          zip: prefill.zip,
        }),

        // Event callbacks
        onSubmit: (data: any) => {
          console.log('[Homebot] Form submitted:', data);
          handleHomebotSubmission(data);
          if (onSubmit) onSubmit(data);
        },

        onEngagement: (event: string) => {
          console.log('[Homebot] Engagement event:', event);
          if (onEngagement) onEngagement(event);
        },
      };

      (window as any).Homebot.init('homebot-widget-container', homebotConfig);
    } catch (err: any) {
      console.error('[Homebot] Initialization error:', err);
      setError('Failed to initialize Homebot widget');
    }
  }, [loaded, type, prefill, onSubmit, onEngagement]);

  /**
   * Handle Homebot form submission
   * Creates client in Homebot via API and syncs to FUB
   */
  async function handleHomebotSubmission(data: any) {
    try {
      const response = await fetch('/api/integrations/homebot-client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          first_name: data.firstName || data.first_name,
          last_name: data.lastName || data.last_name,
          phone: data.phone,
          home_address: data.address,
          city: data.city,
          state: data.state,
          zip_code: data.zip || data.zipCode,
          source: 'homebot_widget',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create Homebot client');
      }

      const result = await response.json();
      console.log('[Homebot] Client created:', result);
    } catch (err: any) {
      console.error('[Homebot] Submission error:', err);
    }
  }

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-6 ${className}`}>
        <p className="text-red-800 font-semibold">⚠ {error}</p>
        <p className="text-sm text-red-600 mt-2">
          Please refresh the page or contact us directly at{' '}
          <a href="tel:7027077273" className="underline">702-707-7273</a>
        </p>
      </div>
    );
  }

  return (
    <div className={`homebot-widget-wrapper ${className}`}>
      {/* Widget Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#1a365d' }}>
          {type === 'valuation' && "What's Your Home Worth?"}
          {type === 'digest' && 'Monthly Market Updates'}
          {type === 'cma' && 'Comparative Market Analysis'}
        </h2>
        <p className="text-gray-600">
          {type === 'valuation' && 'Get an instant, accurate home valuation powered by local market data'}
          {type === 'digest' && 'Track your home equity and receive personalized market insights'}
          {type === 'cma' && 'See how your home compares to recent sales in your neighborhood'}
        </p>
      </div>

      {/* Widget Container */}
      <div
        id="homebot-widget-container"
        className="rounded-lg shadow-md overflow-hidden"
        style={{
          minHeight: height,
          background: '#f9fafb',
        }}
      >
        {!loaded && (
          <div className="flex items-center justify-center h-full p-12">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-[#2c5aa0] mb-4"></div>
              <p className="text-gray-600">Loading home valuation tool...</p>
            </div>
          </div>
        )}
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
        <div>
          <div className="text-2xl font-bold" style={{ color: '#2c5aa0' }}>100%</div>
          <div>Free & No Obligation</div>
        </div>
        <div>
          <div className="text-2xl font-bold" style={{ color: '#2c5aa0' }}>24/7</div>
          <div>Instant Results</div>
        </div>
        <div>
          <div className="text-2xl font-bold" style={{ color: '#2c5aa0' }}>🔒</div>
          <div>Your Data is Secure</div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2" style={{ color: '#1a365d' }}>
          What You'll Receive:
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Instant home valuation based on current market data</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Monthly equity updates and market insights</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Neighborhood sales trends and statistics</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Personalized recommendations from Dr. Jan Duffy</span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-4">
          Questions about your home's value?
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-[#2c5aa0] text-white font-semibold rounded-lg hover:bg-[#1a365d] transition-colors"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </div>
  );
}

/**
 * Compact version for sidebar/footer placement
 */
export function HomebotWidgetCompact({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div className={`bg-gradient-to-br from-[#2c5aa0] to-[#1a365d] text-white rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold mb-2">What's Your Home Worth?</h3>
      <p className="text-sm mb-4 opacity-90">
        Get an instant, accurate valuation in seconds
      </p>
      <a
        href="/home-valuation"
        className="block w-full text-center px-4 py-3 bg-white text-[#2c5aa0] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
      >
        Get Free Valuation
      </a>
      <p className="text-xs mt-3 opacity-75 text-center">
        100% Free • No Obligation • Instant Results
      </p>
    </div>
  );
}
