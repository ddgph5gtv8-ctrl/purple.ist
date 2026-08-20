import Link from 'next/link';
import Image from 'next/image';

const services = [
  { label: 'Marka Stratejisi', href: '/#services' },
  { label: 'Kurumsal İletişim', href: '/#services' },
  { label: 'Dijital İletişim', href: '/#services' },
  { label: 'Dijital Deneyim', href: '/#services' },
  { label: 'Kreatif Üretim', href: '/#services' },
];

const explore = [
  { label: 'Neden Purple?', href: '/#purple-iq' },
  { label: 'Referanslar', href: '/#work' },
  { label: 'Purple IQ', href: '/#purple-iq' },
  { label: 'Perspektif', href: '/perspektif' },
  { label: 'İletişim', href: '/contact' },
];

const legal = [
  { label: 'KVKK', href: '/contact' },
  { label: 'Gizlilik Politikası', href: '/contact' },
  { label: 'Çerez Politikası', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-zinc-200">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">

          {/* Column 1 – Brand */}
          <div className="max-w-sm">
            <Image
              src="/images/purple-logo.png"
              alt="Purple logo"
              width={132}
              height={40}
              className="h-8 w-auto object-contain sm:h-9"
            />
            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Markaların görünürlüğünü değil, etkisini büyütüyoruz. Strateji, iletişim ve yaratıcılığı tek bir çatı altında birleştirerek uzun soluklu iş ortaklıkları kuruyoruz.
            </p>
          </div>

          {/* Column 2 – Services */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">Hizmetler</p>
            <ul className="mt-5 space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Explore */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">Keşfet</p>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">İletişim</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="font-medium text-zinc-300">PRP İLETİŞİM VE REKLAM HİZ. TİC. LTD. ŞTİ.</li>
              <li className="text-zinc-500">Çekmeköy / İstanbul</li>
              <li>
                <Link href="tel:+902165142479" className="text-zinc-400 transition-colors hover:text-white">
                  +90 216 514 24 79
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@purple.ist" className="text-zinc-400 transition-colors hover:text-white">
                  hello@purple.ist
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/company/purple-ist" target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition-colors hover:text-white">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/purple.ist" target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition-colors hover:text-white">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-8">
          <p className="text-sm text-zinc-500">© 2026 Purple. Tüm hakları saklıdır.</p>
          <ul className="flex flex-wrap gap-4">
            {legal.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-zinc-500 transition-colors hover:text-zinc-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Craftsmanship signature */}
      <div className="border-t border-white/[0.05] pb-5 pt-6">
        <p className="text-center text-[12px] text-zinc-600 opacity-85 transition-opacity duration-300 hover:opacity-100">
          Crafted by Purple with Human Creativity &amp; AI.
        </p>
      </div>
    </footer>
  );
}
