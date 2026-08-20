import type { Metadata } from 'next';

import { PerspektifListing } from '@/features/perspektif/PerspektifListing';

export const metadata: Metadata = {
  title: 'Purple Perspektif – İletişim, PR ve AI Üzerine Yazılar',
  description:
    'Marka stratejisi, kurumsal iletişim, CEO iletişimi, savunma sanayi ve yapay zekâ üzerine Purple ekibinin analiz ve görüş yazıları.',
  alternates: {
    canonical: '/perspektif',
  },
  openGraph: {
    title: 'Purple Perspektif – İletişim, PR ve AI Üzerine Yazılar',
    description:
      'Marka stratejisi, kurumsal iletişim, CEO iletişimi ve yapay zekâ üzerine stratejik bakış açıları.',
    url: 'https://purple.ist/perspektif',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Purple Perspektif' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purple Perspektif – İletişim, PR ve AI Üzerine Yazılar',
    description: 'Marka stratejisi, kurumsal iletişim ve yapay zekâ üzerine stratejik bakış açıları.',
    images: ['/images/og-image.png'],
  },
};

export default function PerspektifPage() {
  return <PerspektifListing />;
}

