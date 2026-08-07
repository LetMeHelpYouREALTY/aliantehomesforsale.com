import Link from 'next/link';
import { buyerPathSteps } from '../../lib/content/aliante-content';

/** Simple 3-step buyer path — supports HowTo content graph + UX clarity */
export default function BuyerPathSection() {
  return (
    <section className="py-14 px-4 bg-[#f8f9fa]" aria-labelledby="buyer-path-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="buyer-path-heading"
            className="speakable text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: '#1a365d' }}
          >
            Your path to an Aliante home
          </h2>
          <p className="text-gray-600 text-lg">
            Three clear steps — search, tour, close with local guidance.
          </p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {buyerPathSteps.map((step) => (
            <li key={step.id}>
              <Link
                href={step.href}
                className="block h-full rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:border-[#2c5aa0] transition-colors"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white font-bold mb-4"
                  style={{ backgroundColor: '#2c5aa0' }}
                >
                  {step.step}
                </span>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
