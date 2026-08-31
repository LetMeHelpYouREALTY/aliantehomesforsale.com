'use client';

import AgentPhoto from './AgentPhoto';
import CalendlyPopupButton from './CalendlyPopupButton';

type NeighborhoodsCTAProps = {
  heading?: string;
  subheading?: string;
};

export default function NeighborhoodsCTA({
  heading = 'Tour Aliante neighborhoods with an 89084 realtor',
  subheading = 'Compare gated vs open-access villages, golf-course lots, and Sun City Aliante 55+',
}: NeighborhoodsCTAProps) {
  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AgentPhoto size={140} className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">{heading}</h2>
        <p className="text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed">{subheading}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CalendlyPopupButton
            event="showing"
            className="inline-block py-4 px-10 rounded-lg font-semibold text-lg text-white bg-[#ed8936] transition-all transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none"
          >
            Schedule a Neighborhood Tour
          </CalendlyPopupButton>

          <a
            href="/homes-for-sale"
            className="inline-block py-4 px-10 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl border-2 focus:ring-4 focus:ring-white/30 focus:outline-none"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              borderColor: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#0A2540';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            View Available Homes
          </a>
        </div>
      </div>
    </section>
  );
}
