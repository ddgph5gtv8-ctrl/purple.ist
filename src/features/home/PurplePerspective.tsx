'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { cardHover } from '@/lib/motion';
import { AssetImage } from '@/components/shared/AssetImage';
import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const articles = [
  {
    title: 'PR Artık Sadece Medyada Görünmek Değil: Yapay Zekâ Görünürlüğünü de Etkiliyor',
    category: 'PR & GEO',
    readTime: '5 dk',
    cta: 'Yazıyı Oku',
    href: '/perspektif/pr-yapay-zeka-gorunurlugu-geo',
    image: '/images/perspective/pr-geo.png',
  },
  {
    title: 'Kreatif İçerikler Markanızı Nasıl Sektör Liderliğine Taşıyabilir?',
    category: 'Kreatif & Marka',
    readTime: '5 dk',
    cta: 'Yazıyı Oku',
    href: '/perspektif/kreatif-icerik-marka-liderligi',
    image: '/images/perspective/kreatif-marka.png',
  },
  {
    title: 'Stand İnşa Etmek Yetmez: Fuar Alanı Bir Müşteri Deneyimi Alanıdır',
    category: 'Fuar & Marka Deneyimi',
    readTime: '5 dk',
    cta: 'Yazıyı Oku',
    href: '/perspektif/fuar-standi-marka-deneyimi',
    image: '/images/perspective/fuar-marka-deneyimi.png',
  },
];

export function PurplePerspective() {
  return (
    <Section id="purple-perspective" className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <Badge variant="primary">PURPLE PERSPEKTİF</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            İletişime farklı bakıyoruz.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            İletişim, PR, lider iletişimi, savunma sanayi ve yapay zekâ üzerine bakış açımızı paylaşıyoruz.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              {...cardHover}
              className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8"
            >
              <AssetImage
                src={article.image}
                alt={article.title}
                width={1600}
                height={1000}
                className="mb-6 aspect-[16/10] w-full rounded-[1rem] object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">{article.category}</p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-white">
                {article.title}
              </h3>
              <div className="mt-auto pt-8">
                <div className="flex items-center justify-between border-t border-white/10 pt-6 text-sm text-zinc-400">
                  <span>{article.readTime}</span>
                  <Link href={article.href} className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-white">
                    {article.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/perspektif" className="text-sm uppercase tracking-[0.24em] text-zinc-300 transition-colors hover:text-white">
            Tüm Yazıları Gör
          </Link>
        </div>
      </div>
    </Section>
  );
}
