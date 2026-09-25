'use client';

import Link from 'next/link';
import { type SiteImage, siteImages } from '../../lib/content/site-images';
import HeadingPhoto from './HeadingPhoto';

interface ContextualLinksProps {
  variant: 'neighborhoods' | 'builders' | 'buying' | 'selling' | 'market';
}

type LinkItem = {
  href: string;
  label: string;
};

type Band = {
  heading: string;
  image: SiteImage;
  className: string;
  gridClass: string;
  links: LinkItem[];
};

const BANDS: Record<ContextualLinksProps['variant'], Band> = {
  neighborhoods: {
    heading: 'Explore Aliante Neighborhoods',
    image: siteImages.neighborhoods,
    className: 'bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 my-12',
    gridClass: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4',
    links: [
      { href: '/neighborhoods/prominence', label: 'The Prominence →' },
      { href: '/neighborhoods/club-aliante', label: 'Club Aliante Golf →' },
      { href: '/neighborhoods/desert-willows', label: 'Desert Willows →' },
      { href: '/neighborhoods/paseos', label: 'The Paseos →' },
      { href: '/sun-city-aliante', label: 'Sun City 55+ →' },
      { href: '/gated-communities', label: 'Gated Communities →' },
    ],
  },
  builders: {
    heading: 'Builders near Aliante 89084',
    image: siteImages.volumeBuilders,
    className: 'bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 my-12',
    gridClass: 'grid grid-cols-2 md:grid-cols-3 gap-4',
    links: [
      { href: '/builders/lennar', label: 'Lennar Homes →' },
      { href: '/builders/dr-horton', label: 'D.R. Horton →' },
      { href: '/builders/tri-pointe', label: 'Tri Pointe Luxury →' },
      { href: '/builders/del-webb', label: 'Del Webb 55+ →' },
      { href: '/builders/toll-brothers', label: 'Toll Brothers →' },
      { href: '/builders/incentives', label: 'Builder Incentives →' },
    ],
  },
  buying: {
    heading: 'Home Buying Resources',
    image: siteImages.buyerTour,
    className: 'bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 my-12',
    gridClass: 'grid grid-cols-2 md:grid-cols-3 gap-4',
    links: [
      { href: '/buyer-guide', label: 'Buyer Representation Guide →' },
      { href: '/mortgage-calculator', label: 'Mortgage Calculator →' },
      { href: '/market-report', label: 'Market Report →' },
      { href: '/schools', label: 'School Information →' },
      { href: '/investment-analysis', label: 'Investment Analysis →' },
      { href: '/homes-for-sale', label: 'Browse All Homes →' },
    ],
  },
  selling: {
    heading: 'Home Selling Resources',
    image: siteImages.sellerPrep,
    className: 'bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-8 my-12',
    gridClass: 'grid grid-cols-2 md:grid-cols-3 gap-4',
    links: [
      { href: '/seller-checklist', label: 'Seller Checklist →' },
      { href: '/home-valuation', label: 'Home valuation / CMA →' },
      { href: '/market-report', label: 'Current Market Data →' },
      { href: '/contact#schedule', label: 'Schedule Consultation →' },
    ],
  },
  market: {
    heading: 'Related Market Information',
    image: siteImages.marketReport,
    className: 'bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 my-12',
    gridClass: 'grid grid-cols-2 md:grid-cols-4 gap-4',
    links: [
      { href: '/homes-for-sale', label: 'Browse Homes →' },
      { href: '/neighborhoods', label: 'Neighborhoods →' },
      { href: '/new-construction', label: 'New Construction →' },
      { href: '/gated-communities', label: 'Gated Communities →' },
      { href: '/investment-analysis', label: 'Investment Properties →' },
      { href: '/home-valuation', label: 'Home Valuation →' },
    ],
  },
};

export default function ContextualLinks({ variant }: ContextualLinksProps) {
  const band = BANDS[variant];

  return (
    <div className={band.className}>
      <HeadingPhoto image={band.image} />
      <h3 className="text-2xl font-bold mb-6" style={{ color: '#1a365d' }}>
        {band.heading}
      </h3>
      <div className={band.gridClass}>
        {band.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
