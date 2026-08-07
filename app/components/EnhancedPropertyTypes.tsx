'use client';

interface PropertyTypeCardProps {
  icon: string;
  title: string;
  features: string[];
  link: string;
}

function PropertyTypeCard({ icon, title, features, link }: PropertyTypeCardProps) {
  return (
    <article className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-[#2c5aa0] group">
      {/* Icon */}
      <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#1a365d' }}>
        {title}
      </h3>

      {/* Features List */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700">
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

      {/* Learn More Link */}
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
    </article>
  );
}

export default function EnhancedPropertyTypes() {
  const propertyTypes: PropertyTypeCardProps[] = [
    {
      icon: '💎',
      title: 'Luxury Homes',
      features: [
        '$600K+ premium properties',
        'Gourmet kitchens & spa bathrooms',
        'Smart home technology included',
        'Private pools & outdoor living',
        'Mountain & golf course views',
      ],
      link: '/neighborhoods/prominence',
    },
    {
      icon: '🏰',
      title: 'Gated Communities',
      features: [
        '24/7 security & privacy',
        'Resort-style amenities',
        'Well-maintained landscapes',
        'Community events & activities',
        'Higher property values',
      ],
      link: '/gated-communities',
    },
    {
      icon: '🌅',
      title: 'Sun City 55+',
      features: [
        'Active adult lifestyle community',
        'World-class golf courses',
        'Fitness centers & clubs',
        'Social activities & events',
        'Low-maintenance living',
      ],
      link: '/sun-city-aliante',
    },
    {
      icon: '🏗️',
      title: 'New Construction',
      features: [
        'Brand new, never lived in',
        'Modern floor plans & finishes',
        'Energy-efficient features',
        'Builder warranties included',
        'Customize to your taste',
      ],
      link: '/new-construction',
    },
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Explore Property Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From luxury estates to active adult communities, find the perfect match for your
            lifestyle.
          </p>
        </div>

        {/* Property Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type, index) => (
            <PropertyTypeCard key={index} {...type} />
          ))}
        </div>

        {/* Additional CTA */}
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
