import Link from 'next/link';
import { marketAsOfLabel, marketSnapshot } from '../../lib/content/aliante-content';

/** Soft market context on /homes-for-sale — live numbers via RealScout MLS widgets */
export default function HomesMarketSnapshot() {
  return (
    <section
      className="py-16 px-4"
      style={{
        background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)',
      }}
      aria-labelledby="homes-market-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="homes-market-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Aliante Market Insights
          </h2>
          <p className="text-xl text-white/90">{marketAsOfLabel}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {marketSnapshot.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-white/70">{stat.note}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/market-report"
            className="inline-block py-3 px-8 rounded-lg font-semibold bg-white text-[#0A2540]"
          >
            View full market report
          </Link>
        </div>
      </div>
    </section>
  );
}
