'use client';

interface AmenityCategoryProps {
  icon: string;
  title: string;
  amenities: string[];
}

function AmenityCategory({ icon, title, amenities }: AmenityCategoryProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#1a365d' }}>
        <span className="text-3xl" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h3>
      <ul className="space-y-2">
        {amenities.map((amenity) => (
          <li key={amenity} className="flex items-start gap-2 text-gray-700">
            <span className="flex-shrink-0 text-green-500 font-bold" aria-hidden="true">
              ✓
            </span>
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CommunityAmenities() {
  const categories: AmenityCategoryProps[] = [
    {
      icon: '🏌️',
      title: 'Golf & Recreation',
      amenities: [
        'Aliante Golf Club (18-hole public course)',
        'Pro shop — confirm lessons and hours with the club',
        'Tennis and pickleball courts (confirm which village)',
        'Community swimming pools',
        'Fitness rooms at village recreation campuses',
      ],
    },
    {
      icon: '🛍️',
      title: 'Shopping & Dining',
      amenities: [
        'Aliante Casino + Hotel',
        'Retail along Aliante Parkway',
        'Restaurants and cafes nearby',
        'Everyday grocery and services',
        'Entertainment venues',
      ],
    },
    {
      icon: '🎓',
      title: 'Named campuses nearby',
      amenities: [
        'Vincent L. Triggs Elementary (89084)',
        'Theron H. and Naomi D. Goynes Elementary (89084)',
        'Brian & Teri Cram Middle School (89084)',
        'Legacy High School (89084)',
        'Confirm CCSD attendance before you offer',
      ],
    },
    {
      icon: '🚗',
      title: 'Transportation & Access',
      amenities: [
        'I-215 Beltway interchange at Aliante Parkway',
        'RTC bus routes serving North Las Vegas',
        'Bike lanes and walking trails',
        'Harry Reid International Airport via I-215',
        'Downtown Las Vegas via I-15 / US-95',
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1a365d' }}>
            Amenities in the Aliante master plan, ZIP 89084
          </h2>
          <p className="text-xl text-gray-600">
            Golf, parks, named CCSD campuses, and I-215 access inside the Aliante master plan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <AmenityCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
