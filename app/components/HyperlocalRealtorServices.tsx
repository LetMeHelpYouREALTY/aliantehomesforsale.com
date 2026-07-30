import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const services: ServiceCardProps[] = [
  {
    icon: '🤝',
    title: 'Buyer Representation',
    description:
      'Free buyer agency for Aliante home purchases — resale, new construction, and gated communities. You never pay a commission.',
    link: '/buyer-guide',
  },
  {
    icon: '🏷️',
    title: 'Listing & Seller Representation',
    description:
      'Pricing strategy, staging guidance, and marketing to sell your Aliante home fast and for top dollar.',
    link: '/seller-checklist',
  },
  {
    icon: '🏗️',
    title: 'New Construction Representation',
    description:
      'Independent buyer advocacy with every Aliante builder — Lennar, D.R. Horton, Tri Pointe, Del Webb, Toll Brothers, Richmond American — at no cost to you.',
    link: '/new-construction',
  },
  {
    icon: '🌅',
    title: '55+ Active Adult Community Specialist',
    description:
      'Specialized guidance for Sun City Aliante and other 55+ communities in North Las Vegas.',
    link: '/sun-city-aliante',
  },
  {
    icon: '📊',
    title: 'Home Valuation & CMA',
    description:
      'Free, data-backed comparative market analysis for Aliante homeowners considering a sale.',
    link: '/home-valuation',
  },
  {
    icon: '📈',
    title: 'Investment Property Analysis',
    description:
      'Rental yield, appreciation, and market timing analysis for investors targeting Aliante.',
    link: '/investment-analysis',
  },
];

/** Visible, crawlable list of hyperlocal realtor services matching the RealEstateAgent hasOfferCatalog schema (GEO/AEO). */
export default function HyperlocalRealtorServices() {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="speakable text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            Hyperlocal Aliante Realtor Services
          </h2>
          <p className="speakable text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Jan Duffy specializes exclusively in Aliante and North Las Vegas, NV 89084 — not the
            entire Las Vegas valley. Every service below is focused on this one hyperlocal market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="block bg-gray-50 rounded-xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg border-2 border-transparent hover:border-[#2c5aa0]"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
