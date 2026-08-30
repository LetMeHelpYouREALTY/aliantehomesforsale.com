import { builderCopy, uniquePageCopy } from '../../lib/content/unique-pages';
import { pageMetadata } from '../../lib/seo/page-metadata';
import BuilderAdvantages from '../components/BuilderAdvantages';
import BuilderComparison from '../components/BuilderComparison';
import BuilderDetailContent from '../components/BuilderDetailContent';
import BuilderIncentivesInfo from '../components/BuilderIncentivesInfo';
import BuildersIntro from '../components/BuildersIntro';
import ContextualLinks from '../components/ContextualLinks';
import NewConstructionCTA from '../components/NewConstructionCTA';
import NewConstructionHero from '../components/NewConstructionHero';
import TopBuilders from '../components/TopBuilders';

const copy = uniquePageCopy(builderCopy, 'hub');

export const metadata = pageMetadata('/builders', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function Builders() {
  return (
    <main className="builders-page">
      <NewConstructionHero title={copy.h1} subtitle={copy.subtitle} image={copy.image} />
      <BuilderDetailContent slug="hub" />
      <BuildersIntro />
      <TopBuilders />
      <div className="px-4">
        <ContextualLinks variant="builders" />
      </div>
      <BuilderAdvantages />
      <BuilderComparison />
      <BuilderIncentivesInfo />
      <NewConstructionCTA />
    </main>
  );
}
