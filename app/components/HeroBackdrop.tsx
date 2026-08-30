import Image from 'next/image';
import type { SiteImage } from '../../lib/content/site-images';

type HeroBackdropProps = {
  image: SiteImage;
  priority?: boolean;
};

/** Full-bleed hero photo with a dark overlay so white H1 text stays readable. */
export default function HeroBackdrop({ image, priority = true }: HeroBackdropProps) {
  return (
    <div className="absolute inset-0">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        priority={priority}
        quality={80}
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/82 via-slate-900/68 to-indigo-950/72"
        aria-hidden
      />
    </div>
  );
}
