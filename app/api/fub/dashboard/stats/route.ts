import { NextResponse } from 'next/server';

/**
 * FUB Dashboard Stats API - Compact
 *
 * Returns lightweight stats for compact dashboard widgets
 * - Hot leads count
 * - At-risk deals count
 * - Total pipeline value
 */

export async function GET() {
  try {
    // TODO: Replace with actual FUB MCP calls
    // These would use:
    // - mcp__Followup_Ace__benchmark_my_pipeline
    // - mcp__Followup_Ace__get_at_risk_deals
    // - mcp__Followup_Ace__get_pipeline_value_by_stage

    const stats = {
      hot_leads: 12,
      at_risk: 2,
      pipeline_value: 37850000,
    };

    return NextResponse.json(stats);
  } catch (error: any) {
    console.error('[FUB Dashboard Stats] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
