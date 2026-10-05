import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Phone, MapPin, MessageCircle } from 'lucide-react';
import { nav, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="grain bg-ink text-bone">
      <div className="key-rule" />
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Image src="/images/brand/logo-light.png" alt="Tatiana Stitches" width={1034} height={491} className="w-40" />
          <p className="mt-8 max-w-sm font-serif text-xl italic leading-snug text-bone/80">
            Cut in Onitsha, worn wherever the occasion calls for a man to be remembered.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-6 text-coral-light">Explore</p>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-under text-bone/75 transition-colors hover:text-bone">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow mb-6 text-coral-light">Visit the studio</p>
          <ul className="space-y-4 text-bone/75">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-coral-light" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-1 shrink-0 text-coral-light" />
              <a href={site.phoneHref} className="link-under hover:text-bone">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle size={18} className="mt-1 shrink-0 text-coral-light" />
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="link-under hover:text-bone">
                Chat with us on WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram size={18} className="mt-1 shrink-0 text-coral-light" />
              <a href={site.instagram} target="_blank" rel="noreferrer" className="link-under hover:text-bone">
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-6 text-xs text-bone/45 md:flex-row md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Tatiana Stitches. All rights reserved.</p>
          <p>
            Website by <span className="text-bone/70">@Judacris_Jude </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
