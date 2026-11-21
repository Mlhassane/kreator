import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { creators } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

const brandPoints = [
  "Shortlist de créateurs qualifiés en 48 h",
  "Briefs, droits et contrats centralisés",
  "Paiements locaux et reporting consolidé",
];

const creatorPoints = [
  "Des campagnes qui paient au juste prix",
  "Briefs clairs, paiements garantis",
  "Un portfolio qui travaille pour toi",
];

export function Audiences() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col overflow-hidden rounded-[30px] border border-line bg-[#fffdf9] p-7 shadow-soft sm:p-9">
            <span className="eyebrow">
              <span className="h-px w-5 bg-current opacity-60" />
              Pour les marques
            </span>
            <h3 className="mt-4 max-w-sm text-[28px] leading-[1.05] font-semibold tracking-[-0.035em] sm:text-[34px]">
              Trouve les voix qui font{" "}
              <span className="font-serif italic font-normal text-clay">
                vraiment
              </span>{" "}
              vendre.
            </h3>
            <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-muted">
              Passe d&apos;un carnet d&apos;adresses à un programme créateur
              structuré, sur plusieurs marchés.
            </p>

            <ul className="mt-6 space-y-2.5">
              {brandPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[13.5px]">
                  <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-clay/10 text-clay">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-line bg-cream/70 p-3.5">
              <div className="flex items-center justify-between px-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Shortlist · Beauté
                </p>
                <span className="text-[10px] text-muted">3 profils</span>
              </div>
              <div className="mt-2.5 space-y-1.5">
                {creators.slice(0, 3).map((creator, index) => (
                  <div
                    key={creator.name}
                    className="flex items-center gap-2.5 rounded-xl bg-white px-2.5 py-2 shadow-[0_1px_0_rgba(19,17,16,0.04)]"
                  >
                    <Avatar
                      name={creator.name}
                      gradient={creator.gradient}
                      className="size-7 text-[10px]"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[11px] font-semibold leading-tight">
                        {creator.name}
                      </p>
                      <p className="truncate text-[9.5px] text-muted">
                        {creator.flag} {creator.niche}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-[9px] font-semibold ${
                        index === 0
                          ? "bg-forest text-cream"
                          : "bg-sand text-muted"
                      }`}
                    >
                      {index === 0 ? "Retenu" : "Voir"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/marques"
              className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[13.5px] font-semibold text-clay transition-colors hover:text-clay-dark"
            >
              Découvrir Kreator pour les marques
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] bg-forest p-7 text-cream shadow-lift sm:p-9">
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-40 blur-[70px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(239,169,47,0.9), transparent 65%)",
              }}
            />
            <span className="eyebrow relative text-gold">
              <span className="h-px w-5 bg-current opacity-60" />
              Pour les créateurs
            </span>
            <h3 className="relative mt-4 max-w-sm text-[28px] leading-[1.05] font-semibold tracking-[-0.035em] text-cream sm:text-[34px]">
              Transforme ton talent en{" "}
              <span className="font-serif italic font-normal text-gold">
                revenus
              </span>{" "}
              réels.
            </h3>
            <p className="relative mt-3 max-w-sm text-[14px] leading-relaxed text-cream/60">
              Des marques sérieuses, des briefs clairs et des paiements qui
              arrivent. Sans courir après personne.
            </p>

            <ul className="relative mt-6 space-y-2.5">
              {creatorPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[13.5px] text-cream/85"
                >
                  <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="relative mt-7 rounded-2xl border border-cream/10 bg-cream/[0.06] p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-cream/45">
                    Revenus · novembre
                  </p>
                  <p className="mt-1 font-display text-[26px] font-semibold leading-none tracking-[-0.03em]">
                    1 250 000{" "}
                    <span className="text-[11px] font-normal text-cream/50">
                      FCFA
                    </span>
                  </p>
                </div>
                <span className="rounded-full bg-gold/15 px-2 py-1 text-[10px] font-semibold text-gold">
                  +38 %
                </span>
              </div>
              <div className="mt-4 flex h-14 items-end gap-1.5">
                {[38, 52, 44, 66, 58, 82, 100].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-[3px] bg-gold/70"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 border-t border-cream/10 pt-3">
                <span className="size-1.5 rounded-full bg-gold" />
                <p className="text-[10.5px] text-cream/55">
                  3 paiements reçus cette semaine
                </p>
              </div>
            </div>

            <Link
              href="/createurs"
              className="relative mt-auto inline-flex items-center gap-1.5 pt-7 text-[13.5px] font-semibold text-gold transition-colors hover:text-gold/80"
            >
              Rejoindre la communauté Kreator
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
