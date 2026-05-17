import type { Metadata } from 'next';
import ServiceHero from '@/components/shared/ServiceHero';
import TrustBadges from '@/components/shared/TrustBadges';
import QuoteForm from '@/components/shared/QuoteForm';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Soft Washing Knoxville TN, Safe House & Siding Washing',
  description:
    'Low-pressure soft washing for siding, trim, and painted surfaces in Knoxville TN. Kills mold and algae at the source. Free estimates. Call (865) 320-8891.',
};

const benefits = [
  'Safe for vinyl, wood, stucco, and painted surfaces',
  'Kills mold, algae, and mildew at the root level',
  'Results last 4–6x longer than pressure washing alone',
  'Won\'t damage your siding, trim, or caulking',
  'Eco-friendly, biodegradable cleaning solutions',
  'Protects your home\'s paint and exterior finish',
];

const steps = [
  { step: '1. Surface Assessment', desc: 'We identify surface material and contamination type.' },
  { step: '2. Solution Mix', desc: 'We mix the right bio-safe cleaning solution for your surface.' },
  { step: '3. Low-Pressure Apply', desc: 'We apply solution and let chemistry do the heavy lifting.' },
  { step: '4. Rinse & Inspect', desc: 'We rinse clean and walk the property with you.' },
];

export default function SoftWashingPage() {
  return (
    <>
      <ServiceHero
        title="Soft Washing Services in Knoxville, TN"
        subtitle="Gentle on your home, tough on mold and algae. The safe way to clean siding, trim, and painted surfaces."
        imageUrl="/images/service-soft-washing.png"
        imageAlt="Soft washing house siding in Knoxville Tennessee"
        breadcrumb="Soft Washing"
      />
      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
                The Service
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1B2A4A]">
                What Is Soft Washing?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Soft washing uses low water pressure combined with specialized biodegradable cleaning
                solutions to safely remove mold, algae, mildew, dirt, and staining from surfaces
                that can&apos;t handle high-pressure water, like siding, trim, and painted wood.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Unlike pressure washing, soft washing kills the organic growth at the root, meaning
                results last significantly longer and there&apos;s zero risk of damage to your home.
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
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
                Free Estimate
              </span>
              <h3 className="mt-2 text-2xl font-bold text-[#1B2A4A]">Contact for a Free Quote</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Every home is different. Soft washing pricing depends on square footage,
                surface type, story count, and level of contamination. We provide a free,
                no-pressure estimate before any work begins, so you know exactly what to
                expect.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <span>Free on-site or remote estimate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <span>No hidden fees — the quote you get is the price you pay</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <span>Fast response, usually within 2 hours</span>
                </li>
              </ul>
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
            <h2 className="mt-2 text-3xl font-bold text-[#1B2A4A]">How Soft Washing Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1B2A4A]">Get a Free Soft Washing Quote</h2>
            <p className="mt-2 text-gray-600">Takes 30 seconds. We respond within 2 hours.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <QuoteForm preselectedService="Soft Washing" />
          </div>
        </div>
      </section>
    </>
  );
}
