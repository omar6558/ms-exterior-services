import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyUsSection from '@/components/home/WhyUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ServiceAreaSection from '@/components/home/ServiceAreaSection';
import FinalCTA from '@/components/home/FinalCTA';
import TrustBadges from '@/components/shared/TrustBadges';
import QuoteForm from '@/components/shared/QuoteForm';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Pressure Washing & Exterior Cleaning Knoxville TN | MS Exterior Services',
  description:
    'Professional pressure washing, soft washing & window cleaning in Knoxville, TN. Free estimates. Call (865) 320-8891 today.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <ServicesGrid />
      <BeforeAfterSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ServiceAreaSection />

      {/* Quote Form Section */}
      <section id="quote" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionHeading
                label="Get Started"
                title="Request Your Free Estimate"
                subtitle="Fill out the form and we'll get back to you within 2 hours with a no-obligation quote. Fast, easy, free."
              />
              <div className="mt-8 space-y-4">
                {[
                  'We typically respond within 2 hours',
                  'Same-week availability in most areas',
                  'No pushy sales — just honest pricing',
                  'Professional quality on every job',
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                    </div>
                    <span className="text-gray-700">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
