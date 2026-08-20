import type { Metadata } from 'next';

import { ServicePageTemplate, type ServicePageData } from '@/features/service/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Marka Stratejisi – Konumlandırma ve Mesaj Mimarisi',
  description:
    'Purple olarak marka konumlandırma, mesaj mimarisi ve sürdürülebilir büyüme stratejileri oluşturuyoruz. Güçlü markalar stratejik düşünceden doğar.',
  alternates: { canonical: '/hizmetler/marka-stratejisi' },
  openGraph: {
    title: 'Marka Stratejisi | Purple İletişim',
    description: 'Konumlandırma, mesaj mimarisi ve büyüme stratejileri ile markanızı güçlendirin.',
    url: 'https://purple.ist/hizmetler/marka-stratejisi',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Marka Stratejisi | Purple' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marka Stratejisi | Purple İletişim',
    description: 'Konumlandırma, mesaj mimarisi ve büyüme stratejileri ile markanızı güçlendirin.',
    images: ['/images/og-image.png'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Marka Stratejisi',
  provider: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  description: 'Marka konumlandırma, mesaj mimarisi ve sürdürülebilir büyüme stratejileri.',
  areaServed: 'TR',
  serviceType: 'Brand Strategy Consulting',
};

const data: ServicePageData = {
  hero: {
    badge: 'MARKA STRATEJİSİ',
    title: 'Güçlü Markalar Şans Eseri Büyümez.',
    tagline: 'Doğru konumlandırma, net bir mesaj mimarisi ve uzun vadeli bir büyüme stratejisi olmadan kalıcı marka değeri oluşturmak mümkün değildir.',
    cta: 'Marka Stratejinizi Konuşalım',
  },
  about: {
    headline: 'Marka stratejisi neden her şeyin temelidir?',
    body: 'Marka stratejisi, bir şirketin kim olduğunu, kime hitap ettiğini ve rakiplerinden nasıl ayrıştığını tanımlayan temel çerçevedir. İletişim yatırımlarının karşılık vermesinin önündeki en büyük engel, genellikle strateji eksikliğidir. Purple olarak her iletişim çalışmasına önce strateji sorusunu sorarak başlıyoruz: Bu marka kimin için, ne için ve neden tercih edilmeli? Bu soruların net yanıtları olmadan üretilen içerik, tasarım ve PR çalışmaları uzun vadede etki yaratmaz.',
  },
  approach: [
    {
      title: 'Marka Analizi ve Pazar Araştırması',
      description: 'Markanızın mevcut algısını, güçlü ve zayıf yönlerini, hedef kitlenizi ve rekabetçi ortamı derinlemesine analiz ediyoruz. Bu aşama, yanıltıcı varsayımlar yerine veriye dayalı kararlar almamızı sağlar.',
    },
    {
      title: 'Konumlandırma ve Mesaj Mimarisi',
      description: 'Markanızın sektördeki özgün konumunu belirliyor, hedef kitleyle rezonans kuran bir mesaj hiyerarşisi oluşturuyoruz. Her mesaj, hem duygusal hem rasyonel bir zemine oturur.',
    },
    {
      title: 'Marka Kimliği ve Görsel Dil',
      description: 'Stratejik konumlandırmayı görsel ve yazılı bir kimliğe dönüştürüyoruz. Marka sesi, ton rehberi, görsel kurallar ve kurumsal kimlik materyalleri bu sürecin çıktılarıdır.',
    },
    {
      title: 'Büyüme Yol Haritası',
      description: 'Stratejiyi eyleme dönüştüren, önceliklendirilebilir ve ölçülebilir bir büyüme planı hazırlıyoruz. Bu plan, tüm iletişim çalışmalarına yön veren canlı bir belge olarak yaşamaya devam eder.',
    },
  ],
  capabilities: [
    'Marka Konumlandırma',
    'Mesaj Mimarisi',
    'Rekabetçi Analiz',
    'Hedef Kitle Araştırması',
    'Marka Kimliği Geliştirme',
    'Kurumsal Hikâye Anlatımı',
    'Marka Ses Tonu Rehberi',
    'Büyüme Yol Haritası',
    'AI Destekli İçerik Stratejisi',
    'Marka Değerlendirme (Purple IQ)',
  ],
  whyPurple: [
    {
      title: 'Strateji Önce Gelir',
      description: 'Hiçbir kreatif veya PR çalışmasına stratejik zemin oluşturulmadan başlamıyoruz. Bu yaklaşım, her yatırımın daha uzun vadeli etki yaratmasını sağlar.',
    },
    {
      title: 'Uzun Vadeli İş Ortaklığı',
      description: 'Strateji bir kez yapılıp bırakılacak bir belge değildir. Markalarımızla yıllarca çalışarak stratejiyi piyasa koşullarına göre güncelliyor, büyümeyle birlikte evrimlendiriyoruz.',
    },
    {
      title: 'AI Destekli Süreç',
      description: 'Pazar araştırması, içerik stratejisi ve rekabetçi analiz süreçlerinde yapay zekâyı etkin biçimde kullanıyoruz. Bu, çok daha hızlı ve daha derin içgörüler elde etmemizi sağlar.',
    },
    {
      title: 'Ölçülebilir Etki',
      description: 'Marka stratejisinin etkisini Purple IQ çerçevesiyle düzenli olarak ölçüyor, ilerlemeyi verilerle takip ediyor ve gerektiğinde stratejiyi güncelliyoruz.',
    },
  ],
  relatedCaseStudies: [
    {
      client: 'HUĞLU',
      title: 'Uçtan uca marka dönüşümü',
      href: '/case-studies/huglu',
      image: '/images/projects/huglu/website-home.png',
      duration: '9 Yıldır İş Ortağımız',
      services: ['Marka Stratejisi', 'Kurumsal Kimlik', 'Web Sitesi'],
    },
  ],
  relatedArticles: [
    {
      title: 'Yapay zekâ iletişim danışmanlığını nasıl dönüştürüyor?',
      href: '/perspektif/yapay-zeka-ve-danismanlik',
      category: 'AI',
      readTime: '6 dk',
    },
  ],
};

export default function MarkaStratejisiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageTemplate data={data} />
    </>
  );
}
