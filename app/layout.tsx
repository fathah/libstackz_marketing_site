import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { PageTransition } from '@/components/providers/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#004734',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://libstackz.com'),
  title: 'Libstackz — Run your entire library from one dashboard',
  description:
    'Libstackz brings cataloging, circulation, fines, membership, and a public catalogue into a single cloud platform, built for schools, colleges, and public libraries of any size.',
  icons: {
    icon: '/assets/brand/logo.svg',
  },
  openGraph: {
    title: 'Libstackz — Run your entire library from one dashboard',
    description:
      'Libstackz brings cataloging, circulation, fines, membership, and a public catalogue into a single cloud platform.',
    images: [
      {
        url: '/assets/illustrations/home/library-dashboard.webp',
        width: 1536,
        height: 1024,
        alt: 'Libstackz library dashboard illustration',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <SmoothScrollProvider>
          <PageTransition>{children}</PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
