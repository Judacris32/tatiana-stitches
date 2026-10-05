import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CollectionGallery from '@/components/CollectionGallery';
import BehindScenes from '@/components/BehindScenes';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import Marquee from '@/components/Marquee';
import { works } from '@/lib/works';

export const metadata: Metadata = {
  title: 'Collections',
  description:
    'Every look from Tatiana Stitches, sorted into collections. Campaigns, heritage wear, senators, suits, finished pieces, details and a look behind the scenes.',
};

const looks = works.filter((w) => w.cat !== 'studio');
const studio = works.filter((w) => w.cat === 'studio');

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        image="/images/work/ts-54.webp"
        eyebrow="The lookbook"
        title="Collections"
        italic="worn by real men."
        intro="No catalogue models here. These are our clients, our team and our campaign shoots, all wearing pieces cut in our studio. Pick a collection and take your time."
      />

      <section className="grain bg-bone pb-10 pt-10 md:pt-14">
        <div className="mx-auto max-w-[1500px] px-4 md:px-10">
          <CollectionGallery items={looks} />
        </div>
      </section>

      <Marquee tone="coral" />

      <BehindScenes items={studio} />

      {/* Feature split */}
      <section className="bg-stone py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:grid-cols-2 md:px-10">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative mt-16 aspect-[3/4] overflow-hidden">
              <Image src="/images/work/ts-105.webp" alt="Mustard agbada on a black mannequin" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/work/ts-04.webp" alt="Wine red tunic with beaded hem" fill sizes="25vw" className="object-cover" />
            </div>
          </Reveal>
          <SectionHeading eyebrow="Can't find your look?" title="Bring the idea." italic="We will draw it out.">
            <p>
              Everything you see here started as a conversation. If you have a picture saved on your phone, a fabric
              you bought at the market or just a feeling about how you want to look at your brother's wedding, that is
              enough for us to start.
            </p>
            <p className="mt-5">
              We can recreate a look from this page in your own colours, or build something from scratch around you.
            </p>
          </SectionHeading>
        </div>
      </section>

      <CtaBand image="/images/work/ts-44.webp" title="Seen something" italic="you like?" text="Screenshot it and send it to us on WhatsApp. We will tell you what fabric works, what it takes and when it can be ready." />
    </>
  );
}
