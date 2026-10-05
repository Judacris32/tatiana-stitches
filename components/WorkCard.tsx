'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import type { Work } from '@/lib/works';

export default function WorkCard({
  work,
  n,
  total,
  onOpen,
  delay = 0,
  dark = false,
  className = '',
}: {
  work: Work;
  n: number;
  total: number;
  onOpen: () => void;
  delay?: number;
  dark?: boolean;
  className?: string;
}) {
  const pad = (v: number) => String(v).padStart(2, '0');
  return (
    <motion.button
      layout
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.7, 0.2, 1], layout: { duration: 0.5 } }}
      className={`work-card group relative block w-full overflow-hidden text-left ${dark ? 'bg-ink-soft' : 'bg-stone-deep'} ${className}`}
      aria-label={`Open photo: ${work.alt}`}
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={work.src}
          alt={work.alt}
          fill
          sizes="(min-width:1280px) 23vw, (min-width:768px) 31vw, 48vw"
          className="work-card-img object-cover"
          style={{ objectPosition: 'center 22%' }}
        />
      </div>

      <span className="work-card-frame pointer-events-none absolute inset-3 border border-bone/0" />

      <span className="absolute left-4 top-4 font-sans text-[0.68rem] tracking-wider2 text-bone opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {pad(n)} / {pad(total)}
      </span>

      <div className="work-card-caption absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/55 to-transparent px-5 pb-5 pt-16">
        <div className="flex items-end justify-between gap-3">
          <p className="font-serif text-lg italic leading-tight text-bone">{work.alt}</p>
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-coral text-bone transition-transform duration-500 group-hover:rotate-90">
            <Plus size={16} />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
