import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

type PackageKey = 'baslangic' | 'buyume' | 'etki';

const packageItems = {
  baslangic: {
    name: 'Purple Başlangıç',
    promise: 'İletişim düzeninizi kurun.',
    price: '50.000 TL + KDV / ay',
    hizmetKapsami: [
      'Haber & veri madenciliği',
      'Basılı ve dijital medya servisi',
      'İçerik planlama ve yayın yönetimi',
      'Aylık toplantı ve raporlama',
    ],
    aylikTeslimatlar: [
      '8 sosyal medya içeriği / ay',
      '2 AI destekli kısa video / ay',
      '1 basın bülteni çalışması / ay',
    ],
  },
  buyume: {
    name: 'Purple Büyüme',
    promise: 'Görünürlüğünüzü ve lider iletişiminizi büyütün.',
    price: '90.000 TL + KDV / ay',
    hizmetKapsami: [
      'İçerik stratejisi ve performans değerlendirmesi',
      'Proaktif medya ilişkileri ve özel haber çalışmaları',
      'Basın sözcüsü belirlenmesi ve konu başlıklarının çıkarılması',
      'CEO iletişim stratejisi',
    ],
    aylikTeslimatlar: [
      '12 sosyal medya içeriği / ay',
      '4 AI destekli kısa video / ay',
      '1 basın bülteni çalışması / ay',
      '1 TV haber çalışması / ay',
      '4 CEO LinkedIn içeriği / ay',
    ],
  },
  etki: {
    name: 'Purple Etki',
    promise: 'Markanızın tüm iletişim temas noktalarını tek bir strateji altında yönetin.',
    price: '150.000 TL + KDV\'den başlayan',
    hizmetKapsami: [
      'İletişim stratejisi ve marka konumlandırmasının iletişime aktarılması',
      'Stratejik PR, medya ilişkileri ve itibar yönetimi',
      'Executive iletişim ve thought leadership',
      'Kreatif kampanyalar, dijital iletişim, iç iletişim ve işveren markası',
      'Fuar iletişimi, stand konsepti ve marka deneyimi',
      'Uluslararası iletişim ve kriz iletişimi danışmanlığı',
    ],
    aylikTeslimatlar: [
      'Aylık teslimat kapsamı, markanın önceliklerine göre proje bazlı planlanır.',
      'Süreç boyunca düzenli yönetim toplantısı ve raporlama yapılır.',
    ],
  },
} as const satisfies Record<PackageKey, {
  name: string;
  promise: string;
  price: string;
  hizmetKapsami: string[];
  aylikTeslimatlar: string[];
}>;

const packageDisi = [
  'Stand üretimi / inşaatı',
  'Teknik ekipman, LED, mobilya',
  'Nakliye, kurulum / söküm',
  'Baskı ve fiziksel üretimler',
  'Büyük ölçekli video prodüksiyon ve reklam filmi (TVC)',
  'Profesyonel fotoğraf / video çekimleri',
  'Medya satın alma',
  'Üçüncü taraf tedarik maliyetleri',
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paket: string }>;
}): Promise<Metadata> {
  const { paket } = await params;
  const item = packageItems[paket as PackageKey];

  if (!item) {
    return {
      title: 'Paket Bulunamadı',
      alternates: { canonical: '/buyume-plani' },
    };
  }

  return {
    title: `${item.name} Paketi`,
    description: `${item.name} paketi detayları, fiyatı ve kapsamı.`,
    alternates: {
      canonical: `/buyume-plani/${paket}`,
    },
    openGraph: {
      title: `${item.name} Paketi | Purple`,
      description: `${item.promise} Fiyat: ${item.price}`,
      url: `https://purple.ist/buyume-plani/${paket}`,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: item.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.name} Paketi | Purple`,
      description: item.promise,
      images: ['/images/og-image.png'],
    },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ paket: string }>;
}) {
  const { paket } = await params;
  const item = packageItems[paket as PackageKey];

  if (!item) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-white">
      <Header />
      <main id="main-content" className="flex-1 bg-[#050505] text-white">
        <section className="border-t border-white/10 bg-[#050505] pb-16 pt-20 sm:pb-20 lg:pt-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:px-8">
            <Link
              href="/buyume-plani"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              ← Büyüme Planına Dön
            </Link>

            <div className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-7 sm:p-9">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">PAKET DETAYI</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">{item.name}</h1>
              <p className="mt-4 text-base leading-7 text-zinc-300">{item.promise}</p>
              <p className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-white">{item.price}</p>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5">
                  <h2 className="text-lg font-semibold text-white">Hizmet Kapsamı</h2>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
                    {item.hizmetKapsami.map((entry) => (
                      <li key={entry}>• {entry}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5">
                  <h2 className="text-lg font-semibold text-white">Aylık Teslimatlar</h2>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
                    {item.aylikTeslimatlar.map((entry) => (
                      <li key={entry}>• {entry}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5">
                <h2 className="text-lg font-semibold text-white">Paket Dışında Kalan Üretim / Masraflar</h2>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-zinc-300 sm:grid-cols-2">
                  {packageDisi.map((entry) => (
                    <p key={entry}>• {entry}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  Purple ile Görüşelim
                </Link>
                <Link
                  href="/buyume-plani"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/10"
                >
                  ← Büyüme Planına Dön
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
