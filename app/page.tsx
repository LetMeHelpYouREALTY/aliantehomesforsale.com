'use client';

import { useId } from 'react';
import StructuredData from './components/StructuredData';
import EnhancedHero from './components/EnhancedHero';
import EnhancedFeaturedProperties from './components/EnhancedFeaturedProperties';
import EnhancedPropertyTypes from './components/EnhancedPropertyTypes';
import EnhancedMarketInsights from './components/EnhancedMarketInsights';
import EnhancedTrustAuthority from './components/EnhancedTrustAuthority';
import GEOOptimizedContent from './components/GEOOptimizedContent';
import AlianteFAQ from './components/AlianteFAQ';

// Enhanced Real Estate Website - Modern, High-Converting Design
// Optimized for SEO, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization)

export default function Home() {
  const mainContentId = useId();

  return (
    <>
      {/* Structured Data for SEO & AI Search Engines */}
      <StructuredData type="RealEstateAgent" />
      <StructuredData type="WebSite" />

      <main id={mainContentId}>
        {/* Hero Section with Integrated Search */}
        <EnhancedHero />

        {/* Featured Properties Grid */}
        <EnhancedFeaturedProperties />

        {/* GEO/AEO Optimized Content - AI Citation-Friendly */}
        <GEOOptimizedContent />

        {/* Property Types & Neighborhoods */}
        <EnhancedPropertyTypes />

        {/* Market Insights with Stats */}
        <EnhancedMarketInsights />

        {/* Trust & Authority Section */}
        <EnhancedTrustAuthority />

        {/* FAQ Section with Schema */}
        <AlianteFAQ />
      </main>
    </>
  );
}
