import type { Metadata } from 'next';
import ServiceHero from '@/components/shared/ServiceHero';
import TrustBadges from '@/components/shared/TrustBadges';
import QuoteForm from '@/components/shared/QuoteForm';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pressure Washing Knoxville TN, Driveways, Patios & More',
  description:
    'Expert pressure washing in Knoxville, TN. Driveways, sidewalks, decks, and siding. Free estimates. Call (865) 320-8891.',
};

const benefits = [
  'Removes years of staining, oil, mold, and mildew',
  'Safe for concrete, brick, stone, and wood decks',
  'Dramatically improves curb appeal',
  'Increases the lifespan of your surfaces',
  'Professional-grade equipment, residential care',
  'No streaks, no damage, guaranteed results',
];

const steps = [
  { step: '1. Free Inspection', desc: 'We walk the property and identify problem areas.' },
  { step: '2. Surface Prep', desc: 'We protect surrounding landscaping and delicate areas.' },
  { step: '3. High-Pressure Clean', desc: 'We blast away dirt, stains, and buildup with professional equipment.' },
  { step: '4. Final Check', desc: 'We inspect the results and make sure you\'re 100% satisfied.' },
];

export default function PressureWashingPage() {
  return (
    <>
      <ServiceHero
        title="Professional Pressure Washing in Knoxville, TN"
        subtitle="Transform your driveway, patio, deck, or sidewalk from grimy to spotless. Fast results, guaranteed quality."
        imageUrl="/images/service-pressure-washing.png"
        imageAlt="Pressure washing concrete driveway in Knoxville Tennessee"
        breadcrumb="Pressure Washing"
      />
      <TrustBadges />

      {/* Service details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
                Surface Care
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1B2A4A]">
                Built for Concrete, Brick, Patios, and Walkways
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Driveways, sidewalks, patios, and other hard surfaces take a beating from dirt,
                algae, mildew, oil spots, and Tennessee weather. Our pressure washing service is
                designed to lift that buildup and bring back a cleaner, brighter surface without
                treating every material the same.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Before we start, we look at the surface type, staining, drainage, and nearby
                landscaping. Then we adjust the pressure, nozzle, and cleaning approach so the job
                is thorough, controlled, and appropriate for your property.
              </p>

              <div className="mt-8">
                <p className="font-semibold text-[#1B2A4A] mb-4">Where Pressure Washing Helps:</p>
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

            {/* Pricing callout */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
                Pricing
              </span>
              <h3 className="mt-2 text-2xl font-bold text-[#1B2A4A]">Starting from $149</h3>
              <p className="mt-2 text-gray-600">
                Final price depends on surface area, condition, and accessibility. We always
                provide a firm quote before starting.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Driveway (up to 500 sq ft)</span>
                  <span className="font-semibold text-[#1B2A4A]">From $149</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Patio or Deck</span>
                  <span className="font-semibold text-[#1B2A4A]">From $129</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Sidewalks & Walkways</span>
                  <span className="font-semibold text-[#1B2A4A]">From $79</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Full Property Package</span>
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

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
              Our Process
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#1B2A4A]">
              How We Get the Job Done Right
            </h2>
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

      {/* Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1B2A4A]">Get a Free Pressure Washing Quote</h2>
            <p className="mt-2 text-gray-600">
              Takes 30 seconds. We&apos;ll respond within 2 hours.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <QuoteForm preselectedService="Pressure Washing" />
          </div>
        </div>
      </section>
    </>
  );
}
