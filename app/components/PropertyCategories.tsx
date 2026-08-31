'use client';

interface CategoryCardProps {
  icon: string;
  title: string;
  count: string;
  description: string;
  href: string;
  gradient: string;
}

function CategoryCard({ icon, title, count, description, href, gradient }: CategoryCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-blue-500">
      {/* Gradient Header */}
      <div
        className="h-32 flex items-center justify-center relative"
        style={{ background: gradient }}
      >
        <div className="text-6xl">{icon}</div>
        <div
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm"
          style={{ color: '#2c5aa0' }}
        >
          {count} Available
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a365d' }}>
          {title}
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <a
          href={href}
          className="block w-full text-center py-3 px-6 rounded-lg font-semibold text-white transition-all transform hover:scale-105 focus:ring-4 focus:ring-orange-300 focus:outline-none"
          style={{ backgroundColor: '#ed8936' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dd6b20')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ed8936')}
        >
          View Properties →
        </a>
      </div>
    </article>
  );
}

export default function PropertyCategories() {
  const categories: CategoryCardProps[] = [
    {
      icon: '🏗️',
      title: 'New Construction',
      count: '45',
      description:
        'Brand new homes from top builders. Customize to your taste with builder incentives up to $25K.',
      href: '/new-construction',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: '🏰',
      title: 'Gated Communities',
      count: '86',
      description:
        '24/7 security, resort amenities, well-maintained landscapes. Premium living with peace of mind.',
      href: '/gated-communities',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      icon: '⛳',
      title: 'Golf Course Homes',
      count: '32',
      description:
        'Stunning fairway and mountain views. Club Aliante Golf Course access and premium lifestyle.',
      href: '/golf-homes',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      icon: '🌅',
      title: 'Sun City Aliante 55+',
      count: '41',
      description:
        'Active adult community with world-class amenities. Resort-style living designed for 55+.',
      href: '/sun-city-aliante',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600">
            Find your perfect home in Aliante's most sought-after communities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
