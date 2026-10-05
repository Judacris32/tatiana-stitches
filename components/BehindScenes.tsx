'use client';

import { useMemo, useState } from 'react';
import type { Work } from '@/lib/works';
import { stages } from '@/lib/collections';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import WorkCard from './WorkCard';
import Lightbox from './Lightbox';

export default function BehindScenes({ items }: { items: Work[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const groups = useMemo(
    () => stages.map((s) => ({ ...s, list: items.filter((w) => w.stage === s.id) })).filter((g) => g.list.length > 0),
    [items]
  );
  const flat = useMemo(() => groups.flatMap((g) => g.list), [groups]);

  return (
    <section id="behind-the-scenes" className="grain scroll-mt-16 bg-ink py-24 text-bone md:py-32">
      <div className="mx-auto max-w-[1500px] px-4 md:px-10">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeading light eyebrow="Behind the scenes" title="Before the photo," italic="there is the work.">
              <p>
                No outfit starts on a hanger. Here is what happens in our workroom between your first visit and the day
                you wear it out.
              </p>
            </SectionHeading>
          </div>
          <Reveal delay={0.15} className="md:col-span-5">
            <ol className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {groups.map((g, i) => (
                <li key={g.id}>
                  <a
                    href={`#stage-${g.id}`}
                    className="link-under font-sans text-xs uppercase tracking-wider2 text-bone/60 transition-colors hover:text-coral-light"
                  >
                    <span className="mr-2 text-coral-light">0{i + 1}</span>
                    {g.label}
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="mt-16">
          {groups.map((g, i) => {
            const offset = flat.indexOf(g.list[0]);
            return (
              <div
                key={g.id}
                id={`stage-${g.id}`}
                className="grid scroll-mt-24 gap-8 border-t border-bone/15 py-12 md:grid-cols-12 md:py-16"
              >
                <Reveal className="md:col-span-3">
                  <div className="md:sticky md:top-28">
                    <p className="font-display text-6xl leading-none text-coral-light">0{i + 1}</p>
                    <h3 className="mt-5 font-display text-3xl tracking-wide">{g.label}</h3>
                    <p className="mt-4 leading-relaxed text-bone/65">{g.note}</p>
                    <p className="mt-4 font-sans text-xs uppercase tracking-wider2 text-bone/40">
                      {g.list.length} {g.list.length === 1 ? 'photo' : 'photos'}
                    </p>
                  </div>
                </Reveal>
                <div className="grid grid-cols-2 gap-3 md:col-span-9 md:grid-cols-3 md:gap-4">
                  {g.list.map((w, k) => (
                    <WorkCard
                      key={w.src}
                      work={w}
                      n={offset + k + 1}
                      total={flat.length}
                      delay={(k % 3) * 0.08}
                      dark
                      onOpen={() => setIndex(offset + k)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Lightbox items={flat} index={index} setIndex={setIndex} />
    </section>
  );
}
