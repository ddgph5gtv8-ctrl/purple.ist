'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

import { Section } from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

const contactItems = [
  '🏢 PRP İLETİŞİM VE REKLAM HİZ. TİC. LTD. ŞTİ.',
  '📍 Ömerli Mah. Kadirova Cad. Dekar Kıyıbahçe Sitesi No: 36 B Blok Daire 27/B Çekmeköy / İstanbul Türkiye',
  '✉ hello@purple.ist',
  '💼 LinkedIn',
  '📅 Online & Yüz Yüze Toplantı',
];

const defaultForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  meetingType: 'Online Görüşme — Google Meet üzerinden',
  message: '',
};

type FormState = typeof defaultForm;
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [form, setForm] = useState<FormState>(defaultForm);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const isSubmittingRef = useRef(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
    }
  };

  const submitForm = async (event?: React.FormEvent | React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (isSubmittingRef.current) {
      return;
    }

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    isSubmittingRef.current = true;
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          name,
          email,
          company: form.company.trim(),
          phone: form.phone.trim(),
          meetingType: form.meetingType || 'Online Görüşme — Google Meet üzerinden',
          message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || 'Gönderim başarısız oldu.');
      }

      setForm(defaultForm);
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      isSubmittingRef.current = false;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    await submitForm();
  };

  return (
    <Section id="contact" className="bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <Badge variant="primary">İLETİŞİM</Badge>
          <Heading as="h2" level="h2" className="mt-5 text-balance">
            Markanızı Birlikte Büyütelim.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            İletişim hedeflerinizi konuşalım. Purple IQ analizinizle başlayabilir veya doğrudan ekibimizle iletişime geçebilirsiniz.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8"
          >
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">İletişim Bilgileri</h3>
            <ul className="mt-6 space-y-4 text-base text-zinc-300">
              {contactItems.map((item) => (
                <li key={item} className="leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8"
          >
            {status === 'success' ? (
              <FormSuccess />
            ) : status === 'error' ? (
              <FormError />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <input type="hidden" name="meetingType" value={form.meetingType} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <label htmlFor="contact-name" className="text-sm text-zinc-400">
                    <span className="mb-2 block">Ad Soyad</span>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition-colors focus:border-white/30"
                    />
                  </label>
                  <label htmlFor="contact-company" className="text-sm text-zinc-400">
                    <span className="mb-2 block">Şirket</span>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition-colors focus:border-white/30"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label htmlFor="contact-email" className="text-sm text-zinc-400">
                    <span className="mb-2 block">E-posta</span>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition-colors focus:border-white/30"
                    />
                  </label>
                  <label htmlFor="contact-phone" className="text-sm text-zinc-400">
                    <span className="mb-2 block">Telefon (Opsiyonel)</span>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-full border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition-colors focus:border-white/30"
                    />
                  </label>
                </div>

                <label htmlFor="contact-message" className="block text-sm text-zinc-400">
                  <span className="mb-2 block">Mesajınız</span>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[1.25rem] border border-white/10 bg-[#050505] px-4 py-3 text-white outline-none transition-colors focus:border-white/30"
                  />
                </label>

                <button
                  type="submit"
                  onClick={(event) => {
                    void submitForm(event);
                  }}
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Gönderiliyor...' : 'Görüşme Talep Et'}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-8"
        >
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">
            Önce Markanızı Analiz Edelim.
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Purple IQ ile markanızın iletişim gücünü birkaç dakikada analiz edin. Sonuçları birlikte değerlendirerek size en uygun iletişim yol haritasını oluşturalım.
          </p>
          <Link href="/#purple-iq">Markanızı Analiz Edin</Link>
        </motion.div>
      </div>
    </Section>
  );
}

function FormSuccess() {
  return (
    <div className="flex flex-col items-center gap-5 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a855f7]/15">
        <CheckCircle2 className="h-7 w-7 text-[#a855f7]" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">Talebiniz alındı.</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">En kısa sürede sizinle iletişime geçeceğiz.</p>
      </div>
    </div>
  );
}

function FormError() {
  return (
    <div className="flex flex-col items-center gap-5 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/15">
        <CheckCircle2 className="h-7 w-7 text-red-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">Talebiniz gönderilemedi.</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">Lütfen tekrar deneyin.</p>
      </div>
    </div>
  );
}
