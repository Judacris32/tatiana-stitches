import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Awards & Press',
  description: `${site.founder} won the AFAA 2024 Fashion Creative Director Award in Cape Town and was named in the AFAA 100.`,
};

const timeline = [
  {
    date: '4 September 2024',
    t: 'Selected for the AFAA 100',
    d: 'The African Fashion and Arts Award wrote to confirm his selection among the AFAA 100 Distinguished African Fashion and Arts Personalities, a continental list of creatives shaping fashion and art across Africa.',
  },
  {
    date: '6 to 8 November 2024',
    t: 'Cape Town International Convention Centre',
    d: 'Three days of celebrating African creativity in South Africa, with designers, artists and entrepreneurs from across the continent in one room.',
  },
  {
    date: 'November 2024',
    t: 'Fashion Creative Director Award',
    d: 'He walked away with the AFAA 2024 Fashion Creative Director Award, in recognition of his contribution to the African fashion industry.',
  },
  {
    date: '8 November 2024',
    t: 'Covered by Independent Newspaper',
    d: 'Independent Newspaper Nigeria reported the win in a story by Abisola Shojobi.',
  },
];

export default function AwardsPage() {
  return (
    <>
      <PageHero
        image="/images/work/ts-53.webp"
        eyebrow="Awards & Press"
        title="Recognised at home"
        italic="and across Africa."
        intro="The work speaks first. Sometimes the rest of the continent stops to listen."
        position="center 30%"
      />

      {/* Headline award */}
      <section className="grain bg-bone py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/press/afaa-trophy.webp" alt="AFAA 2024 Fashion Creative Director Award trophy" fill sizes="(min-width:768px) 40vw, 90vw" className="object-cover" />
            </div>
          </Reveal>
          <div className="md:col-span-7">
            <SectionHeading eyebrow="African Fashion and Arts Award 2024" title="Fashion Creative" italic="Director Award.">
              <p>
                In November 2024, in Cape Town, South Africa, {site.founder} received the AFAA 2024 Fashion Creative
                Director Award. The trophy, shaped like the African continent, reads his name above the title.
              </p>
              <p className="mt-5">
                AFAA is a Pan African platform that rewards fashion and art creatives from across the continent,
                connecting fashion, culture, collaboration and enterprise. For a tailoring house from Onitsha, it was a
                proud night.
              </p>
            </SectionHeading>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink py-24 text-bone md:py-32">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <SectionHeading light center eyebrow="The road to Cape Town" title="How it" italic="happened." />
          <ol className="relative mt-16 border-l border-bone/15 md:ml-[30%]">
            {timeline.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1}>
                <li className="relative mb-14 pl-10 last:mb-0">
                  <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rotate-45 bg-coral" />
                  <p className="eyebrow text-coral-light md:absolute md:-left-[calc(43%+2.5rem)] md:top-1 md:w-[40%] md:text-right">
                    {s.date}
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-wide md:mt-0 md:text-3xl">{s.t}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-bone/70">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* AFAA 100 */}
      <section className="bg-stone py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:grid-cols-2 md:px-10">
          <SectionHeading eyebrow="#AFAA100" title="One of 100" italic="distinguished African creatives.">
            <p>
              The AFAA 100 shines a light on the most distinguished and emerging personalities in African fashion and
              art. {site.founder} was named on the 2024 list as Founder and Creative Director of Tatiana Stitches,
              fashion designer and creative entrepreneur.
            </p>
          </SectionHeading>
          <Reveal delay={0.1} className="grid grid-cols-5 gap-4">
            <div className="relative col-span-3 aspect-square overflow-hidden shadow-2xl shadow-ink/20">
              <Image src="/images/press/afaa-100-flyer.webp" alt="AFAA 100 profile flyer for Chigbo Vitalis Agbo" fill sizes="30vw" className="object-cover" />
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                <Image src="/images/press/afaa-selection-letter.webp" alt="AFAA 100 official notification of selection" fill sizes="20vw" className="object-contain" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Press */}
      <section className="grain bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHeading eyebrow="In the press" title="What they" italic="wrote about us." />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <a href={site.independentUrl} target="_blank" rel="noreferrer" className="group block h-full border border-ink/15 bg-bone transition-colors duration-500 hover:border-coral hover:bg-ink">
                <div className="relative aspect-[6/5] overflow-hidden border-b border-ink/10">
                  <Image src="/images/press/independent-feature.webp" alt="Independent Newspaper feature on the AFAA award" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]" />
                </div>
                <div className="flex items-start justify-between gap-6 p-8">
                  <div>
                    <p className="eyebrow text-coral group-hover:text-coral-light">Independent Newspaper · 8 Nov 2024</p>
                    <h3 className="mt-3 font-display text-2xl leading-snug tracking-wide transition-colors group-hover:text-bone">
                      Chigbo Vitalis Agbo Wins Fashion Creative Director Award At AFAA 2024 In Cape Town, South Africa
                    </h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center bg-coral text-bone">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col border border-ink/15">
                <div className="grid flex-1 grid-cols-2">
                  <div className="relative min-h-[320px] overflow-hidden">
                    <Image src="/images/work/ts-79.webp" alt="Business Beacon magazine cover" fill sizes="25vw" className="object-cover object-top" />
                  </div>
                  <div className="relative min-h-[320px] overflow-hidden bg-ink">
                    <Image src="/images/work/ts-81.webp" alt="FABSA Award of Recognition" fill sizes="25vw" className="object-cover" />
                  </div>
                </div>
                <div className="bg-cognac p-8 text-bone">
                  <p className="eyebrow text-stone">FABSA, University of Nigeria</p>
                  <h3 className="mt-3 font-display text-2xl leading-snug tracking-wide">
                    Business Beacon cover and an Award of Recognition
                  </h3>
                  <p className="mt-3 leading-relaxed text-bone/80">
                    The Faculty of Business Students&apos; Association featured him on the cover of Business Beacon and
                    honoured him for outstanding achievement and contribution to business and fashion in the South
                    East.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Billboard */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="relative h-[70vh] min-h-[460px]">
          <Image src="/images/work/ts-61.webp" alt="Tatiana Stitches billboard in Onitsha" fill sizes="100vw" className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/10" />
          <div className="absolute inset-0 flex items-center">
            <Reveal className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
              <p className="eyebrow text-coral-light">On the streets of Onitsha</p>
              <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight md:text-6xl">
                Need a new garment? <span className="font-serif italic text-stone">You know where to find us.</span>
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand image="/images/work/ts-24.webp" title="Dress like it" italic="deserves an award." />
    </>
  );
}
