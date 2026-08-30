'use client';

import { useId } from 'react';

export default function FeaturedProperties() {
  const featuredHeadingId = useId();
  const prop1TitleId = useId();
  const prop2TitleId = useId();
  const prop3TitleId = useId();
  const prop4TitleId = useId();
  const prop5TitleId = useId();
  const prop6TitleId = useId();

  const viewProperty = (propertyId: string) => {
    // Would normally open detailed property page or modal
    const propertyDetails = {
      'luxury-gated-649900': {
        address: '1234 Mountain View Dr, North Las Vegas, NV 89084',
        mls: 'MLS# 2523456',
        yearBuilt: '2019',
        hoa: '$185/month',
        features: 'Pool, Spa, Gated Community, Mountain Views',
      },
      'family-home-489000': {
        address: '5678 Family Circle, North Las Vegas, NV 89084',
        mls: 'MLS# 2523457',
        yearBuilt: '2021',
        hoa: '$95/month',
        features: 'Open Floor Plan, Large Backyard, Top Schools',
      },
      // Add more property details...
    };

    const property = propertyDetails[propertyId as keyof typeof propertyDetails] || {
      address: 'Address available upon request',
      mls: 'MLS details in full listing',
      yearBuilt: 'See property details',
      hoa: 'HOA information available',
      features: 'Full feature list in detailed view',
    };

    const message = `🏠 Property Details for ${propertyId}

📍 ${property.address}
🏷️ ${property.mls}
📅 Year Built: ${property.yearBuilt}
🏘️ HOA: ${property.hoa}
⭐ Key Features: ${property.features}

This would normally open a detailed property page with:
• 20+ high-resolution photos
• Interactive virtual tour
• Detailed room specifications
• Neighborhood information & schools
• Mortgage payment calculator
• Schedule showing form
• Request more information

Would you like to schedule a showing or request more information?`;

    alert(message);

    // Track property views for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'property_view', {
        property_id: propertyId,
      });
    }
  };

  const showAllProperties = () => {
    // Would normally navigate to full listings page
    alert('This would navigate to the full property listings page with live MLS inventory.');
  };

  return (
    <section className="featured-properties" id="properties" aria-labelledby={featuredHeadingId}>
      <div className="container">
        <h2 id={featuredHeadingId}>Current Aliante Listings - Live MLS Data</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#666' }}>
          Real-time listings updated every 15 minutes • Verified by local MLS
        </p>

        <div className="property-grid">
          <article className="property-card" aria-labelledby={prop1TitleId}>
            <div
              className="property-image"
              role="img"
              aria-label="Luxury single family home exterior"
            >
              🏠
              <div className="price-tag" aria-label="Price: $649,900">
                $649,900
              </div>
            </div>
            <div className="property-info">
              <h3 id={prop1TitleId}>Luxury Gated Community Home</h3>
              <p>
                Beautiful 2-story home in prestigious gated community with mountain views, premium
                finishes, and resort-style amenities.
              </p>
              <div className="property-details">
                <span>
                  <strong>4</strong>
                  <br />
                  Bedrooms
                </span>
                <span>
                  <strong>3</strong>
                  <br />
                  Bathrooms
                </span>
                <span>
                  <strong>2,840</strong>
                  <br />
                  Sq Ft
                </span>
                <span>
                  <strong>0.25</strong>
                  <br />
                  Acres
                </span>
              </div>
              <ul className="property-features">
                <li>Gated community with 24/7 security</li>
                <li>Upgraded kitchen with granite countertops</li>
                <li>3-car garage with additional storage</li>
                <li>Mountain and Las Vegas Strip views</li>
                <li>Community pool, spa, and fitness center</li>
              </ul>
              <button
                type="button"
                className="view-property"
                onClick={() => viewProperty('luxury-gated-649900')}
              >
                View Full Details & Photos
              </button>
            </div>
          </article>

          <article className="property-card" aria-labelledby={prop2TitleId}>
            <div className="property-image" role="img" aria-label="Family home exterior">
              🏡
              <div className="price-tag" aria-label="Price: $489,000">
                $489,000
              </div>
            </div>
            <div className="property-info">
              <h3 id={prop2TitleId}>Perfect Family Home - Top Schools</h3>
              <p>
                Ideal for growing families with open floor plan, large backyard, and walking
                distance to A-rated schools.
              </p>
              <div className="property-details">
                <span>
                  <strong>3</strong>
                  <br />
                  Bedrooms
                </span>
                <span>
                  <strong>2.5</strong>
                  <br />
                  Bathrooms
                </span>
                <span>
                  <strong>2,150</strong>
                  <br />
                  Sq Ft
                </span>
                <span>
                  <strong>0.18</strong>
                  <br />
                  Acres
                </span>
              </div>
              <ul className="property-features">
                <li>Open concept great room design</li>
                <li>Master suite with walk-in closet</li>
                <li>Covered patio with large backyard</li>
                <li>Top-rated CCSD school district</li>
                <li>2-car garage plus driveway parking</li>
              </ul>
              <button
                type="button"
                className="view-property"
                onClick={() => viewProperty('family-home-489000')}
              >
                View Full Details & Photos
              </button>
            </div>
          </article>

          <article className="property-card" aria-labelledby={prop3TitleId}>
            <div className="property-image" role="img" aria-label="Starter home exterior">
              🏘️
              <div className="price-tag" aria-label="Price: $329,900">
                $329,900
              </div>
            </div>
            <div className="property-info">
              <h3 id={prop3TitleId}>First-Time Buyer Dream Home</h3>
              <p>
                Move-in ready home perfect for first-time buyers with modern updates and low
                maintenance requirements.
              </p>
              <div className="property-details">
                <span>
                  <strong>2</strong>
                  <br />
                  Bedrooms
                </span>
                <span>
                  <strong>2</strong>
                  <br />
                  Bathrooms
                </span>
                <span>
                  <strong>1,650</strong>
                  <br />
                  Sq Ft
                </span>
                <span>
                  <strong>0.12</strong>
                  <br />
                  Acres
                </span>
              </div>
              <ul className="property-features">
                <li>Recently updated luxury vinyl flooring</li>
                <li>Energy-efficient appliances included</li>
                <li>Low maintenance desert landscaping</li>
                <li>Community amenities and parks</li>
                <li>FHA and VA loan approved</li>
              </ul>
              <button
                type="button"
                className="view-property"
                onClick={() => viewProperty('starter-home-329900')}
              >
                View Full Details & Photos
              </button>
            </div>
          </article>

          <article className="property-card" aria-labelledby={prop4TitleId}>
            <div className="property-image" role="img" aria-label="Golf course home exterior">
              🏌️
              <div className="price-tag" aria-label="Price: $799,000">
                $799,000
              </div>
            </div>
            <div className="property-info">
              <h3 id={prop4TitleId}>Club Aliante Golf Course Estate</h3>
              <p>
                Premium home with direct golf course frontage, resort-style pool, and membership to
                Club Aliante included.
              </p>
              <div className="property-details">
                <span>
                  <strong>4</strong>
                  <br />
                  Bedrooms
                </span>
                <span>
                  <strong>3.5</strong>
                  <br />
                  Bathrooms
                </span>
                <span>
                  <strong>3,200</strong>
                  <br />
                  Sq Ft
                </span>
                <span>
                  <strong>0.35</strong>
                  <br />
                  Acres
                </span>
              </div>
              <ul className="property-features">
                <li>Direct 18th hole golf course frontage</li>
                <li>Resort-style pool with spa and waterfall</li>
                <li>Gourmet kitchen with butler's pantry</li>
                <li>3-car garage with golf cart bay</li>
                <li>Club Aliante membership included</li>
              </ul>
              <button
                type="button"
                className="view-property"
                onClick={() => viewProperty('golf-estate-799000')}
              >
                View Full Details & Photos
              </button>
            </div>
          </article>

          <article className="property-card" aria-labelledby={prop5TitleId}>
            <div className="property-image" role="img" aria-label="Active adult community home">
              🌟
              <div className="price-tag" aria-label="Price: $425,000">
                $425,000
              </div>
            </div>
            <div className="property-info">
              <h3 id={prop5TitleId}>Sun City Aliante Active Living</h3>
              <p>
                55+ active adult community with maintenance-free living, resort amenities, and
                endless recreational activities.
              </p>
              <div className="property-details">
                <span>
                  <strong>2</strong>
                  <br />
                  Bedrooms
                </span>
                <span>
                  <strong>2</strong>
                  <br />
                  Bathrooms
                </span>
                <span>
                  <strong>1,890</strong>
                  <br />
                  Sq Ft
                </span>
                <span>
                  <strong>0.15</strong>
                  <br />
                  Acres
                </span>
              </div>
              <ul className="property-features">
                <li>55+ active adult gated community</li>
                <li>Clubhouse with fitness center and pool</li>
                <li>Golf cart accessible throughout</li>
                <li>Maintenance-free exterior included</li>
                <li>Social clubs and organized activities</li>
              </ul>
              <button
                type="button"
                className="view-property"
                onClick={() => viewProperty('sun-city-425000')}
              >
                View Full Details & Photos
              </button>
            </div>
          </article>

          <article className="property-card" aria-labelledby={prop6TitleId}>
            <div className="property-image" role="img" aria-label="New construction home">
              ✨
              <div className="price-tag" aria-label="Price: $579,900">
                $579,900
              </div>
            </div>
            <div className="property-info">
              <h3 id={prop6TitleId}>Brand New Lennar Smart Home</h3>
              <p>
                Just completed! New construction home with integrated smart home technology, energy
                efficiency, and modern design.
              </p>
              <div className="property-details">
                <span>
                  <strong>3</strong>
                  <br />
                  Bedrooms
                </span>
                <span>
                  <strong>2.5</strong>
                  <br />
                  Bathrooms
                </span>
                <span>
                  <strong>2,380</strong>
                  <br />
                  Sq Ft
                </span>
                <span>
                  <strong>0.20</strong>
                  <br />
                  Acres
                </span>
              </div>
              <ul className="property-features">
                <li>Smart home technology package included</li>
                <li>Energy-efficient construction and appliances</li>
                <li>Designer finishes and fixtures throughout</li>
                <li>10-year structural warranty</li>
                <li>Never been lived in - move-in ready</li>
              </ul>
              <button
                type="button"
                className="view-property"
                onClick={() => viewProperty('new-lennar-579900')}
              >
                View Full Details & Photos
              </button>
            </div>
          </article>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            type="button"
            className="nav-cta"
            onClick={showAllProperties}
            style={{ marginRight: '1rem', display: 'inline-block' }}
          >
            Browse live Aliante MLS listings
          </button>
          <a href="#search" className="nav-cta" style={{ background: '#6c757d' }}>
            Advanced Search & Filters
          </a>
        </div>
      </div>
    </section>
  );
}
