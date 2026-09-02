'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone, Camera, Share2, Play, ExternalLink, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import { sectionReveal } from '@/lib/motion';

const fadeUp = sectionReveal;

const valueCards = [
  {
    title: 'Uzun Vadeli İş Ortaklığı',
    description: 'Projelerle değil, markalarla düşünürüz. Her müşterimizle uzun soluklu, güven temelli bir ortaklık inşa ediyoruz.',
  },
  {
    title: 'Stratejik Yaklaşım',
    description: 'Yaratıcı çalışmalarımızı strateji üzerine inşa ediyoruz. Her karar, markanızın büyüme hedeflerine hizmet eder.',
  },
  {
    title: 'Tek Çatı Altında Üretim',
    description: 'Strateji, kreatif, dijital ve fuar iletişimi; tüm süreçleri tek bir ekiple yönetiyoruz.',
  },
];

export function ContactPage() {
  return (
    <main id="main-content" className="bg-[#050505] text-white">
      <ContactHero />
      <ContactMain />
      <ValueCards />
      <MapSection />
      <FinalCTA />
    </main>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */

function ContactHero() {
  return (
    <section className="bg-[#050505] pb-0 pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <Badge variant="primary">İLETİŞİM</Badge>
          <Heading as="h1" level="h1" className="mt-5 text-balance">
            Bir Sonraki Başarı Hikâyesi Sizinle Başlayabilir.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Yeni bir marka inşa ediyor, mevcut iletişim süreçlerinizi güçlendirmek istiyor ya da uzun vadeli bir iletişim ortağı arıyorsanız, tanışalım.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Contact Section ──────────────────────────────────────────────────── */

function ContactMain() {
  return (
    <Section id="contact" className="bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

function ContactInfo() {
  return (
    <motion.div
      {...fadeUp}
      className="flex flex-col gap-8 rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8"
    >
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">İletişim Bilgileri</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Ofisimize gelin, bize yazın ya da arayın.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Company */}
        <div className="flex gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <MapPin className="h-4 w-4 text-zinc-400" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Adres</p>
            <p className="mt-1 text-sm leading-6 text-zinc-300 font-medium">PRP İLETİŞİM VE REKLAM HİZ. TİC. LTD. ŞTİ.</p>
            <p className="text-sm leading-6 text-zinc-400">
              Ömerli Mah. Kadirova Cad.<br />
              Dekar Kıyıbahçe Sitesi<br />
              No: 36 B Blok Daire 27/B<br />
              Çekmeköy / İstanbul
            </p>
            <Link
              href="https://maps.app.goo.gl/hcYF4bcY1KkAso8w9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#a855f7] transition-colors hover:text-[#d8b4fe]"
            >
              Google Maps&apos;te Aç <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Phone className="h-4 w-4 text-zinc-400" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Telefon</p>
            <Link href="tel:+902165142479" className="mt-1 block text-sm text-zinc-300 transition-colors hover:text-white">
              +90 216 514 24 79
            </Link>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Mail className="h-4 w-4 text-zinc-400" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">E-posta</p>
            <Link href="mailto:hello@purple.ist" className="mt-1 block text-sm text-zinc-300 transition-colors hover:text-white">
              hello@purple.ist
            </Link>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="border-t border-white/10 pt-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Sosyal Medya</p>
        <div className="mt-4 flex gap-3">
          <SocialLink href="https://www.linkedin.com/company/71548333/admin/dashboard/" icon={Share2} label="LinkedIn" />
          <SocialLink href="https://www.instagram.com/purple.ist1/" icon={Camera} label="Instagram" />
          <SocialLink href="https://www.youtube.com/@purplecreative1378" icon={Play} label="YouTube" />
        </div>
      </div>

      {/* Availability */}
      <div className="mt-auto rounded-[1rem] border border-[#a855f7]/20 bg-[#a855f7]/[0.07] px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a855f7] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a855f7]" />
          </span>
          <p className="text-sm text-zinc-300">Yeni projelere açığız.</p>
        </div>
        <p className="mt-1 pl-4 text-xs text-zinc-500">Online & Yüz Yüze Toplantı</p>
      </div>
    </motion.div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.FC<{ className?: string }>; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
}

/* ─── Contact Form ──────────────────────────────────────────────────────────── */

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  meetingType: string;
  message: string;
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    meetingType: 'Online Görüşme — Google Meet üzerinden',
    message: '',
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const subject = encodeURIComponent('Görüşme Talebi');
      const body = encodeURIComponent(
        [
          'Ad Soyad: ' + form.name,
          'Şirket: ' + (form.company || '-'),
          'E-posta: ' + form.email,
          'Telefon: ' + (form.phone || '-'),
          'Görüşme Türü: ' + form.meetingType,
          'Mesaj: ' + form.message,
          'Not: Google Meet bağlantısı otomatik oluşturulmayacak; uygun tarih ve saat belirlendikten sonra manuel olarak paylaşılacaktır.',
        ].join('\n')
      );

      setStatus('success');
      await new Promise((r) => setTimeout(r, 250));
      window.location.href = `mailto:hello@purple.ist?subject=${subject}&body=${body}`;
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8"
    >
      {status === 'success' ? (
        <FormSuccess />
      ) : status === 'error' ? (
        <FormError />
      ) : (
        <>
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">Projeni Kısaca Anlat.</h3>
          <p className="mt-2 text-sm text-zinc-500">Formu doldur, sana en kısa sürede ulaşalım.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Ad Soyad" name="name" value={form.name} onChange={handleChange} required />
              <FormField label="Şirket" name="company" value={form.company} onChange={handleChange} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="E-posta" name="email" type="email" value={form.email} onChange={handleChange} required />
              <FormField label="Telefon (Opsiyonel)" name="phone" type="tel" value={form.phone} onChange={handleChange} />
            </div>

            <div>
              <label className="block text-sm text-zinc-400">
                <span className="mb-2 block">Görüşme Türü</span>
                <select
                  name="meetingType"
                  value={form.meetingType}
                  onChange={handleChange}
                  className="w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/25"
                >
                  <option value="Online Görüşme — Google Meet üzerinden">Online Görüşme — Google Meet üzerinden</option>
                  <option value="Yüz Yüze Görüşme">Yüz Yüze Görüşme</option>
                </select>
              </label>
            </div>

            <div>
              <label className="block text-sm text-zinc-400">
                <span className="mb-2 block">Mesaj</span>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Projeniz, hedefleriniz veya aklınızdaki soru..."
                  className="w-full resize-none rounded-[1.25rem] border border-white/10 bg-[#050505] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white/25"
                />
              </label>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-zinc-100 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Gönderiliyor...' : 'Görüşme Talep Et'}
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-zinc-500">İlk dönüşümüzü mümkün olan en kısa sürede yapıyoruz.</p>
            </div>
          </form>
        </>
      )}
    </motion.div>
  );
}

function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm text-zinc-400">
      <span className="mb-2 block">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-white/25"
      />
    </label>
  );
}

function FormSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col items-center gap-5 py-12 text-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a855f7]/15">
        <CheckCircle2 className="h-7 w-7 text-[#a855f7]" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">Talebiniz alındı.</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    </motion.div>
  );
}

function FormError() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col items-center gap-5 py-12 text-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/15">
        <CheckCircle2 className="h-7 w-7 text-red-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">Talebiniz gönderilemedi.</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Lütfen tekrar deneyin.
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Value Cards ───────────────────────────────────────────────────────────── */

function ValueCards() {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-7"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10">
                <span className="text-sm font-semibold text-[#d8b4fe]">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Map Section ───────────────────────────────────────────────────────────── */

function MapSection() {
  return (
    <Section className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <motion.div {...fadeUp} className="overflow-hidden rounded-[1.5rem] border border-white/10">
          <iframe
            title="Purple İstanbul Ofis"
            src="https://maps.google.com/maps?q=Ömerli+Mah.+Çekmeköy+İstanbul&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
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
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <Heading as="h2" level="h2" className="text-balance">
            Kahve İçerek Tanışalım.
          </Heading>
          <p className="text-lg leading-8 text-zinc-400">
            Bazen en iyi projeler tek bir sohbetle başlar.
          </p>
          <Link
            href="mailto:hello@purple.ist?subject=Toplantı Talebi"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-zinc-100"
          >
            Toplantı Planla
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
