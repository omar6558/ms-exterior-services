import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-tight mb-4">
              <span className="text-xl font-extrabold text-white">MS Exterior</span>
              <span className="text-xs font-medium text-[#38BDF8] uppercase tracking-widest">
                Services · Knoxville, TN
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional exterior cleaning services for homeowners across East Tennessee. Licensed,
              insured, and satisfaction guaranteed.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-gray-400 hover:text-[#38BDF8] transition-colors text-sm"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#38BDF8] transition-colors text-sm"
                >
                  <Phone size={14} />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#38BDF8] transition-colors text-sm"
                >
                  <Mail size={14} />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} />
                {BUSINESS.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-[#38BDF8] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#38BDF8] transition-colors">Contact</Link>
            <Link href="/#quote" className="hover:text-[#38BDF8] transition-colors">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
