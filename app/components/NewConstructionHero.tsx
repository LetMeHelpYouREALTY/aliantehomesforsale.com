'use client';

import { useState } from 'react';

type NewConstructionHeroProps = {
  title?: string;
  subtitle?: string;
  filterHeading?: string;
  filterSubheading?: string;
};

export default function NewConstructionHero({
  title = 'New-Construction Buyer Agency in Aliante, North Las Vegas 89084',
  subtitle = 'Independent representation with Lennar, D.R. Horton, Del Webb, and nearby Tule Springs builders. Call (702) 707-7273.',
  filterHeading = 'Filter Aliante and Tule Springs builders',
  filterSubheading = 'Confirm live inventory and incentives before you tour.',
}: NewConstructionHeroProps) {
  const [selectedBuilder, setSelectedBuilder] = useState('all');

  const builders = [
    { id: 'all', name: 'All Builders' },
    { id: 'lennar', name: 'Lennar' },
    { id: 'dr-horton', name: 'D.R. Horton' },
    { id: 'toll-brothers', name: 'Toll Brothers' },
    { id: 'tri-pointe', name: 'Tri Pointe' },
    { id: 'del-webb', name: 'Del Webb 55+' },
  ];

  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center px-4 py-16"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
      aria-labelledby="nc-hero-heading"
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1
            id="nc-hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Filter Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-center"
              style={{ color: '#1a365d' }}
            >
              {filterHeading}
            </h2>
            <p className="text-center text-gray-600 mb-6">{filterSubheading}</p>

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
                  {builder.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-6 text-center shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Confirm current builder incentives
            </h3>
            <p className="text-white/95 mb-4 text-lg">
              Closing-cost, rate-buydown, and upgrade offers change by community. I confirm them
              with you. Call (702) 707-7273.
            </p>
            <a
              href="/builders/incentives"
              className="inline-block px-8 py-3 bg-white rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-white/30 focus:outline-none"
              style={{ color: '#ed8936' }}
            >
              View Aliante incentive notes →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
