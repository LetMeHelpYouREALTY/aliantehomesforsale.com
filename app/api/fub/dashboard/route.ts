import { NextRequest, NextResponse } from 'next/server';

/**
 * Follow Up Boss AI Dashboard API
 *
 * Aggregates AI intelligence data from FUB:
 * - Contact intelligence scores
 * - At-risk deals
 * - Pipeline analytics by stage
 * - Recommended next actions
 *
 * Uses FUB MCP tools to fetch real-time AI insights
 */

interface ContactIntelligence {
  contact_id: string;
  name: string;
  email: string;
  score: number;
  engagement_level: 'hot' | 'warm' | 'cold';
  last_interaction: string;
  recommended_action: string;
  behavioral_signals: string[];
}

interface AtRiskDeal {
  deal_id: string;
  contact_name: string;
  property_address: string;
  stage: string;
  value: number;
  days_in_stage: number;
  risk_factors: string[];
  recommended_action: string;
}

interface PipelineStage {
  stage_name: string;
  count: number;
  total_value: number;
  avg_days_in_stage: number;
}

/**
 * Get top contacts by AI intelligence score
 */
async function getTopContactsByScore(limit = 10): Promise<ContactIntelligence[]> {
  console.log('[FUB Dashboard] Fetching top contacts by AI score');

  // TODO: Call mcp__Followup_Ace__benchmark_my_pipeline or similar
  // TODO: Call mcp__Followup_Ace__ai_engine_get_person_intelligence for each contact

  // Mock data for now
  const mockContacts: ContactIntelligence[] = [
    {
      contact_id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      score: 95,
      engagement_level: 'hot',
      last_interaction: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      recommended_action: 'Call to schedule showing for Prominence property',
      behavioral_signals: ['Viewed 5 properties', 'Pre-qualified $800K', 'Responded within 5min'],
    },
    {
      contact_id: '2',
      name: 'Michael Chen',
      email: 'mchen@example.com',
      score: 88,
      engagement_level: 'hot',
      last_interaction: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      recommended_action: 'Send comparable properties in Sun City Aliante',
      behavioral_signals: ['Favorited 3 properties', '55+ buyer', 'Active searcher'],
    },
    {
      contact_id: '3',
      name: 'Jennifer Martinez',
      email: 'jmartinez@example.com',
      score: 76,
      engagement_level: 'warm',
      last_interaction: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      recommended_action: 'Follow up on seller consultation',
      behavioral_signals: ['Requested valuation', 'Selling timeline: 3 months'],
    },
    {
      contact_id: '4',
      name: 'David Thompson',
      email: 'dthompson@example.com',
      score: 68,
      engagement_level: 'warm',
      last_interaction: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
      recommended_action: 'Send new construction updates',
      behavioral_signals: ['Interested in builders', 'Budget: $600-700K'],
    },
    {
      contact_id: '5',
      name: 'Lisa Anderson',
      email: 'landerson@example.com',
      score: 52,
      engagement_level: 'cold',
      last_interaction: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      recommended_action: 'Re-engagement email with market update',
      behavioral_signals: ['No recent activity', 'Last search: 1 week ago'],
    },
  ];

  return mockContacts.slice(0, limit);
}

/**
 * Get at-risk deals requiring attention
 */
async function getAtRiskDeals(): Promise<AtRiskDeal[]> {
  console.log('[FUB Dashboard] Fetching at-risk deals');

  // TODO: Call mcp__Followup_Ace__get_at_risk_deals
  // TODO: Call mcp__Followup_Ace__recommend_next_action for each deal

  // Mock data for now
  const mockDeals: AtRiskDeal[] = [
    {
      deal_id: '1',
      contact_name: 'Robert Williams',
      property_address: '456 Prominence Blvd, North Las Vegas, NV 89084',
      stage: 'Under Contract',
      value: 725000,
      days_in_stage: 35,
      risk_factors: [
        'No contact in 10 days',
        'Financing contingency expires in 5 days',
        'Appraisal scheduled but not completed',
      ],
      recommended_action: 'Call to confirm appraisal status and financing timeline',
    },
    {
      deal_id: '2',
      contact_name: 'Patricia Davis',
      property_address: '789 Club Aliante Pkwy, North Las Vegas, NV 89084',
      stage: 'Offer Submitted',
      value: 585000,
      days_in_stage: 12,
      risk_factors: [
        'Competing offer received',
        'Buyer hesitant on price',
        'Hasn\'t viewed property in 7 days',
      ],
      recommended_action: 'Schedule urgent call to address concerns and strengthen offer',
    },
  ];

  return mockDeals;
}

/**
 * Get pipeline analytics by stage
 */
async function getPipelineByStage(): Promise<PipelineStage[]> {
  console.log('[FUB Dashboard] Fetching pipeline by stage');

  // TODO: Call mcp__Followup_Ace__get_pipeline_value_by_stage
  // TODO: Call mcp__Followup_Ace__fetch_deals with stage filters

  // Mock data for now
  const mockStages: PipelineStage[] = [
    {
      stage_name: 'New Lead',
      count: 28,
      total_value: 14500000,
      avg_days_in_stage: 3,
    },
    {
      stage_name: 'Qualified',
      count: 15,
      total_value: 8750000,
      avg_days_in_stage: 7,
    },
    {
      stage_name: 'Showing Scheduled',
      count: 12,
      total_value: 7200000,
      avg_days_in_stage: 5,
    },
    {
      stage_name: 'Offer Submitted',
      count: 5,
      total_value: 2800000,
      avg_days_in_stage: 4,
    },
    {
      stage_name: 'Under Contract',
      count: 8,
      total_value: 4600000,
      avg_days_in_stage: 21,
    },
    {
      stage_name: 'Closed',
      count: 42,
      total_value: 21500000,
      avg_days_in_stage: 0, // Completed deals
    },
  ];

  return mockStages;
}

/**
 * Main GET handler - Full dashboard data
 */
export async function GET(request: NextRequest) {
  const startTime = Date.now();

  try {
    console.log('[FUB Dashboard] Fetching dashboard data');

    // Fetch all data in parallel
    const [contactIntelligence, atRiskDeals, pipelineStages] = await Promise.all([
      getTopContactsByScore(10),
      getAtRiskDeals(),
      getPipelineByStage(),
    ]);

    // Calculate aggregated metrics
    const totalPipelineValue = pipelineStages.reduce(
      (sum, stage) => sum + stage.total_value,
      0
    );

    const hotLeadsCount = contactIntelligence.filter(
      (c) => c.engagement_level === 'hot'
    ).length;

    const closingStage = pipelineStages.find((s) => s.stage_name === 'Under Contract');
    const dealsClosingThisWeek = closingStage ? closingStage.count : 0;

    const dashboardData = {
      contact_intelligence: contactIntelligence,
      at_risk_deals: atRiskDeals,
      pipeline_stages: pipelineStages,
      total_pipeline_value: totalPipelineValue,
      hot_leads_count: hotLeadsCount,
      deals_closing_this_week: dealsClosingThisWeek,
      generated_at: new Date().toISOString(),
    };

    const duration = Date.now() - startTime;
    console.log(`[FUB Dashboard] Dashboard data fetched in ${duration}ms`);

    return NextResponse.json(dashboardData);
  } catch (error: any) {
    console.error('[FUB Dashboard] Error fetching dashboard data:', error);
    return NextResponse.json(
      {
        error: error.message || 'Failed to fetch dashboard data',
      },
      { status: 500 }
    );
  }
}

/**
 * Health check endpoint
 */
export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}
