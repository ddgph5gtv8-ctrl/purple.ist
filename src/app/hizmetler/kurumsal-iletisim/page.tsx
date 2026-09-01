import type { Metadata } from 'next';

import { AssetImage } from '@/components/shared/AssetImage';
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

const makeMediaPath = (filename: string) => `/images/media-pr/${encodeURIComponent(filename)}`;

const mediaGallery = [
  {
    title: 'A Para',
    src: makeMediaPath('ISS - A Para Özel Haber Çalışması.jpeg'),
    alt: 'ISS A Para özel haber çalışması',
  },
  {
    title: 'Fox TV',
    src: makeMediaPath('Fox TV_Düğün.com ceo Haber.PNG'),
    alt: 'Fox TV Düğün.com CEO haber çalışması',
  },
  {
    title: 'Kanal D',
    src: makeMediaPath('Kanal D Ana hber_düğün.com.PNG'),
    alt: 'Kanal D Düğün.com haber çalışması',
  },
  {
    title: 'Cüneyt Özdemir',
    src: makeMediaPath('düğün.com Cüneyt Özdemir Konuk.PNG'),
    alt: 'Düğün.com Cüneyt Özdemir konuk çalışması',
  },
  {
    title: 'Capital',
    src: makeMediaPath('Capital Dergisi ISS İK Özel Haber.PNG'),
    alt: 'Capital Dergisi ISS özel haber çalışması',
  },
  {
    title: 'Milliyet',
    src: makeMediaPath('Milliyet_ ISS Türkiye CEO Cavit Habib Özel Haber.jpeg'),
    alt: 'Milliyet ISS CEO Cavit Habib özel haber',
  },
  {
    title: 'InStyle',
    src: makeMediaPath('Reis Kuyumculuk Instyle Dergi HABER .PNG'),
    alt: 'Reis Kuyumculuk InStyle haber çalışması',
  },
  {
    title: 'Fortune Türkiye',
    src: makeMediaPath('ISS Group CEO Fortune Dergisi Özel Haber.PNG'),
    alt: 'ISS Group CEO Fortune Dergisi özel haber',
  },
];

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
      image: '/images/projects/duguncom/duguncom-kanal-d.png',
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

      <section className="border-t border-white/10 bg-[#050505] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">MEDYA GÖRÜNÜRLÜĞÜ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              Mevcut basın ve medya görselleri
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {mediaGallery.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0d0d0d] shadow-[0_12px_35px_rgba(0,0,0,0.24)]"
              >
                <AssetImage
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={760}
                  quality={80}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="border-t border-white/10 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">MEDIA</p>
                  <h3 className="mt-2 text-base font-medium tracking-[-0.02em] text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
