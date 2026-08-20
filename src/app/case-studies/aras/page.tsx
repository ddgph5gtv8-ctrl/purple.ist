import type { Metadata } from 'next';

import { CaseStudyTemplate, type CaseStudyData } from '@/features/case-study/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'ARAS KARGO - KahveArası Dijital Kurum İçi Yayın',
  description:
    'Aras Kargo için geliştirdiğimiz KahveArası dijital kurum içi yayın çalışması ile iç iletişim süreçlerini sürekli ve kurumsal bir yapıya dönüştürdük.',
  alternates: {
    canonical: '/case-studies/aras',
  },
  openGraph: {
    title: 'ARAS KARGO - KahveArası Dijital Kurum İçi Yayın | Purple',
    description:
      'KahveArası dijital kurum içi yayın çalışmasıyla Aras Kargo için çalışan iletişimini düzenli ve okunabilir bir yapıya taşıdık.',
    images: [{ url: '/images/projects/aras/hero.jpg', width: 1200, height: 630, alt: 'Aras Kargo KahveArası dijital yayın çalışması' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARAS KARGO - KahveArası Dijital Kurum İçi Yayın | Purple',
    description: 'Aras Kargo için KahveArası dijital kurum içi yayın çalışması.',
    images: ['/images/projects/aras/hero.jpg'],
  },
};

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ARAS KARGO - KahveArası Dijital Kurum İçi Yayın',
  description: 'Aras Kargo için hazırlanan KahveArası dijital kurum içi yayın çalışması.',
  author: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  publisher: { '@type': 'Organization', name: 'Purple', logo: { '@type': 'ImageObject', url: 'https://purple.ist/images/purple-logo.png' } },
  image: 'https://purple.ist/images/projects/aras/hero.jpg',
  url: 'https://purple.ist/case-studies/aras',
};

const arasData: CaseStudyData = {
  client: 'ARAS KARGO',
  title: 'KahveArası dijital kurum içi yayın çalışması',
  duration: '4 Yıldır İş Ortağımız',
  intro:
    'KahveArası dijital yayınıyla çalışan iletişimini sürekli, okunabilir ve kurumsal bir yayın modeline dönüştürdük.',
  sector: 'Lojistik',
  partnershipType: 'İç İletişim ve Dijital Yayın Ortaklığı',
  status: 'Aktif Ortaklık',
  coverImage: '/images/projects/aras/hero.jpg',
  summary: {
    headline: 'Kurum içi iletişimde sürekli dijital yayın akışı.',
    body: 'Aras Kargo için konumlandırdığımız KahveArası, kurum içi iletişimde düzenli ve sürdürülebilir bir dijital yayın akışı oluşturmaya odaklanan bir içerik çalışmasıdır.',
  },
  challenge: {
    headline: 'Çalışan iletişimini düzenli ve okunabilir bir yapıya taşımak.',
    body: 'Kurum içi iletişimde dağınık bilgi akışının yerine, tek merkezde toplanan ve düzenli yayın ritmiyle ilerleyen bir dijital yayın yapısı kurgulandı.',
  },
  services: [
    { title: 'İç İletişim', description: 'Çalışanlara yönelik içerik akışının planlanması ve sürekliliği.' },
    { title: 'Dijital Yayın', description: 'KahveArası yayın yapısının dijitalde düzenli şekilde sürdürülmesi.' },
    { title: 'Editoryal İçerik', description: 'Kurum içi gündemi okunabilir bir editoryal yapıyla sunma.' },
    { title: 'Kreatif Tasarım', description: 'Yayının görsel dilini güçlendiren tasarım uygulamaları.' },
  ],
  approach: [
    {
      title: 'Yayın Omurgası',
      description: 'KahveArası için sürekli bir içerik omurgası oluşturularak kurum içi gündemin düzenli aktarımı sağlandı.',
    },
    {
      title: 'Editoryal Dil ve Tasarım',
      description: 'Yayın içerikleri, çalışanların kolayca takip edebileceği net bir dil ve tutarlı görsel tasarımla sunuldu.',
    },
    {
      title: 'Sürdürülebilir Yayın Akışı',
      description: 'Dijital yayın modeli, süreklilik ve kurumsal hafıza oluşturma hedefiyle sürdürülebilir bir akış halinde ilerletildi.',
    },
  ],
  featuredWork: [
    {
      title: 'KahveArası - Dijital Kurum İçi Yayın',
      description: 'KahveArası yayın çalışmasının ana görseli.',
      image: '/images/projects/aras/hero.jpg',
    },
  ],
  gallery: [
    {
      src: '/images/projects/aras/hero.jpg',
      alt: 'KahveArası dijital kurum içi yayın hero görseli',
      caption: 'KahveArası yayın hero görseli',
      fit: 'contain',
    },
    {
      src: '/images/projects/aras/kahvearasi%20dergi.png',
      alt: 'KahveArası dijital kurum içi yayın örnek sayfası',
      caption: 'KahveArası yayın örneği',
      fit: 'contain',
    },
    {
      src: '/images/projects/aras/ARAS%20DERGI.png',
      alt: 'Aras Kargo — KahveArası kurumsal yayının basılı uygulaması',
      caption: 'Aras Kargo — KahveArası Kurumsal Yayın',
      fit: 'contain',
    },
  ],
  result: {
    headline: 'Kurum içi iletişimde düzenli ve tutarlı yayın deneyimi.',
    body: 'KahveArası dijital yayını, Aras Kargo içinde kurum içi iletişimi düzenli bir yayın yapısına taşıyarak okunabilirlik ve sürdürülebilirlik sağladı.',
  },
};

export default function ArasCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <CaseStudyTemplate data={arasData} />
    </>
  );
}
