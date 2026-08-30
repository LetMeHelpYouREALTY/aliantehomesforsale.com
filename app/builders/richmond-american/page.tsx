import { builderCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import ConstructionProcess from '../../components/ConstructionProcess';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';

const copy = uniquePageCopy(builderCopy, 'richmond-american');

export const metadata = pageMetadata('/builders/richmond-american', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function RichmondAmerican() {
  return (
    <main>
      <NewConstructionHero title={copy.h1} subtitle={copy.subtitle} />
      <BuilderDetailContent slug="richmond-american" />
      <TopBuilders />
      <ConstructionProcess />
      <NewConstructionCTA />
    </main>
  );
}
