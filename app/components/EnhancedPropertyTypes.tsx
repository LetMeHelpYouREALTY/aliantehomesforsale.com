'use client';

import Image from 'next/image';
import { type SiteImage, siteImages } from '../../lib/content/site-images';

interface PropertyTypeCardProps {
  title: string;
  features: string[];
  link: string;
  image: SiteImage;
}

function PropertyTypeCard({ title, features, link, image }: PropertyTypeCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-[#2c5aa0] group">
      <div className="relative h-40">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#1a365d' }}>
          {title}
        </h3>

        <ul className="space-y-3 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-gray-700">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: '#16B286' }}
              >
                ✓
              </span>
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={link}
          className="block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all border-2 group-hover:text-white focus:ring-4 focus:ring-blue-300 focus:outline-none"
          style={{
            color: '#2c5aa0',
            borderColor: '#2c5aa0',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2c5aa0';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#2c5aa0';
          }}
        >
          Learn More →
        </a>
      </div>
    </article>
  );
}

export default function EnhancedPropertyTypes() {
  const propertyTypes: PropertyTypeCardProps[] = [
    {
      title: 'Luxury Homes',
      features: [
        '$600K+ premium properties',
        'Gourmet kitchens & spa bathrooms',
        'Smart home technology included',
        'Private pools & outdoor living',
        'Mountain & golf course views',
      ],
      link: '/neighborhoods/prominence',
      image: siteImages.prominence,
    },
    {
      title: 'Gated Communities',
      features: [
        '24/7 security & privacy',
        'Resort-style amenities',
        'Well-maintained landscapes',
        'Community events & activities',
        'Higher property values',
      ],
      link: '/gated-communities',
      image: siteImages.gated,
    },
    {
      title: 'Sun City 55+',
      features: [
        'Active adult lifestyle community',
        'World-class golf courses',
        'Fitness centers & clubs',
        'Social activities & events',
        'Low-maintenance living',
      ],
      link: '/sun-city-aliante',
      image: siteImages.sunCity,
    },
    {
      title: 'New Construction',
      features: [
        'Brand new, never lived in',
        'Modern floor plans & finishes',
        'Energy-efficient features',
        'Builder warranties included',
        'Customize to your taste',
      ],
      link: '/new-construction',
      image: siteImages.builders,
    },
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Explore Property Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From luxury estates to active adult communities, find the perfect match for your
            lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type) => (
            <PropertyTypeCard key={type.link} {...type} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">Not sure which type is right for you?</p>
          <a
            href="/contact"
            className="inline-block py-3 px-8 rounded-lg font-semibold text-white transition-all transform hover:scale-105 focus:ring-4 focus:ring-teal-300 focus:outline-none"
            style={{ backgroundColor: '#16B286' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0F9B6E')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#16B286')}
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
