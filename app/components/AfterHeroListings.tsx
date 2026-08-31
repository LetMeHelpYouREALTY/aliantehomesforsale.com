'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { isLegalPath } from '../../lib/calendly';
import RealScoutOfficeListingsSection from './RealScoutOfficeListingsSection';

/**
 * Places the RealScout office-listings carousel immediately after a page hero
 * so available MLS homes are the first content buyers see. Legal pages skip it.
 */
export default function AfterHeroListings({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/';
  const showListings = !isLegalPath(pathname);

  return (
    <>
      {children}
      {showListings ? <RealScoutOfficeListingsSection /> : null}
    </>
  );
}
