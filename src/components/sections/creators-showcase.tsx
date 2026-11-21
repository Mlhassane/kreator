import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CreatorCard } from "@/components/ui/avatar";
import { creators } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

const niches = ["Tous", "Mode", "Beauté", "Tech", "Food", "Comédie", "Fitness"];

export function CreatorsShowcase() {
  return (
    <section className="py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              Le talent
            </span>
            <h2 className="mt-4 text-balance text-[32px] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-[42px]">
              Des créateurs{" "}
              <em className="font-serif italic font-normal text-clay">
                vérifiés
              </em>
              , pas des comptes fantômes.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              Audience réelle, qualité de production et fiabilité : chaque
              profil est validé par notre équipe avant d&apos;entrer dans la
              shortlist.
            </p>
          </div>
          <Link
            href="/createurs"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-ink hover:text-cream"
          >
            Explorer les 2 400 créateurs
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {niches.map((niche, index) => (
            <Link
              key={niche}
              href="/createurs"
              className={
                index === 0
                  ? "rounded-full bg-ink px-3.5 py-1.5 text-[12px] font-medium text-cream"
                  : "rounded-full border border-line bg-white/50 px-3.5 py-1.5 text-[12px] text-muted transition-colors hover:border-ink/25 hover:text-ink"
              }
            >
              {niche}
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((creator, index) => (
            <Reveal key={creator.name} delay={(index % 3) * 90}>
              <CreatorCard creator={creator} className="h-full" />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl bg-sand/60 px-6 py-5 sm:flex-row">
          <p className="text-[13.5px] text-ink/70">
            <span className="font-semibold text-ink">Tu es créateur ?</span>{" "}
            Crée ton profil gratuitement et reçois des briefs qui te
            ressemblent.
          </p>
          <Link
            href="/createurs"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-clay hover:text-clay-dark"
          >
            Rejoindre Kreator
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
