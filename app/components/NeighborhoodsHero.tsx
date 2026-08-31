'use client';

import { heroImages } from '../../lib/site-images';
import AgentPhoto from './AgentPhoto';
import HeroBackground from './HeroBackground';

export default function NeighborhoodsHero() {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center px-4 py-16 overflow-hidden bg-[#0A2540]"
      aria-labelledby="neighborhoods-hero-heading"
    >
      <HeroBackground src={heroImages.neighborhoods.src} alt={heroImages.neighborhoods.alt} />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <AgentPhoto size={140} className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40" priority />
        <h1
          id="neighborhoods-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          Aliante Neighborhoods Guide | North Las Vegas Communities & Schools
        </h1>

        <p className="text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
          Discover the perfect community for your lifestyle in North Las Vegas
        </p>
      </div>
    </section>
  );
}
