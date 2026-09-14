import AgentWelcomeSection from './AgentWelcomeSection';
import AlianteFAQ from './AlianteFAQ';
import BuyerPathSection from './BuyerPathSection';
import EnhancedHero from './EnhancedHero';
import EnhancedMarketInsights from './EnhancedMarketInsights';
import EnhancedPropertyTypes from './EnhancedPropertyTypes';
import EnhancedTrustAuthority from './EnhancedTrustAuthority';
import FeaturedCommunities from './FeaturedCommunities';
import GbpPhotoStrip from './GbpPhotoStrip';
import HomeCTAStrip from './HomeCTAStrip';
import HyperlocalRealtorServices from './HyperlocalRealtorServices';
import LifestyleHomesSection from './LifestyleHomesSection';
import NearbyLocatorMap from './NearbyLocatorMap';
import OfficeLocation from './OfficeLocation';
import RealScoutSearchSection from './RealScoutSearchSection';
import TestimonialsSection from './TestimonialsSection';

/** Top half: Hero through Trust. Latest News is rendered between this and HomeSectionsBottom in page.tsx. */
export function HomeSectionsTop() {
  return (
    <>
      <EnhancedHero />
      <RealScoutSearchSection />
      <AgentWelcomeSection />
      <LifestyleHomesSection />
      <BuyerPathSection />
      <FeaturedCommunities />
      <HyperlocalRealtorServices />
      <EnhancedPropertyTypes />
      <EnhancedMarketInsights />
      <EnhancedTrustAuthority />
      <TestimonialsSection />
      <GbpPhotoStrip />
    </>
  );
}

/** Bottom half: CTA, NAP, map, FAQ. */
export function HomeSectionsBottom() {
  return (
    <>
      <HomeCTAStrip />
      <OfficeLocation />
      <NearbyLocatorMap />
      <AlianteFAQ />
    </>
  );
}
