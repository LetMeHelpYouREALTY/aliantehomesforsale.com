import Link from 'next/link';
import { alianteCommunityMap } from '../../../lib/amenities/community-map-config';
import { siteImages } from '../../../lib/content/site-images';
import HeadingPhoto from '../HeadingPhoto';
import CommunityAmenityMap from './CommunityAmenityMap';

type AmenityMapSectionProps = {
  id?: string;
  heading?: string;
  subheading?: string;
  variant?: 'section' | 'compact';
  showPhoto?: boolean;
};

export default function AmenityMapSection({
  id = 'life-near-aliante',
  heading = "Life Near Aliante — What's Nearby",
  subheading = `Interactive map of dining, parks, golf, healthcare, and everyday services around ${alianteCommunityMap.communityName}, North Las Vegas ${alianteCommunityMap.zip}. Map center: ${alianteCommunityMap.center.label}.`,
  variant = 'section',
  showPhoto = true,
}: AmenityMapSectionProps) {
  const isCompact = variant === 'compact';

  return (
    <section
      id={id}
      className="py-16 px-4"
      style={{ backgroundColor: '#f8f9fa' }}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center ${isCompact ? 'mb-8' : 'mb-12'}`}>
          <h2
            id={`${id}-heading`}
            className="speakable text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            {heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">{subheading}</p>
          {showPhoto && !isCompact && (
            <div className="max-w-4xl mx-auto text-left mb-8">
              <HeadingPhoto
                image={siteImages.nearbyAliante}
                caption="Parks, golf, and recreation near Aliante in ZIP 89084"
              />
            </div>
          )}
        </div>

        <CommunityAmenityMap variant={isCompact ? 'section' : 'section'} showAmenitiesPageLink />

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/amenities"
            className="inline-flex justify-center px-6 py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: '#2c5aa0' }}
          >
            Full nearby amenities guide
          </Link>
          <Link
            href="/contact"
            className="inline-flex justify-center px-6 py-3 rounded-lg font-semibold border-2"
            style={{ borderColor: '#16B286', color: '#16B286' }}
          >
            Tour homes with Dr. Jan Duffy
          </Link>
        </div>
      </div>
    </section>
  );
}
