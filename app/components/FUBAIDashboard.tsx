'use client';

import { useEffect, useState } from 'react';

/**
 * Follow Up Boss AI Intelligence Dashboard
 *
 * Displays real-time AI insights from Follow Up Boss:
 * - Contact intelligence scores
 * - Recommended next actions
 * - At-risk deals requiring attention
 * - Pipeline analytics by stage
 * - Team performance metrics
 *
 * Integration: Uses FUB MCP tools via API endpoints
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

interface DashboardData {
  contact_intelligence: ContactIntelligence[];
  at_risk_deals: AtRiskDeal[];
  pipeline_stages: PipelineStage[];
  total_pipeline_value: number;
  hot_leads_count: number;
  deals_closing_this_week: number;
}

interface FUBAIDashboardProps {
  className?: string;
  refreshInterval?: number; // Auto-refresh in milliseconds
  showContactScores?: boolean;
  showAtRiskDeals?: boolean;
  showPipelineAnalytics?: boolean;
}

export default function FUBAIDashboard({
  className = '',
  refreshInterval = 300000, // 5 minutes default
  showContactScores = true,
  showAtRiskDeals = true,
  showPipelineAnalytics = true,
}: FUBAIDashboardProps) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    fetchDashboardData();

    // Auto-refresh
    if (refreshInterval > 0) {
      const interval = setInterval(fetchDashboardData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);

  async function fetchDashboardData() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/fub/dashboard');
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }

      const dashboardData = await response.json();
      setData(dashboardData);
      setLastUpdated(new Date());
    } catch (err: any) {
      console.error('[FUB Dashboard] Error fetching data:', err);
      setError(err.message || 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  }

  function getEngagementColor(level: string): string {
    switch (level) {
      case 'hot': return '#dc2626'; // Red
      case 'warm': return '#f59e0b'; // Orange
      case 'cold': return '#3b82f6'; // Blue
      default: return '#6b7280'; // Gray
    }
  }

  function formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  function formatRelativeTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  }

  if (loading && !data) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-8 ${className}`}>
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-[#2c5aa0]"></div>
          <span className="ml-4 text-gray-600">Loading AI insights...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-6 ${className}`}>
        <h3 className="text-red-800 font-semibold mb-2">⚠ Error Loading Dashboard</h3>
        <p className="text-red-600">{error}</p>
        <button
          onClick={fetchDashboardData}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold" style={{ color: '#1a365d' }}>
          AI Intelligence Dashboard
        </h2>
        <div className="flex items-center space-x-4">
          {lastUpdated && (
            <span className="text-sm text-gray-500">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
          )}
          <button
            onClick={fetchDashboardData}
            disabled={loading}
            className="px-4 py-2 bg-[#2c5aa0] text-white rounded-lg hover:bg-[#1a365d] transition-colors disabled:opacity-50"
          >
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-[#2c5aa0] to-[#1a365d] text-white rounded-lg p-6">
          <div className="text-sm opacity-90 mb-2">Total Pipeline Value</div>
          <div className="text-3xl font-bold">{formatCurrency(data.total_pipeline_value)}</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-700 text-white rounded-lg p-6">
          <div className="text-sm opacity-90 mb-2">Hot Leads</div>
          <div className="text-3xl font-bold">{data.hot_leads_count}</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg p-6">
          <div className="text-sm opacity-90 mb-2">Closing This Week</div>
          <div className="text-3xl font-bold">{data.deals_closing_this_week}</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-lg p-6">
          <div className="text-sm opacity-90 mb-2">At Risk Deals</div>
          <div className="text-3xl font-bold">{data.at_risk_deals.length}</div>
        </div>
      </div>

      {/* Contact Intelligence Scores */}
      {showContactScores && data.contact_intelligence.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Top Contacts by AI Score
          </h3>
          <div className="space-y-4">
            {data.contact_intelligence.slice(0, 5).map((contact) => (
              <div
                key={contact.contact_id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="font-semibold text-lg">{contact.name}</div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: getEngagementColor(contact.engagement_level) }}
                    >
                      {contact.engagement_level.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{contact.email}</div>
                  <div className="text-sm text-gray-500 mt-2">
                    Last interaction: {formatRelativeTime(contact.last_interaction)}
                  </div>
                  {contact.behavioral_signals.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {contact.behavioral_signals.map((signal, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                        >
                          {signal}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="ml-6 text-right">
                  <div className="text-3xl font-bold" style={{ color: '#2c5aa0' }}>
                    {contact.score}
                  </div>
                  <div className="text-xs text-gray-500">AI Score</div>
                  <button
                    className="mt-3 px-4 py-2 bg-[#2c5aa0] text-white text-sm rounded hover:bg-[#1a365d] transition-colors"
                    onClick={() => alert(`Recommended: ${contact.recommended_action}`)}
                  >
                    View Action
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* At-Risk Deals */}
      {showAtRiskDeals && data.at_risk_deals.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-red-700">
            ⚠ At-Risk Deals Requiring Attention
          </h3>
          <div className="space-y-4">
            {data.at_risk_deals.map((deal) => (
              <div
                key={deal.deal_id}
                className="border-l-4 border-red-500 p-4 bg-red-50 rounded-r-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{deal.contact_name}</div>
                    <div className="text-sm text-gray-600 mt-1">{deal.property_address}</div>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <span className="text-gray-600">
                        Stage: <span className="font-semibold">{deal.stage}</span>
                      </span>
                      <span className="text-gray-600">
                        Value: <span className="font-semibold">{formatCurrency(deal.value)}</span>
                      </span>
                      <span className="text-red-600">
                        {deal.days_in_stage} days in stage
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="text-sm font-semibold text-gray-700 mb-1">Risk Factors:</div>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {deal.risk_factors.map((factor, idx) => (
                          <li key={idx}>{factor}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="ml-6">
                    <button
                      className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors whitespace-nowrap"
                      onClick={() => alert(`Recommended: ${deal.recommended_action}`)}
                    >
                      Take Action
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pipeline Analytics */}
      {showPipelineAnalytics && data.pipeline_stages.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Pipeline by Stage
          </h3>
          <div className="space-y-3">
            {data.pipeline_stages.map((stage) => (
              <div key={stage.stage_name} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">{stage.stage_name}</div>
                  <div className="text-sm text-gray-600">
                    Avg: {stage.avg_days_in_stage} days
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold" style={{ color: '#2c5aa0' }}>
                    {stage.count} deals
                  </div>
                  <div className="text-lg font-semibold text-gray-700">
                    {formatCurrency(stage.total_value)}
                  </div>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2c5aa0] rounded-full"
                    style={{
                      width: `${(stage.total_value / data.total_pipeline_value) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty States */}
      {!showContactScores && !showAtRiskDeals && !showPipelineAnalytics && (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <p className="text-gray-600">Enable dashboard sections to view AI insights</p>
        </div>
      )}
    </div>
  );
}

/**
 * Compact version for sidebar placement
 */
export function FUBAIDashboardCompact({ className = '' }: { className?: string }) {
  const [stats, setStats] = useState<{
    hot_leads: number;
    at_risk: number;
    pipeline_value: number;
  } | null>(null);

  useEffect(() => {
    fetch('/api/fub/dashboard/stats')
      .then((res) => res.json())
      .then(setStats)
      .catch(console.error);
  }, []);

  if (!stats) return null;

  return (
    <div className={`bg-gradient-to-br from-[#2c5aa0] to-[#1a365d] text-white rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-bold mb-4">AI Insights</h3>
      <div className="space-y-3">
        <div>
          <div className="text-2xl font-bold">{stats.hot_leads}</div>
          <div className="text-sm opacity-90">Hot Leads</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{stats.at_risk}</div>
          <div className="text-sm opacity-90">At Risk</div>
        </div>
        <div>
          <div className="text-2xl font-bold">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              notation: 'compact',
              maximumFractionDigits: 1,
            }).format(stats.pipeline_value)}
          </div>
          <div className="text-sm opacity-90">Pipeline</div>
        </div>
      </div>
      <a
        href="/dashboard"
        className="block mt-4 text-center px-4 py-2 bg-white text-[#2c5aa0] font-semibold rounded hover:bg-gray-100 transition-colors"
      >
        View Full Dashboard
      </a>
    </div>
  );
}
