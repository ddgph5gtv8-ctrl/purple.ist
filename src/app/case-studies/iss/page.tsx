import type { Metadata } from 'next';

import { CaseStudyTemplate, type CaseStudyData } from '@/features/case-study/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'ISS - Kurumsal İletişim ve İşveren Markası Yönetimi',
  description:
    'PR, kurumsal iletişim, reklam, sosyal medya, kreatif tasarım ve işveren markası alanlarında ISS ile yürüttüğümüz uzun soluklu iletişim ortaklığı.',
  alternates: {
    canonical: '/case-studies/iss',
  },
  openGraph: {
    title: 'ISS - Kurumsal İletişim ve İşveren Markası Yönetimi | Purple',
    description:
      'ISS için PR ve medya ilişkileri, kurumsal iletişim, reklam ve işveren markası çalışmalarını entegre biçimde yönettiğimiz uzun vadeli iş ortaklığı.',
    images: [{ url: '/images/projects/iss/iss-secretcv-odul.png', width: 1200, height: 630, alt: 'ISS işveren markası ilan çalışması' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISS - Kurumsal İletişim ve İşveren Markası Yönetimi | Purple',
    description: 'ISS ile yürüttüğümüz kurumsal iletişim, reklam ve işveren markası çalışmaları.',
    images: ['/images/projects/iss/iss-secretcv-odul.png'],
  },
};

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ISS - Kurumsal İletişim ve İşveren Markası Yönetimi',
  description: 'ISS ile PR, kurumsal iletişim, reklam, sosyal medya, kreatif tasarım ve işveren markası alanlarında yürüttüğümüz uzun soluklu iletişim ortaklığı.',
  author: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  publisher: { '@type': 'Organization', name: 'Purple', logo: { '@type': 'ImageObject', url: 'https://purple.ist/images/purple-logo.png' } },
  image: 'https://purple.ist/images/projects/iss/iss-secretcv-odul.png',
  url: 'https://purple.ist/case-studies/iss',
};

const issData: CaseStudyData = {
  client: 'ISS',
  title: 'Kurumsal iletişimden işveren markasına uzanan çok kanallı iletişim yönetimi',
  duration: '10 Yıldır İş Ortağımız',
  intro:
    'ISS için yalnızca tekil kampanyalar değil; PR ve medya ilişkilerinden kurumsal iletişime, reklamdan sosyal medyaya, kreatif üretimden insan kaynakları iletişimine uzanan bütüncül bir iletişim sistemi kurguladık ve yönettik.',
  sector: 'Tesis Yönetim Hizmetleri',
  partnershipType: 'Uzun Soluklu Kurumsal İletişim Ortaklığı',
  status: 'Aktif İletişim Deneyimi',
  coverImage: '/images/projects/iss/iss-secretcv-odul.png',
  summary: {
    headline: 'Tek bir hizmet başlığından fazlasını yöneten kurumsal iletişim ortaklığı.',
    body: 'ISS ile yürüttüğümüz çalışma; haşere kontrol ve bitki bakım iletişimiyle sınırlı olmayan, farklı iletişim ihtiyaçlarını tek çatı altında yönettiğimiz uzun vadeli bir kurumsal iletişim iş ortaklığına dönüştü. Marka görünürlüğü, kurumsal söylem, sosyal medya, kreatif içerik ve işveren markası alanlarında tutarlı bir iletişim yapısı kurduk.',
  },
  challenge: {
    headline: 'Farklı iletişim ihtiyaçlarını tek ve tutarlı bir marka sesi altında toplamak.',
    body: 'ISS için hedef, yalnızca belirli hizmet başlıklarını anlatmak değil; farklı paydaşlara hitap eden iletişim ihtiyaçlarını tek bir kurumsal dil ve görsel bütünlük içinde yönetmekti. PR ve medya ilişkileri, reklam çalışmaları, içerik üretimi, sosyal medya, insan kaynakları iletişimi ve işveren markası çalışmalarının birbirini destekleyen bir yapıda ilerlemesi gerekiyordu.',
  },
  services: [
    { title: 'PR', description: 'Basın görünürlüğü, medya ilişkileri ve iletişim gündeminin yönetimi.' },
    { title: 'Kurumsal İletişim', description: 'Kurumsal söylem, iletişim materyalleri ve çok paydaşlı iletişim planlaması.' },
    { title: 'Reklam', description: 'Kampanya kurguları ve dikkat çekici ilan çalışmaları.' },
    { title: 'Sosyal Medya', description: 'Marka tonuna uygun dijital içerik akışı ve görünürlük yönetimi.' },
    { title: 'Kreatif Tasarım', description: 'İçerik, ilan, kurumsal yayın ve iletişim materyalleri için görsel üretim.' },
    { title: 'İşveren Markası', description: 'İnsan kaynakları iletişimi ve aday deneyimini güçlendiren marka çalışmaları.' },
    { title: 'Video / İçerik Üretimi', description: 'Özel gün iletişimleri ve marka içerikleri için video ve yaratıcı içerik üretimi.' },
  ],
  approach: [
    {
      title: 'Kurumsal İletişim Omurgasını Kurma',
      description: 'ISS\'in farklı iletişim ihtiyaçlarını tek bir stratejik çerçevede topladık; kurumsal iletişim, medya ilişkileri ve içerik üretimi için tutarlı bir yapı oluşturduk.',
    },
    {
      title: 'Kanal Bazlı İçerik ve Kreatif Üretim',
      description: 'Reklam çalışmaları, sosyal medya içerikleri, kurumsal yayınlar ve iletişim materyallerini aynı görsel dil ve mesaj yapısı içinde ürettik.',
    },
    {
      title: 'İnsan Kaynakları ve İşveren Markası İletişimi',
      description: 'Adaylara ve çalışanlara hitap eden iletişim çalışmalarını, ISS\'in işveren markasını güçlendirecek şekilde yeniden kurguladık.',
    },
    {
      title: 'Görsel Etkiyi Ölçülebilir Başarıya Dönüştürme',
      description: 'Hazırlanan iş ilanları ve kreatif çalışmalarla yalnızca görünürlük değil, sektör tarafından fark edilen ve ödülle tescillenen bir iletişim kalitesi ortaya koyduk.',
    },
  ],
  featuredWork: [],
  gallery: [
    {
      src: '/images/projects/iss/secretcv-odullu-ilan-01.png',
      alt: 'ISS için hazırlanan ödüllü iş ilanı görseli bir',
      caption: 'Ödüllü iş ilanı 01',
      fit: 'contain',
    },
    {
      src: '/images/projects/iss/iss-secretcv-odul.png',
      alt: 'ISS için hazırlanan ödüllü iş ilanı görseli',
      caption: 'Ödüllü iş ilanı',
      fit: 'contain',
    },
    {
      src: '/images/projects/iss/secretcv-odullu-ilan-02.png',
      alt: 'ISS için hazırlanan ödüllü iş ilanı görseli iki',
      caption: 'Ödüllü iş ilanı 02',
      fit: 'contain',
    },
    {
      src: '/images/projects/iss/hyundai-iss-poster-1.jpg',
      alt: 'Hyundai x ISS — #hyundaimutfakta afiş çalışması bir',
      caption: 'Hyundai x ISS — #hyundaimutfakta',
      fit: 'contain',
    },
    {
      src: '/images/projects/iss/hyundai-iss-poster-2.jpg',
      alt: 'Hyundai x ISS — #hyundaimutfakta afiş çalışması iki',
      caption: 'Hyundai x ISS — #hyundaimutfakta',
      fit: 'contain',
    },
    {
      src: '/images/projects/iss/iss-tkn-dergi-1.jpeg',
      alt: 'ISS için hazırlanan TKN Dergi çalışması',
      caption: 'TKN Dergi',
      fit: 'contain',
    },
    {
      src: '/images/projects/iss/iss-surdurulebilirlik-kapak.png',
      alt: 'ISS sürdürülebilirlik şirket raporu kapak tasarımı',
      caption: 'Sürdürülebilirlik Şirket Raporu Özeti',
      fit: 'contain',
    },
  ],
  achievement: {
    title: 'En İyi Görselli İş İlanı',
    subtitle: 'Secretcv HR Summit 2019',
    body: 'ISS Tesis Yönetim Hizmetleri için Purple Creative tarafından hazırlanan ilanlar, En İyi Görselli İş İlanı kategorisinde ödüle layık görüldü.',
    note: 'Ödül, törende Leyla Alaton tarafından ISS\'e takdim edildi.',
    image: '/images/projects/iss/iss-secretcv-odul-toren.jpg',
    imageAlt: 'Secretcv HR Summit 2019 ödül töreninde ISS ödül takdimi',
    caption: 'Secretcv HR Summit 2019 ödül töreni',
  },
  socialContent: {
    title: 'Sosyal Medya & İçerik Üretimi',
    description: 'Özel gün iletişimlerinden marka içeriklerine kadar ISS\'in sosyal medya kanalları için yaratıcı içerikler ve video çalışmaları ürettik.',
    videoTitle: 'Anneler Günü — ISS',
    embedUrl: 'https://www.youtube.com/embed/mqzaNtMQg8E',
  },
  result: {
    headline: 'Kurumsal görünürlüğü ve işveren markasını aynı zeminde güçlendiren iş ortaklığı.',
    body: 'ISS ile yürüttüğümüz uzun soluklu çalışmalar, markanın yalnızca dış iletişimde değil; kurum içi iletişim, insan kaynakları iletişimi ve işveren markası alanlarında da daha güçlü ve tutarlı bir görünürlük kazanmasına katkı sağladı. Ödülle tescillenen ilan çalışmaları da bu çok katmanlı iletişim yaklaşımının somut çıktılarından biri oldu.',
  },
};

export default function IssCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <CaseStudyTemplate data={issData} />
    </>
  );
}