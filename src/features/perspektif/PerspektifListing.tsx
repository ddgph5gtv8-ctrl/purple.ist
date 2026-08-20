'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import { cardHover, sectionReveal } from '@/lib/motion';

import { AssetImage } from '@/components/shared/AssetImage';

const posts = [
  {
    title: "CEO'nuz markanızın en güçlü iletişim kanalı olabilir mi?",
    category: 'CEO İletişimi',
    readTime: '4 dk',
    summary: 'Lider iletişimi, marka güveni ve kurumsal itibarın nasıl güçlendirilebileceğine dair düşünceler.',
    href: '/perspektif/ceo-iletisimi',
    image: '/images/perspective/ceo-iletisimi.png',
  },
  {
    title: 'Savunma Sanayi Markaları İçin İletişim Neden Farklıdır?',
    category: 'Savunma Sanayi',
    readTime: '5 dk',
    summary: 'Bu alanda güven, doğruluk ve kriz yönetimi nasıl kurumsal iletişimin merkezine oturur?',
    href: '/perspektif/savunma-sanayi-iletisimi',
    image: '/images/perspective/savunma-sanayi.png',
  },
  {
    title: 'Yapay zekâ iletişim danışmanlığını nasıl dönüştürüyor?',
    category: 'AI',
    readTime: '6 dk',
    summary: 'AI destekli üretimin iletişim stratejileri ve marka yönetimi üzerindeki etkisi.',
    href: '/perspektif/yapay-zeka-ve-danismanlik',
    image: '/images/perspective/yapay-zeka.png',
  },
  {
    title: 'PR Artık Sadece Medyada Görünmek Değil: Yapay Zekâ Görünürlüğünü de Etkiliyor',
    category: 'PR & GEO',
    readTime: '5 dk',
    summary: 'PR çalışmalarının medya görünürlüğünün ötesine geçerek yapay zekâ yanıtlarındaki marka görünürlüğünü nasıl etkilediğine dair analiz.',
    href: '/perspektif/pr-yapay-zeka-gorunurlugu-geo',
    image: '/images/perspective/pr-geo.png',
  },
  {
    title: 'Kreatif İçerikler Markanızı Nasıl Sektör Liderliğine Taşıyabilir?',
    category: 'Kreatif & Marka',
    readTime: '5 dk',
    summary: 'Kreatif içerik üretiminin marka farklılaşması, uzmanlık algısı ve sektör liderliği üzerindeki etkisi.',
    href: '/perspektif/kreatif-icerik-marka-liderligi',
    image: '/images/perspective/kreatif-marka.png',
  },
  {
    title: 'Stand İnşa Etmek Yetmez: Fuar Alanı Bir Müşteri Deneyimi Alanıdır',
    category: 'Fuar & Marka Deneyimi',
    readTime: '5 dk',
    summary: 'Fuar standının yalnızca fiziksel bir yapı değil, marka konumlandırmasını deneyime dönüştüren stratejik bir iletişim alanı olduğuna dair bakış.',
    href: '/perspektif/fuar-standi-marka-deneyimi',
    image: '/images/perspective/fuar-marka-deneyimi.png',
  },
];

export function PerspektifListing() {
  return (
    <main className="bg-[#050505] text-white">
      <Section className="pt-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
          <motion.div {...sectionReveal} className="max-w-3xl">
            <Badge variant="primary">PURPLE PERSPEKTİF</Badge>
            <Heading as="h1" level="h1" className="mt-5 text-balance">
              İletişime farklı bakan yazılar.
            </Heading>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Markaların büyümesine katkı sağlayan strateji, PR, lider iletişimi ve AI temalı düşüncelerimizi burada paylaşıyoruz.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.href}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                {...cardHover}
                className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-shadow duration-[230ms] hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
              >
                {post.image ? (
                  <AssetImage
                    src={post.image}
                    alt={post.title}
                    width={1600}
                    height={1000}
                    className="mb-6 aspect-[16/10] w-full rounded-[1rem] object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                ) : null}
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">{post.category} · {post.readTime}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{post.summary}</p>
                <div className="mt-auto border-t border-white/10 pt-6">
                  <Link href={post.href} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                    Yazıyı Oku
                    <ArrowRight className="h-4 w-4 transition-transform duration-[230ms] group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
