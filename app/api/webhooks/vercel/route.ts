import crypto from 'node:crypto';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Simple webhook signature verification
function verifySignature(body: string, signature: string, secret: string): boolean {
  const expectedSignature = crypto.createHmac('sha256', secret).update(body).digest('hex');

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(`sha256=${expectedSignature}`));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-vercel-signature');

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
    }

    // Verify webhook signature for security
    const isValid = verifySignature(
      body,
      signature,
      process.env.WEBHOOK_SECRET || 'default-secret'
    );

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const data = JSON.parse(body);

    // Check if this is a deployment failure
    if (data.type === 'deployment.failed') {
      console.log('🚨 Deployment failed, triggering Cursor fix...');

      // In production, this would trigger the Cursor integration service
      // For now, we'll log the error details
      const { deployment, project } = data.payload;
      console.log('Project ID:', project?.id);
      console.log('Deployment ID:', deployment?.id);
      console.log('Error:', deployment?.error);

      // TODO: Integrate with Cursor AI service
      // await triggerCursorFix(data.payload);
    }

    return NextResponse.json({ received: true, type: data.type });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
