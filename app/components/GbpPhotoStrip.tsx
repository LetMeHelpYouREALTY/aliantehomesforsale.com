import Image from 'next/image';
import { gbpPhotoStrip } from '../../lib/content/site-images';
import { siteConfig } from '../../lib/site-config';

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
            Street, office, golf, and Sun City Aliante — the same 89084 place Google shows for{' '}
            {siteConfig.agentName}. Call {siteConfig.phone} or{' '}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gbpPhotoStrip.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-xl shadow-sm bg-white">
              <Image
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
      </div>
    </section>
  );
}
