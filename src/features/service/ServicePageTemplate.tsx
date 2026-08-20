'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { AssetImage } from '@/components/shared/AssetImage';
import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import { cardHover, sectionReveal } from '@/lib/motion';

const fadeUp = sectionReveal;

export type ServicePageData = {
  hero: {
    badge: string;
    title: string;
    tagline: string;
    cta: string;
  };
  about: {
    headline: string;
    body: string;
  };
  approach: Array<{ title: string; description: string }>;
  capabilities: string[];
  whyPurple: Array<{ title: string; description: string }>;
  relatedCaseStudies?: Array<{
    client: string;
    title: string;
    href: string;
    image: string;
    duration: string;
    services: string[];
  }>;
  relatedArticles?: Array<{
    title: string;
    href: string;
    category: string;
    readTime: string;
  }>;
};

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <main className="bg-[#050505] text-white">
      <ServiceHero data={data} />
      <AboutService data={data} />
      <OurApproach data={data} />
      <Capabilities data={data} />
      <WhyPurple data={data} />
      {(data.relatedCaseStudies?.length ?? 0) > 0 && <RelatedCaseStudies data={data} />}
      {(data.relatedArticles?.length ?? 0) > 0 && <RelatedArticles data={data} />}
      <FinalCTA cta={data.hero.cta} />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */

function ServiceHero({ data }: { data: ServicePageData }) {
  return (
    <section className="bg-[#050505] pb-16 pt-24 sm:pb-20 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <Badge variant="primary">{data.hero.badge}</Badge>
          <Heading as="h1" level="h1" className="mt-5 text-balance">
            {data.hero.title}
          </Heading>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-zinc-400">
            {data.hero.tagline}
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              {data.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── About Service ─────────────────────────────────────────────────────────── */

function AboutService({ data }: { data: ServicePageData }) {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <Badge variant="primary">HİZMET HAKKINDA</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            {data.about.headline}
          </Heading>
          <p className="mt-5 text-lg leading-8 text-zinc-400">{data.about.body}</p>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Our Approach ──────────────────────────────────────────────────────────── */

function OurApproach({ data }: { data: ServicePageData }) {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">YAKLAŞIMIMIZ</Badge>
          <Heading as="h2" level="h2" className="mt-5">
            Nasıl çalışıyoruz?
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

/* ─── Capabilities ──────────────────────────────────────────────────────────── */

function Capabilities({ data }: { data: ServicePageData }) {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">KAPSAM</Badge>
          <Heading as="h2" level="h2" className="mt-5">
            Ne sunuyoruz?
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap gap-3"
        >
          {data.capabilities.map((cap, index) => (
            <motion.span
              key={cap}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-opacity duration-200 hover:opacity-70"
            >
              {cap}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Why Purple ────────────────────────────────────────────────────────────── */

function WhyPurple({ data }: { data: ServicePageData }) {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">NEDEN PURPLE?</Badge>
          <Heading as="h2" level="h2" className="mt-5">
            Farkımız nedir?
          </Heading>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {data.whyPurple.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
              {...cardHover}
              className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-shadow duration-[230ms] hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10">
                <span className="text-sm font-semibold text-[#d8b4fe]">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-white">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Related Case Studies ──────────────────────────────────────────────────── */

function RelatedCaseStudies({ data }: { data: ServicePageData }) {
  if (!data.relatedCaseStudies?.length) return null;
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">REFERANSLARIMIZ</Badge>
          <Heading as="h2" level="h2" className="mt-5">
            Bu alandaki iş ortaklıklarımız.
          </Heading>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {data.relatedCaseStudies.map((project, index) => (
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

/* ─── Related Articles ──────────────────────────────────────────────────────── */

function RelatedArticles({ data }: { data: ServicePageData }) {
  if (!data.relatedArticles?.length) return null;
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <Badge variant="primary">PURPLE PERSPEKTİF</Badge>
          <Heading as="h2" level="h2" className="mt-5">
            Bu konuda daha fazlası.
          </Heading>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.relatedArticles.map((article, index) => (
            <motion.div
              key={article.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              {...cardHover}
              className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-shadow duration-[230ms] hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">{article.category} · {article.readTime}</p>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-white">{article.title}</h3>
              <div className="mt-auto border-t border-white/10 pt-6">
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  Yazıyı Oku
                  <ArrowRight className="h-4 w-4 transition-transform duration-[230ms] group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Final CTA ─────────────────────────────────────────────────────────────── */

function FinalCTA({ cta }: { cta: string }) {
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
          <div className="flex flex-wrap justify-center gap-2">
            {['Stratejik İletişim', 'Marka Gelişimi', 'Dijital Deneyim'].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-zinc-100"
          >
            {cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
