import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Phone } from 'lucide-react';
import TrustBadges from '@/components/shared/TrustBadges';
import ServiceAreaSection from '@/components/home/ServiceAreaSection';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About MS Exterior Services | Knoxville Exterior Cleaning',
  description:
    'Learn about MS Exterior Services, a local Knoxville exterior cleaning company focused on pressure washing, soft washing, and window cleaning.',
};

const values = [
  {
    title: 'Quality',
    desc: 'We don\'t cut corners. Every job gets the full treatment, no rushing, no shortcuts, no excuses.',
  },
  {
    title: 'Integrity',
    desc: 'The price we quote is the price you pay. We show up when we say, and we do what we promise.',
  },
  {
    title: 'Community',
    desc: 'We\'re local. We live here, work here, and care about the neighborhoods we serve across East Tennessee.',
  },
];

const aboutCards = [
  {
    title: 'Who We Are',
    desc: 'MS Exterior Services is a local Knoxville exterior cleaning company focused on dependable work, clear communication, and results homeowners can see right away.',
  },
  {
    title: 'What We Do',
    desc: 'We clean driveways, patios, sidewalks, siding, trim, and windows using the right method for each surface, from pressure washing to soft washing and water-fed pole window cleaning.',
  },
  {
    title: 'What We Are Building',
    desc: 'Our goal is to become the exterior cleaning team Knoxville homeowners call first, because the work is consistent, the pricing is straightforward, and the process is easy.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#1B2A4A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
            Our Story
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            About MS Exterior Services
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            A local Knoxville business built on hard work, honesty, and a commitment to making
            your home look its absolute best.
          </p>
        </div>
      </div>

      <TrustBadges />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
                About Us
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1B2A4A]">
                Helping Knoxville Homes Look Clean, Bright, and Cared For
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                MS Exterior Services was built for homeowners who want their property cleaned the
                right way without the runaround. We focus on exterior cleaning that improves curb
                appeal, protects surfaces, and makes the whole home feel fresher.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Every job starts with looking at the surface, choosing the right cleaning method,
                and explaining what we recommend before we begin. Some areas need controlled
                pressure, some need a gentler soft wash, and windows need tools that leave the glass
                clear without streaks.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We are trying to build the kind of local service people feel comfortable calling
                again, honest scheduling, clean work, fair quotes, and results that make the outside
                of the home look taken care of.
              </p>

              <div className="mt-8 space-y-2">
                {[
                  'Locally owned and operated in Knoxville, TN',
                  'Serving 100+ happy homeowners and counting',
                  'Satisfaction guarantee on every job',
                  'Same-week scheduling in most cases',
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#38BDF8] flex-shrink-0" />
                    <span className="text-gray-700">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#quote"
                  className="bg-[#38BDF8] text-[#1B2A4A] font-bold px-6 py-3 rounded-xl hover:bg-[#0EA5E9] transition-colors"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2 bg-[#1B2A4A] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#243561] transition-colors"
                >
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {aboutCards.map(({ title, desc }) => (
                <div key={title} className="border border-gray-200 bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#1B2A4A]">{title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1B2A4A]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1B2A4A] rounded-xl flex items-center justify-center mb-5">
                  <CheckCircle size={22} className="text-[#38BDF8]" />
                </div>
                <h3 className="text-xl font-bold text-[#1B2A4A]">{title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaSection />
    </>
  );
}
