'use client';

import { useState } from 'react';
import { heroImages } from '../../lib/site-images';
import AgentPhoto from './AgentPhoto';
import HeroBackground from './HeroBackground';

export default function NewConstructionHero() {
  const [selectedBuilder, setSelectedBuilder] = useState('all');

  const builders = [
    { id: 'all', name: 'All Builders', count: '95+' },
    { id: 'lennar', name: 'Lennar', count: '45' },
    { id: 'dr-horton', name: 'D.R. Horton', count: '32' },
    { id: 'toll-brothers', name: 'Toll Brothers', count: '28' },
    { id: 'tri-pointe', name: 'Tri Pointe', count: '18' },
    { id: 'del-webb', name: 'Del Webb 55+', count: '25' },
  ];

  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center px-4 py-16 overflow-hidden bg-[#0A2540]"
      aria-labelledby="nc-hero-heading"
    >
      <HeroBackground src={heroImages.newConstruction.src} alt={heroImages.newConstruction.alt} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <AgentPhoto
            size={140}
            className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40"
            priority
          />
          <h1
            id="nc-hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            New Construction Homes Aliante | Top Builders + Up to $25K Incentives
          </h1>

          <p className="text-lg sm:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            95+ new homes available • Luxury to affordable • Builder incentives up to $25,000 •
            Expert guidance through the entire process
          </p>
        </div>

        {/* Filter Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-center"
              style={{ color: '#1a365d' }}
            >
              Find Your Perfect New Home
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Filter by builder, community, price range, and home features
            </p>

            {/* Builder Filter Chips */}
            <div className="flex flex-wrap gap-3 justify-center">
              {builders.map((builder) => (
                <button
                  key={builder.id}
                  type="button"
                  onClick={() => setSelectedBuilder(builder.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none ${
                    selectedBuilder === builder.id
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={selectedBuilder === builder.id ? { backgroundColor: '#2c5aa0' } : {}}
                >
                  {builder.name} ({builder.count})
                </button>
              ))}
            </div>
          </div>

          {/* Incentives Banner */}
          <div className="mt-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-6 text-center shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              🎉 Current Builder Incentives - October 2025
            </h3>
            <p className="text-white/95 mb-4 text-lg">
              Up to $25,000 in savings! Limited time offers on select homes. Contact us for details.
            </p>
            <a
              href="/builders/incentives"
              className="inline-block px-8 py-3 bg-white rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-white/30 focus:outline-none"
              style={{ color: '#ed8936' }}
            >
              View All Incentives →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
