'use client';

import { siteConfig } from '../../lib/site-config';

interface ReasonProps {
  icon: string;
  title: string;
  description: string;
}

function ReasonCard({ icon, title, description }: ReasonProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl mb-4" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: '#1a365d' }}>
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

export default function ContactWhyChoose() {
  const reasons: ReasonProps[] = [
    {
      icon: '🏠',
      title: 'Aliante 89084 since 2018',
      description: `Aliante and North Las Vegas 89084 specialist since ${siteConfig.foundedYear}`,
    },
    {
      icon: '🤝',
      title: 'Builder map, not the sales desk',
      description: 'I confirm live builder incentive sheets and represent you — not the sales desk',
    },
    {
      icon: '📊',
      title: 'Live MLS, village comps',
      description:
        'Confirm inventory, price changes, and village comps on live MLS — not a valley average',
    },
    {
      icon: '⭐',
      title: 'Aliante closings since 2018',
      description: 'Ask for current references. I will not publish an unverified closing count.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Why call Dr. Jan Duffy for Aliante 89084
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
