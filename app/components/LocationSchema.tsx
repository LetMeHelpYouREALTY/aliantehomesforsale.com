'use client';

export default function LocationSchema() {
  // Enhanced GEO (Geographic Engine Optimization) for 2026
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': 'https://www.aliantehomesforsale.com/#aliante-location',
    'name': 'Aliante',
    'alternateName': 'Aliante Master Planned Community',
    'description': 'Master-planned community in North Las Vegas, Nevada featuring gated communities, golf courses, active adult 55+ living, award-winning schools, and resort-style amenities. Home to 286+ properties for sale.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'North Las Vegas',
      'addressRegion': 'NV',
      'postalCode': '89084',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '36.1699',
      'longitude': '-115.1398'
    },
    'additionalProperty': [
      {
        '@type': 'PropertyValue',
        'name': 'Geographic Area',
        'value': 'North Las Vegas, Clark County, Nevada'
      },
      {
        '@type': 'PropertyValue',
        'name': 'ZIP Code',
        'value': '89084, 89085, 89086'
      },
      {
        '@type': 'PropertyValue',
        'name': 'Service Radius',
        'value': '5 miles from Aliante center'
      },
      {
        '@type': 'PropertyValue',
        'name': 'Population',
        'value': 'Approximately 45,000 residents'
      }
    ],
    'containedInPlace': [
      {
        '@type': 'City',
        'name': 'North Las Vegas',
        '@id': 'https://en.wikipedia.org/wiki/North_Las_Vegas,_Nevada',
        'address': {
          '@type': 'PostalAddress',
          'addressRegion': 'Nevada',
          'addressCountry': 'United States'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '36.1989',
          'longitude': '-115.1175'
        }
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Clark County',
        'addressRegion': 'Nevada',
        'addressCountry': 'US'
      },
      {
        '@type': 'Place',
        'name': 'Las Vegas Valley',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '36.1716',
          'longitude': '-115.1391'
        }
      }
    ],
    'containsPlace': [
      {
        '@type': 'Place',
        'name': 'The Prominence',
        'description': 'Luxury gated community',
        'url': 'https://www.aliantehomesforsale.com/neighborhoods/prominence'
      },
      {
        '@type': 'Place',
        'name': 'Desert Willows',
        'description': 'Family-friendly neighborhood',
        'url': 'https://www.aliantehomesforsale.com/neighborhoods/desert-willows'
      },
      {
        '@type': 'Place',
        'name': 'Club Aliante',
        'description': 'Golf course community',
        'url': 'https://www.aliantehomesforsale.com/neighborhoods/club-aliante'
      },
      {
        '@type': 'Place',
        'name': 'Sun City Aliante',
        'description': 'Active adult 55+ community',
        'url': 'https://www.aliantehomesforsale.com/neighborhoods/sun-city'
      },
      {
        '@type': 'Place',
        'name': 'The Paseos',
        'description': 'Affordable family homes',
        'url': 'https://www.aliantehomesforsale.com/neighborhoods/paseos'
      },
      {
        '@type': 'Place',
        'name': 'Tule Springs',
        'description': 'Natural preservation area',
        'url': 'https://www.aliantehomesforsale.com/neighborhoods/tule-springs'
      }
    ],
    'hasMap': 'https://maps.google.com/?q=36.1699,-115.1398',
    'maximumAttendeeCapacity': 45000,
    'tourBookingPage': 'https://www.aliantehomesforsale.com/contact'
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
    />
  );
}

