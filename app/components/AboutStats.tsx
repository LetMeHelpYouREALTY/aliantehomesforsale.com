'use client';

import AgentPhoto from './AgentPhoto';

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
      number: '500+',
      label: 'Successful Transactions',
      icon: '🏠',
    },
    {
      number: '6+ Years',
      label: 'Local Market Experience',
      icon: '📅',
    },
    {
      number: '4.9/5',
      label: 'Client Satisfaction Rating',
      icon: '⭐',
    },
    {
      number: '127',
      label: 'Verified Reviews',
      icon: '💬',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AgentPhoto size={140} className="mx-auto mb-6 shadow-lg" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Who We Are
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Dr. Jan Duffy and Aliante Las Vegas have been serving the North Las Vegas community
            since 2018, specializing exclusively in Aliante and surrounding areas. With over 500
            successful transactions, we've built our reputation on local expertise, integrity, and
            results.
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
