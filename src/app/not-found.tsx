import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-6 py-24 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
          Sayfa bulunamadı.
        </h1>
        <p className="mt-5 text-base leading-8 text-zinc-400">
          Aradığınız sayfa taşınmış olabilir ya da mevcut değil. Ana sayfaya dönerek devam edebilirsiniz.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all hover:-translate-y-0.5"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
