/**
 * RealScout office listings widget section.
 * Renders below the fold on every page. Script must be loaded once in root layout.
 */
const widgetMarkup = `
<style>
  realscout-office-listings {
    --rs-listing-divider-color: #0e64c8;
    width: 100%;
  }
</style>
<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC,OTHER" price-min="500000" price-max="800000"></realscout-office-listings>
`;

export default function RealScoutOfficeListingsSection() {
  return (
    <section
      className="realScout-office-listings-section w-full border-t border-slate-200 bg-slate-50/80 py-10 md:py-14"
      aria-label="Featured listings"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Homes for sale</h2>
        <div className="min-h-[200px] w-full" dangerouslySetInnerHTML={{ __html: widgetMarkup }} />
      </div>
    </section>
  );
}
