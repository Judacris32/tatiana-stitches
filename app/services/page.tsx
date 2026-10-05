import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Plus } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom tailoring, senators, agbada, suits for men and women, African textile styling, wedding party outfits and alterations in Onitsha.',
};

const services = [
  {
    t: 'Custom tailoring',
    k: 'Cut for your body',
    d: 'Anything you can picture, we can draft. We take your full measurements, help you pick the right fabric and cut a pattern that belongs to you alone.',
    img: '/images/work/ts-41.webp',
    bg: 'bg-bone',
  },
  {
    t: 'Senator and kaftan',
    k: 'The everyday classic',
    d: 'Our most requested outfit. Sharp collars, clean piping, trousers that sit right. Available in short or long sleeve, plain or with embroidery on the chest and cuffs.',
    img: '/images/work/ts-22.webp',
    bg: 'bg-stone',
  },
  {
    t: 'Agbada and ceremonial wear',
    k: 'For the big days',
    d: 'Lace agbada, isiagu tops, wrappers and full chieftaincy looks with the cap and beads to match. Built for weddings, title takings, burials and homecomings.',
    img: '/images/work/ts-73.webp',
    bg: 'bg-bone',
  },
  {
    t: 'Suits for men and women',
    k: 'Tailored, not bought',
    d: 'Suits and tailored trousers for both men and women, made to sit right on your frame instead of a mannequin.',
    img: '/images/work/ts-62.webp',
    bg: 'bg-stone',
  },
  {
    t: 'African textile styling',
    k: 'Prints with a point of view',
    d: 'Kente, Ankara and mud cloth prints turned into relaxed sets, shirts and statement pieces. Bring your own fabric or let us source it for you.',
    img: '/images/work/ts-30.webp',
    bg: 'bg-bone',
  },
  {
    t: 'Wedding parties and groups',
    k: 'Everyone in step',
    d: 'Grooms, groomsmen, family and staff uniforms. We measure everyone, manage the fittings and make sure every outfit matches on the day.',
    img: '/images/work/ts-13.webp',
    bg: 'bg-stone',
  },
  {
    t: 'Alterations',
    k: 'Give old clothes new life',
    d: 'Trousers taken in, shirts shortened, jackets reshaped. If it almost fits, we can usually make it fit properly.',
    img: '/images/work/ts-82.webp',
    bg: 'bg-bone',
  },
];

const faqs = [
  {
    q: 'How long does an outfit take?',
    a: 'It depends on the piece, the fabric and how busy the season is. A senator is quicker than a full agbada with embroidery. Tell us your date at the first visit and we will plan backwards from it. For weddings and big events, come in as early as you can.',
  },
  {
    q: 'How much does it cost?',
    a: 'Every price depends on the style, the fabric and the amount of detail. Send us a picture of what you want on WhatsApp and we will give you a clear quote before any cutting starts.',
  },
  {
    q: 'Can I bring my own fabric?',
    a: 'Yes. Many of our clients do. We will check that you have enough yards for the style and advise you if something else would work better.',
  },
  {
    q: 'I am not in Onitsha. Can you still help?',
    a: 'Send us a message with where you are and what you need. We will talk you through measurements and what is possible for your location.',
  },
  {
    q: 'Do you make for women and children too?',
    a: 'We do. Suits and tailored pieces for women, and matching outfits for little boys who want to look just like their fathers.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/work/ts-46.webp"
        eyebrow="Services"
        title="Whatever the occasion,"
        italic="we have the pattern."
        intro="From a single senator to dressing a whole wedding party, here is everything we do in the studio."
        position="center 25%"
      />

      {services.map((s, i) => (
        <section key={s.t} className={`${s.bg} ${i % 2 === 0 ? 'grain' : ''} py-20 md:py-28`}>
          <div
            className={`mx-auto grid max-w-[1300px] items-center gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-10 ${
              i % 2 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <Reveal>
              <div className="group relative aspect-[4/5] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.t}
                  fill
                  sizes="(min-width:768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  style={{ objectPosition: 'center 30%' }}
                />
                <span className="absolute left-0 top-0 bg-ink px-5 py-3 font-display text-lg text-bone">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="eyebrow text-coral">{s.k}</p>
              <h2 className="mt-5 font-display text-4xl leading-tight tracking-wide md:text-5xl">{s.t}</h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-ink/75">{s.d}</p>
              <a
                href={`${site.whatsapp}?text=${encodeURIComponent(`Hello Tatiana Stitches, I am interested in ${s.t.toLowerCase()}.`)}`}
                target="_blank"
                rel="noreferrer"
                className={`btn mt-10 ${i % 2 ? 'btn-ink' : 'btn-coral'}`}
              >
                Ask about this <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="grain bg-ink py-24 text-bone md:py-32">
        <div className="mx-auto grid max-w-[1300px] gap-14 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <SectionHeading light eyebrow="Good to know" title="Questions" italic="people ask us.">
              <p>Something else on your mind? Call or send a message and a real person will answer.</p>
            </SectionHeading>
          </div>
          <div className="md:col-span-7">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group border-b border-bone/15 py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 font-display text-xl tracking-wide transition-colors hover:text-coral-light md:text-2xl">
                    {f.q}
                    <span className="grid h-9 w-9 shrink-0 place-items-center border border-bone/30 transition-all duration-300 group-open:rotate-45 group-open:border-coral group-open:bg-coral">
                      <Plus size={16} />
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl leading-relaxed text-bone/70">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand image="/images/work/ts-14.webp" />
    </>
  );
}
