'use client';

import { siteImages } from '../../lib/content/site-images';
import HeadingPhoto from './HeadingPhoto';

export default function AboutCommitment() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Our Commitment
          </h2>
          <HeadingPhoto
            image={siteImages.about}
            caption="Dr. Jan Duffy, Aliante realtor at 2590 Nature Park Drive, Suite 275"
          />
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-12 shadow-lg">
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-center mb-8">
            We believe in <strong style={{ color: '#2c5aa0' }}>transparency</strong>,{' '}
            <strong style={{ color: '#2c5aa0' }}>integrity</strong>, and{' '}
            <strong style={{ color: '#2c5aa0' }}>putting our clients first</strong>. Every decision
            we make is guided by what's best for you - whether that means negotiating harder for a
            better price, walking away from the wrong deal, or connecting you with trusted service
            providers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-3" aria-hidden="true">
                1
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                Transparency
              </h3>
              <p className="text-gray-600">Clear communication at every step</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-3" aria-hidden="true">
                2
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                Integrity
              </h3>
              <p className="text-gray-600">Honest advice you can trust</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-3" aria-hidden="true">
                3
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a365d' }}>
                Client-First
              </h3>
              <p className="text-gray-600">Your success is our success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
