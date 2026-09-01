'use client';

interface ExpertiseCardProps {
  icon: string;
  title: string;
  description: string;
}

function ExpertiseCard({ icon, title, description }: ExpertiseCardProps) {
  return (
    <article
      className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-l-4"
      style={{ borderLeftColor: '#2c5aa0' }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl flex-shrink-0" aria-hidden="true">
          {icon}
        </div>
        <h3 className="text-2xl font-bold" style={{ color: '#1a365d' }}>
          {title}
        </h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </article>
  );
}

export default function AboutExpertise() {
  const expertise: ExpertiseCardProps[] = [
    {
      icon: '🏗️',
      title: 'New-construction buyer agency in Aliante & Tule Springs',
      description:
        'I represent you with Lennar and Del Webb in 89084, and D.R. Horton at Tule Springs — not the builder. Confirm incentives, options, and walk-throughs on that community\u2019s sheet.',
    },
    {
      icon: '🏘️',
      title: 'Village matching: Club Aliante, Prominence, Paseos, Desert Willows, Sun City',
      description:
        'I tour the actual Aliante villages with you. Ardiente (89081) is not inside this master plan; I will say so before you write an offer.',
    },
    {
      icon: '📊',
      title: 'MLS and CMA work for ZIP 89084',
      description:
        'Listings refresh about every 15 minutes. Valuations use Aliante comps — Club Aliante vs Sun City vs gated — not a valley average.',
    },
    {
      icon: '🤝',
      title: 'Buyer and seller advocacy in Aliante',
      description:
        'Purchase or listing, I am your agent at 2590 Nature Park Drive, Suite 275. Call (702) 707-7273.',
    },
    {
      icon: '⛳',
      title: '55+ realtor for Sun City Aliante',
      description:
        'Del Webb 55+ inside ZIP 89084. Ardiente is a different community in 89081 — I will tell you which address is which.',
    },
    {
      icon: '🔑',
      title: 'Rental-property analysis in ZIP 89084',
      description:
        'I sell the home and run buy-and-hold math from live comps. I do not manage leases or HOAs.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Realtor expertise in Aliante, North Las Vegas 89084
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Buyer agency, listings, new construction, Sun City Aliante 55+, CMAs, and
            rental-property analysis. Tule Springs new construction is east of ZIP 89084 — I will
            say so before you tour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <ExpertiseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
