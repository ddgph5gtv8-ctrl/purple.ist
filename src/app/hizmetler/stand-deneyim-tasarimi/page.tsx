import type { Metadata } from 'next';

import { AssetImage } from '@/components/shared/AssetImage';
import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import { ServicePageTemplate, type ServicePageData } from '@/features/service/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Stand ve Deneyim Tasarımı – Fuar ve Etkinlik Tasarımı',
  description:
    'Uluslararası fuarlar ve kurumsal etkinlikler için stand tasarımı, marka deneyimi ve etkinlik iletişimi. Her temas noktasında güçlü bir izlenim bırakın.',
  alternates: { canonical: '/hizmetler/stand-deneyim-tasarimi' },
  openGraph: {
    title: 'Stand ve Deneyim Tasarımı | Purple İletişim',
    description: 'Fuar stanları, lansmanlar ve marka deneyimleri için premium tasarım ve iletişim.',
    url: 'https://purple.ist/hizmetler/stand-deneyim-tasarimi',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Stand ve Deneyim Tasarımı | Purple' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stand ve Deneyim Tasarımı | Purple İletişim',
    description: 'Fuar stanları, lansmanlar ve marka deneyimleri için premium tasarım ve iletişim.',
    images: ['/images/og-image.png'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stand ve Deneyim Tasarımı',
  provider: { '@type': 'Organization', name: 'PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.', url: 'https://purple.ist' },
  description: 'Uluslararası fuarlar ve kurumsal etkinlikler için stand tasarımı ve marka deneyimi.',
  areaServed: ['TR', 'Worldwide'],
  serviceType: 'Exhibition Stand & Brand Experience Design',
};

const data: ServicePageData = {
  hero: {
    badge: 'STAND & DENEYİM TASARIMI',
    title: 'Her Temas Noktasında Güçlü Bir İzlenim.',
    tagline: 'Bir fuar standı yalnızca fiziksel bir alan değildir; markanızın ziyaretçilerle kurduğu en yoğun ve en pahalı iletişim anıdır. Bu anı doğru tasarlamak kritiktir.',
    cta: 'Fuar Deneyiminizi Konuşalım',
  },
  about: {
    headline: 'Marka deneyimi neden yalnızca estetikle ilgili değildir?',
    body: 'Fuar ve etkinlik ortamlarında markaların genellikle yaptığı hata, tasarımı iletişim stratejisinden bağımsız ele almaktır. Görsel açıdan etkileyici bir stand, ziyaretçiyi çeker; ama doğru mesajla karşılaşmadığında bu ilgi somut bir iş sonucuna dönüşmez. Purple olarak her stand ve etkinlik tasarımına bir iletişim projesi olarak yaklaşıyoruz. Ziyaretçi akışından mesajlaşmaya, stand personeli eğitiminden dijital entegrasyona kadar her detayı stratejik bir bütünün parçası olarak tasarlıyoruz.',
  },
  approach: [
    {
      title: 'Strateji ve Hedef Belirleme',
      description: 'Fuarın veya etkinliğin hedefleri nelerdir? Kimlerle görüşülecek, hangi mesajlar iletilecek, ne tür bir deneyim yaratılacak? Bu sorular cevaplanmadan tasarım sürecine başlamıyoruz.',
    },
    {
      title: 'Konsept Geliştirme ve Tasarım',
      description: 'Marka kimliği, strateji ve mekân dinamikleriyle uyumlu bir stand ve deneyim konsepti geliştiriyoruz. 3D görselleştirme ve detaylı planlamayla her öğeyi önceden test ediyoruz.',
    },
    {
      title: 'Üretim ve Uygulama Yönetimi',
      description: 'Tasarımdan üretime, nakliyeden kuruluma kadar tüm süreci koordine ediyoruz. Uluslararası fuarlarda lojistik ve yerel regülasyonları da yönetiyoruz.',
    },
    {
      title: 'Etkinlik İletişimi ve Takip',
      description: 'Fuar öncesi davet iletişimi, etkinlik sırasında sosyal medya ve medya ilişkileri, sonrasında ise lead takibi ve içerik üretimiyle iletişim sürekliliğini sağlıyoruz.',
    },
  ],
  capabilities: [
    'Fuar Stand Konsepti ve Tasarımı',
    '3D Görselleştirme ve Maketi',
    'Stand Üretimi ve Kurulumu',
    'LED Ekran ve Dijital Entegrasyon',
    'Lansman Etkinliği Tasarımı',
    'Kurumsal Etkinlik Organizasyonu',
    'Fuar İletişim Stratejisi',
    'Davet ve Katılımcı İletişimi',
    'Etkinlik Sonrası İçerik Üretimi',
    'Uluslararası Fuar Lojistiği',
  ],
  whyPurple: [
    {
      title: 'Strateji ve Tasarım Bir Arada',
      description: 'Tasarımcılarımız ve stratejistlerimiz baştan itibaren birlikte çalışır. Bu, görsel etkinin her zaman stratejik bir amaca hizmet etmesini garantiler.',
    },
    {
      title: 'Uluslararası Fuar Deneyimi',
      description: 'DSEI, Eurosatory, IDEF ve onlarca yerel fuarda başarılı stand projeleri hayata geçirdik. Her fuarın kendine özgü beklentilerini ve dinamiklerini biliyoruz.',
    },
    {
      title: 'Uçtan Uca Proje Yönetimi',
      description: 'Konsept geliştirmeden kuruluma, etkinlik iletişiminden sonraki içerik üretimine kadar her adımı yönetiyoruz. Müşterimiz tek bir noktayla muhatap olur.',
    },
    {
      title: 'Tekrarlanabilir Sistem',
      description: 'Her fuar için sıfırdan başlamak yerine, önceki projelerden öğrendiklerimizi yeni projelere aktarıyoruz. Bu, hem kaliteyi artırır hem maliyetleri optimize eder.',
    },
  ],
  relatedCaseStudies: [
    {
      client: 'HUĞLU',
      title: 'Uçtan uca marka dönüşümü',
      href: '/case-studies/huglu',
      image: '/images/projects/huglu/website-home.png',
      duration: '9 Yıldır İş Ortağımız',
      services: ['Stand Tasarımı', 'Fuar İletişimi', 'Kreatif Üretim'],
    },
  ],
};

const selectedStandWorks = [
  {
    title: 'Fuar Standı',
    label: 'Huğlu',
    image: '/images/projects/huglu/huglu-stand-saha.png',
    description: 'Fuar sahasında marka mesajını ve ziyaretçi akışını güçlü biçimde destekleyen stand tasarımı.',
  },
  {
    title: 'Stand Tasarımı',
    label: 'Nürnberg',
    image: '/images/projects/huglu/stand-nurnberg.png',
    description: 'Yabancı fuar ortamında marka farkını ortaya çıkaran düşük müdahaleli ama güçlü deneyim tasarımı.',
  },
  {
    title: 'Yapım Aşaması',
    label: 'IWA Huğlu',
    image: '/images/projects/huglu/huglu-iwa-yapim-asamasi.png',
    description: 'Standın üretim ve uygulama sürecini gösteren içerik; ekip çalışması ve mekân hazırlık aşamalarını vurgular.',
  },
  {
    title: 'Nürnberg Detay',
    label: 'IWA Nürnberg',
    image: '/images/projects/huglu/huglu-iwa-nurnberg-detay.png',
    description: 'İç mekân detayları ve ürün-stand etkileşimini güçlendiren kişisel düzenleme örneği.',
  },
  {
    title: 'Nürnberg Genel Görünüm',
    label: 'IWA Nürnberg',
    image: '/images/projects/huglu/huglu-iwa-nurnberg.png',
    description: 'Nürnberg fuar standının genel görünümü; marka anlatımını bütünsel biçimde taşıyan alan düzeni.',
  },
  {
    title: 'IDEF Stand',
    label: 'JAVDES',
    image: '/images/projects/huglu/huglu-javdes-idef.png',
    description: 'IDEF fuarında kullanılan stand yaklaşımı; ürün ve marka mesajını sade ve etkili şekilde sunar.',
  },
  {
    title: 'Sensor & Test Standı',
    label: 'Pavelsis',
    image: '/images/projects/huglu/huglu-pavelsis-sensor-test-nurnberg.png',
    description: 'Teknik ürün görünürlüğünü destekleyen fuar deneyimi; ürün, gösterim ve etkileşim alanlarını dengeler.',
  },
  {
    title: 'Prohunt Standı',
    label: 'Prohunt',
    image: '/images/projects/huglu/huglu-prohunt.png',
    description: 'Fuar standında ürün sunumu ve marka etki alanını yükselten düzenleme.',
  },
  {
    title: 'Saha Fuar Standı',
    label: 'Huğlu',
    image: '/images/projects/huglu/huglu-saha.png',
    description: 'Fuar alanında doğrudan müşteri ve ürün etkileşimini destekleyen, güçlü ve işlevsel bir stand deneyimi.',
  },
  {
    title: 'Saha Detay',
    label: 'Huğlu',
    image: '/images/projects/huglu/huglu-saha-detay.png',
    description: 'Saha standında detay katmanı ve ürün odaklı anlatımın güçlendirildiği çalışma.',
  },
  {
    title: 'Shot Show Standı',
    label: 'Shot Show ABD',
    image: '/images/projects/huglu/huglu-shotshow-abd.png',
    description: 'ABD fuar ortamında tanınan bir stand deneyimi; marka görünürlüğü ve alan akışı üzerine kurulu yaklaşım.',
  },
];

export default function StandDeneyimTasarimiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <Section className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="primary">SEÇİLMİŞ ÇALIŞMALAR</Badge>
            <Heading as="h2" level="h2" className="mt-5 text-balance">
              Seçilmiş Stand & Deneyim Çalışmaları
            </Heading>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Fuar standları, lansman alanları ve marka deneyimleri için tasarladığımız seçilmiş uygulamalar.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {selectedStandWorks.map((work) => {
              const isStandardizedCard = ['Fuar Standı', 'Stand Tasarımı', 'Yapım Aşaması'].includes(work.title);

              return (
                <div
                  key={work.image}
                  className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] shadow-[0_12px_35px_rgba(0,0,0,0.24)]"
                >
                  <div className={`relative overflow-hidden bg-[#0f0f0f] ${isStandardizedCard ? 'aspect-[4/3]' : ''}`}>
                    <AssetImage
                      src={work.image}
                      alt={work.title}
                      width={1200}
                      height={800}
                      quality={80}
                      className={`${isStandardizedCard ? 'h-full w-full object-cover' : 'w-full object-contain'} transition-transform duration-500 group-hover:scale-[1.02]`}
                    />
                  </div>

                  <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">{work.label}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-white">{work.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{work.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <ServicePageTemplate data={data} />
    </>
  );
}
