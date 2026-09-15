'use client';

import { siteImages } from '../../lib/content/site-images';
import CalendlyPopupButton from './CalendlyPopupButton';
import PhotoCtaBand from './PhotoCtaBand';

export default function NeighborhoodsCTA() {
  return (
    <PhotoCtaBand
      image={siteImages.villageTour}
      heading="Tour Aliante neighborhoods with a 89084 realtor"
    >
      <p className="text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed">
        Compare gated, golf, open-access, and Sun City Aliante 55+ villages on live MLS.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <CalendlyPopupButton
          event="showing"
          className="inline-block py-4 px-10 rounded-lg font-semibold text-lg text-white bg-[#ed8936] transition-all transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none"
        >
          Schedule a Neighborhood Tour
        </CalendlyPopupButton>
        <a
          href="/homes-for-sale"
          className="inline-block py-4 px-10 rounded-lg font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-[#0A2540] transition-colors focus:ring-4 focus:ring-white/30 focus:outline-none"
        >
          View Available Homes
        </a>
      </div>
    </PhotoCtaBand>
  );
}
