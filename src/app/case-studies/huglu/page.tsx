import type { Metadata } from 'next';

import { CaseStudyTemplate, type CaseStudyData } from '@/features/case-study/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'HUĞLU – Uçtan Uca Marka Dönüşümü',
  description:
    'Marka mimarisi, web sitesi, kreatif üretim ve uluslararası fuar iletişimi alanlarında 9 yıldır sürdürdüğümüz iş ortaklığı.',
  alternates: {
    canonical: '/case-studies/huglu',
  },
  openGraph: {
    title: 'HUĞLU – Uçtan Uca Marka Dönüşümü | Purple',
    description:
      'Marka mimarisi, web sitesi, kreatif üretim ve uluslararası fuar iletişimi alanında 9 yıldır sürdürdüğümüz iş ortaklığı.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'HUĞLU – Purple İletişim' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HUĞLU – Uçtan Uca Marka Dönüşümü | Purple',
    description: 'Marka mimarisi, web sitesi, kreatif üretim ve uluslararası fuar iletişimi alanında 9 yıldır sürdürdüğümüz iş ortaklığı.',
    images: ['/images/og-image.png'],
  },
};

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'HUĞLU – Uçtan Uca Marka Dönüşümü',
  description: 'Marka mimarisi, web sitesi, kreatif üretim ve uluslararası fuar iletişimi alanlarında 9 yıldır sürdürdüğümüz iş ortaklığı.',
  author: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  publisher: { '@type': 'Organization', name: 'Purple', logo: { '@type': 'ImageObject', url: 'https://purple.ist/images/purple-logo.png' } },
  image: 'https://purple.ist/images/og-image.png',
  url: 'https://purple.ist/case-studies/huglu',
};

const hugluData: CaseStudyData = {
  client: 'HUĞLU',
  title: 'Uçtan uca marka dönüşümü',
  duration: '9 Yıldır İş Ortağımız',
  intro:
    'Marka mimarisinden web sitesine, kreatif üretimden uluslararası fuar stand tasarımına kadar tüm iletişim süreçlerini tek çatı altında yönettik.',
  sector: 'Savunma Sanayi ve Teknoloji',
  partnershipType: 'Tam Kapsamlı İletişim',
  status: 'Aktif Ortaklık',
  coverImage: '/images/projects/huglu/hero.png',
  summary: {
    headline: 'Bir markanın dünyayla tanışma hikâyesi.',
    body: 'Huğlu ile kurduğumuz iş ortaklığı, markanın yerel bir üreticiden uluslararası arenada tanınan, saygın bir sektör oyuncusuna dönüşüm sürecini kapsar. Strateji, görsel kimlik, dijital varlık ve fuar iletişiminde omuz omuza çalıştık.',
  },
  challenge: {
    headline: 'Güçlü bir marka, zayıf bir iletişim dili.',
    body: 'Huğlu, kaliteli ürünlere ve köklü bir geçmişe sahip olmasına karşın uluslararası pazarlarda yeterince görünür değildi. Kurumsal iletişim materyalleri tutarsız, web varlığı yetersiz, fuar deneyimi ise markanın gerçek değerini yansıtmıyordu. Hedef: Markanın kalitesiyle iletişim kalitesini eşitlemek.',
  },
  services: [
    { title: 'Marka Stratejisi', description: 'Konumlandırma, mesaj mimarisi ve sürdürülebilir büyüme yol haritası.' },
    { title: 'Kreatif Tasarım', description: 'Marka anlatısını güçlendiren görsel dil, kampanya ve iletişim materyalleri.' },
    { title: 'Dijital Deneyim', description: 'Kurumsal kimliği yansıtan, kullanıcı odaklı web ve dijital deneyim tasarımı.' },
    { title: 'Reklam Filmi', description: 'Ürün ve marka lansmanlarını destekleyen yaratıcı reklam filmi kurgusu.' },
    { title: 'Video Prodüksiyon', description: 'Uluslararası kullanım hedefiyle yüksek üretim kalitesinde video içerik üretimi.' },
    { title: 'Lansman İletişimi', description: 'Ürün duyurularını etkili bir anlatı ve medya planı ile destekleyen iletişim yönetimi.' },
    { title: 'Fuar İletişimi', description: 'DSEI, Eurosatory ve IDEF gibi fuarlar için çok kanallı iletişim yönetimi.' },
    { title: 'Stand Tasarımı', description: 'Fuar alanında marka deneyimini güçlendiren stand ve mekansal iletişim yaklaşımı.' },
  ],
  approach: [
    {
      title: 'Marka Keşfi & Konumlandırma',
      description: "Huğlu'nun güçlü yönlerini, hedef pazarlarını ve rakip konumlandırmasını analiz ederek özgün bir marka kimliği ve mesaj mimarisi oluşturduk.",
    },
    {
      title: 'Görsel Kimlik & Dijital Varlık',
      description: 'Yenilenen kurumsal kimliği web sitesi, katalog ve dijital materyallere uyarladık; tutarlı ve güçlü bir görsel dil inşa ettik.',
    },
    {
      title: 'Uluslararası Fuar Stratejisi',
      description: 'Her fuar için özel iletişim stratejileri, stand konseptleri ve ziyaretçi deneyim akışları tasarladık.',
    },
    {
      title: 'Sürekli Büyüme & Optimizasyon',
      description: 'Her yıl sonunda stratejik değerlendirme yaparak iletişim planını güncelledik ve büyüme fırsatlarını birlikte belirledik.',
    },
  ],
  featuredWork: [
    {
      title: 'Kurumsal Web Sitesi',
      description: 'Marka mimarisini ve ürün portföyünü dünyaya açan kurumsal dijital deneyim.',
      image: '/images/projects/huglu/website-home.png',
    },
    {
      title: 'Fuar Stand Tasarımı',
      description: 'Uluslararası fuarlarda ziyaretçileri marka elçisine dönüştüren stand konsepti.',
      image: '/images/projects/huglu/stand-nurnberg.png',
    },
    {
      title: 'Kreatif Kampanya',
      description: 'Ürün lansmanı ve sektör görünürlüğü için geliştirilen entegre kreatif kampanya.',
      image: '/images/projects/huglu/magazine-ad-01.png',
    },
  ],
  gallery: [
    { src: '/images/projects/huglu/website-home.png', alt: 'Huğlu website ana sayfa tasarımı', caption: 'Kurumsal web sitesi ana sayfa' },
    { src: '/images/projects/huglu/website-products.png', alt: 'Huğlu website ürünler sayfası tasarımı', caption: 'Kurumsal web sitesi ürünler sayfası' },
    { src: '/images/projects/huglu/stand-nurnberg.png', alt: 'Huğlu Nurnberg fuar standı', caption: 'Nurnberg fuar standı' },
    { src: '/images/projects/huglu/huglu-stand-saha.png', alt: 'Huğlu İDEF fuar standı', caption: 'İDEF fuar standı' },
    { src: '/images/projects/huglu/magazine-ad-01.png', alt: 'Huğlu dergi reklam çalışması bir', caption: 'Dergi reklamı 01' },
    { src: '/images/projects/huglu/magazine-ad-02.png', alt: 'Huğlu dergi reklam çalışması iki', caption: 'Dergi reklamı 02' },
    { src: '/images/projects/huglu/magazine-ad-03.png', alt: 'Huğlu dergi reklam çalışması üç', caption: 'Dergi reklamı 03' },
  ],
  video: {
    title: 'Veyron — Reklam Filmi',
    sectionTitle: 'Reklam Filmi & Lansman',
    description: "Veyron'un lansmanı için hazırladığımız reklam filmi, ürünün marka iletişimini güçlendirmek ve uluslararası fuar sunumlarında kullanılmak üzere üretildi.",
    embedUrl: 'https://www.youtube.com/embed/tzpGsRFOKGI',
  },
  result: {
    headline: '9 yıllık ortaklık, ölçülebilir büyüme.',
    body: 'Huğlu ile sürdürdüğümüz uzun soluklu iş ortaklığı, markanın uluslararası arenada güçlü ve tutarlı bir iletişim diliyle temsil edilmesini sağladı. Her yıl yenilenen stratejilerle büyümeye devam ediyoruz.',
    metrics: [
      { value: '9+', label: 'Yıllık İş Ortaklığı' },
      { value: '12+', label: 'Uluslararası Fuar' },
      { value: '6', label: 'Hizmet Alanı' },
      { value: '1', label: 'Tutarlı Marka Sesi' },
    ],
  },
  relatedProjects: [
    {
      client: 'ISS',
      title: 'Kurumsal iletişim, reklam ve işveren markası yönetimi',
      href: '/case-studies/iss',
      image: '/images/projects/iss/iss-secretcv-odul.png',
      duration: '10 Yıldır İş Ortağımız',
      services: ['PR', 'Kurumsal İletişim', 'Reklam', 'Sosyal Medya', 'Kreatif Tasarım', 'İşveren Markası'],
    },
    {
      client: 'ARAS KARGO',
      title: 'İç iletişimi dijital deneyime dönüştürdük',
      href: '#contact',
      image: '/images/projects/aras/hero.jpg',
      duration: '4 Yıldır İş Ortağımız',
      services: ['İç İletişim', 'Dijital Yayın', 'Editoryal İçerik'],
    },
  ],
};

export default function HugluCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <CaseStudyTemplate data={hugluData} />
    </>
  );
}

