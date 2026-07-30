'use client';

interface CredentialCardProps {
  icon: string;
  title: string;
  description: string;
}

function CredentialCard({ icon, title, description }: CredentialCardProps) {
  return (
    <article
      className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-l-4"
      style={{ borderLeftColor: '#2c5aa0' }}
    >
      <div className="flex items-start gap-6">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl"
          style={{ backgroundColor: '#e6f0ff' }}
        >
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#2c5aa0' }}>
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default function EnhancedTrustAuthority() {
  const credentials: CredentialCardProps[] = [
    {
      icon: '🏆',
      title: 'Aliante Specialist Since 2018',
      description:
        'Dr. Jan Duffy has specialized exclusively in Aliante and North Las Vegas real estate since 2018. Her hyper-local market knowledge, builder relationships, and neighborhood-by-neighborhood expertise ensure you get the best possible outcome.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: '500+ Happy Families',
      description:
        'Over five hundred families have trusted Dr. Duffy to guide them through their real estate journey. From first-time buyers to luxury home investors, our track record speaks for itself with countless 5-star reviews and referrals.',
    },
    {
      icon: '⭐',
      title: 'Top 1% in Nevada',
      description:
        "Recognized as one of Nevada's elite real estate professionals. Dr. Duffy's consistent excellence in client service, market expertise, and negotiation skills has earned her placement in the top 1% of agents statewide.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Why Choose Dr. Janet Duffy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience, expertise, and exceptional service. Your Aliante real estate success starts
            here.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {credentials.map((credential, index) => (
            <CredentialCard key={index} {...credential} />
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 sm:p-12 text-center shadow-inner">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">💬</div>
            <blockquote className="text-xl sm:text-2xl text-gray-700 italic mb-6 leading-relaxed">
              "Dr. Duffy made our home-buying experience seamless and stress-free. Her knowledge of
              the Aliante area is unmatched, and she found us the perfect home in Sun City. We
              couldn't be happier!"
            </blockquote>
            <p className="font-bold text-lg" style={{ color: '#2c5aa0' }}>
              — Robert & Linda M., Sun City Aliante Homeowners
            </p>
            <div className="mt-4 text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">Ready to work with a top-rated local expert?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+17027077273"
              className="inline-block py-4 px-8 rounded-lg font-semibold text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-orange-300 focus:outline-none"
              style={{ backgroundColor: '#ed8936' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dd6b20')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ed8936')}
            >
              📞 Call (702) 707-7273
            </a>
            <a
              href="/contact"
              className="inline-block py-4 px-8 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl border-2 focus:ring-4 focus:ring-blue-300 focus:outline-none"
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
              ✉️ Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
