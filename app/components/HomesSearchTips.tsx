'use client';

interface TipCardProps {
  icon: string;
  title: string;
  description: string;
}

function TipCard({ icon, title, description }: TipCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-4xl mb-4 text-center" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3 text-center" style={{ color: '#1a365d' }}>
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed text-center text-sm">{description}</p>
    </div>
  );
}

export default function HomesSearchTips() {
  const tips: TipCardProps[] = [
    {
      icon: '🔍',
      title: 'Start Broad, Then Narrow',
      description:
        'Begin with all Aliante homes, then filter by neighborhood, price range, and features.',
    },
    {
      icon: '💰',
      title: 'Get Pre-Approved First',
      description:
        'Know your budget before you write. I can introduce lenders who actually close Aliante files.',
    },
    {
      icon: '🏘️',
      title: 'Visit Multiple Neighborhoods',
      description:
        'Each Aliante village has different access, HOA rules, and lot types. Tour more than one before you offer.',
    },
    {
      icon: '⏱️',
      title: 'Set MLS alerts, then tour',
      description:
        'Well-priced homes can still move quickly. Confirm current days-on-market on live MLS and set alerts for the villages you want.',
    },
    {
      icon: '🤝',
      title: 'Work with an 89084 realtor',
      description:
        'I work ZIP 89084 every week. I walk village comps, HOA documents, and lot position with you.',
    },
    {
      icon: '📊',
      title: 'Check the Market Data',
      description: 'Confirm live medians, days on market, and village comps before you write.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            How I search Aliante MLS in ZIP 89084
          </h2>
          <p className="text-xl text-gray-600">
            Filter by village, set alerts, then confirm live comps before you write.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <TipCard key={index} {...tip} />
          ))}
        </div>
      </div>
    </section>
  );
}
