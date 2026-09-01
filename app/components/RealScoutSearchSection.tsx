'use client';

import RealScoutAdvancedSearch from './RealScoutAdvancedSearch';

/**
 * Primary lead-gen section: RealScout MLS search.
 * Renders below the hero / below the fold on every page via root layout.
 */
export default function RealScoutSearchSection() {
  return (
    <section
      id="realscout-search"
      className="w-full border-t border-slate-200 bg-white py-10 md:py-14"
      aria-label="Search homes for sale"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-6 text-center"
          style={{ color: '#1a365d' }}
        >
          Find homes for sale — confirm ZIP on each card
        </h2>
        <div className="realscout-search-section">
          <style>{`.realscout-search-section realscout-advanced-search { max-width: 100%; width: 100%; }`}</style>
          <RealScoutAdvancedSearch />
        </div>
        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
          <p className="text-slate-600 mb-2">Need personalized help?</p>
          <a
            href="tel:+17027077273"
            className="inline-flex items-center gap-2 text-xl font-bold hover:underline"
            style={{ color: '#2c5aa0' }}
          >
            <span aria-hidden="true">📞</span> (702) 707-7273
          </a>
        </div>
      </div>
    </section>
  );
}
