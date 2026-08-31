/**
 * Integration utilities for Follow Up Boss, SMS, and other services
 * Works with your existing environment variables
 */

// Follow Up Boss integration
interface FollowUpBossLead {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | undefined;
  message?: string | undefined;
  source?: string | undefined;
  tags?: string[] | undefined;
}

export async function sendLeadToFollowUpBoss(lead: FollowUpBossLead) {
  const baseUrl = process.env.FOLLOW_UP_BOSS_BASE_URL;
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  const agentId = process.env.FOLLOW_UP_BOSS_AGENT_ID;

  if (!baseUrl || !apiKey) {
    console.warn('Follow Up Boss not configured');
    return null;
  }

  try {
    const response = await fetch(`${baseUrl}/people`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        firstName: lead.firstName,
        lastName: lead.lastName,
        emails: [{ value: lead.email, type: 'primary' }],
        phones: lead.phone ? [{ value: lead.phone, type: 'mobile' }] : [],
        message: lead.message,
        source: lead.source || 'Website',
        agentId: agentId,
        tags: lead.tags || ['Website Lead'],
      }),
    });

    if (!response.ok) {
      throw new Error(`Follow Up Boss API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending lead to Follow Up Boss:', error);
    throw error;
  }
}

// Send SMS notification (uses your existing SMS setup)
interface SMSOptions {
  to: string;
  message: string;
  fromNumber?: string;
}

export async function sendSMSNotification(options: SMSOptions) {
  const smsEnabled = process.env.SMS_AUTO_REPLY_ENABLED === 'true';
  const defaultFromNumber = process.env.SMS_PHONE_NUMBER;

  if (!smsEnabled || !defaultFromNumber) {
    console.warn('SMS not configured or disabled');
    return null;
  }

  try {
    // Your SMS API endpoint would be called here
    const response = await fetch('/api/sms/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: options.to,
        from: options.fromNumber || defaultFromNumber,
        message: options.message,
      }),
    });

    if (!response.ok) {
      throw new Error(`SMS API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
}

// Enhanced contact form handler that integrates with all services
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  propertyInterest?: string;
  preferredContact?: 'email' | 'phone' | 'text';
  source?: string;
}

export async function handleContactFormSubmission(data: ContactFormData) {
  const results = {
    followUpBoss: null as any,
    sms: null as any,
    analytics: false,
  };

  try {
    // 1. Send to Follow Up Boss
    results.followUpBoss = await sendLeadToFollowUpBoss({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: data.source || 'Website Contact Form',
      tags: ['Website Lead', 'New Inquiry'],
    });

    // 2. Send SMS notification if phone provided and SMS enabled
    if (data.phone && data.preferredContact === 'text') {
      results.sms = await sendSMSNotification({
        to: data.phone,
        message: `Thank you for contacting Aliante Real Estate! We've received your inquiry and will follow up during office hours. Need immediate assistance? Call (702) 707-7273.`,
      });
    }

    // 3. Track in Google Analytics (client-side)
    results.analytics = true;

    return {
      success: true,
      results,
    };
  } catch (error) {
    console.error('Error handling contact form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Property inquiry handler
export async function handlePropertyInquiry(data: {
  lead: ContactFormData;
  propertyId: string;
  propertyAddress: string;
  propertyPrice: number;
}) {
  try {
    // Send to Follow Up Boss with property details
    const result = await sendLeadToFollowUpBoss({
      firstName: data.lead.firstName,
      lastName: data.lead.lastName,
      email: data.lead.email,
      phone: data.lead.phone,
      message: `Property Inquiry: ${data.propertyAddress}\nPrice: $${data.propertyPrice.toLocaleString()}\n\n${data.lead.message || 'Interested in this property'}`,
      source: 'Property Inquiry',
      tags: ['Property Inquiry', 'Hot Lead', data.propertyAddress],
    });

    return {
      success: true,
      result,
    };
  } catch (error) {
    console.error('Error handling property inquiry:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Home valuation request handler
export async function handleHomeValuationRequest(data: {
  lead: ContactFormData;
  propertyAddress: string;
  propertyType: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
}) {
  try {
    const message = `Home Valuation Request
Address: ${data.propertyAddress}
Type: ${data.propertyType}
${data.bedrooms ? `Bedrooms: ${data.bedrooms}` : ''}
${data.bathrooms ? `Bathrooms: ${data.bathrooms}` : ''}
${data.squareFeet ? `Square Feet: ${data.squareFeet}` : ''}

${data.lead.message || 'Requesting home valuation'}`;

    const result = await sendLeadToFollowUpBoss({
      firstName: data.lead.firstName,
      lastName: data.lead.lastName,
      email: data.lead.email,
      phone: data.lead.phone,
      message,
      source: 'Home Valuation',
      tags: ['Home Valuation', 'Seller Lead', data.propertyAddress],
    });

    return {
      success: true,
      result,
    };
  } catch (error) {
    console.error('Error handling home valuation:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Check if integrations are configured
export function checkIntegrations() {
  return {
    followUpBoss: {
      enabled: Boolean(process.env.FOLLOW_UP_BOSS_API_KEY),
      baseUrl: process.env.FOLLOW_UP_BOSS_BASE_URL,
      agentId: process.env.FOLLOW_UP_BOSS_AGENT_ID,
    },
    sms: {
      enabled: process.env.SMS_AUTO_REPLY_ENABLED === 'true',
      phoneNumber: process.env.SMS_PHONE_NUMBER,
    },
    googleAnalytics: {
      enabled: Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID),
      measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    },
    realScout: {
      enabled: Boolean(process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID),
      agentId: process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID,
    },
    cloudflare: {
      enabled: Boolean(process.env.CLOUDFLARE_GLOBAL_API_TOKEN),
    },
  };
}
