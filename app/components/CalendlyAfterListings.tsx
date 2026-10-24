'use client';

import { usePathname } from 'next/navigation';
import { calendlyEmbedUrl, calendlyEventForPath } from '../../lib/calendly';

/** Booking strip placed directly after a RealScout listings or search section. */
export default function CalendlyAfterListings() {
  const pathname = usePathname() || '/';
  const url = calendlyEmbedUrl(calendlyEventForPath(pathname), {
    pathname,
    medium: 'after-listings',
  });

  return (
    <div className="mx-auto my-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white px-6 py-5 sm:flex-row">
      <p className="text-base text-gray-800">
        See a home you like? Pick a time with Dr. Jan Duffy.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || !window.Calendly) return;
          event.preventDefault();
          window.Calendly.initPopupWidget({ url });
        }}
        className="inline-block rounded-lg bg-[#2c5aa0] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1a365d]"
      >
        Schedule time with me
      </a>
    </div>
  );
}
