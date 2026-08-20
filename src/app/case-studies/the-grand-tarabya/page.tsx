import type { Metadata } from 'next';

import { CaseStudyTemplate, type CaseStudyData } from '@/features/case-study/CaseStudyTemplate';

export const metadata: Metadata = {
  title: 'THE GRAND TARABYA – Marka İletişimi & Kreatif Çalışmalar',
  description:
    'The Grand Tarabya için hazırlanan ilan, sosyal medya, poster ve e-posta/newsletter tasarımlarından seçilmiş kreatif çalışmalar.',
  alternates: {
    canonical: '/case-studies/the-grand-tarabya',
  },
  openGraph: {
    title: 'THE GRAND TARABYA – Marka İletişimi & Kreatif Çalışmalar | Purple',
    description:
      'The Grand Tarabya için hazırlanan ilan, sosyal medya, poster ve e-posta/newsletter tasarımlarından seçilmiş kreatif çalışmalar.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'THE GRAND TARABYA – Purple İletişim' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE GRAND TARABYA – Marka İletişimi & Kreatif Çalışmalar | Purple',
    description: 'The Grand Tarabya için hazırlanan ilan, sosyal medya, poster ve e-posta/newsletter tasarımlarından seçilmiş kreatif çalışmalar.',
    images: ['/images/og-image.png'],
  },
};

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'THE GRAND TARABYA – Marka İletişimi & Kreatif Çalışmalar',
  description: 'The Grand Tarabya için hazırlanan ilan, sosyal medya, poster ve e-posta/newsletter tasarımlarından seçilmiş kreatif çalışmalar.',
  author: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  publisher: { '@type': 'Organization', name: 'Purple', logo: { '@type': 'ImageObject', url: 'https://purple.ist/images/purple-logo.png' } },
  image: 'https://purple.ist/images/og-image.png',
  url: 'https://purple.ist/case-studies/the-grand-tarabya',
};

const grandTarabyaData: CaseStudyData = {
  client: 'THE GRAND TARABYA',
  title: 'Marka İletişimi & Kreatif Çalışmalar',
  duration: 'Kreatif Proje',
  intro:
    'The Grand Tarabya için hazırlanan ilan, sosyal medya, poster ve e-posta/newsletter tasarımlarından seçilmiş kreatif çalışmalar.',
  sector: 'Turizm & Otel',
  partnershipType: 'Marka İletişimi',
  status: 'Kreatif Çalışma',
  coverImage: '/images/projects/The%20Grand%20Tarabya/hero.jpg',
  summary: {
    headline: 'Bir otel markasının yaşam tarzı anlatısını yaratmak.',
    body:
      'The Grand Tarabya için geliştirdiğimiz iletişim çalışmaları, konuma dair premium algıyı uygun kompozisyon, sosyal anlatım ve doğru görsel diliyle güçlendirdi. İlan, sosyal medya, poster ve e-posta/newsletter tasarımlarını tek bir marka sesi üzerinden birleştirdik.',
  },
  challenge: {
    headline: 'Standart pazarlama anlatımının ötesinde bir kurgu gerekiyordu.',
    body:
      'The Grand Tarabya’nın değerini yalnızca konum ve hizmet kalitesi olarak anlatmak yetersizdi. Marka, yaşam tarzı, atmosfer ve misafir deneyimi üzerinden daha güçlü ve çekici bir dil ile görünmeliydi. Bu nedenle kampanya görsellerini tek bir premium anlatı altında birleştirdik.',
  },
  services: [
    { title: 'Marka İletişimi', description: 'Otelin premium marka kimliğini ve yaşam tarzı anlatısını güçlendiren iletişim yaklaşımı.' },
    { title: 'Kreatif Çalışmalar', description: 'İlan, sosyal medya, poster ve elektronik yayın tasarımlarını kapsayan yaratıcı üretim.' },
    { title: 'Görsel Kompozisyon', description: 'Marka değerlerinin doğru estetik ve mesaj bütünlüğüyle aktarılması.' },
    { title: 'Sosyal Medya', description: 'Instagram ve diğer dijital mecralarda güçlü, tutarlı görsel anlatı oluşturma.' },
    { title: 'Newsletter & E-posta', description: 'Müşteri iletişimini premium bir dille destekleyen dijital yayın tasarımları.' },
  ],
  approach: [
    {
      title: 'Marka Anlatısı ve Hikâye Çerçevesi',
      description: 'The Grand Tarabya’nın konumu, atmosferi ve benzer bir yaşam tarzını yansıtan ana anlatı çerçevesini kurduk.',
    },
    {
      title: 'Kanal Bazlı Görsel Dili',
      description: 'İlan, sosyal medya, poster ve e-posta tasarımlarında aynı premium görsel dili koruyarak iletişim bütünlüğünü sağladık.',
    },
    {
      title: 'Premium Görsel Kompozisyon',
      description: 'Görsellerin estetik düzeni, hissiyatı ve ürünün değerini güçlü biçimde aktaracak şekilde kompoze ettik.',
    },
    {
      title: 'Dijital ve Oda Dışı Çekicilik',
      description: 'Hedef kitleye ulaşan her kanal için farklı formatlara uygun ama aynı marka kimliği taşıyan görsel çalışmalar hazırladık.',
    },
  ],
  featuredWork: [
    {
      title: 'OUTDOOR REKLAM',
      description: 'Konum, atmosfer ve premium deneyimi öne çıkaran outdoor reklam çalışması.',
      image: '/images/projects/The%20Grand%20Tarabya/outdoor%20ad.png',
    },
    {
      title: 'SOSYAL MEDYA',
      description: 'Instagram ve çevrim içi iletişim için kurumsal bir marka görünümü.',
      image: '/images/projects/The%20Grand%20Tarabya/insta%20post.png',
    },
    {
      title: 'DÜNYA ÇEVRE GÜNÜ FARKINDALIK GÖRSELİ',
      description: 'Dünya Çevre Günü için hazırlanan sosyal medya postu ve otel içi display alanlarında kullanılan farkındalık görseli.',
      image: '/images/projects/The%20Grand%20Tarabya/Du%CC%88nya%20C%CC%A7evre%20Gu%CC%88nu%CC%88%20post.png',
    },
  ],
  gallery: [
    { src: '/images/projects/The%20Grand%20Tarabya/outdoor%20ad.png', alt: 'The Grand Tarabya outdoor reklam tasarımı', caption: 'OUTDOOR REKLAM', fit: 'contain' },
    { src: '/images/projects/The%20Grand%20Tarabya/insta%20post.png', alt: 'The Grand Tarabya sosyal medya postu', caption: 'SOSYAL MEDYA', fit: 'cover' },
    { src: '/images/projects/The%20Grand%20Tarabya/Du%CC%88nya%20C%CC%A7evre%20Gu%CC%88nu%CC%88%20post.png', alt: 'The Grand Tarabya Dünya Çevre Günü farkındalık görseli', caption: 'DÜNYA ÇEVRE GÜNÜ', fit: 'cover' },
    { src: '/images/projects/The%20Grand%20Tarabya/The%20Grand%20Tarabya%20Magazine%20Ads.PNG', alt: 'The Grand Tarabya magazine ad çalışması', caption: 'İLAN / MAGAZİN REKLAMI', fit: 'contain' },
    { src: '/images/projects/The%20Grand%20Tarabya/mailing.jpg', alt: 'The Grand Tarabya e-posta/newsletter tasarımı', caption: 'NEWSLETTER', fit: 'cover' },
  ],
  result: {
    headline: 'Premium yaşam tarzı anlatısı birleştirildi.',
    body:
      'The Grand Tarabya için oluşturulan iletişim çalışmaları, farklı kanallarda tutarlı bir marka hissi oluşturdu ve otelin değerini daha güçlü biçimde görünür kıldı.',
  },
};

export default function GrandTarabyaCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <CaseStudyTemplate data={grandTarabyaData} />
    </>
  );
}
