import type { Metadata } from 'next';
import ServiceHero from '@/components/shared/ServiceHero';
import TrustBadges from '@/components/shared/TrustBadges';
import QuoteForm from '@/components/shared/QuoteForm';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roof Cleaning Knoxville TN — Remove Black Streaks & Algae',
  description:
    'Safe roof cleaning in Knoxville. Remove black streaks, moss & algae without voiding your warranty. Free estimates. Call (865) 320-8891.',
};

const benefits = [
  'Removes black streaks (Gloeocapsa Magma algae)',
  'Kills moss and lichen at the root',
  'Low-pressure method — won\'t void your roof warranty',
  'Extends the lifespan of your shingles by years',
  'Improves energy efficiency (light-colored roofs reflect heat)',
  'Safe for all asphalt, tile, and metal roofs',
];

const steps = [
  { step: '1. Roof Assessment', desc: 'We inspect the roof type, pitch, and level of contamination.' },
  { step: '2. Protect Surroundings', desc: 'Landscaping and gutters are protected before we begin.' },
  { step: '3. Soft Wash Treatment', desc: 'We apply low-pressure bio-safe solution that kills algae and moss.' },
  { step: '4. Rinse & Confirm', desc: 'We rinse and confirm results before leaving your property.' },
];

export default function RoofCleaningPage() {
  return (
    <>
      {/* SWAP: replace with your best roof cleaning job photo */}
      <ServiceHero
        title="Roof Cleaning Services in Knoxville, TN"
        subtitle="Those black streaks are algae — and they're shortening the life of your roof. We remove them safely, without voiding your warranty."
        imageUrl="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=85"
        imageAlt="Roof cleaning service removing algae in Knoxville Tennessee"
        breadcrumb="Roof Cleaning"
      />
      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">The Service</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1B2A4A]">
                Why Your Roof Needs Professional Cleaning
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Those dark streaks on your roof aren&apos;t just ugly — they&apos;re a bacteria called
                Gloeocapsa Magma that eats away at your shingles over time. Left untreated, it can
                cut years off the life of your roof and void your manufacturer&apos;s warranty.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We use the ARMA (Asphalt Roofing Manufacturers Association) recommended soft wash
                method — low pressure and specialized bio-safe chemicals that kill the growth at
                the root without lifting granules or damaging shingles.
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
              <h3 className="mt-2 text-2xl font-bold text-[#1B2A4A]">Starting from $299</h3>
              <p className="mt-2 text-gray-600">
                Price based on roof size and pitch. Free estimate with every inquiry.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Small roof (up to 1,500 sq ft)</span>
                  <span className="font-semibold text-[#1B2A4A]">From $299</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Medium roof (1,500–2,500 sq ft)</span>
                  <span className="font-semibold text-[#1B2A4A]">From $399</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Large home / steep pitch</span>
                  <span className="font-semibold text-[#1B2A4A]">Custom Quote</span>
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
            <h2 className="mt-2 text-3xl font-bold text-[#1B2A4A]">How We Clean Your Roof</h2>
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
            <h2 className="text-3xl font-bold text-[#1B2A4A]">Get a Free Roof Cleaning Quote</h2>
            <p className="mt-2 text-gray-600">Takes 30 seconds. We respond within 2 hours.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <QuoteForm preselectedService="Roof Cleaning" />
          </div>
        </div>
      </section>
    </>
  );
}
