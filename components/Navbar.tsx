'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { nav, site } from '@/lib/site';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 transition-all duration-500 ${open ? 'z-[70]' : 'z-50'} ${
          open ? 'bg-transparent py-4' : scrolled ? 'bg-ink/95 py-3 shadow-[0_1px_0_rgba(246,241,232,0.08)] backdrop-blur' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
          <Link href="/" aria-label="Tatiana Stitches home" className="relative block">
            <Image
              src="/images/brand/logo-light.png"
              alt="Tatiana Stitches"
              width={1034}
              height={491}
              priority
              className={`h-auto transition-all duration-500 ${scrolled ? 'w-[92px]' : 'w-[118px]'}`}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative font-sans text-[0.74rem] uppercase tracking-wider2 transition-colors ${
                    active ? 'text-bone' : 'text-bone/70 hover:text-bone'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-coral transition-all duration-500 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-coral !px-6 !py-3">
              Book a fitting
            </a>
          </div>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`relative grid h-11 w-11 place-items-center border text-bone transition-colors hover:bg-coral lg:hidden ${open ? 'border-coral bg-coral' : 'border-bone/30'}`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
            className="fixed inset-0 z-[60] flex flex-col justify-between overflow-y-auto bg-ink px-6 pb-10 pt-28 lg:hidden"
          >
            <nav className="flex flex-col">
              {nav.map((item, i) => {
                const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center justify-between border-b py-4 font-display text-3xl transition-colors hover:text-coral-light ${
                      active ? 'border-coral text-coral-light' : 'border-bone/10 text-bone'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {active && <span className="h-2 w-2 rotate-45 bg-coral" />}
                      {item.label}
                    </span>
                    <ArrowRight size={18} className="text-coral" />
                  </Link>
                </motion.div>
                );
              })}
            </nav>
            <div className="space-y-2 text-sm text-bone/60">
              <p>{site.addressShort}</p>
              <a href={site.phoneHref} className="block text-bone">
                {site.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
