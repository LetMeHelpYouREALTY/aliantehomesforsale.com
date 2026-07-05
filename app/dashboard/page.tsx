import { Metadata } from 'next';
import FUBAIDashboard from '../components/FUBAIDashboard';

export const metadata: Metadata = {
  title: 'AI Intelligence Dashboard | Aliante Real Estate',
  description: 'Real-time AI insights for Follow Up Boss CRM - contact intelligence, at-risk deals, and pipeline analytics',
  robots: {
    index: false, // Private dashboard - don't index
    follow: false,
  },
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <FUBAIDashboard
          refreshInterval={300000} // 5 minutes
          showContactScores={true}
          showAtRiskDeals={true}
          showPipelineAnalytics={true}
        />
      </div>
    </main>
  );
}
