import Link from 'next/link';
import Image from 'next/image';
import { getKcmFeedItems } from '../../lib/kcm-feed';

/** Blog section powered by Simplifying the Market (KCM) RSS feed. Images from files.keepingcurrentmatters.com — img-src must allow that host. */
export default async function LatestNewsSection() {
  const items = await getKcmFeedItems(3);
  if (items.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-[#f7f9fc]" aria-labelledby="latest-news-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="latest-news-heading" className="text-3xl font-bold text-center mb-4 text-[#0a2540]">
          Latest News
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Tips and trends for Aliante and North Las Vegas home buyers and sellers. Updated regularly
          from our partners at Simplifying the Market.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <article
              key={item.link}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              {item.image && (
                <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={220}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-52 object-cover"
                  />
                </Link>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-[#0a2540]">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:ring-2 focus:ring-offset-2 focus:ring-[#2c5aa0] rounded"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{item.description}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#2c5aa0]"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link
            href="https://www.simplifyingthemarket.com/?a=956758-ef2edda2f940e018328655620ea05f18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-6 rounded-lg font-semibold text-white transition-colors hover:opacity-90 bg-[#2c5aa0]"
          >
            View all posts
          </Link>
        </p>
      </div>
    </section>
  );
}
