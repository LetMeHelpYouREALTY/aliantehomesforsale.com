import Link from 'next/link';
import {
  amenitiesPageFaqs,
  amenityGuideSections,
} from '../../lib/amenities/amenities-page-content';
import { buildAmenitiesPageSchema } from '../../lib/amenities/amenities-schema';
import { alianteCommunityMap } from '../../lib/amenities/community-map-config';
import { pageHero } from '../../lib/content/site-images';
import { pageMetadata } from '../../lib/seo-utils';
import { siteConfig } from '../../lib/site-config';
import CommunityAmenityMap from '../components/amenities/CommunityAmenityMap';
import FAQSection from '../components/FAQSection';
import NeighborhoodsHero from '../components/NeighborhoodsHero';

export const metadata = pageMetadata({
  title: 'Nearby Amenities in Aliante, North Las Vegas 89084',
  description:
    'Map and guide to restaurants, parks, golf, grocery, healthcare, and schools near Aliante, North Las Vegas NV 89084. Hyperlocal guide by Dr. Jan Duffy. Call (702) 707-7273.',
  path: '/amenities',
  keywords:
    'Aliante amenities, things to do near Aliante, North Las Vegas 89084 grocery, Aliante Golf Club, Nature Discovery Park, Centennial Hills Hospital',
});

export default function AmenitiesPage() {
  const schema = buildAmenitiesPageSchema();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <NeighborhoodsHero
        title="Nearby Amenities in Aliante, North Las Vegas"
        subtitle={`Dining, parks, golf, healthcare, shopping, and schools around ZIP ${alianteCommunityMap.zip}. Map centered on ${alianteCommunityMap.center.label}.`}
        image={pageHero('/amenities')}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1
            className="speakable text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            Nearby Amenities in Aliante, North Las Vegas
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-10">
            Use the interactive map to explore places around the Aliante master plan. Categories
            include restaurants, cafes, grocery, parks, golf, healthcare, pharmacies, shopping,
            parking, fitness, and schools. Featured places near Aliante are listed alongside the map.
          </p>
          <CommunityAmenityMap variant="full" showAmenitiesPageLink={false} />
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50" aria-labelledby="amenity-guide-heading">
        <div className="max-w-5xl mx-auto prose prose-lg">
          <h2
            id="amenity-guide-heading"
            className="text-3xl font-bold mb-8"
            style={{ color: '#1a365d' }}
          >
            Hyperlocal amenity guide
          </h2>
          {amenityGuideSections.map((section) => (
            <article key={section.id} className="mb-10">
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#2c5aa0' }}>
                {section.title}
              </h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-gray-700 leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <FAQSection title="Aliante amenities FAQ" faqs={amenitiesPageFaqs} />

      <section
        className="py-16 px-4"
        style={{ backgroundColor: '#1a365d' }}
        aria-labelledby="amenities-cta-heading"
      >
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 id="amenities-cta-heading" className="text-3xl font-bold mb-4">
            Tour Aliante with a hyperlocal realtor
          </h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            {siteConfig.agentName}, Nevada license {siteConfig.agentLicense}, {siteConfig.brokerage}
            . I match homes to the parks, golf, and services you will actually use in ZIP{' '}
            {siteConfig.zipCode}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-block py-4 px-10 rounded-lg font-semibold text-lg text-white bg-[#ed8936]"
            >
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-block py-4 px-10 rounded-lg font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-[#1a365d] transition-colors"
            >
              Contact & directions
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Office: {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{' '}
            {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
          </p>
        </div>
      </section>
    </main>
  );
}
