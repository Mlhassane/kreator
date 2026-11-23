import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDollarSign,
  Compass,
  FolderKanban,
  MessageSquare,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";
import { StudioButton } from "@/components/studio/studio-shell";
import { Progress, SectionCard, StatCard } from "@/components/studio/studio-ui";
import { CampaignCard } from "@/components/studio/campaign-card";
import {
  earningsSummary,
  myCampaigns,
  onboardingSteps,
  recentActivity,
  studioProfile,
} from "@/lib/studio-data";
import { cn, formatFcfa } from "@/lib/utils";

export const metadata: Metadata = { title: "Overview" };

const activityIcons = {
  invite: MessageSquare,
  payment: CircleDollarSign,
  campaign: Compass,
  approved: Check,
} as const;

const activityTones = {
  violet: "bg-studio-violet-soft text-studio-violet",
  green: "bg-[#e9f8e1] text-[#2f6b1f]",
  amber: "bg-[#fff4d6] text-[#8a5a00]",
  blue: "bg-[#e7f0ff] text-[#1f4fa8]",
} as const;

export default function StudioOverviewPage() {
  const currentCampaigns = myCampaigns.filter((c) =>
    ["production", "submitted", "revision", "contract"].includes(c.status),
  );
  const pendingSteps = onboardingSteps.filter((s) => !s.done);

  return (
    <div className="space-y-6">
      {/* Salutation */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-studio-muted">
            Lundi 23 novembre 2026
          </p>
          <h1 className="mt-2 text-[28px] font-semibold tracking-[-0.035em] sm:text-[34px]">
            Bonjour, {studioProfile.firstName} 👋
          </h1>
          <p className="mt-1.5 text-[13.5px] text-studio-muted">
            Voici ce qui se passe dans ton espace aujourd&apos;hui.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <StudioButton href="/studio/discover">
            <Compass className="size-4" />
            Découvrir des campagnes
          </StudioButton>
          <StudioButton href="/studio/portfolio" variant="outline">
            Voir mon portfolio
          </StudioButton>
        </div>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard
          label="Revenus totaux"
          value={formatFcfa(earningsSummary.thisMonth)}
          unit="FCFA"
          delta="+18 % ce mois"
          icon={<Wallet className="size-4" />}
        />
        <StatCard
          label="Campagnes actives"
          value="08"
          unit="en cours"
          delta="+2 cette semaine"
          icon={<FolderKanban className="size-4" />}
          accent="lime"
        />
        <StatCard
          label="En attente"
          value="03"
          unit="à traiter"
          delta="2 contenus à valider"
          positive={false}
          icon={<Zap className="size-4" />}
          accent="amber"
        />
        <StatCard
          label="Reputation Score"
          value={String(studioProfile.reputation)}
          unit="/ 100"
          delta="Top 8 % des créateurs"
          icon={<Sparkles className="size-4" />}
          accent="ink"
        />
      </div>

      {/* Opportunités + profil */}
      <div className="grid gap-3 lg:grid-cols-[1.45fr_1fr]">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-studio-violet to-[#9d86ff] p-5 text-white shadow-[0_24px_60px_-30px_rgba(115,87,255,0.9)] sm:p-6">
          <div className="pointer-events-none absolute -right-10 -top-16 size-56 rounded-full bg-white/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 right-16 size-44 rounded-full bg-studio-lime/25 blur-2xl" />

          <div className="relative">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/70">
              Opportunités pour toi
            </p>
            <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.03em] sm:text-[28px]">
              12 nouvelles campagnes
            </h2>
            <p className="mt-1.5 max-w-md text-[12.5px] leading-relaxed text-white/75">
              Dont <span className="font-semibold text-white">5 correspondent à plus de 90 %</span>{" "}
              de ton profil. Nouvelles missions publiées cette semaine.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                { label: "Beauté", count: 4 },
                { label: "Mode", count: 3 },
                { label: "Tech", count: 2 },
                { label: "Food", count: 1 },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium backdrop-blur"
                >
                  {tag.label} · {tag.count}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <StudioButton href="/studio/discover" variant="secondary">
                Voir les opportunités
                <ArrowRight className="size-4" />
              </StudioButton>
              <span className="text-[11px] text-white/60">
                2 invitations privées en attente
              </span>
            </div>
          </div>
        </div>

        <SectionCard
          title="Profil créateur"
          subtitle={`Complété à ${studioProfile.completion} %`}
          action={
            <span className="rounded-full bg-studio-violet-soft px-2.5 py-1 text-[11px] font-semibold text-studio-violet">
              {studioProfile.completion} %
            </span>
          }
        >
          <Progress value={studioProfile.completion} />

          <ul className="mt-4 space-y-2">
            {onboardingSteps.slice(0, 4).map((step) => (
              <li key={step.label} className="flex items-center gap-2.5 text-[12px]">
                <span
                  className={cn(
                    "grid size-5 shrink-0 place-items-center rounded-full",
                    step.done
                      ? "bg-[#e9f8e1] text-[#2f6b1f]"
                      : "border border-dashed border-studio-border text-studio-muted",
                  )}
                >
                  {step.done ? (
                    <Check className="size-3" strokeWidth={3} />
                  ) : (
                    <span className="size-1.5 rounded-full bg-studio-muted/50" />
                  )}
                </span>
                <span className={cn(step.done ? "text-studio-ink/70" : "text-studio-ink")}>
                  {step.label}
                </span>
              </li>
            ))}
          </ul>

          {pendingSteps.length > 0 && (
            <p className="mt-3 text-[11px] text-studio-muted">
              {pendingSteps.length} étapes restantes pour apparaître dans plus de shortlists.
            </p>
          )}

          <StudioButton href="/studio/profile" variant="outline" className="mt-4 w-full">
            Compléter mon profil
            <ArrowRight className="size-3.5" />
          </StudioButton>
        </SectionCard>
      </div>

      {/* Campagnes */}
      <div>
        <div className="mb-3 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-[17px] font-semibold tracking-[-0.02em]">Mes campagnes</h2>
            <p className="mt-0.5 text-[12px] text-studio-muted">
              {currentCampaigns.length} collaborations en cours
            </p>
          </div>
          <Link
            href="/studio/campaigns"
            className="inline-flex items-center gap-1 text-[12px] font-medium text-studio-violet hover:underline"
          >
            Tout voir
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {currentCampaigns.slice(0, 3).map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>

      {/* Activité + paiement */}
      <div className="grid gap-3 lg:grid-cols-[1.45fr_1fr]">
        <SectionCard
          title="Activité récente"
          subtitle="Tout ce qui a bougé sur ton compte"
          bodyClassName="p-0 sm:p-0"
        >
          <ol className="divide-y divide-studio-border">
            {recentActivity.map((item) => {
              const Icon = activityIcons[item.icon];
              return (
                <li key={item.id} className="flex items-start gap-3 px-4 py-3.5 sm:px-5">
                  <span
                    className={cn(
                      "grid size-8 shrink-0 place-items-center rounded-lg",
                      activityTones[item.tone],
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12.5px] font-medium">{item.title}</p>
                    <p className="mt-0.5 text-[11.5px] leading-relaxed text-studio-muted">
                      {item.detail}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10.5px] text-studio-muted">{item.time}</span>
                </li>
              );
            })}
          </ol>
        </SectionCard>

        <SectionCard
          title="Prochain paiement"
          action={
            <Link
              href="/studio/earnings"
              className="text-[11.5px] font-medium text-studio-violet hover:underline"
            >
              Détails
            </Link>
          }
        >
          <p className="text-[11.5px] text-studio-muted">En attente de validation</p>
          <p className="mt-1 flex items-baseline gap-1.5">
            <span className="text-[28px] font-semibold tracking-[-0.03em]">
              {formatFcfa(earningsSummary.pending)}
            </span>
            <span className="text-[12px] text-studio-muted">FCFA</span>
          </p>

          <div className="mt-4 space-y-2.5">
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-studio-muted">Disponible</span>
              <span className="font-medium">{formatFcfa(earningsSummary.available)} FCFA</span>
            </div>
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-studio-muted">Revenus cumulés</span>
              <span className="font-medium">{formatFcfa(earningsSummary.total)} FCFA</span>
            </div>
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-studio-muted">Méthode</span>
              <span className="font-medium">Airtel Money</span>
            </div>
          </div>

          <StudioButton href="/studio/earnings" variant="dark" className="mt-4 w-full">
            <Wallet className="size-4" />
            Demander un retrait
          </StudioButton>

          <p className="mt-2.5 text-[10.5px] leading-relaxed text-studio-muted">
            Les fonds sont débloqués après validation du contenu par la marque.
          </p>
        </SectionCard>
      </div>

      {/* Lien rapide */}
      <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-dashed border-studio-border bg-studio-surface/60 px-5 py-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-studio-violet-soft text-studio-violet">
            <Sparkles className="size-4" />
          </span>
          <div>
            <p className="text-[12.5px] font-medium">Ton portfolio est visible</p>
            <p className="text-[11px] text-studio-muted">
              Partage-le sur WhatsApp pour attirer plus de marques.
            </p>
          </div>
        </div>
        <Link
          href="/studio/portfolio"
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-studio-violet hover:underline"
        >
          Voir ma page publique
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
