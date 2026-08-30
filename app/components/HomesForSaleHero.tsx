'use client';

import { heroImages } from '../../lib/site-images';
import AgentPhoto from './AgentPhoto';
import HeroBackground from './HeroBackground';

export default function HomesForSaleHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center px-4 py-16 overflow-hidden bg-[#0A2540]"
      aria-labelledby="homes-hero-heading"
    >
      <HeroBackground src={heroImages.homes.src} alt={heroImages.homes.alt} />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <AgentPhoto size={140} className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40" priority />
        <h1
          id="homes-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          Aliante Homes For Sale | 286+ Active MLS Listings in North Las Vegas
        </h1>

        <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed">
          Live MLS data updated every 15 minutes • Expert local guidance since 2018
        </p>

        {/* Update Badge */}
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
            ⚡ Live MLS - Updated Every 15 Minutes
          </div>
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-white font-semibold">
            📊 286 Active Listings
          </div>
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-white font-semibold">
            💰 Median: $434,900
          </div>
        </div>
      </div>
    </section>
  );
}
