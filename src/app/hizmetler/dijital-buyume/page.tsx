import type { Metadata } from 'next';

import { ServicePageTemplate, type ServicePageData } from '@/features/service/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Dijital Büyüme – Performans Pazarlaması ve AI Destekli İçerik',
  description:
    'Performans pazarlaması, AI destekli içerik üretimi ve dijital strateji ile sürdürülebilir dijital büyüme. Purple ile dijitalde ölçülebilir sonuçlar elde edin.',
  alternates: { canonical: '/hizmetler/dijital-buyume' },
  openGraph: {
    title: 'Dijital Büyüme | Purple İletişim',
    description: 'Performans pazarlaması, AI destekli içerik üretimi ve dijital strateji ile büyüyün.',
    url: 'https://purple.ist/hizmetler/dijital-buyume',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Dijital Büyüme | Purple' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dijital Büyüme | Purple İletişim',
    description: 'Performans pazarlaması, AI destekli içerik üretimi ve dijital strateji ile büyüyün.',
    images: ['/images/og-image.png'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dijital Büyüme',
  provider: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  description: 'Performans pazarlaması, AI destekli içerik üretimi ve dijital büyüme stratejileri.',
  areaServed: 'TR',
  serviceType: 'Digital Growth & Performance Marketing',
};

const data: ServicePageData = {
  hero: {
    badge: 'DİJİTAL BÜYÜME',
    title: 'Dijitalde Görünür Olmak Yetmez. Büyümek Gerekir.',
    tagline: 'Dijital varlık oluşturmak artık yeterli değil. Doğru strateji, kaliteli içerik ve veriyle desteklenen bir büyüme yaklaşımı olmadan dijital yatırımlar karşılık vermez.',
    cta: 'Dijital Büyüme Stratejinizi Konuşalım',
  },
  about: {
    headline: 'Dijital büyüme nedir ve nereden başlar?',
    body: 'Dijital büyüme; bir markanın dijital kanallardaki varlığını, etkisini ve ticari sonuçlarını sistematik biçimde artırma sürecidir. Bu süreç; içerik stratejisi, SEO, sosyal medya yönetimi, performans pazarlaması ve web deneyimini kapsar. Purple olarak dijital büyümeye yalnızca reklam bütçesi perspektifinden bakmıyoruz. Organik büyüme, içerik otoritesi ve marka güvenilirliği, ücretli büyümenin çok daha etkili çalışmasını sağlar. AI destekli üretim süreçlerimizle daha hızlı, daha çok ve daha kaliteli içerik üretirken insan yaratıcılığını ön planda tutuyoruz.',
  },
  approach: [
    {
      title: 'Dijital Varlık Analizi ve Strateji',
      description: 'Mevcut dijital kanalları, içerik performansını, rakip konumlanmasını ve hedef kitle davranışlarını analiz ediyoruz. Veriye dayalı bir büyüme stratejisi hazırlıyoruz.',
    },
    {
      title: 'İçerik Stratejisi ve Üretimi',
      description: 'SEO uyumlu, hedef kitleyle rezonans kuran ve marka sesini koruyan içerikler üretiyoruz. AI hızını insan editöryel kalitesiyle birleştiriyoruz.',
    },
    {
      title: 'Kanal Yönetimi ve Dağıtım',
      description: 'Her kanalın (web, LinkedIn, Instagram, YouTube, e-posta) kendine özgü dinamiklerini anlıyor, içerikleri platforma göre optimize ediyor ve düzenli olarak yayınlıyoruz.',
    },
    {
      title: 'Performans Ölçümü ve Optimizasyon',
      description: 'Haftalık ve aylık raporlarla büyüme metriklerini takip ediyor, ne işe yarayıp neyin çalışmadığını analiz ederek stratejiyi sürekli iyileştiriyoruz.',
    },
  ],
  capabilities: [
    'Dijital Strateji ve Yol Haritası',
    'SEO ve İçerik Pazarlaması',
    'AI Destekli İçerik Üretimi',
    'Sosyal Medya Yönetimi',
    'Performans Reklamcılığı (Meta, Google)',
    'E-posta Pazarlaması',
    'Web Analitik ve CRO',
    'Video İçerik Üretimi',
    'Influencer ve İçerik Ortaklıkları',
    'Dijital PR ve Link Building',
  ],
  whyPurple: [
    {
      title: 'İçerik ve Strateji Entegrasyonu',
      description: 'İçerik üretimi ve dijital stratejiyi ayrı disiplinler olarak değil, birbiriyle konuşan bütünleşik bir sistem olarak yönetiyoruz.',
    },
    {
      title: 'AI ile Hızlanma, İnsanla Kalite',
      description: 'AI araçlarını içerik üretimi, optimizasyon ve analiz süreçlerinde aktif kullanıyoruz. Ancak marka sesi ve editöryel kalitenin kontrolü her zaman insan ekibimizde kalır.',
    },
    {
      title: 'Organik + Ücretli Denge',
      description: 'Kalıcı büyüme organik temelden gelir. Ücretli kampanyaları organik içerik stratejisiyle destekleyerek hem kısa hem uzun vadeli sonuçlar elde ediyoruz.',
    },
    {
      title: 'Marka İtibarıyla Uyum',
      description: 'Dijital büyüme sürecinde üretilen her içerik ve yürütülen her kampanya, markanın genel itibarını ve konumlandırmasını güçlendirmek üzere tasarlanır.',
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

export default function DijitalBuyumePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageTemplate data={data} />
    </>
  );
}
