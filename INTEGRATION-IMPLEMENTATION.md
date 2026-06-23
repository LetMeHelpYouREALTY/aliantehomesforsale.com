# RealScout + Follow Up Boss + Homebot - Implementation Guide

**Date:** June 23, 2026  
**Status:** 🟡 Core Infrastructure Complete - MCP Integration Pending

---

## Implementation Summary

Core integration infrastructure has been built for connecting RealScout, Follow Up Boss (FUB), and Homebot. The architecture is complete and ready for MCP tool integration.

### Files Created

#### Strategy & Documentation
1. **INTEGRATION-STRATEGY.md** - Comprehensive integration strategy (11 sections, 400+ lines)
2. **INTEGRATION-IMPLEMENTATION.md** - This file (implementation guide)

#### API Endpoints (Next.js App Router)
3. **app/api/integrations/lead-sync/route.ts** - Central lead sync endpoint
4. **app/api/integrations/property-interest/route.ts** - Property interaction tracking
5. **app/api/integrations/homebot-client/route.ts** - Homebot client creation

#### UI Components
6. **app/components/UnifiedContactForm.tsx** - Multi-platform contact form
7. **app/components/HomebotWidget.tsx** - Home valuation widget

---

## Architecture Overview

```
┌──────────────────────────────────────────────────────────────┐
│                     Website (Next.js 15)                      │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  Components                      API Routes                   │
│  ┌─────────────────────┐        ┌──────────────────────┐    │
│  │ UnifiedContactForm  │───────>│  /lead-sync          │    │
│  │ HomebotWidget       │───────>│  /homebot-client     │    │
│  │ RealScout Widget    │───────>│  /property-interest  │    │
│  └─────────────────────┘        └──────────────────────┘    │
│                                           │                   │
└───────────────────────────────────────────┼───────────────────┘
                                            │
                    ┌───────────────────────┼───────────────────────┐
                    │                       │                       │
                    ▼                       ▼                       ▼
          ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
          │  Follow Up Boss  │   │    RealScout     │   │     Homebot      │
          │                  │   │                  │   │                  │
          │  • CRM Core      │   │  • Property      │   │  • Valuations    │
          │  • AI Engine     │   │    Search        │   │  • Market        │
          │  • Memory        │   │  • Client Sync   │   │    Updates       │
          │  • Tasks         │   │  • Lead Source   │   │  • Engagement    │
          └──────────────────┘   └──────────────────┘   └──────────────────┘
               (via MCP)              (via Zapier MCP)      (via Zapier MCP)
```

---

## API Endpoints

### 1. Lead Sync API
**Endpoint:** `POST /api/integrations/lead-sync`  
**Purpose:** Central webhook for new lead processing

**Request:**
```json
{
  "first_name": "John",
  "last_name": "Smith",
  "email": "john@example.com",
  "phone": "702-555-1234",
  "type": "buyer",
  "source": "website_contact",
  "property_preferences": {
    "min_price": 500000,
    "max_price": 700000,
    "bedrooms": 3,
    "neighborhoods": ["Aliante", "Prominence"]
  }
}
```

**Response:**
```json
{
  "success": true,
  "fub_id": "12345",
  "realscout_synced": true,
  "homebot_synced": true,
  "errors": [],
  "warnings": []
}
```

**Flow:**
1. Validate incoming data
2. Create FUB contact (critical - must succeed)
3. Parallel sync to RealScout (buyers only) + Homebot
4. Update FUB with sync status
5. Return success with warnings for non-critical failures

**Error Handling:**
- FUB creation failure → 500 error (critical)
- RealScout/Homebot failure → success with warnings (non-blocking)
- Retry logic: 3 attempts with exponential backoff (2s, 4s, 8s)

### 2. Property Interest API
**Endpoint:** `POST /api/integrations/property-interest`  
**Purpose:** Track property interaction events from RealScout widget

**Request:**
```json
{
  "email": "john@example.com",
  "event_type": "favorite",
  "property": {
    "address": "123 Main St",
    "city": "North Las Vegas",
    "state": "NV",
    "zip": "89084",
    "price": 650000,
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 2800,
    "mls_number": "123456",
    "url": "https://..."
  }
}
```

**Response:**
```json
{
  "success": true,
  "contact_id": "fub_123",
  "interaction_count": 3,
  "task_created": true,
  "ai_recommendation": "Call contact to discuss properties..."
}
```

**Flow:**
1. Find FUB contact by email
2. Log property interaction in FUB notes
3. Update AI memory with property preferences
4. Increment interaction count
5. Create follow-up task if threshold met (3+ interactions)
6. Get AI-powered next action recommendation

**Thresholds:**
- 3+ interactions → Create normal priority task
- 5+ interactions → Create high priority task + AI recommendation

### 3. Homebot Client API
**Endpoint:** `POST /api/integrations/homebot-client`  
**Purpose:** Create Homebot clients and sync to FUB

**Request:**
```json
{
  "email": "john@example.com",
  "first_name": "John",
  "last_name": "Smith",
  "phone": "702-555-1234",
  "home_address": "123 Main St",
  "city": "North Las Vegas",
  "state": "NV",
  "zip_code": "89084",
  "source": "homebot_widget"
}
```

**Response:**
```json
{
  "success": true,
  "homebot_client_id": "hb_123",
  "homebot_home_id": "home_456",
  "fub_id": "fub_789",
  "task_created": true
}
```

**Flow:**
1. Check for existing Homebot client (avoid duplicates)
2. Create Homebot client
3. Create home record (if address provided)
4. Sync to FUB as seller lead
5. Log valuation request in FUB
6. Create high-priority follow-up task (2 hours)
7. Store AI memory facts (seller signals)

---

## Components

### UnifiedContactForm
**File:** `app/components/UnifiedContactForm.tsx`

**Features:**
- Lead type selection (buyer/seller/both)
- Property preferences for buyers
- Aliante neighborhood checkboxes
- Property type filters
- Real-time validation
- Loading/success/error states
- Auto-reset after submission

**Props:**
```typescript
{
  source?: string;           // Default: 'website_contact'
  defaultType?: LeadType;    // Default: 'buyer'
  onSuccess?: (result) => void;
  className?: string;
}
```

**Usage:**
```tsx
import UnifiedContactForm from '@/app/components/UnifiedContactForm';

<UnifiedContactForm
  source="homes_for_sale_page"
  defaultType="buyer"
  onSuccess={(result) => {
    console.log('Lead created:', result.fub_id);
  }}
/>
```

### HomebotWidget
**File:** `app/components/HomebotWidget.tsx`

**Features:**
- Three widget types: valuation, digest, cma
- Pre-fill support from URL params
- Engagement tracking
- Automatic FUB sync on submission
- Loading states and error handling
- Trust indicators (100% free, instant results, secure)

**Props:**
```typescript
{
  type?: 'digest' | 'cma' | 'valuation';
  prefill?: {
    email, firstName, lastName, phone,
    address, city, state, zip
  };
  className?: string;
  height?: string;
  onSubmit?: (data) => void;
  onEngagement?: (event) => void;
}
```

**Usage:**
```tsx
import HomebotWidget, { HomebotWidgetCompact } from '@/app/components/HomebotWidget';

// Full widget
<HomebotWidget
  type="valuation"
  height="600px"
  onSubmit={(data) => console.log('Submitted:', data)}
/>

// Compact version for sidebar
<HomebotWidgetCompact className="mt-8" />
```

---

## MCP Integration Points

### Follow Up Boss (Primary)
**Tools Required:**
- `mcp__Followup_Ace__create_person` - Create contacts
- `mcp__Followup_Ace__fetch_people` - Find existing contacts
- `mcp__Followup_Ace__edit_person` - Update custom fields
- `mcp__Followup_Ace__create_note` - Log interactions
- `mcp__Followup_Ace__create_task` - Automated follow-ups
- `mcp__Followup_Ace__ace_memory_remember` - Store AI facts
- `mcp__Followup_Ace__ace_memory_recall` - Retrieve AI facts
- `mcp__Followup_Ace__recommend_next_action` - AI recommendations
- `mcp__Followup_Ace__ai_engine_get_person_intelligence` - Contact scoring

**Custom Fields to Create:**
```json
{
  "property_preferences": "text",
  "realscout_synced": "boolean",
  "homebot_synced": "boolean",
  "last_property_view": "date",
  "property_view_count": "number",
  "homebot_engagement_score": "number"
}
```

### RealScout (via Zapier MCP)
**Tools Required:**
- `zapier__realscout_create_client` - Create RealScout clients

**Mapping:**
- `buyer_or_seller`: 'buyer' | 'seller' | 'both'
- `lead_source`: Mapped from website source
- `financial_state`: Inferred from price range
- `buyer_notes`: Formatted property preferences

### Homebot (via Zapier MCP)
**Tools Required:**
- `zapier__homebot_find_client_by_email` - Check duplicates
- `zapier__homebot_create_client` - Create clients
- `zapier__homebot_create_home` - Add home records
- `zapier__homebot_update_client` - Update client data

**Configuration:**
- `agent_id`: Set in environment variables
- `buying`: true for buyers
- `selling`: true for sellers/valuation requests

---

## Environment Variables

Create `.env.local` with:

```bash
# Follow Up Boss
FUB_API_KEY=your_fub_api_key_here

# Zapier (for RealScout + Homebot)
ZAPIER_NLA_API_KEY=your_zapier_api_key_here

# Homebot
HOMEBOT_AGENT_ID=your_homebot_agent_id
NEXT_PUBLIC_HOMEBOT_AGENT_ID=your_homebot_agent_id

# Webhook Secrets
FUB_WEBHOOK_SECRET=your_webhook_secret_here
HOMEBOT_WEBHOOK_SECRET=your_webhook_secret_here
```

---

## Next Steps - MCP Integration

### Phase 1: Connect FUB MCP Tools (Priority 1)

Replace mock implementations with actual MCP calls:

**File:** `app/api/integrations/lead-sync/route.ts`
```typescript
// Replace line ~50
async function createFUBContact(data: LeadSyncRequest): Promise<string> {
  const result = await mcp__Followup_Ace__create_person({
    name: `${data.first_name} ${data.last_name}`,
    emails: [data.email],
    phones: data.phone ? [data.phone] : [],
    source: data.source,
    custom_fields: {
      property_preferences: JSON.stringify(data.property_preferences || {}),
      lead_type: data.type,
    },
  });
  return result.id;
}
```

**File:** `app/api/integrations/property-interest/route.ts`
```typescript
// Replace line ~40
async function findFUBContact(email: string): Promise<string | null> {
  const people = await mcp__Followup_Ace__fetch_people({ email });
  return people && people.length > 0 ? people[0].id : null;
}

// Replace line ~55
async function logPropertyNote(contactId: string, eventType: string, property) {
  await mcp__Followup_Ace__create_note({
    person_id: contactId,
    body: formatPropertyNote(eventType, property),
  });
}
```

### Phase 2: Connect Zapier MCP Tools (Priority 2)

**File:** `app/api/integrations/lead-sync/route.ts`
```typescript
// Replace line ~85
async function createRealScoutClient(data: LeadSyncRequest): Promise<void> {
  if (data.type === 'seller') return;

  await zapier__realscout_create_client({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    phone_number: data.phone || '',
    lead_source: mapSourceToRealScout(data.source),
    financial_state: inferFinancialState(data.property_preferences),
    buyer_or_seller: data.type === 'both' ? 'both' : 'buyer',
    buyer_notes: formatPropertyPreferences(data.property_preferences),
  });
}
```

**File:** `app/api/integrations/homebot-client/route.ts`
```typescript
// Replace line ~25
async function findHomebotClient(email: string): Promise<boolean> {
  const result = await zapier__homebot_find_client_by_email({ email });
  return !!result;
}

// Replace line ~35
async function createHomebotClient(data: HomebotClientRequest): Promise<string> {
  const result = await zapier__homebot_create_client({
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name,
    phone: data.phone || '',
    agent_id: process.env.HOMEBOT_AGENT_ID || '',
    buying: false,
    selling: true,
  });
  return result.client_id;
}
```

### Phase 3: Test & Validate (Priority 3)

1. **Create test contact:**
```bash
curl -X POST http://localhost:3000/api/integrations/lead-sync \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Test",
    "last_name": "User",
    "email": "test@example.com",
    "phone": "702-555-1234",
    "type": "buyer",
    "source": "test",
    "property_preferences": {
      "min_price": 500000,
      "max_price": 700000
    }
  }'
```

2. **Verify in each system:**
   - FUB: Check contacts list for "Test User"
   - RealScout: Verify client created
   - Homebot: Check client list

3. **Test property interest:**
```bash
curl -X POST http://localhost:3000/api/integrations/property-interest \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "event_type": "favorite",
    "property": {
      "address": "123 Test St",
      "city": "North Las Vegas",
      "state": "NV",
      "zip": "89084",
      "price": 650000,
      "bedrooms": 4,
      "bathrooms": 3,
      "sqft": 2800
    }
  }'
```

4. **Verify AI features:**
   - Check FUB notes for property interaction
   - Verify AI memory facts stored
   - Confirm task created after 3+ interactions
   - Test AI recommendation engine

### Phase 4: Add Integration Pages (Priority 4)

Create pages that use the new components:

**app/contact/page.tsx** - Use UnifiedContactForm
**app/home-valuation/page.tsx** - Use HomebotWidget
**app/buyer-registration/page.tsx** - Use UnifiedContactForm with defaultType="buyer"

---

## Testing Checklist

- [ ] FUB contact creation works
- [ ] RealScout client sync works (buyers only)
- [ ] Homebot client sync works (all types)
- [ ] Property interest tracking logs correctly
- [ ] AI memory stores facts
- [ ] Tasks created at correct thresholds
- [ ] AI recommendations generate
- [ ] Error handling works (network failures)
- [ ] Retry logic functions correctly
- [ ] Duplicate detection works
- [ ] Custom fields populate correctly
- [ ] Notes format properly
- [ ] UnifiedContactForm submits successfully
- [ ] HomebotWidget loads and functions
- [ ] Environment variables load correctly
- [ ] All API health check endpoints respond

---

## Monitoring & Debugging

### Log Patterns

All API endpoints log with prefixes:
- `[FUB]` - Follow Up Boss operations
- `[RealScout]` - RealScout operations
- `[Homebot]` - Homebot operations
- `[Lead Sync]` - Lead sync endpoint
- `[Property Interest]` - Property interest endpoint
- `[Homebot Client]` - Homebot client endpoint
- `[FUB AI Memory]` - AI memory operations
- `[FUB AI]` - AI engine operations

### Health Check Endpoints

```bash
# Check all services
curl http://localhost:3000/api/integrations/lead-sync
curl http://localhost:3000/api/integrations/property-interest
curl http://localhost:3000/api/integrations/homebot-client
```

### Common Issues

**Issue:** FUB contact not found  
**Solution:** Check email format (lowercase), verify contact exists in FUB

**Issue:** RealScout sync fails for seller  
**Solution:** Expected behavior - RealScout only syncs buyers

**Issue:** Homebot duplicate error  
**Solution:** `find_client_by_email` should catch this - check implementation

**Issue:** AI memory not storing  
**Solution:** Verify `ace_memory_remember` tool is working, check person_id valid

**Issue:** Tasks not creating  
**Solution:** Check interaction count threshold (3+), verify `create_task` tool

---

## Success Metrics

### Lead Management
- **Lead capture rate:** Target 5%+ of website visitors
- **Sync success rate:** Target 95%+ across all platforms
- **Sync latency:** Target <3 seconds from form submit to all syncs complete
- **Error rate:** Target <1% requiring manual intervention

### Engagement
- **RealScout usage:** Target 40%+ of buyers using search
- **Homebot open rate:** Target 60%+ opening valuation emails
- **Response time:** Target <15 minutes from inquiry to first contact
- **Follow-up completion:** Target 90%+ of automated tasks completed

### Conversion
- **Lead-to-appointment:** Target 20%+ booking appointments
- **Appointment-to-contract:** Target 30%+ converting
- **AI score correlation:** Monitor correlation between score and conversion

---

**Implementation Status:** 🟡 Core Complete - MCP Integration Required  
**Next Action:** Connect FUB MCP tools in lead-sync/route.ts  
**Last Updated:** June 23, 2026
