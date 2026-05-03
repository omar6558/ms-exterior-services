import type { Metadata } from 'next';
import ServiceHero from '@/components/shared/ServiceHero';
import TrustBadges from '@/components/shared/TrustBadges';
import QuoteForm from '@/components/shared/QuoteForm';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Window Cleaning Knoxville TN — Streak-Free Results',
  description:
    'Residential window cleaning in Knoxville TN. Interior & exterior. Spotless results, insured technicians. Free estimates. Call (865) 320-8891.',
};

const benefits = [
  'Streak-free, crystal-clear results — guaranteed',
  'Interior and exterior window cleaning',
  'Screen cleaning and reinstallation included',
  'Sill and track wiped clean',
  'Safe for all window types and frames',
  'No drips on walls or floors indoors',
];

const steps = [
  { step: '1. Window Count', desc: 'We count and assess every window including size and accessibility.' },
  { step: '2. Screen Removal', desc: 'Screens are carefully removed, cleaned, and set aside.' },
  { step: '3. Clean & Squeegee', desc: 'We clean with professional solution and squeegee to streak-free perfection.' },
  { step: '4. Detail & Replace', desc: 'Sills wiped, screens replaced, job inspected.' },
];

export default function WindowCleaningPage() {
  return (
    <>
      {/* SWAP: replace with your best window cleaning job photo */}
      <ServiceHero
        title="Professional Window Cleaning in Knoxville, TN"
        subtitle="Streak-free, spotless windows make your home shine inside and out. We clean them right, every time."
        imageUrl="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1400&q=85"
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
                Hard water spots, dust, pollen, and grime build up on windows over time — and DIY
                cleaning often leaves streaks that look worse than before. Our professional-grade
                squeegees and solutions leave every pane crystal clear.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We handle interior and exterior cleaning, including screens, sills, and tracks.
                You&apos;ll notice the difference in natural light immediately.
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
              <h3 className="mt-2 text-2xl font-bold text-[#1B2A4A]">Starting from $149</h3>
              <p className="mt-2 text-gray-600">
                Priced per pane or by home size. Always quoted before starting.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Exterior only (up to 15 windows)</span>
                  <span className="font-semibold text-[#1B2A4A]">From $149</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Interior & Exterior</span>
                  <span className="font-semibold text-[#1B2A4A]">From $249</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Large homes / custom</span>
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
