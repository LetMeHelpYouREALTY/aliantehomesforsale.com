import { builderCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';
import WhyNewConstruction from '../../components/WhyNewConstruction';

const copy = uniquePageCopy(builderCopy, 'tri-pointe');

export const metadata = pageMetadata('/builders/tri-pointe', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function TriPointe() {
  return (
    <main>
      <NewConstructionHero title={copy.h1} subtitle={copy.subtitle} />
      <BuilderDetailContent slug="tri-pointe" />
      <TopBuilders />
      <WhyNewConstruction />
      <NewConstructionCTA />
    </main>
  );
}
