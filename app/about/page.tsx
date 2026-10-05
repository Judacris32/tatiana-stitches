import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Drama, Dumbbell, Flower2, Scissors } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import Gallery from '@/components/Gallery';
import CtaBand from '@/components/CtaBand';
import { works } from '@/lib/works';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `Meet ${site.founder}, founder and creative director of Tatiana Stitches, and step inside the Onitsha studio.`,
};

const values = [
  {
    icon: '/images/icons/rule-heritage.png',
    w: 480,
    h: 283,
    t: 'Heritage, handled with care',
    d: 'Isiagu, coral beads and the red cap carry meaning. We respect where these pieces come from, and we make sure they fit the man wearing them today.',
  },
  {
    icon: '/images/icons/rule-fit.png',
    w: 480,
    h: 311,
    t: 'Fit comes first',
    d: 'A beautiful fabric on a bad cut is still a bad outfit. We measure properly, fit properly and adjust until the shoulders sit right.',
  },
  {
    icon: '/images/icons/rule-finish.png',
    w: 480,
    h: 351,
    t: 'Finish you can feel',
    d: 'Clean piping, neat embroidery, buttons that stay on. The small things are what make people ask who made your clothes.',
  },
];

const family = [
  { name: 'Tatiana Stitches', img: '/images/family/stitches.webp', icon: Scissors, pos: '60% center' },
  { name: 'Tatiana Saloon & Spa', img: '/images/family/spa.webp', icon: Flower2, pos: '45% center' },
  { name: 'Tatiana Recreational Center', img: '/images/family/recreation.webp', icon: Dumbbell, pos: '35% center' },
  { name: 'Tatiana Entertainment', img: '/images/family/entertainment.webp', icon: Drama, pos: '62% center' },
];

const inside = works.filter((w) => w.cat === 'studio').filter((_, i) => i % 2 === 0);

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/work/ts-47.webp"
        eyebrow="About us"
        title="A tailoring house"
        italic="with an African soul."
        intro="Stone walls, cognac leather chairs, rails of fabric and a team that still cares how a collar sits. This is where every Tatiana piece begins."
        position="center 35%"
      />

      {/* Founder */}
      <section className="grain bg-ink py-24 text-bone md:py-36">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="/images/press/founder-desk.webp" alt={`${site.founder} at the Tatiana Stitches studio`} fill sizes="(min-width:768px) 40vw, 90vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-coral px-6 py-4 md:-right-8">
                <p className="eyebrow text-bone/80">Founder</p>
                <p className="font-display text-xl">Creative Director</p>
              </div>
            </div>
          </Reveal>
          <div className="md:col-span-7 text-justify">
            <SectionHeading light eyebrow="The man behind the needle" title={site.founder}>
              <p>
                Chigbo Vitalis Agbo is a fashion designer, creative director and entrepreneur from the South East of
                Nigeria. He started Tatiana Stitches with a simple belief. A man should be able to walk into a room in
                clothes that say exactly who he is, and those clothes should be made right here at home.
              </p>
              <p className="mt-5">
                Today the studio on Awka Road dresses grooms and their friends, chiefs at their title takings,
                musicians on stage and businessmen who want something better than off the rack. In 2024 his work
                earned him the Fashion Creative Director Award at the African Fashion and Arts Award in Cape Town,
                and a place on the AFAA 100 list of distinguished African creatives.
              </p>
              <p className="mt-5">
                Back home, the Faculty of Business Students&apos; Association at the University of Nigeria honoured him
                with an Award of Recognition for his contribution to business and fashion in the South East, and put
                him on the cover of Business Beacon magazine.
              </p>
            </SectionHeading>
            <Reveal delay={0.2} className="mt-10">
              <Link href="/awards" className="btn btn-coral">
                See the recognition <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHeading center eyebrow="What we hold onto" title="Three rules" italic="we never bend." />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.12} className="h-full">
                <div className="group relative h-full overflow-hidden border border-ink/15 bg-bone p-10 transition-colors duration-500 hover:border-coral">
                  <span className="absolute left-0 top-0 h-1 w-0 bg-coral transition-all duration-700 group-hover:w-full" />
                  <Image src={v.icon} alt="" width={v.w} height={v.h} className="h-[84px] w-auto transition-transform duration-500 group-hover:-translate-y-1" />
                  <h3 className="mt-8 font-display text-2xl tracking-wide">{v.t}</h3>
                  <p className="mt-4 leading-relaxed text-ink/70">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The space */}
      <section className="bg-bone py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 md:grid-cols-12 md:px-10">
          <Reveal className="relative aspect-[4/5] overflow-hidden md:col-span-5 md:row-span-2 md:aspect-auto">
            <Image src="/images/work/ts-00.webp" alt="The Tatiana Stitches showroom with suits on display" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <SectionHeading eyebrow="Showroom" title="Come in," italic="sit down, take your time.">
              <p>
                Our showroom is built for slow decisions. Feel the fabrics, look through the rails, try on a sample and
                talk it through with the team. Nobody rushes you here.
              </p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15} className="grid grid-cols-2 gap-6 md:col-span-7">
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/work/ts-112.webp" alt="Two clients in bold prints inside the showroom" fill sizes="30vw" className="object-cover" style={{ objectPosition: 'center 30%' }} />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/work/ts-113.webp" alt="Branded Tatiana shopping bags" fill sizes="30vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inside the studio gallery */}
      <section className="grain bg-ink py-24 text-bone md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <SectionHeading light eyebrow="Inside the studio" title="Measuring, cutting," italic="sewing and fitting.">
            <p>A peek at the work before it leaves the building.</p>
          </SectionHeading>
          <div className="mt-14">
            <Gallery items={inside} columns="columns-2 md:columns-4" dark />
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/collections#behind-the-scenes" className="btn btn-ghost-light">
              See the full behind the scenes <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Family of brands */}
      <section className="bg-cognac py-24 text-bone">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-stone">The Tatiana family</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
              One name, <span className="font-serif italic text-stone">a few different doors.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-light text-bone/80">
              Beyond the tailoring, {site.founder} leads a growing family of businesses under the Tatiana name.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-x-0">
            {family.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.name} delay={i * 0.1} className="h-full">
                  <div className={`group h-full border-bone/20 lg:px-7 ${i > 0 ? 'lg:border-l' : ''}`}>
                    <div className="relative">
                      <div className="absolute left-0 top-6 z-10">
                        <span className="font-sans text-sm tracking-wider2 text-stone">0{i + 1}</span>
                        <span className="mt-2 block h-px w-8 bg-stone transition-all duration-500 group-hover:w-14 group-hover:bg-bone" />
                      </div>
                      <div className="relative ml-auto aspect-[1/1] w-[78%] overflow-hidden rounded-t-full">
                        <Image
                          src={f.img}
                          alt={f.name}
                          fill
                          sizes="(min-width:1024px) 20vw, (min-width:640px) 40vw, 80vw"
                          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                          style={{ objectPosition: f.pos }}
                        />
                        <div className="absolute inset-0 bg-cognac/10 transition-colors duration-500 group-hover:bg-transparent" />
                      </div>
                      <span className="absolute bottom-3 left-2 grid h-24 w-24 place-items-center rounded-full border border-bone/25 bg-cognac text-bone shadow-[0_10px_30px_rgba(21,17,14,0.25)] transition-colors duration-500 group-hover:border-coral group-hover:bg-coral">
                        <Icon size={38} strokeWidth={1.1} />
                      </span>
                    </div>
                    <p className="mt-8 font-display text-2xl leading-snug tracking-wide">{f.name}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand image="/images/work/ts-87.webp" />
    </>
  );
}
