'use client';

import {
  type ConstructionProcessStep,
  constructionProcess,
} from '../../lib/content/construction-process';
import { siteImages } from '../../lib/content/site-images';
import CardPhoto from './CardPhoto';
import HeadingPhoto from './HeadingPhoto';

function ProcessStep({ number, title, description, details, image }: ConstructionProcessStep) {
  return (
    <div
      className="bg-white rounded-xl p-8 shadow-lg border-l-4"
      style={{ borderLeftColor: '#2c5aa0' }}
    >
      <CardPhoto image={image} heightClass="h-40" />
      <div className="flex items-center gap-4 mb-4">
        <div
          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
          style={{ backgroundColor: '#2c5aa0' }}
        >
          {number}
        </div>
        <h3 className="text-2xl font-bold" style={{ color: '#1a365d' }}>
          {title}
        </h3>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="flex-shrink-0 text-green-500 font-bold">✓</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ConstructionProcess() {
  const { heading, subheading, steps } = constructionProcess;

  return (
    <section
      className="py-16 px-4"
      style={{ background: 'linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{heading}</h2>
          <p className="text-xl text-white/90 mb-8">{subheading}</p>
          <div className="max-w-4xl mx-auto text-left">
            <HeadingPhoto
              image={siteImages.constructionProcess}
              caption="Framing through punch list on a North Las Vegas desert lot near Aliante"
            />
          </div>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
