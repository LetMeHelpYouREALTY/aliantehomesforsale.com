import Link from 'next/link';
import { type SiteImage, siteImages } from '../../lib/content/site-images';
import { siteConfig } from '../../lib/site-config';
import CardPhoto from './CardPhoto';
import HeadingPhoto from './HeadingPhoto';

const servicePhotos: Record<string, SiteImage> = {
  'buyer-representation': siteImages.buyerTour,
  'seller-representation': siteImages.sellerPrep,
  'new-construction': siteImages.newConstruction,
  '55-plus': siteImages.sunCity,
  'home-valuation': siteImages.homeValuation,
  'investment-analysis': siteImages.investment,
};

/** Visible services matching knowledge-graph OfferCatalog (GEO/AEO). */
export default function HyperlocalRealtorServices() {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="speakable text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            Hyperlocal realtor services in Aliante, North Las Vegas 89084
          </h2>
          <p className="speakable text-xl text-gray-600 max-w-3xl mx-auto">
            {siteConfig.agentName} focuses on Aliante and North Las Vegas, NV {siteConfig.zipCode} —
            not a valley-wide general practice.
          </p>
        </div>
        <HeadingPhoto
          image={siteImages.homesForSale}
          caption="Buyer, seller, new construction, 55+, CMA, and rental analysis in ZIP 89084"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => (
            <Link
              key={service.slug}
              href={service.url}
              className="block bg-gray-50 rounded-xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg border-2 border-transparent hover:border-[#2c5aa0]"
            >
              <CardPhoto image={servicePhotos[service.slug] ?? siteImages.homesForSale} />
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                {service.name}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
