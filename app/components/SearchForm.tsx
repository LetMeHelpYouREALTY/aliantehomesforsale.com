'use client';

import { useId, useState } from 'react';

export default function SearchForm() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
  });

  // Generate unique IDs for accessibility
  const locationId = useId();
  const propertyTypeId = useId();
  const minPriceId = useId();
  const maxPriceId = useId();
  const bedroomsId = useId();
  const bathroomsId = useId();
  const sqftId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission
    console.log('Search submitted:', searchParams);
  };

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-grid">
          {/* Location Filter */}
          <div className="search-field">
            <label htmlFor={locationId}>
              <h3>Neighborhood</h3>
            </label>
            <select
              id={locationId}
              name="location"
              value={searchParams.location}
              onChange={handleChange}
            >
              <option value="">All Aliante</option>
              <option value="gated">Gated Communities</option>
              <option value="prominence">The Prominence</option>
              <option value="desert-willows">Desert Willows</option>
              <option value="club-aliante">Club Aliante</option>
              <option value="paseos">The Paseos</option>
            </select>
          </div>

          {/* Property Type Filter */}
          <div className="search-field">
            <label htmlFor={propertyTypeId}>
              <h3>Property Type</h3>
            </label>
            <select
              id={propertyTypeId}
              name="propertyType"
              value={searchParams.propertyType}
              onChange={handleChange}
            >
              <option value="">All Types</option>
              <option value="single-family">Single Family</option>
              <option value="townhouse">Townhouse</option>
              <option value="condo">Condo</option>
              <option value="new-construction">New Construction</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="search-field">
            <label htmlFor={minPriceId}>
              <h3>Min Price</h3>
            </label>
            <input
              type="number"
              id={minPriceId}
              name="minPrice"
              value={searchParams.minPrice}
              onChange={handleChange}
              placeholder="Min Price"
              min="0"
              aria-label="Minimum price"
            />
          </div>

          <div className="search-field">
            <label htmlFor={maxPriceId}>
              <h3>Max Price</h3>
            </label>
            <input
              type="number"
              id={maxPriceId}
              name="maxPrice"
              value={searchParams.maxPrice}
              onChange={handleChange}
              placeholder="Max Price"
              min="0"
              aria-label="Maximum price"
            />
          </div>

          {/* Bedrooms */}
          <div className="search-field">
            <label htmlFor={bedroomsId}>
              <h3>Bedrooms</h3>
            </label>
            <select
              id={bedroomsId}
              name="bedrooms"
              value={searchParams.bedrooms}
              onChange={handleChange}
            >
              <option value="">Any</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>
          </div>

          {/* Bathrooms */}
          <div className="search-field">
            <label htmlFor={bathroomsId}>
              <h3>Bathrooms</h3>
            </label>
            <select
              id={bathroomsId}
              name="bathrooms"
              value={searchParams.bathrooms}
              onChange={handleChange}
            >
              <option value="">Any</option>
              <option value="2">2+ Baths</option>
              <option value="3">3+ Baths</option>
              <option value="4">4+ Baths</option>
            </select>
          </div>

          {/* Square Footage */}
          <div className="search-field">
            <label htmlFor={sqftId}>
              <h3>Min Sq Ft</h3>
            </label>
            <input
              type="number"
              id={sqftId}
              name="sqft"
              value={searchParams.sqft}
              onChange={handleChange}
              placeholder="Min Sq Ft"
              min="0"
            />
          </div>
        </div>

        <div className="search-actions">
          <button type="submit" className="search-button primary">
            Search Properties
          </button>
          <button
            type="button"
            className="search-button secondary"
            onClick={() =>
              setSearchParams({
                location: '',
                propertyType: '',
                minPrice: '',
                maxPrice: '',
                bedrooms: '',
                bathrooms: '',
                sqft: '',
              })
            }
          >
            Clear Filters
          </button>
        </div>
      </form>
    </div>
  );
}
