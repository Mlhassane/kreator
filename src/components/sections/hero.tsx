import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { creators } from "@/lib/data";
import { cn } from "@/lib/utils";

function PortraitCard({
  creator,
  className,
  rotate,
}: {
  creator: (typeof creators)[number];
  className?: string;
  rotate: string;
}) {
  return (
    <div
      className={cn(
        "absolute overflow-hidden rounded-[22px] border border-white/40 shadow-lift",
        rotate,
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/5] w-full overflow-hidden bg-sand",
        )}
      >
        <Image
          src={creator.photo}
          alt={`Portrait de ${creator.name}`}
          fill
          sizes="(max-width: 768px) 40vw, 220px"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent p-3 pt-10">
          <p className="text-[11px] font-semibold leading-tight text-white">
            {creator.name}
          </p>
          <p className="mt-0.5 text-[9.5px] text-white/70">
            {creator.flag} {creator.niche}
          </p>
        </div>
        <span className="absolute right-2 top-2 rounded-full bg-black/30 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-md">
          {creator.engagement}%
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const [first, second, third] = creators;

  return (
    <section className="relative overflow-hidden pb-20 pt-8 md:pb-28 md:pt-14">
      <div
        className="pointer-events-none absolute -left-40 top-10 size-[460px] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(239,169,47,0.55), transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 top-40 size-[420px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(217,80,43,0.5), transparent 65%)",
        }}
      />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8">
        <div className="max-w-[620px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 py-1.5 pl-2 pr-3.5 text-[11.5px] font-medium tracking-[-0.01em] text-ink/70 backdrop-blur">
            <span className="relative flex size-2 items-center justify-center">
              <span className="absolute size-2 animate-pulse-dot rounded-full bg-forest" />
              <span className="size-1.5 rounded-full bg-forest" />
            </span>
            Create. Connect. Grow.
            <span className="h-3 w-px bg-ink/15" />
            18 pays africains
          </span>

          <h1 className="mt-6 text-balance text-[42px] leading-[0.97] font-semibold tracking-[-0.045em] sm:text-[56px] lg:text-[64px]">
            Ta marque a une histoire.
            <br />
            L&apos;Afrique a{" "}
            <em className="font-serif font-normal italic text-clay">
              les voix
            </em>{" "}
            pour la raconter.
          </h1>

          <p className="mt-6 max-w-[520px] text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px]">
            Kreator connecte les marques aux créateurs de contenu du continent.
            Trouve les bons profils, lance ta campagne en 7 jours et mesure
            chaque franc investi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/inscription" size="lg">
              Lancer une campagne
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/createurs" variant="outline" size="lg">
              Devenir créateur
              <ArrowUpRight className="size-4" />
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
            <div className="flex -space-x-2.5">
              {creators.slice(0, 4).map((creator) => (
                <span
                  key={creator.name}
                  className={cn(
                    "grid size-9 place-items-center rounded-full border-2 border-cream bg-gradient-to-br font-display text-[10px] font-semibold text-white",
                    creator.gradient,
                  )}
                  title={creator.name}
                >
                  {creator.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </span>
              ))}
              <span className="grid size-9 place-items-center rounded-full border-2 border-cream bg-ink text-[10px] font-semibold text-cream">
                +2k
              </span>
            </div>
            <div className="text-[12.5px] leading-tight">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3 fill-current" />
                ))}
                <span className="ml-1 text-ink">4,9/5</span>
              </div>
              <p className="mt-1 text-muted">
                2 400+ créateurs vérifiés · 4 200 campagnes livrées
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-[440px] w-full max-w-[470px] sm:h-[520px]">
          <div className="absolute inset-8 rounded-full border border-dashed border-ink/10" />
          <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-2xl" />

          <div className="absolute left-0 top-[22%] z-20 w-[57%] -rotate-2 rounded-[22px] border border-line bg-[#fffdf9] p-4 shadow-lift sm:p-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-forest">
                <span className="size-1.5 rounded-full bg-forest" />
                Campagne live
              </span>
              <span className="rounded-full bg-sand/70 px-2 py-0.5 text-[9px] font-medium text-muted">
                7 jours
              </span>
            </div>
            <p className="mt-3 font-display text-[17px] font-semibold leading-tight tracking-[-0.03em]">
              #MonÉtéAvecWave
            </p>
            <p className="mt-0.5 text-[10.5px] text-muted">
              UGC · Dakar, Abidjan, Lagos
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex -space-x-2">
                {creators.slice(0, 4).map((creator) => (
                  <span
                    key={creator.name}
                    className={cn(
                      "grid size-6 place-items-center rounded-full border-2 border-[#fffdf9] bg-gradient-to-br text-[8px] font-semibold text-white",
                      creator.gradient,
                    )}
                  >
                    {creator.name[0]}
                  </span>
                ))}
              </div>
              <span className="text-[9.5px] text-muted">8/12 livrables</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-sand">
              <div className="h-full w-2/3 rounded-full bg-clay" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-line pt-3">
              <div>
                <p className="font-display text-lg font-semibold leading-none">
                  1,2M
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.1em] text-muted">
                  vues
                </p>
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-none">
                  4,8%
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.1em] text-muted">
                  taux d&apos;engagement
                </p>
              </div>
            </div>
          </div>

          <PortraitCard
            creator={second}
            rotate="rotate-[5deg]"
            className="right-0 top-0 w-[42%]"
          />
          <PortraitCard
            creator={third}
            rotate="-rotate-[4deg]"
            className="bottom-0 right-[6%] w-[40%]"
          />

          <div className="absolute -left-1 bottom-[8%] z-30 flex items-center gap-2.5 rounded-2xl border border-line bg-[#fffdf9] px-3 py-2.5 shadow-lift sm:-left-3">
            <span className="grid size-8 place-items-center rounded-full bg-forest/10 text-forest">
              <Check className="size-4" strokeWidth={3} />
            </span>
            <div>
              <p className="text-[10px] leading-tight text-muted">
                Paiement envoyé
              </p>
              <p className="text-[12px] font-semibold leading-tight">
                250 000 FCFA
              </p>
            </div>
          </div>

          <div className="absolute left-[8%] top-[4%] z-30 inline-flex animate-float-slower items-center gap-1.5 rounded-full border border-line bg-white/90 px-2.5 py-1.5 text-[10px] font-medium text-ink shadow-soft backdrop-blur">
            <span className="size-1.5 rounded-full bg-clay" />
            {first.flag} {first.name.split(" ")[0]} {first.name.split(" ")[1]?.[0]}. a accepté
          </div>
        </div>
      </div>
    </section>
  );
}
