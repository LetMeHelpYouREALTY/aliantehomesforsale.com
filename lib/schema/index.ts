import { buildPageGraph } from './build-page-graph';
import { normalizePathname } from './helpers';
import { pageCatalog, pageCatalogByPath } from './page-catalog';
import type { PageDefinition } from './types';

export function getPageDefinition(pathname: string): PageDefinition | undefined {
  return pageCatalogByPath[normalizePathname(pathname)];
}

export { buildPageGraph, pageCatalog, pageCatalogByPath };
export type { PageDefinition } from './types';
