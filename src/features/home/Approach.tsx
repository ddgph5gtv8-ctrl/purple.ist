'use client';

import { motion } from 'motion/react';
import { cardHover } from '@/lib/motion';

import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const principles = [
  {
    title: 'Uzun Vadeli İş Ortaklığı',
    text: 'Projeler değil, yıllar süren iş ortaklıkları kuruyoruz.',
  },
  {
    title: 'Stratejik Düşünce',
    text: 'Her çalışmaya iletişim hedefleri kadar iş hedefleri açısından da yaklaşıyoruz.',
  },
  {
    title: 'AI Destekli Üretim',
    text: 'Yapay zekâyı daha hızlı üretmek için değil, daha doğru kararlar almak için kullanıyoruz.',
  },
  {
    title: 'Ölçülebilir Etki',
    text: 'Purple IQ ile iletişim çalışmalarını analiz ediyor, gelişimi verilerle takip ediyoruz.',
  },
];

export function Approach() {
  return (
    <Section id="approach" className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <Badge variant="primary">YAKLAŞIMIMIZ</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            İletişime farklı bakıyoruz.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Bizim için iletişim yalnızca görünür olmak değil; güven oluşturmak, itibar inşa etmek ve markaların sürdürülebilir büyümesini sağlamaktır.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
              {...cardHover}
              className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-white">
                {principle.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-400">{principle.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
