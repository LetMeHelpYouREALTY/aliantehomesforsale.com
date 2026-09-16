'use client';

import { type SiteImage, siteImages } from '../../lib/content/site-images';
import HeadingPhoto from './HeadingPhoto';
import MediaImage from './MediaImage';

type BenefitCardProps = {
  image: SiteImage;
  title: string;
  description: string;
};

function BenefitCard({ image, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-40">
        <MediaImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#1a365d' }}>
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed text-center">{description}</p>
      </div>
    </div>
  );
}

export default function WhyNewConstruction() {
  const benefits: BenefitCardProps[] = [
    {
      image: siteImages.newConstruction,
      title: 'Never Been Lived In',
      description:
        'New inventory built to the codes in effect at permit. Confirm remaining warranties, punch-list items, and included features on that contract.',
    },
    {
      image: siteImages.incentives,
      title: 'Lot, plan, and finish choices',
      description:
        'Where the builder still has unsold lots, you can often choose plan, elevation, and design-center options. Confirm what is still available on that phase.',
    },
    {
      image: siteImages.lennar,
      title: 'Builder Incentives & Savings',
      description:
        'Builder credits, upgrades, and rate buydowns change with the week. Confirm today’s sheet — I will not publish a stale dollar amount.',
    },
    {
      image: siteImages.delWebb,
      title: 'Builder warranties',
      description:
        'Warranty length and coverage vary by builder and component. Read the warranty booklet for that community before you write — I will not publish a one-size term.',
    },
    {
      image: siteImages.drHorton,
      title: 'Energy Efficiency',
      description:
        'Newer homes are built to the energy code in effect at permit. Compare utility estimates on that plan — I will not publish a savings figure.',
    },
    {
      image: siteImages.officeNap,
      title: 'Our Expert Guidance',
      description:
        'We represent you in negotiations, monitor construction quality, and confirm the live incentive sheet before you write.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Why use a buyer’s agent on Aliante new construction?
          </h2>
          <div className="max-w-4xl mx-auto text-left">
            <HeadingPhoto
              image={siteImages.newConstruction}
              caption="Independent representation on Lennar, Del Webb, and nearby builder lots"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
