import { buildPageGraph, getPageDefinition } from '../../lib/schema';
import JsonLd from './JsonLd';

type PageSchemaProps = {
  pathname: string;
};

export default function PageSchema({ pathname }: PageSchemaProps) {
  const definition = getPageDefinition(pathname);
  if (!definition) {
    return null;
  }

  return (
    <JsonLd
      id={`page-schema-${definition.path.replace(/\//g, '-') || 'home'}`}
      data={buildPageGraph(definition)}
    />
  );
}
