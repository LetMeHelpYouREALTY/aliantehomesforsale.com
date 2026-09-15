import { neighborhoodGuides } from '../../lib/content/neighborhood-guides';
import { headingMatchedImage } from '../../lib/content/section-photos';
import { type SiteImage, siteImages } from '../../lib/content/site-images';
import HeadingPhoto from './HeadingPhoto';

type NeighborhoodDetailContentProps = {
  village: string;
};

const villageHeadingPhotos: Record<string, SiteImage> = {
  prominence: siteImages.prominence,
  'desert-willows': siteImages.desertWillows,
  paseos: siteImages.paseos,
  'club-aliante': siteImages.golfFairway,
  'tule-springs': siteImages.newConstruction,
  compare: siteImages.compare,
};

export default function NeighborhoodDetailContent({ village }: NeighborhoodDetailContentProps) {
  const guide = neighborhoodGuides[village];
  const headingPhoto = villageHeadingPhotos[village];
  if (!guide) return null;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          {guide.heading}
        </h2>
        {headingPhoto ? <HeadingPhoto image={headingPhoto} /> : null}

        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          {guide.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {guide.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
                {section.heading}
              </h3>
              <HeadingPhoto image={headingMatchedImage(section.heading)} />
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
