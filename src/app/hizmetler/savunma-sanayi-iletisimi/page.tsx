import type { Metadata } from 'next';

import { ServicePageTemplate, type ServicePageData } from '@/features/service/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Savunma Sanayi İletişimi – B2B ve Uluslararası İletişim Stratejisi',
  description:
    'Savunma sanayi markaları için uluslararası iletişim, fuar yönetimi, B2B büyüme stratejileri ve kurumsal PR. Purple, sektörün güvendiği iletişim danışmanıdır.',
  alternates: { canonical: '/hizmetler/savunma-sanayi-iletisimi' },
  openGraph: {
    title: 'Savunma Sanayi İletişimi | Purple İletişim',
    description: 'Savunma sektörü için uluslararası iletişim, fuar yönetimi ve B2B büyüme stratejileri.',
    url: 'https://purple.ist/hizmetler/savunma-sanayi-iletisimi',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Savunma Sanayi İletişimi | Purple' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savunma Sanayi İletişimi | Purple İletişim',
    description: 'Savunma sektörü için uluslararası iletişim, fuar yönetimi ve B2B büyüme stratejileri.',
    images: ['/images/og-image.png'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Savunma Sanayi İletişimi',
  provider: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  description: 'Savunma sanayi markaları için uluslararası iletişim, fuar yönetimi ve B2B büyüme stratejileri.',
  areaServed: ['TR', 'Worldwide'],
  serviceType: 'Defense Industry Communications',
};

const data: ServicePageData = {
  hero: {
    badge: 'SAVUNMA SANAYİ İLETİŞİMİ',
    title: 'Savunma Sektöründe Güven, Söylemden Önce Gelir.',
    tagline: 'Savunma sanayi iletişimi; teknik uzmanlık, uluslararası hassasiyet ve uzun vadeli güven inşasını gerektiren özgün bir disiplindir. Standart ajans yaklaşımları bu sektörde çalışmaz.',
    cta: 'Savunma Sanayi İletişiminizi Konuşalım',
  },
  about: {
    headline: 'Savunma sanayi iletişimi neden farklıdır?',
    body: 'Savunma sektöründe iletişim; teknik doğruluk, diplomatik hassasiyet ve sıkı regülasyon gerektirir. Yanlış bir mesaj hem ihracat süreçlerini hem kurumsal itibarı hem de kritik ilişkileri etkileyebilir. Purple, bu sektörde yıllarca çalışarak özgün bir uzmanlık geliştirmiştir. DSEI, Eurosatory, IDEF ve diğer uluslararası savunma fuarlarında Türk markaları temsil ettik. Uluslararası alıcılar, hükümet paydaşları ve medya ile doğru mesajları doğru kanallardan ilettik.',
  },
  approach: [
    {
      title: 'Pazar ve Paydaş Analizi',
      description: 'Hedef pazarların regülatif ortamını, alıcı profillerini ve rekabetçi konumlanmayı analiz ediyoruz. Her pazar için özelleştirilmiş bir iletişim yaklaşımı geliştiriyoruz.',
    },
    {
      title: 'Uluslararası İletişim Stratejisi',
      description: 'İngilizce ve çok dilli iletişim materyalleri, kurumsal sunum dosyaları ve hedef pazara özel mesaj mimarisi hazırlıyoruz. Diplomatik duyarlılıkları ve ihracat kısıtlamalarını gözetiyor, mesajları buna göre yapılandırıyoruz.',
    },
    {
      title: 'Fuar ve Etkinlik İletişimi',
      description: 'Uluslararası savunma fuarları için stand konsepti, medya ilişkileri, B2B toplantı organizasyonu ve etkinlik sonrası takip süreçlerini yönetiyoruz.',
    },
    {
      title: 'B2B Görünürlük ve İtibar Yönetimi',
      description: 'Sektörel yayınlar, think-tank kuruluşları ve politika yapıcılarla ilişki geliştiriyor, markanızın uluslararası arenada güvenilir bir oyuncu olarak konumlanmasını sağlıyoruz.',
    },
  ],
  capabilities: [
    'Uluslararası İletişim Stratejisi',
    'Savunma Fuarı Yönetimi (DSEI, IDEF, Eurosatory)',
    'Çok Dilli İçerik Üretimi',
    'B2B Satış Destek Materyalleri',
    'Kurumsal Sunum ve Pitch Dosyaları',
    'Hükümet ve Kurumsal Paydaş İletişimi',
    'Sektörel Medya İlişkileri',
    'İhracat Pazarlaması Danışmanlığı',
    'Stand ve Marka Deneyimi Tasarımı',
    'Kriz İletişimi',
  ],
  whyPurple: [
    {
      title: 'Sektör Uzmanlığı',
      description: 'Savunma sanayiinde yıllarca çalışarak özgün bir uzmanlık geliştirdik. Teknik terminolojiyi, ihracat regülasyonlarını ve sektörün kültürünü anlıyoruz.',
    },
    {
      title: 'Uluslararası Fuar Deneyimi',
      description: 'DSEI, Eurosatory ve IDEF gibi dünyanın en prestijli savunma fuarlarında Türk markaları başarıyla temsil ettik. Her fuarın kendine özgü dinamiklerini biliyoruz.',
    },
    {
      title: 'Tek Çatıda Tam Hizmet',
      description: 'Strateji, içerik üretimi, stand tasarımı, medya ilişkileri ve B2B organizasyonunu tek bir ekiple yönetiyoruz. Bu entegrasyon, tutarlı ve etkili bir kurumsal söylem sağlar.',
    },
    {
      title: 'Güven Önce Gelir',
      description: 'Bu sektörde abartı ve boş vaatler işe yaramaz. Markanızın güvenilirliğini somut iletişim çalışmalarıyla, uzun vadeli ve sürdürülebilir biçimde inşa ediyoruz.',
    },
  ],
  relatedCaseStudies: [
    {
      client: 'HUĞLU',
      title: 'Uçtan uca marka dönüşümü',
      href: '/case-studies/huglu',
      image: '/images/projects/huglu/website-home.png',
      duration: '9 Yıldır İş Ortağımız',
      services: ['Marka Stratejisi', 'Fuar İletişimi', 'Stand Tasarımı'],
    },
  ],
  relatedArticles: [
    {
      title: 'Savunma Sanayi Markaları İçin İletişim Neden Farklıdır?',
      href: '/perspektif/savunma-sanayi-iletisimi',
      category: 'Savunma Sanayi',
      readTime: '5 dk',
    },
  ],
};

export default function SavunmaSanayiiletisimiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageTemplate data={data} />
    </>
  );
}
