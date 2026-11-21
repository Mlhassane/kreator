import { ArrowUpRight, BarChart3, Search, Wallet } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const pains = [
  {
    icon: Search,
    title: "Des semaines de recherche",
    body: "Des heures de scrolling, des DM sans réponse et des profils qui gonflent leurs chiffres.",
  },
  {
    icon: Wallet,
    title: "Des paiements qui bloquent",
    body: "Virements internationaux, frais cachés et créateurs payés en retard, sur trois devises différentes.",
  },
  {
    icon: BarChart3,
    title: "Un reporting à la main",
    body: "Des captures d'écran, des tableurs et aucune idée claire de ce qui a réellement fait bouger la marque.",
  },
];

export function Problem() {
  return (
    <section className="py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">
            <span className="h-px w-6 bg-current opacity-60" />
            Le constat
          </span>
          <h2 className="mt-4 text-balance text-[32px] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-[44px]">
            Le creator marketing africain tourne encore{" "}
            <em className="font-serif font-normal italic text-clay">
              sur WhatsApp.
            </em>
          </h2>
          <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-muted sm:text-[16px]">
            Le talent est là. Les marques aussi. Ce qui manque, c&apos;est
            l&apos;infrastructure pour les faire travailler ensemble,
            proprement.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-2 text-[12.5px] text-muted">
            <span className="size-1.5 rounded-full bg-clay" />
            C&apos;est exactement pour ça qu&apos;on a construit Kreator.
          </div>
        </div>

        <div className="flex flex-col">
          {pains.map((pain, index) => (
            <Reveal key={pain.title} delay={index * 90}>
              <div className="group flex gap-5 border-t border-line py-7 first:border-t-0 first:pt-0">
                <span className="mt-1 grid size-11 shrink-0 place-items-center rounded-2xl border border-line bg-white/70 text-clay transition-colors group-hover:border-clay/30 group-hover:bg-clay-soft/60">
                  <pain.icon className="size-5" strokeWidth={1.7} />
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[18px] font-semibold tracking-[-0.025em]">
                      {pain.title}
                    </h3>
                    <span className="mt-1 font-display text-[11px] font-medium text-muted/60">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-md text-[14px] leading-relaxed text-muted">
                    {pain.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          <a
            href="#comment-ca-marche"
            className="mt-6 inline-flex items-center gap-1.5 self-start text-[13.5px] font-semibold text-clay transition-colors hover:text-clay-dark"
          >
            Voir comment Kreator règle ça
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
