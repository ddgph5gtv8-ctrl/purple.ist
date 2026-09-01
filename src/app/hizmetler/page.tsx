import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const services = [
  {
    title: 'Kurumsal İletişim & PR',
    description: 'İtibar yönetimi, medya ilişkileri ve proaktif kurumsal iletişim stratejileri.',
    href: '/hizmetler/kurumsal-iletisim',
  },
  {
    title: 'Marka Stratejisi',
    description: 'Konumlandırma, mesaj mimarisi ve sürdürülebilir marka büyüme planları.',
    href: '/hizmetler/marka-stratejisi',
  },
  {
    title: 'CEO & LinkedIn İletişimi',
    description: 'Lider iletişimi, görünürlük ve kurucu kimliği güçlendirme.',
    href: '/hizmetler/ceo-iletisimi',
  },
  {
    title: 'Dijital Büyüme',
    description: 'Yaratıcı içerik, performans odaklı yönetişim ve uzun vadeli dijital büyüme.',
    href: '/hizmetler/dijital-buyume',
  },
  {
    title: 'Savunma Sanayi İletişimi',
    description: 'Güven, teknik iletişim ve sektör hassasiyetine dayalı stratejik görünürlük.',
    href: '/hizmetler/savunma-sanayi-iletisimi',
  },
  {
    title: 'Stand & Deneyim Tasarımı',
    description: 'Fuar standı, etkinlik ve marka temas noktalarında iz bırakıcı deneyimler.',
    href: '/hizmetler/stand-deneyim-tasarimi',
  },
];

export default function HizmetlerPage() {
  return (
    <main className="bg-[#050505] text-white">
      <Section className="border-b border-white/10 bg-[#050505] pb-12 pt-24 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="primary">HİZMETLER</Badge>
            <Heading as="h1" level="h1" className="mt-5 text-balance">
              Markanızın büyümesine katkı sunan iletişim ve strateji alanları.
            </Heading>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-zinc-400">
              Purple ile marka, iletişim, medya ve deneyim alanlarında tek çatı altında güçlü bir görünürlük ve güven inşa ediyoruz.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-[#050505] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-7 text-left shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-[#111111]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Hizmet</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{service.title}</h2>
                  </div>
                  <span className="mt-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-zinc-400">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
