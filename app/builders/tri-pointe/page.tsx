import type { Metadata } from 'next';
import ContextualLinks from '../../components/ContextualLinks';
import OfficeLocation from '../../components/OfficeLocation';
import PageHero from '../../components/PageHero';
import TriPointeContent from '../../components/TriPointeContent';
import TriPointeFAQ from '../../components/TriPointeFAQ';

export const metadata: Metadata = {
  title: 'Tri Pointe Homes Las Vegas | New Construction Near Aliante',
  description:
    'Tri Pointe Homes Las Vegas: current collections are northwest (Kyle Pointe, Citrine), not inside Aliante 89084. Compare with Lennar and Aliante resale. Independent buyer representation. Call (702) 707-7273.',
  keywords:
    'tri pointe homes las vegas, tri pointe las vegas, tripointe homes las vegas, new construction north las vegas',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/builders/tri-pointe' },
  robots: { index: true, follow: true },
};

export default function TriPointe() {
  return (
    <main>
      <PageHero
        eyebrow="New construction · Las Vegas Valley"
        title="Tri Pointe Homes Las Vegas | Near Aliante, Not Inside 89084"
        subtitle="Tri Pointe is not currently listing a community inside the Aliante master plan. Tour northwest collections with an independent buyer’s agent. Call (702) 707-7273."
      />
      <TriPointeContent />
      <div className="px-4">
        <ContextualLinks variant="builders" />
      </div>
      <TriPointeFAQ />
      <OfficeLocation />
    </main>
  );
}
