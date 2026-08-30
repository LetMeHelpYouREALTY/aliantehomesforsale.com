'use client';

import AgentPhoto from './AgentPhoto';
import CalendlyPopupButton from './CalendlyPopupButton';

export default function HomesCTA() {
  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed">
          Get expert guidance from local Aliante specialists
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <CalendlyPopupButton
            event="showing"
            className="inline-block py-4 px-10 rounded-lg font-semibold text-lg text-white bg-[#ed8936] transition-all transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none"
          >
            Schedule a private showing
          </CalendlyPopupButton>

          <a
            href="/market-report"
            className="inline-block py-4 px-10 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl border-2 focus:ring-4 focus:ring-white/30 focus:outline-none"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              borderColor: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            Get Market Report
          </a>
        </div>

        <div className="text-white/90">
          <p className="text-lg mb-3">Or call us directly:</p>
          <a href="tel:+17027077273" className="text-2xl sm:text-3xl font-bold hover:underline">
            📞 (702) 707-7273
          </a>
        </div>
      </div>
    </section>
  );
}
