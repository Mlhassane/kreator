"use client";

import { useMemo, useState } from "react";
import { Compass, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { myCampaigns, type CampaignStatus } from "@/lib/studio-data";
import { CampaignCard } from "@/components/studio/campaign-card";
import { StudioButton } from "@/components/studio/studio-shell";

const activeStatuses: CampaignStatus[] = [
  "accepted",
  "contract",
  "production",
  "submitted",
  "revision",
  "approved",
  "payment",
];

type Tab = "all" | "active" | "pending" | "done";

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "Toutes" },
  { id: "active", label: "En cours" },
  { id: "pending", label: "En attente" },
  { id: "done", label: "Terminées" },
];

function inTab(status: CampaignStatus, tab: Tab) {
  if (tab === "all") return true;
  if (tab === "active") return activeStatuses.includes(status);
  if (tab === "pending") return status === "applied";
  return status === "paid";
}

export function CampaignsClient() {
  const [tab, setTab] = useState<Tab>("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(
    () => ({
      all: myCampaigns.length,
      active: myCampaigns.filter((c) => inTab(c.status, "active")).length,
      pending: myCampaigns.filter((c) => inTab(c.status, "pending")).length,
      done: myCampaigns.filter((c) => inTab(c.status, "done")).length,
    }),
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return myCampaigns.filter((c) => {
      if (!inTab(c.status, tab)) return false;
      if (
        q &&
        !`${c.title} ${c.brand} ${c.deliverables.join(" ")}`.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [tab, query]);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-studio-violet">
            My Campaigns
          </p>
          <h1 className="mt-1.5 text-[26px] font-semibold tracking-[-0.03em] sm:text-[30px]">
            Tes collaborations
          </h1>
          <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-studio-muted">
            Suis chaque étape, du brief au paiement, sans perdre le fil sur WhatsApp.
          </p>
        </div>
        <StudioButton href="/studio/discover">
          <Compass className="size-4" />
          Découvrir des campagnes
        </StudioButton>
      </div>

      <div className="studio-card p-3.5 sm:p-4">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] font-medium transition-colors",
                  tab === t.id
                    ? "bg-studio-violet text-white"
                    : "text-studio-muted hover:bg-studio-soft hover:text-studio-ink",
                )}
              >
                {t.label}
                <span
                  className={cn(
                    "rounded-full px-1.5 text-[10px] font-semibold",
                    tab === t.id ? "bg-white/20" : "bg-studio-soft",
                  )}
                >
                  {counts[t.id]}
                </span>
              </button>
            ))}
          </div>

          <div className="relative sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-studio-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher…"
              className="h-9 w-full rounded-xl border border-studio-border bg-studio-bg pl-9 pr-8 text-[12px] outline-none transition-colors placeholder:text-studio-muted/80 focus:border-studio-violet/50 focus:bg-studio-surface"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Effacer"
                className="absolute right-2 top-1/2 grid size-5 -translate-y-1/2 place-items-center rounded-full bg-studio-soft text-studio-muted hover:text-studio-ink"
              >
                <X className="size-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="studio-card flex flex-col items-center justify-center px-6 py-16 text-center">
          <span className="grid size-12 place-items-center rounded-2xl bg-studio-soft text-studio-muted">
            <Search className="size-5" />
          </span>
          <p className="mt-3 text-[14px] font-semibold">Aucune campagne dans cette vue</p>
          <p className="mt-1 max-w-sm text-[12px] text-studio-muted">
            Change d&apos;onglet ou lance-toi sur une nouvelle opportunité.
          </p>
          <StudioButton href="/studio/discover" size="sm" className="mt-4">
            Explorer Discover
          </StudioButton>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      )}
    </div>
  );
}
