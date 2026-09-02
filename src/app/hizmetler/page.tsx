import Link from 'next/link';
import { ArrowRight, Brain, Compass, Crown, Mic, Shield, Store } from 'lucide-react';

import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const services = [
  {
    title: 'Marka Stratejisi',
    description: 'Konumlandırma, mesaj mimarisi ve sürdürülebilir büyüme stratejileri oluşturuyoruz.',
    href: '/hizmetler/marka-stratejisi',
    icon: Compass,
  },
  {
    title: 'Kurumsal İletişim & PR',
    description: 'Markanızın itibarını güçlendiriyor, medya görünürlüğünü ve güvenini artırıyoruz.',
    href: '/pr',
    icon: Mic,
  },
  {
    title: 'CEO & LinkedIn İletişimi',
    description: 'Kurucu ve yöneticileri sektörlerinde görünür fikir liderlerine dönüştürüyoruz.',
    href: '/hizmetler/ceo-iletisimi',
    icon: Crown,
  },
  {
    title: 'Savunma Sanayi İletişimi',
    description: 'Savunma sanayi markaları için uluslararası iletişim, fuar ve B2B büyüme stratejileri geliştiriyoruz.',
    href: '/hizmetler/savunma-sanayi-iletisimi',
    icon: Shield,
  },
  {
    title: 'Stand & Deneyim Tasarımı',
    description: 'Fuar stantları, lansmanlar ve marka deneyimleri tasarlayarak ziyaretçileri müşteriye dönüştürüyoruz.',
    href: '/hizmetler/stand-deneyim-tasarimi',
    icon: Store,
  },
  {
    title: 'Dijital Büyüme',
    description: 'Performans pazarlaması, yaratıcı içerik ve AI destekli üretimle sürdürülebilir dijital büyüme sağlıyoruz.',
    href: '/hizmetler/dijital-buyume',
    icon: Brain,
  },
];

export default function HizmetlerPage() {
  return (
    <main className="bg-[#050505] text-white">
      <Section className="pb-20 pt-20 md:pt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <Badge variant="primary">UZMANLIK ALANLARIMIZ</Badge>
          <Heading as="h1" level="h1" className="mt-5 text-balance text-white">
            Hizmetler
          </Heading>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            Stratejiden itibara, lider iletişiminden uluslararası fuarlara kadar markaların sürdürülebilir büyümesi için uçtan uca iletişim sistemleri kuruyoruz.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-all duration-[230ms] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h2 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{service.description}</p>

                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors group-hover:text-white">
                      Daha Fazla Bilgi
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[230ms] group-hover:translate-x-[4px]" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
    </main>
  );
}
