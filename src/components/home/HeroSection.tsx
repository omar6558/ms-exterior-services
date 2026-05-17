import Image from 'next/image';
import Link from 'next/link';
import { Phone, Clock } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image, SWAP: replace with your best job photo */}
      <Image
        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=85"
        alt="Clean home exterior in Knoxville Tennessee"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay, two layers for guaranteed readability */}
      <div className="absolute inset-0 bg-[#1B2A4A]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/90 via-[#1B2A4A]/70 to-[#1B2A4A]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">
          {/* Label */}
          <span className="inline-block bg-[#38BDF8] text-[#1B2A4A] text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 shadow-lg">
            Knoxville&apos;s Trusted Exterior Cleaners
          </span>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
          >
            Make Your Home{' '}
            <span className="text-[#38BDF8]">Look Brand New</span> Again
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 text-lg sm:text-xl text-white leading-relaxed font-medium"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}
          >
            Professional pressure washing, soft washing, and window cleaning for Knoxville
            homeowners. Fast scheduling, guaranteed results, professional quality.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#quote"
              className="flex items-center justify-center gap-2 bg-[#38BDF8] text-[#1B2A4A] font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#0EA5E9] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get My Free Estimate
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur border-2 border-white/40 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/20 transition-all"
            >
              <Phone size={20} />
              Call {BUSINESS.phone}
            </a>
          </div>

          {/* Urgency */}
          <div
            className="mt-5 flex items-center gap-2 font-bold"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}
          >
            <Clock size={16} className="text-[#38BDF8] flex-shrink-0" />
            <span className="text-[#38BDF8] text-sm">
              Limited availability this week, book your spot now
            </span>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap gap-3">
            {['Free Estimates', '100+ Happy Homeowners', 'Same-Week Scheduling', 'Satisfaction Guaranteed'].map(
              (badge) => (
                <span
                  key={badge}
                  className="bg-white/25 backdrop-blur border border-white/50 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}
                >
                  ✓ {badge}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
