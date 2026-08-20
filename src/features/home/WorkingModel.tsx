'use client';

import { motion } from 'motion/react';

import { cardHover } from '@/lib/motion';
import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const steps = [
  {
    number: '01',
    title: 'Keşif',
    description: 'Markanızı, hedeflerinizi, hedef kitlenizi ve rekabetçi ortamı derinlemesine analiz ediyoruz.',
  },
  {
    number: '02',
    title: 'Strateji',
    description: 'Veriye dayalı bir iletişim stratejisi ve büyüme yol haritası oluşturuyoruz.',
  },
  {
    number: '03',
    title: 'Üretim',
    description: 'İçerik, tasarım, PR ve dijital deneyimi stratejiye uygun biçimde hayata geçiriyoruz.',
  },
  {
    number: '04',
    title: 'Büyüme',
    description: 'Sonuçları ölçüyor, stratejiyi güncelliyor ve birlikte büyümeye devam ediyoruz.',
  },
];

export function WorkingModel() {
  return (
    <Section id="working-model" className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <Badge variant="primary">ÇALIŞMA MODELİMİZ</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            Her iş ortaklığı aynı şekilde başlar.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            İletişim çalışmalarına başlamadan önce markanızı analiz ediyor, hedeflerinizi anlıyor ve size özel bir yol haritası oluşturuyoruz.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              {...cardHover}
              className="flex flex-col rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-shadow duration-[230ms] hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
            >
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#a855f7]">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
