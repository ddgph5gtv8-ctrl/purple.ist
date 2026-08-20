'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '25+', label: 'Yıllık Deneyim' },
  { value: '120+', label: 'Tamamlanan Proje' },
  { value: '10+', label: 'Active Brands' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto flex min-h-[760px] max-w-[1280px] flex-col justify-center gap-12 px-6 py-20 sm:px-8 lg:px-8 lg:py-28">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-10"
        >
          <div className="max-w-4xl">
            <h1
              className="text-4xl font-bold leading-[1.12] tracking-[-0.03em] sm:text-5xl sm:leading-[1.14] lg:text-7xl lg:leading-[1.16]"
            >
              Markaların görünürlüğünü değil,
              <br />
              <span className="text-[color:var(--color-accent)]">etkisini</span> büyütüyoruz.
            </h1>

            <p
              className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:mt-10 sm:text-xl"
            >
              Stratejik iletişim, PR, AI destekli yaratıcı üretim ve dijital deneyim ile markaların güven kazanmasına ve sürdürülebilir büyümesine katkı sağlıyoruz.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-zinc-100"
              >
                Birlikte Başlayalım
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-transparent px-6 py-3.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-900"
              >
                Çalışmalarımız
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
                className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] px-6 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.24)]"
              >
                <p className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-zinc-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
