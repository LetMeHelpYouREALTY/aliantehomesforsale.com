declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': {
        'agent-encoded-id'?: string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string;
        'price-max'?: string;
        [key: string]: any;
      };
      'realscout-property-search': {
        [key: string]: any;
      };
      'realscout-property-details': {
        [key: string]: any;
      };
      'realscout-similar-properties': {
        [key: string]: any;
      };
      'realscout-advanced-search': {
        'agent-encoded-id'?: string;
        [key: string]: any;
      };
    }
  }

  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export {};
