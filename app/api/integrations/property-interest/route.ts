import { NextRequest, NextResponse } from 'next/server';

/**
 * Property Interest Tracking API
 *
 * Receives property interaction events from RealScout widget:
 * - Property views
 * - Property favorites
 * - Search refinements
 *
 * Actions:
 * 1. Identify FUB contact by email
 * 2. Log property view/favorite in FUB notes
 * 3. Update AI memory with property preferences
 * 4. Create follow-up task if interest threshold met
 *
 * Integration Points:
 * - RealScout widget callbacks
 * - FUB AI memory system
 * - FUB automated tasks
 */

interface PropertyInterestRequest {
  email: string;
  event_type: 'view' | 'favorite' | 'unfavorite' | 'search';
  property?: {
    address: string;
    city: string;
    state: string;
    zip: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    mls_number?: string;
    url?: string;
  };
  search_criteria?: {
    min_price?: number;
    max_price?: number;
    bedrooms?: number;
    bathrooms?: number;
    neighborhoods?: string[];
    property_types?: string[];
  };
  timestamp?: string;
}

/**
 * Find FUB contact by email
 */
async function findFUBContact(email: string): Promise<string | null> {
  console.log('[FUB] Finding contact by email:', email);

  // TODO: Call mcp__Followup_Ace__fetch_people with email filter
  // const people = await fetchPeople({ email });
  // if (people && people.length > 0) {
  //   return people[0].id;
  // }
  // return null;

  // Mock for now
  return 'fub_contact_123';
}

/**
 * Log property interaction in FUB notes
 */
async function logPropertyNote(
  contactId: string,
  eventType: string,
  property: PropertyInterestRequest['property']
): Promise<void> {
  if (!property) return;

  const noteText = formatPropertyNote(eventType, property);
  console.log('[FUB] Creating note:', noteText);

  // TODO: Call mcp__Followup_Ace__create_note
  // await createNote({
  //   person_id: contactId,
  //   body: noteText,
  // });
}

/**
 * Update FUB AI memory with property preferences
 */
async function updateAIMemory(
  contactId: string,
  eventType: string,
  property?: PropertyInterestRequest['property'],
  searchCriteria?: PropertyInterestRequest['search_criteria']
): Promise<void> {
  const memoryFacts: string[] = [];

  if (property) {
    memoryFacts.push(
      `${eventType === 'favorite' ? 'Favorited' : 'Viewed'} property at ${property.address}, ${property.city} ($${property.price.toLocaleString()}, ${property.bedrooms}bd/${property.bathrooms}ba)`
    );

    // Extract preferences
    if (property.price >= 1000000) {
      memoryFacts.push('Interested in luxury properties ($1M+)');
    }
    if (property.sqft >= 3000) {
      memoryFacts.push('Prefers larger homes (3000+ sqft)');
    }
    if (property.bedrooms >= 4) {
      memoryFacts.push('Needs 4+ bedrooms');
    }
  }

  if (searchCriteria) {
    if (searchCriteria.min_price || searchCriteria.max_price) {
      memoryFacts.push(
        `Budget: $${searchCriteria.min_price?.toLocaleString() || '?'} - $${searchCriteria.max_price?.toLocaleString() || '?'}`
      );
    }
    if (searchCriteria.neighborhoods && searchCriteria.neighborhoods.length > 0) {
      memoryFacts.push(`Interested in: ${searchCriteria.neighborhoods.join(', ')}`);
    }
    if (searchCriteria.property_types && searchCriteria.property_types.length > 0) {
      memoryFacts.push(`Property types: ${searchCriteria.property_types.join(', ')}`);
    }
  }

  console.log('[FUB AI Memory] Storing facts:', memoryFacts);

  // TODO: Call mcp__Followup_Ace__ace_memory_remember for each fact
  // for (const fact of memoryFacts) {
  //   await aceMemoryRemember({
  //     person_id: contactId,
  //     fact: fact,
  //     category: 'property_preferences',
  //   });
  // }
}

/**
 * Get contact's property interaction count
 */
async function getInteractionCount(contactId: string): Promise<number> {
  console.log('[FUB] Getting interaction count for:', contactId);

  // TODO: Query FUB custom fields for property_view_count
  // const person = await fetchPersonById(contactId);
  // return person.custom_fields?.property_view_count || 0;

  // Mock for now
  return 2;
}

/**
 * Update contact's interaction count
 */
async function updateInteractionCount(contactId: string, count: number): Promise<void> {
  console.log('[FUB] Updating interaction count:', count);

  // TODO: Call mcp__Followup_Ace__edit_person
  // await editPerson(contactId, {
  //   custom_fields: {
  //     property_view_count: count,
  //     last_property_view: new Date().toISOString(),
  //   }
  // });
}

/**
 * Create follow-up task if threshold met
 */
async function maybeCreateFollowUpTask(
  contactId: string,
  interactionCount: number,
  property?: PropertyInterestRequest['property']
): Promise<void> {
  // Threshold: 3+ interactions = create task
  if (interactionCount < 3) {
    console.log('[FUB] Interaction count below threshold, skipping task creation');
    return;
  }

  const taskDescription = property
    ? `Follow up on property interest: ${property.address}, ${property.city} (${interactionCount} total interactions)`
    : `Follow up on property search activity (${interactionCount} total interactions)`;

  console.log('[FUB] Creating follow-up task:', taskDescription);

  // TODO: Call mcp__Followup_Ace__create_task
  // await createTask({
  //   person_id: contactId,
  //   description: taskDescription,
  //   due_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
  //   priority: interactionCount >= 5 ? 'high' : 'normal',
  // });
}

/**
 * Get AI-powered next action recommendation
 */
async function getRecommendedAction(
  contactId: string,
  interactionCount: number
): Promise<string | null> {
  if (interactionCount < 3) return null;

  console.log('[FUB AI] Getting recommended next action');

  // TODO: Call mcp__Followup_Ace__recommend_next_action
  // const recommendation = await recommendNextAction({ person_id: contactId });
  // return recommendation.action;

  // Mock for now
  if (interactionCount >= 5) {
    return 'Call contact to discuss properties viewed and schedule showing';
  } else if (interactionCount >= 3) {
    return 'Send personalized email with similar properties';
  }
  return null;
}

/**
 * Format property note text
 */
function formatPropertyNote(
  eventType: string,
  property: PropertyInterestRequest['property']
): string {
  if (!property) return '';

  const action = eventType === 'favorite' ? '⭐ Favorited' : '👁 Viewed';
  const lines = [
    `${action} Property`,
    `📍 ${property.address}, ${property.city}, ${property.state} ${property.zip}`,
    `💰 $${property.price.toLocaleString()}`,
    `🛏 ${property.bedrooms} bed | 🛁 ${property.bathrooms} bath | 📐 ${property.sqft.toLocaleString()} sqft`,
  ];

  if (property.mls_number) {
    lines.push(`MLS# ${property.mls_number}`);
  }
  if (property.url) {
    lines.push(`🔗 ${property.url}`);
  }

  lines.push(`🕐 ${new Date().toLocaleString()}`);

  return lines.join('\n');
}

/**
 * Validate incoming request
 */
function validateRequest(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    errors.push('email is required and must be a valid email address');
  }

  if (!data.event_type || !['view', 'favorite', 'unfavorite', 'search'].includes(data.event_type)) {
    errors.push('event_type must be one of: view, favorite, unfavorite, search');
  }

  if (data.event_type !== 'search' && !data.property) {
    errors.push('property is required for view/favorite/unfavorite events');
  }

  if (data.event_type === 'search' && !data.search_criteria) {
    errors.push('search_criteria is required for search events');
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

    const data: PropertyInterestRequest = body;

    // Step 1: Find FUB contact
    console.log('[Property Interest] Processing event:', data.event_type, 'for', data.email);
    const contactId = await findFUBContact(data.email);

    if (!contactId) {
      console.log('[Property Interest] Contact not found, skipping');
      return NextResponse.json(
        {
          success: false,
          message: 'Contact not found in CRM',
        },
        { status: 404 }
      );
    }

    // Step 2: Log property interaction
    if (data.property && data.event_type !== 'unfavorite') {
      await logPropertyNote(contactId, data.event_type, data.property);
    }

    // Step 3: Update AI memory
    await updateAIMemory(contactId, data.event_type, data.property, data.search_criteria);

    // Step 4: Update interaction count
    const currentCount = await getInteractionCount(contactId);
    const newCount = currentCount + 1;
    await updateInteractionCount(contactId, newCount);

    // Step 5: Create follow-up task if threshold met
    await maybeCreateFollowUpTask(contactId, newCount, data.property);

    // Step 6: Get AI recommendation (if applicable)
    const recommendation = await getRecommendedAction(contactId, newCount);

    const duration = Date.now() - startTime;
    console.log(`[Property Interest] Completed in ${duration}ms`);

    return NextResponse.json({
      success: true,
      contact_id: contactId,
      interaction_count: newCount,
      task_created: newCount >= 3,
      ai_recommendation: recommendation,
    });
  } catch (error: any) {
    console.error('[Property Interest] Unexpected error:', error);
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
    service: 'property-interest',
    timestamp: new Date().toISOString(),
  });
}
