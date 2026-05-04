import Link from 'next/link';
import { Droplets, Wind, Sparkles, ArrowRight, type LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Wind,
  Sparkles,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Professional Exterior Cleaning Services"
          subtitle="Everything your home needs to look its absolute best — handled by a local team you can trust."
          center
        />

        {/* 3 service cards — clean single row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Droplets;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-7 border border-gray-200 hover:border-[#38BDF8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#F0F9FF] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#38BDF8]/20 transition-colors">
                  <Icon size={24} className="text-[#1B2A4A]" />
                </div>
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.shortDesc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#38BDF8] font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Full-width CTA below — no orphaned card */}
        <div className="mt-6 bg-[#1B2A4A] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-1">
              Not sure what you need?
            </p>
            <h3 className="text-xl font-bold text-white">
              Get a Free Assessment — We&apos;ll Walk Your Property
            </h3>
          </div>
          <Link
            href="/#quote"
            className="flex-shrink-0 bg-[#38BDF8] text-[#1B2A4A] font-bold px-8 py-3 rounded-xl hover:bg-[#0EA5E9] transition-colors whitespace-nowrap"
          >
            Request Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
