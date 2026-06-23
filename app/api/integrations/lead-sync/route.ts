import { NextRequest, NextResponse } from 'next/server';

/**
 * Lead Sync API - Central webhook for new lead processing
 *
 * Flow:
 * 1. Validate incoming data
 * 2. Create FUB contact (primary system of record)
 * 3. Parallel sync to RealScout + Homebot
 * 4. Return success with sync status
 *
 * Error Handling:
 * - FUB creation failure = 500 error (critical)
 * - RealScout/Homebot failure = success with warnings (non-blocking)
 */

interface LeadSyncRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  type: 'buyer' | 'seller' | 'both';
  source: string;
  property_preferences?: {
    min_price?: number;
    max_price?: number;
    bedrooms?: number;
    bathrooms?: number;
    neighborhoods?: string[];
    property_types?: string[];
  };
  notes?: string;
}

interface SyncResult {
  success: boolean;
  fub_id?: string;
  realscout_synced: boolean;
  homebot_synced: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Retry helper with exponential backoff
 */
async function syncWithRetry<T>(
  syncFn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 2000
): Promise<{ success: boolean; data?: T; error?: string }> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const data = await syncFn();
      return { success: true, data };
    } catch (error: any) {
      const isPermanent =
        error.status === 400 || // Bad request
        error.status === 401 || // Unauthorized
        error.status === 403 || // Forbidden
        error.status === 409;   // Duplicate

      if (isPermanent || attempt === maxRetries - 1) {
        return { success: false, error: error.message || 'Unknown error' };
      }

      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, baseDelay * Math.pow(2, attempt)));
    }
  }
  return { success: false, error: 'Max retries exceeded' };
}

/**
 * Create contact in Follow Up Boss (primary system)
 */
async function createFUBContact(data: LeadSyncRequest): Promise<string> {
  // TODO: Replace with actual FUB MCP tool call
  // For now, simulating the call structure

  const fubPayload = {
    name: `${data.first_name} ${data.last_name}`,
    emails: [data.email],
    phones: data.phone ? [data.phone] : [],
    source: data.source,
    custom_fields: {
      property_preferences: JSON.stringify(data.property_preferences || {}),
      lead_type: data.type,
      realscout_synced: false,
      homebot_synced: false,
    },
  };

  console.log('[FUB] Creating contact:', fubPayload);

  // TODO: Call mcp__Followup_Ace__create_person
  // const result = await createPerson(fubPayload);
  // return result.id;

  // Mock response for now
  return 'fub_mock_' + Date.now();
}

/**
 * Create client in RealScout
 */
async function createRealScoutClient(data: LeadSyncRequest): Promise<void> {
  // Only sync buyers or both to RealScout
  if (data.type === 'seller') {
    return;
  }

  const financialState = data.property_preferences?.min_price && data.property_preferences.min_price >= 1000000
    ? 'qualified-high-net-worth'
    : 'needs-pre-qualification';

  const rsPayload = {
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    phone_number: data.phone || '',
    lead_source: mapSourceToRealScout(data.source),
    financial_state: financialState,
    buyer_or_seller: data.type === 'both' ? 'both' : 'buyer',
    buyer_notes: formatPropertyPreferences(data.property_preferences),
  };

  console.log('[RealScout] Creating client:', rsPayload);

  // TODO: Call zapier__realscout_create_client
  // await realScoutCreateClient(rsPayload);
}

/**
 * Create client in Homebot
 */
async function createHomebotClient(data: LeadSyncRequest, fubId: string): Promise<void> {
  // Check for duplicate first
  console.log('[Homebot] Checking for existing client:', data.email);

  // TODO: Call zapier__homebot_find_client_by_email
  // const existing = await homebotFindClientByEmail(data.email);
  // if (existing) {
  //   console.log('[Homebot] Client already exists, skipping');
  //   return;
  // }

  const hbPayload = {
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name,
    phone: data.phone || '',
    buying: data.type === 'buyer' || data.type === 'both',
    selling: data.type === 'seller' || data.type === 'both',
    agent_id: process.env.HOMEBOT_AGENT_ID || '',
  };

  console.log('[Homebot] Creating client:', hbPayload);

  // TODO: Call zapier__homebot_create_client
  // await homebotCreateClient(hbPayload);
}

/**
 * Update FUB contact with sync status
 */
async function updateFUBSyncStatus(
  fubId: string,
  realscoutSynced: boolean,
  homebotSynced: boolean
): Promise<void> {
  console.log('[FUB] Updating sync status:', { fubId, realscoutSynced, homebotSynced });

  // TODO: Call mcp__Followup_Ace__edit_person
  // await editPerson(fubId, {
  //   custom_fields: {
  //     realscout_synced: realscoutSynced,
  //     homebot_synced: homebotSynced,
  //   }
  // });

  // Create note with sync results
  const noteText = `Lead sync completed:\n- RealScout: ${realscoutSynced ? '✓' : '✗'}\n- Homebot: ${homebotSynced ? '✓' : '✗'}`;

  // TODO: Call mcp__Followup_Ace__create_note
  // await createNote({
  //   person_id: fubId,
  //   body: noteText,
  // });
}

/**
 * Helper: Map website source to RealScout source
 */
function mapSourceToRealScout(source: string): string {
  const sourceMap: Record<string, string> = {
    'website_search': 'Website',
    'website_contact': 'Website',
    'realscout_widget': 'Website',
    'referral': 'Referral',
    'open_house': 'Open House',
    'zillow': 'Zillow',
    'realtor_com': 'Realtor.com',
  };
  return sourceMap[source] || 'Website';
}

/**
 * Helper: Format property preferences for RealScout notes
 */
function formatPropertyPreferences(prefs?: LeadSyncRequest['property_preferences']): string {
  if (!prefs) return '';

  const parts: string[] = [];
  if (prefs.min_price || prefs.max_price) {
    parts.push(`Budget: $${prefs.min_price?.toLocaleString() || '?'} - $${prefs.max_price?.toLocaleString() || '?'}`);
  }
  if (prefs.bedrooms) {
    parts.push(`${prefs.bedrooms}+ beds`);
  }
  if (prefs.bathrooms) {
    parts.push(`${prefs.bathrooms}+ baths`);
  }
  if (prefs.neighborhoods?.length) {
    parts.push(`Areas: ${prefs.neighborhoods.join(', ')}`);
  }
  if (prefs.property_types?.length) {
    parts.push(`Types: ${prefs.property_types.join(', ')}`);
  }

  return parts.join(' | ');
}

/**
 * Validate incoming request
 */
function validateRequest(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.first_name || typeof data.first_name !== 'string') {
    errors.push('first_name is required and must be a string');
  }
  if (!data.last_name || typeof data.last_name !== 'string') {
    errors.push('last_name is required and must be a string');
  }
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    errors.push('email is required and must be a valid email address');
  }
  if (!data.type || !['buyer', 'seller', 'both'].includes(data.type)) {
    errors.push('type must be one of: buyer, seller, both');
  }
  if (!data.source || typeof data.source !== 'string') {
    errors.push('source is required and must be a string');
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Main POST handler
 */
export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    const body = await request.json();

    // Validate request
    const validation = validateRequest(body);
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const data: LeadSyncRequest = body;
    const result: SyncResult = {
      success: false,
      realscout_synced: false,
      homebot_synced: false,
      errors: [],
      warnings: [],
    };

    // Step 1: Create in FUB (critical - must succeed)
    console.log('[Lead Sync] Creating FUB contact for:', data.email);
    const fubResult = await syncWithRetry(() => createFUBContact(data));

    if (!fubResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: [`FUB sync failed: ${fubResult.error}`],
        },
        { status: 500 }
      );
    }

    result.fub_id = fubResult.data;
    console.log('[Lead Sync] FUB contact created:', result.fub_id);

    // Step 2: Parallel sync to RealScout and Homebot (non-blocking)
    const [rsResult, hbResult] = await Promise.all([
      syncWithRetry(() => createRealScoutClient(data)),
      syncWithRetry(() => createHomebotClient(data, result.fub_id!)),
    ]);

    result.realscout_synced = rsResult.success;
    result.homebot_synced = hbResult.success;

    if (!rsResult.success) {
      result.warnings.push(`RealScout sync failed: ${rsResult.error}`);
    }
    if (!hbResult.success) {
      result.warnings.push(`Homebot sync failed: ${hbResult.error}`);
    }

    // Step 3: Update FUB with sync status
    await updateFUBSyncStatus(
      result.fub_id,
      result.realscout_synced,
      result.homebot_synced
    );

    result.success = true;

    const duration = Date.now() - startTime;
    console.log(`[Lead Sync] Completed in ${duration}ms:`, result);

    return NextResponse.json(result, { status: 200 });

  } catch (error: any) {
    console.error('[Lead Sync] Unexpected error:', error);
    return NextResponse.json(
      {
        success: false,
        errors: [error.message || 'Internal server error'],
      },
      { status: 500 }
    );
  }
}

/**
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'lead-sync',
    timestamp: new Date().toISOString(),
  });
}
