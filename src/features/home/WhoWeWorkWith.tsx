'use client';

import { motion } from 'motion/react';

import { cardHover } from '@/lib/motion';
import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const segments = [
  {
    title: 'Büyüme Odaklı Markalar',
    description: 'İletişim altyapısını güçlendirmek, görünürlüğünü artırmak ve sektöründe güvenilir bir ses haline gelmek isteyen markalar.',
  },
  {
    title: 'Sanayi ve Üretim',
    description: 'Savunma, av, makine ve imalat sektörlerinde ulusal ve uluslararası arenada iletişim gücü oluşturmak isteyen kurumlar.',
  },
  {
    title: 'Tüketici Markaları',
    description: 'PR, dijital büyüme ve marka stratejisiyle hedef kitlesine daha güçlü ulaşmak isteyen B2C markalar.',
  },
  {
    title: 'Global Hedefi Olan Şirketler',
    description: 'Uluslararası pazarlarda güvenilir bir kurumsal kimlik ve iletişim sistemi kurmak isteyen büyüme odaklı şirketler.',
  },
];

export function WhoWeWorkWith() {
  return (
    <Section id="who-we-work-with" className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <Badge variant="primary">KİMLERLE ÇALIŞIYORUZ</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            Doğru ortaklık, doğru markalarla kurulur.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Her sektörden ve büyüklükten markayla çalışmıyoruz. Uzun vadeli iş ortaklığı kurabileceğimiz, iletişime stratejik bakan markalarla çalışıyoruz.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              {...cardHover}
              className="flex flex-col rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-shadow duration-[230ms] hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{segment.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{segment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
