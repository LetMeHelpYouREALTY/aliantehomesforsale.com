import type { ReactNode } from 'react';
import RealScoutOfficeListingsSection from './RealScoutOfficeListingsSection';

/**
 * Places the RealScout office-listings carousel immediately after a page hero
 * so available MLS homes are the first content buyers see.
 */
export default function AfterHeroListings({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <RealScoutOfficeListingsSection />
    </>
  );
}
