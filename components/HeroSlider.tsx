'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';

const slides = [
  { src: '/images/work/ts-52.webp', label: 'Green and mustard prints', pos: 'center 30%' },
  { src: '/images/work/ts-40.webp', label: 'Printed sets in the showroom', pos: 'center 35%' },
  { src: '/images/work/ts-31.webp', label: 'Kente, styled loud', pos: 'center 25%' },
  { src: '/images/work/ts-36.webp', label: 'Soft whites for slow days', pos: 'center 40%' },
  { src: '/images/work/ts-57.webp', label: 'Heritage red with the hand fan', pos: 'center 30%' },
];

const DURATION = 6500;

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % slides.length), DURATION);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden bg-ink text-bone">
      {slides.map((s, n) =>
        n > 0 && !ready ? null : (
        <motion.div
          key={s.src}
          className="absolute inset-0"
          initial={{ opacity: n === 0 ? 1 : 0 }}
          animate={{ opacity: n === i ? 1 : 0, scale: n === i ? 1 : 1.08 }}
          transition={{
            opacity: { duration: 1.4, ease: 'easeInOut' },
            scale: n === i ? { duration: DURATION / 1000 + 1.5, ease: 'linear' } : { duration: 0 , delay: 1.4 },
          }}
        >
          <Image
            src={s.src}
            alt=""
            fill
            priority={n === 0}
            loading={n === 0 ? undefined : 'eager'}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: s.pos }}
          />
        </motion.div>
        )
      )}

      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(21,17,14,0.75)_80%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-coral-light" />
          <p className="eyebrow text-stone">Bespoke tailoring from Onitsha</p>
          <span className="h-px w-10 bg-coral-light" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-8 font-display text-[2.9rem] leading-[1.02] tracking-wide sm:text-6xl md:text-[5.6rem]"
        >
          Dressed for the room
          <br />
          <span className="font-serif italic text-stone">before you walk in.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-bone/85"
        >
          Senators, agbada, isiagu and bold African prints, cut to your measure by the team of award winning
          creative director {site.founder}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-11 flex flex-wrap justify-center gap-4"
        >
          <Link href="/collections" className="btn btn-coral">
            See the collections <ArrowRight size={16} />
          </Link>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-ghost-light">
            Book a fitting
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-[1400px] items-end justify-between gap-6 px-5 pb-8 md:px-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={slides[i].label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="hidden font-serif text-lg italic text-bone/80 md:block"
            >
              <span className="mr-3 font-sans text-xs not-italic tracking-wider2 text-coral-light">
                0{i + 1}
              </span>
              {slides[i].label}
            </motion.p>
          </AnimatePresence>
          <div className="mx-auto flex gap-2 md:mx-0">
            {slides.map((s, n) => (
              <button
                key={s.src}
                aria-label={`Show slide ${n + 1}`}
                onClick={() => setI(n)}
                className="relative h-[3px] w-10 overflow-hidden bg-bone/25 md:w-14"
              >
                {n === i && (
                  <motion.span
                    key={`bar-${i}`}
                    className="absolute inset-y-0 left-0 bg-coral-light"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: DURATION / 1000, ease: 'linear' }}
                  />
                )}
                {n < i && <span className="absolute inset-0 bg-bone/70" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
