'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { type SiteImage, siteImages } from '../../lib/content/site-images';

interface NeighborhoodCardProps {
  image: SiteImage;
  name: string;
  tag: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
  href: string;
}

function NeighborhoodCard({
  image,
  name,
  tag,
  description,
  features,
  stats,
  href,
}: NeighborhoodCardProps) {
  return (
    <article
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2"
      style={{ borderColor: '#e5e7eb' }}
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
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#dd6b20';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ed8936';
          }}
        >
          Explore {name} →
        </a>
      </div>
    </article>
  );
}

export default function NeighborhoodCards() {
  const pathname = (usePathname() || '/').replace(/\/+$/, '') || '/';
  const neighborhoods: NeighborhoodCardProps[] = [
    {
      image: siteImages.prominence,
      name: 'The Prominence',
      tag: 'Gated village',
      description:
        'Controlled-access village inside the Aliante master plan with private streets and shared amenities.',
      features: ['Gated entry', 'Private streets', 'Community pool', 'HOA architectural rules'],
      stats: [
        { label: 'Listings', value: 'Confirm live MLS' },
        { label: 'Home types', value: 'Single-family' },
        { label: 'Access', value: 'Gated' },
      ],
      href: '/neighborhoods/prominence',
    },
    {
      image: siteImages.desertWillows,
      name: 'Desert Willows',
      tag: 'Open-access village',
      description:
        'Single- and two-story homes with parks nearby, community pools, and everyday access to shopping along Aliante Parkway.',
      features: ['Parks nearby', 'Community pools', 'Shopping nearby', 'Mixed floor plans'],
      stats: [
        { label: 'Listings', value: 'Confirm live MLS' },
        { label: 'Home types', value: 'Single-family' },
        { label: 'Access', value: 'Open' },
      ],
      href: '/neighborhoods/desert-willows',
    },
    {
      image: siteImages.clubAliante,
      name: 'Club Aliante',
      tag: 'Gated golf-course village',
      description:
        'Guard-gated village with fairway lots next to Aliante Golf Club, clubhouse dining, and recreation amenities.',
      features: ['Fairway lots', 'Clubhouse', 'Dining', 'Fitness center'],
      stats: [
        { label: 'Listings', value: 'Confirm live MLS' },
        { label: 'Home types', value: 'Golf-course lots' },
        { label: 'Access', value: 'Gated' },
      ],
      href: '/neighborhoods/club-aliante',
    },
    {
      image: siteImages.paseos,
      name: 'The Paseos',
      tag: 'Open-access village',
      description:
        'Open-access village inside the Aliante master plan with parks and green space. Not The Paseos in Summerlin. Confirm housing type on live MLS.',
      features: ['Green spaces', 'Trails nearby', 'Open-access streets', 'Master HOA'],
      stats: [
        { label: 'Listings', value: 'Confirm live MLS' },
        { label: 'Home types', value: 'Confirm on live MLS' },
        { label: 'Access', value: 'Open' },
      ],
      href: '/neighborhoods/paseos',
    },
    {
      image: siteImages.sunCity,
      name: 'Sun City Aliante',
      tag: 'Active adult 55+',
      description:
        'Del Webb 55+ village inside ZIP 89084 — not Ardiente (89081). Golf nearby, clubs, and fitness. Confirm floor plan and story count on the listing.',
      features: ['Aliante Golf Club nearby', 'Clubs', 'Fitness', 'Confirm floor plan on listing'],
      stats: [
        { label: 'Listings', value: 'Confirm live MLS' },
        { label: 'Home types', value: 'Single-family, villas' },
        { label: 'Age requirement', value: '55+ community' },
      ],
      href: '/sun-city-aliante',
    },
    {
      image: siteImages.tuleSprings,
      name: 'Villages at Tule Springs',
      tag: 'New construction nearby',
      description:
        'New-construction communities east of Aliante near Floyd Lamb Park. Compare Tule Springs inventory with Aliante resale before you tour.',
      features: ['New construction', 'Floyd Lamb Park', 'Modern floor plans', 'Near 89084'],
      stats: [
        { label: 'Listings', value: 'Confirm live inventory' },
        { label: 'Home types', value: 'New construction' },
        { label: 'Location', value: 'East of Aliante' },
      ],
      href: '/neighborhoods/tule-springs',
    },
  ];

  const visible = neighborhoods.filter((neighborhood) => neighborhood.href !== pathname);
  const onVillagePage = visible.length < neighborhoods.length;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            {onVillagePage
              ? 'Other Aliante villages and nearby Tule Springs'
              : 'Aliante villages and nearby Tule Springs'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Club Aliante, gated villages, Sun City Aliante 55+, open-access streets, and Tule
            Springs east of 89084. Confirm live MLS before you offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((neighborhood) => (
            <NeighborhoodCard key={neighborhood.href} {...neighborhood} />
          ))}
        </div>
      </div>
    </section>
  );
}
