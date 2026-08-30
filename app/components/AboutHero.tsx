'use client';

import AgentPhoto from './AgentPhoto';

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center px-4 py-16"
      style={{
        background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)',
      }}
      aria-labelledby="about-hero-heading"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <AgentPhoto size={200} className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40" priority />
        <h1
          id="about-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          Expert Aliante Real Estate Agent | Dr. Jan Duffy Since 2018
        </h1>

        <p className="text-xl sm:text-2xl text-white/95 mb-4 leading-relaxed">
          Aliante Las Vegas Real Estate
        </p>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
          Your Trusted Local Expert Since 2018
        </p>
      </div>
    </section>
  );
}
