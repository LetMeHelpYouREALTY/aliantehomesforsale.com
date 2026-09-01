import {
  nearbyPlaceDirectionsUrl,
  nearbyPlaceSearchUrl,
  nearbyPlaces,
} from '../../lib/content/aliante-content';
import { siteConfig } from '../../lib/site-config';

/**
 * GBP “Show what’s nearby” — Google Maps locator + curated Aliante attractions/businesses.
 */
export default function NearbyLocatorMap() {
  return (
    <section
      id="nearby"
      className="py-16 px-4"
      style={{ backgroundColor: '#f8f9fa' }}
      aria-labelledby="nearby-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="nearby-heading"
            className="speakable text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            What&apos;s Nearby in Aliante
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover parks, golf, dining, and everyday services near{' '}
            {siteConfig.address.streetAddress} — and near the homes you&apos;ll tour in North Las
            Vegas {siteConfig.zipCode}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch mb-10">
          <div className="min-h-[380px] lg:min-h-[480px]">
            <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              <iframe
                title="Google Map of attractions and businesses near Aliante North Las Vegas"
                src={siteConfig.maps.nearbyEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
              Explore the neighborhood
            </h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Use the map to browse what&apos;s around Aliante Corporate Center, or open a place
              below for turn-by-turn directions in Google Maps.
            </p>
            <ul className="space-y-3 mb-8">
              {nearbyPlaces.map((place) => (
                <li
                  key={place.id}
                  className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                        {place.category} · {place.driveNote}
                      </p>
                      <p className="font-bold text-lg" style={{ color: '#2c5aa0' }}>
                        {place.name}
                      </p>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {place.description}
                      </p>
                    </div>
                    <div className="flex flex-row sm:flex-col gap-2 shrink-0">
                      <a
                        href={nearbyPlaceDirectionsUrl(place.mapsQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white"
                        style={{ backgroundColor: '#ed8936' }}
                      >
                        Directions
                      </a>
                      <a
                        href={nearbyPlaceSearchUrl(place.mapsQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center px-4 py-2 rounded-lg text-sm font-semibold border-2"
                        style={{ borderColor: '#2c5aa0', color: '#2c5aa0' }}
                      >
                        View map
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.maps.nearbySearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-6 py-3 rounded-lg font-semibold text-white"
                style={{ backgroundColor: '#2c5aa0' }}
              >
                Open full nearby map
              </a>
              <a
                href={siteConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-6 py-3 rounded-lg font-semibold border-2"
                style={{ borderColor: '#16B286', color: '#16B286' }}
              >
                Directions to the office
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
