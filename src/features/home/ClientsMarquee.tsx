'use client';

import { useState } from 'react';

const clients = [
  { src: '/images/purple-client-logos/Agito.png', alt: 'Agito' },
  { src: '/images/purple-client-logos/Aras.png', alt: 'Aras' },
  { src: '/images/purple-client-logos/ATA.png', alt: 'ATA' },
  { src: '/images/purple-client-logos/Biruni.png', alt: 'Biruni' },
  { src: '/images/purple-client-logos/Books and Cafe.png', alt: 'Books and Cafe' },
  { src: '/images/purple-client-logos/Celtic Pub.png', alt: 'Celtic Pub' },
  { src: '/images/purple-client-logos/Daxler.png', alt: 'Daxler' },
  { src: '/images/purple-client-logos/Derya.png', alt: 'Derya' },
  { src: '/images/purple-client-logos/Düğün.com.png', alt: 'Düğün.com' },
  { src: '/images/purple-client-logos/Empera.png', alt: 'Empera' },
  { src: '/images/purple-client-logos/Huğlu.png', alt: 'Huğlu' },
  { src: '/images/purple-client-logos/ISS.png', alt: 'ISS' },
  { src: '/images/purple-client-logos/İstanbul jewelery.png', alt: 'İstanbul jewelery' },
  { src: '/images/purple-client-logos/javdes.png', alt: 'javdes' },
  { src: '/images/purple-client-logos/Loris.png', alt: 'Loris' },
  { src: '/images/purple-client-logos/Marie Claire.png', alt: 'Marie Claire' },
  { src: '/images/purple-client-logos/Mertsav.png', alt: 'Mertsav' },
  { src: '/images/purple-client-logos/Mtraş.png', alt: 'Mtraş' },
  { src: '/images/purple-client-logos/PAVO.png', alt: 'PAVO' },
  { src: '/images/purple-client-logos/Sia.png', alt: 'Sia' },
  { src: '/images/purple-client-logos/system defence.png', alt: 'System Defence' },
  { src: '/images/purple-client-logos/The Grand Tarabya.png', alt: 'The Grand Tarabya' },
  { src: '/images/purple-client-logos/Toçev.png', alt: 'Toçev' },
  { src: '/images/purple-client-logos/Tual.png', alt: 'Tual' },
  { src: '/images/purple-client-logos/Turmepa.png', alt: 'Turmepa' },
  { src: '/images/purple-client-logos/Ubm.png', alt: 'Ubm' },
];

export function ClientsMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const loop = [...clients, ...clients];
  const whiteLogos = new Set(['Books and Cafe', 'Loris', 'Marie Claire', 'Mtraş', 'Sia', 'System Defence', 'The Grand Tarabya', 'Toçev', 'Derya', 'Empera', 'Huğlu', 'javdes']);
  const enlargedLogos = new Set(['Aras', 'ATA', 'Daxler', 'Marie Claire', 'Empera', 'Derya', 'İstanbul jewelery', 'Toçev', 'Huğlu', 'Mertsav', 'Javdes', 'Tual', 'Loris', 'The Grand Tarabya', 'Mtraş', 'System Defence']);

  return (
    <section className="border-t border-white/10 bg-[#050505] py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-8 flex items-center justify-center">
          <span className="font-[family-name:var(--font-manrope),sans-serif] text-3xl font-semibold leading-[var(--line-height-snug)] tracking-[-0.03em] text-white sm:text-4xl">
            Birlikte Çalıştığımız Markalar
          </span>
        </div>

        <div className="relative overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#050505] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#050505] to-transparent" />

          <div
            className="flex w-max min-w-max items-center gap-10 whitespace-nowrap sm:gap-12 md:gap-14"
            style={{ animation: 'marquee 50s linear infinite', animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {loop.map((client, index) => (
              <div
                key={`${client.alt}-${index}`}
                className={`flex items-center justify-center ${enlargedLogos.has(client.alt) ? 'h-40 w-[360px] sm:h-48 sm:w-[440px] md:h-56 md:w-[540px]' : 'h-20 w-[180px] sm:h-24 sm:w-[220px] md:h-32 md:w-[280px]'}`}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={`h-full w-auto max-w-full object-contain opacity-80 grayscale-0 transition-opacity duration-300 ${whiteLogos.has(client.alt) ? 'brightness-0 invert' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
