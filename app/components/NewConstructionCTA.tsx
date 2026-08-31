'use client';

export default function NewConstructionCTA() {
  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)',
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

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Hire a new-construction buyer’s agent in Aliante 89084
        </h2>
        <p className="text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed">
          Get expert guidance from Dr. Jan Duffy - Aliante's new construction specialist
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="tel:+17027077273"
            className="inline-block py-4 px-8 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none"
            style={{
              backgroundColor: '#ed8936',
              color: 'white',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dd6b20')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ed8936')}
          >
            📞 Call (702) 707-7273 - Free Consultation
          </a>

          <a
            href="/contact"
            className="inline-block py-4 px-8 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl border-2 focus:ring-4 focus:ring-white/30 focus:outline-none"
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
            Schedule Builder Tours
          </a>

          <a
            href="/builders/incentives"
            className="inline-block py-4 px-8 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl border-2 focus:ring-4 focus:ring-white/30 focus:outline-none"
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
            View Current Incentives
          </a>
        </div>

        <p className="text-white/80 text-sm sm:text-base">
          Free buyer representation | No cost to you | Builder pays commission | Expert negotiation
        </p>
      </div>
    </section>
  );
}
