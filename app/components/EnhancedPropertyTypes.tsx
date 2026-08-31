'use client';

import Image from 'next/image';
import { type SiteImage, siteImages } from '../../lib/content/site-images';
import AgentPhoto from './AgentPhoto';
import CalendlyPopupButton from './CalendlyPopupButton';

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
        'Premium finishes — confirm live MLS',
        'Updated kitchens and baths where listed',
        'Confirm smart-home items on the listing',
        'Pools and outdoor living where present',
        'Mountain or golf-course views where the lot has them',
      ],
      link: '/neighborhoods/prominence',
      image: siteImages.prominence,
    },
    {
      title: 'Gated Communities',
      features: [
        'Controlled-access streets',
        'Shared recreation amenities',
        'HOA-maintained common areas',
        'Confirm CC&Rs before you offer',
        'Club Aliante and The Prominence',
      ],
      link: '/gated-communities',
      image: siteImages.gated,
    },
    {
      title: 'Sun City 55+',
      features: [
        'Age-qualified Del Webb in 89084',
        'Aliante Golf Club nearby',
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
        'Never-lived-in inventory',
        'Modern floor plans & finishes',
        'Energy-efficient features',
        'Builder warranties included',
        'Independent buyer representation',
      ],
      link: '/new-construction',
      image: siteImages.builders,
    },
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AgentPhoto size={120} className="mx-auto mb-6 shadow-lg" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Explore Property Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare gated villages, 55+ Del Webb, golf-course lots, and new construction. Confirm
            live inventory before you offer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type) => (
            <PropertyTypeCard key={type.link} {...type} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">Not sure which type is right for you?</p>
          <CalendlyPopupButton
            event="consultation"
            className="inline-block py-3 px-8 rounded-lg font-semibold text-white bg-[#16B286] transition-all transform hover:scale-105 focus:ring-4 focus:ring-teal-300 focus:outline-none hover:bg-[#0F9B6E]"
          >
            Schedule a Free Consultation
          </CalendlyPopupButton>
        </div>
      </div>
    </section>
  );
}
