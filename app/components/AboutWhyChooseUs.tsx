'use client';

interface ReasonProps {
  title: string;
  description: string;
  icon: string;
}

function ReasonCard({ title, description, icon }: ReasonProps) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
        style={{ backgroundColor: '#e6f0ff' }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function AboutWhyChooseUs() {
  const reasons: ReasonProps[] = [
    {
      title: 'Local Focus',
      description:
        'Focused on Aliante and North Las Vegas 89084 — this is the market I work every week',
      icon: '📍',
    },
    {
      title: 'Builder Relationships',
      description: 'I confirm live builder incentive sheets and represent you on the contract',
      icon: '🤝',
    },
    {
      title: 'Market Mastery',
      description:
        'We watch Aliante 89084 inventory, price changes, and village comps — not a valley-wide average',
      icon: '📈',
    },
    {
      title: 'Client-First',
      description: 'Your goals are our priority - no pressure, just expert guidance',
      icon: '💙',
    },
    {
      title: 'Proven Results',
      description: 'Aliante closings since 2018 — call for current references',
      icon: '✨',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What sets us apart in the Aliante real estate market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
