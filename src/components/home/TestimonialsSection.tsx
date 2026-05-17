import { Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { TESTIMONIALS } from '@/lib/constants';

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#1B2A4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What Homeowners Say"
          title="Real Reviews from Real Customers"
          subtitle="Don't take our word for it, here's what Knoxville homeowners have to say."
          center
          light
        />

        {/* Google badge */}
        <div className="flex justify-center mt-4 mb-10">
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full">
            <StarRow count={5} />
            <span className="text-white text-sm font-semibold">5.0 on Google</span>
          </div>
        </div>

        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <div
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-8 pb-4"
            style={{ scrollbarWidth: 'thin' }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors"
              >
                <StarRow count={t.rating} />
                <blockquote className="mt-4 text-gray-200 text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#38BDF8] text-xs">{t.location} · {t.date}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-white/50 text-xs sm:hidden">Swipe to see more →</p>
        </div>
      </div>
    </section>
  );
}
