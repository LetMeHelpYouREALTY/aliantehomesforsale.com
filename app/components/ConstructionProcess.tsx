'use client';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  details: string[];
}

function ProcessStep({ number, title, description, details }: ProcessStepProps) {
  return (
    <div
      className="bg-white rounded-xl p-8 shadow-lg border-l-4"
      style={{ borderLeftColor: '#2c5aa0' }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
          style={{ backgroundColor: '#2c5aa0' }}
        >
          {number}
        </div>
        <h3 className="text-2xl font-bold" style={{ color: '#1a365d' }}>
          {title}
        </h3>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="flex-shrink-0 text-green-500 font-bold" aria-hidden="true">
              ✓
            </span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ConstructionProcess() {
  const steps: ProcessStepProps[] = [
    {
      number: 1,
      title: 'Builder & Community Selection',
      description:
        'Compare builders, floor plans, and amenities against your budget and the lots that are actually for sale this month.',
      details: [
        'Review builders active near Aliante',
        'Compare plans and included features',
        'Confirm live price sheets',
        'Visit model homes together',
      ],
    },
    {
      number: 2,
      title: 'Strategic Lot Selection',
      description:
        'Lot placement affects views, sun, street noise, and daily living. We walk the map with you so you can choose a lot that matches those factors.',
      details: [
        'Corner vs. interior lots',
        'View premiums vs. standard',
        'Sun exposure and orientation',
        'Proximity to amenities/streets',
      ],
    },
    {
      number: 3,
      title: 'Design Center & Upgrades',
      description:
        'Choose upgrades with use and resale in mind. We help you decide which design-center items you want to pay for and which to skip.',
      details: [
        'Flooring and finishes selection',
        'Kitchen and bath upgrades',
        'Structural vs. cosmetic changes',
        'Negotiate upgrade credits',
      ],
    },
    {
      number: 4,
      title: 'Construction Monitoring',
      description:
        'We walk key phases with you, coordinate inspections you hire, and document issues before closing.',
      details: [
        'Foundation and framing inspections',
        'Pre-drywall walkthrough',
        'MEP systems verification',
        'Quality control checkpoints',
      ],
    },
    {
      number: 5,
      title: 'Final Walkthrough & Closing',
      description:
        'Detailed pre-closing inspection, punch list management, and closing coordination. Confirm remaining items before you accept the keys.',
      details: [
        'Comprehensive final walkthrough',
        'Punch list creation and follow-up',
        'Warranty documentation review',
        'Closing coordination and support',
      ],
    },
  ];

  return (
    <section
      className="py-16 px-4"
      style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your New Home Journey - Step by Step
          </h2>
          <p className="text-xl text-white/90">
            We guide you through every phase of the new construction process
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
