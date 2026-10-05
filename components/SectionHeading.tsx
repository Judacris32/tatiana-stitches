import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  italic,
  light = false,
  center = false,
  children,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  light?: boolean;
  center?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`eyebrow ${light ? 'text-coral-light' : 'text-coral'}`}>{eyebrow}</p>
      <h2
        className={`mt-5 font-display text-4xl leading-[1.08] tracking-wide md:text-6xl ${light ? 'text-bone' : 'text-ink'}`}
      >
        {title}{' '}
        {italic && <span className={`font-serif italic ${light ? 'text-stone' : 'text-cognac'}`}>{italic}</span>}
      </h2>
      {children && (
        <div className={`mt-6 text-lg font-light leading-relaxed ${light ? 'text-bone/75' : 'text-ink/75'}`}>{children}</div>
      )}
    </Reveal>
  );
}
