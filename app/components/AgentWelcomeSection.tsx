import Link from 'next/link';

/**
 * Purist-style agent intro: "Dr. Jan Duffy Real Estate" welcome block.
 */
export default function AgentWelcomeSection() {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="agent-welcome-heading">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="agent-welcome-heading" className="text-3xl font-bold mb-6 text-[#0a2540]">
          Dr. Jan Duffy Real Estate
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Nevada license S.0197614.LLC. Berkshire Hathaway HomeServices Nevada Properties. Aliante
          89084 is my home market — gated villages, golf-course homes, and Sun City Aliante 55+.
          Call (702) 707-7273 when you want a showing or a pricing conversation.
        </p>
        <Link
          href="/about"
          className="inline-block py-3 px-8 rounded-lg font-semibold text-white bg-[#2c5aa0] hover:bg-[#1e3f73] transition-colors focus:ring-2 focus:ring-[#2c5aa0] focus:ring-offset-2"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
