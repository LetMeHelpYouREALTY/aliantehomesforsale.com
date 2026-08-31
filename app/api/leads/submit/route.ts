import { NextResponse } from 'next/server';
import { sendLeadToFollowUpBoss } from '../../../../lib/integrations';

type LeadBody = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  inquiryType: string;
};

function parseLead(body: Record<string, unknown>): LeadBody {
  return {
    firstName: String(body.firstName ?? '').trim(),
    lastName: String(body.lastName ?? '').trim(),
    email: String(body.email ?? '').trim(),
    phone: String(body.phone ?? '').trim(),
    message: String(body.message ?? '').trim(),
    inquiryType: String(body.inquiryType ?? '').trim(),
  };
}

export async function POST(request: Request) {
  try {
    const lead = parseLead(await request.json());

    if (!lead.firstName || !lead.lastName || !lead.email || !lead.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const composedMessage = [
      lead.inquiryType ? `Inquiry type: ${lead.inquiryType}` : '',
      lead.message,
    ]
      .filter(Boolean)
      .join('\n\n');

    const fub = await sendLeadToFollowUpBoss({
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      message: composedMessage || undefined,
      source: 'Website Contact Form',
      tags: ['Website Lead', 'AlianteHomesForSale.com', lead.inquiryType || 'New Inquiry'],
    });

    if (!process.env.FOLLOW_UP_BOSS_API_KEY || !process.env.FOLLOW_UP_BOSS_BASE_URL) {
      return NextResponse.json(
        {
          error:
            'Online form is not connected. Call (702) 707-7273 or email DrDuffy@AlianteHomesForSale.com.',
        },
        { status: 503 }
      );
    }

    if (!fub) {
      return NextResponse.json(
        {
          error:
            'We could not save this inquiry. Call (702) 707-7273 so we do not miss your request.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        error: 'Something went wrong. Call (702) 707-7273 so we do not miss your request.',
      },
      { status: 500 }
    );
  }
}
