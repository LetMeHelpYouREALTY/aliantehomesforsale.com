'use client';

interface ReasonProps {
  icon: string;
  title: string;
  description: string;
}

function ReasonCard({ icon, title, description }: ReasonProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl mb-4">{icon}</div>
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
      title: 'Local Expertise',
      description: '6+ years specializing exclusively in Aliante and North Las Vegas properties',
    },
    {
      icon: '🤝',
      title: 'Builder Relationships',
      description: 'I confirm live builder incentive sheets and represent you — not the sales desk',
    },
    {
      icon: '📊',
      title: 'Market Intelligence',
      description: 'Real-time market data and insights to help you make informed decisions',
    },
    {
      icon: '⭐',
      title: 'Proven Track Record',
      description: 'Aliante and North Las Vegas closings since 2018 — ask for current references',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Why Choose Aliante Real Estate?
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
