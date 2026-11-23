import type { Metadata } from "next";
import {
  BadgeCheck,
  BarChart3,
  Eye,
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { analyticsData, studioProfile } from "@/lib/studio-data";
import { formatFollowers, formatFcfa } from "@/lib/utils";
import { Progress, SectionCard, StatCard } from "@/components/studio/studio-ui";
import { StudioButton } from "@/components/studio/studio-shell";
import {
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";

export const metadata: Metadata = { title: "Analytics" };

function FollowersChart() {
  const values = analyticsData.followers.map((f) => f.value);
  const min = Math.min(...values) - 4;
  const max = Math.max(...values) + 4;
  const W = 600;
  const H = 180;
  const pad = 14;

  const points = values.map((value, index) => {
    const x = pad + (index * (W - pad * 2)) / (values.length - 1);
    const y = H - pad - ((value - min) / (max - min)) * (H - pad * 2);
    return [x, y] as const;
  });

  const line = points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L ${points[points.length - 1][0].toFixed(1)} ${H - pad} L ${points[0][0].toFixed(1)} ${H - pad} Z`;
  const last = points[points.length - 1];

  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-44 w-full"
        role="img"
        aria-label="Évolution des abonnés sur six mois"
      >
        <defs>
          <linearGradient id="followersFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d9502b" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#d9502b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75].map((ratio) => (
          <line
            key={ratio}
            x1={pad}
            x2={W - pad}
            y1={pad + ratio * (H - pad * 2)}
            y2={pad + ratio * (H - pad * 2)}
            stroke="#e3d7c6"
            strokeWidth="1"
            strokeDasharray="4 5"
          />
        ))}

        <path d={area} fill="url(#followersFill)" />
        <path
          d={line}
          fill="none"
          stroke="#d9502b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map(([x, y], index) => (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={index === points.length - 1 ? 4.5 : 3}
            fill="#fffdf9"
            stroke="#d9502b"
            strokeWidth="2"
          />
        ))}

        <circle cx={last[0]} cy={last[1]} r="9" fill="#d9502b" opacity="0.12" />
      </svg>

      <div className="mt-1 flex justify-between px-1">
        {analyticsData.followers.map((point) => (
          <span key={point.month} className="text-[10px] text-studio-muted">
            {point.month}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function StudioAnalyticsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-studio-accent">
            Analytics
          </p>
          <h1 className="mt-1.5 text-[26px] font-semibold tracking-[-0.03em] sm:text-[30px]">
            Comprends ta valeur
          </h1>
          <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-studio-muted">
            Au-delà des abonnés : les indicateurs qui comptent vraiment pour les marques.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 self-start rounded-xl border border-studio-border bg-studio-surface px-3 py-2 text-[11.5px] text-studio-muted">
          <ShieldCheck className="size-4 text-studio-success" />
          Données mises à jour il y a 2 h
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard
          label="Abonnés totaux"
          value={formatFollowers(190_000)}
          delta="+3,2 % ce mois"
          icon={<Users className="size-4" />}
        />
        <StatCard
          label="Taux d'engagement"
          value="6,8 %"
          delta="+0,4 pt"
          icon={<TrendingUp className="size-4" />}
          accent="highlight"
        />
        <StatCard
          label="Vues moyennes"
          value="42K"
          unit="par contenu"
          delta="+12 % vs octobre"
          icon={<Eye className="size-4" />}
          accent="warning"
        />
        <StatCard
          label="Collaborations"
          value="24"
          unit="réalisées"
          delta="+3 cette année"
          icon={<BarChart3 className="size-4" />}
          accent="ink"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <SectionCard
          title="Évolution des abonnés"
          subtitle="6 derniers mois · toutes plateformes"
          action={
            <span className="inline-flex items-center gap-1 rounded-full bg-studio-success-soft px-2.5 py-1 text-[10.5px] font-semibold text-studio-success">
              <BadgeCheck className="size-3.5" />
              Vérifié
            </span>
          }
        >
          <FollowersChart />
          <div className="mt-3 flex items-center gap-4 border-t border-studio-border pt-3 text-[11px] text-studio-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-studio-accent" />
              120K abonnés cumulés
            </span>
            <span>+24K sur 6 mois</span>
          </div>
        </SectionCard>

        <SectionCard title="Répartition par plateforme" subtitle="Audience cumulée">
          <ul className="space-y-3.5">
            {analyticsData.platforms.map((platform) => (
              <li key={platform.name}>
                <div className="flex items-center justify-between text-[12px]">
                  <span className="font-medium">{platform.name}</span>
                  <span className="text-studio-muted">
                    {formatFollowers(platform.value)} · {platform.share} %
                  </span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-studio-soft">
                  <div
                    className={`h-full rounded-full ${platform.tone}`}
                    style={{ width: `${platform.share}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-xl bg-studio-bg p-3">
            <p className="text-[11px] font-medium">Connecter tes comptes</p>
            <p className="mt-0.5 text-[10.5px] leading-relaxed text-studio-muted">
              Les intégrations officielles arrivent bientôt. En attendant, tes stats
              déclarées sont marquées comme telles.
            </p>
            <div className="mt-2.5 flex gap-1.5">
              {[TikTokIcon, InstagramIcon, YoutubeIcon].map((Icon, index) => (
                <span
                  key={index}
                  className="grid size-8 place-items-center rounded-lg bg-studio-surface text-studio-muted opacity-60"
                  title="Bientôt disponible"
                >
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1.6fr]">
        <SectionCard title="Audience géographique" subtitle="Top pays">
          <ul className="space-y-3">
            {analyticsData.geography.map((item) => (
              <li key={item.country}>
                <div className="flex items-center justify-between text-[12px]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Globe className="size-3.5 text-studio-muted" />
                    {item.country}
                  </span>
                  <span className="text-studio-muted">{item.share} %</span>
                </div>
                <Progress value={item.share} className="mt-1.5" />
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard
          title="Performance des campagnes"
          subtitle="Résultats des dernières collaborations"
          bodyClassName="p-0 sm:p-0"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left">
              <thead>
                <tr className="border-b border-studio-border text-[10.5px] uppercase tracking-[0.08em] text-studio-muted">
                  <th className="px-4 py-2.5 font-medium sm:px-5">Campagne</th>
                  <th className="px-3 py-2.5 font-medium">Vues</th>
                  <th className="px-3 py-2.5 font-medium">Engagement</th>
                  <th className="px-3 py-2.5 font-medium">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-studio-border">
                {analyticsData.campaignPerformance.map((row) => (
                  <tr key={row.campaign} className="text-[12px]">
                    <td className="px-4 py-3 sm:px-5">
                      <p className="font-medium">{row.campaign}</p>
                      <p className="mt-0.5 text-[10.5px] text-studio-muted">{row.brand}</p>
                    </td>
                    <td className="px-3 py-3 font-medium">{row.views}</td>
                    <td className="px-3 py-3 font-medium">{row.engagement}</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-studio-soft px-2 py-0.5 text-[10.5px] font-medium capitalize text-studio-ink/70">
                        {row.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="studio-card flex items-start gap-3 p-4">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-studio-success-soft text-studio-success">
            <BadgeCheck className="size-4" />
          </span>
          <div>
            <p className="text-[12.5px] font-semibold">Données vérifiées</p>
            <p className="mt-0.5 text-[11.5px] leading-relaxed text-studio-muted">
              Marquées d&apos;un badge, elles proviennent d&apos;intégrations officielles
              ou d&apos;une validation manuelle par Kreator.
            </p>
          </div>
        </div>
        <div className="studio-card flex items-start gap-3 p-4">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-studio-soft text-studio-muted">
            <ShieldCheck className="size-4" />
          </span>
          <div>
            <p className="text-[12.5px] font-semibold">Données déclarées</p>
            <p className="mt-0.5 text-[11.5px] leading-relaxed text-studio-muted">
              Renseignées par toi. Elles ne sont pas comptées dans ton Reputation Score
              tant qu&apos;elles ne sont pas vérifiées.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 rounded-2xl bg-studio-ink px-5 py-4 text-white sm:flex-row sm:items-center">
        <div>
          <p className="text-[12.5px] font-semibold">
            Ton profil vaut {formatFcfa(studioProfile.reputation * 1000)} FCFA de valeur perçue
          </p>
          <p className="mt-0.5 text-[11px] text-white/65">
            Score de réputation {studioProfile.reputation}/100 · top 8 % à Niamey.
          </p>
        </div>
        <StudioButton href="/studio/portfolio" variant="secondary" size="sm">
          Voir mon portfolio
        </StudioButton>
      </div>
    </div>
  );
}
