/**
 * Cloudflare R2 is the primary image store. Git copies under /public/images are the backup.
 *
 * Set NEXT_PUBLIC_CLOUDFLARE_R2_BASE to the R2 custom domain once it is live
 * (intended: https://images.aliantehomesforsale.com — orange-cloud that subdomain only;
 * keep www on Vercel DNS-only / gray cloud).
 *
 * Until that env is set, the site serves the Git backup so heroes never collapse to a solid color.
 */
export const CLOUDFLARE_R2_BASE = (process.env.NEXT_PUBLIC_CLOUDFLARE_R2_BASE ?? '').replace(
  /\/$/,
  ''
);

/** Git backup path, always site-origin (e.g. /images/heroes/luxury-pool.jpg). */
export function gitBackupSrc(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return path.startsWith('/') ? path : `/${path}`;
}

/** Cloudflare CDN URL when configured; otherwise the Git backup. */
export function primarySrc(path: string): string {
  const local = gitBackupSrc(path);
  if (!CLOUDFLARE_R2_BASE) return local;
  if (local.startsWith('http')) return local;
  return `${CLOUDFLARE_R2_BASE}${local}`;
}

export const imagePaths = {
  heroes: {
    luxuryPool: '/images/heroes/luxury-pool.jpg',
    modernExterior: '/images/heroes/modern-exterior.jpg',
    contemporaryHome: '/images/heroes/contemporary-home.jpg',
    golfEstate: '/images/heroes/golf-estate.jpg',
    suburbanHome: '/images/heroes/suburban-home.jpg',
    newConstruction: '/images/heroes/new-construction.jpg',
  },
  communities: {
    prominence: '/images/communities/prominence.jpg',
    desertWillows: '/images/communities/desert-willows.jpg',
    clubAliante: '/images/communities/club-aliante.jpg',
    paseos: '/images/communities/paseos.jpg',
    sunCity: '/images/communities/sun-city.jpg',
    tuleSprings: '/images/communities/tule-springs.jpg',
  },
} as const;

export const heroImages = {
  home: [
    {
      src: imagePaths.heroes.luxuryPool,
      alt: 'Luxury pool home in Aliante, North Las Vegas',
    },
    {
      src: imagePaths.heroes.modernExterior,
      alt: 'Modern home exterior in Aliante, North Las Vegas',
    },
    {
      src: imagePaths.heroes.contemporaryHome,
      alt: 'Contemporary North Las Vegas community home',
    },
  ],
  about: {
    src: imagePaths.heroes.modernExterior,
    alt: 'Modern Aliante home exterior, North Las Vegas real estate',
  },
  contact: {
    src: imagePaths.heroes.golfEstate,
    alt: 'Golf-course estate in Aliante, North Las Vegas',
  },
  homes: {
    src: imagePaths.heroes.suburbanHome,
    alt: 'Homes for sale in Aliante, North Las Vegas',
  },
  neighborhoods: {
    src: imagePaths.heroes.contemporaryHome,
    alt: 'Aliante neighborhood homes in North Las Vegas',
  },
  newConstruction: {
    src: imagePaths.heroes.newConstruction,
    alt: 'New construction home in Aliante, North Las Vegas',
  },
} as const;
