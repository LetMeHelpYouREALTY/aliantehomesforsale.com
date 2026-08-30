import type { SiteImage } from '../../lib/content/site-images';
import HeroBackdrop from './HeroBackdrop';

type AboutHeroProps = {
  title: string;
  subtitle: string;
  image: SiteImage;
};

export default function AboutHero({ title, subtitle, image }: AboutHeroProps) {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center px-4 py-16 overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      <HeroBackdrop image={image} />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <h1
          id="about-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          {title}
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
