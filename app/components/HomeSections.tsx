'use client';

import EnhancedHero from './EnhancedHero';
import RealScoutSearchSection from './RealScoutSearchSection';
import EnhancedFeaturedProperties from './EnhancedFeaturedProperties';
import AgentWelcomeSection from './AgentWelcomeSection';
import HyperlocalRealtorServices from './HyperlocalRealtorServices';
import EnhancedPropertyTypes from './EnhancedPropertyTypes';
import EnhancedMarketInsights from './EnhancedMarketInsights';
import EnhancedTrustAuthority from './EnhancedTrustAuthority';
import HomeCTAStrip from './HomeCTAStrip';
import AlianteFAQ from './AlianteFAQ';

/** Top half: Hero through Trust. Latest News is rendered between this and HomeSectionsBottom in page.tsx. */
export function HomeSectionsTop() {
  return (
    <>
      <EnhancedHero />
      <RealScoutSearchSection />
      <EnhancedFeaturedProperties />
      <AgentWelcomeSection />
      <HyperlocalRealtorServices />
      <EnhancedPropertyTypes />
      <EnhancedMarketInsights />
      <EnhancedTrustAuthority />
    </>
  );
}

/** Bottom half: CTA strip then FAQ. */
export function HomeSectionsBottom() {
  return (
    <>
      <HomeCTAStrip />
      <AlianteFAQ />
    </>
  );
}
