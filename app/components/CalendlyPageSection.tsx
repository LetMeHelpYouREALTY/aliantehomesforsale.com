'use client';

import { usePathname } from 'next/navigation';
import { calendlyCopyForPath, hasPageInlineCalendly, isLegalPath } from '../../lib/calendly';
import CalendlySection from './CalendlySection';

/**
 * Adds the matching Calendly event below page content on every non-legal route
 * that does not already render an inline scheduler in the main column.
 */
export default function CalendlyPageSection() {
  const pathname = usePathname() || '/';

  if (isLegalPath(pathname) || hasPageInlineCalendly(pathname)) {
    return null;
  }

  const copy = calendlyCopyForPath(pathname);
  return (
    <CalendlySection event={copy.event} heading={copy.heading} description={copy.description} />
  );
}
