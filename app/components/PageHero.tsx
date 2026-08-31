import { type SiteImage, siteImages } from '../../lib/content/site-images';
import AgentPhoto from './AgentPhoto';
import HeroBackdrop from './HeroBackdrop';

type PageHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  image?: SiteImage;
};

/** Unique H1 hero with the production photo overlay. */
export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image = siteImages.about,
}: PageHeroProps) {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center px-4 py-16 overflow-hidden"
      aria-labelledby="page-hero-heading"
    >
      <HeroBackdrop image={image} />
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        {eyebrow ? (
          <p className="text-sm sm:text-base font-semibold uppercase tracking-wide text-white/80 mb-4">
            {eyebrow}
          </p>
        ) : null}
        <AgentPhoto size={160} className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40" priority />
        <h1
          id="page-hero-heading"
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
