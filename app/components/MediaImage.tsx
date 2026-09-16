'use client';

import Image from 'next/image';
import { useEffect, useState, type ComponentProps } from 'react';
import { isCloudflareImagesDeliverySrc } from '../../lib/cloudflare-images';
import { gitFallbackSrc } from '../../lib/media';

type MediaImageProps = ComponentProps<typeof Image> & {
  src: string;
};

/**
 * next/image wrapper: Cloudflare Images/R2 in production, git public/ on error.
 * imagedelivery.net already transcodes to AVIF/WebP, so skip Vercel re-optimization.
 */
export default function MediaImage({ src, unoptimized, onError, ...rest }: MediaImageProps) {
  const fallback = gitFallbackSrc(src);
  const [current, setCurrent] = useState(src);

  useEffect(() => {
    setCurrent(src);
  }, [src]);

  const skipVercelOptimize = unoptimized ?? isCloudflareImagesDeliverySrc(current);

  return (
    <Image
      {...rest}
      src={current}
      unoptimized={skipVercelOptimize}
      onError={(event) => {
        if (fallback && current !== fallback) {
          setCurrent(fallback);
        }
        onError?.(event);
      }}
    />
  );
}
