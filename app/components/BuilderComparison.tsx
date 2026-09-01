'use client';

type BuilderComparisonProps = {
  heading?: string;
  subheading?: string;
  showBuildersCta?: boolean;
};

export default function BuilderComparison({
  heading = 'Aliante and nearby builders in North Las Vegas',
  subheading = 'Confirm live inventory and incentive sheets. Call (702) 707-7273.',
  showBuildersCta = true,
}: BuilderComparisonProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="builder-comparison-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            {heading}
          </h2>
          <p className="text-xl text-gray-600">{subheading}</p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-xl">
          <table className="w-full min-w-[800px]" aria-labelledby="builder-comparison-heading">
            <caption className="sr-only">
              Compare Aliante and nearby builders by location, listings, and incentives
            </caption>
            <thead>
              <tr style={{ backgroundColor: '#1a365d' }}>
                <th className="px-6 py-4 text-left text-white font-bold">Builder</th>
                <th className="px-6 py-4 text-left text-white font-bold">
                  Relative to Aliante 89084
                </th>
                <th className="px-6 py-4 text-left text-white font-bold">Listings</th>
                <th className="px-6 py-4 text-left text-white font-bold">Incentives</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Lennar
                </td>
                <td className="px-6 py-4 text-gray-700">Inside Aliante / North Las Vegas 89084</td>
                <td className="px-6 py-4 text-gray-700">Confirm live inventory</td>
                <td className="px-6 py-4 text-gray-700">Confirm current sheet</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  D.R. Horton
                </td>
                <td className="px-6 py-4 text-gray-700">Nearby Tule Springs, not inside Aliante</td>
                <td className="px-6 py-4 text-gray-700">Confirm live inventory</td>
                <td className="px-6 py-4 text-gray-700">Confirm current sheet</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Del Webb
                </td>
                <td className="px-6 py-4 text-gray-700">Sun City Aliante 55+, ZIP 89084</td>
                <td className="px-6 py-4 text-gray-700">Confirm live inventory</td>
                <td className="px-6 py-4 text-gray-700">Confirm current sheet</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Tri Pointe
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Not inside 89084 (Kyle Pointe / Citrine)
                </td>
                <td className="px-6 py-4 text-gray-700">Confirm live inventory</td>
                <td className="px-6 py-4 text-gray-700">Confirm current sheet</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Toll Brothers
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Elkhorn Grove, Las Vegas 89131 — not 89084
                </td>
                <td className="px-6 py-4 text-gray-700">Confirm live inventory</td>
                <td className="px-6 py-4 text-gray-700">Confirm current sheet</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Richmond American
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Confirm whether the community is inside 89084
                </td>
                <td className="px-6 py-4 text-gray-700">Confirm live inventory</td>
                <td className="px-6 py-4 text-gray-700">Confirm current sheet</td>
              </tr>
            </tbody>
          </table>
        </div>

        {showBuildersCta ? (
          <div className="text-center mt-8">
            <a
              href="/builders"
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
              Aliante builders list →
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
