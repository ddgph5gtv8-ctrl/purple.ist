'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

import { cardHover } from '@/lib/motion';
import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const plans = [
  {
    name: 'Purple Başlangıç',
    description: 'İletişim düzenini oluşturmak ve markasını düzenli olarak görünür kılmak isteyen markalar için.',
    features: [
      '8 sosyal medya içeriği / ay',
      '2 AI destekli kısa video / ay',
      '1 basın bülteni / ay',
      'Haber & veri madenciliği',
      'Basılı ve dijital medya servisi',
      'Aylık iletişim raporu',
    ],
    price: '50.000 TL + KDV / ay',
    href: '/buyume-plani/baslangic',
    cta: 'Paketi İncele →',
    highlight: false,
  },
  {
    name: 'Purple Büyüme',
    description: 'Görünürlüğünü artırmak, PR gücünü büyütmek ve lider iletişimini stratejik hale getirmek isteyen markalar için.',
    features: [
      '12 sosyal medya içeriği / ay',
      '4 AI destekli kısa video / ay',
      '1 basın bülteni / ay',
      '1 TV haber çalışması / ay',
      'Proaktif medya ilişkileri',
      'CEO & LinkedIn iletişimi',
    ],
    price: '90.000 TL + KDV / ay',
    href: '/buyume-plani/buyume',
    cta: 'Paketi İncele →',
    highlight: true,
  },
  {
    name: 'Purple Etki',
    description: 'İletişimini tek bir strateji altında birleştirmek ve markasının etkisini uçtan uca büyütmek isteyen kurumlar için.',
    features: [
      'Stratejik PR & İtibar',
      'Executive iletişim',
      'Kreatif kampanyalar',
      'Fuar iletişimi & marka deneyimi',
      'İç iletişim & işveren markası',
      'Uluslararası marka iletişimi',
    ],
    price: '150.000 TL + KDV\'den başlayan',
    href: '/buyume-plani/etki',
    cta: 'Paketi İncele →',
    highlight: false,
  },
];

export function GrowthPlan() {
  return (
    <Section id="growth-plan" className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <Badge variant="primary">BÜYÜME PLANI</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            Size Uygun Büyüme Planı
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Her markanın ihtiyacı farklıdır. Purple IQ analizinizin sonuçlarına göre size en uygun çalışma modelini birlikte belirliyoruz.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              {...cardHover}
              className={`flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.24)] ${plan.highlight ? 'ring-1 ring-[#a855f7]/40' : ''}`}
            >
              {plan.highlight ? (
                <div className="mb-5 inline-flex w-fit items-center rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-[#d8b4fe]">
                  Önerilen
                </div>
              ) : null}

              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">{plan.name}</h3>
              <p className="mt-4 text-base leading-7 text-zinc-400">{plan.description}</p>
              <p className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">{plan.price}</p>

              <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-[0.35rem] text-sm text-[#d8b4fe]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
              >
                {plan.cta}
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] border border-white/10 bg-[#0d0d0d] px-8 py-10 text-center sm:px-10"
        >
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
            Hangi planın size uygun olduğundan emin değil misiniz?
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
            Purple IQ analizinizi tamamlayın, markanız için en doğru büyüme planını birlikte belirleyelim.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#purple-iq"
            >
              Purple IQ&apos;yu Başlat →
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
