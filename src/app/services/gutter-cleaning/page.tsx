import type { Metadata } from 'next';
import ServiceHero from '@/components/shared/ServiceHero';
import TrustBadges from '@/components/shared/TrustBadges';
import QuoteForm from '@/components/shared/QuoteForm';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Knoxville TN — Clog Removal & Flush',
  description:
    'Professional gutter cleaning in Knoxville. Prevents water damage. Fast, affordable, fully insured. Free estimates. Call (865) 320-8891.',
};

const benefits = [
  'Complete debris removal (leaves, twigs, buildup)',
  'Downspout flush and flow test',
  'Prevents foundation and basement flooding',
  'Protects fascia and roofline from rot',
  'Extends the life of your gutters by years',
  'Before-and-after photo documentation',
];

const steps = [
  { step: '1. Inspection', desc: 'We inspect gutters for damage, sags, and clogs from ground and ladder.' },
  { step: '2. Debris Removal', desc: 'We scoop and bag all debris by hand — no blowing it into your yard.' },
  { step: '3. Downspout Flush', desc: 'We flush every downspout and confirm proper water flow.' },
  { step: '4. Report', desc: 'We let you know if we spot any damage that needs attention.' },
];

export default function GutterCleaningPage() {
  return (
    <>
      {/* SWAP: replace with your best gutter cleaning job photo */}
      <ServiceHero
        title="Professional Gutter Cleaning in Knoxville, TN"
        subtitle="Clogged gutters cause serious damage. We clear them fast so your home stays protected year-round."
        imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85"
        imageAlt="Gutter cleaning service on residential home in Knoxville Tennessee"
        breadcrumb="Gutter Cleaning"
      />
      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">The Service</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1B2A4A]">Why Gutter Cleaning Matters</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Blocked gutters are one of the most common causes of water damage in homes. When
                water can&apos;t flow away from your roofline, it backs up and can rot fascia boards,
                damage your foundation, flood basements, and even cause leaks inside your home.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We recommend cleaning gutters at least twice a year — once in spring and once after
                the fall leaves drop. In East Tennessee, where trees are dense and leaves heavy,
                staying on top of this is critical.
              </p>
              <div className="mt-8">
                <p className="font-semibold text-[#1B2A4A] mb-4">What&apos;s Included:</p>
                <div className="space-y-2">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#38BDF8] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">Pricing</span>
              <h3 className="mt-2 text-2xl font-bold text-[#1B2A4A]">Starting from $99</h3>
              <p className="mt-2 text-gray-600">
                Price based on linear footage and home stories. Free estimate with every job.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Single-story home</span>
                  <span className="font-semibold text-[#1B2A4A]">From $99</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Two-story home</span>
                  <span className="font-semibold text-[#1B2A4A]">From $149</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Downspout repairs</span>
                  <span className="font-semibold text-[#1B2A4A]">Quoted separately</span>
                </div>
              </div>
              <a
                href="tel:+18653208891"
                className="mt-8 block w-full bg-[#38BDF8] text-[#1B2A4A] font-bold text-center py-4 rounded-xl hover:bg-[#0EA5E9] transition-colors"
              >
                Call for a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">Our Process</span>
            <h2 className="mt-2 text-3xl font-bold text-[#1B2A4A]">How We Clean Your Gutters</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, desc }) => (
              <div key={step} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <p className="text-[#38BDF8] font-bold text-sm uppercase tracking-widest">{step}</p>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1B2A4A]">Get a Free Gutter Cleaning Quote</h2>
            <p className="mt-2 text-gray-600">Takes 30 seconds. We respond within 2 hours.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <QuoteForm preselectedService="Gutter Cleaning" />
          </div>
        </div>
      </section>
    </>
  );
}
