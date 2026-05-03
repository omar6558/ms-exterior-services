import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  breadcrumb: string;
}

export default function ServiceHero({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  breadcrumb,
}: ServiceHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/90 via-[#1B2A4A]/50 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-gray-300 text-sm mb-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight size={14} />
          <span className="text-white">{breadcrumb}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl">
          {title}
        </h1>
        <p className="mt-3 text-gray-200 text-lg max-w-xl">{subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#quote"
            className="bg-[#38BDF8] text-[#1B2A4A] font-bold px-6 py-3 rounded-lg hover:bg-[#0EA5E9] transition-colors shadow-lg"
          >
            Get Free Estimate
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Phone size={16} />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
