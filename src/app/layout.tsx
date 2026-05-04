import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyCallButton from '@/components/layout/StickyCallButton';
import JsonLd from '@/components/shared/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Pressure Washing & Exterior Cleaning Knoxville TN | MS Exterior Services',
    template: '%s | MS Exterior Services',
  },
  description:
    'Professional pressure washing, soft washing & window cleaning in Knoxville, TN. Free estimates. Call (865) 320-8891.',
  keywords: [
    'pressure washing Knoxville TN',
    'house washing near me',
    'exterior cleaning Knoxville',
    'soft washing Knoxville',
    'window cleaning Knoxville TN',
  ],
  metadataBase: new URL('https://msexteriorservices.com'), // SWAP: your real domain
  openGraph: {
    title: 'MS Exterior Services | Knoxville Exterior Cleaning',
    description:
      'Professional pressure washing, soft washing & window cleaning in Knoxville, TN.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
