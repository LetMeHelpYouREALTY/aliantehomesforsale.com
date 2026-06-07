'use client';

import { useId } from 'react';

interface AEOContentProps {
  question: string;
  answer: string;
  lastUpdated?: string;
  category?: string;
  relatedLinks?: Array<{ text: string; url: string }>;
}

export default function AEOOptimizedContent({
  question,
  answer,
  lastUpdated = new Date().toISOString().split('T')[0],
  category = 'Real Estate',
  relatedLinks = []
}: AEOContentProps) {
  const contentId = useId();

  return (
    <article
      itemScope
      itemType="https://schema.org/Question"
      className="aeo-optimized-content"
      data-last-updated={lastUpdated}
      data-category={category}
    >
      <div className="mb-4">
        <h2 itemProp="name" className="text-2xl font-bold text-gray-900 mb-3">
          {question}
        </h2>

        <div
          itemScope
          itemType="https://schema.org/Answer"
          itemProp="acceptedAnswer"
        >
          <div
            itemProp="text"
            className="text-lg text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: answer }}
          />

          <div className="flex items-center gap-4 text-sm text-gray-500 border-t pt-3 mt-4">
            <span>
              Last Updated: <time dateTime={lastUpdated}>{new Date(lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </span>
            <span className="hidden" itemProp="dateCreated" content={lastUpdated} />
            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>
      </div>

      {relatedLinks.length > 0 && (
        <nav className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Related Resources:</h3>
          <ul className="space-y-2">
            {relatedLinks.map((link, index) => (
              <li key={`${contentId}-link-${index}`}>
                <a
                  href={link.url}
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                  rel="related"
                >
                  → {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </article>
  );
}
