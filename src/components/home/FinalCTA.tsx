import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#38BDF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-[#1B2A4A]/70 text-sm font-semibold uppercase tracking-widest mb-3">
          Ready to Get Started?
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2A4A] leading-tight">
          Ready for a Cleaner Home?
        </h2>
        <p className="mt-4 text-lg text-[#1B2A4A]/80 max-w-xl mx-auto">
          Join hundreds of Knoxville homeowners who trust MS Exterior Services. Get your free
          estimate today — no commitment required.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#quote"
            className="flex items-center justify-center gap-2 bg-[#1B2A4A] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#243561] transition-all shadow-xl hover:-translate-y-0.5"
          >
            Get Free Estimate <ArrowRight size={18} />
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 bg-white text-[#1B2A4A] font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            <Phone size={18} />
            Call {BUSINESS.phone}
          </a>
        </div>

        <p className="mt-6 text-[#1B2A4A]/60 text-sm">
          ✓ No spam &nbsp;·&nbsp; ✓ No pressure &nbsp;·&nbsp; ✓ Respond within 2 hours
        </p>
      </div>
    </section>
  );
}
