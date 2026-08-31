'use client';

import { useState } from 'react';

export default function AdvancedSearchForm() {
  const [filters, setFilters] = useState({
    neighborhoods: [] as string[],
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    sqftMin: '',
    sqftMax: '',
    propertyTypes: [] as string[],
    amenities: [] as string[],
    yearBuilt: [2000, 2025] as [number, number],
    hoaFees: '',
    daysOnMarket: '',
    status: ['active'] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build query params
    const params = new URLSearchParams();
    if (filters.neighborhoods.length)
      params.append('neighborhoods', filters.neighborhoods.join(','));
    if (filters.priceMin) params.append('priceMin', filters.priceMin);
    if (filters.priceMax) params.append('priceMax', filters.priceMax);
    if (filters.bedrooms) params.append('beds', filters.bedrooms);
    if (filters.bathrooms) params.append('baths', filters.bathrooms);
    if (filters.propertyTypes.length) params.append('types', filters.propertyTypes.join(','));
    if (filters.amenities.length) params.append('amenities', filters.amenities.join(','));

    // Navigate to results
    window.location.href = `/homes-for-sale`;
  };

  const handleCheckbox = (
    category: 'neighborhoods' | 'propertyTypes' | 'amenities' | 'status',
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      neighborhoods: [],
      priceMin: '',
      priceMax: '',
      bedrooms: '',
      bathrooms: '',
      sqftMin: '',
      sqftMax: '',
      propertyTypes: [],
      amenities: [],
      yearBuilt: [2000, 2025],
      hoaFees: '',
      daysOnMarket: '',
      status: ['active'],
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-7xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Header */}
        <div className="border-b pb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Advanced Property Search
          </h2>
          <p className="text-xl text-gray-600">
            Find your perfect Aliante home with detailed filters
          </p>
        </div>

        {/* Section 1: Location & Price */}
        <section>
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#2c5aa0' }}>
            Location & Price Range
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Neighborhoods */}
            <div className="md:col-span-3">
              <label className="block text-sm font-bold mb-3" style={{ color: '#1a365d' }}>
                Neighborhoods
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'The Prominence',
                  'Desert Willows',
                  'Club Aliante',
                  'The Paseos',
                  'Sun City Aliante',
                  'Tule Springs',
                  'Gated Communities',
                  'Golf Course Homes',
                ].map((neighborhood) => (
                  <label key={neighborhood} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.neighborhoods.includes(neighborhood)}
                      onChange={() => handleCheckbox('neighborhoods', neighborhood)}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{neighborhood}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Min */}
            <div>
              <label
                htmlFor="priceMin"
                className="block text-sm font-bold mb-2"
                style={{ color: '#1a365d' }}
              >
                Minimum Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  id="priceMin"
                  value={filters.priceMin}
                  onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                  placeholder="300,000"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  style={{ fontSize: '16px' }}
                />
              </div>
            </div>

            {/* Price Max */}
            <div>
              <label
                htmlFor="priceMax"
                className="block text-sm font-bold mb-2"
                style={{ color: '#1a365d' }}
              >
                Maximum Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  id="priceMax"
                  value={filters.priceMax}
                  onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                  placeholder="600,000"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  style={{ fontSize: '16px' }}
                />
              </div>
            </div>

            {/* Property Types */}
            <div className="md:col-span-1">
              <label className="block text-sm font-bold mb-3" style={{ color: '#1a365d' }}>
                Property Type
              </label>
              <div className="space-y-2">
                {[
                  'Single Family',
                  'Townhouse/Condo',
                  'New Construction',
                  'Active Adult 55+',
                  'Golf Course',
                  'Gated Community',
                ].map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.propertyTypes.includes(type)}
                      onChange={() => handleCheckbox('propertyTypes', type)}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Property Details */}
        <section>
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#2c5aa0' }}>
            Property Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Bedrooms */}
            <div>
              <label
                htmlFor="bedrooms"
                className="block text-sm font-bold mb-2"
                style={{ color: '#1a365d' }}
              >
                Bedrooms
              </label>
              <select
                id="bedrooms"
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                style={{ fontSize: '16px' }}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label
                htmlFor="bathrooms"
                className="block text-sm font-bold mb-2"
                style={{ color: '#1a365d' }}
              >
                Bathrooms
              </label>
              <select
                id="bathrooms"
                value={filters.bathrooms}
                onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                style={{ fontSize: '16px' }}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="1.5">1.5+</option>
                <option value="2">2+</option>
                <option value="2.5">2.5+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Square Feet Min */}
            <div>
              <label
                htmlFor="sqftMin"
                className="block text-sm font-bold mb-2"
                style={{ color: '#1a365d' }}
              >
                Min Sq Ft
              </label>
              <input
                type="number"
                id="sqftMin"
                value={filters.sqftMin}
                onChange={(e) => setFilters({ ...filters, sqftMin: e.target.value })}
                placeholder="1,500"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                style={{ fontSize: '16px' }}
              />
            </div>

            {/* Square Feet Max */}
            <div>
              <label
                htmlFor="sqftMax"
                className="block text-sm font-bold mb-2"
                style={{ color: '#1a365d' }}
              >
                Max Sq Ft
              </label>
              <input
                type="number"
                id="sqftMax"
                value={filters.sqftMax}
                onChange={(e) => setFilters({ ...filters, sqftMax: e.target.value })}
                placeholder="3,000"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                style={{ fontSize: '16px' }}
              />
            </div>
          </div>
        </section>

        {/* Section 3: Amenities & Features */}
        <section>
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#2c5aa0' }}>
            Amenities & Features
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Pool',
              'Spa/Hot Tub',
              'Fireplace',
              'Upgraded Kitchen',
              'Walk-in Closets',
              'Home Office',
              'Covered Patio',
              'Outdoor Kitchen',
              'Mountain View',
              'Golf Course View',
              'RV Parking',
              '3-Car Garage',
              'Gated Security',
              'Club Amenities',
              'Tennis Courts',
              'Fitness Center',
            ].map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => handleCheckbox('amenities', amenity)}
                  className="w-5 h-5 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700 text-sm">{amenity}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-6 border-t">
          <button
            type="button"
            onClick={clearFilters}
            className="px-8 py-3 rounded-lg font-semibold text-gray-600 border-2 border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Clear All Filters
          </button>

          <button
            type="submit"
            className="flex-1 py-4 px-8 rounded-lg font-bold text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-orange-300 focus:outline-none"
            style={{ backgroundColor: '#ed8936' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dd6b20')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ed8936')}
          >
            🔍 Search Properties
          </button>
        </div>
      </form>
    </div>
  );
}
