'use client';

export default function AboutCommitment() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            How I represent you in Aliante ZIP 89084
          </h2>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-12 shadow-lg">
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-center mb-8">
            I confirm live MLS, village HOA documents, and comps for Club Aliante, gated streets,
            and Sun City Aliante before you offer or list. Call (702) 707-7273. Office at 2590
            Nature Park Drive, Suite 275.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-3" aria-hidden="true">
                📋
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                Live MLS
              </h3>
              <p className="text-gray-600">Listings refresh about every 15 minutes</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-3" aria-hidden="true">
                ✍️
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                Fee in writing
              </h3>
              <p className="text-gray-600">Confirm representation before you tour</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-3" aria-hidden="true">
                🏘️
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                Village comps
              </h3>
              <p className="text-gray-600">89084 comps — not a valley average</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
