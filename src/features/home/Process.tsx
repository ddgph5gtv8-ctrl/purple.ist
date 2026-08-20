'use client';

import { motion } from 'motion/react';

import { cardHover } from '@/lib/motion';
import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const steps = [
  {
    title: 'Purple IQ',
    text: 'Markanızı analiz ediyoruz.',
  },
  {
    title: 'Strateji',
    text: 'İletişim hedeflerini birlikte belirliyoruz.',
  },
  {
    title: 'Üretim',
    text: 'İçerik, PR, kreatif ve deneyim tasarımlarını hayata geçiriyoruz.',
  },
  {
    title: 'Büyüme',
    text: 'Sonuçları ölçüyor, iletişimi sürekli geliştiriyoruz.',
  },
];

export function Process() {
  return (
    <Section id="process" className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <Badge variant="primary">SÜRECİMİZ</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            Her iş ortaklığı aynı şekilde başlar.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            İletişim çalışmalarına başlamadan önce markanızı analiz ediyor, hedeflerinizi anlıyor ve size özel bir yol haritası oluşturuyoruz.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-white/10 md:left-1/2 md:block" />
          <div className="flex flex-col gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
              {...cardHover}
                className="relative flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-shadow duration-[230ms] hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)] md:gap-8 md:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">Adım {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-zinc-400">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
