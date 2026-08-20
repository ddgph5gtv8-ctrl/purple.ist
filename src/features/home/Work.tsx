'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { AssetImage } from '@/components/shared/AssetImage';
import { cardHover } from '@/lib/motion';
import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const referenceCategories = ['PR', 'Kurumsal İletişim', 'Dijital', 'Marka Stratejisi', 'Kreatif Üretim', 'İç İletişim'] as const;
const referenceSubtypes = ['TV & Video', 'Gazete', 'Dergi', 'Etkinlik & PR'] as const;

type ReferenceCategory = (typeof referenceCategories)[number];
type ReferenceSubtype = (typeof referenceSubtypes)[number];

type ReferenceProject = {
  client: string;
  title: string;
  description: string;
  services: string[];
  duration: string;
  image: string;
  logo?: string;
  href: string;
  category: ReferenceCategory;
  subtypes?: ReferenceSubtype[];
};

const referenceCategoryMeta = {
  PR: { subtypes: ['TV & Video', 'Gazete', 'Dergi', 'Etkinlik & PR'] as const },
  'Kurumsal İletişim': { subtypes: [] as const },
  Dijital: { subtypes: [] as const },
  'Marka Stratejisi': { subtypes: [] as const },
  'Kreatif Üretim': { subtypes: [] as const },
  'İç İletişim': { subtypes: [] as const },
} satisfies Record<ReferenceCategory, { subtypes: readonly ReferenceSubtype[] }>;

const projects: ReferenceProject[] = [
  {
    client: 'HUĞLU',
    title: 'Uçtan uca marka dönüşümü',
    description:
      'Marka mimarisi, web sitesi, kreatif üretim ve uluslararası fuar iletişimi alanlarında birlikte büyüdüğümüz bir iş ortaklığı.',
    services: ['Marka Stratejisi', 'Web Sitesi', 'Kreatif Üretim', 'Stand Tasarımı'],
    duration: '9 Yıldır İş Ortağımız',
    image: '/images/projects/huglu/website-home.png',
    logo: '/images/projects/huglu/logo.png',
    href: '/case-studies/huglu',
    category: 'Marka Stratejisi',
    subtypes: ['Etkinlik & PR'],
  },
  {
    client: 'ISS',
    title: 'Uzun soluklu kurumsal iletişim ve işveren markası yönetimi',
    description:
      'ISS için PR ve medya ilişkileri, kurumsal iletişim, reklam çalışmaları, sosyal medya yönetimi, içerik ve kreatif tasarım, kurumsal yayın materyalleri ile insan kaynakları iletişimi ve işveren markası çalışmalarını entegre biçimde yönettik. ISS Tesis Yönetim Hizmetleri için Purple Creative tarafından hazırlanan ilanlar, Secretcv HR Summit 2019 kapsamında "En İyi Görselli İş İlanı" kategorisinde ödüle layık görüldü; ödül törende Leyla Alaton tarafından ISS\'e takdim edildi.',
    services: ['PR', 'Kurumsal İletişim', 'Reklam', 'Sosyal Medya', 'Kreatif Tasarım', 'İşveren Markası'],
    duration: '10 Yıldır İş Ortağımız',
    image: '/images/projects/iss/secretcv-odullu-ilan-02.png',
    href: '/case-studies/iss',
    category: 'PR',
    subtypes: ['TV & Video', 'Gazete', 'Dergi', 'Etkinlik & PR'],
  },
  {
    client: 'ARAS KARGO',
    title: 'İç iletişimi dijital deneyime dönüştürdük',
    description:
      'KahveArası dijital yayınıyla çalışan iletişimini sürdürülebilir ve kurumsal bir yayın modeline dönüştürüyoruz.',
    services: ['İç İletişim', 'Dijital Yayın', 'Editoryal İçerik', 'Kreatif Tasarım'],
    duration: '4 Yıldır İş Ortağımız',
    image: '/images/projects/aras/hero.jpg',
    logo: '/images/projects/aras/logo.png',
    href: '/case-studies/aras',
    category: 'Dijital',
    subtypes: ['TV & Video'],
  },
  {
    client: 'MATRAŞ',
    title: 'Marka itibarı ve pazarlama iletişimi',
    description:
      'Matraş\'ın marka algısını ve itibarını güçlendiren pazarlama iletişimi çalışmalarımız.',
    services: ['Pazarlama İletişimi', 'Marka İtibarı', 'İletişim Stratejisi'],
    duration: 'THE ONE AWARDS · 2015',
    image: '/images/projects/matras/Merketing%20T%C3%BCrkiye%20%C3%96d%C3%BCl%20Yeni.png',
    href: '/case-studies/matras',
    category: 'Marka Stratejisi',
    subtypes: ['Gazete', 'Dergi'],
  },
  {
    client: 'DÜĞÜN.COM',
    title: 'Marka görünürlüğünü güçlendiren PR yönetimi',
    description: 'PR & Lider İletişimi',
    services: ['PR & Medya İletişimi', 'Lider İletişimi'],
    duration: '3 Yıl İş Ortağımız',
    image: '/images/projects/duguncom/duguncom-kanal-d.png',
    href: '/case-studies/duguncom',
    category: 'PR',
    subtypes: ['TV & Video', 'Gazete', 'Dergi', 'Etkinlik & PR'],
  },
  {
    client: 'THE GRAND TARABYA',
    title: 'Marka İletişimi & Kreatif Çalışmalar',
    description:
      'The Grand Tarabya için hazırlanan ilan, sosyal medya, poster ve e-posta/newsletter tasarımlarından seçilmiş kreatif çalışmalar.',
    services: ['Marka İletişimi', 'Kreatif Çalışmalar', 'Sosyal Medya', 'Poster', 'Newsletter'],
    duration: 'Kreatif Proje',
    image: '/images/projects/The%20Grand%20Tarabya/hero.jpg',
    href: '/case-studies/the-grand-tarabya',
    category: 'Kreatif Üretim',
    subtypes: ['Etkinlik & PR'],
  },
];

export function Work() {
  return (
    <Section id="work" className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <Badge variant="primary">REFERANSLARIMIZ</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            Uzun Soluklu İş Ortaklıkları. Ölçülebilir Sonuçlar.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Markalarla yalnızca proje bazlı değil, uzun vadeli iletişim ortaklıkları kuruyoruz. Strateji, kurumsal iletişim, PR, dijital deneyim ve marka gelişimi süreçlerini birlikte yönetiyoruz.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.client}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
              {...cardHover}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-shadow duration-[230ms] hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
            >
              {/* Cover image */}
              <div className="relative">
                <AssetImage
                  src={project.image}
                  alt={project.client}
                  width={1200}
                  height={720}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                {/* Duration badge overlaid on image */}
                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-300 backdrop-blur-sm">
                  {project.duration}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                {/* Client logo / name */}
                <div className="flex items-center gap-3">
                  {project.logo ? (
                    <ClientLogo src={project.logo} name={project.client} />
                  ) : null}
                </div>

                <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">{project.client}</p>

                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>

                {/* Service pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-400"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto border-t border-white/10 pt-6">
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                  >
                    Vaka Analizini İncele
                    <ArrowRight className="h-4 w-4 transition-transform duration-[230ms] group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6 border-t border-white/10 pt-12 text-center"
        >
          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            <span className="font-semibold text-white">100+ marka</span> ile farklı sektörlerde iletişim, marka ve dijital deneyim projeleri gerçekleştirdik.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Tüm Referansları İncele
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}

function ClientLogo({ src, name }: { src: string; name: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      className="h-7 w-auto object-contain brightness-0 invert"
      onError={(e) => {
        const el = e.currentTarget;
        el.style.display = 'none';
        const fallback = el.nextElementSibling as HTMLElement | null;
        if (fallback) fallback.style.display = 'block';
      }}
    />
  );
}
