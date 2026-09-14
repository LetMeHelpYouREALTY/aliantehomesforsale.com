'use client';

import Image from 'next/image';
import type { SiteImage } from '../../lib/content/site-images';

type CardPhotoProps = {
  image: SiteImage;
  heightClass?: string;
};

/** Thumbnail photo for H3 cards — replaces emoji placeholders. */
export default function CardPhoto({ image, heightClass = 'h-32' }: CardPhotoProps) {
  return (
    <div className={`relative ${heightClass} w-full overflow-hidden rounded-lg mb-4`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
    </div>
  );
}
