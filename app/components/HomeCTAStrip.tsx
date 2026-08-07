import Link from 'next/link';

/**
 * Purist-style CTA strip: View Listings, Explore Neighborhoods, What's My Home Worth.
 * Place once before FAQ (or after Trust) on home page.
 */
export default function HomeCTAStrip() {
  const ctas = [
    {
      label: 'View Listings',
      href: '/homes-for-sale',
      description: 'Browse all Aliante MLS listings',
    },
    {
      label: 'Explore Neighborhoods',
      href: '/neighborhoods',
      description: 'Discover communities & areas',
    },
    {
      label: "What's My Home Worth?",
      href: '/home-valuation',
      description: 'Free home valuation',
    },
  ];

  return (
    <section
      className="py-14 px-4 bg-gradient-to-br from-[#0a2540] to-[#2c5aa0] text-white"
      aria-labelledby="cta-strip-heading"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 id="cta-strip-heading" className="sr-only">
          Next steps
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch flex-wrap">
          {ctas.map(({ label, href, description }) => (
            <Link
              key={href + label}
              href={href}
              className="flex flex-col justify-center rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm px-8 py-6 min-h-[120px] hover:bg-white/20 hover:border-white/60 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a2540]"
            >
              <span className="font-bold text-lg">{label}</span>
              <span className="text-sm text-white/90 mt-1">{description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
