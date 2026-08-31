import type { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Crawlable outbound link. Opens in a new tab; `noopener` avoids tab-nabbing. */
export default function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
