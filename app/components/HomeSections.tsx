'use client';

import AgentWelcomeSection from './AgentWelcomeSection';
import AlianteFAQ from './AlianteFAQ';
import BuyerPathSection from './BuyerPathSection';
import EnhancedHero from './EnhancedHero';
import EnhancedMarketInsights from './EnhancedMarketInsights';
import EnhancedPropertyTypes from './EnhancedPropertyTypes';
import EnhancedTrustAuthority from './EnhancedTrustAuthority';
import FeaturedCommunities from './FeaturedCommunities';
import HomeCTAStrip from './HomeCTAStrip';
import HyperlocalRealtorServices from './HyperlocalRealtorServices';
import LifestyleHomesSection from './LifestyleHomesSection';
import NearbyLocatorMap from './NearbyLocatorMap';
import RealScoutSearchSection from './RealScoutSearchSection';
import TestimonialsSection from './TestimonialsSection';

/** Top half: Hero through Trust. Latest News is rendered between this and HomeSectionsBottom in page.tsx. */
export function HomeSectionsTop() {
  return (
    <>
      <EnhancedHero />
      <RealScoutSearchSection />
      <LifestyleHomesSection />
      <AgentWelcomeSection />
      <BuyerPathSection />
      <FeaturedCommunities />
      <HyperlocalRealtorServices />
      <EnhancedPropertyTypes />
      <EnhancedMarketInsights />
      <EnhancedTrustAuthority />
      <TestimonialsSection />
    </>
  );
}

/** Bottom half: CTA strip then FAQ. */
export function HomeSectionsBottom() {
  return (
    <>
      <HomeCTAStrip />
      <NearbyLocatorMap />
      <AlianteFAQ />
    </>
  );
}
