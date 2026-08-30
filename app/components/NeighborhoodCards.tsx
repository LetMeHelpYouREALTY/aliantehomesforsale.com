'use client';

import Image from 'next/image';
import { type SiteImage, siteImages } from '../../lib/content/site-images';

interface NeighborhoodCardProps {
  image: SiteImage;
  name: string;
  tag: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
  href: string;
  featured?: boolean;
}

function NeighborhoodCard({
  image,
  name,
  tag,
  description,
  features,
  stats,
  href,
  featured,
}: NeighborhoodCardProps) {
  return (
    <article
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        featured ? 'border-4' : 'border-2'
      }`}
      style={featured ? { borderColor: '#2c5aa0' } : { borderColor: '#e5e7eb' }}
    >
      <div className="relative h-48">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a365d' }}>
          {name}
        </h3>
        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
          {tag}
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature) => (
            <span
              key={feature}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="space-y-2 mb-6 pb-6 border-b-2 border-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="flex justify-between text-sm">
              <span className="font-bold" style={{ color: '#2c5aa0' }}>
                {stat.label}:
              </span>
              <span className="text-gray-700">{stat.value}</span>
            </div>
          ))}
        </div>

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
      image: siteImages.prominence,
      name: 'The Prominence',
      tag: 'Luxury Gated Community',
      description:
        'Upscale gated community featuring luxury homes with premium amenities, golf course views, and exclusive access to Club Aliante facilities.',
      features: ['Golf course access', 'Gated entry', 'Community pool', 'Tennis courts'],
      stats: [
        { label: 'Price Range', value: '$600K - $1.2M+' },
        { label: 'Home Types', value: 'Single-family, luxury' },
        { label: 'Access', value: 'Gated' },
      ],
      href: '/neighborhoods/prominence',
      featured: true,
    },
    {
      image: siteImages.desertWillows,
      name: 'Desert Willows',
      tag: 'Parks and pools',
      description:
        'One- and two-story plans, pocket parks, and community recreation in Aliante 89084. Confirm HOA rules and live MLS inventory before you offer.',
      features: ['Pocket parks', 'Community pools', 'Shopping nearby', 'Parks and trails'],
      stats: [
        { label: 'Price Range', value: '$400K - $700K' },
        { label: 'Home Types', value: 'Single-family, townhomes' },
        { label: 'ZIP', value: '89084' },
      ],
      href: '/neighborhoods/desert-willows',
    },
    {
      image: siteImages.clubAliante,
      name: 'Club Aliante',
      tag: 'Golf Course Living',
      description:
        'Premier golf course community offering stunning views, clubhouse amenities, and access to the championship Aliante Golf Club.',
      features: ['Golf course views', 'Clubhouse access', 'Dining nearby', 'Fitness center'],
      stats: [
        { label: 'Price Range', value: '$500K - $900K' },
        { label: 'Home Types', value: 'Single-family, golf-course lots' },
        { label: 'Golf', value: 'Club Aliante' },
      ],
      href: '/neighborhoods/club-aliante',
    },
    {
      image: siteImages.paseos,
      name: 'The Paseos',
      tag: 'Gated village',
      description:
        'Gated Aliante village with a range of home sizes and shared recreation. Confirm HOA dues and CC&Rs; browse live MLS for current list prices.',
      features: ['Range of plan sizes', 'Walkable streets', 'Guest parking', 'Common-area parks'],
      stats: [
        { label: 'Price Range', value: '$300K - $500K' },
        { label: 'Home Types', value: 'Single-family, townhomes' },
        { label: 'Access', value: 'Gated' },
      ],
      href: '/neighborhoods/paseos',
    },
    {
      image: siteImages.sunCity,
      name: 'Sun City Aliante',
      tag: 'Active Adult 55+',
      description:
        'Premier 55+ community with world-class amenities, social activities, and maintenance-free living designed for active adults.',
      features: ['Golf courses', 'Social clubs', 'Fitness classes', 'Art studios'],
      stats: [
        { label: 'Price Range', value: '$380K - $650K' },
        { label: 'Home Types', value: 'Single Family, Villas' },
        { label: 'Age Requirement', value: '55+ Community' },
      ],
      href: '/sun-city-aliante',
    },
    {
      image: siteImages.tuleSprings,
      name: 'Villages at Tule Springs',
      tag: 'Master-Planned',
      description:
        'Newest master-planned community adjacent to Aliante with parks, trails, and modern homes from top builders.',
      features: ['New construction', 'Parks and trails', 'Named CCSD campuses', 'Modern amenities'],
      stats: [
        { label: 'Price Range', value: '$450K - $750K' },
        { label: 'Home Types', value: 'New construction' },
        { label: 'Area', value: 'Tule Springs' },
      ],
      href: '/neighborhoods/tule-springs',
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
            Aliante villages differ by gate access, golf proximity, 55+ occupancy rules, and typical
            plan size. Open a neighborhood page, then confirm inventory on live MLS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((neighborhood) => (
            <NeighborhoodCard key={neighborhood.href} {...neighborhood} />
          ))}
        </div>
      </div>
    </section>
  );
}
