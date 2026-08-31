'use client';

type NeighborhoodComparisonProps = {
  heading?: string;
  subheading?: string;
  showCompareCta?: boolean;
};

export default function NeighborhoodComparison({
  heading = 'Aliante villages in ZIP 89084',
  subheading = 'Confirm live MLS prices before you offer. Call (702) 707-7273.',
  showCompareCta = true,
}: NeighborhoodComparisonProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            {heading}
          </h2>
          <p className="text-xl text-gray-600">{subheading}</p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-xl">
          <table className="w-full min-w-[700px] bg-white">
            <thead>
              <tr style={{ backgroundColor: '#1a365d' }}>
                <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                <th className="px-6 py-4 text-left text-white font-bold">The Prominence</th>
                <th className="px-6 py-4 text-left text-white font-bold">Desert Willows</th>
                <th className="px-6 py-4 text-left text-white font-bold">Club Aliante</th>
                <th className="px-6 py-4 text-left text-white font-bold">The Paseos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Current listings
                </td>
                <td className="px-6 py-4 text-gray-700">Confirm live MLS</td>
                <td className="px-6 py-4 text-gray-700">Confirm live MLS</td>
                <td className="px-6 py-4 text-gray-700">Confirm live MLS</td>
                <td className="px-6 py-4 text-gray-700">Confirm live MLS</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Home types
                </td>
                <td className="px-6 py-4 text-gray-700">Single-family</td>
                <td className="px-6 py-4 text-gray-700">Single-family, townhomes</td>
                <td className="px-6 py-4 text-gray-700">Golf-course lots</td>
                <td className="px-6 py-4 text-gray-700">Single-family, townhomes</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Golf access
                </td>
                <td className="px-6 py-4 text-gray-700">Near Aliante Golf Club</td>
                <td className="px-6 py-4 text-gray-700">Near Aliante Golf Club</td>
                <td className="px-6 py-4 text-gray-700">Fairway lots</td>
                <td className="px-6 py-4 text-gray-700">Near Aliante Golf Club</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Access
                </td>
                <td className="px-6 py-4 text-gray-700">Gated</td>
                <td className="px-6 py-4 text-gray-700">Open</td>
                <td className="px-6 py-4 text-gray-700">Gated</td>
                <td className="px-6 py-4 text-gray-700">Open</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Attendance
                </td>
                <td className="px-6 py-4 text-gray-700">Confirm CCSD boundary</td>
                <td className="px-6 py-4 text-gray-700">Confirm CCSD boundary</td>
                <td className="px-6 py-4 text-gray-700">Confirm CCSD boundary</td>
                <td className="px-6 py-4 text-gray-700">Confirm CCSD boundary</td>
              </tr>
            </tbody>
          </table>
        </div>

        {showCompareCta ? (
          <div className="text-center mt-8">
            <a
              href="/neighborhoods/compare"
              className="inline-block py-3 px-8 rounded-lg font-semibold transition-all transform hover:scale-105 border-2 focus:ring-4 focus:ring-blue-300 focus:outline-none"
              style={{
                color: '#2c5aa0',
                borderColor: '#2c5aa0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2c5aa0';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#2c5aa0';
              }}
            >
              Full Aliante comparison →
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
