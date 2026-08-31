'use client';

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
  featured,
}: BuilderCardProps) {
  return (
    <article
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        featured ? 'border-2' : 'border'
      }`}
      style={featured ? { borderColor: '#2c5aa0' } : { borderColor: '#e5e7eb' }}
    >
      {/* Builder Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div className="text-3xl font-bold">{name}</div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
            {badge}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-xs text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Builder Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a365d' }}>
          {title}
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        {/* Communities */}
        <div className="mb-6">
          <h4 className="text-lg font-bold mb-3" style={{ color: '#2c5aa0' }}>
            Popular Communities:
          </h4>
          <ul className="space-y-2">
            {communities.map((community, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-teal-500 font-bold flex-shrink-0">▸</span>
                <span>{community}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Incentives */}
        <div className="mb-6 bg-green-50 rounded-lg p-4">
          <h4 className="text-lg font-bold mb-3" style={{ color: '#16B286' }}>
            Current Incentives:
          </h4>
          <ul className="space-y-2">
            {incentives.map((incentive, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="flex-shrink-0">✅</span>
                <span>{incentive}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
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
      </div>
    </article>
  );
}

export default function TopBuilders() {
  const builders: BuilderCardProps[] = [
    {
      name: 'LENNAR',
      badge: '#1 Volume Builder',
      stats: [
        { value: '2,143', label: 'Homes Sold in Area' },
        { value: '45+', label: 'Available Now' },
        { value: '$350K-$750K', label: 'Price Range' },
      ],
      title: "Lennar - Everything's Included®",
      description:
        "America's #1 homebuilder includes smart home technology, Wi-Fi certified, and premium upgrades standard in every home.",
      communities: [
        'Aliante Springs - Family homes $450K-$650K',
        'Desert Willows - 3-5 BR homes $380K-$580K',
        'The Prominence - Luxury estates $600K-$750K',
      ],
      incentives: [
        '$15,000 in closing cost assistance',
        '$10,000 design studio credits',
        'Rate buydown options available',
        'Smart home package included FREE',
      ],
      primaryCTA: { text: 'View 45+ Lennar Homes', href: '/builders/lennar' },
      secondaryCTA: { text: 'Schedule Tour', href: '/contact' },
      featured: true,
    },
    {
      name: 'D.R. HORTON',
      badge: '🏆 Dr. Duffy #1 Premiere Agent',
      stats: [
        { value: '$639,900', label: 'Median New Price' },
        { value: '8 Days', label: 'Avg Days on Market' },
        { value: '$380K-$680K', label: 'Price Range' },
      ],
      title: "D.R. Horton - America's #1 Builder",
      description:
        "🏆 Dr. Jan Duffy is D.R. Horton's #1 Premiere Buyers Agent in North Las Vegas. Award-winning expert for Heartland at Tule Springs - the primary active builder community directly adjacent to Aliante with quick access to Aliante Resort and 215 Beltway.",
      communities: [
        'Master-planned directly adjacent to Aliante',
        'Median price: $639,900 - Homes selling in 8 days!',
        'Quick access to Aliante Resort & 215 Beltway',
        '32+ homes available in multiple collections',
      ],
      incentives: [
        'Award-winning D.R. Horton #1 specialist',
        'Average $18,000+ savings per client',
        'Direct builder relationships & priority access',
        'Construction quality monitoring included',
      ],
      primaryCTA: { text: 'Work with #1 D.R. Horton Agent', href: '/builders/dr-horton' },
      secondaryCTA: { text: 'Schedule Heartland Tour', href: '/contact' },
      featured: true,
    },
    {
      name: 'TRI POINTE',
      badge: '5-Star Premium',
      stats: [
        { value: 'Premium', label: 'Quality Rating' },
        { value: '18+', label: 'Available Now' },
        { value: '$450K-$850K', label: 'Price Range' },
      ],
      title: 'Tri Pointe Homes - Luxury & Design',
      description:
        'Premium homebuilder known for high-end finishes, superior craftsmanship, and attention to detail. Every home features designer touches and luxury amenities.',
      communities: [
        'Aliante Highlands - Premium lots $550K-$850K',
        'Mountain View Estates - Luxury living $480K-$750K',
      ],
      incentives: [
        '$18,000 in design upgrades',
        'Premium lot selections available',
        'Gourmet kitchen package included',
        'Smart home integration',
      ],
      primaryCTA: { text: 'View 18+ Tri Pointe Homes', href: '/builders/tri-pointe' },
      secondaryCTA: { text: 'Book Showing', href: '/contact' },
    },
    {
      name: 'DEL WEBB',
      badge: 'Active Adult 55+',
      stats: [
        { value: '55+', label: 'Age Qualified' },
        { value: '25+', label: 'Available Now' },
        { value: '$380K-$650K', label: 'Price Range' },
      ],
      title: 'Del Webb - Active Adult Living',
      description:
        "America's leading builder of active adult 55+ communities. Sun City Aliante features resort-style amenities, social activities, and maintenance-free living.",
      communities: [
        'Sun City Aliante - Resort living $380K-$650K',
        'Active Adult Villas - Low-maintenance $420K-$580K',
      ],
      incentives: [
        '$12,000 in closing credits',
        'Golf membership discounts',
        'Quick move-in homes ready now',
        'Resort amenities included',
      ],
      primaryCTA: { text: 'View 25+ Del Webb Homes', href: '/builders/del-webb' },
      secondaryCTA: { text: 'Sun City Details', href: '/neighborhoods/sun-city' },
    },
    {
      name: 'TOLL BROTHERS',
      badge: 'Valley Luxury',
      stats: [
        { value: 'Not in 89084', label: 'Aliante master plan' },
        { value: '89131', label: 'Closest ZIP (Elkhorn Grove)' },
        { value: 'Confirm live', label: 'Builder pricing' },
      ],
      title: 'Toll Brothers — luxury new homes near Aliante, not inside it',
      description:
        'Toll Brothers is not currently building inside Aliante 89084. The closest community is Elkhorn Grove in ZIP 89131, about six minutes from Club Aliante golf. Other Clark County collections include Skye Canyon, Summerlin (Ascension, Glenrock), and Henderson. Independent buyer representation. Confirm current homesites with the sales office.',
      communities: [
        'Elkhorn Grove — 5819 Kings Bluff Ave, Las Vegas, NV 89131',
        'Toll Brothers at Skye Canyon — Paloma Collection, northwest valley',
        'Toll Brothers at Ascension — Crestline and Highrock, Summerlin',
        'Glenrock and Crestwood Ranch — larger Summerlin-area plans',
        'Cordillera and Raven Crest — townhomes; Mira Villa condos (final opportunity)',
      ],
      incentives: [
        'Programs change — confirm the live sheet before you offer',
        'Independent buyer’s agent at no extra cost to you',
        'Compare with Lennar, D.R. Horton, and Tri Pointe in Aliante',
        'Same-week tours: 89084 builders plus Elkhorn Grove',
      ],
      primaryCTA: { text: 'Toll Brothers near Aliante', href: '/builders/toll-brothers' },
      secondaryCTA: { text: 'Schedule a comparison tour', href: '/contact' },
      featured: true,
    },
  ];

  return (
    <>
      {/* Top Section (Hero + Filters handled above) */}

      {/* Builders Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
              Top New Home Builders in Aliante Area
            </h2>
            <p className="text-xl text-gray-600">Choose from the nation's top-rated homebuilders</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {builders.map((builder, index) => (
              <BuilderCard key={index} {...builder} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
