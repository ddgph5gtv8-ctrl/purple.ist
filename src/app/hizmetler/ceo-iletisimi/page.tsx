import type { Metadata } from 'next';

import { ServicePageTemplate, type ServicePageData } from '@/features/service/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'CEO ve LinkedIn İletişimi – Lider İletişim Stratejisi',
  description:
    'CEO ve yönetici iletişimi, LinkedIn stratejisi ve fikir liderliği geliştirme. Liderinizi markanızın en güçlü iletişim kanalına dönüştürüyoruz.',
  alternates: { canonical: '/hizmetler/ceo-iletisimi' },
  openGraph: {
    title: 'CEO ve LinkedIn İletişimi | Purple İletişim',
    description: 'CEO iletişimi, LinkedIn stratejisi ve fikir liderliği ile liderinizi görünür ve güvenilir kılın.',
    url: 'https://purple.ist/hizmetler/ceo-iletisimi',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'CEO ve LinkedIn İletişimi | Purple' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CEO ve LinkedIn İletişimi | Purple İletişim',
    description: 'CEO iletişimi, LinkedIn stratejisi ve fikir liderliği ile liderinizi görünür ve güvenilir kılın.',
    images: ['/images/og-image.png'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CEO ve LinkedIn İletişimi',
  provider: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  description: 'CEO ve yönetici iletişimi, LinkedIn stratejisi ve fikir liderliği geliştirme.',
  areaServed: 'TR',
  serviceType: 'Executive Communications & LinkedIn Strategy',
};

const data: ServicePageData = {
  hero: {
    badge: 'CEO & LİNKEDİN İLETİŞİMİ',
    title: 'Lideriniz Markanızın En Güçlü Sesi Olabilir.',
    tagline: 'İnsanlar artık logolara değil, insanlara güveniyor. Doğru yönetilen bir CEO iletişimi, kurumsal güvenilirliği, iş ortaklığı fırsatlarını ve marka itibarını doğrudan etkiler.',
    cta: 'Liderlik İletişiminizi Konuşalım',
  },
  about: {
    headline: 'CEO iletişimi neden bir kurumsal yatırımdır?',
    body: 'Bir CEO\'nun dijital görünürlüğü, çalıştığı şirketin kurumsal güvenilirliğiyle doğrudan ilişkilidir. LinkedIn ve diğer profesyonel platformlarda düzenli, stratejik ve özgün içerik üreten liderler; potansiyel müşterilerin, iş ortaklarının ve yeteneklerin dikkatini çeker. Purple olarak CEO iletişimini yalnızca LinkedIn paylaşımı olarak görmüyor, bütüncül bir liderlik iletişim sistemi olarak tasarlıyoruz. Bu sistem; içerik stratejisi, platform yönetimi, medya ilişkileri ve kurumsal iletişimle entegre çalışır.',
  },
  approach: [
    {
      title: 'Liderlik Profili ve Hedef Belirleme',
      description: 'Liderin iletişim hedeflerini, güçlü yönlerini, sektördeki konumunu ve hedef kitlesini analiz ediyoruz. Her CEO için özgün bir iletişim kimliği oluşturuyoruz.',
    },
    {
      title: 'İçerik Stratejisi ve Yayın Takvimi',
      description: 'Aylık içerik planı, tema belirleme ve yayın takvimi hazırlıyoruz. İçerikler; sektörel bakış açıları, kurumsal başarılar ve değer yaratan düşüncelerden oluşur.',
    },
    {
      title: 'İçerik Üretimi ve Yönetimi',
      description: 'AI destekli içerik üretim süreciyle hızlı, kaliteli ve özgün içerikler hazırlıyoruz. Editöryel gözden geçirme ve onay süreci liderin sesini ve bakış açısını korur.',
    },
    {
      title: 'Performans Takibi ve Optimizasyon',
      description: 'Profil görüntüleme, etkileşim oranı, takipçi büyümesi ve ağ genişlemesi metriklerini düzenli raporluyor, stratejiyi sürekli optimize ediyoruz.',
    },
  ],
  capabilities: [
    'LinkedIn Profil Optimizasyonu',
    'İçerik Stratejisi ve Yayın Takvimi',
    'AI Destekli İçerik Üretimi',
    'Fikir Liderliği Makaleleri',
    'Medya Söylemleri ve Röportaj Hazırlığı',
    'Konuşma Notları ve Sunum İçerikleri',
    'Konferans ve Panel İletişimi',
    'Kriz İletişimi Danışmanlığı',
    'Marka Sesi ve Ton Rehberi',
    'Etkinlik Sonrası İçerik Yönetimi',
  ],
  whyPurple: [
    {
      title: 'Özgün Ses, Stratejik Çerçeve',
      description: 'Her liderin iletişim dilini ve bakış açısını koruyarak stratejik bir çerçeveye oturtuyoruz. Klişe ajans içerikleri değil, gerçekten o liderden gelebilecek özgün sesler üretiyoruz.',
    },
    {
      title: 'Kurumsal İletişimle Entegrasyon',
      description: 'CEO iletişimini şirketin kurumsal PR ve marka iletişimiyle tam uyum içinde yönetiyoruz. Tutarsız mesajlaşma riskini sıfıra indiriyoruz.',
    },
    {
      title: 'AI Hızıyla İnsan Kalitesi',
      description: 'İçerik üretiminde yapay zekâdan yararlanırken editöryel kalite kontrolü ve özgünlük denetimini insan ekibimizle sağlıyoruz.',
    },
    {
      title: 'Uzun Vadeli Görünürlük Planlaması',
      description: 'Sonuçlar zaman alır. Birlikte sabırla çalışıyor, her ay gerçek bir değer yaratan içerik üretiyor ve uzun vadeli etki yaratıyoruz.',
    },
  ],
  relatedArticles: [
    {
      title: "CEO'nuz markanızın en güçlü iletişim kanalı olabilir mi?",
      href: '/perspektif/ceo-iletisimi',
      category: 'CEO İletişimi',
      readTime: '4 dk',
    },
    {
      title: 'Yapay zekâ iletişim danışmanlığını nasıl dönüştürüyor?',
      href: '/perspektif/yapay-zeka-ve-danismanlik',
      category: 'AI',
      readTime: '6 dk',
    },
  ],
};

export default function CEOIletisimiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageTemplate data={data} />
    </>
  );
}
