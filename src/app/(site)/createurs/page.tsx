import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  Globe,
  MapPin,
  Star,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, CreatorCard } from "@/components/ui/avatar";
import { EarningsCalculator } from "@/components/earnings-calculator";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/ui/reveal";
import { creators } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pour les créateurs",
  description:
    "Rejoins Kreator, accède à des campagnes de marques sérieuses et sois payé à temps. Crée ton profil gratuitement.",
};

const reasons = [
  {
    icon: Wallet,
    title: "Paiements garantis",
    body: "Le budget est sécurisé avant le début de la campagne. Tu es payé dès la validation des livrables.",
  },
  {
    icon: FileText,
    title: "Des briefs clairs",
    body: "Objectif, livrables, droits, deadline et rémunération : tout est écrit noir sur blanc, avant de commencer.",
  },
  {
    icon: TrendingUp,
    title: "Des tarifs justes",
    body: "Tu fixes ton prix. Kreator te montre les tarifs du marché pour ta niche et ta taille d'audience.",
  },
  {
    icon: Globe,
    title: "Des marques de partout",
    body: "Des campagnes au Sénégal, au Nigeria, au Kenya ou en Afrique du Sud, sans quitter ton téléphone.",
  },
];

const creatorSteps = [
  {
    number: "01",
    title: "Crée ton profil",
    body: "Connecte tes réseaux, choisis tes niches et fixe tes tarifs. Ça prend 5 minutes.",
  },
  {
    number: "02",
    title: "Reçois des briefs",
    body: "Notre équipe te propose les campagnes qui correspondent à ton audience et à ton style.",
  },
  {
    number: "03",
    title: "Crée et encaisse",
    body: "Produis, fais valider, publie. Le paiement est libéré automatiquement.",
  },
];

export default function CreatorsPage() {
  const [awa] = creators;

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
        <div
          className="pointer-events-none absolute -left-24 top-10 size-[400px] rounded-full opacity-35 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(239,169,47,0.7), transparent 65%)",
          }}
        />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              Pour les créateurs
            </span>
            <h1 className="mt-5 text-balance text-[40px] leading-[0.98] font-semibold tracking-[-0.045em] sm:text-[52px] lg:text-[58px]">
              Ton talent mérite mieux que des{" "}
              <em className="font-serif font-normal italic text-clay">
                DM sans réponse.
              </em>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-[16px] leading-relaxed text-muted">
              Kreator te connecte à des marques qui cherchent exactement ta voix
              — avec des briefs clairs, des tarifs justes et des paiements qui
              arrivent vraiment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/inscription" size="lg">
                Créer mon profil gratuit
                <ArrowRight className="size-4" />
              </Button>
              <Button href="#campagnes" variant="outline" size="lg">
                Voir les campagnes ouvertes
                <ArrowUpRight className="size-4" />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-muted">
              {["Inscription gratuite", "Tu fixes tes tarifs", "Paiement garanti"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="size-3.5 text-forest" strokeWidth={3} />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-[400px] sm:h-[470px]">
            <div className="absolute inset-6 rounded-[32px] border border-dashed border-ink/10" />

            <div className="absolute inset-x-0 top-0 overflow-hidden rounded-[26px] border border-line bg-[#fffdf9] shadow-lift">
              <div className="relative h-36 bg-gradient-to-br from-[#D9502B] via-[#B23E1E] to-[#3B1B12]">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 25% 15%, rgba(255,255,255,0.55), transparent 60%)",
                  }}
                />
                <span className="absolute inset-0 grid place-items-center font-display text-[64px] font-semibold text-white/90">
                  AD
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                  ● Disponible
                </span>
              </div>
              <div className="px-5 pb-5">
                <div className="-mt-7 flex items-end justify-between">
                  <span className="grid size-14 place-items-center rounded-full border-4 border-[#fffdf9] bg-gradient-to-br from-[#D9502B] to-[#3B1B12] font-display text-[16px] font-semibold text-white">
                    AD
                  </span>
                  <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-forest/10 px-2 py-1 text-[9.5px] font-semibold text-forest">
                    <Check className="size-2.5" strokeWidth={3.5} />
                    Profil vérifié
                  </span>
                </div>
                <h2 className="mt-2.5 font-display text-[20px] font-semibold tracking-[-0.03em]">
                  {awa.name}
                </h2>
                <p className="text-[11.5px] text-muted">
                  {awa.handle} · {awa.flag} {awa.city}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Mode", "Lifestyle", "UGC", "Français"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-sand/70 px-2 py-0.5 text-[9.5px] text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-3">
                  {[
                    { label: "Abonnés", value: "128K" },
                    { label: "Engagement", value: "6,4 %" },
                    { label: "Campagnes", value: "27" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-[15px] font-semibold leading-none">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[8.5px] uppercase tracking-[0.08em] text-muted">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 left-0 z-20 w-[78%] rounded-2xl border border-line bg-[#fffdf9] p-3 shadow-lift">
              <div className="flex items-center gap-2">
                <span className="grid size-7 place-items-center rounded-lg bg-forest text-[10px] font-bold text-cream">
                  W
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10.5px] font-semibold leading-tight">
                    Nouveau brief · Wave
                  </p>
                  <p className="text-[9px] text-muted">3 vidéos · 10 jours</p>
                </div>
                <span className="rounded-full bg-clay/10 px-2 py-1 text-[9px] font-semibold text-clay">
                  250K
                </span>
              </div>
              <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                <span className="rounded-lg border border-line py-1.5 text-center text-[9.5px] font-medium text-muted">
                  Plus tard
                </span>
                <span className="rounded-lg bg-ink py-1.5 text-center text-[9.5px] font-medium text-cream">
                  Accepter
                </span>
              </div>
            </div>

            <div className="absolute -right-1 top-[42%] z-30 flex animate-float-slow items-center gap-2 rounded-full border border-line bg-[#fffdf9] px-3 py-2 shadow-lift">
              <span className="grid size-6 place-items-center rounded-full bg-forest/10 text-forest">
                <Check className="size-3" strokeWidth={3.5} />
              </span>
              <div>
                <p className="text-[8.5px] leading-tight text-muted">
                  Paiement reçu
                </p>
                <p className="text-[10.5px] font-semibold leading-tight">
                  185 000 FCFA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line/70 bg-cream-2/60">
        <div className="shell grid grid-cols-2 divide-line py-6 md:grid-cols-4 md:divide-x">
          {[
            { value: "185 000", label: "FCFA · cachet moyen" },
            { value: "48 h", label: "délai moyen de paiement" },
            { value: "2 400+", label: "créateurs actifs" },
            { value: "18", label: "pays couverts" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-2 py-2 text-center md:px-6 md:text-left"
            >
              <p className="font-display text-[24px] font-semibold tracking-[-0.035em] sm:text-[28px]">
                {stat.value}
              </p>
              <p className="mt-1 text-[10.5px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="shell">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              Pourquoi Kreator
            </span>
            <h2 className="mt-4 text-balance text-[32px] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-[42px]">
              Ton travail. Ton prix.{" "}
              <em className="font-serif font-normal italic text-clay">
                Tes règles.
              </em>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 80}>
                <div className="h-full rounded-[22px] border border-line bg-[#fffdf9] p-5 shadow-soft">
                  <span className="grid size-10 place-items-center rounded-xl bg-clay/10 text-clay">
                    <reason.icon className="size-4.5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.02em]">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                    {reason.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-cream md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-16">
          <div>
            <span className="eyebrow text-gold">
              <span className="h-px w-6 bg-current opacity-60" />
              Comment ça marche
            </span>
            <h2 className="mt-4 max-w-lg text-[32px] leading-[1.02] font-semibold tracking-[-0.04em] text-cream sm:text-[42px]">
              De ton profil à ton premier{" "}
              <em className="font-serif font-normal italic text-gold">
                paiement.
              </em>
            </h2>

            <div className="mt-10 space-y-0">
              {creatorSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 border-t border-cream/10 py-6 first:border-t-0 first:pt-0"
                >
                  <span className="font-display text-[13px] font-semibold text-gold">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-cream">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-[13.5px] leading-relaxed text-cream/55">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] text-cream/45">
              <span className="inline-flex items-center gap-1.5">
                <Star className="size-3 fill-gold text-gold" /> 4,9/5 de
                satisfaction
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3" /> 18 pays
              </span>
            </div>
          </div>

          <EarningsCalculator />
        </div>
      </section>

      <section id="campagnes" className="scroll-mt-24 py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow">
                <span className="h-px w-6 bg-current opacity-60" />
                La communauté
              </span>
              <h2 className="mt-4 text-[32px] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-[42px]">
                Ils créent déjà avec{" "}
                <em className="font-serif font-normal italic text-clay">
                  Kreator.
                </em>
              </h2>
            </div>
            <Button href="/inscription" variant="outline" size="md">
              Rejoindre la communauté
              <ArrowUpRight className="size-4" />
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creators.map((creator, index) => (
              <Reveal key={creator.name} delay={(index % 3) * 80}>
                <CreatorCard creator={creator} className="h-full" />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-line bg-[#fffdf9] px-6 py-5 text-center">
            <Avatar
              name="Kreator Team"
              gradient="from-[#EFA92F] to-[#B47613]"
              className="hidden size-9 text-[10px] sm:grid"
            />
            <p className="text-[13px] text-muted">
              <span className="font-semibold text-ink">
                Pas encore de campagnes ouvertes dans ta niche ?
              </span>{" "}
              Crée ton profil : on te notifie dès qu&apos;une marque cherche ta
              voix.
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
