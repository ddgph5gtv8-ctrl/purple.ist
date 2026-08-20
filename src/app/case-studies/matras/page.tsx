import type { Metadata } from 'next';

import { CaseStudyTemplate, type CaseStudyData } from '@/features/case-study/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'MATRAŞ - Marka İtibarı ve Pazarlama İletişimi',
  description:
    'Matraş için marka algısını ve itibarını güçlendiren pazarlama iletişimi çalışmalarımız.',
  alternates: {
    canonical: '/case-studies/matras',
  },
  openGraph: {
    title: 'MATRAŞ - Marka İtibarı ve Pazarlama İletişimi | Purple',
    description:
      'Matraş için marka algısını ve itibarını güçlendiren pazarlama iletişimi çalışmalarımız.',
    images: [{ url: 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271200%27 height=%27630%27 viewBox=%270 0 1200 630%27%3E%3Crect width=%271200%27 height=%27630%27 fill=%27%230b0b0d%27/%3E%3Crect x=%2760%27 y=%2750%27 width=%271080%27 height=%27530%27 rx=%2718%27 fill=%27%23111113%27 stroke=%27%23313131%27/%3E%3Ctext x=%27600%27 y=%27310%27 text-anchor=%27middle%27 fill=%27%23f4f4f5%27 font-size=%2760%27 font-family=%27Arial, Helvetica, sans-serif%27 font-weight=%27700%27%3EMATRA%C5%9E%3C/text%3E%3Ctext x=%27600%27 y=%27370%27 text-anchor=%27middle%27 fill=%27%23a1a1aa%27 font-size=%2724%27 font-family=%27Arial, Helvetica, sans-serif%27 letter-spacing=%276%27%3EMARKA %C4%B0T%C4%B0BARI %26 PAZARLAMA %C4%B0LET%C4%B0%C5%9E%C4%B0M%C4%B0%3C/text%3E%3C/svg%3E', width: 1200, height: 630, alt: 'MATRAŞ marka itibarı ve pazarlama iletişimi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MATRAŞ - Marka İtibarı ve Pazarlama İletişimi | Purple',
    description: 'Matraş için marka algısını ve itibarını güçlendiren pazarlama iletişimi çalışmalarımız.',
    images: ['data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271200%27 height=%27630%27 viewBox=%270 0 1200 630%27%3E%3Crect width=%271200%27 height=%27630%27 fill=%27%230b0b0d%27/%3E%3Crect x=%2760%27 y=%2750%27 width=%271080%27 height=%27530%27 rx=%2718%27 fill=%27%23111113%27 stroke=%27%23313131%27/%3E%3Ctext x=%27600%27 y=%27310%27 text-anchor=%27middle%27 fill=%27%23f4f4f5%27 font-size=%2760%27 font-family=%27Arial, Helvetica, sans-serif%27 font-weight=%27700%27%3EMATRA%C5%9E%3C/text%3E%3Ctext x=%27600%27 y=%27370%27 text-anchor=%27middle%27 fill=%27%23a1a1aa%27 font-size=%2724%27 font-family=%27Arial, Helvetica, sans-serif%27 letter-spacing=%276%27%3EMARKA %C4%B0T%C4%B0BARI %26 PAZARLAMA %C4%B0LET%C4%B0%C5%9E%C4%B0M%C4%B0%3C/text%3E%3C/svg%3E'],
  },
};

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MATRAŞ - Marka İtibarı ve Pazarlama İletişimi',
  description: 'Matraş için marka algısını ve itibarını güçlendiren pazarlama iletişimi çalışmalarımız.',
  author: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  publisher: { '@type': 'Organization', name: 'Purple', logo: { '@type': 'ImageObject', url: 'https://purple.ist/images/purple-logo.png' } },
  image: 'https://purple.ist/images/purple-logo.png',
  url: 'https://purple.ist/case-studies/matras',
};

const matrasData: CaseStudyData = {
  client: 'MATRAŞ',
  title: 'Marka algısını güçlendiren iletişim çalışmaları',
  duration: '2015',
  intro:
    'Matraş için marka algısını ve itibarını güçlendiren pazarlama iletişimi çalışmaları kapsamında, marka değerini görünür ve güçlü bir iletişim diliyle destekledik.',
  sector: 'Perakende / Marka',
  partnershipType: 'Pazarlama İletişimi',
  status: 'Başarı Hikayesi',
  coverImage: '/images/projects/matras/matras-cosmopolitan-dergi-ilan.png',
  summary: {
    headline: 'Marka itibarı ve pazarlama iletişimi için güçlü görünürlük.',
    body: 'Matraş için yürüttüğümüz iletişim çalışmaları, markanın güven, kalite ve güçlü algı yaratma hedefini destekleyen stratejik bir yaklaşım üzerine kuruldu. Marka değerini öne çıkaran iletişim tasarımıyla itibarın güçlenmesi hedeflendi.',
  },
  challenge: {
    headline: 'Marka algısını ve güven hissini güçlendirmek.',
    body: 'Matraş için temel hedef, ürün ve marka değerlerinin yalnızca satış odaklı değil, güven ve itibara dayalı bir şekilde anlatılmasıydı. Bu nedenle iletişim yaklaşımı, marka algısını güçlendiren ve kurumsal itibarın yükselmesine katkı sağlayan bir çerçeve üzerinden kuruldu.',
  },
  services: [
    { title: 'Pazarlama İletişimi', description: 'Markanın görünürlüğünü ve güven hissini güçlendiren iletişim yaklaşımı.' },
    { title: 'Marka İtibarı', description: 'Markanın güven, kalite ve değer algısını destekleyen iletişim çıktılarını yönetme.' },
    { title: 'İletişim Stratejisi', description: 'Stratejik mesaj ve iletişim planı üzerinden marka değerini net kılma.' },
    { title: 'Kreatif Yönlendirme', description: 'Marka algısını destekleyen tutarlı ve güçlü anlatı ve görsel yaklaşım.' },
  ],
  approach: [
    {
      title: 'Marka Algısı',
      description: 'Matraş için marka değerlerinin güven, kalite ve itibara dayalı şekilde anlatımına odaklandık.',
    },
    {
      title: 'İletişim Çerçevesi',
      description: 'Pazarlama iletişimi çalışmaları, rakiplerden ayrışan ve hedef kitlede güven hissi oluşturan bir çerçeve üzerine kuruldu.',
    },
    {
      title: 'İtibar Desteği',
      description: 'Markanın kurumsal ve tüketici algısını güçlendiren anlatılar ve iletişim çıktıları oluşturduk.',
    },
  ],
  featuredWork: [
    {
      title: 'Marka itibarı çalışması',
      description: 'Marka algısını ve güven hissini güçlendiren iletişim yaklaşımı.',
      image: '/images/projects/matras/matras-vouge-dergi-ilan.png',
    },
  ],
  gallery: [
    {
      src: '/images/projects/matras/matras-seal-jazz-festival.png',
      alt: 'MATRAŞ marka itibarı ve pazarlama iletişimi placeholder görseli',
      caption: 'MATRAŞ — Marka İtibarı ve Pazarlama İletişimi',
      fit: 'contain',
    },
  ],
  achievement: {
    title: 'The ONE Awards 2015',
    subtitle: 'Başarı',
    body: 'Matraş için yürütülen marka iletişimi ve pazarlama çalışmaları, güçlü marka algısı ve itibar geliştirme hedefiyle tasarlanmış stratejik bir yaklaşımın çıktısı olarak öne çıktı.',
    note: 'Ödül belgesi daha sonra eklenecektir.',
    image: '/images/projects/matras/Merketing%20T%C3%BCrkiye%20%C3%96d%C3%BCl%20Yeni.png',
    imageAlt: 'MATRAŞ The ONE Awards 2015 ödül belgesi',
    caption: 'The ONE Awards 2015',
  },
  result: {
    headline: 'Marka algısını güçlendiren iletişim çalışmalarıyla güven ve itibar oluşturma.',
    body: 'Matraş için yürütülen pazarlama iletişimi çalışmaları, markanın daha güçlü, güvenilir ve öne çıkan bir algı oluşturmasına katkı sağladı. Görünürlük, itibar ve iletişim tutarlılığı üzerine kurulu yaklaşım, marka değerinin daha güçlü ve sürdürülebilir bir şekilde anlatılmasını destekledi.',
    metrics: [
      { value: '2015', label: 'The ONE Awards' },
      { value: 'Marka', label: 'İtibar Güçlendirme' },
      { value: 'Pazarlama', label: 'İletişimi' },
    ],
  },
};

export default function MatrasCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <CaseStudyTemplate data={matrasData} />
    </>
  );
}
