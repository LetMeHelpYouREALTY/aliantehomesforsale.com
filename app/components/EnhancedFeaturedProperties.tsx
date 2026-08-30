'use client';

import Image from 'next/image';

interface PropertyCardProps {
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  features: string[];
  gradient?: string;
}

function PropertyCard({ price, address, city, beds, baths, sqft, features }: PropertyCardProps) {
  // Use Unsplash images based on price range
  const imageId = price.includes('$349')
    ? 'photo-1570129477492-45c003edd2be'
    : price.includes('$595')
      ? 'photo-1600596542815-ffad4c1539a9'
      : 'photo-1613490493576-7fde63acd811';
  const imageUrl = `https://images.unsplash.com/${imageId}?w=600&h=400&fit=crop&q=80`;

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
      {/* Property Image: next/image for AVIF/WebP, responsive sizes, no CLS */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${address}, ${city} — Aliante homes for sale`}
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          decoding="async"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        {/* Price Tag */}
        <div
          className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-white shadow-lg"
          style={{ backgroundColor: '#2c5aa0' }}
        >
          {price}
        </div>
      </div>

      {/* Property Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1" style={{ color: '#1a365d' }}>
          {address}
        </h3>
        <p className="text-gray-600 mb-4">{city}</p>

        {/* Property Details */}
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

        {/* Key Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 font-bold flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
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
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Featured Aliante Homes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked properties showcasing the best of Aliante living. Updated daily from MLS.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        {/* View All CTA */}
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
