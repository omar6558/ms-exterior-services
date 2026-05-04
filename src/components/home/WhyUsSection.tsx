import { ShieldCheck, Users, Clock, Award } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const reasons = [
  {
    icon: Users,
    stat: '500+ Happy Customers',
    desc: 'Trusted by hundreds of Knoxville homeowners with 5-star reviews to prove it.',
  },
  {
    icon: Clock,
    stat: 'On-Time Guarantee',
    desc: 'We show up when we say we will. Respect for your time is non-negotiable.',
  },
  {
    icon: Award,
    stat: 'Satisfaction Guaranteed',
    desc: 'Not happy with the results? We come back and make it right — free of charge.',
  },
  {
    icon: ShieldCheck,
    stat: 'Quality Results',
    desc: 'Professional-grade equipment and proven techniques on every single job.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              label="Why Choose Us"
              title="The Last Exterior Cleaner You'll Ever Need"
              subtitle="We built MS Exterior Services on a simple promise: show up, work hard, and leave every home looking better than we found it."
            />

            <div className="mt-8 space-y-2">
              {[
                'No hidden fees — your quote is your price',
                'Eco-friendly, biodegradable cleaning solutions',
                'Residential specialists — we know how to treat your home',
                'Same-week availability in most cases',
                'Free estimates with no obligation',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 py-2">
                  <div className="w-5 h-5 rounded-full bg-[#38BDF8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {reasons.map(({ icon: Icon, stat, desc }) => (
              <div
                key={stat}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#38BDF8]/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-[#1B2A4A] rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#38BDF8]" />
                </div>
                <h3 className="text-lg font-bold text-[#1B2A4A]">{stat}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
