'use client';

import { siteImages } from '../../lib/content/site-images';
import { siteConfig } from '../../lib/site-config';
import CalendlyPopupButton from './CalendlyPopupButton';
import PhotoCtaBand from './PhotoCtaBand';

export default function AboutCTA() {
  return (
    <PhotoCtaBand
      image={siteImages.officeNap}
      heading="Work with your Aliante realtor in North Las Vegas 89084"
    >
      <p className="text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed">
        Start your Aliante search from 2590 Nature Park Drive, Suite 275.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <CalendlyPopupButton
          event="consultation"
          className="inline-block py-4 px-10 rounded-lg font-semibold text-lg text-white bg-[#ed8936] transition-all transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none"
        >
          Schedule with Dr. Jan Duffy
        </CalendlyPopupButton>
        <a
          href="/homes-for-sale"
          className="inline-block py-4 px-10 rounded-lg font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-[#0A2540] transition-colors focus:ring-4 focus:ring-white/30 focus:outline-none"
        >
          Browse Homes
        </a>
      </div>
      <p className="mt-10 text-white/90 text-lg mb-3">Or call us directly:</p>
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="text-2xl sm:text-3xl font-bold text-white hover:underline"
      >
        {siteConfig.phone}
      </a>
    </PhotoCtaBand>
  );
}
