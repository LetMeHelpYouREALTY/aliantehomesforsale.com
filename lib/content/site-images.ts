import { siteConfig } from '../site-config';

export type SiteImage = {
  src: string;
  alt: string;
};

const img = (file: string, alt: string): SiteImage => ({
  src: `/images/${file}`,
  alt,
});

/** Homepage OG / Twitter card — 1200×630, matches site title. */
export const ogImage: SiteImage = {
  src: '/og-image.jpg',
  alt: 'Aliante North Las Vegas real estate and homes for sale in 89084',
};

const homeSlide1 = img(
  'home-1.jpg',
  'Aliante North Las Vegas homes for sale along a desert residential street'
);
const homeSlide2 = img(
  'home-2.jpg',
  'Gated luxury community entrance in Aliante, North Las Vegas 89084'
);
const homeSlide3 = img(
  'home-3.jpg',
  'Golf-course home overlooking a fairway in Aliante, North Las Vegas'
);

export const homeHeroSlides: readonly [SiteImage, SiteImage, SiteImage] = [
  homeSlide1,
  homeSlide2,
  homeSlide3,
];

export const siteImages = {
  og: ogImage,
  agent: {
    src: '/images/dr-jan-duffy.png',
    alt: 'Dr. Jan Duffy, Aliante North Las Vegas real estate agent',
  },
  homeSlides: homeHeroSlides,
  homesForSale: img(
    'homes-for-sale.jpg',
    'Aliante homes for sale on a North Las Vegas 89084 street'
  ),
  search: img(
    'search.jpg',
    'Aerial view of Aliante North Las Vegas residential streets for MLS search'
  ),
  golf: img('golf.jpg', 'Golf-course homes near Club Aliante in North Las Vegas 89084'),
  gated: img('gated.jpg', 'Gated community entrance in Aliante, North Las Vegas'),
  neighborhoods: img(
    'neighborhoods.jpg',
    'Aliante neighborhoods in North Las Vegas 89084 master-planned streets'
  ),
  prominence: img(
    'prominence.jpg',
    'Luxury gated homes in The Prominence, Aliante, North Las Vegas 89084'
  ),
  desertWillows: img(
    'desert-willows.jpg',
    'Single-family homes in Desert Willows, Aliante, North Las Vegas'
  ),
  clubAliante: img(
    'club-aliante.jpg',
    'Golf-course homes at Club Aliante in North Las Vegas 89084'
  ),
  paseos: img('paseos.jpg', 'Open-access village homes in The Paseos, Aliante, North Las Vegas'),
  tuleSprings: img(
    'tule-springs.jpg',
    'New construction homes near Tule Springs and Aliante, North Las Vegas'
  ),
  sunCity: img('sun-city.jpg', 'Sun City Aliante 55+ Del Webb homes in North Las Vegas 89084'),
  compare: img(
    'compare.jpg',
    'Aliante North Las Vegas neighborhood comparison of gated and golf-course streets'
  ),
  schools: img(
    'schools.jpg',
    'School campus building serving Aliante and North Las Vegas addresses'
  ),
  builders: img('builders.jpg', 'New construction builders in Aliante and Tule Springs'),
  lennar: img(
    'lennar.jpg',
    'Lennar new construction home exterior in the Aliante North Las Vegas area'
  ),
  drHorton: img('dr-horton.jpg', 'D.R. Horton new construction in Tule Springs, North Las Vegas'),
  triPointe: img(
    'tri-pointe.jpg',
    'Tri Pointe Homes new construction in North Las Vegas near Aliante'
  ),
  tollBrothers: img(
    'toll-brothers.jpg',
    'Toll Brothers luxury home exterior in the North Las Vegas luxury market'
  ),
  richmondAmerican: img(
    'richmond-american.jpg',
    'Richmond American Homes new construction in North Las Vegas'
  ),
  incentives: img(
    'incentives.jpg',
    'Home buyer reviewing new construction design options in Aliante, Nevada'
  ),
  about: img('about.jpg', 'Real estate office serving Aliante, North Las Vegas since 2018'),
  contact: img(
    'contact.jpg',
    'Professional office exterior near 2590 Nature Park Drive, North Las Vegas 89084'
  ),
  marketReport: img(
    'market-report.jpg',
    'Aliante 89084 housing grid at dusk for the market report'
  ),
  buyerGuide: img('buyer-guide.jpg', 'Aliante home buyer tour of a North Las Vegas 89084 house'),
  sellerChecklist: img(
    'seller-checklist.jpg',
    'Staged Aliante living room ready for MLS photos in North Las Vegas'
  ),
  homeValuation: img(
    'home-valuation.jpg',
    'Aliante North Las Vegas house at twilight for a comparative market analysis'
  ),
  mortgage: img(
    'mortgage.jpg',
    'Aliante home used to estimate a mortgage payment, not a rate lock'
  ),
  investment: img(
    'investment.jpg',
    'Aliante North Las Vegas investment property on a residential street'
  ),
} as const;

/** Hero photo for each public pathname (matches that page’s H1). */
export const pageHeroByPath: Record<string, SiteImage> = {
  '/': homeSlide1,
  '/homes-for-sale': siteImages.homesForSale,
  '/search': siteImages.search,
  '/golf-homes': siteImages.golf,
  '/gated-communities': siteImages.gated,
  '/neighborhoods': siteImages.neighborhoods,
  '/neighborhoods/prominence': siteImages.prominence,
  '/neighborhoods/desert-willows': siteImages.desertWillows,
  '/neighborhoods/club-aliante': siteImages.clubAliante,
  '/neighborhoods/paseos': siteImages.paseos,
  '/neighborhoods/tule-springs': siteImages.tuleSprings,
  '/neighborhoods/sun-city': siteImages.sunCity,
  '/neighborhoods/compare': siteImages.compare,
  '/sun-city-aliante': siteImages.sunCity,
  '/schools': siteImages.schools,
  '/builders': siteImages.builders,
  '/new-construction': siteImages.builders,
  '/builders/lennar': siteImages.lennar,
  '/builders/dr-horton': siteImages.drHorton,
  '/builders/tri-pointe': siteImages.triPointe,
  '/builders/del-webb': siteImages.sunCity,
  '/builders/toll-brothers': siteImages.tollBrothers,
  '/builders/richmond-american': siteImages.richmondAmerican,
  '/builders/incentives': siteImages.incentives,
  '/about': siteImages.about,
  '/contact': siteImages.contact,
  '/market-report': siteImages.marketReport,
  '/buyer-guide': siteImages.buyerGuide,
  '/seller-checklist': siteImages.sellerChecklist,
  '/home-valuation': siteImages.homeValuation,
  '/mortgage-calculator': siteImages.mortgage,
  '/investment-analysis': siteImages.investment,
  '/privacy-policy': siteImages.about,
  '/terms-of-service': siteImages.about,
  '/accessibility': siteImages.contact,
  '/fair-housing': siteImages.about,
};

export function pageHero(path: string): SiteImage {
  return pageHeroByPath[path] ?? ogImage;
}

/** Share card image: homepage keeps the 1200×630 OG crop; inner pages use the H1 photo. */
export function pageOgImage(path: string): SiteImage {
  return path === '/' ? ogImage : pageHero(path);
}

export function absoluteImageUrl(image: SiteImage): string {
  if (image.src.startsWith('http://') || image.src.startsWith('https://')) {
    return image.src;
  }
  return `${siteConfig.siteUrl}${image.src}`;
}
