'use client';

import { type SiteImage, siteImages } from '../../lib/content/site-images';
import CardPhoto from './CardPhoto';
import HeadingPhoto from './HeadingPhoto';

type ReasonProps = {
  image: SiteImage;
  title: string;
  description: string;
};

function ReasonCard({ image, title, description }: ReasonProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardPhoto image={image} heightClass="h-28" />
      <h3 className="text-xl font-bold mb-3" style={{ color: '#1a365d' }}>
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

export default function ContactWhyChoose() {
  const reasons: ReasonProps[] = [
    {
      image: siteImages.neighborhoods,
      title: 'Local Expertise',
      description: '6+ years focused on Aliante and North Las Vegas 89084 properties',
    },
    {
      image: siteImages.newConstruction,
      title: 'Builder Relationships',
      description: 'I confirm live builder incentive sheets and represent you — not the sales desk',
    },
    {
      image: siteImages.marketReport,
      title: 'Market Intelligence',
      description: 'Real-time market data and insights to help you make informed decisions',
    },
    {
      image: siteImages.officeNap,
      title: 'Proven Track Record',
      description: 'Aliante and North Las Vegas closings since 2018 — ask for current references',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Why Choose Aliante Real Estate?
          </h2>
        </div>
        <HeadingPhoto
          image={siteImages.officeNap}
          caption="Call (702) 707-7273 · 2590 Nature Park Drive, Suite 275"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
