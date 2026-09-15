'use client';

import { siteImages } from '../../lib/content/site-images';
import { siteConfig } from '../../lib/site-config';
import CalendlyPopupButton from './CalendlyPopupButton';
import PhotoCtaBand from './PhotoCtaBand';

export default function NewConstructionCTA() {
  return (
    <PhotoCtaBand
      image={siteImages.newConstruction}
      heading="Hire a new-construction buyer’s agent in Aliante 89084"
    >
      <p className="text-xl sm:text-2xl text-white/95 mb-10 leading-relaxed">
        Independent representation on Lennar, Del Webb, and nearby Tule Springs builders.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-block py-4 px-8 rounded-lg font-semibold text-lg text-white bg-[#ed8936] hover:bg-[#dd6b20] transition-colors focus:ring-4 focus:ring-white/30 focus:outline-none"
        >
          Call {siteConfig.phone}
        </a>
        <CalendlyPopupButton
          event="appointment"
          className="inline-block py-4 px-8 rounded-lg font-semibold text-lg text-white bg-transparent border-2 border-white transition-all hover:bg-white hover:text-[#0A2540] focus:ring-4 focus:ring-white/30 focus:outline-none"
        >
          Schedule Builder Tours
        </CalendlyPopupButton>
        <a
          href="/builders/incentives"
          className="inline-block py-4 px-8 rounded-lg font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-[#0A2540] transition-colors focus:ring-4 focus:ring-white/30 focus:outline-none"
        >
          View Current Incentives
        </a>
      </div>
      <p className="text-white/80 text-sm sm:text-base">
        Buyer representation is typically at no extra cost to you on participating builder sales.
        Confirm the fee in writing before you tour.
      </p>
    </PhotoCtaBand>
  );
}
