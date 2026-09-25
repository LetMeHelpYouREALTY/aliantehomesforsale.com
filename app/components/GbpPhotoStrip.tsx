import { gbpPhotoStrip } from '../../lib/content/site-images';
import { siteConfig } from '../../lib/site-config';
import MediaImage from './MediaImage';

/**
 * Visible photos that match GBP/Maps categories: street, office NAP, golf, 55+ village.
 * Google indexes on-page images that agree with the Business Profile.
 */
export default function GbpPhotoStrip() {
  return (
    <section className="py-16 px-4 bg-slate-50" aria-labelledby="gbp-photos-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="gbp-photos-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            Aliante photos that match the office on Google Maps
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Street, office, golf, Sun City, gated village, and amenities — the same 89084 place
            Google shows for {siteConfig.agentName}. Call {siteConfig.phone} or{' '}
            <a
              href={siteConfig.maps.placeUrl}
              className="font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              open the listing on Google Maps
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gbpPhotoStrip.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-xl shadow-sm bg-white">
              <MediaImage
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={450}
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={75}
                className="w-full h-48 object-cover"
              />
              <figcaption className="p-3 text-sm text-gray-600">{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: '#ed8936' }}
          >
            Call {siteConfig.phone}
          </a>
          <a
            href={siteConfig.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: '#2c5aa0' }}
          >
            Directions
          </a>
          <a
            href={siteConfig.maps.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold border-2"
            style={{ borderColor: '#16B286', color: '#16B286' }}
          >
            View Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
