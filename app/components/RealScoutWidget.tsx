'use client';

import { useEffect } from 'react';

/**
 * RealScout Office Listings Widget - Production Optimized
 *
 * Features:
 * - Real-time MLS data integration
 * - Property interaction tracking → FUB sync
 * - Customizable filters and styling
 * - Event callbacks for property views/favorites
 */

interface RealScoutWidgetProps {
  // Agent configuration
  agentEncodedId?: string;

  // Display options
  sortOrder?: 'STATUS_AND_SIGNIFICANT_CHANGE' | 'PRICE_DESC' | 'PRICE_ASC' | 'NEWEST' | 'BEDS_DESC' | 'SQFT_DESC';
  listingStatus?: string;
  propertyTypes?: string;

  // Filters
  priceMin?: number;
  priceMax?: number;
  bedsMin?: number;
  bathsMin?: number;
  sqftMin?: number;

  // Location filters
  neighborhoods?: string[];
  zipCodes?: string[];

  // Display customization
  layout?: 'grid' | 'list' | 'map';
  showMap?: boolean;
  itemsPerPage?: number;

  // Styling
  dividerColor?: string;
  primaryColor?: string;
  className?: string;

  // Callbacks
  onPropertyView?: (property: any) => void;
  onPropertyFavorite?: (property: any) => void;
  onSearchRefined?: (criteria: any) => void;

  // Analytics
  trackInteractions?: boolean;
  userEmail?: string;
}

export default function RealScoutWidget({
  agentEncodedId = 'QWdlbnQtMjI1MDUw',
  sortOrder = 'STATUS_AND_SIGNIFICANT_CHANGE',
  listingStatus = 'For Sale,Rented',
  propertyTypes = 'SFR,MF,LAL,MOBILE,OTHER',
  priceMin,
  priceMax,
  bedsMin,
  bathsMin,
  sqftMin,
  neighborhoods,
  zipCodes,
  layout = 'grid',
  showMap = false,
  itemsPerPage = 12,
  dividerColor = 'rgb(101, 141, 172)',
  primaryColor = '#2c5aa0',
  className = '',
  onPropertyView,
  onPropertyFavorite,
  onSearchRefined,
  trackInteractions = true,
  userEmail,
}: RealScoutWidgetProps) {
  useEffect(() => {
    // Set up event listeners for RealScout widget interactions
    if (typeof window === 'undefined') return;

    const handlePropertyView = (event: any) => {
      const property = event.detail;
      console.log('[RealScout] Property viewed:', property);

      if (onPropertyView) onPropertyView(property);
      if (trackInteractions && userEmail) {
        trackPropertyInteraction('view', property);
      }
    };

    const handlePropertyFavorite = (event: any) => {
      const property = event.detail;
      console.log('[RealScout] Property favorited:', property);

      if (onPropertyFavorite) onPropertyFavorite(property);
      if (trackInteractions && userEmail) {
        trackPropertyInteraction('favorite', property);
      }
    };

    const handleSearchRefined = (event: any) => {
      const criteria = event.detail;
      console.log('[RealScout] Search refined:', criteria);

      if (onSearchRefined) onSearchRefined(criteria);
      if (trackInteractions && userEmail) {
        trackPropertyInteraction('search', null, criteria);
      }
    };

    // Event listeners (if RealScout emits these events)
    window.addEventListener('realscout:property:view', handlePropertyView);
    window.addEventListener('realscout:property:favorite', handlePropertyFavorite);
    window.addEventListener('realscout:search:refined', handleSearchRefined);

    return () => {
      window.removeEventListener('realscout:property:view', handlePropertyView);
      window.removeEventListener('realscout:property:favorite', handlePropertyFavorite);
      window.removeEventListener('realscout:search:refined', handleSearchRefined);
    };
  }, [onPropertyView, onPropertyFavorite, onSearchRefined, trackInteractions, userEmail]);

  /**
   * Track property interaction to FUB via API
   */
  async function trackPropertyInteraction(
    eventType: 'view' | 'favorite' | 'search',
    property?: any,
    searchCriteria?: any
  ) {
    if (!userEmail) return;

    try {
      await fetch('/api/integrations/property-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: userEmail,
          event_type: eventType,
          property: property ? {
            address: property.address,
            city: property.city,
            state: property.state,
            zip: property.zip,
            price: property.price,
            bedrooms: property.bedrooms,
            bathrooms: property.bathrooms,
            sqft: property.sqft,
            mls_number: property.mlsNumber,
            url: property.url,
          } : undefined,
          search_criteria: searchCriteria,
        }),
      });
    } catch (error) {
      console.error('[RealScout] Failed to track interaction:', error);
    }
  }

  // Build filter attributes
  const filterAttrs: Record<string, string> = {
    'agent-encoded-id': agentEncodedId,
    'sort-order': sortOrder,
    'listing-status': listingStatus,
    'property-types': propertyTypes,
  };

  if (priceMin) filterAttrs['price-min'] = String(priceMin);
  if (priceMax) filterAttrs['price-max'] = String(priceMax);
  if (bedsMin) filterAttrs['beds-min'] = String(bedsMin);
  if (bathsMin) filterAttrs['baths-min'] = String(bathsMin);
  if (sqftMin) filterAttrs['sqft-min'] = String(sqftMin);
  if (neighborhoods?.length) filterAttrs['neighborhoods'] = neighborhoods.join(',');
  if (zipCodes?.length) filterAttrs['zip-codes'] = zipCodes.join(',');
  if (layout) filterAttrs['layout'] = layout;
  if (showMap) filterAttrs['show-map'] = 'true';
  if (itemsPerPage) filterAttrs['items-per-page'] = String(itemsPerPage);

  return (
    <>
      {/* Widget-specific styles */}
      <style jsx global>{`
        realscout-office-listings {
          --rs-listing-divider-color: ${dividerColor};
          --rs-primary-color: ${primaryColor};
          --rs-font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          width: 100%;
          display: block;
        }

        realscout-office-listings::part(listing-card) {
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        realscout-office-listings::part(listing-card):hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        realscout-office-listings::part(price) {
          color: ${primaryColor};
          font-weight: 600;
        }

        realscout-office-listings::part(favorite-button) {
          transition: transform 0.2s;
        }

        realscout-office-listings::part(favorite-button):hover {
          transform: scale(1.1);
        }
      `}</style>

      {/* Widget Container */}
      <div className={`realscout-widget-wrapper ${className}`}>
        <realscout-office-listings
          {...filterAttrs}
        />
      </div>
    </>
  );
}

/**
 * Preset configurations for common use cases
 */

export function RealScoutWidgetLuxury(props: Partial<RealScoutWidgetProps>) {
  return (
    <RealScoutWidget
      priceMin={1000000}
      sortOrder="PRICE_DESC"
      propertyTypes="SFR"
      {...props}
    />
  );
}

export function RealScoutWidgetNewConstruction(props: Partial<RealScoutWidgetProps>) {
  return (
    <RealScoutWidget
      sortOrder="NEWEST"
      listingStatus="For Sale"
      propertyTypes="SFR,MF"
      {...props}
    />
  );
}

export function RealScoutWidgetGated(props: Partial<RealScoutWidgetProps>) {
  return (
    <RealScoutWidget
      neighborhoods={['Prominence', 'Club Aliante']}
      sortOrder="PRICE_DESC"
      priceMin={600000}
      {...props}
    />
  );
}

export function RealScoutWidget55Plus(props: Partial<RealScoutWidgetProps>) {
  return (
    <RealScoutWidget
      neighborhoods={['Sun City Aliante']}
      sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
      priceMin={380000}
      priceMax={650000}
      {...props}
    />
  );
}

export function RealScoutWidgetStarterHomes(props: Partial<RealScoutWidgetProps>) {
  return (
    <RealScoutWidget
      priceMax={450000}
      bedsMin={2}
      sortOrder="PRICE_ASC"
      neighborhoods={['The Paseos', 'Desert Willows']}
      {...props}
    />
  );
}
