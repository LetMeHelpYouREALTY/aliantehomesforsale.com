type BuilderPageHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
};

/**
 * Unique H1 hero for individual builder pages.
 * Do not reuse NewConstructionHero here — identical H1s look like duplicates to Google.
 */
export default function BuilderPageHero({ title, subtitle, eyebrow }: BuilderPageHeroProps) {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center px-4 py-16"
      style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)' }}
      aria-labelledby="builder-hero-heading"
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

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        {eyebrow ? (
          <p className="text-sm sm:text-base font-semibold uppercase tracking-wide text-white/80 mb-4">
            {eyebrow}
          </p>
        ) : null}
        <h1
          id="builder-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8">
          <a
            href="tel:+17027077273"
            className="inline-block px-10 py-4 bg-white rounded-full text-xl sm:text-2xl font-bold transition-transform hover:scale-105 focus:ring-4 focus:ring-white/30 focus:outline-none"
            style={{ color: '#2c5aa0' }}
          >
            Call (702) 707-7273
          </a>
        </div>
      </div>
    </section>
  );
}
