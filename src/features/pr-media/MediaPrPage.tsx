'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import { Section } from '@/components/shared/Section';

type MediaItem = {
  title: string;
  organization: string;
  src: string;
  alt: string;
  description: string;
};

type SectionGroup = {
  id: string;
  title: string;
  description: string;
  items: MediaItem[];
};

const normalizeAssetKey = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const toAsset = (filename: string) => {
  const actualFiles = [
    'Capital Dergisi ISS İK Özel Haber.PNG',
    'Celtic PUB Basın Buluşması Etkinlik.PNG',
    'düğün.com CEO Emek kırbıyık EKO Türk TV özel haber çalışması.jpeg',
    'düğün.com Cüneyt Özdemir Konuk.PNG',
    'düğün.com Posta Gazetesi Haber.PNG',
    'Fox TV_Düğün.com ceo Haber.PNG',
    'Head Hunter_ISS İK Özel Haber Çalışması.jpeg',
    'ISS _ Dünya Gazetesi Özel Haber Çalışması.PNG',
    'ISS - A Para Özel Haber Çalışması.jpeg',
    'ISS CİNSİYETSİZ İŞLER HABER ÇALIŞMASI_EKONOMİST DERGİSİ.jpeg',
    'ISS Group CEO Fortune Dergisi Özel Haber.PNG',
    'ISS Türkiye Ceo Cavit Habib Özel Haber_Milliyet.jpeg',
    'ISS Türkiye CEO CAVİT HABİB_CAPİTAL DERGİ ÖZEL HABER.jpeg',
    'Kanal D Ana hber_düğün.com.PNG',
    'Loris Lansman Hürriyet.PNG',
    'LORİS Lansman Parekende Dergisi Özel Haber.jpeg',
    'Milliyet Gazetesi Loris Lansman Haber.PNG',
    'Milliyet_ ISS Türkiye CEO Cavit Habib Özel Haber.jpeg',
    'Reis Kuyumculuk Instyle Dergi HABER .PNG',
    'UBM Rotaforte TV Yayın.PNG',
  ];

  const actualAssetMap = Object.fromEntries(
    actualFiles.map((file) => [normalizeAssetKey(file), `/images/media-pr/${file}`]),
  );

  return actualAssetMap[normalizeAssetKey(filename)] ?? `/images/media-pr/${filename}`;
};

const sectionGroups: SectionGroup[] = [
  {
    id: 'tv-video',
    title: 'TV & VIDEO',
    description: 'Televizyon programları, röportajlar ve video yayınlarında gerçekleşen medya çalışmaları.',
    items: [
      { title: 'A Para', organization: 'A Para', src: toAsset('ISS - A Para Özel Haber Çalışması.jpeg'), alt: 'ISS A Para özel haber çalışması', description: 'ISS’in yatırım ve liderlik mesajını güçlendiren özel haber çalışması.' },
      { title: 'Fox TV', organization: 'Fox TV', src: toAsset('Fox TV_Düğün.com ceo Haber.PNG'), alt: 'Fox TV Düğün.com CEO haber çalışması', description: 'Düğün.com CEO iletişimi ve marka görünürlüğünü öne çıkaran TV röportajı.' },
      { title: 'Kanal D', organization: 'Kanal D', src: toAsset('Kanal D Ana hber_düğün.com.PNG'), alt: 'Kanal D Düğün.com haber çalışması', description: 'Düğün.com’un marka gücünü ve operasyonel hikâyesini yansıtan televizyon haberi.' },
      { title: 'UBM Rotaforte', organization: 'UBM Rotaforte', src: toAsset('UBM Rotaforte TV Yayın.PNG'), alt: 'UBM Rotaforte TV yayın çalışması', description: 'Ürün lansmanı ve müşteri deneyimini öne çıkaran TV yayın görünümü.' },
      { title: 'Eko Türk TV', organization: 'Eko Türk TV', src: toAsset('düğün.com CEO Emek kırbıyık EKO Türk TV özel haber çalışması.jpeg'), alt: 'Düğün.com CEO Eko Türk TV özel haber', description: 'CEO söylemini ve marka değerlerini güçlü biçimde yansıtan özel haber.' },
      { title: 'Cüneyt Özdemir', organization: 'Düğün.com', src: toAsset('düğün.com Cüneyt Özdemir Konuk.PNG'), alt: 'Düğün.com Cüneyt Özdemir konuk çalışması', description: 'Düğün.com’un marka anlatısını ve lider iletişim gücünü öne çıkaran YouTube haber konukluğu.' },
      { title: 'Basın Buluşması', organization: 'Celtic Pub', src: toAsset('Celtic PUB Basın Buluşması Etkinlik.PNG'), alt: 'Celtic Pub basın buluşması etkinliği', description: 'Celtic Pub’un etkinlik ve marka deneyimini anlatan basın buluşması çalışması.' },
    ],
  },
  {
    id: 'gazete',
    title: 'GAZETE',
    description: 'Ulusal ve sektörel basında gerçekleşen haber, röportaj ve özel içerik çalışmaları.',
    items: [
      { title: 'Milliyet', organization: 'Milliyet', src: toAsset('Milliyet_ ISS Türkiye CEO Cavit Habib Özel Haber.jpeg'), alt: 'Milliyet ISS CEO Cavit Habib özel haber', description: 'ISS’in kurumsal liderlik ve görünürlüğünü güçlendiren özel haber.' },
      { title: 'Dünya', organization: 'Dünya', src: toAsset('ISS _ Dünya Gazetesi Özel Haber Çalışması.PNG'), alt: 'Dünya Gazetesi ISS özel haber çalışması', description: 'ISS’in kurumsal ve sektör odaklı medya görünürlüğünü artıran haber.' },
      { title: 'Hürriyet', organization: 'Hürriyet', src: toAsset('Loris Lansman Hürriyet.PNG'), alt: 'Hürriyet Loris lansman haber çalışması', description: 'Loris markasının lansman ve ürün anlatımını güçlendiren basın yansıması.' },
      { title: 'Milliyet', organization: 'Milliyet', src: toAsset('Milliyet Gazetesi Loris Lansman Haber.PNG'), alt: 'Milliyet Loris Lansman haber çalışması', description: 'Loris lansmanına yönelik basın görünürlüğünü artıran haber çalışması.' },
      { title: 'Posta', organization: 'Posta', src: toAsset('düğün.com Posta Gazetesi Haber.PNG'), alt: 'Posta Düğün.com haber çalışması', description: 'Düğün.com’un medya görünürlüğünü artıran günlük basın yansısı.' },
      { title: 'Milliyet', organization: 'Milliyet', src: toAsset('ISS Türkiye Ceo Cavit Habib Özel Haber_Milliyet.jpeg'), alt: 'Milliyet ISS Türkiye CEO Cavit Habib özel haber', description: 'ISS’in Türkiye liderliği ve kurumsal iletişimini öne çıkaran özel haber.' },
    ],
  },
  {
    id: 'dergi',
    title: 'DERGİ',
    description: 'Sektörel ve iş dünyası yayınlarında yer alan röportaj, özel haber ve dosya çalışmaları.',
    items: [
      { title: 'Capital', organization: 'Capital', src: toAsset('Capital Dergisi ISS İK Özel Haber.PNG'), alt: 'Capital ISS İK özel haber çalışması', description: 'ISS’in insan kaynakları ve kurumsal iletişim anlatımını öne çıkaran özel haber.' },
      { title: 'Fortune Türkiye', organization: 'Fortune Türkiye', src: toAsset('ISS Group CEO Fortune Dergisi Özel Haber.PNG'), alt: 'Fortune ISS Group CEO özel haber', description: 'ISS Group CEO’sunun güçlü liderlik anlatısını güçlendiren dergi haberi.' },
      { title: 'Ekonomist', organization: 'Ekonomist', src: toAsset('ISS CİNSİYETSİZ İŞLER HABER ÇALIŞMASI_EKONOMİST DERGİSİ.jpeg'), alt: 'Ekonomist ISS çalışması', description: 'Kurumsal değerleri ve iş dünyası görünürlüğünü öne çıkaran dergi yansıması.' },
      { title: 'Head Hunter', organization: 'Head Hunter', src: toAsset('Head Hunter_ISS İK Özel Haber Çalışması.jpeg'), alt: 'Head Hunter ISS İK özel haber çalışması', description: 'Reis Kuyumculuk’un marka ve sektör iletişimine dair basın yansıması.' },
      { title: 'InStyle', organization: 'InStyle', src: toAsset('Reis Kuyumculuk Instyle Dergi HABER .PNG'), alt: 'InStyle Reis Kuyumculuk haber çalışması', description: 'Reis Kuyumculuk CEO’su Hakan Gündoğdu ile marka, tasarım ve gelecek üzerine röportaj.' },
      { title: 'Pazarlama Dergisi', organization: 'Pazarlama Dergisi', src: toAsset('LORİS Lansman Parekende Dergisi Özel Haber.jpeg'), alt: 'Loris lansman Parekende Dergisi özel haber', description: 'Loris Parfüm’ün yeni mağaza yatırımı ve büyüme stratejisine dair haber.' },
      { title: 'Capital', organization: 'Capital', src: toAsset('ISS Türkiye CEO CAVİT HABİB_CAPİTAL DERGİ ÖZEL HABER.jpeg'), alt: 'Capital ISS Türkiye CEO Cavit Habib özel haber', description: 'ISS’in Türkiye liderlik ve kurumsal iletişim anlatısını güçlendiren özel haber.' },
    ],
  },
];

export function MediaPrPage() {
  const [selected, setSelected] = useState<MediaItem | null>(null);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <main className="bg-[#050505] text-white">
      <Section className="pb-20 pt-20 md:pt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <Badge variant="primary">PR & MEDYA</Badge>
            <Heading as="h1" level="h1" className="mt-5 text-balance text-white">
              PR & Medya
            </Heading>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Markaların görünürlüğünü güçlendiren medya ilişkileri, basın çalışmaları, lider iletişimi ve etkinlik PR süreçlerinden seçilmiş medya yansımaları.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="mt-14 rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)] md:p-10"
          >
            <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">MEDIA ARCHIVE</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Görünürlüğün ötesinde, doğru hikâyenin doğru yerde görünmesini sağlıyoruz.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              Markaların görünürlüğünü güçlendiren medya ilişkileri, basın çalışmaları, lider iletişimi ve etkinlik PR süreçlerinden seçilmiş medya yansımaları.
            </p>
          </motion.div>

          <div className="mt-20 space-y-16">
            {sectionGroups.map((group, index) => (
              <motion.section
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                className="border-t border-white/10 pt-12 first:border-t-0 first:pt-0"
              >
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">Medya Arşivi</p>
                    <Heading as="h2" level="h2" className="mt-3 text-white">
                      {group.title}
                    </Heading>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-zinc-400">{group.description}</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item) => (
                    <button
                      key={`${group.id}-${item.src}`}
                      type="button"
                      onClick={() => setSelected(item)}
                      className="group block w-full overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0d0d0d] text-left shadow-[0_14px_44px_rgba(0,0,0,0.22)] transition-all duration-[230ms] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.38)]"
                    >
                      <div className="relative overflow-hidden bg-white">
                        {item.organization === 'InStyle' ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                          />
                        ) : (
                          <Image
                            src={item.src}
                            alt={item.alt}
                            width={1200}
                            height={760}
                            className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                          />
                        )}
                        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/10 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
                          <span className="text-[10px] uppercase tracking-[0.22em] text-white/85">{item.organization}</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{group.title}</p>
                        <h3 className="mt-2 text-base font-medium tracking-[-0.02em] text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-5 text-zinc-400">{item.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mt-24 border-t border-white/10 pt-14"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">İletişim</p>
              <Heading as="h2" level="h2" className="mt-4 text-white">
                Markanızın hikâyesini birlikte görünür kılalım.
              </Heading>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#050505] transition-colors hover:bg-zinc-200"
              >
                İletişim
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-white shadow-[0_35px_100px_rgba(0,0,0,0.45)]" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black"
              aria-label="Görseli kapat"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="bg-[#f7f7f5]">
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1600}
                height={1000}
                className="max-h-[82vh] w-full object-contain"
              />
            </div>

            <div className="border-t border-zinc-200 px-5 py-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">{selected.organization}</p>
              <h3 className="mt-2 text-lg font-medium tracking-[-0.02em] text-zinc-900">{selected.title}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
