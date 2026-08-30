import { builderCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import ConstructionProcess from '../../components/ConstructionProcess';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import QuickMoveInHomes from '../../components/QuickMoveInHomes';
import TopBuilders from '../../components/TopBuilders';

const copy = uniquePageCopy(builderCopy, 'dr-horton');

export const metadata = pageMetadata('/builders/dr-horton', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function DrHorton() {
  return (
    <main>
      <NewConstructionHero title={copy.h1} subtitle={copy.subtitle} />
      <BuilderDetailContent slug="dr-horton" />
      <TopBuilders />
      <ConstructionProcess />
      <QuickMoveInHomes />
      <NewConstructionCTA />
    </main>
  );
}
