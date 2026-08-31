'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { gitBackupSrc, primarySrc } from '../../lib/site-images';

type CdnImageProps = Omit<ImageProps, 'src'> & {
  src: string;
};

/**
 * Loads from Cloudflare R2 first, then falls back to the Git copy in /public.
 */
export default function CdnImage({ src, alt, onError, ...rest }: CdnImageProps) {
  const primary = primarySrc(src);
  const backup = gitBackupSrc(src);
  const [current, setCurrent] = useState(primary);

  return (
    <Image
      {...rest}
      src={current}
      alt={alt}
      onError={(event) => {
        if (current !== backup) setCurrent(backup);
        onError?.(event);
      }}
    />
  );
}
