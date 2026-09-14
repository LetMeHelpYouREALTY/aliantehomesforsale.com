import Image from 'next/image';
import type { SiteImage } from '../../lib/content/site-images';

type HeadingPhotoProps = {
  image: SiteImage;
  caption?: string;
  priority?: boolean;
};

/** H2/H3 section photo — heading-matched, lazy-loaded below the fold. */
export default function HeadingPhoto({ image, caption, priority = false }: HeadingPhotoProps) {
  return (
    <figure className="mb-8 overflow-hidden rounded-2xl shadow-md border border-gray-100">
      <Image
        src={image.src}
        alt={image.alt}
        width={1600}
        height={900}
        sizes="(max-width: 1024px) 100vw, 1024px"
        priority={priority}
        quality={80}
        className="w-full h-auto object-cover aspect-video"
      />
      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-gray-600 bg-gray-50">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
