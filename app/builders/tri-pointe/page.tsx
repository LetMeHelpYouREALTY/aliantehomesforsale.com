import { pageHero } from '../../../lib/content/site-images';
import { pageMetadata } from '../../../lib/seo-utils';
import ContextualLinks from '../../components/ContextualLinks';
import OfficeLocation from '../../components/OfficeLocation';
import PageHero from '../../components/PageHero';
import TriPointeContent from '../../components/TriPointeContent';
import TriPointeFAQ from '../../components/TriPointeFAQ';

export const metadata = pageMetadata({
  title: 'Tri Pointe Homes Las Vegas | New Construction Near Aliante',
  description:
    'Tri Pointe Homes Las Vegas: current collections are northwest (Kyle Pointe, Citrine), not inside Aliante 89084. Compare with Lennar and Aliante resale. Independent buyer representation. Call (702) 707-7273.',
  path: '/builders/tri-pointe',
  keywords:
    'tri pointe homes las vegas, tri pointe las vegas, tripointe homes las vegas, new construction north las vegas',
});

export default function TriPointe() {
  return (
    <main>
      <PageHero
        eyebrow="New construction · Las Vegas Valley"
        title="Tri Pointe Homes Las Vegas | Near Aliante, Not Inside 89084"
        subtitle="Tri Pointe is not currently listing a community inside the Aliante master plan. Tour northwest collections with an independent buyer’s agent. Call (702) 707-7273."
        image={pageHero('/builders/tri-pointe')}
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
