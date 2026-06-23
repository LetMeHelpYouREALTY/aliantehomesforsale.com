import { NextRequest, NextResponse } from 'next/server';

/**
 * Homebot Client Creation API
 *
 * Creates clients in Homebot and syncs to Follow Up Boss.
 * Used by HomebotWidget and other forms where homeowners request valuations.
 *
 * Flow:
 * 1. Check for existing Homebot client (avoid duplicates)
 * 2. Create Homebot client with home data
 * 3. Create/update FUB contact
 * 4. Log interaction in FUB
 * 5. Return success
 */

interface HomebotClientRequest {
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  home_address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  source: string;
  notes?: string;
}

/**
 * Check for existing Homebot client
 */
async function findHomebotClient(email: string): Promise<boolean> {
  console.log('[Homebot] Checking for existing client:', email);

  // TODO: Call zapier__homebot_find_client_by_email
  // const result = await homebotFindClientByEmail({ email });
  // return !!result;

  // Mock for now
  return false;
}

/**
 * Create Homebot client
 */
async function createHomebotClient(data: HomebotClientRequest): Promise<string> {
  const payload = {
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name,
    phone: data.phone || '',
    agent_id: process.env.HOMEBOT_AGENT_ID || '',
    buying: false, // Valuation request = existing homeowner
    selling: true,  // Likely interested in selling if requesting valuation
  };

  console.log('[Homebot] Creating client:', payload);

  // TODO: Call zapier__homebot_create_client
  // const result = await homebotCreateClient(payload);
  // return result.client_id;

  // Mock for now
  return 'hb_' + Date.now();
}

/**
 * Create home in Homebot
 */
async function createHomebotHome(
  clientEmail: string,
  homeData: {
    address: string;
    city: string;
    state: string;
    zip_code: string;
  }
): Promise<string> {
  const payload = {
    client_email: clientEmail,
    home_address: homeData.address,
    city: homeData.city,
    state: homeData.state,
    zip_code: homeData.zip_code,
  };

  console.log('[Homebot] Creating home:', payload);

  // TODO: Call zapier__homebot_create_home
  // const result = await homebotCreateHome(payload);
  // return result.home_id;

  // Mock for now
  return 'home_' + Date.now();
}

/**
 * Find or create FUB contact
 */
async function syncToFUB(data: HomebotClientRequest): Promise<string> {
  console.log('[FUB] Finding or creating contact:', data.email);

  // Check for existing contact
  // TODO: Call mcp__Followup_Ace__fetch_people
  // const existing = await fetchPeople({ email: data.email });
  // if (existing && existing.length > 0) {
  //   return existing[0].id;
  // }

  // Create new contact
  const fubPayload = {
    name: `${data.first_name} ${data.last_name}`,
    emails: [data.email],
    phones: data.phone ? [data.phone] : [],
    source: data.source,
    custom_fields: {
      homebot_synced: true,
      lead_type: 'seller',
      home_address: data.home_address || '',
    },
  };

  console.log('[FUB] Creating contact:', fubPayload);

  // TODO: Call mcp__Followup_Ace__create_person
  // const result = await createPerson(fubPayload);
  // return result.id;

  // Mock for now
  return 'fub_' + Date.now();
}

/**
 * Log Homebot valuation request in FUB
 */
async function logValuationRequest(
  fubId: string,
  homeAddress?: string
): Promise<void> {
  const noteText = homeAddress
    ? `🏠 Requested home valuation for ${homeAddress} via Homebot widget`
    : '🏠 Requested home valuation via Homebot widget';

  console.log('[FUB] Creating note:', noteText);

  // TODO: Call mcp__Followup_Ace__create_note
  // await createNote({
  //   person_id: fubId,
  //   body: noteText,
  // });
}

/**
 * Create follow-up task for valuation request
 */
async function createFollowUpTask(
  fubId: string,
  homeAddress?: string
): Promise<void> {
  const taskDescription = homeAddress
    ? `Follow up on home valuation request for ${homeAddress}`
    : 'Follow up on home valuation request';

  console.log('[FUB] Creating follow-up task');

  // TODO: Call mcp__Followup_Ace__create_task
  // await createTask({
  //   person_id: fubId,
  //   description: taskDescription,
  //   due_date: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours
  //   priority: 'high',
  // });
}

/**
 * Store AI memory fact
 */
async function storeAIMemory(fubId: string, homeAddress?: string): Promise<void> {
  const memoryFacts = [
    'Interested in home valuation',
    'Potential seller lead',
  ];

  if (homeAddress) {
    memoryFacts.push(`Current home: ${homeAddress}`);
  }

  console.log('[FUB AI Memory] Storing facts:', memoryFacts);

  // TODO: Call mcp__Followup_Ace__ace_memory_remember for each fact
  // for (const fact of memoryFacts) {
  //   await aceMemoryRemember({
  //     person_id: fubId,
  //     fact: fact,
  //     category: 'seller_signals',
  //   });
  // }
}

/**
 * Validate incoming request
 */
function validateRequest(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    errors.push('email is required and must be a valid email address');
  }
  if (!data.first_name || typeof data.first_name !== 'string') {
    errors.push('first_name is required and must be a string');
  }
  if (!data.last_name || typeof data.last_name !== 'string') {
    errors.push('last_name is required and must be a string');
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

    const data: HomebotClientRequest = body;

    // Step 1: Check for existing Homebot client
    console.log('[Homebot Client] Processing request for:', data.email);
    const existingClient = await findHomebotClient(data.email);

    let homebotClientId: string;
    let homebotHomeId: string | null = null;

    if (existingClient) {
      console.log('[Homebot Client] Client already exists, updating...');
      homebotClientId = 'existing';

      // TODO: Call zapier__homebot_update_client if needed
    } else {
      // Step 2: Create Homebot client
      homebotClientId = await createHomebotClient(data);

      // Step 3: Create home if address provided
      if (data.home_address && data.city && data.state && data.zip_code) {
        homebotHomeId = await createHomebotHome(data.email, {
          address: data.home_address,
          city: data.city,
          state: data.state,
          zip_code: data.zip_code,
        });
      }
    }

    // Step 4: Sync to FUB
    const fubId = await syncToFUB(data);

    // Step 5: Log valuation request
    await logValuationRequest(fubId, data.home_address);

    // Step 6: Create follow-up task (high priority for valuation requests)
    await createFollowUpTask(fubId, data.home_address);

    // Step 7: Store AI memory
    await storeAIMemory(fubId, data.home_address);

    const duration = Date.now() - startTime;
    console.log(`[Homebot Client] Completed in ${duration}ms`);

    return NextResponse.json({
      success: true,
      homebot_client_id: homebotClientId,
      homebot_home_id: homebotHomeId,
      fub_id: fubId,
      task_created: true,
    });
  } catch (error: any) {
    console.error('[Homebot Client] Unexpected error:', error);
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
    service: 'homebot-client',
    timestamp: new Date().toISOString(),
  });
}
