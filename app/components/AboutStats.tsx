'use client';

interface StatCardProps {
  number: string;
  label: string;
  icon: string;
}

function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: '#2c5aa0' }}>
        {number}
      </h3>
      <p className="text-gray-600 text-lg">{label}</p>
    </div>
  );
}

export default function AboutStats() {
  const stats: StatCardProps[] = [
    {
      number: '2018',
      label: 'Serving Aliante since',
      icon: '📅',
    },
    {
      number: 'NV',
      label: 'License S.0197614.LLC',
      icon: '🪪',
    },
    {
      number: 'BHHS',
      label: 'Nevada Properties brokerage',
      icon: '🏠',
    },
    {
      number: '89084',
      label: 'Aliante ZIP focus',
      icon: '📍',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Who We Are
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Dr. Jan Duffy has served Aliante and North Las Vegas since 2018 with Berkshire Hathaway
            HomeServices Nevada Properties (license S.0197614.LLC). Work is focused on 89084
            villages, builder contracts, and live MLS—not valley-wide averages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
