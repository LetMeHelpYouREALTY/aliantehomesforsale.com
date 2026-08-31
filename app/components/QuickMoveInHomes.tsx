import Image from 'next/image';
import Link from 'next/link';
import { siteImages } from '../../lib/content/site-images';

const builderCards = [
  {
    name: 'Lennar',
    href: '/builders/lennar',
    image: siteImages.lennar,
    caption: 'Active Aliante communities',
  },
  {
    name: 'D.R. Horton',
    href: '/builders/dr-horton',
    image: siteImages.drHorton,
    caption: 'Tule Springs new construction',
  },
  {
    name: 'Tri Pointe',
    href: '/builders/tri-pointe',
    image: siteImages.triPointe,
    caption: 'Northwest Las Vegas collections',
  },
];

export default function QuickMoveInHomes() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Lennar, Horton, and Tri Pointe inventory near Aliante 89084
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Inventory, incentives, and close dates change with each builder release. Confirm current
            homes with me at (702) 707-7273.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {builderCards.map((item) => (
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.caption}</p>
                <span
                  className="block w-full text-center py-3 px-6 rounded-lg font-semibold text-white"
                  style={{ backgroundColor: '#ed8936' }}
                >
                  View builder page →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/builders"
            className="inline-block py-4 px-10 rounded-lg font-semibold text-lg text-white"
            style={{ backgroundColor: '#2c5aa0' }}
          >
            Compare all builders
          </Link>
        </div>
      </div>
    </section>
  );
}
