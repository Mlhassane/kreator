import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Filter,
  MapPin,
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { FinalCta } from "@/components/sections/final-cta";
import { Avatar } from "@/components/ui/avatar";
import { creators } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pour les marques",
  description:
    "Trouvez les créateurs qui font vendre, lancez vos campagnes UGC en 7 jours et mesurez chaque franc investi avec Kreator.",
};

function SourcingVisual() {
  return (
    <div className="card-surface w-full max-w-md p-4">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold">
          <Filter className="size-3.5 text-clay" />
          Sourcing
        </span>
        <span className="text-[10px] text-muted">2 400 profils</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Sénégal", "Côte d'Ivoire", "Nigeria", "+15 pays"].map((item, index) => (
          <span
            key={item}
            className={cn(
              "rounded-full px-2.5 py-1 text-[10px]",
              index < 3
                ? "bg-ink text-cream"
                : "border border-line text-muted",
            )}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Beauté", "Lifestyle", "18–34 ans", "> 5 % engagement"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-cream/60 px-2.5 py-1 text-[10px] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-4 space-y-1.5">
        {creators.slice(0, 3).map((creator, index) => (
          <div
            key={creator.name}
            className="flex items-center gap-2.5 rounded-xl border border-line/70 bg-white px-2.5 py-2"
          >
            <Avatar
              name={creator.name}
              gradient={creator.gradient}
              className="size-8 text-[10px]"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold leading-tight">
                {creator.name}
              </p>
              <p className="truncate text-[9.5px] text-muted">
                {creator.flag} {creator.city} · {creator.niche}
              </p>
            </div>
            <span className="rounded-full bg-forest/10 px-2 py-1 text-[9px] font-semibold text-forest">
              {97 - index * 4} % match
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-clay/8 px-3 py-2">
        <p className="text-[10px] text-clay">
          <Sparkles className="mr-1 inline size-3" />
          Shortlist prête en 48 h
        </p>
        <ArrowUpRight className="size-3.5 text-clay" />
      </div>
    </div>
  );
}

function BriefVisual() {
  return (
    <div className="card-surface w-full max-w-md p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.1em] text-muted">
            Brief · Wave
          </p>
          <p className="mt-1 font-display text-[15px] font-semibold tracking-[-0.02em]">
            #MonÉtéAvecWave
          </p>
        </div>
        <span className="rounded-full bg-forest/10 px-2 py-1 text-[9px] font-semibold text-forest">
          Validé
        </span>
      </div>

      <div className="mt-4 space-y-2">
        {[
          { label: "3 vidéos verticales · 20 s", done: true },
          { label: "Hook dans les 3 premières secondes", done: true },
          { label: "Mention @wave + #ad", done: true },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="grid size-4 place-items-center rounded-full bg-forest/10 text-forest">
              <Check className="size-2.5" strokeWidth={3.5} />
            </span>
            <span className="text-[10.5px] text-ink/75">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-line bg-cream/60 p-2.5">
        <div className="flex items-center gap-2">
          <Avatar
            name="Awa Diallo"
            gradient={creators[0].gradient}
            className="size-6 text-[8px]"
          />
          <p className="text-[9.5px] font-medium">Awa Diallo</p>
          <span className="ml-auto text-[8.5px] text-muted">il y a 2 h</span>
        </div>
        <p className="mt-2 text-[10px] leading-relaxed text-muted">
          Version 2 envoyée avec le nouveau hook. Le rendu est plus naturel en
          lumière du jour.
        </p>
      </div>

      <button
        type="button"
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-ink py-2 text-[10.5px] font-semibold text-cream"
      >
        <MessageSquare className="size-3" />
        Approuver le contenu
      </button>
    </div>
  );
}

function ReportingVisual() {
  return (
    <div className="card-surface w-full max-w-md p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.1em] text-muted">
            Performance · 30 jours
          </p>
          <p className="mt-1 font-display text-[26px] font-semibold leading-none tracking-[-0.03em]">
            12,4M
            <span className="ml-1.5 text-[10px] font-normal text-muted">
              vues
            </span>
          </p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-forest/10 px-2 py-1 text-[9px] font-semibold text-forest">
          <TrendingUp className="size-3" />
          +24 %
        </span>
      </div>

      <div className="mt-5 flex h-24 items-end gap-2">
        {[32, 48, 40, 62, 55, 78, 92, 70, 100].map((height, index) => (
          <div key={index} className="flex-1">
            <div
              className={cn(
                "w-full rounded-t-[3px]",
                index === 8 ? "bg-clay" : "bg-clay/20",
              )}
              style={{ height: `${height * 0.9}px` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-3">
        {[
          { label: "Engagement", value: "4,8 %" },
          { label: "Clics", value: "312K" },
          { label: "CPA", value: "-38 %" },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-[8.5px] uppercase tracking-[0.1em] text-muted">
              {item.label}
            </p>
            <p className="mt-0.5 text-[12px] font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    icon: Target,
    title: "Un sourcing qui va au-delà des followers",
    body: "Filtre par pays, niche, langue, audience et budget. Notre algorithme croise les données d'engagement réelles sur 90 jours avec ton objectif de campagne.",
    points: [
      "2 400 profils vérifiés manuellement",
      "Matching par marché et par audience",
      "Shortlist livrée en 48 h",
    ],
    visual: <SourcingVisual />,
  },
  {
    icon: MessageSquare,
    title: "Des collaborations sans friction",
    body: "Brief, contrats, droits d'usage, versions et validation dans un seul fil. Fini les pièces jointes perdues et les allers-retours WhatsApp.",
    points: [
      "Briefs structurés et versionnés",
      "Validation et feedback centralisés",
      "Contrats et droits générés automatiquement",
    ],
    visual: <BriefVisual />,
  },
  {
    icon: BarChart3,
    title: "Un reporting que ta direction comprend",
    body: "Vues, engagement, clics et ventes consolidés par créateur, par marché et par contenu. Export prêt pour ton comité, sans retraitement.",
    points: [
      "Attribution par créateur et par post",
      "Comparaison de marchés en un coup d'œil",
      "Export PDF, CSV et API",
    ],
    visual: <ReportingVisual />,
  },
];

export default function BrandsPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
        <div
          className="pointer-events-none absolute -right-24 top-0 size-[420px] rounded-full opacity-30 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(217,80,43,0.6), transparent 65%)",
          }}
        />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              Pour les marques
            </span>
            <h1 className="mt-5 text-balance text-[40px] leading-[0.98] font-semibold tracking-[-0.045em] sm:text-[52px] lg:text-[58px]">
              Des créateurs qui parlent à ton audience.{" "}
              <em className="font-serif font-normal italic text-clay">
                Pas à ton tableau de bord.
              </em>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-[16px] leading-relaxed text-muted">
              Kreator te donne accès aux voix qui comptent dans 18 pays
              africains — et l&apos;infrastructure pour briefer, valider, payer
              et mesurer sans quitter la plateforme.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/inscription" size="lg">
                Lancer une campagne
                <ArrowRight className="size-4" />
              </Button>
              <Button href="/dashboard" variant="outline" size="lg">
                Voir la plateforme
                <ArrowUpRight className="size-4" />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-muted">
              {["Sans engagement", "Shortlist en 48 h", "Paiements sécurisés"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="size-3.5 text-forest" strokeWidth={3} />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[32px] border border-dashed border-ink/10" />
            <div className="card-surface relative overflow-hidden p-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-forest">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-forest" />
                  Campagne live
                </div>
                <span className="rounded-full bg-sand/70 px-2 py-0.5 text-[9px] text-muted">
                  Jour 4 / 10
                </span>
              </div>
              <p className="mt-3 font-display text-[22px] font-semibold tracking-[-0.03em]">
                #MonÉtéAvecWave
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-[11px] text-muted">
                <MapPin className="size-3" />
                Dakar · Abidjan · Lagos
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {[
                  { label: "Budget", value: "4,8M", unit: "FCFA" },
                  { label: "Créateurs", value: "6", unit: "actifs" },
                  { label: "Vues", value: "1,2M", unit: "+24 %" },
                  { label: "Livrables", value: "8/12", unit: "validés" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-line bg-cream/50 p-2.5"
                  >
                    <p className="text-[9px] uppercase tracking-[0.1em] text-muted">
                      {stat.label}
                    </p>
                    <p className="mt-1 font-display text-[19px] font-semibold leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[9px] text-muted">{stat.unit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl bg-forest px-3 py-2.5 text-cream">
                <div className="flex items-center gap-2">
                  <Users className="size-3.5 text-gold" />
                  <p className="text-[10px]">3 nouveaux créateurs shortlistés</p>
                </div>
                <ArrowUpRight className="size-3.5 text-gold" />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-2xl border border-line bg-[#fffdf9] px-3 py-2.5 shadow-lift">
              <span className="grid size-7 place-items-center rounded-full bg-gold/20 text-gold">
                <Zap className="size-3.5" strokeWidth={2.4} />
              </span>
              <div>
                <p className="text-[9px] leading-tight text-muted">ROI moyen</p>
                <p className="text-[11.5px] font-semibold leading-tight">
                  x3,4 sur 90 jours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="py-20 md:py-28">
        <div className="shell">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              Ce que tu gagnes
            </span>
            <h2 className="mt-4 text-balance text-[32px] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-[42px]">
              Moins de coordination.{" "}
              <em className="font-serif font-normal italic text-clay">
                Plus de contenu qui performe.
              </em>
            </h2>
          </div>

          <div className="mt-14 space-y-16 md:space-y-24">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  index % 2 === 1 && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div>
                  <span className="grid size-11 place-items-center rounded-2xl border border-line bg-white/70 text-clay">
                    <feature.icon className="size-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 max-w-md text-[26px] leading-[1.08] font-semibold tracking-[-0.035em] sm:text-[30px]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-muted">
                    {feature.body}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {feature.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[13.5px]"
                      >
                        <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-clay/10 text-clay">
                          <Check className="size-2.5" strokeWidth={3.5} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center lg:justify-end">
                  {feature.visual}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="shell">
          <div className="relative overflow-hidden rounded-[32px] bg-forest px-6 py-10 text-cream sm:px-10 md:py-14">
            <div
              className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full opacity-40 blur-[80px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(239,169,47,0.8), transparent 65%)",
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="eyebrow text-gold">
                  <span className="h-px w-6 bg-current opacity-60" />
                  Cas client
                </span>
                <h2 className="mt-4 max-w-xl text-[30px] leading-[1.05] font-semibold tracking-[-0.04em] text-cream sm:text-[38px]">
                  Wave a doublé son taux de conversion sur les 18–34 ans.
                </h2>
                <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-cream/60">
                  Six créateurs dans trois pays, un brief unique et dix jours de
                  production. Résultat : une campagne qui a dépassé les
                  objectifs annuels en un mois.
                </p>
                <a
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold transition-colors hover:text-gold/80"
                >
                  Lire l&apos;étude de cas complète
                  <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "+38 %", label: "de conversions" },
                  { value: "12,4M", label: "de vues organiques" },
                  { value: "6", label: "créateurs activés" },
                  { value: "10 j", label: "de la brief à la live" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-cream/10 bg-cream/[0.06] p-4"
                  >
                    <p className="font-display text-[28px] font-semibold leading-none tracking-[-0.03em]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11px] text-cream/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="shell">
          <div className="max-w-xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              Pour qui
            </span>
            <h2 className="mt-4 text-[30px] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[38px]">
              Conçu pour ta façon de travailler.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Marques DTC",
                body: "Teste des angles créatifs vite, sans mobiliser une agence.",
                items: ["Tests UGC mensuels", "Contenus paid-ready", "ROI par créateur"],
              },
              {
                title: "Agences",
                body: "Gère plusieurs clients et marchés depuis un seul espace.",
                items: ["Multi-marques", "Reporting en marque blanche", "Accès API"],
              },
              {
                title: "Grands groupes",
                body: "Industrialise ton programme créateur à l'échelle du continent.",
                items: ["SSO & rôles avancés", "Conformité locale", "Talent managers dédiés"],
              },
            ].map((segment) => (
              <div
                key={segment.title}
                className="rounded-[24px] border border-line bg-[#fffdf9] p-6 shadow-soft"
              >
                <h3 className="font-display text-[20px] font-semibold tracking-[-0.03em]">
                  {segment.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {segment.body}
                </p>
                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {segment.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[12.5px] text-ink/75"
                    >
                      <Check className="size-3 text-clay" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
