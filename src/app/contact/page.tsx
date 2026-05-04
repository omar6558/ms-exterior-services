import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import TrustBadges from '@/components/shared/TrustBadges';
import QuoteForm from '@/components/shared/QuoteForm';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Get a Free Quote | MS Exterior Services Knoxville TN',
  description:
    'Contact MS Exterior Services in Knoxville TN. Call (865) 320-8891 or fill out our quote form. Free estimates, fast response.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#1B2A4A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Get Your Free Estimate
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            Fill out the form or call us directly. We typically respond within 2 hours and can
            often schedule within the same week.
          </p>
        </div>
      </div>

      <TrustBadges />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B2A4A] mb-6">Request a Quote</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <QuoteForm />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B2A4A] mb-6">Contact Information</h2>

              <div className="space-y-5">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#38BDF8] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#1B2A4A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B2A4A] group-hover:text-[#38BDF8] transition-colors">
                      Call or Text
                    </p>
                    <p className="text-lg font-bold text-[#38BDF8]">{BUSINESS.phone}</p>
                    <p className="text-sm text-gray-500">Fastest way to reach us</p>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl hover:border-[#38BDF8] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#1B2A4A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B2A4A] group-hover:text-[#38BDF8] transition-colors">
                      Email Us
                    </p>
                    <p className="text-gray-700">{BUSINESS.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                  <div className="w-10 h-10 bg-[#1B2A4A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B2A4A]">Service Area</p>
                    <p className="text-gray-700">
                      {BUSINESS.serviceArea.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                  <div className="w-10 h-10 bg-[#1B2A4A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B2A4A]">Hours of Operation</p>
                    <p className="text-gray-700">Mon – Sat: 7:00 AM – 6:00 PM</p>
                    <p className="text-gray-500 text-sm">SWAP: update with your real hours</p>
                  </div>
                </div>
              </div>

              {/* Urgency callout */}
              <div className="mt-8 bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-2xl p-5">
                <p className="font-semibold text-[#1B2A4A]">⚡ Limited Availability This Week</p>
                <p className="mt-1 text-gray-700 text-sm">
                  We fill up fast — contact us today to lock in your spot before we book out.
                </p>
              </div>

              {/* Map embed */}
              {BUSINESS.googleMapsEmbedUrl ? (
                <div className="mt-8 rounded-2xl overflow-hidden h-56">
                  <iframe
                    src={BUSINESS.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div className="mt-8 bg-gray-100 rounded-2xl h-56 flex items-center justify-center text-gray-400 text-sm">
                  <div className="text-center">
                    <MapPin size={32} className="mx-auto mb-2 text-gray-300" />
                    <p>Add your Google Maps embed URL in constants.ts</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
