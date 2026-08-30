'use client';

import { useState } from 'react';

interface SearchWidgetProps {
  variant?: 'hero' | 'sidebar';
}

export default function PropertySearchWidget({ variant = 'hero' }: SearchWidgetProps) {
  const [filters, setFilters] = useState({
    neighborhood: '',
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build query params
    const params = new URLSearchParams();
    if (filters.neighborhood) params.append('neighborhood', filters.neighborhood);
    if (filters.priceRange) params.append('price', filters.priceRange);
    if (filters.bedrooms) params.append('beds', filters.bedrooms);
    if (filters.bathrooms) params.append('baths', filters.bathrooms);

    // Navigate to search results
    window.location.href = `/search?${params.toString()}`;
  };

  const neighborhoods = [
    { value: '', label: 'All Neighborhoods' },
    { value: 'prominence', label: 'The Prominence (Luxury Gated)' },
    { value: 'desert-willows', label: 'Desert Willows (Family)' },
    { value: 'club-aliante', label: 'Club Aliante (Golf Course)' },
    { value: 'paseos', label: 'The Paseos (Affordable)' },
    { value: 'sun-city', label: 'Sun City Aliante (55+ Active Adult)' },
    { value: 'tule-springs', label: 'Villages at Tule Springs (New)' },
    { value: 'gated', label: 'All Gated Communities' },
    { value: 'golf', label: 'Golf Course Homes' },
  ];

  const priceRanges = [
    { value: '', label: 'Any Price' },
    { value: '0-300000', label: 'Under $300K' },
    { value: '300000-400000', label: '$300K - $400K' },
    { value: '400000-500000', label: '$400K - $500K' },
    { value: '500000-600000', label: '$500K - $600K' },
    { value: '600000-700000', label: '$600K - $700K' },
    { value: '700000-800000', label: '$700K - $800K' },
    { value: '800000-1000000', label: '$800K - $1M' },
    { value: '1000000-1500000', label: '$1M - $1.5M' },
    { value: '1500000-999999999', label: 'Over $1.5M' },
  ];

  const bedroomOptions = [
    { value: '', label: 'Any Beds' },
    { value: '1', label: '1+ Bedrooms' },
    { value: '2', label: '2+ Bedrooms' },
    { value: '3', label: '3+ Bedrooms' },
    { value: '4', label: '4+ Bedrooms' },
    { value: '5', label: '5+ Bedrooms' },
  ];

  const bathroomOptions = [
    { value: '', label: 'Any Baths' },
    { value: '1', label: '1+ Bathrooms' },
    { value: '1.5', label: '1.5+ Bathrooms' },
    { value: '2', label: '2+ Bathrooms' },
    { value: '2.5', label: '2.5+ Bathrooms' },
    { value: '3', label: '3+ Bathrooms' },
    { value: '4', label: '4+ Bathrooms' },
  ];

  const isHero = variant === 'hero';

  return (
    <div
      className={`${isHero ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'} rounded-xl shadow-2xl p-6 md:p-8`}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}
        <div className="border-b pb-4">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#1a365d' }}>
            Search Aliante Homes
          </h2>
          <p className="text-gray-600 mt-2">Live MLS listings updated about every 15 minutes</p>
        </div>

        {/* Search Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Neighborhood */}
          <div>
            <label
              htmlFor="neighborhood"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1a365d' }}
            >
              📍 Neighborhood
            </label>
            <select
              id="neighborhood"
              name="neighborhood"
              value={filters.neighborhood}
              onChange={(e) => setFilters({ ...filters, neighborhood: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              style={{ fontSize: '16px' }}
            >
              {neighborhoods.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1a365d' }}
            >
              💰 Price Range
            </label>
            <select
              id="price"
              name="price"
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              style={{ fontSize: '16px' }}
            >
              {priceRanges.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label
              htmlFor="bedrooms"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1a365d' }}
            >
              🛏️ Bedrooms
            </label>
            <select
              id="bedrooms"
              name="bedrooms"
              value={filters.bedrooms}
              onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              style={{ fontSize: '16px' }}
            >
              {bedroomOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Bathrooms */}
          <div>
            <label
              htmlFor="bathrooms"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1a365d' }}
            >
              🚿 Bathrooms
            </label>
            <select
              id="bathrooms"
              name="bathrooms"
              value={filters.bathrooms}
              onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              style={{ fontSize: '16px' }}
            >
              {bathroomOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="space-y-3">
          <button
            type="submit"
            className="w-full py-4 px-8 rounded-lg font-bold text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-orange-300 focus:outline-none"
            style={{ backgroundColor: '#ed8936' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dd6b20')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ed8936')}
          >
            Search live MLS homes
          </button>

          <a
            href="/search"
            className="block text-center font-semibold transition-colors hover:underline"
            style={{ color: '#2c5aa0' }}
          >
            Advanced Search Options +
          </a>
        </div>
      </form>
    </div>
  );
}
