'use client';

import Link from 'next/link';

interface ContextualLinksProps {
  variant: 'neighborhoods' | 'builders' | 'buying' | 'selling' | 'market';
}

export default function ContextualLinks({ variant }: ContextualLinksProps) {
  const linkSets = {
    neighborhoods: (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 my-12">
        <h3 className="text-2xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Explore Aliante Neighborhoods
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link
            href="/neighborhoods/prominence"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            The Prominence →
          </Link>
          <Link
            href="/neighborhoods/club-aliante"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Club Aliante Golf →
          </Link>
          <Link
            href="/neighborhoods/desert-willows"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Desert Willows →
          </Link>
          <Link
            href="/neighborhoods/paseos"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            The Paseos →
          </Link>
          <Link
            href="/sun-city-aliante"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Sun City 55+ →
          </Link>
          <Link
            href="/gated-communities"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Gated Communities →
          </Link>
          <Link
            href="/neighborhoods/tule-springs"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Villages at Tule Springs →
          </Link>
        </div>
      </div>
    ),
    builders: (
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 my-12">
        <h3 className="text-2xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Builders to compare with Aliante 89084
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            href="/builders/lennar"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Lennar Homes →
          </Link>
          <Link
            href="/builders/dr-horton"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            D.R. Horton →
          </Link>
          <Link
            href="/builders/tri-pointe"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Tri Pointe →
          </Link>
          <Link
            href="/builders/del-webb"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Del Webb 55+ →
          </Link>
          <Link
            href="/builders/toll-brothers"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Toll Brothers →
          </Link>
          <Link
            href="/builders/richmond-american"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Richmond American →
          </Link>
          <Link
            href="/builders/incentives"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Builder Incentives →
          </Link>
        </div>
      </div>
    ),
    buying: (
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 my-12">
        <h3 className="text-2xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Home Buying Resources
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            href="/buyer-guide"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Buyer Representation Guide →
          </Link>
          <Link
            href="/mortgage-calculator"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Mortgage Calculator →
          </Link>
          <Link
            href="/market-report"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Market Report →
          </Link>
          <Link
            href="/schools"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            School Information →
          </Link>
          <Link
            href="/investment-analysis"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Investment Analysis →
          </Link>
          <Link
            href="/homes-for-sale"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Browse All Homes →
          </Link>
        </div>
      </div>
    ),
    selling: (
      <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-8 my-12">
        <h3 className="text-2xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Home Selling Resources
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            href="/seller-checklist"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Seller Checklist →
          </Link>
          <Link
            href="/home-valuation"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Home valuation / CMA →
          </Link>
          <Link
            href="/market-report"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Current Market Data →
          </Link>
          <Link
            href="/contact#schedule"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Schedule Consultation →
          </Link>
        </div>
      </div>
    ),
    market: (
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 my-12">
        <h3 className="text-2xl font-bold mb-6" style={{ color: '#1a365d' }}>
          Related Market Information
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/homes-for-sale"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Browse Homes →
          </Link>
          <Link
            href="/neighborhoods"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Neighborhoods →
          </Link>
          <Link
            href="/new-construction"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            New Construction →
          </Link>
          <Link
            href="/gated-communities"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Gated Communities →
          </Link>
          <Link
            href="/investment-analysis"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Investment Properties →
          </Link>
          <Link
            href="/home-valuation"
            className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Home Valuation →
          </Link>
        </div>
      </div>
    ),
  };

  return linkSets[variant];
}
