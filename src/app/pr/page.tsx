import type { Metadata } from 'next';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MediaPrPage } from '@/features/pr-media/MediaPrPage';

export const metadata: Metadata = {
  title: 'PR & Medya | Purple',
  description:
    'Markaların görünürlüğünü güçlendiren medya ilişkileri, basın çalışmaları, lider iletişimi ve etkinlik PR süreçlerinden seçilmiş medya yansımaları.',
  alternates: { canonical: '/pr' },
  openGraph: {
    title: 'PR & Medya | Purple',
    description:
      'Markaların görünürlüğünü güçlendiren medya ilişkileri, basın çalışmaları, lider iletişimi ve etkinlik PR süreçlerinden seçilmiş medya yansımaları.',
    url: 'https://purple.ist/pr',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'PR & Medya | Purple' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PR & Medya | Purple',
    description:
      'Markaların görünürlüğünü güçlendiren medya ilişkileri, basın çalışmaları, lider iletişimi ve etkinlik PR süreçlerinden seçilmiş medya yansımaları.',
    images: ['/images/og-image.png'],
  },
};

export default function PrMediaPage() {
  return (
    <>
      <Header />
      <MediaPrPage />
      <Footer />
    </>
  );
}
