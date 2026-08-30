import { neighborhoodCopy, uniquePageCopy } from '../../lib/content/unique-pages';
import UniqueArticleSection from './UniqueArticleSection';

type NeighborhoodDetailContentProps = {
  slug: keyof typeof neighborhoodCopy;
};

export default function NeighborhoodDetailContent({ slug }: NeighborhoodDetailContentProps) {
  return <UniqueArticleSection copy={uniquePageCopy(neighborhoodCopy, slug)} />;
}
