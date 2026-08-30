'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import AgentPhoto from './AgentPhoto';

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop&q=80',
    alt: 'Aliante luxury homes and North Las Vegas real estate',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=80',
    alt: 'Modern home exterior in Aliante',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&q=80',
    alt: 'North Las Vegas community and homes',
  },
] as const;

const INTERVAL_MS = 6000;

export default function EnhancedHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((target: number) => {
    setIndex((target + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 overflow-hidden"
      aria-labelledby="hero-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={i === index ? slide.alt : ''}
              fill
              sizes="100vw"
              priority={i === 0}
              quality={80}
              className="object-cover"
            />
          </div>
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90"
          aria-hidden
        />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        <AgentPhoto size={180} className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40" priority />
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
        >
          Dr. Jan Duffy | Aliante North Las Vegas Real Estate
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover new listings right when they hit the market. RealScout powers your search—updated
          every 15 minutes.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-white font-semibold text-sm sm:text-base">
            ⚡ MLS Updated Every 15 Min
          </span>
          <span className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-white font-semibold text-sm sm:text-base">
            🏆 Local Expert Since 2018
          </span>
          <span className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-white font-semibold text-sm sm:text-base">
            📍 Aliante · 89084 Only
          </span>
        </div>
        <a
          href="#realscout-search"
          className="inline-block py-4 px-8 rounded-xl font-semibold text-lg text-white bg-[#ed8936] transition-all transform hover:scale-[1.02] hover:shadow-xl focus:ring-4 focus:ring-orange-300 focus:outline-none"
        >
          🔍 Search Homes Below
        </a>
      </div>

      {/* Slide indicators + prev/next */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/20 focus:ring-2 focus:ring-white focus:outline-none"
          aria-label="Previous slide"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Hero slides">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index ? 'true' : 'false'}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all focus:ring-2 focus:ring-white focus:outline-none ${
                i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/20 focus:ring-2 focus:ring-white focus:outline-none"
          aria-label="Next slide"
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
