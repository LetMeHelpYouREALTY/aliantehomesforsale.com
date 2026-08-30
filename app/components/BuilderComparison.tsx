'use client';

export default function BuilderComparison() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Builder Comparison Guide
          </h2>
          <p className="text-xl text-gray-600">
            Compare features, pricing, and incentives across all major builders
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-xl">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr style={{ backgroundColor: '#1a365d' }}>
                <th className="px-6 py-4 text-left text-white font-bold">Builder</th>
                <th className="px-6 py-4 text-left text-white font-bold">Volume/Reputation</th>
                <th className="px-6 py-4 text-left text-white font-bold">Price Range</th>
                <th className="px-6 py-4 text-left text-white font-bold">Available Homes</th>
                <th className="px-6 py-4 text-left text-white font-bold">Best For</th>
                <th className="px-6 py-4 text-left text-white font-bold">Current Incentive</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Lennar
                </td>
                <td className="px-6 py-4 text-gray-700">★★★★★ #1 Volume</td>
                <td className="px-6 py-4 text-gray-700">$350K-$750K</td>
                <td className="px-6 py-4 text-gray-700">See live inventory</td>
                <td className="px-6 py-4 text-gray-700">Smart homes, value</td>
                <td className="px-6 py-4 font-bold" style={{ color: '#16B286' }}>
                  Up to $25K
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  D.R. Horton
                </td>
                <td className="px-6 py-4 text-gray-700">★★★★★ #2 Volume</td>
                <td className="px-6 py-4 text-gray-700">$380K-$680K</td>
                <td className="px-6 py-4 text-gray-700">See live inventory</td>
                <td className="px-6 py-4 text-gray-700">Affordability, variety</td>
                <td className="px-6 py-4 font-bold" style={{ color: '#16B286' }}>
                  Up to $20K
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Tri Pointe
                </td>
                <td className="px-6 py-4 text-gray-700">★★★★★ Luxury</td>
                <td className="px-6 py-4 text-gray-700">$450K-$850K</td>
                <td className="px-6 py-4 text-gray-700">See live inventory</td>
                <td className="px-6 py-4 text-gray-700">Premium finishes</td>
                <td className="px-6 py-4 font-bold" style={{ color: '#16B286' }}>
                  Up to $18K
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Del Webb
                </td>
                <td className="px-6 py-4 text-gray-700">★★★★★ 55+ Leader</td>
                <td className="px-6 py-4 text-gray-700">$380K-$650K</td>
                <td className="px-6 py-4 text-gray-700">See live inventory</td>
                <td className="px-6 py-4 text-gray-700">Active adult lifestyle</td>
                <td className="px-6 py-4 font-bold" style={{ color: '#16B286' }}>
                  Up to $12K
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Toll Brothers
                </td>
                <td className="px-6 py-4 text-gray-700">★★★★★ Ultra-Luxury</td>
                <td className="px-6 py-4 text-gray-700">$575K-$1.6M</td>
                <td className="px-6 py-4 text-gray-700">See live inventory</td>
                <td className="px-6 py-4 text-gray-700">Fortune 500 luxury</td>
                <td className="px-6 py-4 font-bold" style={{ color: '#16B286' }}>
                  2/1 Rate Buydown
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold" style={{ color: '#1a365d' }}>
                  Richmond American
                </td>
                <td className="px-6 py-4 text-gray-700">★★★★☆ Quality</td>
                <td className="px-6 py-4 text-gray-700">$420K-$680K</td>
                <td className="px-6 py-4 text-gray-700">See live inventory</td>
                <td className="px-6 py-4 text-gray-700">Customization options</td>
                <td className="px-6 py-4 font-bold" style={{ color: '#16B286' }}>
                  Up to $15K
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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
            Complete Builder Comparison Guide
          </a>
        </div>
      </div>
    </section>
  );
}
