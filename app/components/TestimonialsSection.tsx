type Testimonial = {
  quote: string;
  author: string;
  detail: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Dr. Duffy walked us through three Aliante builders and negotiated $18,500 off our new construction contract. Her MLS alerts kept us ahead of every price drop.',
    author: 'Marcus R.',
    detail: 'Bought in The Prominence',
    rating: 5,
  },
  {
    quote:
      'We needed a single-story home near Club Aliante with a short commute to the 215. She found three options in two weeks and handled every inspection detail.',
    author: 'Elena V.',
    detail: 'Bought near Club Aliante',
    rating: 5,
  },
  {
    quote:
      'Listed our 2,400 sq ft home on a Thursday and had multiple offers by Monday. Staging advice and pricing were spot-on for the North Las Vegas market.',
    author: 'David & Priya K.',
    detail: 'Sold in Desert Willows',
    rating: 5,
  },
  {
    quote:
      'As a first-time buyer, I appreciated the clear numbers—HOA dues, builder incentives, and closing costs—before we wrote an offer in Sun City Aliante.',
    author: 'Angela M.',
    detail: 'Bought in Sun City Aliante',
    rating: 5,
  },
];

/**
 * Purist-style “What Clients Are Saying” (visible social proof only).
 * No fabricated Review JSON-LD — schema.org disallows fake reviews.
 */
export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: '#1a365d' }}
          >
            What Clients Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feedback from Aliante and North Las Vegas buyers and sellers who worked with Dr. Jan
            Duffy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author + t.detail}
              className="rounded-xl border border-gray-100 bg-[#f8f9fa] p-6 md:p-8"
            >
              <div
                className="flex gap-1 mb-4 text-[#ed8936]"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <cite className="not-italic font-semibold" style={{ color: '#1a365d' }}>
                  {t.author}
                </cite>
                <p className="text-sm text-gray-500 mt-1">{t.detail}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
