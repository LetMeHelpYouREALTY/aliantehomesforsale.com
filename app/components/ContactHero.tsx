import type { SiteImage } from '../../lib/content/site-images';
import HeroBackdrop from './HeroBackdrop';

type ContactHeroProps = {
  title: string;
  subtitle: string;
  image: SiteImage;
};

export default function ContactHero({ title, subtitle, image }: ContactHeroProps) {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center px-4 py-16 overflow-hidden"
      aria-labelledby="contact-hero-heading"
    >
      <HeroBackdrop image={image} />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <h1
          id="contact-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          {title}
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">{subtitle}</p>

        <div className="mt-8">
          <a
            href="tel:+17027077273"
            className="inline-block px-10 py-4 bg-white rounded-full text-2xl sm:text-3xl font-bold transition-all transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none"
            style={{ color: '#2c5aa0' }}
          >
            (702) 707-7273
          </a>
          <p className="text-white/80 mt-3 text-sm sm:text-base">
            2590 Nature Park Drive, Suite 275 · North Las Vegas, NV 89084
          </p>
        </div>
      </div>
    </section>
  );
}
