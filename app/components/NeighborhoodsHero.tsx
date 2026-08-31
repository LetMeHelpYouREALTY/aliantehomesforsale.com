import { type SiteImage, siteImages } from '../../lib/content/site-images';
import AgentPhoto from './AgentPhoto';
import HeroBackdrop from './HeroBackdrop';

type NeighborhoodsHeroProps = {
  title?: string;
  subtitle?: string;
  image?: SiteImage;
};

export default function NeighborhoodsHero({
  title = 'Aliante Neighborhoods for Sale | North Las Vegas 89084',
  subtitle = 'Club Aliante, Sun City Aliante, gated villages, and ZIP 89084. Call (702) 707-7273.',
  image = siteImages.neighborhoods,
}: NeighborhoodsHeroProps) {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center px-4 py-16 overflow-hidden"
      aria-labelledby="neighborhoods-hero-heading"
    >
      <HeroBackdrop image={image} />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <AgentPhoto size={160} className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40" priority />
        <h1
          id="neighborhoods-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          {title}
        </h1>

        <p className="text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
