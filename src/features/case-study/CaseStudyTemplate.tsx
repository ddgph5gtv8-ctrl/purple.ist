'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { AssetImage } from '@/components/shared/AssetImage';
import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import { cardHover, sectionReveal } from '@/lib/motion';

export type CaseStudyData = {
  client: string;
  logo?: string;
  title: string;
  duration: string;
  intro: string;
  sector: string;
  partnershipType: string;
  status: string;
  coverImage: string;
  summary: {
    headline: string;
    body: string;
  };
  challenge?: {
    headline: string;
    body: string;
  };
  services: Array<{ title: string; description: string }>;
  approach: Array<{ title: string; description: string }>;
  featuredWork: Array<{ title: string; description: string; image: string }>;
  gallery: Array<{ src: string; alt: string; caption?: string; fit?: 'cover' | 'contain'; unoptimized?: boolean }>;
  achievement?: {
    title: string;
    subtitle?: string;
    body: string;
    note?: string;
    image: string;
    imageAlt: string;
    caption?: string;
  };
  socialContent?: {
    title: string;
    description: string;
    videoTitle: string;
    embedUrl: string;
  };
  video?: {
    title: string;
    src?: string;
    embedUrl?: string;
    sectionTitle?: string;
    description?: string;
    poster?: string;
  };
  result: {
    headline: string;
    body: string;
    metrics?: Array<{ value: string; label: string }>;
  };
  relatedProjects?: Array<{
    client: string;
    title: string;
    href: string;
    image: string;
    duration: string;
    services: string[];
  }>;
};

const fadeUp = sectionReveal;

export function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  return (
    <main className="bg-[#050505] text-white">
      <CaseStudyHero data={data} />
      <ProjectSummary data={data} />
      {data.challenge && <Challenge data={data} />}
      <OurApproach data={data} />
      <WorkScope data={data} />
      <FeaturedWork data={data} />
      <ProjectGallery data={data} />
      {data.achievement && <Achievement data={data} />}
      {data.socialContent && <SocialContentProduction data={data} />}
      {data.video && <ProjectVideo data={data} />}
      <Result data={data} />
      {data.relatedProjects && data.relatedProjects.length > 0 && <RelatedProjects data={data} />}
      <FinalCTA />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */

function CaseStudyHero({ data }: { data: CaseStudyData }) {
  return (
    <section className="bg-[#050505] pb-16 pt-24 sm:pb-20 lg:pt-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:gap-14 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          {/* Client logo or name */}
          {data.logo ? (
            <ClientLogo src={data.logo} name={data.client} fallback={data.client} />
          ) : (
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">{data.client}</p>
          )}

          <Heading as="h1" level="h1" className="mt-5 text-balance">
            {data.title}
          </Heading>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">{data.intro}</p>

          {/* Meta chips */}
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-400">
            <MetaChip label="Sektör" value={data.sector} />
            <MetaChip label="Ortaklık" value={data.partnershipType} />
            <MetaChip label="Durum" value={data.status} />
            <MetaChip label="Süre" value={data.duration} accent />
          </div>
        </motion.div>

        {/* Cover image */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto w-full max-w-[980px] rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.38)] sm:p-6"
        >
          <div className="flex items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#0b0b0b] p-2 sm:p-4">
            <AssetImage
              src={data.coverImage}
              alt={`${data.client} vaka çalışması kahraman görseli`}
              width={1200}
              height={1600}
              quality={85}
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 980px"
              className="mx-auto block h-auto max-h-[72vh] w-auto max-w-full rounded-[1.25rem] object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetaChip({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs ${accent ? 'border-[#a855f7]/30 bg-[#a855f7]/10 text-[#d8b4fe]' : 'border-white/10 bg-white/5 text-zinc-400'}`}>
      <span className="text-zinc-500">{label}:</span>
      {value}
    </span>
  );
}

function ClientLogo({ src, name, fallback }: { src: string; name: string; fallback: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">{fallback}</p>;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      className="h-8 w-auto object-contain brightness-0 invert"
      onError={() => setError(true)}
    />
  );
}

/* ─── Challenge ─────────────────────────────────────────────────────────────── */

function Challenge({ data }: { data: CaseStudyData }) {
  if (!data.challenge) return null;
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <Badge variant="primary">ZORLUK</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            {data.challenge.headline}
          </Heading>
          <p className="mt-5 text-lg leading-8 text-zinc-400">{data.challenge.body}</p>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Project Summary ───────────────────────────────────────────────────────── */

function ProjectSummary({ data }: { data: CaseStudyData }) {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <Badge variant="primary">PROJE ÖZETİ</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            {data.summary.headline}
          </Heading>
          <p className="mt-5 text-lg leading-8 text-zinc-400">{data.summary.body}</p>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Work Scope (Services as badges) ──────────────────────────────────────── */

function WorkScope({ data }: { data: CaseStudyData }) {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">SUNDUĞUMUZ HİZMETLER</Badge>
          <Heading as="h2" level="h2" className="mt-5">
            Bu projede neler yaptık?
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap gap-3"
        >
          {data.services.map((service, index) => (
            <motion.span
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-opacity duration-200 hover:opacity-70"
            >
              {service.title}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Our Approach ──────────────────────────────────────────────────────────── */

function OurApproach({ data }: { data: CaseStudyData }) {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">YAKLAŞIMIMIZ</Badge>
          <Heading as="h2" level="h2" className="mt-5">
            Nasıl çalıştık?
          </Heading>
        </motion.div>

        <div className="flex flex-col gap-0">
          {data.approach.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              className="flex gap-6 border-b border-white/10 py-7 last:border-b-0"
            >
              <div className="shrink-0 pt-1">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-zinc-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-base leading-7 text-zinc-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Featured Work ─────────────────────────────────────────────────────────── */

function FeaturedWork({ data }: { data: CaseStudyData }) {
  if (!data.featuredWork.length) return null;
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">ÖNE ÇIKAN ÇALIŞMALAR</Badge>
          <Heading as="h2" level="h2" className="mt-5">
            Projeden kareler.
          </Heading>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {data.featuredWork.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              {...cardHover}
              className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-shadow duration-[230ms] hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
            >
              <div className="flex justify-center bg-[#0b0b0b] p-3 sm:p-4">
                <AssetImage
                  src={item.image}
                  alt={`${data.client} - ${item.title}`}
                  width={900}
                  height={1200}
                  quality={80}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="mx-auto h-auto max-h-[500px] w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Project Gallery ───────────────────────────────────────────────────────── */

function ProjectGallery({ data }: { data: CaseStudyData }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? 0 : (i + 1) % data.gallery.length));
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i === null ? 0 : (i - 1 + data.gallery.length) % data.gallery.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, data.gallery.length]);

  if (!data.gallery.length) return null;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    touchStartY.current = e.touches[0]?.clientY ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (activeIndex === null || touchStartX.current === null || touchStartY.current === null) return;

    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const endY = e.changedTouches[0]?.clientY ?? touchStartY.current;
    const dx = endX - touchStartX.current;
    const dy = endY - touchStartY.current;

    // Only trigger horizontal swipe when intent is clearly horizontal.
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        setActiveIndex((i) => ((i ?? 0) + 1) % data.gallery.length);
      } else {
        setActiveIndex((i) => ((i ?? 0) - 1 + data.gallery.length) % data.gallery.length);
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <>
      <Section className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
          <motion.div {...fadeUp} className="max-w-2xl">
            <Badge variant="primary">PROJE GALERİSİ</Badge>
            <Heading as="h2" level="h2" className="mt-5">
              Çalışmalarımızdan.
            </Heading>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
            {data.gallery.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: (index % 6) * 0.06, ease: 'easeOut' }}
                onClick={() => setActiveIndex(index)}
                className="group mx-auto w-full max-w-[420px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0d0d0d] text-left transition-shadow duration-[230ms] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
                aria-label={`Görseli büyüt: ${item.alt}`}
              >
                <div className="relative overflow-hidden bg-[#0b0b0b] p-3 sm:p-4">
                  <AssetImage
                    src={item.src}
                    alt={item.alt}
                    width={900}
                    height={1200}
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized={item.unoptimized}
                    className="mx-auto h-auto max-h-[500px] w-auto max-w-full object-contain transition-transform duration-[400ms] group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                    <span className="scale-90 rounded-full bg-white/90 p-2.5 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
                {item.caption && (
                  <p className="px-4 py-3 text-xs text-zinc-500">{item.caption}</p>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="pointer-events-none absolute inset-0" aria-hidden="true" />
            {/* Nav: previous */}
            <button
              onClick={(e) => { e.stopPropagation(); setActiveIndex((i) => ((i ?? 0) - 1 + data.gallery.length) % data.gallery.length); }}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
              aria-label="Önceki görsel"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="relative flex h-dvh w-screen items-center justify-center p-5 sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <AssetImage
                src={data.gallery[activeIndex].src}
                alt={data.gallery[activeIndex].alt}
                width={1600}
                height={1000}
                quality={85}
                loading="eager"
                unoptimized={data.gallery[activeIndex].unoptimized}
                className="h-auto max-h-[calc(100dvh-8rem)] w-auto max-w-[calc(100vw-2.5rem)] object-contain sm:max-h-[calc(100dvh-10rem)] sm:max-w-[calc(100vw-8rem)]"
              />
              {data.gallery[activeIndex].caption && (
                <p className="pointer-events-none absolute bottom-14 left-1/2 z-20 -translate-x-1/2 text-center text-sm text-zinc-300">
                  {data.gallery[activeIndex].caption}
                </p>
              )}
            </motion.div>

            {/* Nav: next */}
            <button
              onClick={(e) => { e.stopPropagation(); setActiveIndex((i) => ((i ?? 0) + 1) % data.gallery.length); }}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
              aria-label="Sonraki görsel"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Close */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Counter */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-zinc-300">
              {activeIndex + 1} / {data.gallery.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Achievement ──────────────────────────────────────────────────────────── */

function Achievement({ data }: { data: CaseStudyData }) {
  if (!data.achievement) return null;

  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">BAŞARI</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            {data.achievement.title}
          </Heading>
          {data.achievement.subtitle && (
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-zinc-500">{data.achievement.subtitle}</p>
          )}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8"
          >
            <p className="text-lg leading-8 text-zinc-300">{data.achievement.body}</p>
            {data.achievement.note && (
              <p className="mt-5 text-base leading-7 text-zinc-400">{data.achievement.note}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] shadow-[0_12px_35px_rgba(0,0,0,0.24)]"
          >
            <AssetImage
              src={data.achievement.image}
              alt={data.achievement.imageAlt}
              width={1200}
              height={900}
              quality={85}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="block h-auto w-full"
            />
            {data.achievement.caption && (
              <p className="border-t border-white/10 px-5 py-4 text-sm text-zinc-400">{data.achievement.caption}</p>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Social Media & Content Production ───────────────────────────────────── */

function SocialContentProduction({ data }: { data: CaseStudyData }) {
  if (!data.socialContent) return null;

  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <Badge variant="primary">SOSYAL MEDYA & İÇERİK ÜRETİMİ</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            {data.socialContent.title}
          </Heading>
          <p className="mt-5 text-lg leading-8 text-zinc-400">{data.socialContent.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d]"
        >
          <div className="aspect-video w-full">
            <iframe
              src={data.socialContent.embedUrl}
              title={data.socialContent.videoTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <p className="border-t border-white/10 px-5 py-4 text-sm text-zinc-400">{data.socialContent.videoTitle}</p>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Project Video ────────────────────────────────────────────────────────── */

function ProjectVideo({ data }: { data: CaseStudyData }) {
  if (!data.video || (!data.video.src && !data.video.embedUrl)) return null;

  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">PROJE VİDEOSU</Badge>
          <Heading as="h2" level="h2" className="mt-5">
            {data.video.sectionTitle ?? 'Stand deneyim videosu.'}
          </Heading>
          {data.video.description && (
            <p className="mt-5 text-lg leading-8 text-zinc-400">{data.video.description}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d]"
        >
          {data.video.embedUrl ? (
            <div className="aspect-video w-full shadow-[0_12px_35px_rgba(0,0,0,0.24)]">
              <iframe
                src={data.video.embedUrl}
                title={data.video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ) : (
            <video
              controls
              preload="metadata"
              poster={data.video.poster}
              className="aspect-video w-full shadow-[0_12px_35px_rgba(0,0,0,0.24)]"
              playsInline
              aria-label={data.video.title}
            >
              <source src={data.video.src} type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          )}
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Result ────────────────────────────────────────────────────────────────── */

function Result({ data }: { data: CaseStudyData }) {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <Badge variant="primary">SONUÇ</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            {data.result.headline}
          </Heading>
          <p className="mt-5 text-lg leading-8 text-zinc-400">{data.result.body}</p>
        </motion.div>

        {data.result.metrics && data.result.metrics.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {data.result.metrics.map((metric) => (
              <div key={metric.label} className="rounded-[1.25rem] border border-white/10 bg-[#0d0d0d] p-6 text-center">
                <p className="text-4xl font-semibold tracking-[-0.03em] text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-zinc-400">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </Section>
  );
}

/* ─── Related Projects ──────────────────────────────────────────────────────── */

function RelatedProjects({ data }: { data: CaseStudyData }) {
  if (!data.relatedProjects?.length) return null;
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">İLGİLİ PROJELER</Badge>
          <Heading as="h2" level="h2" className="mt-5">
            Diğer iş ortaklıklarımız.
          </Heading>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {data.relatedProjects.map((project, index) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              {...cardHover}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-shadow duration-[230ms] hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
            >
              <div className="relative overflow-hidden">
                <AssetImage
                  src={project.image}
                  alt={project.client}
                  width={800}
                  height={500}
                  quality={75}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.03]"
                />
                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-sm">
                  {project.duration}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">{project.client}</p>
                <h3 className="mt-3 text-base font-semibold tracking-[-0.02em] text-white">{project.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.services.slice(0, 3).map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-400">{s}</span>
                  ))}
                </div>
                <div className="mt-auto border-t border-white/10 pt-5">
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                  >
                    Projeyi İncele
                    <ArrowRight className="h-4 w-4 transition-transform duration-[230ms] group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Final CTA ─────────────────────────────────────────────────────────────── */

function FinalCTA() {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
        >
          <Heading as="h2" level="h2" className="text-balance">
            Benzer bir başarı hikâyesini birlikte yazabiliriz.
          </Heading>
          <p className="max-w-xl text-lg leading-8 text-zinc-400">
            Markanızın ihtiyaçlarını birlikte değerlendirerek uzun vadeli ve sürdürülebilir bir iletişim stratejisi oluşturabiliriz.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {['Stratejik İletişim', 'Marka Gelişimi', 'Dijital Deneyim'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-zinc-100"
          >
            Projeni Anlat
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
