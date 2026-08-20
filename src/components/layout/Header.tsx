'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Purple IQ', href: '/#purple-iq' },
  { label: 'Referanslarımız', href: '/#work' },
  { label: 'Uzmanlık Alanlarımız', href: '/#services' },
  { label: 'Büyüme Planı', href: '/#growth-plan' },
  { label: 'Perspektif', href: '/#purple-perspective' },
  { label: 'İletişim', href: '/#contact' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key closes menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Focus close button when panel opens
  useEffect(() => {
    if (menuOpen) closeButtonRef.current?.focus();
  }, [menuOpen]);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  const close = () => setMenuOpen(false);
  const resetPurpleIqState = () => {
    window.dispatchEvent(new Event('purpleiq:reset-test'));
  };

  const handleMobileNavClick = () => {
    resetPurpleIqState();
    close();
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b bg-white/95 text-zinc-950 transition-all duration-300 ease-out backdrop-blur supports-[backdrop-filter]:bg-white/80',
          scrolled ? 'border-zinc-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)]' : 'border-transparent shadow-none',
        )}
      >
        <div className="relative mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-6 sm:h-[70px] sm:px-8 lg:px-10">

          {/* Logo — desktop-approved, untouched */}
          <Link href="/" onClick={resetPurpleIqState} className="-ml-3 flex shrink-0 items-center overflow-visible sm:-ml-4" aria-label="Purple ana sayfa">
            <img
              src="/images/purple-logo.png"
              alt="purple.ist"
              height={84}
              loading="eager"
              className="block h-[42px] w-auto lg:h-[48px]"
              style={{ width: 'auto' }}
            />
          </Link>

          {/* Desktop nav — locked to xl (1280px+), desktop-approved */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 xl:flex lg:gap-6" aria-label="Ana navigasyon">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={resetPurpleIqState}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'whitespace-nowrap text-[15px] font-medium transition-colors duration-200',
                    active ? 'text-zinc-950' : 'text-zinc-600 hover:text-zinc-950',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right slot */}
          <div className="flex items-center lg:min-w-[200px] lg:justify-end">
            {/* Desktop CTA — locked to xl+ */}
            <div className="hidden xl:block">
              <Link
                href="/contact"
                onClick={resetPurpleIqState}
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'inline-flex rounded-full bg-zinc-950 px-4 py-1.5 text-sm text-white hover:bg-zinc-800',
                )}
              >
                <span className="inline-flex items-center gap-2">
                  Projeni Anlat
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Hamburger — tablet and mobile only */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              className="-mr-1 flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Off-canvas menu — tablet and mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[55] bg-black/30 xl:hidden"
              aria-hidden="true"
              onClick={close}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigasyon menüsü"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-y-0 right-0 z-[60] flex w-[300px] flex-col bg-white shadow-2xl xl:hidden sm:w-[340px]"
            >
              {/* Panel header */}
              <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-zinc-100 px-6 sm:h-[70px]">
                <Link href="/" onClick={handleMobileNavClick} aria-label="Purple ana sayfa">
                  <img
                    src="/images/purple-logo.png"
                    alt="purple.ist"
                    height={72}
                    className="block h-[36px] w-auto"
                    style={{ width: 'auto' }}
                  />
                </Link>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  aria-label="Menüyü kapat"
                  className="-mr-1 flex h-10 w-10 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobil navigasyon">
                <ul className="space-y-0.5">
                  {navItems.map((item, index) => {
                    const active = isActiveLink(item.href);
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.05 + index * 0.04, ease: 'easeOut' }}
                      >
                        <Link
                          href={item.href}
                          onClick={handleMobileNavClick}
                          aria-current={active ? 'page' : undefined}
                          className={cn(
                            'flex items-center rounded-xl px-4 py-3 text-[15px] font-medium transition-colors',
                            active
                              ? 'bg-zinc-950 text-white'
                              : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950',
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* CTA */}
              <div className="shrink-0 border-t border-zinc-100 p-5">
                <Link
                  href="/contact"
                  onClick={handleMobileNavClick}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-800"
                >
                  Projeni Anlat
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

