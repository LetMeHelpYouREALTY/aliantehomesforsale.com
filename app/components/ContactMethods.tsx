'use client';

import { type SiteImage, siteImages } from '../../lib/content/site-images';
import { siteConfig } from '../../lib/site-config';
import CardPhoto from './CardPhoto';

type ContactMethodProps = {
  image: SiteImage;
  title: string;
  primary: string;
  details: string[];
  href?: string;
  featured?: boolean;
};

function ContactMethodCard({ image, title, primary, details, href, featured }: ContactMethodProps) {
  const content = (
    <>
      <CardPhoto image={image} heightClass="h-28" />
      <h3 className="text-2xl font-bold mb-4" style={{ color: '#1a365d' }}>
        {title}
      </h3>
      <p className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#2c5aa0' }}>
        {primary}
      </p>
      {details.map((detail) => (
        <p key={detail} className="text-gray-600">
          {detail}
        </p>
      ))}
    </>
  );

  const baseClasses = `bg-white rounded-xl p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
    featured ? 'border-4' : 'border-2'
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
      image: siteImages.officeNap,
      title: 'Call Us Today',
      primary: '(702) 707-7273',
      details: [siteConfig.hours.weekday, siteConfig.hours.weekend],
      href: 'tel:+17027077273',
      featured: true,
    },
    {
      image: siteImages.emailOffice,
      title: 'Email Us',
      primary: 'DrDuffy@AlianteHomesForSale.com',
      details: ['Reply during office hours'],
      href: 'mailto:DrDuffy@AlianteHomesForSale.com',
    },
    {
      image: siteImages.contact,
      title: 'Visit Our Office',
      primary: '2590 Nature Park Drive',
      details: ['Suite 275 · North Las Vegas, NV 89084', 'Tap for map & directions'],
      href: '#directions',
    },
    {
      image: siteImages.scheduleConsult,
      title: 'Schedule Time',
      primary: 'Book on Calendly',
      details: ['15-minute consultation', 'No contact form required'],
      href: '#schedule',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method) => (
            <ContactMethodCard key={method.title} {...method} />
          ))}
        </div>
      </div>
    </section>
  );
}
