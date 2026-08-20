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
  coverImage: '/images/projects/duguncom/Kanal%20D%20Ana%20hber_düğün.com.PNG',
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
      image: '/images/projects/duguncom/Kanal%20D%20Ana%20hber_düğün.com.PNG',
    },
    {
      title: 'TV RÖPORTAJ',
      description: 'Düğün.com CEO’su Emek Kırbıyık’ın Ekotürk TV’de gerçekleştirdiği televizyon röportajı ve marka görünürlüğü çalışması.',
      image: '/images/projects/duguncom/düğün.com%20CEO%20Emek%20kırbıyık%20EKO%20Türk%20TV%20özel%20haber%20çalışması.jpeg',
    },
    {
      title: 'LİDER İLETİŞİMİ',
      description: 'Düğün.com CEO’su Emek Kırbıyık’ın, gazeteci ve YouTube yayıncısı Cüneyt Özdemir ile gerçekleştirdiği röportaj üzerinden lider iletişimi ve marka görünürlüğü çalışması.',
      image: '/images/projects/duguncom/düğün.com%20Cüneyt%20Özdemir%20Konuk.PNG',
    },
    {
      title: 'POSTA GAZETESİ',
      description: 'Düğün.com’un marka ve yöneticilerinin medya görünürlüğünü güçlendiren gazete ve haber çalışması.',
      image: '/images/projects/duguncom/duguncom-posta-gazetesi.png',
    },
    {
      title: 'FOX TV RÖPORTAJI',
      description: 'Düğün.com CEO’su Emek Kırbıyık’ın Fox TV ekranlarında yer aldığı televizyon ve medya görünürlüğü çalışması.',
      image: '/images/projects/duguncom/duguncom-fox-tv-roportaj.png',
    },
  ],
  gallery: [
    { src: '/images/projects/duguncom/Kanal%20D%20Ana%20hber_düğün.com.PNG', alt: 'Düğün.com Kanal D televizyon haber çalışması', caption: 'TV & VIDEO', fit: 'cover' },
    { src: '/images/projects/duguncom/düğün.com%20CEO%20Emek%20kırbıyık%20EKO%20Türk%20TV%20özel%20haber%20çalışması.jpeg', alt: 'Düğün.com Eko Türk TV özel haber çalışması', caption: 'TV & VIDEO', fit: 'cover' },
    { src: '/images/projects/duguncom/düğün.com%20Cüneyt%20Özdemir%20Konuk.PNG', alt: 'Düğün.com Cüneyt Özdemir konuk çalışması', caption: 'TV RÖPORTAJI & LİDER İLETİŞİMİ', fit: 'cover' },
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
