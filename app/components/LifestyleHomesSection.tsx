import Image from 'next/image';
import Link from 'next/link';
import { lifestyleCategories } from '../../lib/content/aliante-content';

/**
 * User-friendly “explore by lifestyle” grid — replaces fabricated MLS property cards.
 * Live listings come from RealScout widgets elsewhere on the page.
 */
export default function LifestyleHomesSection() {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="lifestyle-homes-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="lifestyle-homes-heading"
            className="speakable text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            Explore Aliante Homes by Lifestyle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pick the lifestyle that fits — then search live MLS listings for North Las Vegas 89084.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifestyleCategories.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2c5aa0]/30"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/85 via-transparent to-transparent" />
                <h3 className="absolute bottom-3 left-3 right-3 text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm text-gray-600 mb-4 flex-1">{item.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-sm text-gray-700 flex gap-2">
                      <span style={{ color: '#16B286' }} aria-hidden="true">
                        ✓
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="font-semibold text-sm" style={{ color: '#2c5aa0' }}>
                  Browse {item.title} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/homes-for-sale"
            className="inline-block py-3 px-8 rounded-lg font-semibold text-white"
            style={{ backgroundColor: '#ed8936' }}
          >
            Search all Aliante MLS listings
          </Link>
        </div>
      </div>
    </section>
  );
}
