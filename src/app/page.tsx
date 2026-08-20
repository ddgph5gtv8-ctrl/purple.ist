import type { Metadata } from 'next';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Stratejik İletişim & PR Ajansı | Purple',
  description:
    'Purple; marka stratejisi, kurumsal PR, CEO iletişimi, savunma sanayi iletişimi, stand tasarımı ve dijital büyüme alanlarında uzun vadeli iş ortaklıkları kuran stratejik iletişim ajansıdır.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Stratejik İletişim & PR Ajansı | Purple',
    description:
      'Markaların görünürlüğünü değil, etkisini büyütüyoruz. Strateji, iletişim ve yaratıcılığı tek çatı altında.',
    url: 'https://purple.ist',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Purple – Stratejik İletişim & PR' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stratejik İletişim & PR Ajansı | Purple',
    description: 'Markaların görünürlüğünü değil, etkisini büyütüyoruz.',
    images: ['/images/og-image.png'],
  },
};

import { Approach } from '@/features/home/Approach';
import { Contact } from '@/features/home/Contact';
import { GrowthPlan } from '@/features/home/GrowthPlan';
import { Hero } from '@/features/home/Hero';
import { Process } from '@/features/home/Process';
import { WorkingModel } from '@/features/home/WorkingModel';
import { PurpleIQ } from '@/features/home/PurpleIQ';
import { PurplePerspective } from '@/features/home/PurplePerspective';
import { Services } from '@/features/home/Services';
import { WhoWeWorkWith } from '@/features/home/WhoWeWorkWith';
import { Work } from '@/features/home/Work';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-white">
      <Header />
      <main id="main-content">
      <Hero />
      <PurpleIQ />
      <Services />
      <Process />
      <WorkingModel />
      <Approach />
      <WhoWeWorkWith />
      <Work />
      <GrowthPlan />
      <PurplePerspective />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}
