# RealScout + Follow Up Boss + Homebot Integration Strategy

**Date:** June 23, 2026  
**Site:** aliantehomesforsale.com  
**Agent:** Dr. Jan Duffy (Agent ID: QWdlbnQtMjI1MDUw)

---

## Executive Summary

Comprehensive integration strategy for connecting three core real estate platforms:
- **RealScout**: Property search and client matching (via Zapier MCP)
- **Follow Up Boss (FUB)**: CRM with AI intelligence layer
- **Homebot**: Home valuation and client engagement platform

**Goals:**
1. Automated lead sync across all platforms
2. Single source of truth for contact data
3. Intelligent follow-up based on client behavior
4. Seamless property search → valuation → CRM workflow
5. Enhanced client experience with consistent data

---

## Platform Capabilities

### RealScout (via Zapier MCP)
**Tool:** `zapier__realscout_create_client`

**Capabilities:**
- Create clients with buyer/seller profiles
- Track financial state (pre-qualified, cash buyer, etc.)
- Record lead sources
- Property preference tracking
- Search behavior analytics

**Key Fields:**
- `first_name`, `last_name`, `email`, `phone_number`
- `lead_source` (Website, Referral, Open House, etc.)
- `financial_state` (pre-qualified, cash, needs-financing)
- `buyer_or_seller` (buyer, seller, both)
- `buyer_notes`, `seller_notes`

### Follow Up Boss
**Primary Tools:**
- `create_person` - Create/update contacts
- `create_deal` - Track transactions
- `create_task` - Automated follow-ups
- `create_note` - Log interactions
- `ace_memory_remember` - Store client preferences
- `ai_engine_get_person_intelligence` - Get AI scoring
- `recommend_next_action` - AI-powered next steps

**Capabilities:**
- Full CRM with contact/deal/task management
- AI intelligence layer (contact scoring, pipeline analytics)
- Memory system for client preferences
- Automated action plans
- Speed-to-lead tracking
- Revenue at risk monitoring

**Key Fields:**
- `name`, `emails`, `phones`
- `source` - Lead source tracking
- `stage` - Pipeline stage
- `custom_fields` - Extensible metadata
- AI metadata: scores, behavioral signals, intelligence

### Homebot
**Primary Tools:**
- `homebot_create_client` - Create client accounts
- `homebot_create_home` - Add property to client
- `homebot_find_client_by_email` - Check for existing clients
- `homebot_update_client` - Update client information

**Capabilities:**
- Automated home valuation reports
- Market update emails
- Buyer search criteria tracking
- Client engagement tracking
- Property CMA generation

**Key Fields:**
- `email`, `first_name`, `last_name`, `phone`
- `home_address`, `city`, `state`, `zip_code`
- `buying` (true/false) - Buyer intent
- `selling` (true/false) - Seller intent
- `agent_id` - Agent assignment

---

## Data Flow Architecture

### Primary Flow: Website Lead → FUB → RealScout → Homebot

```
┌─────────────────┐
│  Website Form   │
│  Contact/Search │
└────────┬────────┘
         │
         ▼
┌─────────────────────────┐
│  Follow Up Boss (FUB)   │  ← Primary system of record
│  - Contact created      │
│  - AI scoring           │
│  - Task assignment      │
└────────┬────────────────┘
         │
         ├─────────────────────────────┐
         │                             │
         ▼                             ▼
┌─────────────────┐          ┌─────────────────┐
│   RealScout     │          │    Homebot      │
│  - Client sync  │          │  - Client sync  │
│  - Search prefs │          │  - Valuation    │
└─────────────────┘          └─────────────────┘
```

### Trigger Points

#### 1. New Lead Captured (Website Form)
**Trigger:** User submits contact form
**Actions:**
1. Create contact in FUB (`create_person`)
2. Check for duplicate in Homebot (`homebot_find_client_by_email`)
3. Create RealScout client if buyer (`realscout_create_client`)
4. Create Homebot client (`homebot_create_client`)
5. Log initial note in FUB with sync status

#### 2. Property Search Activity (RealScout Widget)
**Trigger:** User favorites property, saves search
**Actions:**
1. Update FUB contact with property preferences (custom field)
2. Create FUB note with property details
3. Update ace_memory with search criteria
4. Create automated follow-up task

#### 3. Stage Change (FUB Pipeline)
**Trigger:** Contact moves to "Under Contract"
**Actions:**
1. Update RealScout client status
2. Create Homebot home entry with purchased property
3. Log milestone in FUB
4. Trigger post-purchase follow-up sequence

#### 4. Homebot Engagement
**Trigger:** Client opens Homebot valuation email
**Actions:**
1. Log engagement in FUB notes
2. Create follow-up task if engagement threshold met
3. Update AI memory with market interest signals

---

## Field Mappings

### Contact Data (Universal Fields)

| FUB Field       | RealScout Field   | Homebot Field  | Notes                          |
|-----------------|-------------------|----------------|--------------------------------|
| `name`          | `first_name` + `last_name` | `first_name` + `last_name` | Split/join as needed |
| `emails[0]`     | `email`          | `email`        | Primary email                  |
| `phones[0]`     | `phone_number`   | `phone`        | Primary phone                  |
| `source`        | `lead_source`    | N/A            | Website, Referral, etc.        |
| `stage`         | N/A              | N/A            | FUB-specific pipeline stage    |

### Buyer-Specific Fields

| FUB Custom Field          | RealScout Field      | Homebot Field |
|---------------------------|----------------------|---------------|
| `price_range_min`         | Implicit in search   | N/A           |
| `price_range_max`         | Implicit in search   | N/A           |
| `property_type`           | Implicit in search   | N/A           |
| `neighborhoods`           | Implicit in search   | N/A           |
| `pre_qualified`           | `financial_state`    | N/A           |
| `buying_timeline`         | `buyer_notes`        | `buying=true` |

### Seller-Specific Fields

| FUB Custom Field          | RealScout Field      | Homebot Field        |
|---------------------------|----------------------|----------------------|
| `home_address`            | `seller_notes`       | `home_address`       |
| `home_value_estimate`     | N/A                  | Calculated by system |
| `selling_timeline`        | `seller_notes`       | `selling=true`       |
| `reason_for_selling`      | `seller_notes`       | N/A                  |

---

## API Architecture (Next.js)

### Proposed API Routes

#### `/api/integrations/lead-sync`
**Method:** POST  
**Purpose:** Central webhook for new lead processing  
**Flow:**
1. Validate incoming data
2. Create FUB contact
3. Parallel sync to RealScout + Homebot
4. Return success with sync status

**Request:**
```json
{
  "first_name": "John",
  "last_name": "Smith",
  "email": "john@example.com",
  "phone": "702-555-1234",
  "type": "buyer",
  "source": "website_search",
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
  "errors": []
}
```

#### `/api/integrations/property-interest`
**Method:** POST  
**Purpose:** Track property interest from RealScout widget  
**Flow:**
1. Identify FUB contact by email
2. Log property view/favorite in FUB notes
3. Update AI memory with property preferences
4. Create follow-up task if interest threshold met

#### `/api/integrations/stage-update`
**Method:** POST  
**Purpose:** Handle FUB stage changes (webhook)  
**Flow:**
1. Receive FUB webhook
2. Update RealScout/Homebot accordingly
3. Trigger stage-specific automations

#### `/api/integrations/homebot-webhook`
**Method:** POST  
**Purpose:** Receive Homebot engagement events  
**Flow:**
1. Validate Homebot webhook signature
2. Log engagement in FUB
3. Create follow-up task if needed

---

## Error Handling & Retry Logic

### Principles
1. **FUB as source of truth** - Always create in FUB first
2. **Non-blocking failures** - RealScout/Homebot sync failures don't block lead capture
3. **Retry with exponential backoff** - 3 attempts: 2s, 4s, 8s delays
4. **Dead letter queue** - Failed syncs logged for manual review

### Error Categories

#### Temporary Errors (Retry)
- Network timeouts
- Rate limiting (429)
- Service unavailable (503)
- Gateway errors (502, 504)

#### Permanent Errors (Log & Alert)
- Invalid data (400)
- Duplicate record (409)
- Authentication failure (401, 403)
- Missing required fields

### Implementation Pattern
```typescript
async function syncWithRetry(
  syncFn: () => Promise<any>,
  maxRetries = 3,
  baseDelay = 2000
): Promise<{ success: boolean; error?: string }> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      await syncFn();
      return { success: true };
    } catch (error) {
      if (isPermanentError(error) || attempt === maxRetries - 1) {
        return { success: false, error: error.message };
      }
      await delay(baseDelay * Math.pow(2, attempt));
    }
  }
}
```

---

## Authentication Strategy

### Follow Up Boss
**Method:** API Key  
**Storage:** Environment variable `FUB_API_KEY`  
**Security:** Server-side only, never exposed to client  
**Tool Access:** Via MCP `mcp__Followup_Ace__*` tools

### RealScout
**Method:** Via Zapier MCP integration  
**Storage:** Zapier configuration handles auth  
**Security:** MCP server manages credentials  
**Tool Access:** Via `zapier__realscout_create_client`

### Homebot
**Method:** Via Zapier MCP integration  
**Storage:** Zapier configuration handles auth  
**Security:** MCP server manages credentials  
**Tool Access:** Via `zapier__homebot_*` tools

### Environment Variables Required
```bash
# .env.local
FUB_API_KEY=your_fub_api_key_here
ZAPIER_NLA_API_KEY=your_zapier_api_key_here

# Webhook secrets for validation
FUB_WEBHOOK_SECRET=your_webhook_secret_here
HOMEBOT_WEBHOOK_SECRET=your_webhook_secret_here
```

---

## AI Intelligence Integration (FUB)

### Leveraging FUB AI Engine

#### Contact Scoring
**Tool:** `ai_engine_get_person_intelligence`  
**Use Cases:**
- Prioritize hot leads for immediate follow-up
- Identify at-risk contacts before they go cold
- Score property interest level

#### Automated Actions
**Tool:** `recommend_next_action`  
**Use Cases:**
- Suggest next best contact method (call, text, email)
- Recommend optimal follow-up timing
- Generate personalized message drafts

#### Memory System
**Tool:** `ace_memory_remember`, `ace_memory_recall`  
**Use Cases:**
- Store client property preferences from RealScout
- Remember Homebot engagement patterns
- Track communication history across platforms

#### Morning Triage
**Tool:** `run_morning_triage`  
**Use Cases:**
- Daily digest of high-priority actions
- At-risk deals requiring attention
- New leads requiring speed-to-lead response

---

## Implementation Phases

### Phase 1: Core Contact Sync (Week 1)
**Goal:** Bidirectional contact sync FUB ↔ RealScout ↔ Homebot
- [x] Strategy document (this file)
- [ ] Build unified contact form component
- [ ] Create `/api/integrations/lead-sync` endpoint
- [ ] Test sync with sample contacts
- [ ] Validate data integrity across platforms

### Phase 2: Property Interest Tracking (Week 2)
**Goal:** Track and act on property search behavior
- [ ] Integrate RealScout widget callbacks
- [ ] Create `/api/integrations/property-interest` endpoint
- [ ] Log property views in FUB
- [ ] Update AI memory with preferences
- [ ] Create automated follow-up tasks

### Phase 3: Homebot Integration (Week 3)
**Goal:** Automated valuation and engagement tracking
- [ ] Add Homebot widget to website
- [ ] Create client sync for homeowners
- [ ] Set up Homebot webhook endpoint
- [ ] Log engagement in FUB
- [ ] Trigger follow-ups based on engagement

### Phase 4: AI Intelligence Dashboard (Week 4)
**Goal:** Visualize FUB AI insights on website dashboard
- [ ] Create dashboard component
- [ ] Display contact scores
- [ ] Show recommended actions
- [ ] At-risk deals widget
- [ ] Pipeline analytics

### Phase 5: Advanced Automation (Week 5-6)
**Goal:** Intelligent, context-aware automations
- [ ] Stage-based automations (e.g., under contract → Homebot)
- [ ] Behavioral triggers (e.g., 3+ property views → call task)
- [ ] Engagement-based nurturing
- [ ] Predictive next actions
- [ ] Review generation system

---

## Success Metrics

### Lead Management
- **Lead capture rate:** % of website visitors submitting forms
- **Sync success rate:** % of leads synced to all 3 platforms
- **Sync latency:** Time from form submit to all platforms synced
- **Error rate:** % of failed syncs requiring manual intervention

### Engagement
- **RealScout usage:** % of leads using property search
- **Homebot open rate:** % of valuation emails opened
- **Response time:** Time from inquiry to first contact
- **Follow-up completion:** % of automated tasks completed

### Conversion
- **Lead-to-appointment:** % of leads booking appointments
- **Appointment-to-contract:** % of appointments converting
- **Source ROI:** Revenue by lead source
- **AI score correlation:** Correlation between AI score and conversion

### Data Quality
- **NAP consistency:** Name/Address/Phone match across platforms
- **Duplicate rate:** % of duplicate records created
- **Data completeness:** % of required fields populated
- **Manual corrections:** Number of manual data fixes needed

---

## Risk Mitigation

### Data Privacy & Compliance
- **GDPR/CCPA compliance:** Explicit consent for data processing
- **Data retention:** Clear policies for data deletion
- **Audit trail:** Log all sync operations with timestamps
- **PII protection:** Encrypt sensitive data in transit and at rest

### Platform Dependencies
- **API rate limits:** Monitor usage, implement backoff
- **Service outages:** Graceful degradation, queue for retry
- **Breaking changes:** Monitor API changelogs, version pinning
- **Vendor lock-in:** Abstract integrations behind interfaces

### Technical Debt
- **Code duplication:** Shared utilities for common operations
- **Test coverage:** Unit tests for sync logic, integration tests
- **Documentation:** Keep this doc updated with changes
- **Monitoring:** Error tracking (Sentry), uptime monitoring

---

## Next Steps

1. **Review this strategy** with stakeholders
2. **Set up development environment** with test accounts
3. **Create unified contact form** (Task #3)
4. **Build lead sync API endpoint** (Task #2)
5. **Test with sample data** before production
6. **Deploy Phase 1** and monitor for 1 week
7. **Iterate based on metrics** before Phase 2

---

## Appendices

### Appendix A: FUB Custom Fields

Custom fields to create in Follow Up Boss:

```json
{
  "property_preferences": {
    "type": "text",
    "description": "JSON string of property search criteria from RealScout"
  },
  "realscout_synced": {
    "type": "boolean",
    "description": "Whether contact is synced to RealScout"
  },
  "homebot_synced": {
    "type": "boolean",
    "description": "Whether contact is synced to Homebot"
  },
  "last_property_view": {
    "type": "date",
    "description": "Most recent property view timestamp"
  },
  "property_view_count": {
    "type": "number",
    "description": "Total number of properties viewed"
  },
  "homebot_engagement_score": {
    "type": "number",
    "description": "Homebot email engagement score (0-100)"
  }
}
```

### Appendix B: Webhook Payloads

#### FUB Webhook Example (New Contact)
```json
{
  "event": "person.created",
  "data": {
    "id": 12345,
    "name": "John Smith",
    "emails": ["john@example.com"],
    "phones": ["7025551234"],
    "source": "Website",
    "created": "2026-06-23T10:30:00Z"
  }
}
```

#### Homebot Webhook Example (Email Opened)
```json
{
  "event": "email.opened",
  "data": {
    "client_id": "client_abc123",
    "email": "john@example.com",
    "report_type": "valuation",
    "opened_at": "2026-06-23T14:45:00Z"
  }
}
```

### Appendix C: Testing Checklist

- [ ] Create test contact in FUB
- [ ] Verify sync to RealScout
- [ ] Verify sync to Homebot
- [ ] Test duplicate detection
- [ ] Test error handling (network failure)
- [ ] Test error handling (invalid data)
- [ ] Test retry logic
- [ ] Test webhook validation
- [ ] Test API rate limiting
- [ ] Load test (100 concurrent leads)
- [ ] Security audit (OWASP top 10)
- [ ] Data privacy review (PII handling)

---

**Document Status:** ✅ Strategy Complete  
**Next Task:** Task #2 - Build automated lead sync component  
**Last Updated:** June 23, 2026
