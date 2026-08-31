import { type SiteImage, siteImages } from '../../lib/content/site-images';
import AfterHeroListings from './AfterHeroListings';
import AgentPhoto from './AgentPhoto';
import HeroBackdrop from './HeroBackdrop';

type AboutHeroProps = {
  title?: string;
  subtitle?: string;
  image?: SiteImage;
};

export default function AboutHero({
  title = 'Aliante Realtor Services | Dr. Jan Duffy, North Las Vegas 89084',
  subtitle = 'Buyer agency, listings, new-construction representation, and Sun City Aliante 55+. Call (702) 707-7273.',
  image = siteImages.about,
}: AboutHeroProps) {
  return (
    <AfterHeroListings>
      <section
        className="relative min-h-[50vh] flex items-center justify-center px-4 py-16 overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        <HeroBackdrop image={image} />

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <AgentPhoto
            size={180}
            className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40"
            priority
          />
          <h1
            id="about-hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            {title}
          </h1>

          <p className="text-xl sm:text-2xl text-white/95 mb-4 leading-relaxed">{subtitle}</p>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Berkshire Hathaway HomeServices Nevada Properties · License S.0197614.LLC · Since 2018
          </p>
        </div>
      </section>
    </AfterHeroListings>
  );
}
