import Image from 'next/image';
import Link from 'next/link';
import type { UniquePageCopy } from '../../lib/content/unique-pages';

type UniqueArticleSectionProps = {
  copy: UniquePageCopy;
};

export default function UniqueArticleSection({ copy }: UniqueArticleSectionProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <figure className="mb-8 overflow-hidden rounded-xl">
          <Image
            src={copy.image.src}
            alt={copy.image.alt}
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            loading="lazy"
          />
        </figure>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
          {copy.heading}
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {copy.paragraphs.map((paragraph, index) => (
            <p key={`${copy.heading}-${index}`}>{paragraph}</p>
          ))}
        </div>
        <nav className="mt-8 flex flex-wrap gap-4" aria-label="Related Aliante pages">
          {copy.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-blue-700 font-semibold hover:underline"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
