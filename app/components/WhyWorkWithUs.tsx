'use client';

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
        <div className="text-4xl flex-shrink-0" aria-hidden="true">
          {icon}
        </div>
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
      title: 'Builder map, not the sales desk',
      description:
        'I work the Aliante and Tule Springs builder map with you. Confirm current communities and sales-manager contacts on this month\u2019s sheet.',
    },
    {
      icon: '💡',
      title: 'Incentive review',
      description:
        'I represent you on the builder contract. Confirm today\u2019s incentive sheet, lot premiums, and upgrade credits before you write \u2014 I will not publish a stale savings average.',
    },
    {
      icon: '🔍',
      title: 'Quality Control & Inspections',
      description:
        'I attend pre-drywall and pre-close walkthroughs with you. Third-party inspections are a separate cost you confirm with the inspector.',
    },
    {
      icon: '📋',
      title: 'Builder contract review',
      description:
        'Builder contracts favor the builder. I review clauses with you and negotiate what that sales desk will actually change.',
    },
    {
      icon: '⏱️',
      title: 'Timeline Management',
      description:
        'I track dates on your contract and flag delays when the builder updates the schedule. I cannot control the superintendent\u2019s calendar.',
    },
    {
      icon: '🏆',
      title: 'Independent representation',
      description:
        'Independent buyer representation on Aliante and nearby Tule Springs new construction. Confirm live inventory. I will not publish an unverified closing count.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Why hire Dr. Jan Duffy as your Aliante new-construction buyer&apos;s agent?
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
