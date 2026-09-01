import type { Metadata } from 'next';
import { pageHero } from '../../lib/content/site-images';
import OfficeLocation from '../components/OfficeLocation';
import PageHero from '../components/PageHero';
import PropertyManagementContent from '../components/PropertyManagementContent';
import PropertyManagementFAQ from '../components/PropertyManagementFAQ';

export const metadata: Metadata = {
  title: 'Aliante Property Management | I Sell Homes — HOA Is Next Door',
  description:
    'Looking for Aliante property management? FirstService Residential manages the master association at 2590 Nature Park Drive, Suite 100. Dr. Jan Duffy sells homes from Suite 275. Call (702) 707-7273 to buy or sell.',
  keywords:
    'aliante property management, realty management aliante, firstservice residential aliante, aliante leasing agent, aliante rental management',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/property-management' },
  robots: { index: true, follow: true },
};

export default function PropertyManagementPage() {
  return (
    <main>
      <PageHero
        eyebrow="Aliante · North Las Vegas 89084"
        title="Aliante Property Management | I Sell Homes, Not Leases"
        subtitle="FirstService Residential runs the Aliante Master Association from Suite 100 in this building. I list and sell homes from Suite 275. Call (702) 707-7273."
        image={pageHero('/contact')}
      />
      <PropertyManagementContent />
      <PropertyManagementFAQ />
      <OfficeLocation />
    </main>
  );
}
