"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  Filter,
  Lock,
  MapPin,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { cn, formatFcfa } from "@/lib/utils";
import { opportunities, type Opportunity } from "@/lib/studio-data";
import { BrandMark } from "@/components/studio/campaign-card";
import { TypeBadge } from "@/components/studio/studio-ui";
import { StudioButton } from "@/components/studio/studio-shell";

const sectors = ["Tous les secteurs", ...Array.from(new Set(opportunities.map((o) => o.sector)))];
const countries = ["Tous les pays", ...Array.from(new Set(opportunities.map((o) => o.country)))];

type TypeFilter = "all" | "ugc" | "influencer";
type AccessFilter = "all" | "open" | "private";
type BudgetFilter = "all" | "low" | "mid" | "high";
type Sort = "match" | "budget" | "recent";

const budgetLabels: Record<BudgetFilter, string> = {
  all: "Tous les budgets",
  low: "Moins de 50 000 FCFA",
  mid: "50 000 – 100 000 FCFA",
  high: "Plus de 100 000 FCFA",
};

const sortLabels: Record<Sort, string> = {
  match: "Meilleur match",
  budget: "Budget décroissant",
  recent: "Plus récentes",
};

function matchesBudget(budget: number, filter: BudgetFilter) {
  if (filter === "low") return budget < 50_000;
  if (filter === "mid") return budget >= 50_000 && budget <= 100_000;
  if (filter === "high") return budget > 100_000;
  return true;
}

export function DiscoverClient() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<TypeFilter>("all");
  const [access, setAccess] = useState<AccessFilter>("all");
  const [sector, setSector] = useState(sectors[0]);
  const [country, setCountry] = useState(countries[0]);
  const [budget, setBudget] = useState<BudgetFilter>("all");
  const [sort, setSort] = useState<Sort>("match");
  const [applied, setApplied] = useState<string[]>([]);
  const [selected, setSelected] = useState<Opportunity | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(id);
  }, [toast]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = opportunities.filter((o) => {
      if (q && !`${o.brand} ${o.title} ${o.sector} ${o.city} ${o.tags.join(" ")}`.toLowerCase().includes(q)) {
        return false;
      }
      if (type !== "all" && o.type !== type) return false;
      if (access !== "all" && (o.access ?? "open") !== access) return false;
      if (sector !== sectors[0] && o.sector !== sector) return false;
      if (country !== countries[0] && o.country !== country) return false;
      if (!matchesBudget(o.budget, budget)) return false;
      return true;
    });

    return [...list].sort((a, b) => {
      if (sort === "budget") return b.budget - a.budget;
      if (sort === "recent") return opportunities.indexOf(a) - opportunities.indexOf(b);
      return b.match - a.match;
    });
  }, [query, type, access, sector, country, budget, sort]);

  const apply = (o: Opportunity) => {
    setApplied((prev) => (prev.includes(o.id) ? prev : [...prev, o.id]));
    setSelected(null);
    setToast(`Candidature envoyée à ${o.brand}. Tu recevras une réponse sous 48 h.`);
  };

  const hasFilters =
    query !== "" ||
    type !== "all" ||
    access !== "all" ||
    sector !== sectors[0] ||
    country !== countries[0] ||
    budget !== "all";

  const reset = () => {
    setQuery("");
    setType("all");
    setAccess("all");
    setSector(sectors[0]);
    setCountry(countries[0]);
    setBudget("all");
  };

  return (
    <div className="space-y-5">
      {/* En-tête */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-studio-violet">
            Discover
          </p>
          <h1 className="mt-1.5 text-[26px] font-semibold tracking-[-0.03em] sm:text-[30px]">
            Trouve ta prochaine collaboration
          </h1>
          <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-studio-muted">
            {opportunities.length} campagnes actives · 2 invitations privées · mises à jour aujourd&apos;hui.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-studio-border bg-studio-surface px-3 py-2 text-[11.5px] text-studio-muted">
          <Sparkles className="size-4 text-studio-violet" />
          Matching basé sur ton profil, tes niches et ta localisation
        </div>
      </div>

      {/* Recherche + filtres */}
      <div className="studio-card p-3.5 sm:p-4">
        <div className="flex flex-col gap-2.5 lg:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-studio-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une marque, une campagne, une niche…"
              className="h-10 w-full rounded-xl border border-studio-border bg-studio-bg pl-9 pr-9 text-[13px] text-studio-ink outline-none transition-colors placeholder:text-studio-muted/80 focus:border-studio-violet/50 focus:bg-studio-surface"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Effacer la recherche"
                className="absolute right-2.5 top-1/2 grid size-5 -translate-y-1/2 place-items-center rounded-full bg-studio-soft text-studio-muted hover:text-studio-ink"
              >
                <X className="size-3" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Type */}
            <div className="flex rounded-xl border border-studio-border bg-studio-bg p-0.5">
              {[
                { value: "all", label: "Tout" },
                { value: "ugc", label: "UGC" },
                { value: "influencer", label: "Influence" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setType(item.value as TypeFilter)}
                  className={cn(
                    "rounded-[10px] px-2.5 py-1.5 text-[11.5px] font-medium transition-colors",
                    type === item.value
                      ? "bg-studio-surface text-studio-ink shadow-sm"
                      : "text-studio-muted hover:text-studio-ink",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Select value={sector} onChange={setSector} options={sectors} />
            <Select value={country} onChange={setCountry} options={countries} />
            <Select
              value={budgetLabels[budget]}
              onChange={(v) => {
                const found = (Object.keys(budgetLabels) as BudgetFilter[]).find(
                  (k) => budgetLabels[k] === v,
                );
                if (found) setBudget(found);
              }}
              options={Object.values(budgetLabels)}
            />
            <Select
              value={sortLabels[sort]}
              onChange={(v) => {
                const found = (Object.keys(sortLabels) as Sort[]).find((k) => sortLabels[k] === v);
                if (found) setSort(found);
              }}
              options={Object.values(sortLabels)}
            />
          </div>
        </div>

        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-studio-muted">
            <Filter className="size-3.5" />
            Accès
          </span>
          {[
            { value: "all", label: "Toutes" },
            { value: "open", label: "Ouvertes" },
            { value: "private", label: "Invitations privées" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setAccess(item.value as AccessFilter)}
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors",
                access === item.value
                  ? "bg-studio-violet text-white"
                  : "bg-studio-soft text-studio-muted hover:text-studio-ink",
              )}
            >
              {item.label}
            </button>
          ))}

          {hasFilters && (
            <button
              onClick={reset}
              className="ml-auto inline-flex items-center gap-1 text-[11px] font-medium text-studio-violet hover:underline"
            >
              <X className="size-3" />
              Réinitialiser
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[12px] text-studio-muted">
          <span className="font-semibold text-studio-ink">{results.length}</span> campagne
          {results.length > 1 ? "s" : ""} trouvée{results.length > 1 ? "s" : ""}
        </p>
        <p className="hidden text-[11px] text-studio-muted sm:block">
          Les budgets sont affichés en FCFA, hors taxes.
        </p>
      </div>

      {/* Résultats */}
      {results.length === 0 ? (
        <div className="studio-card flex flex-col items-center justify-center px-6 py-16 text-center">
          <span className="grid size-12 place-items-center rounded-2xl bg-studio-soft text-studio-muted">
            <Search className="size-5" />
          </span>
          <p className="mt-3 text-[14px] font-semibold">Aucune campagne ne correspond</p>
          <p className="mt-1 max-w-sm text-[12px] text-studio-muted">
            Essaie d&apos;élargir tes filtres ou de retirer la recherche par mot-clé.
          </p>
          <StudioButton onClick={reset} variant="outline" size="sm" className="mt-4">
            Réinitialiser les filtres
          </StudioButton>
        </div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {results.map((o) => {
            const isApplied = applied.includes(o.id);
            const isPrivate = (o.access ?? "open") === "private";
            return (
              <article
                key={o.id}
                className="group studio-card flex flex-col p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-studio-violet/35 hover:shadow-studio-pop"
              >
                <div className="flex items-start gap-3">
                  <BrandMark initials={o.brandInitials} tone={o.brandTone} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <p className="truncate text-[12.5px] font-semibold">{o.brand}</p>
                      {o.verified && (
                        <BadgeCheck className="size-3.5 shrink-0 text-studio-violet" />
                      )}
                    </div>
                    <p className="mt-0.5 text-[10.5px] text-studio-muted">{o.posted}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-studio-violet-soft px-2 py-1 text-[10.5px] font-semibold text-studio-violet">
                    {o.match} % match
                  </span>
                </div>

                <h2 className="mt-3 text-[14.5px] font-semibold leading-snug tracking-[-0.01em]">
                  {o.title}
                </h2>

                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <TypeBadge type={o.type} />
                  {isPrivate && (
                    <span className="inline-flex items-center gap-1 rounded-md bg-[#fff4d6] px-2 py-1 text-[10.5px] font-semibold text-[#8a5a00]">
                      <Lock className="size-3" />
                      Invitation
                    </span>
                  )}
                </div>

                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[11.5px]">
                  <div>
                    <dt className="text-studio-muted">Secteur</dt>
                    <dd className="mt-0.5 font-medium">{o.sector}</dd>
                  </div>
                  <div>
                    <dt className="text-studio-muted">Livrables</dt>
                    <dd className="mt-0.5 font-medium">{o.deliverables}</dd>
                  </div>
                  <div>
                    <dt className="text-studio-muted">Localisation</dt>
                    <dd className="mt-0.5 flex items-center gap-1 font-medium">
                      <MapPin className="size-3 text-studio-muted" />
                      {o.city}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-studio-muted">Date limite</dt>
                    <dd className="mt-0.5 flex items-center gap-1 font-medium">
                      <CalendarDays className="size-3 text-studio-muted" />
                      {o.deadline}
                    </dd>
                  </div>
                </dl>

                <div className="mt-3 flex flex-wrap gap-1">
                  {o.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-studio-soft px-1.5 py-0.5 text-[10px] font-medium text-studio-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex items-baseline justify-between border-t border-studio-border pt-3">
                  <span className="text-[14px] font-semibold">
                    {formatFcfa(o.budget)}{" "}
                    <span className="text-[10.5px] font-normal text-studio-muted">FCFA</span>
                  </span>
                  <span className="text-[10.5px] text-studio-muted">{o.applicants} candidats</span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() => setSelected(o)}
                    className="h-9 flex-1 rounded-xl border border-studio-border bg-studio-surface text-[12px] font-medium text-studio-ink transition-colors hover:border-studio-violet/40 hover:text-studio-violet"
                  >
                    Voir la campagne
                  </button>
                  <button
                    onClick={() => apply(o)}
                    disabled={isApplied}
                    className={cn(
                      "inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl text-[12px] font-medium transition-all",
                      isApplied
                        ? "cursor-default bg-[#e9f8e1] text-[#2f6b1f]"
                        : "bg-studio-violet text-white hover:bg-studio-violet-dark",
                    )}
                  >
                    {isApplied ? (
                      <>
                        <Check className="size-3.5" />
                        Envoyée
                      </>
                    ) : (
                      <>
                        Postuler
                        <ArrowRight className="size-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Modale détail */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-studio-ink/40 p-0 backdrop-blur-sm sm:items-center sm:p-6">
          <button
            aria-label="Fermer"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelected(null)}
          />
          <div className="relative z-10 max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-studio-border bg-studio-surface p-5 shadow-studio-pop sm:rounded-2xl">
            <div className="flex items-start gap-3">
              <BrandMark
                initials={selected.brandInitials}
                tone={selected.brandTone}
                size="lg"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <p className="text-[13px] font-semibold">{selected.brand}</p>
                  {selected.verified && (
                    <BadgeCheck className="size-3.5 text-studio-violet" />
                  )}
                </div>
                <h2 className="mt-0.5 text-[18px] font-semibold tracking-[-0.02em]">
                  {selected.title}
                </h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Fermer la campagne"
                className="grid size-8 shrink-0 place-items-center rounded-lg bg-studio-soft text-studio-muted hover:text-studio-ink"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              <TypeBadge type={selected.type} />
              <span className="rounded-md bg-studio-soft px-2 py-1 text-[10.5px] font-medium text-studio-muted">
                {selected.sector}
              </span>
              <span className="rounded-md bg-studio-violet-soft px-2 py-1 text-[10.5px] font-semibold text-studio-violet">
                {selected.match} % match
              </span>
            </div>

            <p className="mt-4 text-[12.5px] leading-relaxed text-studio-ink/75">
              {selected.description}
            </p>

            <dl className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-studio-bg p-3 text-[11.5px]">
              <div>
                <dt className="text-studio-muted">Budget</dt>
                <dd className="mt-0.5 text-[14px] font-semibold">
                  {formatFcfa(selected.budget)} FCFA
                </dd>
              </div>
              <div>
                <dt className="text-studio-muted">Date limite</dt>
                <dd className="mt-0.5 font-medium">{selected.deadline}</dd>
              </div>
              <div>
                <dt className="text-studio-muted">Livrables</dt>
                <dd className="mt-0.5 font-medium">{selected.deliverables}</dd>
              </div>
              <div>
                <dt className="text-studio-muted">Localisation</dt>
                <dd className="mt-0.5 font-medium">
                  {selected.city}, {selected.country}
                </dd>
              </div>
            </dl>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-studio-soft px-2 py-1 text-[10.5px] font-medium text-studio-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2">
              <StudioButton
                variant="outline"
                className="flex-1"
                onClick={() => setSelected(null)}
              >
                Fermer
              </StudioButton>
              <StudioButton
                className="flex-1"
                onClick={() => apply(selected)}
              >
                {applied.includes(selected.id) ? (
                  <>
                    <Check className="size-4" />
                    Candidature envoyée
                  </>
                ) : (
                  <>
                    Postuler maintenant
                    <ArrowRight className="size-4" />
                  </>
                )}
              </StudioButton>
            </div>
            <p className="mt-2 text-center text-[10.5px] text-studio-muted">
              {selected.applicants} créateurs ont déjà postulé · réponse sous 48 h.
            </p>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-xl border border-studio-border bg-studio-ink px-4 py-3 text-[12px] text-white shadow-studio-pop lg:bottom-6">
          <div className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-studio-lime" />
            <p className="leading-relaxed">{toast}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 appearance-none rounded-xl border border-studio-border bg-studio-bg pl-3 pr-8 text-[11.5px] font-medium text-studio-ink outline-none transition-colors focus:border-studio-violet/50"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-studio-muted" />
    </div>
  );
}
