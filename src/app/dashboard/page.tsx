import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  Calendar,
  Check,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Avatar } from "@/components/ui/avatar";
import { creators } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Pilote tes campagnes et tes créateurs depuis Kreator.",
};

const nav = [
  { icon: LayoutDashboard, label: "Vue d'ensemble", active: true },
  { icon: Megaphone, label: "Campagnes" },
  { icon: Users, label: "Créateurs" },
  { icon: MessageSquare, label: "Messages", badge: "4" },
  { icon: Wallet, label: "Paiements" },
  { icon: BarChart3, label: "Analytics" },
];

const kpis = [
  {
    label: "Budget engagé",
    value: "4,8M",
    unit: "FCFA",
    delta: "+12 %",
    positive: true,
  },
  {
    label: "Vues générées",
    value: "12,4M",
    unit: "ce mois",
    delta: "+24 %",
    positive: true,
  },
  {
    label: "Créateurs actifs",
    value: "38",
    unit: "sur 18 pays",
    delta: "+6",
    positive: true,
  },
  {
    label: "Taux d'engagement",
    value: "4,8%",
    unit: "moyenne",
    delta: "-0,3 pt",
    positive: false,
  },
];

const chart = [
  { month: "Jan", value: 34 },
  { month: "Fév", value: 42 },
  { month: "Mar", value: 38 },
  { month: "Avr", value: 55 },
  { month: "Mai", value: 48 },
  { month: "Juin", value: 62 },
  { month: "Juil", value: 58 },
  { month: "Août", value: 72 },
  { month: "Sep", value: 66 },
  { month: "Oct", value: 84 },
  { month: "Nov", value: 96 },
  { month: "Déc", value: 78 },
];

const campaigns = [
  {
    name: "#MonÉtéAvecWave",
    market: "SN · CI · NG",
    creators: 6,
    progress: 82,
    status: "Live",
    budget: "4,8M",
  },
  {
    name: "Jumia Food — Lancement",
    market: "NG · GH · KE",
    creators: 12,
    progress: 45,
    status: "En cours",
    budget: "7,2M",
  },
  {
    name: "Orange — Back to School",
    market: "CI · SN",
    creators: 4,
    progress: 100,
    status: "Terminé",
    budget: "2,1M",
  },
  {
    name: "MTN MoMo — Série",
    market: "GH · CM",
    creators: 8,
    progress: 18,
    status: "Brief",
    budget: "3,6M",
  },
];

const statusStyles: Record<string, string> = {
  Live: "bg-forest/10 text-forest",
  "En cours": "bg-gold/15 text-[#9A6B0D]",
  Terminé: "bg-ink/5 text-muted",
  Brief: "bg-clay/10 text-clay",
};

const tasks = [
  { label: "Valider 3 vidéos Awa Diallo", done: false, due: "Aujourd'hui" },
  { label: "Payer la facture Tunde Bakare", done: false, due: "Demain" },
  { label: "Relancer Naledi pour le brief", done: true, due: "Hier" },
  { label: "Brief MTN MoMo — phase 2", done: false, due: "Vendredi" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-cream-2/50">
      <div className="flex">
        <aside className="sticky top-0 hidden h-screen w-[236px] shrink-0 flex-col border-r border-line bg-[#fffdf9] p-4 lg:flex">
          <Link href="/" className="px-2 py-1.5">
            <Logo />
          </Link>

          <nav className="mt-6 space-y-0.5">
            {nav.map((item) => (
              <Link
                key={item.label}
                href="/dashboard"
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[12.5px] transition-colors",
                  item.active
                    ? "bg-ink font-medium text-cream"
                    : "text-muted hover:bg-ink/[0.04] hover:text-ink",
                )}
              >
                <item.icon className="size-4" strokeWidth={1.8} />
                {item.label}
                {item.badge && (
                  <span className="ml-auto rounded-full bg-clay px-1.5 py-0.5 text-[9px] font-semibold text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="mt-6 border-t border-line pt-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[12.5px] text-muted hover:bg-ink/[0.04] hover:text-ink"
            >
              <Settings className="size-4" strokeWidth={1.8} />
              Paramètres
            </Link>
          </div>

          <div className="mt-auto space-y-3">
            <div className="rounded-2xl bg-forest p-4 text-cream">
              <div className="flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-gold" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gold">
                  Growth
                </p>
              </div>
              <p className="mt-2 text-[11.5px] leading-relaxed text-cream/60">
                Débloque les créateurs illimités et l&apos;analytics avancé.
              </p>
              <Link
                href="/tarifs"
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-gold"
              >
                Passer à Growth
                <ArrowUpRight className="size-3" />
              </Link>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl border border-line px-2.5 py-2">
              <Avatar
                name="Aminata Sow"
                gradient="from-[#D9502B] to-[#7A2A14]"
                className="size-8 text-[10px]"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11.5px] font-medium leading-tight">
                  Aminata Sow
                </p>
                <p className="truncate text-[10px] text-muted">Wave · Admin</p>
              </div>
              <ArrowUpRight className="size-3.5 text-muted" />
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-line bg-cream/85 px-4 backdrop-blur-xl sm:px-6">
            <Link href="/" className="lg:hidden">
              <Logo compact />
            </Link>

            <div className="relative hidden max-w-xs flex-1 sm:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted" />
              <input
                type="search"
                placeholder="Rechercher un créateur, une campagne…"
                className="h-9 w-full rounded-full border border-line bg-white/70 pl-9 pr-3 text-[12px] placeholder:text-muted/60 focus:border-clay/40 focus:outline-none focus:ring-4 focus:ring-clay/10"
              />
            </div>

            <div className="ml-auto flex items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-full border border-line bg-white/70 px-3 py-1.5 text-[11px] text-muted md:inline-flex">
                <Calendar className="size-3.5" />
                Mardi 21 novembre
              </span>
              <button
                type="button"
                className="relative grid size-9 place-items-center rounded-full border border-line bg-white/70 text-muted"
                aria-label="Notifications"
              >
                <Bell className="size-4" />
                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-clay ring-2 ring-cream" />
              </button>
              <Link
                href="/inscription"
                className="inline-flex h-9 items-center gap-1.5 rounded-full bg-clay px-3.5 text-[12px] font-semibold text-white transition-colors hover:bg-clay-dark"
              >
                <Plus className="size-3.5" />
                <span className="hidden sm:inline">Nouvelle campagne</span>
                <span className="sm:hidden">Créer</span>
              </Link>
            </div>
          </header>

          <main className="space-y-5 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  Vue d&apos;ensemble
                </p>
                <h1 className="mt-1.5 text-[26px] leading-tight font-semibold tracking-[-0.04em] sm:text-[30px]">
                  Bonjour Aminata 👋
                </h1>
                <p className="mt-1 text-[12.5px] text-muted">
                  3 campagnes sont actives et 5 livrables attendent ta
                  validation.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-white/70 px-3.5 text-[12px] font-medium text-ink"
                >
                  <BarChart3 className="size-3.5" />
                  Exporter
                </button>
                <Link
                  href="/inscription"
                  className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 text-[12px] font-semibold text-cream"
                >
                  <Plus className="size-3.5" />
                  Campagne
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-2xl border border-line bg-[#fffdf9] p-4 shadow-[0_1px_2px_rgba(19,17,16,0.03)]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[10.5px] uppercase tracking-[0.1em] text-muted">
                      {kpi.label}
                    </p>
                    <span
                      className={cn(
                        "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-semibold",
                        kpi.positive
                          ? "bg-forest/10 text-forest"
                          : "bg-clay/10 text-clay",
                      )}
                    >
                      <TrendingUp
                        className={cn(
                          "size-2.5",
                          !kpi.positive && "rotate-180",
                        )}
                      />
                      {kpi.delta}
                    </span>
                  </div>
                  <p className="mt-3 font-display text-[26px] font-semibold leading-none tracking-[-0.035em]">
                    {kpi.value}
                  </p>
                  <p className="mt-1.5 text-[10px] text-muted">{kpi.unit}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-line bg-[#fffdf9] p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="text-[14px] font-semibold tracking-[-0.02em]">
                        Performance des campagnes
                      </h2>
                      <p className="mt-0.5 text-[10.5px] text-muted">
                        Vues cumulées · 2026
                      </p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full border border-line p-0.5">
                      {["7 j", "30 j", "12 mois"].map((period, index) => (
                        <span
                          key={period}
                          className={cn(
                            "rounded-full px-2.5 py-1 text-[10px]",
                            index === 2
                              ? "bg-ink font-medium text-cream"
                              : "text-muted",
                          )}
                        >
                          {period}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex h-44 gap-1.5 sm:gap-2">
                    {chart.map((item, index) => (
                      <div
                        key={item.month}
                        className="group flex flex-1 flex-col items-center gap-1.5"
                      >
                        <div className="relative flex w-full flex-1 items-end">
                          <div
                            className={cn(
                              "w-full rounded-t-[4px] transition-colors",
                              index === 10
                                ? "bg-clay"
                                : "bg-clay/20 group-hover:bg-clay/40",
                            )}
                            style={{ height: `${item.value}%` }}
                          />
                        </div>
                        <span className="text-[8.5px] text-muted">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-line bg-[#fffdf9]">
                  <div className="flex items-center justify-between border-b border-line px-4 py-3.5 sm:px-5">
                    <h2 className="text-[14px] font-semibold tracking-[-0.02em]">
                      Campagnes récentes
                    </h2>
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-clay"
                    >
                      Voir tout
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </div>

                  <div className="hidden grid-cols-[1.6fr_0.9fr_0.8fr_0.8fr_0.5fr] gap-3 border-b border-line px-5 py-2 text-[9.5px] uppercase tracking-[0.1em] text-muted md:grid">
                    <span>Campagne</span>
                    <span>Marchés</span>
                    <span>Progression</span>
                    <span>Budget</span>
                    <span className="text-right">Statut</span>
                  </div>

                  <div className="divide-y divide-line">
                    {campaigns.map((campaign) => (
                      <div
                        key={campaign.name}
                        className="grid gap-3 px-4 py-3 transition-colors hover:bg-cream/60 sm:px-5 md:grid-cols-[1.6fr_0.9fr_0.8fr_0.8fr_0.5fr] md:items-center"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-[12px] font-medium">
                            {campaign.name}
                          </p>
                          <p className="mt-0.5 text-[10px] text-muted md:hidden">
                            {campaign.market} · {campaign.creators} créateurs
                          </p>
                          <div className="mt-1.5 flex -space-x-1.5 md:hidden">
                            {creators
                              .slice(0, campaign.creators % 4 || 3)
                              .map((creator) => (
                                <Avatar
                                  key={creator.name}
                                  name={creator.name}
                                  gradient={creator.gradient}
                                  className="size-5 text-[7px] ring-2 ring-[#fffdf9]"
                                />
                              ))}
                          </div>
                        </div>
                        <p className="hidden text-[10.5px] text-muted md:block">
                          {campaign.market}
                        </p>
                        <div className="hidden items-center gap-2 md:flex">
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sand">
                            <div
                              className="h-full rounded-full bg-clay"
                              style={{ width: `${campaign.progress}%` }}
                            />
                          </div>
                          <span className="w-7 text-right text-[9.5px] text-muted">
                            {campaign.progress}%
                          </span>
                        </div>
                        <p className="hidden text-[11px] font-medium md:block">
                          {campaign.budget}
                          <span className="ml-1 text-[9px] font-normal text-muted">
                            FCFA
                          </span>
                        </p>
                        <div className="flex items-center justify-between md:justify-end">
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[9px] font-semibold",
                              statusStyles[campaign.status],
                            )}
                          >
                            {campaign.status}
                          </span>
                          <span className="text-[10px] text-muted md:hidden">
                            {campaign.budget} FCFA
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-line bg-[#fffdf9]">
                  <div className="flex items-center justify-between border-b border-line px-4 py-3.5">
                    <div>
                      <h2 className="text-[14px] font-semibold tracking-[-0.02em]">
                        Créateurs recommandés
                      </h2>
                      <p className="mt-0.5 text-[10px] text-muted">
                        Pour #MonÉtéAvecWave
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-[9px] font-semibold text-[#9A6B0D]">
                      <Sparkles className="size-2.5" />
                      AI
                    </span>
                  </div>
                  <div className="divide-y divide-line">
                    {creators.slice(0, 4).map((creator) => (
                      <div
                        key={creator.name}
                        className="flex items-center gap-2.5 px-4 py-3"
                      >
                        <Avatar
                          name={creator.name}
                          gradient={creator.gradient}
                          className="size-8 text-[10px]"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[11.5px] font-medium leading-tight">
                            {creator.name}
                          </p>
                          <p className="truncate text-[9.5px] text-muted">
                            {creator.flag} {creator.niche} ·{" "}
                            {creator.engagement}%
                          </p>
                        </div>
                        <button
                          type="button"
                          className="rounded-full border border-line px-2.5 py-1 text-[9.5px] font-medium text-ink transition-colors hover:border-ink/30"
                        >
                          Inviter
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="p-3">
                    <Link
                      href="/createurs"
                      className="flex items-center justify-center gap-1 rounded-xl bg-cream py-2 text-[10.5px] font-medium text-ink"
                    >
                      Voir la shortlist complète
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-[#fffdf9] p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[14px] font-semibold tracking-[-0.02em]">
                      À faire
                    </h2>
                    <span className="rounded-full bg-clay/10 px-2 py-0.5 text-[9px] font-semibold text-clay">
                      3 en attente
                    </span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {tasks.map((task) => (
                      <label
                        key={task.label}
                        className="flex cursor-pointer items-start gap-2.5 rounded-xl px-1 py-1.5"
                      >
                        <span
                          className={cn(
                            "mt-0.5 grid size-4 shrink-0 place-items-center rounded border",
                            task.done
                              ? "border-forest bg-forest text-cream"
                              : "border-line bg-white",
                          )}
                        >
                          {task.done && (
                            <Check className="size-2.5" strokeWidth={3.5} />
                          )}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className={cn(
                              "block text-[11px] leading-snug",
                              task.done && "text-muted line-through",
                            )}
                          >
                            {task.label}
                          </span>
                          <span className="mt-0.5 block text-[9px] text-muted">
                            {task.due}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-forest p-4 text-cream">
                  <div className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full border border-gold/20" />
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.12em] text-gold">
                    Nouveau
                  </p>
                  <p className="mt-2 text-[13px] font-semibold leading-snug">
                    Les paiements Mobile Money arrivent sur Kreator.
                  </p>
                  <p className="mt-1 text-[10.5px] leading-relaxed text-cream/50">
                    Paie tes créateurs en Wave, Orange Money ou MTN MoMo
                    directement depuis la plateforme.
                  </p>
                  <Link
                    href="/tarifs"
                    className="mt-3 inline-flex items-center gap-1 text-[10.5px] font-semibold text-gold"
                  >
                    Découvrir
                    <ArrowUpRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
