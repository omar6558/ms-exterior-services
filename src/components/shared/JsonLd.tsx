import { BUSINESS } from '@/lib/constants';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Knoxville',
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    areaServed: BUSINESS.serviceArea.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    priceRange: '$$',
    openingHours: 'Mo-Sa 07:00-18:00', // SWAP: your real hours
    description:
      'Professional pressure washing, soft washing, window cleaning, gutter cleaning, and roof cleaning in Knoxville, TN.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200', // SWAP: your business photo
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
