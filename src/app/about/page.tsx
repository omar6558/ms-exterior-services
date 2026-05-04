import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Phone } from 'lucide-react';
import TrustBadges from '@/components/shared/TrustBadges';
import ServiceAreaSection from '@/components/home/ServiceAreaSection';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About MS Exterior Services | Knoxville Exterior Cleaning',
  description:
    'Meet Mo and the MS Exterior Services team. A local Knoxville business built on hard work, reliability, and exceptional results. Learn our story.',
};

const values = [
  {
    title: 'Quality',
    desc: 'We don\'t cut corners. Every job gets the full treatment — no rushing, no shortcuts, no excuses.',
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
                Meet {BUSINESS.ownerName}
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1B2A4A]">
                Built on Hard Work and a Simple Promise
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Hi, I&apos;m {BUSINESS.ownerName} — the owner of MS Exterior Services. I started this
                business because I saw a gap in the market: homeowners in Knoxville needed a
                reliable, professional exterior cleaning service they could actually trust.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Too many companies show up late, do a rushed job, and disappear. I built MS Exterior
                around doing the opposite. Every home gets the same attention I&apos;d give my own —
                because I know your home is your biggest investment.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We back every job with a satisfaction guarantee and we&apos;re always transparent
                about pricing. No surprises. No pressure. Just results you can be proud of.
              </p>

              <div className="mt-8 space-y-2">
                {[
                  'Locally owned and operated in Knoxville, TN',
                  'Serving 500+ happy homeowners and counting',
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

            {/* Owner Photo — SWAP: replace with your actual photo */}
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=85"
                  alt={`${BUSINESS.ownerName}, owner of MS Exterior Services`}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#38BDF8] rounded-2xl px-6 py-4 shadow-xl">
                <p className="text-[#1B2A4A] font-extrabold text-2xl">500+</p>
                <p className="text-[#1B2A4A] font-semibold text-sm">Happy Customers</p>
              </div>
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
