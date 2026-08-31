import CdnImage from './CdnImage';

type HeroBackgroundProps = {
  src: string;
  alt: string;
  /**
   * Overlay must stay at ~40–55% opacity. 90% navy/purple makes the photo
   * look like a solid color — the failure mode this component exists to stop.
   */
  overlayClassName?: string;
  priority?: boolean;
};

const DEFAULT_OVERLAY = 'bg-gradient-to-r from-[#0A2540]/55 via-[#0A2540]/40 to-[#1a365d]/50';

/**
 * Full-bleed photo behind page heroes. Cloudflare R2 primary, Git /public backup.
 */
export default function HeroBackground({
  src,
  alt,
  overlayClassName = DEFAULT_OVERLAY,
  priority = true,
}: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0">
      <CdnImage
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        quality={80}
        className="object-cover"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden />
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </div>
  );
}
