import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function StickyCallButton() {
  return (
    <a
      href={BUSINESS.phoneHref}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-3 bg-[#1B2A4A] text-white py-4 font-bold text-lg shadow-2xl"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <Phone size={20} className="text-[#38BDF8]" />
      <span>
        Call Now, <span className="text-[#38BDF8]">{BUSINESS.phone}</span>
      </span>
    </a>
  );
}
