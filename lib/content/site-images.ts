import { mediaSrc } from '../media';
import { siteConfig } from '../site-config';

export type SiteImage = {
  src: string;
  alt: string;
};

const img = (file: string, alt: string): SiteImage => ({
  src: mediaSrc(`/images/${file}`),
  alt,
});

/** Homepage OG / Twitter card — 1200×630, Aliante desert street (not a tropical stock house). */
export const ogImage: SiteImage = {
  src: mediaSrc('/og-image.jpg'),
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
    src: mediaSrc('/images/dr-jan-duffy.png'),
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
  golfFairway: img(
    'golf-fairway-h2.jpg',
    'Fairway lot next to Aliante Golf Club in North Las Vegas 89084'
  ),
  gated: img('gated.jpg', 'Gated community entrance in Aliante, North Las Vegas'),
  gatedGate: img(
    'gated-gate.jpg',
    'Controlled-access gate at an Aliante village in North Las Vegas 89084'
  ),
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
  sunCityRec: img(
    'sun-city-rec.jpg',
    'Sun City Aliante 55+ recreation campus with pool and courts in North Las Vegas 89084'
  ),
  compare: img(
    'compare.jpg',
    'Aliante North Las Vegas neighborhood comparison of gated and golf-course streets'
  ),
  schools: img(
    'schools.jpg',
    'School campus building serving Aliante and North Las Vegas addresses'
  ),
  builders: img('builders.jpg', 'New construction builders in Aliante and Tule Springs'),
  newConstruction: img(
    'new-construction.jpg',
    'New construction homes under way in Aliante and Tule Springs, North Las Vegas'
  ),
  lennar: img(
    'lennar.jpg',
    'Lennar new construction home exterior in the Aliante North Las Vegas area'
  ),
  drHorton: img('dr-horton.jpg', 'D.R. Horton new construction in Tule Springs, North Las Vegas'),
  triPointe: img(
    'tri-pointe.jpg',
    'Tri Pointe Homes new construction in North Las Vegas near Aliante'
  ),
  delWebb: img(
    'del-webb.jpg',
    'Del Webb 55+ single-story homes at Sun City Aliante, North Las Vegas 89084'
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
    'New construction design-center options for an Aliante, Nevada buyer'
  ),
  about: img('about.jpg', 'Real estate office serving Aliante, North Las Vegas since 2018'),
  contact: img(
    'contact.jpg',
    'Professional office exterior near 2590 Nature Park Drive, North Las Vegas 89084'
  ),
  officeNap: img(
    'office-nap.jpg',
    'Aliante Corporate Center at 2590 Nature Park Drive, Suite 275, North Las Vegas 89084'
  ),
  amenities: img(
    'amenities.jpg',
    'Aliante community recreation campus with pool and desert landscaping in North Las Vegas 89084'
  ),
  fairHousing: img(
    'fair-housing.jpg',
    'Aliante home exterior in North Las Vegas 89084 — equal housing opportunity, property only'
  ),
  privacyPolicy: img(
    'privacy-policy.jpg',
    'Aliante real estate office interior used for privacy policy at North Las Vegas 89084'
  ),
  termsOfService: img(
    'terms-of-service.jpg',
    'Aliante Corporate Center lobby for website terms of service, North Las Vegas 89084'
  ),
  accessibility: img(
    'accessibility.jpg',
    'Accessible office entrance at 2590 Nature Park Drive, North Las Vegas 89084'
  ),
  buyerTour: img(
    'buyer-tour.jpg',
    'Interior of an Aliante listing prepared for a buyer tour in North Las Vegas 89084'
  ),
  buyerPath: img(
    'buyer-path.jpg',
    'Aliante residential street for the search, tour, and close path in North Las Vegas 89084'
  ),
  constructionProcess: img(
    'construction-process.jpg',
    'New-construction framing on a North Las Vegas desert lot near Aliante'
  ),
  gatedHoa: img(
    'gated-hoa.jpg',
    'Gated village monument and HOA architectural walls in Aliante, North Las Vegas 89084'
  ),
  schoolsSecondary: img(
    'schools-secondary.jpg',
    'Secondary campus building serving Aliante and North Las Vegas addresses'
  ),
  seasonalMarket: img(
    'seasonal-market.jpg',
    'Aliante 89084 residential streets at dusk for seasonal listing volume'
  ),
  propertyTypesMarket: img(
    'property-types-market.jpg',
    'Different Aliante home types on a North Las Vegas 89084 street'
  ),
  valuationFactors: img(
    'valuation-factors.jpg',
    'Aliante home exterior used to explain village comps in ZIP 89084'
  ),
  cmaNextSteps: img(
    'cma-next-steps.jpg',
    'Aliante Corporate Center conference table for CMA review in North Las Vegas 89084'
  ),
  rentalHoa: img(
    'rental-hoa.jpg',
    'Aliante rental single-family home on a North Las Vegas 89084 street'
  ),
  buyHold: img(
    'buy-hold.jpg',
    'Established Aliante residential street for buy-and-hold in ZIP 89084'
  ),
  lenderMeeting: img(
    'lender-meeting.jpg',
    'North Las Vegas office campus for mortgage and down-payment conversations'
  ),
  villageTour: img(
    'village-tour.jpg',
    'Aliante master-planned streets to tour with a buyer’s agent in ZIP 89084'
  ),
  writeOffer: img(
    'write-offer.jpg',
    'Office table used to write an offer on an Aliante home in North Las Vegas'
  ),
  pricingComps: img(
    'pricing-comps.jpg',
    'Aliante curb appeal prepared for MLS pricing from 89084 comps'
  ),
  negotiateClose: img(
    'negotiate-close.jpg',
    'North Las Vegas office lobby for negotiating and closing an Aliante sale'
  ),
  golfLotTour: img(
    'golf-lot-tour.jpg',
    'Patio overlooking an Aliante Golf Club fairway lot in North Las Vegas 89084'
  ),
  sunCityPlans: img(
    'sun-city-plans.jpg',
    'Single-story Del Webb home exterior at Sun City Aliante, North Las Vegas 89084'
  ),
  chooseBuilder: img(
    'choose-builder.jpg',
    'New-construction model-home street near Aliante and Tule Springs'
  ),
  quickMoveIn: img(
    'quick-move-in.jpg',
    'Finished quick-move-in new construction near Aliante, North Las Vegas'
  ),
  hoaRules: img(
    'hoa-rules.jpg',
    'Sun City Aliante recreation campus for HOA dues and occupancy rules in 89084'
  ),
  mlsData: img('mls-data.jpg', 'MLS search workspace for Aliante North Las Vegas 89084 listings'),
  buyerSearch: img(
    'buyer-search.jpg',
    'Aliante residential street for a live MLS home search in ZIP 89084'
  ),
  buyerClose: img(
    'buyer-close.jpg',
    'North Las Vegas closing table for an Aliante purchase in ZIP 89084'
  ),
  listingMarketing: img(
    'listing-marketing.jpg',
    'Listing photography of an Aliante home interior in North Las Vegas 89084'
  ),
  healthcareNlv: img('healthcare-nlv.jpg', 'North Las Vegas medical campus near Aliante ZIP 89084'),
  elementaryCampus: img(
    'elementary-campus.jpg',
    'Elementary campus serving Aliante and North Las Vegas addresses'
  ),
  sellerPrep: img(
    'seller-prep.jpg',
    'Aliante home curb appeal prepared for MLS listing photos in North Las Vegas 89084'
  ),
  propertyManagement: img(
    'property-management.jpg',
    'Aliante Corporate Center office building where homes are listed from Suite 275, North Las Vegas'
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
  '/new-construction': siteImages.newConstruction,
  '/builders/lennar': siteImages.lennar,
  '/builders/dr-horton': siteImages.drHorton,
  '/builders/tri-pointe': siteImages.triPointe,
  '/builders/del-webb': siteImages.delWebb,
  '/builders/toll-brothers': siteImages.tollBrothers,
  '/builders/richmond-american': siteImages.richmondAmerican,
  '/builders/incentives': siteImages.incentives,
  '/about': siteImages.about,
  '/contact': siteImages.officeNap,
  '/market-report': siteImages.marketReport,
  '/buyer-guide': siteImages.buyerTour,
  '/seller-checklist': siteImages.sellerPrep,
  '/home-valuation': siteImages.homeValuation,
  '/mortgage-calculator': siteImages.mortgage,
  '/investment-analysis': siteImages.investment,
  '/property-management': siteImages.propertyManagement,
  '/privacy-policy': siteImages.privacyPolicy,
  '/terms-of-service': siteImages.termsOfService,
  '/accessibility': siteImages.accessibility,
  '/fair-housing': siteImages.fairHousing,
};

/** Photos aligned to GBP categories: street, office, golf, 55+ village. */
export const gbpPhotoStrip: readonly SiteImage[] = [
  ogImage,
  siteImages.officeNap,
  siteImages.golfFairway,
  siteImages.sunCity,
  siteImages.gatedGate,
  siteImages.amenities,
  siteImages.villageTour,
  siteImages.hoaRules,
  siteImages.buyerSearch,
  siteImages.listingMarketing,
];

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
