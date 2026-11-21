import {
  ArrowUpRight,
  BarChart3,
  Bell,
  CreditCard,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Users,
  Wallet,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Avatar } from "@/components/ui/avatar";
import { creators, stats } from "@/lib/data";
import { cn } from "@/lib/utils";

const sidebar = [
  { icon: LayoutDashboard, label: "Vue d'ensemble" },
  { icon: Megaphone, label: "Campagnes", active: true },
  { icon: Users, label: "Créateurs" },
  { icon: MessageSquare, label: "Messages", badge: "4" },
  { icon: Wallet, label: "Paiements" },
  { icon: BarChart3, label: "Analytics" },
];

const campaigns = [
  {
    name: "#MonÉtéAvecWave",
    market: "SN · CI · NG",
    creators: 6,
    progress: 82,
    status: "Live",
  },
  {
    name: "Jumia Food — Lancement",
    market: "NG · GH · KE",
    creators: 12,
    progress: 45,
    status: "En cours",
  },
  {
    name: "Orange — Back to School",
    market: "CI · SN",
    creators: 4,
    progress: 100,
    status: "Terminé",
  },
  {
    name: "MTN MoMo — Série",
    market: "GH · CM",
    creators: 8,
    progress: 18,
    status: "Brief",
  },
];

const statusStyles: Record<string, string> = {
  Live: "bg-forest/20 text-[#7FD1A8]",
  "En cours": "bg-gold/15 text-gold",
  Terminé: "bg-cream/10 text-cream/50",
  Brief: "bg-clay/20 text-[#F09B7F]",
};

const features = [
  {
    icon: Megaphone,
    title: "Briefs & droits",
    body: "Un brief, un contrat, un fil de validation. Tout est versionné.",
  },
  {
    icon: CreditCard,
    title: "Paiements multi-devises",
    body: "FCFA, GHS, NGN, KES. Le budget est sécurisé, les créateurs payés à temps.",
  },
  {
    icon: BarChart3,
    title: "Analytics temps réel",
    body: "Vues, engagement, conversions : les chiffres qui comptent, par créateur.",
  },
  {
    icon: Users,
    title: "Équipes & rôles",
    body: "Invite tes équipes marketing, agences et partenaires avec les bons accès.",
  },
];

export function DashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-28">
      <div
        className="pointer-events-none absolute -left-40 top-0 size-[500px] rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(217,80,43,0.9), transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-[420px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(239,169,47,0.8), transparent 65%)",
        }}
      />

      <div className="shell relative">
        <SectionHeading
          tone="light"
          eyebrow="La plateforme"
          title={
            <>
              Tout ton programme créateur.{" "}
              <em className="font-serif italic font-normal text-gold">
                Un seul écran.
              </em>
            </>
          }
          description="Campagnes, créateurs, contenus, paiements et performance. Fini les allers-retours entre dix outils."
        />

        <div className="mt-12 overflow-hidden rounded-[26px] border border-cream/12 bg-[#0D0B0A] p-1.5 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] sm:p-2">
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-cream/20" />
              <span className="size-2 rounded-full bg-cream/20" />
              <span className="size-2 rounded-full bg-cream/20" />
            </div>
            <div className="mx-auto hidden items-center gap-1.5 rounded-md bg-cream/[0.06] px-3 py-1 text-[10px] text-cream/40 sm:flex">
              <span className="size-1 rounded-full bg-forest" />
              app.kreator.africa/campagnes
            </div>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-cream/10 bg-[#141210]">
            <div className="grid lg:grid-cols-[184px_1fr]">
              <aside className="hidden flex-col border-r border-cream/10 p-3 lg:flex">
                <div className="flex items-center gap-2 px-2 py-2">
                  <span className="grid size-6 place-items-center rounded-md bg-clay font-display text-[11px] font-semibold text-white">
                    k
                  </span>
                  <span className="font-display text-[15px] font-semibold tracking-[-0.04em]">
                    kreator<span className="text-gold">.</span>
                  </span>
                </div>

                <div className="mt-4 space-y-0.5">
                  {sidebar.map((item) => (
                    <div
                      key={item.label}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px]",
                        item.active
                          ? "bg-cream/[0.08] font-medium text-cream"
                          : "text-cream/45",
                      )}
                    >
                      <item.icon className="size-3.5" />
                      {item.label}
                      {item.badge && (
                        <span className="ml-auto rounded-full bg-clay px-1.5 text-[8px] font-semibold text-white">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-0.5 border-t border-cream/10 pt-3">
                  <div className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] text-cream/45">
                    <Settings className="size-3.5" />
                    Paramètres
                  </div>
                  <div className="mt-2 flex items-center gap-2 rounded-lg bg-cream/[0.04] px-2 py-1.5">
                    <Avatar
                      name="Aminata Sow"
                      gradient="from-[#D9502B] to-[#7A2A14]"
                      className="size-6 text-[8px]"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-[10px] font-medium leading-tight">
                        Aminata Sow
                      </p>
                      <p className="truncate text-[8.5px] text-cream/40">
                        Wave · Admin
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-[-0.02em]">
                      Campagnes
                    </h3>
                    <p className="mt-0.5 text-[10px] text-cream/40">
                      4 campagnes actives · 3 marchés
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden size-7 place-items-center rounded-md border border-cream/10 text-cream/50 sm:grid">
                      <Search className="size-3.5" />
                    </span>
                    <span className="hidden size-7 place-items-center rounded-md border border-cream/10 text-cream/50 sm:grid">
                      <Bell className="size-3.5" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-clay px-2.5 py-1.5 text-[10px] font-semibold text-white">
                      <Plus className="size-3" />
                      Nouvelle campagne
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "Budget engagé", value: "4,8M", unit: "FCFA" },
                    { label: "Vues générées", value: "12,4M", unit: "+24 %" },
                    { label: "Créateurs actifs", value: "38", unit: "18 pays" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-cream/10 bg-cream/[0.03] p-2.5"
                    >
                      <p className="text-[8.5px] uppercase tracking-[0.1em] text-cream/35">
                        {stat.label}
                      </p>
                      <p className="mt-1 font-display text-[17px] font-semibold leading-none">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[8.5px] text-cream/40">
                        {stat.unit}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid gap-3 xl:grid-cols-[1.65fr_1fr]">
                  <div className="rounded-xl border border-cream/10">
                    <div className="flex items-center justify-between border-b border-cream/10 px-3 py-2">
                      <p className="text-[10px] font-medium text-cream/60">
                        Campagnes récentes
                      </p>
                      <p className="text-[9px] text-cream/30">Voir tout</p>
                    </div>
                    <div className="divide-y divide-cream/[0.07]">
                      {campaigns.map((campaign) => (
                        <div
                          key={campaign.name}
                          className="flex items-center gap-3 px-3 py-2.5"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[10.5px] font-medium">
                              {campaign.name}
                            </p>
                            <p className="mt-0.5 text-[8.5px] text-cream/35">
                              {campaign.market} · {campaign.creators} créateurs
                            </p>
                          </div>
                          <div className="hidden w-20 sm:block">
                            <div className="h-1 overflow-hidden rounded-full bg-cream/10">
                              <div
                                className="h-full rounded-full bg-gold"
                                style={{ width: `${campaign.progress}%` }}
                              />
                            </div>
                          </div>
                          <span
                            className={cn(
                              "shrink-0 rounded-full px-2 py-0.5 text-[8.5px] font-semibold",
                              statusStyles[campaign.status],
                            )}
                          >
                            {campaign.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hidden rounded-xl border border-cream/10 xl:block">
                    <div className="flex items-center justify-between border-b border-cream/10 px-3 py-2">
                      <p className="text-[10px] font-medium text-cream/60">
                        Recommandés
                      </p>
                      <span className="rounded-full bg-gold/15 px-1.5 py-0.5 text-[8px] font-semibold text-gold">
                        AI
                      </span>
                    </div>
                    <div className="space-y-2 p-2.5">
                      {creators.slice(0, 3).map((creator) => (
                        <div
                          key={creator.name}
                          className="flex items-center gap-2"
                        >
                          <Avatar
                            name={creator.name}
                            gradient={creator.gradient}
                            className="size-7 text-[9px]"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[9.5px] font-medium leading-tight">
                              {creator.name}
                            </p>
                            <p className="truncate text-[8px] text-cream/35">
                              {creator.flag} {creator.niche}
                            </p>
                          </div>
                          <ArrowUpRight className="size-3 text-cream/30" />
                        </div>
                      ))}
                    </div>
                    <div className="m-2.5 mt-0 rounded-lg bg-cream/[0.04] px-2.5 py-2">
                      <p className="text-[8.5px] leading-relaxed text-cream/45">
                        3 profils correspondent à ton audience 18–34 ans à
                        Abidjan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-3">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-cream/12 bg-cream/[0.04] text-gold">
                <feature.icon className="size-4" strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="text-[13.5px] font-semibold text-cream">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[12px] leading-relaxed text-cream/45">
                  {feature.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-cream/10 pt-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-[30px] font-semibold tracking-[-0.04em] text-cream sm:text-[36px]">
                {stat.value}
              </p>
              <p className="mt-1 text-[11.5px] text-cream/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
