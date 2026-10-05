'use client';

import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Work } from '@/lib/works';

export default function Lightbox({
  items,
  index,
  setIndex,
}: {
  items: Work[];
  index: number | null;
  setIndex: (i: number | null) => void;
}) {
  const close = useCallback(() => setIndex(null), [setIndex]);
  const step = useCallback(
    (d: number) => {
      if (index === null) return;
      setIndex((index + d + items.length) % items.length);
    },
    [index, items.length, setIndex]
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

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 md:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center border border-bone/30 text-bone transition-colors hover:bg-coral md:right-8 md:top-8"
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
            key={item.src}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative flex max-h-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              sizes="90vw"
              className="h-auto max-h-[80vh] w-auto max-w-[88vw] object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="font-serif text-xl italic text-bone">{item.alt}</span>
              <span className="ml-3 text-xs tracking-wider2 text-bone/50">
                {index + 1} / {items.length}
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
