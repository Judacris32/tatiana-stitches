import Image from 'next/image';

export default function PhotoMarquee({ images, alt }: { images: string[]; alt: string }) {
  const row = [...images, ...images];
  return (
    <div className="photo-marquee-wrap relative overflow-hidden">
      <div className="photo-marquee flex w-max">
        {row.map((src, i) => (
          <div
            key={`${src}-${i}`}
            aria-hidden={i >= images.length}
            className="group relative mr-4 h-[420px] w-[300px] shrink-0 overflow-hidden md:h-[520px] md:w-[380px]"
          >
            <Image
              src={src}
              alt={i < images.length ? alt : ''}
              fill
              sizes="380px"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent md:w-28" />
    </div>
  );
}
