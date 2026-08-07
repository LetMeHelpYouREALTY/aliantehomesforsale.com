'use client';

interface ContactMethodProps {
  icon: string;
  title: string;
  primary: string;
  details: string[];
  href?: string;
  featured?: boolean;
}

function ContactMethodCard({ icon, title, primary, details, href, featured }: ContactMethodProps) {
  const content = (
    <>
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4" style={{ color: '#1a365d' }}>
        {title}
      </h3>
      <p className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#2c5aa0' }}>
        {primary}
      </p>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600">
          {detail}
        </p>
      ))}
    </>
  );

  const baseClasses = `bg-white rounded-xl p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
    featured ? 'border-4 transform scale-105' : 'border-2'
  }`;

  const borderColor = featured ? '#2c5aa0' : '#e5e7eb';

  if (href) {
    return (
      <a href={href} className={baseClasses} style={{ borderColor }}>
        {content}
      </a>
    );
  }

  return (
    <div className={baseClasses} style={{ borderColor }}>
      {content}
    </div>
  );
}

export default function ContactMethods() {
  const methods: ContactMethodProps[] = [
    {
      icon: '📞',
      title: 'Call Us Today',
      primary: '(702) 707-7273',
      details: ['Available 7 days a week', '9:00 AM - 8:00 PM PST'],
      href: 'tel:+17027077273',
      featured: true,
    },
    {
      icon: '✉️',
      title: 'Email Us',
      primary: 'DrDuffy@AlianteHomesForSale.com',
      details: ['Response within 2 hours'],
      href: 'mailto:DrDuffy@AlianteHomesForSale.com',
    },
    {
      icon: '📍',
      title: 'Visit Our Office',
      primary: '2590 Nature Park Drive',
      details: ['Suite 275 · North Las Vegas, NV 89084', 'Tap for map & directions'],
      href: '#directions',
    },
    {
      icon: '⏰',
      title: 'Office Hours',
      primary: 'Mon–Fri: 8AM–7PM',
      details: ['Sat–Sun: 9AM–6PM', 'Appointments welcome'],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <ContactMethodCard key={index} {...method} />
          ))}
        </div>
      </div>
    </section>
  );
}
