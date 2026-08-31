import { siteConfig } from '../../lib/site-config';

/**
 * Visit / directions block for GBP “Add directions to your website”.
 * Map embed + Get Directions / Call / Open in Maps CTAs with NAP matching schema.
 */
export default function OfficeLocation() {
  const { address, phone, phoneTel, maps, hours, agentName } = siteConfig;
  const fullAddress = `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`;

  return (
    <section id="directions" className="py-16 px-4 bg-white" aria-labelledby="directions-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="directions-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            Visit Our Office &amp; Get Directions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plan your visit with {agentName} at Aliante Corporate Center in North Las Vegas. Confirm
            parking when you arrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* Google Map embed */}
          <div className="order-2 lg:order-1 min-h-[360px] lg:min-h-[420px]">
            <div className="relative h-full min-h-[360px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title={`Map to ${fullAddress}`}
                src={maps.embedUrl}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* NAP + plan-a-visit CTAs */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div
              className="rounded-2xl p-8 h-full"
              style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f5f0 100%)' }}
            >
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a365d' }}>
                Office Location
              </h3>
              <p className="text-sm text-gray-600 mb-6">Aliante Corporate Center</p>

              <address className="not-italic space-y-5 mb-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Address
                  </p>
                  <p className="font-bold text-lg" style={{ color: '#2c5aa0' }}>
                    {address.streetAddress}
                  </p>
                  <p className="text-gray-700">
                    {address.addressLocality}, {address.addressRegion} {address.postalCode}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${phoneTel}`}
                    className="font-bold text-lg hover:underline"
                    style={{ color: '#2c5aa0' }}
                  >
                    {phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Hours
                  </p>
                  <p className="text-gray-700">{hours.weekday}</p>
                  <p className="text-gray-700">{hours.weekend}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Getting here
                  </p>
                  <p className="text-gray-700">
                    Just off the 215 Beltway in Aliante. Visitor parking is in front of the building
                    — confirm when you arrive.
                  </p>
                </div>
              </address>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href={maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold text-white transition-colors focus:outline-none focus:ring-4 focus:ring-orange-300"
                  style={{ backgroundColor: '#ed8936' }}
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${phoneTel}`}
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold text-white transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                  style={{ backgroundColor: '#2c5aa0' }}
                >
                  Call {phone}
                </a>
                <a
                  href={maps.placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold border-2 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-200"
                  style={{ borderColor: '#2c5aa0', color: '#2c5aa0' }}
                >
                  Open in Google Maps
                </a>
                <a
                  href={maps.placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold border-2 transition-colors focus:outline-none focus:ring-4 focus:ring-teal-200"
                  style={{ borderColor: '#16B286', color: '#16B286' }}
                >
                  View Google Reviews
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-600">
                Prefer to meet at a listing, coffee shop, or your home? Call or{' '}
                <a href="#schedule" className="font-semibold underline">
                  schedule on Calendly
                </a>{' '}
                — we come to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
