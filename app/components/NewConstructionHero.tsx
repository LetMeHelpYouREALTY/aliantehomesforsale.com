import { type SiteImage, siteImages } from '../../lib/content/site-images';
import AgentPhoto from './AgentPhoto';
import HeroBackdrop from './HeroBackdrop';

type NewConstructionHeroProps = {
  title?: string;
  subtitle?: string;
  filterHeading?: string;
  filterSubheading?: string;
  image?: SiteImage;
};

const BUILDERS = [
  { name: 'All builders', href: '/builders' },
  { name: 'Lennar', href: '/builders/lennar' },
  { name: 'D.R. Horton', href: '/builders/dr-horton' },
  { name: 'Toll Brothers', href: '/builders/toll-brothers' },
  { name: 'Tri Pointe', href: '/builders/tri-pointe' },
  { name: 'Del Webb 55+', href: '/builders/del-webb' },
] as const;

export default function NewConstructionHero({
  title = 'New-Construction Buyer Agency in Aliante, North Las Vegas 89084',
  subtitle = 'Independent representation with Lennar, D.R. Horton, Del Webb, and nearby Tule Springs builders. Call (702) 707-7273.',
  filterHeading = 'Jump to a builder',
  filterSubheading = 'Inventory lives on MLS and each builder page. We do not invent home counts here.',
  image = siteImages.builders,
}: NewConstructionHeroProps) {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center px-4 py-16 overflow-hidden"
      aria-labelledby="nc-hero-heading"
    >
      <HeroBackdrop image={image} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <AgentPhoto
            size={160}
            className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40"
            priority
          />
          <h1
            id="nc-hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-center"
              style={{ color: '#1a365d' }}
            >
              {filterHeading}
            </h2>
            <p className="text-center text-gray-600 mb-6">{filterSubheading}</p>

            <div className="flex flex-wrap gap-3 justify-center">
              {BUILDERS.map((builder) => (
                <a
                  key={builder.href}
                  href={builder.href}
                  className="px-6 py-3 rounded-full font-semibold bg-gray-100 text-gray-700 hover:bg-blue-700 hover:text-white transition-colors focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                  {builder.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-6 text-center shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Confirm current builder incentives
            </h3>
            <p className="text-white/95 mb-4 text-lg">
              Closing-cost, rate-buydown, and upgrade offers change by community. I confirm them
              with you. Call (702) 707-7273.
            </p>
            <a
              href="/builders/incentives"
              className="inline-block px-8 py-3 bg-white rounded-lg font-semibold transition-all hover:scale-105 focus:ring-4 focus:ring-white/30 focus:outline-none"
              style={{ color: '#ed8936' }}
            >
              View Aliante incentive notes →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
