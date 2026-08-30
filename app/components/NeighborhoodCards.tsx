'use client';

import { imagePaths } from '../../lib/site-images';
import CdnImage from './CdnImage';

interface NeighborhoodCardProps {
  icon: string;
  name: string;
  tag: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
  href: string;
  featured?: boolean;
  image: string;
}

function NeighborhoodCard({
  icon,
  name,
  tag,
  description,
  features,
  stats,
  href,
  featured,
  image,
}: NeighborhoodCardProps) {
  return (
    <article
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        featured ? 'border-4' : 'border-2'
      }`}
      style={featured ? { borderColor: '#2c5aa0' } : { borderColor: '#e5e7eb' }}
    >
      <div className="relative h-48 overflow-hidden">
        <CdnImage
          src={image}
          alt={`${name} homes in Aliante, North Las Vegas`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 text-5xl drop-shadow" aria-hidden>
          {icon}
        </div>
        {featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a365d' }}>
          {name}
        </h3>
        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
          {tag}
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="space-y-2 mb-6 pb-6 border-b-2 border-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="font-bold" style={{ color: '#2c5aa0' }}>
                {stat.label}:
              </span>
              <span className="text-gray-700">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={href}
          className="block w-full text-center py-3 px-6 rounded-lg font-semibold text-white transition-all transform hover:scale-105 focus:ring-4 focus:ring-orange-300 focus:outline-none"
          style={{ backgroundColor: '#ed8936' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dd6b20')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ed8936')}
        >
          Explore {name} →
        </a>
      </div>
    </article>
  );
}

export default function NeighborhoodCards() {
  const neighborhoods: NeighborhoodCardProps[] = [
    {
      icon: '🏰',
      name: 'The Prominence',
      tag: 'Luxury Gated Community',
      description:
        'Upscale gated community featuring luxury homes with premium amenities, golf course views, and exclusive access to Club Aliante facilities.',
      features: ['🏌️ Golf Course Access', '🔒 24/7 Security', '🏊‍♂️ Resort Pool', '🎾 Tennis Courts'],
      stats: [
        { label: 'Price Range', value: '$600K - $1.2M+' },
        { label: 'Home Types', value: 'Single Family, Luxury' },
        { label: 'Schools', value: '9/10 Rated' },
      ],
      href: '/neighborhoods/prominence',
      featured: true,
      image: imagePaths.communities.prominence,
    },
    {
      icon: '🌵',
      name: 'Desert Willows',
      tag: 'Family Community',
      description:
        'Family-oriented neighborhood with spacious lots, excellent schools, and easy access to shopping, dining, and outdoor recreation areas.',
      features: [
        '👨‍👩‍👧‍👦 Family Friendly',
        '🏫 Top Schools',
        '🛒 Shopping Nearby',
        '🌳 Parks & Trails',
      ],
      stats: [
        { label: 'Price Range', value: '$400K - $700K' },
        { label: 'Home Types', value: 'Single Family, Townhomes' },
        { label: 'Schools', value: '8/10 Rated' },
      ],
      href: '/neighborhoods/desert-willows',
      image: imagePaths.communities.desertWillows,
    },
    {
      icon: '🏌️',
      name: 'Club Aliante',
      tag: 'Golf Course Living',
      description:
        'Premier golf course community offering stunning views, clubhouse amenities, and access to the championship Aliante Golf Club.',
      features: [
        '⛳ Golf Course Views',
        '🏆 Clubhouse Access',
        '🍽️ Fine Dining',
        '🏋️‍♂️ Fitness Center',
      ],
      stats: [
        { label: 'Price Range', value: '$500K - $900K' },
        { label: 'Home Types', value: 'Single Family, Golf Homes' },
        { label: 'Schools', value: '9/10 Rated' },
      ],
      href: '/neighborhoods/club-aliante',
      image: imagePaths.communities.clubAliante,
    },
    {
      icon: '🏘️',
      name: 'The Paseos',
      tag: 'Affordable Living',
      description:
        'Value-focused community offering quality homes at accessible prices, perfect for first-time buyers and growing families.',
      features: [
        '💰 Affordable Prices',
        '🚶‍♂️ Walkable Design',
        '🅿️ Ample Parking',
        '🌿 Green Spaces',
      ],
      stats: [
        { label: 'Price Range', value: '$300K - $500K' },
        { label: 'Home Types', value: 'Single Family, Townhomes' },
        { label: 'Schools', value: '7/10 Rated' },
      ],
      href: '/neighborhoods/paseos',
      image: imagePaths.communities.paseos,
    },
    {
      icon: '🌅',
      name: 'Sun City Aliante',
      tag: 'Active Adult 55+',
      description:
        'Premier 55+ community with world-class amenities, social activities, and maintenance-free living designed for active adults.',
      features: ['🏌️ Golf Courses', '🎭 Social Clubs', '💪 Fitness Classes', '🎨 Art Studios'],
      stats: [
        { label: 'Price Range', value: '$380K - $650K' },
        { label: 'Home Types', value: 'Single Family, Villas' },
        { label: 'Age Requirement', value: '55+ Community' },
      ],
      href: '/neighborhoods/sun-city',
      image: imagePaths.communities.sunCity,
    },
    {
      icon: '🌲',
      name: 'Villages at Tule Springs',
      tag: 'Master-Planned',
      description:
        'Newest master-planned community adjacent to Aliante with parks, trails, and modern homes from top builders.',
      features: [
        '🏗️ New Construction',
        '🌳 Parks & Trails',
        '🏫 New Schools',
        '🎯 Modern Amenities',
      ],
      stats: [
        { label: 'Price Range', value: '$450K - $750K' },
        { label: 'Home Types', value: 'New Construction' },
        { label: 'Schools', value: 'Brand New' },
      ],
      href: '/neighborhoods/tule-springs',
      image: imagePaths.communities.tuleSprings,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Find Your Perfect Aliante Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aliante offers diverse neighborhoods with gated communities, golf-course homes, 55+ Del
            Webb living, and new construction near Tule Springs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <NeighborhoodCard key={index} {...neighborhood} />
          ))}
        </div>
      </div>
    </section>
  );
}
