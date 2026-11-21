import { brandLogos } from "@/lib/data";

export function LogoMarquee() {
  const logos = [...brandLogos, ...brandLogos];

  return (
    <section className="border-y border-line/70 bg-cream-2/60 py-8">
      <div className="shell">
        <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.2em] text-muted/80">
          Des marques ambitieuses créent avec Kreator
        </p>
      </div>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12">
          {logos.map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="font-display text-[24px] font-semibold tracking-[-0.05em] text-ink/30 transition-colors hover:text-ink/60"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
