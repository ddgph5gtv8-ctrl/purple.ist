import type { Metadata } from 'next';

import { CaseStudyTemplate, type CaseStudyData } from '@/features/case-study/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'DÜĞÜN.COM – PR & Lider İletişimi',
  description:
    'Düğün.com için yürütülen PR ve lider iletişimi çalışmaları kapsamında, markanın ve yöneticilerinin doğru medya kanallarında görünürlüğünü güçlendiren iletişim çalışmaları gerçekleştirildi.',
  alternates: {
    canonical: '/case-studies/duguncom',
  },
  openGraph: {
    title: 'DÜĞÜN.COM – PR & Lider İletişimi | Purple',
    description:
      'Düğün.com için yürütülen PR ve lider iletişimi çalışmaları kapsamında, markanın ve yöneticilerinin doğru medya kanallarında görünürlüğünü güçlendiren iletişim çalışmaları gerçekleştirildi.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'DÜĞÜN.COM – Purple İletişim' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DÜĞÜN.COM – PR & Lider İletişimi | Purple',
    description: 'Düğün.com için yürütülen PR ve lider iletişimi çalışmaları kapsamında, markanın ve yöneticilerinin doğru medya kanallarında görünürlüğünü güçlendiren iletişim çalışmaları gerçekleştirildi.',
    images: ['/images/og-image.png'],
  },
};

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'DÜĞÜN.COM – PR & Lider İletişimi',
  description: 'Düğün.com için yürütülen PR ve lider iletişimi çalışmaları kapsamında, markanın ve yöneticilerinin doğru medya kanallarında görünürlüğünü güçlendiren iletişim çalışmaları gerçekleştirildi.',
  author: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  publisher: { '@type': 'Organization', name: 'Purple', logo: { '@type': 'ImageObject', url: 'https://purple.ist/images/purple-logo.png' } },
  image: 'https://purple.ist/images/og-image.png',
  url: 'https://purple.ist/case-studies/duguncom',
};

const duguncomData: CaseStudyData = {
  client: 'DÜĞÜN.COM',
  title: 'PR & Lider İletişimi',
  duration: '3 Yıl İş Ortağımız',
  intro:
    'Düğün.com için yürütülen PR ve lider iletişimi çalışmaları kapsamında, markanın ve yöneticilerinin doğru medya kanallarında görünürlüğünü güçlendiren iletişim çalışmaları gerçekleştirildi.',
  sector: 'E-Ticaret & Etkinlik',
  partnershipType: 'PR & Lider İletişimi',
  status: 'Aktif Ortaklık',
  coverImage: '/images/projects/duguncom/duguncom-kanal-d.png',
  summary: {
    headline: 'Doğru hikâyenin doğru mecrada görünmesini sağlamak.',
    body:
      'Düğün.com için yürütülen iletişim çalışmaları, markanın sektöründeki görünürlüğünü güçlendirirken aynı zamanda yöneticilerin uzmanlık alanlarını ve marka anlatısını doğru medya formatlarında görünür kılmaya odaklandı. Çalışmaların odağında medya ilişkileri, lider görünürlüğü ve doğru güncel ekosistemde konuşulabilirlik yer aldı.',
  },
  challenge: {
    headline: 'Marka ve lider anlatımı, görünürlüğün doğru kurgu ile yükselmesi gerekiyordu.',
    body:
      'Düğün.com’un değerini yalnızca ürün ve operasyonel hikâyesi üzerinden anlatmak yetersizdi. Marka, sektörel gündem içindeyken daha güçlü bir görünürlüğe sahip olmalı, aynı zamanda yöneticilerin uzmanlık ve liderlik kimliği doğru mecralarda öne çıkmalıydı. Bu nedenle çalışmalar hem marka hem de lider iletişimi ekseninde planlandı.',
  },
  services: [
    { title: 'PR & Medya İletişimi', description: 'Marka hikâyesi, sektör görünürlüğü ve medya ilişkileri üzerinden güven inşa eden iletişim çalışmaları.' },
    { title: 'Lider İletişimi', description: 'Yönetici görünürlüğünü destekleyen röportaj, haber ve uzman söylem stratejileri.' },
    { title: 'Medya Planlama', description: 'Doğru medya kanallarında doğru zamanlama ve mesaj bütünlüğüyle görünürlük yönetimi.' },
    { title: 'Basın ve Röportaj Yönetimi', description: 'Televizyon, gazete ve dijital mecralarda marka ve lider anlatısının güçlü biçimde aktarılması.' },
  ],
  approach: [
    {
      title: 'Marka ve Lider Anlatısı',
      description: 'Düğün.com için marka hikâyesi ile yönetici uzmanlık anlatısını aynı dil ve güven çerçevesinde birleştirdik.',
    },
    {
      title: 'Medya ve Kanal Seçimi',
      description: 'Televizyon, gazete ve dijital medya için uygun içerik ve görünüm planı üzerinde çalıştık.',
    },
    {
      title: 'Röportaj ve Görünürlük Yönetimi',
      description: 'Yönetici ve marka söylemlerinin medya formatlarında net, güvenilir ve etkili biçimde konuşulmasını sağladık.',
    },
    {
      title: 'Süreklilik ve Etki',
      description: 'Tek seferlik görünürlük değil, sektörel gündem ve liderlik algısı üzerine kurulu sürdürülebilir iletişim yaklaşımı ürettik.',
    },
  ],
  featuredWork: [
    {
      title: 'TV & VIDEO',
      description: 'Düğün.com’un marka ve lider görünürlüğünü güçlendiren televizyon ve video mecrası çalışmaları.',
      image: '/images/projects/duguncom/duguncom-kanal-d.png',
    },
    {
      title: 'GAZETE',
      description: 'Basın görünürlüğünü artıran haber ve özel haber çıktılarını bir araya getiren medya çalışmaları.',
      image: '/images/projects/duguncom/duguncom-kanal-d.png',
    },
    {
      title: 'LİDER İLETİŞİMİ',
      description: 'Yönetici söylemi, uzmanlık görünürlüğü ve medya röportajları üzerinden lider iletişim gücünü artıran çalışmalar.',
      image: '/images/projects/duguncom/duguncom-kanal-d.png',
    },
  ],
  gallery: [
    { src: '/images/projects/duguncom/duguncom-kanal-d.png', alt: 'Düğün.com Kanal D televizyon haber çalışması', caption: 'TV & VIDEO', fit: 'cover' },
    { src: '/images/projects/duguncom/duguncom-kanal-d.png', alt: 'Düğün.com Eko Türk TV özel haber çalışması', caption: 'TV & VIDEO', fit: 'cover' },
    { src: '/images/projects/duguncom/duguncom-kanal-d.png', alt: 'Düğün.com Cüneyt Özdemir konuk çalışması', caption: 'TV RÖPORTAJI & LİDER İLETİŞİMİ', fit: 'cover' },
  ],
  result: {
    headline: 'Marka görünürlüğü, lider güveni ve medya etkisi birlikte yükseldi.',
    body:
      'Düğün.com için yürütülen PR ve lider iletişimi çabaları, markanın medya gündemindeki yerini güçlendirirken yöneticilerin uzmanlık anlatısını da doğru mecralarda görünür kıldı.',
  },
};

export default function DuguncomCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <CaseStudyTemplate data={duguncomData} />
    </>
  );
}
