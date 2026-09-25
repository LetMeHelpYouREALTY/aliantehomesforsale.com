'use client';

import { type SiteImage, siteImages } from '../../lib/content/site-images';
import CardPhoto from './CardPhoto';
import HeadingPhoto from './HeadingPhoto';

type ExpertiseCardProps = {
  image: SiteImage;
  title: string;
  description: string;
};

function ExpertiseCard({ image, title, description }: ExpertiseCardProps) {
  return (
    <article
      className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-l-4"
      style={{ borderLeftColor: '#2c5aa0' }}
    >
      <CardPhoto image={image} />
      <h3 className="text-2xl font-bold mb-4" style={{ color: '#1a365d' }}>
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </article>
  );
}

export default function AboutExpertise() {
  const expertise: ExpertiseCardProps[] = [
    {
      image: siteImages.newConstruction,
      title: 'New-construction buyer agency in Aliante & Tule Springs',
      description:
        'I represent you with Lennar, D.R. Horton, and Del Webb — not the builder. Incentives, options, and walk-throughs in North Las Vegas 89084.',
    },
    {
      image: siteImages.villageTour,
      title: 'Village matching: Club Aliante, Prominence, Paseos, Desert Willows, Sun City',
      description:
        'I tour the actual Aliante villages with you. Ardiente (89081) is not inside this master plan; I will say so before you write an offer.',
    },
    {
      image: siteImages.mlsData,
      title: 'MLS and CMA work for ZIP 89084',
      description:
        'Listings refresh about every 15 minutes. Valuations use Aliante comps — Club Aliante vs Sun City vs gated — not a valley average.',
    },
    {
      image: siteImages.specialistStreet,
      title: 'Buyer and seller advocacy in Aliante',
      description:
        'Purchase or listing, I am your agent at 2590 Nature Park Drive, Suite 275. Call (702) 707-7273.',
    },
    {
      image: siteImages.sunCity,
      title: '55+ realtor for Sun City Aliante',
      description:
        'Del Webb 55+ inside ZIP 89084. Ardiente is a different community in 89081 — I will tell you which address is which.',
    },
    {
      image: siteImages.investment,
      title: 'Rental-property analysis in ZIP 89084',
      description:
        'I sell the home and run buy-and-hold math from live comps. I do not manage leases or HOAs.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Realtor expertise in Aliante, North Las Vegas 89084
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Six services, one ZIP: buyer agency, listings, new construction, Sun City Aliante 55+,
            CMAs, and rental-property analysis.
          </p>
          <HeadingPhoto
            image={siteImages.specialistStreet}
            caption="Aliante realtor services from 2590 Nature Park Drive, Suite 275"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item) => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
