import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

const results = [
  {
    label: 'Pressure Washing',
    src: '/images/before-after-pressure.jpeg',
    alt: 'Before and after pressure washing a driveway',
  },
  {
    label: 'Soft Washing',
    src: '/images/before-after-softwash.png',
    alt: 'Before and after soft washing a house exterior',
  },
  {
    label: 'Window Cleaning',
    src: '/images/before-after-windows.jpeg',
    alt: 'Before and after window cleaning',
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Real Results"
          title="See the MS Exterior Difference"
          subtitle="These are real jobs from real customers. The proof is in the pictures."
          center
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map(({ label, src, alt }) => (
            <div
              key={label}
              className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 group"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="bg-[#1B2A4A] px-5 py-3 flex items-center justify-between">
                <span className="text-white font-bold text-sm uppercase tracking-widest">
                  {label}
                </span>
                <span className="text-[#38BDF8] text-xs font-semibold">Before &amp; After</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
