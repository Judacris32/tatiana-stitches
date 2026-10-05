'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Plus } from 'lucide-react';
import type { Work } from '@/lib/works';
import { categoryLabels } from '@/lib/site';

export default function Gallery({
  items,
  filters = false,
  columns = 'columns-2 md:columns-3 xl:columns-4',
  dark = false,
}: {
  items: Work[];
  filters?: boolean;
  columns?: string;
  dark?: boolean;
}) {
  const cats = useMemo(() => ['all', ...Array.from(new Set(items.map((i) => i.cat)))], [items]);
  const [active, setActive] = useState('all');
  const [index, setIndex] = useState<number | null>(null);

  const shown = active === 'all' ? items : items.filter((i) => i.cat === active);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, close, step]);

  return (
    <div>
      {filters && (
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {cats.map((c) => {
            const count = c === 'all' ? items.length : items.filter((i) => i.cat === c).length;
            const on = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`border px-5 py-2.5 font-sans text-[0.72rem] uppercase tracking-wider2 transition-colors duration-300 ${
                  on
                    ? 'border-coral bg-coral text-bone'
                    : dark
                      ? 'border-bone/25 text-bone/75 hover:border-coral hover:bg-coral hover:text-bone'
                      : 'border-ink/20 text-ink/75 hover:border-ink hover:bg-ink hover:text-bone'
                }`}
              >
                {categoryLabels[c] ?? c} <span className="ml-1 opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      )}

      <motion.div layout className={`${columns} gap-4 [column-fill:_balance]`}>
        <AnimatePresence mode="popLayout">
          {shown.map((w, i) => (
            <motion.button
              layout
              key={w.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.025, 0.4) }}
              onClick={() => setIndex(i)}
              className="group relative mb-4 block w-full overflow-hidden bg-stone-deep text-left"
            >
              <Image
                src={w.src}
                alt={w.alt}
                width={w.w}
                height={w.h}
                sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-end justify-between gap-3">
                  <p className="font-serif text-lg italic leading-tight text-bone">{w.alt}</p>
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-coral text-bone">
                    <Plus size={16} />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {index !== null && shown[index] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 md:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 grid h-12 w-12 place-items-center border border-bone/30 text-bone transition-colors hover:bg-coral md:right-8 md:top-8"
            >
              <X />
            </button>
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-2 z-10 grid h-12 w-12 place-items-center bg-bone/10 text-bone transition-colors hover:bg-coral md:left-8"
            >
              <ChevronLeft />
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-2 z-10 grid h-12 w-12 place-items-center bg-bone/10 text-bone transition-colors hover:bg-coral md:right-8"
            >
              <ChevronRight />
            </button>

            <motion.figure
              key={shown[index].src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative flex max-h-full flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={shown[index].src}
                alt={shown[index].alt}
                width={shown[index].w}
                height={shown[index].h}
                sizes="90vw"
                className="h-auto max-h-[80vh] w-auto max-w-[88vw] object-contain"
              />
              <figcaption className="mt-4 text-center">
                <span className="font-serif text-xl italic text-bone">{shown[index].alt}</span>
                <span className="ml-3 text-xs tracking-wider2 text-bone/50">
                  {index + 1} / {shown.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
