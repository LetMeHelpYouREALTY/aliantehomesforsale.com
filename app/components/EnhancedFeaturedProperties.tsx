import Image from 'next/image';
import Link from 'next/link';
import { siteImages } from '../../lib/content/site-images';

const neighborhoods = [
  {
    name: 'The Prominence',
    href: '/neighborhoods/prominence',
    image: siteImages.prominence,
    caption: 'Gated village with private streets',
  },
  {
    name: 'Club Aliante',
    href: '/neighborhoods/club-aliante',
    image: siteImages.clubAliante,
    caption: 'Gated village near the golf course',
  },
  {
    name: 'Desert Willows',
    href: '/neighborhoods/desert-willows',
    image: siteImages.desertWillows,
    caption: 'Open-access village with parks nearby',
  },
  {
    name: 'The Paseos',
    href: '/neighborhoods/paseos',
    image: siteImages.paseos,
    caption: 'Open-access village with parks and trails',
  },
  {
    name: 'Sun City Aliante',
    href: '/sun-city-aliante',
    image: siteImages.sunCity,
    caption: 'Del Webb 55+ recreation campus',
  },
];

export default function EnhancedFeaturedProperties() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Aliante villages in ZIP 89084
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse Aliante villages, then open live MLS search. Inventory, prices, and days on
            market change daily.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {neighborhoods.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.caption}</p>
                <span className="mt-2 inline-block text-sm font-semibold text-[#2c5aa0] group-hover:underline">
                  View homes →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
