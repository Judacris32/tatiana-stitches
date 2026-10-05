'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PageHero({
  image,
  eyebrow,
  title,
  italic,
  intro,
  position = 'center 30%',
}: {
  image: string;
  eyebrow: string;
  title: string;
  italic?: string;
  intro?: string;
  position?: string;
}) {
  return (
    <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden bg-ink text-bone">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
      </motion.div>
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow text-coral-light"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="mt-6 font-display text-5xl leading-[1.05] tracking-wide md:text-7xl"
        >
          {title}
          {italic && (
            <>
              <br />
              <span className="font-serif italic text-stone">{italic}</span>
            </>
          )}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-bone/80"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
