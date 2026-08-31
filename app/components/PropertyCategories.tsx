'use client';

import Image from 'next/image';
import { type SiteImage, siteImages } from '../../lib/content/site-images';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  image: SiteImage;
}

function CategoryCard({ title, description, href, image }: CategoryCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-blue-500">
      <div className="relative h-32">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a365d' }}>
          {title}
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

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
          View Properties →
        </a>
      </div>
    </article>
  );
}

export default function PropertyCategories() {
  const categories: CategoryCardProps[] = [
    {
      title: 'New Construction',
      description:
        'Lennar, D.R. Horton, and Del Webb near Aliante. Confirm live incentives — I will not publish a stale dollar amount.',
      href: '/new-construction',
      image: siteImages.builders,
    },
    {
      title: 'Gated Communities',
      description:
        'Controlled-access villages inside the Aliante master plan: Club Aliante, The Prominence, and more.',
      href: '/gated-communities',
      image: siteImages.gated,
    },
    {
      title: 'Golf Course Homes',
      description:
        'Fairway lots next to Aliante Golf Club and Club Aliante. Confirm live MLS prices before you offer.',
      href: '/golf-homes',
      image: siteImages.golf,
    },
    {
      title: 'Sun City Aliante 55+',
      description:
        'Del Webb 55+ inside ZIP 89084 — not Ardiente (89081). Confirm live inventory and occupancy rules.',
      href: '/sun-city-aliante',
      image: siteImages.sunCity,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600">
            Filter Aliante 89084 homes on live MLS — inventory changes throughout the day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.href} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
