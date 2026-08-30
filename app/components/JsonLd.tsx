import type { JsonLdNode } from '../../lib/schema/types';

type JsonLdProps = {
  id: string;
  data: JsonLdNode;
};

export default function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
