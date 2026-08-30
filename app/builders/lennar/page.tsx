import { builderCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import QuickMoveInHomes from '../../components/QuickMoveInHomes';
import TopBuilders from '../../components/TopBuilders';
import WhyNewConstruction from '../../components/WhyNewConstruction';

const copy = uniquePageCopy(builderCopy, 'lennar');

export const metadata = pageMetadata('/builders/lennar', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function Lennar() {
  return (
    <main>
      <NewConstructionHero title={copy.h1} subtitle={copy.subtitle} />
      <BuilderDetailContent slug="lennar" />
      <TopBuilders />
      <WhyNewConstruction />
      <QuickMoveInHomes />
      <NewConstructionCTA />
    </main>
  );
}
