import { type SiteImage, siteImages } from './site-images';

export interface ConstructionProcessStep {
  number: number;
  title: string;
  description: string;
  details: string[];
  image: SiteImage;
}

/** Rendered by ConstructionProcess and mirrored by the /new-construction HowTo schema. */
export const constructionProcess: {
  heading: string;
  subheading: string;
  steps: ConstructionProcessStep[];
} = {
  heading: 'Your New Home Journey - Step by Step',
  subheading: 'We guide you through every phase of the new construction process',
  steps: [
    {
      number: 1,
      title: 'Builder & Community Selection',
      description:
        'Compare builders, floor plans, and amenities against your budget and the lots that are actually for sale this month.',
      image: siteImages.constructionSelect,
      details: [
        'Review builders active near Aliante',
        'Compare plans and included features',
        'Confirm live price sheets',
        'Visit model homes together',
      ],
    },
    {
      number: 2,
      title: 'Strategic Lot Selection',
      description:
        'Lot placement affects views, sun, street noise, and daily living. We walk the map with you so you can choose a lot that matches those factors.',
      image: siteImages.constructionLot,
      details: [
        'Corner vs. interior lots',
        'View premiums vs. standard',
        'Sun exposure and orientation',
        'Proximity to amenities/streets',
      ],
    },
    {
      number: 3,
      title: 'Design Center & Upgrades',
      description:
        'Choose upgrades with use and resale in mind. We help you decide which design-center items you want to pay for and which to skip.',
      image: siteImages.constructionDesign,
      details: [
        'Flooring and finishes selection',
        'Kitchen and bath upgrades',
        'Structural vs. cosmetic changes',
        'Negotiate upgrade credits',
      ],
    },
    {
      number: 4,
      title: 'Construction Monitoring',
      description:
        'We walk key phases with you, coordinate inspections you hire, and document issues before closing.',
      image: siteImages.constructionFraming,
      details: [
        'Foundation and framing inspections',
        'Pre-drywall walkthrough',
        'MEP systems verification',
        'Quality control checkpoints',
      ],
    },
    {
      number: 5,
      title: 'Final Walkthrough & Closing',
      description:
        'Detailed pre-closing inspection, punch list management, and closing coordination. Confirm remaining items before you accept the keys.',
      image: siteImages.constructionWalkthrough,
      details: [
        'Comprehensive final walkthrough',
        'Punch list creation and follow-up',
        'Warranty documentation review',
        'Closing coordination and support',
      ],
    },
  ],
};
