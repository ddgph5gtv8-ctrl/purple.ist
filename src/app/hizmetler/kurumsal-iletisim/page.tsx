import type { Metadata } from 'next';

import { ServicePageTemplate, type ServicePageData } from '@/features/service/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Kurumsal İletişim ve PR – İtibar Yönetimi ve Medya İlişkileri',
  description:
    'Kurumsal PR, medya ilişkileri, kriz yönetimi ve itibar yönetimi alanlarında stratejik danışmanlık. Purple ile markanızın güvenilirliğini güçlendirin.',
  alternates: { canonical: '/hizmetler/kurumsal-iletisim' },
  openGraph: {
    title: 'Kurumsal İletişim ve PR | Purple İletişim',
    description: 'Kurumsal PR, medya ilişkileri ve itibar yönetimi ile markanızın güvenilirliğini güçlendirin.',
    url: 'https://purple.ist/hizmetler/kurumsal-iletisim',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Kurumsal İletişim ve PR | Purple' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kurumsal İletişim ve PR | Purple İletişim',
    description: 'Kurumsal PR, medya ilişkileri ve itibar yönetimi ile markanızın güvenilirliğini güçlendirin.',
    images: ['/images/og-image.png'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kurumsal İletişim ve PR',
  provider: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  description: 'Kurumsal iletişim, PR, medya ilişkileri ve kriz yönetimi.',
  areaServed: 'TR',
  serviceType: 'Corporate Communications & PR',
};

const data: ServicePageData = {
  hero: {
    badge: 'KURUMSAL İLETİŞİM & PR',
    title: 'İtibarınız En Değerli Kurumsal Varlığınızdır.',
    tagline: 'Bir kriz anında ne söyleyeceğiniz değil, kriz öncesinde nasıl bir itibar inşa ettiğiniz belirleyicidir. Kurumsal iletişim, reaktif değil proaktif bir disiplindir.',
    cta: 'İletişim Stratejinizi Konuşalım',
  },
  about: {
    headline: 'Kurumsal iletişim nedir ve neden kritiktir?',
    body: 'Kurumsal iletişim; bir organizasyonun paydaşlarıyla kurduğu her temas noktasını kapsayan stratejik bir disiplindir. Medya ilişkilerinden kriz yönetimine, iç iletişimden sponsor ilişkilerine kadar geniş bir yelpazeyi içerir. Purple olarak kurumsal iletişimi yalnızca basın bülteni göndermek olarak görmüyoruz. İletişim yönetimi, markanın itibarını uzun vadede inşa eden ve koruma altına alan sistematik bir süreçtir. Bu süreç; doğru mesajları, doğru kanallar aracılığıyla, doğru zamanda doğru kitlelere iletmekle başlar.',
  },
  approach: [
    {
      title: 'Paydaş Haritası ve İletişim Analizi',
      description: 'Markanızla ilgili tüm paydaşları (medya, yatırımcılar, çalışanlar, müşteriler, kamuoyu) ve mevcut algıyı haritalandırıyoruz. Her paydaş grubu için farklı mesaj katmanları geliştiriyoruz.',
    },
    {
      title: 'Proaktif Medya İlişkileri',
      description: 'Sektör editörleri, gazeteciler ve yayın organlarıyla uzun vadeli ilişkiler kuruyoruz. Yalnızca haber dönemlerinde değil, sessiz dönemlerde de markanızı gündemde tutuyoruz.',
    },
    {
      title: 'Kriz İletişimi Hazırlığı',
      description: 'Olası kriz senaryolarını önceden değerlendiriyor, yanıt protokolleri ve kriz iletişim kitabı hazırlıyoruz. Kriz anında kaybedilen değeri, hazırlıklı olmak minimuma indirir.',
    },
    {
      title: 'Sürekli İzleme ve Raporlama',
      description: 'Medya takibi, sosyal dinleme ve itibar ölçümü araçlarıyla iletişimin etkisini düzenli raporluyoruz. Veriye dayalı kararlarla stratejiyi sürekli optimize ediyoruz.',
    },
  ],
  capabilities: [
    'Kurumsal PR Stratejisi',
    'Medya İlişkileri Yönetimi',
    'Basın Bülteni ve İçerik Üretimi',
    'Kriz İletişimi',
    'İtibar Yönetimi',
    'Sözcü Eğitimi (Media Training)',
    'Sponsorluk İletişimi',
    'Sektörel Ödül Süreçleri',
    'ESG ve Kurumsal Sorumluluk İletişimi',
    'İç İletişim Stratejisi',
  ],
  whyPurple: [
    {
      title: '10+ Yıllık Kurumsal Deneyim',
      description: 'ISS, Aras Kargo gibi sektör liderleri için PR ve medya ilişkileri, kurumsal iletişim, reklam, sosyal medya, kreatif üretim ve işveren markası çalışmalarını yıllara yayılan bir deneyimle entegre yönetiyoruz.',
    },
    {
      title: 'Kriz Anında Yanınızda',
      description: 'Kriz iletişimi bir paniğin değil hazırlığın ürünüdür. Proaktif protokollerimiz ve hızlı yanıt kapasitemizle kriz anlarında markanızın yanında oluyoruz.',
    },
    {
      title: 'AI ile Güçlendirilmiş İzleme',
      description: 'Yapay zekâ destekli medya ve sosyal dinleme araçlarıyla markanızla ilgili her konuşmayı takip ediyor, erken uyarı sinyallerini anında raporluyoruz.',
    },
    {
      title: 'Stratejiden Uygulamaya Tek Çatı',
      description: 'PR stratejisi, içerik üretimi, medya takibi ve raporlamayı tek bir ekiple yönetiyoruz. Bu bütünleşik yaklaşım, tutarlı ve etkili bir kurumsal ses sağlar.',
    },
  ],
  relatedCaseStudies: [
    {
      client: 'ISS',
      title: 'Kurumsal iletişim, reklam ve işveren markası yönetimi',
      href: '/case-studies/iss',
      image: '/images/projects/iss/secret%20cv%20o%CC%88du%CC%88l.png',
      duration: '10 Yıldır İş Ortağımız',
      services: ['PR', 'Kurumsal İletişim', 'Reklam', 'Sosyal Medya', 'Kreatif Tasarım', 'İşveren Markası'],
    },
    {
      client: 'DÜĞÜN.COM',
      title: 'Marka görünürlüğünü güçlendiren PR yönetimi',
      href: '#contact',
      image: '/images/media-pr/Kanal%20D%20Ana%20hber_d%C3%BC%C4%9F%C3%BCn.com.PNG',
      duration: '3 Yıl İş Ortağımız',
      services: ['Kurumsal PR', 'Basın İletişimi', 'Medya İlişkileri'],
    },
  ],
  relatedArticles: [
    {
      title: 'Savunma Sanayi Markaları İçin İletişim Neden Farklıdır?',
      href: '/perspektif/savunma-sanayi-iletisimi',
      category: 'Kurumsal İletişim',
      readTime: '5 dk',
    },
  ],
};

export default function KurumsalIletisimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageTemplate data={data} />
    </>
  );
}
