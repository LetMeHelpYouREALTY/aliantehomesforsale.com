'use client';

import { heroImages } from '../../lib/site-images';
import AgentPhoto from './AgentPhoto';
import HeroBackground from './HeroBackground';

export default function ContactHero() {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center px-4 py-16 overflow-hidden bg-[#0A2540]"
      aria-labelledby="contact-hero-heading"
    >
      <HeroBackground src={heroImages.contact.src} alt={heroImages.contact.alt} />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <AgentPhoto size={180} className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40" priority />
        <h1
          id="contact-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          Contact Aliante Real Estate Expert | (702) 707-7273
        </h1>

        <p className="text-xl sm:text-2xl text-white/95 mb-4 leading-relaxed">
          Aliante Las Vegas Real Estate Expert
        </p>

        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
          Your trusted Aliante specialist since 2018 | 500+ successful transactions
        </p>

        {/* Quick Phone CTA */}
        <div className="mt-8">
          <a
            href="tel:+17027077273"
            className="inline-block px-10 py-4 bg-white rounded-full text-2xl sm:text-3xl font-bold transition-all transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none"
            style={{ color: '#2c5aa0' }}
          >
            📞 (702) 707-7273
          </a>
          <p className="text-white/80 mt-3 text-sm sm:text-base">
            Available 7 days a week • 9:00 AM - 8:00 PM PST
          </p>
        </div>
      </div>
    </section>
  );
}
