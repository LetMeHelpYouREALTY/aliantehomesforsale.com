import Image from 'next/image';
import Link from 'next/link';

type Community = {
  name: string;
  href: string;
  tagline: string;
  image: string;
  alt: string;
};

const COMMUNITIES: Community[] = [
  {
    name: 'The Prominence',
    href: '/neighborhoods/prominence',
    tagline: 'Luxury homes from the mid-$600s',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80',
    alt: 'Luxury homes in The Prominence, Aliante North Las Vegas',
  },
  {
    name: 'Desert Willows',
    href: '/neighborhoods/desert-willows',
    tagline: 'Single-story and two-story floor plans',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop&q=80',
    alt: 'Homes in Desert Willows, Aliante North Las Vegas',
  },
  {
    name: 'Club Aliante',
    href: '/neighborhoods/club-aliante',
    tagline: 'Golf-course living near the clubhouse',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&q=80',
    alt: 'Golf course homes at Club Aliante, North Las Vegas',
  },
  {
    name: 'The Paseos',
    href: '/neighborhoods/paseos',
    tagline: 'Gated community with resort amenities',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
    alt: 'Gated homes in The Paseos, Aliante',
  },
  {
    name: 'Sun City Aliante',
    href: '/neighborhoods/sun-city',
    tagline: 'Active adult 55+ Del Webb community',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
    alt: 'Sun City Aliante 55+ homes in North Las Vegas',
  },
  {
    name: 'Tule Springs',
    href: '/neighborhoods/tule-springs',
    tagline: 'New construction near Floyd Lamb Park',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cd00?w=800&h=600&fit=crop&q=80',
    alt: 'New construction homes near Tule Springs, North Las Vegas',
  },
];

/**
 * Purist-style Featured Communities: image-led grid linking to Aliante neighborhood pages.
 */
export default function FeaturedCommunities() {
  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: '#f8f9fa' }}
      aria-labelledby="featured-communities-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="featured-communities-heading"
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            Featured Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Aliante and North Las Vegas neighborhoods with local guidance from Dr. Jan
            Duffy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMUNITIES.map((community) => (
            <Link
              key={community.href}
              href={community.href}
              className="group relative block overflow-hidden rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-[#2c5aa0]/40"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={community.image}
                  alt={community.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-2xl font-bold mb-1">{community.name}</h3>
                  <p className="text-sm text-white/90">{community.tagline}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#97d8c4] group-hover:underline">
                    Explore {community.name} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/neighborhoods"
            className="inline-block py-3 px-8 rounded-lg font-semibold text-white transition-colors focus:ring-4 focus:ring-teal-300 focus:outline-none"
            style={{ backgroundColor: '#16B286' }}
          >
            View All Neighborhoods
          </Link>
        </div>
      </div>
    </section>
  );
}
