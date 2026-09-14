import { builderGuides } from '../../lib/content/builder-guides';

type BuilderDetailContentProps = {
  builder: string;
};

export default function BuilderDetailContent({ builder }: BuilderDetailContentProps) {
  const guide = builderGuides[builder];
  if (!guide) return null;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          {guide.heading}
        </h2>

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
