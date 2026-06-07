/**
 * AEO (Answer Engine Optimization) Content Component
 * Optimized for AI citations and answer engines (2026)
 * Provides clear, structured answers that AI can easily extract and cite
 */

interface AEOContentProps {
  question: string;
  answer: string;
  context?: string;
  lastUpdated?: string;
}

export default function AEOContent({ question, answer, context, lastUpdated }: AEOContentProps) {
  const currentDate = lastUpdated || new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article
      itemScope
      itemType="https://schema.org/Question"
      className="aeo-content mb-6"
      data-last-updated={currentDate}
    >
      <h3
        itemProp="name"
        className="text-xl font-bold mb-3"
        style={{ color: '#1a365d' }}
      >
        {question}
      </h3>

      <div
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div
          itemProp="text"
          className="text-gray-700 leading-relaxed"
        >
          {answer}
        </div>

        {context && (
          <div className="mt-3 text-sm text-gray-600 italic">
            {context}
          </div>
        )}

        <meta itemProp="dateCreated" content={new Date().toISOString()} />
        <meta itemProp="upvoteCount" content="1" />

        <div className="mt-2 text-xs text-gray-500">
          Last updated: {currentDate}
        </div>
      </div>
    </article>
  );
}

/**
 * Usage Example:
 *
 * <AEOContent
 *   question="How many homes are for sale in Aliante?"
 *   answer="There are currently 286+ homes for sale in Aliante, North Las Vegas. Our MLS listings are updated every 15 minutes to ensure you have access to the most current inventory."
 *   context="Data source: Greater Las Vegas MLS"
 *   lastUpdated="June 7, 2026"
 * />
 */
