import { Star, Clock, ThumbsUp } from 'lucide-react';

const badges = [
  { icon: ThumbsUp, text: '100+ Happy Customers' },
  { icon: Star, text: '100% Satisfaction Guarantee' },
  { icon: Clock, text: 'Free Estimates' },
];

export default function TrustBadges({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-4 py-6 ${
        dark ? 'bg-[#1B2A4A]' : 'bg-gray-50 border-y border-gray-200'
      }`}
    >
      {badges.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full border font-semibold text-sm ${
            dark
              ? 'border-white/20 text-white'
              : 'border-[#1B2A4A]/20 text-[#1B2A4A] bg-white shadow-sm'
          }`}
        >
          <Icon size={16} className="text-[#38BDF8]" />
          {text}
        </div>
      ))}
    </div>
  );
}
