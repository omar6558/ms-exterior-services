'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/lib/constants';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold text-[#1B2A4A] tracking-tight">
              MS Exterior
            </span>
            <span className="text-xs font-medium text-[#38BDF8] uppercase tracking-widest">
              Services · Knoxville, TN
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative flex h-20 items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#1B2A4A] transition-colors"
                onClick={() => setServicesOpen((open) => !open)}
                onFocus={() => setServicesOpen(true)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services <ChevronDown size={16} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F0F9FF] hover:text-[#1B2A4A] font-medium transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-700 font-medium hover:text-[#1B2A4A] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 font-medium hover:text-[#1B2A4A] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 text-[#1B2A4A] font-semibold hover:text-[#38BDF8] transition-colors"
            >
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
            <Link
              href="/#quote"
              className="bg-[#38BDF8] text-[#1B2A4A] font-bold px-5 py-2.5 rounded-lg hover:bg-[#0EA5E9] transition-colors shadow-md"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-[#1B2A4A]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Services</p>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="block py-2 text-gray-700 font-medium hover:text-[#1B2A4A]"
              onClick={() => setMobileOpen(false)}
            >
              {s.title}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-4 space-y-3">
            <Link
              href="/about"
              className="block py-2 text-gray-700 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="border-t border-gray-100 pt-4 space-y-3">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 bg-[#1B2A4A] text-white font-bold px-5 py-3 rounded-lg justify-center"
            >
              <Phone size={18} />
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/#quote"
              className="flex items-center justify-center bg-[#38BDF8] text-[#1B2A4A] font-bold px-5 py-3 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
