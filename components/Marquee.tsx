const words = [
  'Senator',
  'Agbada',
  'Isiagu',
  'Kaftan',
  'Custom suits',
  'Ankara',
  'Kente',
  'Wedding parties',
  'Alterations',
  'Chieftaincy wear',
];

export default function Marquee({ tone = 'coral' }: { tone?: 'coral' | 'ink' }) {
  const bg = tone === 'coral' ? 'bg-coral text-bone' : 'bg-ink text-stone';
  const row = [...words, ...words];
  return (
    <div className={`${bg} overflow-hidden py-5`}>
      <div className="marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl tracking-wider md:text-3xl">
            {w}
            <span aria-hidden className="inline-block h-2 w-2 rotate-45 border border-current" />
          </span>
        ))}
      </div>
    </div>
  );
}
