/**
 * RealScout office listings widget — live MLS cards (replaces fabricated featured listings).
 * Script must be loaded once in root layout. Rendered immediately after every page hero.
 */
const widgetMarkup = `
<style>
  realscout-office-listings {
    --rs-listing-divider-color: #0e64c8;
    width: 100%;
  }
</style>
<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC,OTHER" price-min="300000" price-max="1200000"></realscout-office-listings>
`;

export default function RealScoutOfficeListingsSection() {
  return (
    <section
      className="realScout-office-listings-section w-full border-t border-slate-200 bg-slate-50/80 py-10 md:py-14"
      aria-labelledby="live-listings-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2
            id="live-listings-heading"
            className="speakable text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: '#1a365d' }}
          >
            Live Aliante Homes for Sale
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Current MLS listings for North Las Vegas 89084 — updated about every 15 minutes.
          </p>
        </div>
        <div className="min-h-[200px] w-full" dangerouslySetInnerHTML={{ __html: widgetMarkup }} />
        <p className="mt-6 text-center text-sm text-gray-500">
          Listing data provided via RealScout / Greater Las Vegas Association of REALTORS® MLS.
          Information deemed reliable but not guaranteed.
        </p>
      </div>
    </section>
  );
}
