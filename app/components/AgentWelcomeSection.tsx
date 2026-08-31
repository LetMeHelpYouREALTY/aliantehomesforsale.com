import Link from 'next/link';

/**
 * Purist-style agent intro: "Dr. Jan Duffy Real Estate" welcome block with short copy and Learn More → /about.
 */
export default function AgentWelcomeSection() {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="agent-welcome-heading">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="agent-welcome-heading" className="text-3xl font-bold mb-6 text-[#0a2540]">
          Aliante realtor services by Dr. Jan Duffy, 89084
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I represent buyers and sellers in the Aliante master plan — Club Aliante, gated villages,
          Sun City Aliante 55+, and nearby Tule Springs new construction. MLS search updates about
          every 15 minutes. Call (702) 707-7273.
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
