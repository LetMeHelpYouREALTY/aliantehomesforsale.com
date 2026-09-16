'use client';

import type { SiteImage } from '../../lib/content/site-images';
import { siteConfig } from '../../lib/site-config';
import AgentPhoto from './AgentPhoto';
import MediaImage from './MediaImage';

type PhotoCtaBandProps = {
  image: SiteImage;
  heading: string;
  headingId?: string;
  children: React.ReactNode;
};

/** Full-bleed H2 CTA with a heading-matched Aliante photo instead of a stock gradient. */
export default function PhotoCtaBand({ image, heading, headingId, children }: PhotoCtaBandProps) {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <MediaImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/86 via-slate-900/74 to-[#0A2540]/80"
          aria-hidden
        />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AgentPhoto size={140} className="mx-auto mb-6 shadow-2xl ring-4 ring-white/40" />
        <h2 id={headingId} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          {heading}
        </h2>
        {children}
        <p className="mt-8 text-white/90 text-lg">
          {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{' '}
          {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
        </p>
      </div>
    </section>
  );
}
