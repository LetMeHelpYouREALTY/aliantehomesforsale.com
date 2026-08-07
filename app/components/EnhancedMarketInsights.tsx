import Link from 'next/link';
import { marketAsOfLabel, marketSnapshot } from '../../lib/content/aliante-content';

/**
 * Market glance using soft content objects — live numbers come from MLS/RealScout widgets.
 */
export default function EnhancedMarketInsights() {
  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)',
      }}
      aria-labelledby="market-glance-heading"
    >
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            id="market-glance-heading"
            className="speakable text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Aliante Market at a Glance
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hyperlocal North Las Vegas 89084 context — use live MLS search for current prices and
            inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {marketSnapshot.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8 text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-base sm:text-lg text-white/90 font-medium mb-2">{stat.label}</p>
              <p className="text-sm text-white/70 leading-snug">{stat.note}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/80 mb-6 text-base">{marketAsOfLabel}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/homes-for-sale"
              className="inline-block py-4 px-8 rounded-lg font-semibold text-lg bg-white text-[#0A2540]"
            >
              Search live listings
            </Link>
            <Link
              href="/market-report"
              className="inline-block py-4 px-8 rounded-lg font-semibold text-lg border-2 border-white text-white"
            >
              View market report
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
