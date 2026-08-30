'use client';

import Image from 'next/image';
import { type SiteImage, siteImages } from '../../lib/content/site-images';

interface PropertyCardProps {
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  features: string[];
  image: SiteImage;
}

function PropertyCard({
  price,
  address,
  city,
  beds,
  baths,
  sqft,
  features,
  image,
}: PropertyCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image.src}
          alt={`${address}, ${city} — ${image.alt}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          decoding="async"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div
          className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-white shadow-lg"
          style={{ backgroundColor: '#2c5aa0' }}
        >
          {price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1" style={{ color: '#1a365d' }}>
          {address}
        </h3>
        <p className="text-gray-600 mb-4">{city}</p>

        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b-2 border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#2c5aa0' }}>
              {beds}
            </p>
            <p className="text-sm text-gray-600">Beds</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#2c5aa0' }}>
              {baths}
            </p>
            <p className="text-sm text-gray-600">Baths</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#2c5aa0' }}>
              {sqft.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">Sq Ft</p>
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 font-bold flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="/search"
          className="block w-full text-center py-3 px-6 rounded-lg font-semibold text-white transition-all transform group-hover:scale-[1.02] focus:ring-4 focus:ring-orange-300 focus:outline-none"
          style={{ backgroundColor: '#ed8936' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dd6b20')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ed8936')}
        >
          View Details →
        </a>
      </div>
    </article>
  );
}

export default function EnhancedFeaturedProperties() {
  const properties: PropertyCardProps[] = [
    {
      price: '$575,000',
      address: '3247 Sunrise Peak Ave',
      city: 'North Las Vegas, NV 89084',
      beds: 4,
      baths: 3,
      sqft: 2450,
      features: [
        'Gated Community - The Prominence',
        'Smart Home Technology Package',
        'Mountain & Golf Course Views',
        'Resort-Style Pool & Spa',
      ],
      image: siteImages.prominence,
    },
    {
      price: '$385,000',
      address: '5682 Peaceful Garden Dr',
      city: 'North Las Vegas, NV 89081',
      beds: 3,
      baths: 2.5,
      sqft: 1850,
      features: [
        'Sun City Aliante 55+ Community',
        'Open Floor Plan with High Ceilings',
        'Community Golf Course Access',
        'Low HOA Fees ($150/month)',
      ],
      image: siteImages.sunCity,
    },
    {
      price: '$725,000',
      address: '8934 Club Aliante Parkway',
      city: 'North Las Vegas, NV 89084',
      beds: 5,
      baths: 4,
      sqft: 3200,
      features: [
        'Brand New Construction - Never Lived In',
        'Gourmet Kitchen with Wolf Appliances',
        'Oversized 3-Car Garage',
        'Professional Landscaping Included',
      ],
      image: siteImages.builders,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Featured Aliante Homes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Example Aliante property types. Live inventory is on MLS via RealScout, not these sample
            cards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <PropertyCard key={property.address} {...property} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/homes-for-sale"
            className="inline-block py-4 px-10 rounded-lg font-semibold text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
            style={{ backgroundColor: '#2c5aa0' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e3f73')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2c5aa0')}
          >
            View all Aliante MLS listings →
          </a>
        </div>
      </div>
    </section>
  );
}
