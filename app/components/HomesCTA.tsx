'use client';

import { siteImages } from '../../lib/content/site-images';
import { siteConfig } from '../../lib/site-config';
import CalendlyPopupButton from './CalendlyPopupButton';
import PhotoCtaBand from './PhotoCtaBand';

export default function HomesCTA() {
  return (
    <PhotoCtaBand
      image={siteImages.homesForSale}
      heading="Tour Aliante homes for sale in North Las Vegas 89084"
    >
      <p className="text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed">
        Get expert guidance from local Aliante specialists
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <CalendlyPopupButton
          event="showing"
          className="inline-block py-4 px-10 rounded-lg font-semibold text-lg text-white bg-[#ed8936] transition-all transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none"
        >
          Schedule a private showing
        </CalendlyPopupButton>
        <a
          href="/market-report"
          className="inline-block py-4 px-10 rounded-lg font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-[#0A2540] transition-colors focus:ring-4 focus:ring-white/30 focus:outline-none"
        >
          Get Market Report
        </a>
      </div>
      <p className="text-white/90 text-lg mb-3">Or call us directly:</p>
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="text-2xl sm:text-3xl font-bold text-white hover:underline"
      >
        {siteConfig.phone}
      </a>
    </PhotoCtaBand>
  );
}
