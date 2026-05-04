import type { Metadata } from 'next';
import ServiceHero from '@/components/shared/ServiceHero';
import TrustBadges from '@/components/shared/TrustBadges';
import QuoteForm from '@/components/shared/QuoteForm';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Window Cleaning Knoxville TN, Streak-Free Results',
  description:
    'Residential exterior window cleaning in Knoxville TN. Cleaner, brighter glass with free estimates. Call (865) 320-8891.',
};

const benefits = [
  'Exterior window cleaning for residential homes',
  'Water-fed pole cleaning for safer ground-level work',
  'Purified water helps reduce spotting and streaking',
  'Removes pollen, dust, dirt, and exterior buildup',
  'Safer for frames, seals, landscaping, and nearby surfaces',
  'Free estimate before any work begins',
];

const steps = [
  { step: '1. Exterior Assessment', desc: 'We review the window layout, height, access, and buildup.' },
  { step: '2. Setup & Protect', desc: 'We set up the pole system and work carefully around landscaping and siding.' },
  { step: '3. Water-Fed Pole Clean', desc: 'We clean exterior glass from the ground using a long pole and brush system.' },
  { step: '4. Final Check', desc: 'We inspect the exterior glass and make sure the work looks clean.' },
];

export default function WindowCleaningPage() {
  return (
    <>
      <ServiceHero
        title="Professional Window Cleaning in Knoxville, TN"
        subtitle="Exterior window cleaning that helps your home look brighter, cleaner, and better cared for."
        imageUrl="/images/service-window-cleaning.png"
        imageAlt="Professional window cleaning service in Knoxville Tennessee"
        breadcrumb="Window Cleaning"
      />
      <TrustBadges />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">The Service</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1B2A4A]">
                Why Professional Window Cleaning?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Dust, pollen, dirt, and exterior buildup collect on glass over time and make the
                whole home look dull. Our exterior window cleaning service is built to brighten the
                glass from the outside using a water-fed pole system.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We work from the ground whenever possible with a long pole and brush, then use
                purified water to rinse the glass clean. It is a practical, safer way to handle
                exterior windows without dragging equipment through your home.
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
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">Free Estimate</span>
              <h3 className="mt-2 text-2xl font-bold text-[#1B2A4A]">Every Home Gets a Custom Quote</h3>
              <p className="mt-2 text-gray-600">
                Window cleaning prices depend on the home, window layout, access, height, buildup,
                and how much exterior glass needs cleaning. We do not use a one-size-fits-all price
                or a window limit.
              </p>
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <span>Tell us about the property and what exterior windows you want cleaned.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <span>We review access, height, and condition before giving a clear estimate.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <span>You approve the quote before we schedule or start the job.</span>
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
            <h2 className="mt-2 text-3xl font-bold text-[#1B2A4A]">How We Clean Your Windows</h2>
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
            <h2 className="text-3xl font-bold text-[#1B2A4A]">Get a Free Window Cleaning Quote</h2>
            <p className="mt-2 text-gray-600">Takes 30 seconds. We respond within 2 hours.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <QuoteForm preselectedService="Window Cleaning" />
          </div>
        </div>
      </section>
    </>
  );
}
