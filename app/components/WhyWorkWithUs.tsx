'use client';

import AgentPhoto from './AgentPhoto';

interface ExpertiseItemProps {
  icon: string;
  title: string;
  description: string;
}

function ExpertiseItem({ icon, title, description }: ExpertiseItemProps) {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-l-4"
      style={{ borderLeftColor: '#16B286' }}
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyWorkWithUs() {
  const expertise: ExpertiseItemProps[] = [
    {
      icon: '🤝',
      title: 'Direct Builder Relationships',
      description:
        'Personal connections with sales managers at every major builder. We get early access to new releases, priority lot selections, and better incentive packages for our clients.',
    },
    {
      icon: '💡',
      title: 'Incentive Maximization',
      description:
        'Average client savings of $15,000+ through incentive stacking, upgrade negotiations, and closing cost credits. We know every available program and how to combine them.',
    },
    {
      icon: '🔍',
      title: 'Quality Control & Inspections',
      description:
        'Pre-drywall and pre-close inspections at no additional cost. We catch issues before they become problems and ensure your builder meets quality standards.',
    },
    {
      icon: '📋',
      title: 'Contract Expertise',
      description:
        'Builder contracts heavily favor the builder. We review every clause, negotiate better terms, and protect your interests throughout the process.',
    },
    {
      icon: '⏱️',
      title: 'Timeline Management',
      description:
        'Construction delays cost money. We monitor your build schedule, coordinate with superintendents, and keep your project on track.',
    },
    {
      icon: '🏆',
      title: 'Proven Results',
      description:
        'Over 200 new construction closings in Aliante area. Our clients consistently get better lots, more upgrades, and superior value compared to buyers without representation.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AgentPhoto size={140} className="mx-auto mb-6 shadow-lg" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Why Work with Dr. Jan Duffy for New Construction?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <ExpertiseItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
