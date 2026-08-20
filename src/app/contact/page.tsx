import type { Metadata } from 'next';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ContactPage } from '@/features/contact/ContactPage';

export const metadata: Metadata = {
  title: 'İletişim – Projeni Anlat',
  description:
    'Yeni bir marka inşa ediyor, iletişim süreçlerinizi güçlendirmek istiyor ya da uzun vadeli bir iletişim ortağı arıyorsanız tanışalım.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'İletişim – Projeni Anlat | Purple',
    description:
      'Yeni bir marka inşa ediyor, iletişim süreçlerinizi güçlendirmek istiyor ya da uzun vadeli bir iletişim ortağı arıyorsanız tanışalım.',
    url: 'https://purple.ist/contact',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Purple – İletişim' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İletişim – Projeni Anlat | Purple',
    description: 'Uzun vadeli bir iletişim ortağı arıyorsanız tanışalım.',
    images: ['/images/og-image.png'],
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <ContactPage />
      <Footer />
    </>
  );
}
