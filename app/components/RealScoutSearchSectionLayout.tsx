'use client';

import { usePathname } from 'next/navigation';
import { isLegalPath } from '../../lib/calendly';
import RealScoutSearchSection from './RealScoutSearchSection';

const PAGES_WITH_SEARCH_AFTER_HERO = ['/', '/homes-for-sale', '/search'];

/**
 * Renders RealScout search section in layout on every page except those that
 * already show it right after the hero (home, homes-for-sale) and legal pages.
 */
export default function RealScoutSearchSectionLayout() {
  const pathname = usePathname() || '/';
  if (PAGES_WITH_SEARCH_AFTER_HERO.includes(pathname) || isLegalPath(pathname)) return null;
  return <RealScoutSearchSection />;
}
