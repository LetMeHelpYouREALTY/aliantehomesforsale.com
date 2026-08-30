type HomesForSaleHeroProps = {
  title: string;
  subtitle: string;
};

export default function HomesForSaleHero({ title, subtitle }: HomesForSaleHeroProps) {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center px-4 py-16"
      style={{
        background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)',
      }}
      aria-labelledby="homes-hero-heading"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <h1
          id="homes-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          {title}
        </h1>

        <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
            Live MLS · updates about every 15 minutes
          </div>
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-white font-semibold">
            Aliante · North Las Vegas 89084
          </div>
        </div>
      </div>
    </section>
  );
}
