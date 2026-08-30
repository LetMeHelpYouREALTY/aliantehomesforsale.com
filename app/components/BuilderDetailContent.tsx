import { builderCopy, uniquePageCopy } from '../../lib/content/unique-pages';
import UniqueArticleSection from './UniqueArticleSection';

type BuilderDetailContentProps = {
  slug: keyof typeof builderCopy;
};

export default function BuilderDetailContent({ slug }: BuilderDetailContentProps) {
  return <UniqueArticleSection copy={uniquePageCopy(builderCopy, slug)} />;
}
