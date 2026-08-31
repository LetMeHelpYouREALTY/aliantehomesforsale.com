'use client';

import Link from 'next/link';

export default function SchoolsContent() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Aliante Schools: A Commitment to Educational Excellence
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              I name the campus that currently serves an Aliante address and confirm Clark County
              School District attendance boundaries before you offer — boundaries change. Campuses
              serving ZIP 89084 include Leavitt Elementary, Kit Carson Elementary, Homer Elementary,
              Brinley Middle School, and either Centennial High School or Legacy High School,
              depending on the street. View{' '}
              <Link
                href="/neighborhoods"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Aliante neighborhoods
              </Link>{' '}
              to see school ratings for each area, or browse{' '}
              <Link
                href="/homes-for-sale"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                homes for sale
              </Link>{' '}
              near a named campus.
            </p>

            <p className="leading-relaxed">
              As a local real estate specialist, I match a street address to the current CCSD
              attendance map. Boundaries shift with new school openings and redistricting, so
              listing remarks are not enough. I will name the campus for any property you tour and
              tell you how to confirm it with the district before you write.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Elementary Schools Serving Aliante
            </h3>

            <p className="leading-relaxed">
              Elementary campuses that currently serve parts of Aliante include Leavitt Elementary,
              Kit Carson Elementary, and Homer Elementary. Confirm which campus serves the lot you
              want — a village name is not an attendance guarantee. Ask the school for current
              programs (STEM labs, literacy support, before- and after-school care) rather than
              relying on a star rating in a listing.
            </p>

            <p className="leading-relaxed">
              Kit Carson Elementary has earned recognition for its commitment to literacy and
              reading achievement, with programs designed to ensure every student reads at or above
              grade level by third grade – a critical milestone that research shows predicts
              long-term academic success. The school offers both gifted and talented programs for
              advanced learners and intervention programs for students needing additional support,
              ensuring every child receives instruction matched to their ability level. Before and
              after school care programs provide working parents with convenient childcare options
              while offering homework help and enrichment activities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Middle and High School Options
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Aliante students typically attend Brinley Middle School, which has earned strong
              ratings for its college preparatory curriculum and comprehensive extracurricular
              offerings. The school provides honors courses in core subjects, allowing
              high-achieving students to access accelerated curriculum that prepares them for
              Advanced Placement courses in high school. Athletics programs include football,
              basketball, volleyball, track and field, and soccer, while fine arts offerings
              encompass band, orchestra, choir, drama, and visual arts. The school's focus on
              character education and anti-bullying initiatives creates a positive school culture
              that parents consistently praise.
            </p>

            <p className="leading-relaxed">
              For high school, most Aliante students attend Centennial High School or Legacy High
              School, both of which offer comprehensive college preparatory programs with numerous
              Advanced Placement courses, strong athletics programs, and extensive extracurricular
              opportunities. Centennial High School, in particular, has earned national recognition
              for its academic programs and consistently sends graduates to top universities
              throughout the country. The school offers over 20 AP courses, career and technical
              education programs in fields like engineering and healthcare, and partnerships with
              local colleges allowing students to earn college credits while still in high school.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Private and Charter School Options
            </h3>

            <p className="leading-relaxed">
              Beyond traditional public schools, Aliante families have access to several excellent
              private and charter school options. Faith-based schools including Catholic, Christian,
              and non-denominational options provide smaller class sizes and values-based education
              for families seeking religious integration with academics. Several high-performing
              charter schools operate in the area, offering alternative educational approaches like
              Montessori, STEM-focused curriculum, or classical education models that appeal to
              families seeking different pedagogical approaches than traditional public schools
              provide.
            </p>

            <p className="leading-relaxed">
              The Nevada Learning Academy and other online public charter schools offer full-time
              virtual education options for families who prefer home-based learning with certified
              teacher support. These programs became increasingly popular during the pandemic and
              continue to serve families seeking flexibility in their children's education. Whatever
              your educational priorities and philosophy, Aliante's location provides access to
              virtually every type of schooling option available in the Las Vegas valley, ensuring
              you can find the perfect fit for your children's learning needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            The School-Home Value Connection
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              School quality directly impacts property values, with homes in highly-rated school
              attendance zones commanding 5-15% premiums over similar properties in lower-rated
              zones. When reviewing homes in Aliante, understanding exact school boundaries and how
              they might change over time is essential for protecting your investment. New schools
              opening in the area sometimes trigger boundary changes that can affect which schools
              your children attend, making it important to verify current boundaries with the school
              district rather than relying solely on real estate listing information.
            </p>

            <p className="leading-relaxed">
              As your buyer’s agent, I will research the current CCSD boundary for any property you
              consider and can connect you with the campus office for tours and program questions.
              Pair that with square footage, commute time to the 215, and HOA rules — not a
              neighborhood “rating.” Confirm the map with Clark County School District before you
              offer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
