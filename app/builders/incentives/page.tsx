import { builderCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import BuilderComparison from '../../components/BuilderComparison';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import BuilderIncentivesInfo from '../../components/BuilderIncentivesInfo';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import TopBuilders from '../../components/TopBuilders';

const copy = uniquePageCopy(builderCopy, 'incentives');

export const metadata = pageMetadata('/builders/incentives', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function Incentives() {
  return (
    <main>
      <NewConstructionHero title={copy.h1} subtitle={copy.subtitle} />
      <BuilderDetailContent slug="incentives" />
      <BuilderComparison />
      <TopBuilders />
      <BuilderIncentivesInfo />
      <NewConstructionCTA />
    </main>
  );
}
