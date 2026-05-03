'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

// SWAP: replace these Unsplash URLs with your actual before/after job photos
const pairs = [
  {
    label: 'Driveway Pressure Washing',
    before: {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Dirty concrete driveway before pressure washing',
    },
    after: {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      alt: 'Clean driveway after pressure washing',
    },
  },
  {
    label: 'House Soft Washing',
    before: {
      url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80',
      alt: 'Dirty house siding with algae before soft washing',
    },
    after: {
      url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      alt: 'Clean white home siding after soft washing',
    },
  },
  {
    label: 'Gutter Cleaning',
    before: {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      alt: 'Clogged gutters filled with debris before cleaning',
    },
    after: {
      url: 'https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=800&q=80',
      alt: 'Clean gutters after professional cleaning',
    },
  },
];

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Results That Speak"
          title="See the MS Exterior Difference"
          subtitle="Real results from real Knoxville homes. Swipe to see the transformation."
          center
        />

        {/* Tab Selector */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {pairs.map((pair, i) => (
            <button
              key={pair.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-[#1B2A4A] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {pair.label}
            </button>
          ))}
        </div>

        {/* Before / After Display */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl overflow-hidden shadow-2xl">
          {/* Before */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 bg-gray-900/80 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Before
            </div>
            <div className="relative h-72 md:h-96 w-full">
              <Image
                src={pairs[active].before.url}
                alt={pairs[active].before.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* After */}
          <div className="relative">
            <div className="absolute top-4 right-4 z-10 bg-[#38BDF8] text-[#1B2A4A] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              After
            </div>
            <div className="relative h-72 md:h-96 w-full">
              <Image
                src={pairs[active].after.url}
                alt={pairs[active].after.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <p className="text-center mt-4 text-sm text-gray-500">
          Results may vary based on surface condition. Free estimates always included.
        </p>
      </div>
    </section>
  );
}
