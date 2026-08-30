export type PageKind =
  | 'home'
  | 'listings'
  | 'search'
  | 'neighborhood-hub'
  | 'neighborhood'
  | 'neighborhood-compare'
  | 'builder-hub'
  | 'builder'
  | 'incentives'
  | 'collection'
  | 'dataset'
  | 'howto'
  | 'service'
  | 'calculator'
  | 'schools'
  | 'about'
  | 'contact'
  | 'legal';

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageSection = {
  id: string;
  name: string;
  description?: string;
};

export type HowToStep = {
  name: string;
  text: string;
};

export type PageTypeName =
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'SearchResultsPage'
  | 'FAQPage'
  | 'ItemPage';

export type PageDefinition = {
  path: string;
  name: string;
  description: string;
  kind: PageKind;
  pageTypes: [PageTypeName, ...PageTypeName[]];
  /** Existing FAQ is rendered by the page itself */
  faqPlacement: 'inline' | 'layout' | 'none';
  sections: PageSection[];
  faqs?: FaqItem[];
  howTo?: {
    name: string;
    description: string;
    steps: HowToStep[];
  };
  neighborhoodSlug?: string;
  builderSlug?: string;
  serviceSlug?: string;
};

export type JsonLdNode = Record<string, unknown>;
