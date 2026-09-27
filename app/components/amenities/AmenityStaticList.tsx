'use client';

import {
  type AmenityCategoryId,
  amenityCategories,
  directionsUrlForAddress,
} from '../../../lib/amenities/community-map-config';
import {
  curatedAmenities,
  curatedAmenitiesForCategory,
  formatCuratedAddress,
} from '../../../lib/amenities/curated-amenities';

type AmenityStaticListProps = {
  activeCategory: AmenityCategoryId;
  onCategoryChange?: (id: AmenityCategoryId) => void;
  showCategoryFilters?: boolean;
  compact?: boolean;
};

export default function AmenityStaticList({
  activeCategory,
  onCategoryChange,
  showCategoryFilters = true,
  compact = false,
}: AmenityStaticListProps) {
  const items = curatedAmenitiesForCategory(activeCategory);
  const fallbackItems = items.length > 0 ? items : curatedAmenities.slice(0, compact ? 4 : 8);

  return (
    <div>
      {showCategoryFilters && onCategoryChange && (
        <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Amenity categories">
          {amenityCategories.map((cat) => {
            const selected = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={cat.ariaLabel}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c5aa0] ${
                  selected
                    ? 'bg-[#2c5aa0] text-white border-[#2c5aa0]'
                    : 'bg-white text-[#1a365d] border-gray-200 hover:border-[#2c5aa0]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      <ul className={`space-y-3 ${compact ? '' : 'mb-2'}`} aria-live="polite">
        {fallbackItems.map((place) => {
          const address = formatCuratedAddress(place);
          return (
            <li key={place.id} className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                {amenityCategories.find((c) => c.id === place.category)?.label ?? place.category} ·{' '}
                {place.driveNote}
              </p>
              <p className="font-bold text-lg" style={{ color: '#2c5aa0' }}>
                {place.name}
              </p>
              <p className="text-sm text-gray-600 mt-1">{address}</p>
              {!compact && (
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{place.description}</p>
              )}
              <a
                href={directionsUrlForAddress(address)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-3 px-4 py-2 rounded-lg text-sm font-semibold text-white"
                style={{ backgroundColor: '#ed8936' }}
              >
                Directions
              </a>
            </li>
          );
        })}
      </ul>
      {items.length === 0 && (
        <p className="text-sm text-gray-600">
          No curated listings in this category yet — use the map search or open Google Maps for live
          results.
        </p>
      )}
    </div>
  );
}
