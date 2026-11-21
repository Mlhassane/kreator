import { ArrowUpRight, Globe2, Handshake, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    title: "Create",
    body: "Du contenu authentique, produit par les voix du continent.",
  },
  {
    icon: Handshake,
    title: "Connect",
    body: "Des marques et des créateurs qui se trouvent enfin, au bon endroit.",
  },
  {
    icon: Globe2,
    title: "Grow",
    body: "Des campagnes mesurables, qui font grandir les deux côtés.",
  },
];

export function Mission() {
  return (
    <section id="mission" className="scroll-mt-24 pb-20 md:pb-28">
      <div className="shell">
        <div className="grid gap-8 border-y border-line py-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 md:py-16">
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              Notre mission
            </span>
            <p className="mt-5 max-w-4xl text-balance font-display text-[26px] leading-[1.12] font-medium tracking-[-0.035em] sm:text-[34px] md:text-[40px]">
              Donner aux marques africaines les moyens de créer du contenu
              authentique — et aux créateurs de transformer leur créativité en{" "}
              <em className="font-serif italic font-normal text-clay">
                opportunités économiques.
              </em>
            </p>
          </div>
          <a
            href="/marques"
            className="inline-flex shrink-0 items-center gap-1.5 self-start text-[13px] font-semibold text-clay transition-colors hover:text-clay-dark lg:self-end"
          >
            Notre ambition
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl border border-line bg-[#fffdf9] p-5 transition-colors hover:border-clay/30"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-9 place-items-center rounded-xl bg-clay/10 text-clay">
                  <pillar.icon className="size-4" strokeWidth={1.8} />
                </span>
                <span className="font-display text-[11px] font-medium text-muted/50">
                  {pillar.title.toLowerCase()}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[20px] font-semibold tracking-[-0.03em]">
                {pillar.title}.
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
