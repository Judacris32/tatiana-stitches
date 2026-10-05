import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { site } from '@/lib/site';

export default function CtaBand({
  image = '/images/work/ts-13.webp',
  title = 'Your next outfit starts',
  italic = 'with a tape measure.',
  text = 'Walk into our studio on Awka Road or send us a message. We will talk through the occasion, take your measurements and get cutting.',
}: {
  image?: string;
  title?: string;
  italic?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-coral text-bone">
      <div className="absolute inset-y-0 right-0 hidden w-[42%] md:block">
        <Image src={image} alt="" fill sizes="42vw" className="object-cover" style={{ objectPosition: 'center 25%' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-coral via-coral/40 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            {title} <span className="font-serif italic text-stone">{italic}</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-bone/85">{text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-ink">
              Message on WhatsApp <ArrowRight size={16} />
            </a>
            <Link href="/contact" className="btn btn-ghost-light">
              Visit the studio
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
