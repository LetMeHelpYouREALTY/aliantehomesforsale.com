import { builderCopy, uniquePageCopy } from '../../../lib/content/unique-pages';
import { pageMetadata } from '../../../lib/seo/page-metadata';
import BuilderDetailContent from '../../components/BuilderDetailContent';
import CommunityAmenities from '../../components/CommunityAmenities';
import NewConstructionCTA from '../../components/NewConstructionCTA';
import NewConstructionHero from '../../components/NewConstructionHero';
import SunCityContent from '../../components/SunCityContent';
import TopBuilders from '../../components/TopBuilders';

const copy = uniquePageCopy(builderCopy, 'del-webb');

export const metadata = pageMetadata('/builders/del-webb', {
  title: copy.h1,
  description: copy.subtitle,
});

export default function DelWebb() {
  return (
    <main>
      <NewConstructionHero title={copy.h1} subtitle={copy.subtitle} image={copy.image} />
      <BuilderDetailContent slug="del-webb" />
      <SunCityContent />
      <TopBuilders />
      <CommunityAmenities />
      <NewConstructionCTA />
    </main>
  );
}
