'use client';

import { type SiteImage, siteImages } from '../../lib/content/site-images';
import CardPhoto from './CardPhoto';
import HeadingPhoto from './HeadingPhoto';

type ExpertiseItemProps = {
  image: SiteImage;
  title: string;
  description: string;
};

function ExpertiseItem({ image, title, description }: ExpertiseItemProps) {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-l-4"
      style={{ borderLeftColor: '#16B286' }}
    >
      <CardPhoto image={image} heightClass="h-28" />
      <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

export default function WhyWorkWithUs() {
  const expertise: ExpertiseItemProps[] = [
    {
      image: siteImages.builders,
      title: 'Direct Builder Relationships',
      description:
        'I work the Aliante and Tule Springs builder map with you. Confirm current communities and sales-manager contacts on this month’s sheet.',
    },
    {
      image: siteImages.incentives,
      title: 'Incentive review',
      description:
        'I represent you on the builder contract. Confirm today’s incentive sheet, lot premiums, and upgrade credits before you write — I will not publish a stale savings average.',
    },
    {
      image: siteImages.constructionProcess,
      title: 'Quality Control & Inspections',
      description:
        'I attend pre-drywall and pre-close walkthroughs with you. Third-party inspections are a separate cost you confirm with the inspector.',
    },
    {
      image: siteImages.contractReview,
      title: 'Contract Expertise',
      description:
        'Builder contracts favor the builder. I review clauses with you and negotiate what that sales desk will actually change.',
    },
    {
      image: siteImages.constructionTimeline,
      title: 'Timeline Management',
      description:
        'I track dates on your contract and flag delays when the builder updates the schedule. I cannot control the superintendent’s calendar.',
    },
    {
      image: siteImages.specialistStreet,
      title: 'Proven Results',
      description:
        'Independent buyer representation on Aliante and nearby Tule Springs new construction. Confirm live inventory. I will not publish an unverified closing count.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Why hire Dr. Jan Duffy as your Aliante new-construction buyer’s agent?
          </h2>
        </div>
        <HeadingPhoto
          image={siteImages.builderAdvocate}
          caption="Independent buyer agency on Aliante and Tule Springs new construction"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <ExpertiseItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
