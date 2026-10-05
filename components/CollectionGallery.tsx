'use client';

import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { Work } from '@/lib/works';
import { chapters } from '@/lib/collections';
import WorkCard from './WorkCard';
import Lightbox from './Lightbox';

const PREVIEW = 8;
const pad = (v: number) => String(v).padStart(2, '0');

export default function CollectionGallery({ items }: { items: Work[] }) {
  const [active, setActive] = useState<string>('all');
  const [box, setBox] = useState<{ list: Work[]; index: number | null }>({ list: [], index: null });
  const top = useRef<HTMLDivElement>(null);

  const groups = useMemo(
    () =>
      chapters
        .map((c, i) => ({ ...c, n: i + 1, list: items.filter((w) => w.cat === c.id) }))
        .filter((g) => g.list.length > 0),
    [items]
  );
  const total = groups.reduce((s, g) => s + g.list.length, 0);
  const shown = active === 'all' ? groups : groups.filter((g) => g.id === active);

  const pick = (id: string) => {
    setActive(id);
    const el = top.current;
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 76;
      if (window.scrollY > y) window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const tabs = [{ id: 'all', label: 'Everything', count: total }, ...groups.map((g) => ({ id: g.id, label: g.label, count: g.list.length }))];

  return (
    <div ref={top}>
      {/* Filter bar */}
      <div className="sticky top-[60px] z-30 -mx-4 border-y border-ink/10 bg-bone/95 px-4 backdrop-blur md:-mx-10 md:px-10">
        <div className="no-scrollbar flex items-center gap-1 overflow-x-auto py-3 xl:justify-center">
          {tabs.map((t) => {
            const on = t.id === active;
            return (
              <button
                key={t.id}
                onClick={() => pick(t.id)}
                aria-pressed={on}
                className={`relative shrink-0 px-3.5 py-2.5 font-sans text-[0.7rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  on ? 'text-bone' : 'text-ink/70 hover:text-coral'
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="gallery-tab"
                    className="absolute inset-0 bg-coral"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative">
                  {t.label} <span className={on ? 'ml-1 opacity-75' : 'ml-1 opacity-50'}>{t.count}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chapters */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {shown.map((g) => {
            const preview = active === 'all';
            const list = preview ? g.list.slice(0, PREVIEW) : g.list;
            return (
              <section key={g.id} className="border-b border-ink/10 py-16 last:border-b-0 md:py-20">
                <div className="grid items-end gap-6 md:grid-cols-12">
                  <div className="flex items-start gap-5 md:col-span-7">
                    <span className="font-display text-5xl leading-none text-coral/85 md:text-7xl">{pad(g.n)}</span>
                    <div>
                      <p className="eyebrow text-cognac">
                        Chapter {g.n} of {groups.length}
                      </p>
                      <h2 className="mt-2 font-display text-3xl leading-tight tracking-wide md:text-5xl">{g.label}</h2>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <p className="leading-relaxed text-ink/70">{g.note}</p>
                    <p className="mt-3 font-sans text-xs uppercase tracking-wider2 text-ink/45">
                      {g.list.length} {g.unit}
                    </p>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
                  {list.map((w, i) => (
                    <WorkCard
                      key={w.src}
                      work={w}
                      n={i + 1}
                      total={g.list.length}
                      delay={Math.min((i % 4) * 0.07, 0.28)}
                      onOpen={() => setBox({ list: g.list, index: i })}
                      className={preview ? (i >= 6 ? 'hidden xl:block' : i >= 4 ? 'hidden md:block' : '') : ''}
                    />
                  ))}
                </div>

                <div className="mt-10 flex justify-center">
                  {preview && g.list.length > 4 ? (
                    <button onClick={() => pick(g.id)} className="btn btn-ghost-dark">
                      View all {g.list.length} {g.unit} <ArrowRight size={16} />
                    </button>
                  ) : !preview ? (
                    <button onClick={() => pick('all')} className="btn btn-ghost-dark">
                      <ArrowLeft size={16} /> Back to every chapter
                    </button>
                  ) : null}
                </div>
              </section>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <Lightbox items={box.list} index={box.index} setIndex={(i) => setBox((b) => ({ ...b, index: i }))} />
    </div>
  );
}
