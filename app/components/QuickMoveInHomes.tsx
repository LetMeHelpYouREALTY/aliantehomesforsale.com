'use client';

import { imagePaths } from '../../lib/site-images';
import CdnImage from './CdnImage';

interface QuickMoveInHomeProps {
  badge: string;
  builder: string;
  community: string;
  specs: string;
  price: string;
  features: string;
  image: string;
}

function QuickMoveInCard({
  badge,
  builder,
  community,
  specs,
  price,
  features,
  image,
}: QuickMoveInHomeProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-48 overflow-hidden">
        <CdnImage
          src={image}
          alt={`${builder} new construction home in ${community}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          decoding="async"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
          {badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
          {builder} - {community}
        </h3>
        <p className="text-lg font-semibold text-gray-700 mb-3">{specs}</p>
        <p className="text-3xl font-bold mb-3" style={{ color: '#2c5aa0' }}>
          {price}
        </p>
        <p className="text-gray-600 mb-6">{features}</p>

        <a
          href="/contact"
          className="block w-full text-center py-3 px-6 rounded-lg font-semibold text-white transition-all transform hover:scale-105 focus:ring-4 focus:ring-orange-300 focus:outline-none"
          style={{ backgroundColor: '#ed8936' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dd6b20')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ed8936')}
        >
          View Details
        </a>
      </div>
    </article>
  );
}

export default function QuickMoveInHomes() {
  const homes: QuickMoveInHomeProps[] = [
    {
      badge: 'Ready in 30 Days',
      builder: 'Lennar',
      community: 'Desert Willows',
      specs: '4 BR | 3 BA | 2,450 sq ft',
      price: '$549,900',
      features: 'Smart home package, gourmet kitchen, 3-car garage',
      image: imagePaths.communities.desertWillows,
    },
    {
      badge: 'Ready in 45 Days',
      builder: 'D.R. Horton',
      community: 'Tule Springs',
      specs: '3 BR | 2.5 BA | 2,180 sq ft',
      price: '$479,000',
      features: 'Open concept, large backyard, nearby parks',
      image: imagePaths.communities.tuleSprings,
    },
    {
      badge: 'Move-In Ready',
      builder: 'Tri Pointe',
      community: 'Aliante Highlands',
      specs: '4 BR | 3.5 BA | 3,100 sq ft',
      price: '$729,000',
      features: 'Premium finishes, mountain views, golf course',
      image: imagePaths.heroes.luxuryPool,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Quick Move-In Homes - Ready Now!
          </h2>
          <p className="text-xl text-gray-600">
            Move in within 30-60 days! Completed or nearly-completed homes with immediate
            availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {homes.map((home, index) => (
            <QuickMoveInCard key={index} {...home} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-block py-4 px-10 rounded-lg font-semibold text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
            style={{ backgroundColor: '#2c5aa0' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e3f73')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2c5aa0')}
          >
            View All Quick Move-In Homes
          </a>
        </div>
      </div>
    </section>
  );
}
