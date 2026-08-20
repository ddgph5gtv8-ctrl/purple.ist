import type { Metadata } from 'next';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { GrowthPlan } from '@/features/home/GrowthPlan';

export const metadata: Metadata = {
  title: 'Büyüme Planı',
  description:
    'Purple Başlangıç, Purple Büyüme ve Purple Etki paketlerini karşılaştırın. Markanız için en uygun iletişim modelini birlikte belirleyelim.',
  alternates: {
    canonical: '/buyume-plani',
  },
  openGraph: {
    title: 'Büyüme Planı | Purple',
    description:
      'Purple iletişim paketlerini inceleyin: Purple Başlangıç, Purple Büyüme ve Purple Etki.',
    url: 'https://purple.ist/buyume-plani',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Purple Büyüme Planı' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Büyüme Planı | Purple',
    description: 'Purple iletişim paketlerini inceleyin.',
    images: ['/images/og-image.png'],
  },
};

export default function GrowthPlanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-white">
      <Header />
      <main id="main-content" className="flex-1">
        <GrowthPlan />
      </main>
      <Footer />
    </div>
  );
}
