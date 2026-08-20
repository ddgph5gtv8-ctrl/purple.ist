'use client';

import { motion } from 'motion/react';
import { ArrowRight, Brain, Compass, Crown, Mic, Shield, Store } from 'lucide-react';
import Link from 'next/link';

import { cardHover } from '@/lib/motion';
import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const services = [
  {
    title: 'Marka Stratejisi',
    description: 'Konumlandırma, mesaj mimarisi ve sürdürülebilir büyüme stratejileri oluşturuyoruz.',
    icon: Compass,
    href: '/hizmetler/marka-stratejisi',
  },
  {
    title: 'Kurumsal İletişim & PR',
    description: 'Markanızın itibarını güçlendiriyor, medya görünürlüğünü ve güvenini artırıyoruz.',
    icon: Mic,
    href: '/pr',
  },
  {
    title: 'CEO & LinkedIn İletişimi',
    description: 'Kurucu ve yöneticileri sektörlerinde görünür fikir liderlerine dönüştürüyoruz.',
    icon: Crown,
    href: '/hizmetler/ceo-iletisimi',
  },
  {
    title: 'Savunma Sanayi İletişimi',
    description: 'Savunma sanayi markaları için uluslararası iletişim, fuar ve B2B büyüme stratejileri geliştiriyoruz.',
    icon: Shield,
    href: '/hizmetler/savunma-sanayi-iletisimi',
  },
  {
    title: 'Stand & Deneyim Tasarımı',
    description: 'Fuar stantları, lansmanlar ve marka deneyimleri tasarlayarak ziyaretçileri müşteriye dönüştürüyoruz.',
    icon: Store,
    href: '/hizmetler/stand-deneyim-tasarimi',
  },
  {
    title: 'Dijital Büyüme',
    description: 'Performans pazarlaması, yaratıcı içerik ve AI destekli üretimle sürdürülebilir dijital büyüme sağlıyoruz.',
    icon: Brain,
    href: '/hizmetler/dijital-buyume',
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <Badge variant="primary">UZMANLIK ALANLARIMIZ</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            Markanızın büyümesi için gereken uzmanlık tek çatı altında.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Stratejiden itibara, lider iletişiminden uluslararası fuarlara kadar markaların sürdürülebilir büyümesi için uçtan uca iletişim sistemleri kuruyoruz.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                {...cardHover}
                className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-shadow duration-[230ms] hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{service.description}</p>
                <div className="mt-auto pt-6">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-white"
                  >
                    Daha Fazla Bilgi
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[230ms] group-hover:translate-x-[4px]" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
