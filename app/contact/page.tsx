import type { Metadata } from 'next';
import Image from 'next/image';
import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Visit Tatiana Stitches at ${site.address}, or call ${site.phoneDisplay}.`,
};

const cards = [
  { icon: Phone, label: 'Call us', value: site.phoneDisplay, href: site.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Send a message', href: site.whatsapp },
  { icon: Instagram, label: 'Instagram', value: site.instagramHandle, href: site.instagram },
  { icon: MapPin, label: 'Our studio', value: site.addressShort, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/work/ts-51.webp"
        eyebrow="Contact"
        title="Come say hello."
        italic="Bring the occasion."
        intro="Whether you already know exactly what you want or you only know the date, the first step is the same. Talk to us."
        position="center 12%"
      />

      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-[1400px] sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-center gap-5 border-b border-bone/10 p-8 transition-colors duration-500 hover:bg-coral sm:border-r"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center border border-bone/25 text-coral-light transition-colors group-hover:border-bone group-hover:text-bone">
                <Icon size={20} />
              </span>
              <span>
                <span className="eyebrow block text-bone/50 group-hover:text-bone/80">{label}</span>
                <span className="mt-1 block font-display text-xl tracking-wide">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="grain bg-bone py-24 md:py-32">
        <div className="mx-auto grid max-w-[1300px] gap-16 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="Start a conversation" title="Tell us" italic="what you have in mind.">
              <p>
                Fill this in and it will open WhatsApp with your message already written. Add pictures of styles you
                like once the chat opens.
              </p>
            </SectionHeading>
            <Reveal delay={0.15} className="relative mt-12 hidden aspect-[4/5] overflow-hidden md:block">
              <Image src="/images/work/ts-83.webp" alt="A fitting session at Tatiana Stitches" fill sizes="35vw" className="object-cover" />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-7">
            <div className="border border-ink/10 bg-stone/40 p-8 md:p-12">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-stone">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-12">
          <div className="flex flex-col justify-center px-5 py-16 md:col-span-4 md:px-10">
            <Reveal>
              <p className="eyebrow text-coral">Find us</p>
              <h2 className="mt-5 font-display text-4xl leading-tight">
                Awka Road, <span className="font-serif italic text-cognac">Onitsha.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">{site.address}.</p>
              <p className="mt-4 leading-relaxed text-ink/60">
                Look out for the stone wall and the silver Tatiana sign. Call ahead if you want to be sure someone is
                free to take your measurements.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ink mt-8"
              >
                Get directions
              </a>
            </Reveal>
          </div>
          <div className="relative min-h-[420px] md:col-span-8">
            <iframe
              title="Map to Tatiana Stitches"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              className="absolute inset-0 h-full w-full grayscale-[60%] sepia-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
