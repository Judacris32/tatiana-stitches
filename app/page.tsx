import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Instagram } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import Marquee from '@/components/Marquee';
import PhotoMarquee from '@/components/PhotoMarquee';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import { site } from '@/lib/site';

const lines = [
  {
    title: 'Heritage & Ceremony',
    note: 'Isiagu, coral beads, red caps and the hand fan. Clothes for title takings, weddings and the days your family will talk about.',
    img: '/images/work/ts-15.webp',
    pos: 'center 25%',
  },
  {
    title: 'Senator & Kaftan',
    note: 'Clean lines in black, sand, navy and white. The outfit you reach for on Sunday morning and again on Friday night.',
    img: '/images/work/ts-00.webp',
    pos: 'center 30%',
  },
  {
    title: 'Campaigns',
    note: 'Kente, Ankara and loud prints, worn with attitude. Our studio shoots, where we push the craft a little further each season.',
    img: '/images/work/ts-30.webp',
    pos: 'center 30%',
  },
];

const shoot = [39, 43, 44, 47, 42, 45, 48].map((n) => `/images/work/ts-${n}.webp`);

const steps = [
  { n: '01', icon: '/images/icons/talk.png', w: 74, t: 'We talk', d: 'Tell us the occasion, the date and the feeling you want. Bring a picture if you have one. Bring your fabric if you already bought it.' },
  { n: '02', icon: '/images/icons/measure.png', w: 104, t: 'We measure', d: 'Every outfit starts with your body, not a size chart. We take full measurements and keep them on file for next time.' },
  { n: '03', icon: '/images/icons/cut-sew.png', w: 112, t: 'We cut and sew', d: 'Patterns are drafted by hand in our studio. Embroidery, piping and finishing are done in house by our tailors.' },
  { n: '04', icon: '/images/icons/fit.png', w: 52, t: 'You try it on', d: 'We fit, adjust and press until it sits right on your shoulders. Then it goes home with you in a Tatiana bag.' },
];

const feed = [
  { src: '/images/work/feed-fitting.webp', alt: 'Taking measurements for a teal suit', pos: 'center 18%' },
  { src: '/images/work/feed-teal-suit.webp', alt: 'Client in a teal suit and white shirt', pos: 'center 20%' },
  ...[29, 86, 73, 72, 3, 37].map((n) => ({
    src: `/images/work/ts-${String(n).padStart(2, '0')}.webp`,
    alt: 'Tatiana Stitches look',
    pos: 'center 25%',
  })),
];

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Marquee />

      {/* Intro */}
      <section className="grain bg-bone py-24 md:py-36">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 md:grid-cols-2 md:px-10">
          <div>
            <SectionHeading eyebrow="The house on Awka Road" title="Onitsha tailoring," italic="worn with pride.">
              <p>
                Tatiana Stitches is a tailoring house founded by {site.founder}. From our studio opposite the General
                Hospital in Onitsha, we cut clothes for grooms and chiefs, for businessmen and musicians, for fathers
                and the little boys who want to dress exactly like them.
              </p>
              <p className="mt-5">
                Our work sits between two worlds. One foot in Igbo heritage, with isiagu, coral and the red cap. The
                other in modern menswear, with clean senators, relaxed sets and prints that refuse to be quiet.
              </p>
            </SectionHeading>

            <Reveal delay={0.15} className="mt-12 grid grid-cols-3 border-t border-ink/15 pt-8">
              {[
                ['2024', 'AFAA Fashion Creative Director Award'],
                ['100', 'Named in the AFAA 100 list'],
                ['FABSA', 'Award of Recognition, UNN'],
              ].map(([k, v]) => (
                <div key={v} className="pr-4">
                  <p className="font-display text-4xl text-coral md:text-5xl">{k}</p>
                  <p className="mt-2 text-sm leading-snug text-ink/65">{v}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.25} className="mt-12">
              <Link href="/about" className="btn btn-ink">
                About us <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden">
              <Image src="/images/work/founder-desk.webp" alt="Chigbo Vitalis Agbo at his desk under the Tatiana Stitches sign" fill sizes="(min-width:768px) 40vw, 80vw" className="object-cover object-top" />
            </div>
            <div className="absolute -bottom-10 left-0 aspect-[3/4] w-[32%] overflow-hidden border-[10px] border-bone">
              <Image src="/images/work/ts-01.webp" alt="White lace agbada on a mannequin" fill sizes="25vw" className="object-cover" />
            </div>
            <p className="absolute -bottom-16 right-0 font-serif text-lg italic text-cognac">Made to measure, every single time.</p>
          </Reveal>
        </div>
      </section>

      {/* Signature lines */}
      <section className="bg-stone py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="What we make" title="Three moods," italic="one standard." />
            <Reveal>
              <Link href="/collections" className="btn btn-ghost-dark">
                Browse every look <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {lines.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.12}>
                <Link href="/collections" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                    <Image
                      src={l.img}
                      alt={l.title}
                      fill
                      sizes="(min-width:768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                      style={{ objectPosition: l.pos }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
                    <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center bg-bone text-ink transition-colors duration-500 group-hover:bg-coral group-hover:text-bone">
                      <ArrowUpRight size={18} />
                    </span>
                    <p className="absolute bottom-6 left-6 font-sans text-xs tracking-wider2 text-bone/70">0{i + 1}</p>
                  </div>
                  <h3 className="mt-6 font-display text-3xl tracking-wide text-ink transition-colors group-hover:text-coral">
                    {l.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{l.note}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest shoot strip */}
      <section className="grain overflow-hidden bg-ink py-24 text-bone md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHeading light eyebrow="From the latest shoot" title="Prints that" italic="talk before you do.">
            <p>
              Brown and coral mud cloth inspired sets, shot between the rails of our own showroom. Wide trousers,
              boxy shirts and a cowrie cap to finish it.
            </p>
          </SectionHeading>
        </div>
        <div className="mt-14">
          <PhotoMarquee images={shoot} alt="Printed set from the Tatiana Stitches campaign" />
        </div>
        <Reveal className="mt-14 text-center">
          <Link href="/collections" className="btn btn-coral">
            See it all <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* Award band */}
      <section className="relative overflow-hidden bg-cognac text-bone">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-28">
          <Reveal className="md:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden">
              <Image src="/images/press/afaa-trophy.webp" alt="AFAA 2024 Fashion Creative Director Award trophy" fill sizes="(min-width:768px) 30vw, 90vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7">
            <p className="eyebrow text-stone">Cape Town, November 2024</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              Fashion Creative Director <span className="font-serif italic text-stone">of the year.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-bone/85">
              At the African Fashion and Arts Award in Cape Town, {site.founder} took home the Fashion Creative
              Director Award and was named among the AFAA 100, a list of the most distinguished creatives shaping
              African fashion and art today.
            </p>
            <blockquote className="mt-8 border-l-2 border-stone/60 pl-6 font-serif text-2xl italic leading-snug text-stone">
              Recognised for his work in the broader African fashion industry and his creative direction at Tatiana
              Stitches.
            </blockquote>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/awards" className="btn btn-ink">
                Awards and press <ArrowRight size={16} />
              </Link>
              <a href={site.independentUrl} target="_blank" rel="noreferrer" className="btn btn-ghost-light">
                Read the Independent story
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="grain bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHeading center eyebrow="How it works" title="From your first visit" italic="to the final fit." />
          <div className="mt-20 grid gap-px bg-ink/10 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="h-full">
                <div className="group h-full bg-bone p-8 transition-colors duration-500 hover:bg-ink">
                  <div className="flex h-[76px] items-end">
                    <span
                      role="img"
                      aria-label={s.t}
                      className="block h-full bg-coral transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-coral-light"
                      style={{
                        width: s.w,
                        WebkitMask: `url(${s.icon}) left bottom / contain no-repeat`,
                        mask: `url(${s.icon}) left bottom / contain no-repeat`,
                      }}
                    />
                  </div>
                  <h3 className="mt-7 font-display text-2xl tracking-wide transition-colors group-hover:text-bone">{s.t}</h3>
                  <p className="mt-4 leading-relaxed text-ink/70 transition-colors group-hover:text-bone/70">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Link href="/services" className="btn btn-coral">
              Our services <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Feed */}
      <section className="bg-stone-deep py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Follow along" title="Fresh off" italic="the cutting table." />
            <Reveal>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="btn btn-ink">
                <Instagram size={16} /> {site.instagramHandle}
              </a>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {feed.map((f, i) => (
              <Reveal key={f.src} delay={(i % 4) * 0.08}>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="group relative block aspect-square overflow-hidden">
                  <Image src={f.src} alt={f.alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{ objectPosition: f.pos }} />
                  <span className="absolute inset-0 grid place-items-center bg-coral/0 text-bone opacity-0 transition-all duration-500 group-hover:bg-coral/70 group-hover:opacity-100">
                    <Instagram />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
