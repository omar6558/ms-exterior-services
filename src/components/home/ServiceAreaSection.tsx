import { CheckCircle, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { BUSINESS } from '@/lib/constants';

export default function ServiceAreaSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              label="Service Area"
              title="Proudly Serving East Tennessee"
              subtitle="We serve Knoxville and all surrounding communities. Not sure if we cover your area? Just call — we'll let you know."
            />

            <div className="mt-8 grid grid-cols-2 gap-3">
              {BUSINESS.serviceArea.map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#38BDF8] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-[#1B2A4A] font-semibold">
              <MapPin size={18} className="text-[#38BDF8]" />
              <span>Don&apos;t see your city? Call us — we may still serve you!</span>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-80 bg-gray-200 flex items-center justify-center">
            {BUSINESS.googleMapsEmbedUrl ? (
              <iframe
                src={BUSINESS.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              /* SWAP: replace with your Google Maps embed URL */
              <div className="text-center text-gray-500 p-8">
                <MapPin size={40} className="mx-auto mb-3 text-gray-300" />
                <p className="font-semibold">Map coming soon</p>
                <p className="text-sm mt-1">
                  Add your Google Maps embed URL in constants.ts
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
