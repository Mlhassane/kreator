"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  { label: "Nano", sub: "< 10K", rate: 45_000 },
  { label: "Micro", sub: "10–50K", rate: 95_000 },
  { label: "Mid", sub: "50–200K", rate: 180_000 },
  { label: "Macro", sub: "200K+", rate: 350_000 },
];

export function EarningsCalculator() {
  const [tier, setTier] = useState(1);
  const [campaigns, setCampaigns] = useState(2);

  const monthly = tiers[tier].rate * campaigns;

  return (
    <div className="rounded-[26px] border border-line bg-[#fffdf9] p-6 shadow-soft sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            Estimateur de revenus
          </p>
          <p className="mt-1 font-display text-[17px] font-semibold tracking-[-0.02em]">
            Combien peux-tu gagner ?
          </p>
        </div>
        <span className="grid size-9 place-items-center rounded-full bg-gold/20 text-gold">
          <Sparkles className="size-4" />
        </span>
      </div>

      <div className="mt-5">
        <p className="text-[11px] text-muted">Ta taille d&apos;audience</p>
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {tiers.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setTier(index)}
              className={cn(
                "rounded-xl border px-1 py-2 text-center transition-colors",
                tier === index
                  ? "border-ink bg-ink text-cream"
                  : "border-line bg-white/60 text-ink hover:border-ink/25",
              )}
            >
              <span className="block text-[11px] font-semibold">
                {item.label}
              </span>
              <span
                className={cn(
                  "mt-0.5 block text-[8.5px]",
                  tier === index ? "text-cream/50" : "text-muted",
                )}
              >
                {item.sub}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-muted">Campagnes par mois</p>
          <span className="rounded-full bg-sand px-2 py-0.5 text-[11px] font-semibold">
            {campaigns}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max={8}
          step={1}
          value={campaigns}
          onChange={(event) => setCampaigns(Number(event.target.value))}
          className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-sand accent-clay"
          aria-label="Nombre de campagnes par mois"
        />
        <div className="mt-1 flex justify-between text-[9px] text-muted">
          <span>1</span>
          <span>8</span>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-forest p-4 text-cream">
        <p className="text-[10px] uppercase tracking-[0.12em] text-cream/45">
          Revenu mensuel estimé
        </p>
        <p className="mt-1 font-display text-[32px] font-semibold leading-none tracking-[-0.04em]">
          {new Intl.NumberFormat("fr-FR").format(monthly)}{" "}
          <span className="text-[12px] font-normal text-cream/50">FCFA</span>
        </p>
        <p className="mt-2 text-[10px] leading-relaxed text-cream/45">
          Sur la base d&apos;une campagne {tiers[tier].label.toLowerCase()} à{" "}
          {new Intl.NumberFormat("fr-FR").format(tiers[tier].rate)} FCFA.
          Estimation indicative.
        </p>
      </div>

      <a
        href="/inscription"
        className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-clay py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-clay-dark"
      >
        Créer mon profil gratuit
        <ArrowRight className="size-3.5" />
      </a>
    </div>
  );
}
