'use client';

import { siteConfig } from '../../lib/site-config';
import ExternalLink from './ExternalLink';

function builderOfficialUrl(slug: (typeof siteConfig.builders)[number]['slug']): string {
  const match = siteConfig.builders.find((builder) => builder.slug === slug);
  if (match === undefined) {
    throw new Error(`Missing official URL for builder slug ${slug}`);
  }
  return match.officialUrl;
}

interface BuilderCardProps {
  name: string;
  badge: string;
  stats: { value: string; label: string }[];
  title: string;
  description: string;
  communities: string[];
  incentives: string[];
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  officialUrl?: string;
  featured?: boolean;
}

function BuilderCard({
  name,
  badge,
  stats,
  title,
  description,
  communities,
  incentives,
  primaryCTA,
  secondaryCTA,
  officialUrl,
  featured,
}: BuilderCardProps) {
  return (
    <article
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        featured ? 'border-2' : 'border'
      }`}
      style={featured ? { borderColor: '#2c5aa0' } : { borderColor: '#e5e7eb' }}
    >
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div className="text-3xl font-bold">{name}</div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
            {badge}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-xs text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a365d' }}>
          {title}
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="mb-6">
          <h4 className="text-lg font-bold mb-3" style={{ color: '#2c5aa0' }}>
            Relative to Aliante 89084
          </h4>
          <ul className="space-y-2">
            {communities.map((community) => (
              <li key={community} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-teal-500 font-bold flex-shrink-0">▸</span>
                <span>{community}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 bg-green-50 rounded-lg p-4">
          <h4 className="text-lg font-bold mb-3" style={{ color: '#16B286' }}>
            Incentives
          </h4>
          <ul className="space-y-2">
            {incentives.map((incentive) => (
              <li key={incentive} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="flex-shrink-0">✅</span>
                <span>{incentive}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={primaryCTA.href}
            className="flex-1 text-center py-3 px-6 rounded-lg font-semibold text-white transition-all transform hover:scale-105 focus:ring-4 focus:ring-orange-300 focus:outline-none"
            style={{ backgroundColor: '#ed8936' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dd6b20')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ed8936')}
          >
            {primaryCTA.text}
          </a>
          <a
            href={secondaryCTA.href}
            className="flex-1 text-center py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 border-2 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            style={{
              color: '#2c5aa0',
              borderColor: '#2c5aa0',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2c5aa0';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#2c5aa0';
            }}
          >
            {secondaryCTA.text}
          </a>
        </div>
        {officialUrl ? (
          <p className="mt-3 text-center text-sm">
            <ExternalLink
              href={officialUrl}
              className="text-blue-600 hover:underline font-semibold"
            >
              Official {name} website
            </ExternalLink>
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default function TopBuilders() {
  const builders: BuilderCardProps[] = [
    {
      name: 'LENNAR',
      badge: 'Inside 89084',
      stats: [
        { value: 'Aliante', label: 'Master plan' },
        { value: 'Live', label: 'Inventory' },
        { value: 'Confirm', label: 'Price sheet' },
      ],
      title: 'Lennar — independent buyer representation',
      description:
        'I represent you on the Lennar contract in ZIP 89084 — not the builder. Confirm live spec homes, lot premiums, and incentives before you write.',
      communities: [
        'Communities inside Aliante / North Las Vegas 89084',
        'Confirm current collections on the Lennar sheet',
        'Independent buyer agency at no extra cost on participating sales — confirm in writing',
      ],
      incentives: [
        'Confirm today’s closing-cost, buydown, and upgrade offers',
        'I will not publish a stale dollar amount',
        'Register with me before you tour the model',
      ],
      primaryCTA: { text: 'Lennar in Aliante 89084', href: '/builders/lennar' },
      secondaryCTA: { text: 'Schedule Tour', href: '/contact' },
      officialUrl: builderOfficialUrl('lennar'),
      featured: true,
    },
    {
      name: 'D.R. HORTON',
      badge: 'Tule Springs',
      stats: [
        { value: 'Nearby', label: 'Not inside Aliante' },
        { value: 'Live', label: 'Inventory' },
        { value: 'Confirm', label: 'Price sheet' },
      ],
      title: 'D.R. Horton — Villages at Tule Springs',
      description:
        'Compare Tule Springs new homes with Aliante resale. D.R. Horton is adjacent to Aliante, not inside the master plan. Confirm live inventory before you tour.',
      communities: [
        'Villages at Tule Springs, North Las Vegas',
        'Not currently a substitute for an Aliante 89084 address',
        'Independent buyer agency on the Horton contract',
      ],
      incentives: [
        'Confirm today’s incentive sheet with me',
        'I will not quote a stale median or “homes sold in 8 days” figure',
        'Register before the model tour so representation is documented',
      ],
      primaryCTA: { text: 'D.R. Horton buyer notes', href: '/builders/dr-horton' },
      secondaryCTA: { text: 'Schedule Tule Springs tour', href: '/contact' },
      officialUrl: builderOfficialUrl('dr-horton'),
      featured: true,
    },
    {
      name: 'TRI POINTE',
      badge: 'Not inside 89084',
      stats: [
        { value: 'NW LV', label: 'Current map' },
        { value: 'Live', label: 'Inventory' },
        { value: 'Confirm', label: 'Community' },
      ],
      title: 'Tri Pointe Homes — northwest Las Vegas',
      description:
        'Tri Pointe is not currently listing a community inside the Aliante master plan. Active collections are northwest (Kyle Pointe and Citrine near Skye Canyon).',
      communities: [
        'Kyle Pointe and Citrine — northwest Las Vegas, not ZIP 89084',
        'Compare with Lennar and Aliante resale if you need an Aliante address',
      ],
      incentives: [
        'Confirm live inventory at the community you will actually tour',
        'Do not assume an Aliante Highlands collection exists',
      ],
      primaryCTA: { text: 'Tri Pointe buyer notes', href: '/builders/tri-pointe' },
      secondaryCTA: { text: 'Book Showing', href: '/contact' },
      officialUrl: builderOfficialUrl('tri-pointe'),
    },
    {
      name: 'DEL WEBB',
      badge: 'Sun City 55+',
      stats: [
        { value: '55+', label: 'Age qualified' },
        { value: '89084', label: 'ZIP' },
        { value: 'Confirm', label: 'Inventory' },
      ],
      title: 'Del Webb — Sun City Aliante',
      description:
        'Age-qualified Del Webb inside ZIP 89084 — not Ardiente (89081), not Del Webb Summerlin. Confirm live inventory and age occupancy rules before you offer.',
      communities: [
        'Sun City Aliante 55+ inside the Aliante master plan',
        'Ardiente is a different 55+ community in ZIP 89081',
      ],
      incentives: [
        'Confirm today’s Del Webb sheet',
        'I will not publish a stale price range as current',
      ],
      primaryCTA: { text: 'Del Webb buyer notes', href: '/builders/del-webb' },
      secondaryCTA: { text: 'Sun City Aliante', href: '/sun-city-aliante' },
      officialUrl: builderOfficialUrl('del-webb'),
    },
    {
      name: 'TOLL BROTHERS',
      badge: 'Not inside 89084',
      stats: [
        { value: '89131', label: 'Elkhorn Grove' },
        { value: 'Live', label: 'Inventory' },
        { value: 'Confirm', label: 'Rate sheet' },
      ],
      title: 'Toll Brothers — Elkhorn Grove',
      description:
        'Toll Brothers is not currently building inside Aliante ZIP 89084. Closest community: Elkhorn Grove, 5819 Kings Bluff Ave, Las Vegas NV 89131.',
      communities: [
        'Elkhorn Grove, Las Vegas 89131 — not Aliante 89084',
        'Confirm live inventory before you tour',
      ],
      incentives: [
        'Confirm today’s buydown and credit sheet — I will not quote a stale rate',
        'Register with me before the model so representation is documented',
      ],
      primaryCTA: { text: 'Toll Brothers buyer notes', href: '/builders/toll-brothers' },
      secondaryCTA: { text: 'Schedule Private Tour', href: '/contact' },
      officialUrl: builderOfficialUrl('toll-brothers'),
      featured: true,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            New-home builders near Aliante 89084
          </h2>
          <p className="text-xl text-gray-600">
            Independent buyer’s agent. Confirm live inventory — I will not publish a stale count.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {builders.map((builder) => (
            <BuilderCard key={builder.name} {...builder} />
          ))}
        </div>
      </div>
    </section>
  );
}
