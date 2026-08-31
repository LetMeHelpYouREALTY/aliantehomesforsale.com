'use client';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl mb-4 text-center">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#1a365d' }}>
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed text-center">{description}</p>
    </div>
  );
}

export default function WhyNewConstruction() {
  const benefits: BenefitCardProps[] = [
    {
      icon: '🏗️',
      title: 'Never Been Lived In',
      description:
        'Brand new home with latest building codes, modern design, and energy-efficient construction. No repairs or updates needed for years.',
    },
    {
      icon: '🎨',
      title: 'Customize Your Dream Home',
      description:
        'Choose your lot, floor plan, colors, finishes, and upgrades. Create the perfect home for your lifestyle and taste.',
    },
    {
      icon: '💰',
      title: 'Builder Incentives & Savings',
      description:
        'Up to $25,000 in closing costs, upgrades, or rate buydowns. We help you maximize every available incentive.',
    },
    {
      icon: '✅',
      title: 'Comprehensive Warranties',
      description:
        '10-year structural warranty, builder warranties on all systems and components. Peace of mind for a decade.',
    },
    {
      icon: '⚡',
      title: 'Energy Efficiency',
      description:
        'Latest energy codes mean lower utility bills. Smart home technology, efficient HVAC, LED lighting, and solar-ready.',
    },
    {
      icon: '🎯',
      title: 'Our Expert Guidance',
      description:
        'We represent you in negotiations, monitor construction quality, and ensure you get the best deal possible.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Why use a buyer’s agent on Aliante new construction?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
