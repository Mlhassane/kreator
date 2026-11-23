import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  ExternalLink,
  MapPin,
  Play,
  Sparkles,
  Star,
} from "lucide-react";
import { formatFcfa, formatFollowers } from "@/lib/utils";
import { portfolioItems, studioProfile } from "@/lib/studio-data";
import { Avatar } from "@/components/ui/avatar";
import {
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";
import { SectionCard, Progress } from "@/components/studio/studio-ui";
import { StudioButton } from "@/components/studio/studio-shell";
import {
  CopyLink,
  SharePortfolioButton,
  VisibilityToggle,
} from "@/components/studio/portfolio-tools";

export const metadata: Metadata = { title: "Portfolio" };

const socials = [
  {
    name: "TikTok",
    value: studioProfile.socials.tiktok,
    icon: TikTokIcon,
    href: "https://tiktok.com",
  },
  {
    name: "Instagram",
    value: studioProfile.socials.instagram,
    icon: InstagramIcon,
    href: "https://instagram.com",
  },
  {
    name: "YouTube",
    value: studioProfile.socials.youtube,
    icon: YoutubeIcon,
    href: "https://youtube.com",
  },
];

export default function StudioPortfolioPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-studio-violet">
            Portfolio
          </p>
          <h1 className="mt-1.5 text-[26px] font-semibold tracking-[-0.03em] sm:text-[30px]">
            Ta vitrine professionnelle
          </h1>
          <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-studio-muted">
            Une page publique, pensée comme un CV de créateur. Partage-la sur WhatsApp
            ou en bio de tes réseaux.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StudioButton href={`/p/${studioProfile.slug}`} variant="outline">
            <ExternalLink className="size-4" />
            Voir ma page
          </StudioButton>
          <SharePortfolioButton slug={studioProfile.slug} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">
          {/* Aperçu profil */}
          <section className="studio-card overflow-hidden">
            <div className="relative h-28 bg-gradient-to-br from-studio-violet via-[#8f7bff] to-[#c5f36b]/70 sm:h-32">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:18px_18px]" />
            </div>
            <div className="px-4 pb-5 sm:px-5">
              <div className="-mt-9 flex items-end justify-between gap-3">
                <Avatar
                  name={studioProfile.name}
                  photo={studioProfile.avatar}
                  gradient="from-[#7357ff] to-[#a78bfa]"
                  className="size-20 border-4 border-studio-surface text-lg"
                />
                <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-[#e9f8e1] px-2.5 py-1 text-[10.5px] font-semibold text-[#2f6b1f]">
                  <BadgeCheck className="size-3.5" />
                  Profil vérifié
                </span>
              </div>

              <h2 className="mt-3 flex items-center gap-1.5 text-[19px] font-semibold tracking-[-0.02em]">
                {studioProfile.name}
                <BadgeCheck className="size-4 text-studio-violet" />
              </h2>
              <p className="mt-0.5 text-[12px] font-medium text-studio-violet">
                {studioProfile.title}
              </p>
              <p className="mt-1.5 flex items-center gap-1 text-[11.5px] text-studio-muted">
                <MapPin className="size-3.5" />
                {studioProfile.city}, {studioProfile.country}
              </p>
              <p className="mt-3 max-w-lg text-[12.5px] leading-relaxed text-studio-ink/75">
                « {studioProfile.bio} »
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {studioProfile.niches.map((niche) => (
                  <span
                    key={niche}
                    className="rounded-full bg-studio-violet-soft px-2.5 py-1 text-[10.5px] font-medium text-studio-violet"
                  >
                    {niche}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-studio-border pt-3.5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-studio-soft px-2.5 py-1.5 text-[11px] font-medium text-studio-ink/75 transition-colors hover:text-studio-ink"
                  >
                    <social.icon className="size-3.5" />
                    {social.name}
                    <span className="text-studio-muted">{formatFollowers(social.value)}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <SectionCard
            title="Mon portfolio"
            subtitle={`${portfolioItems.length} créations publiées`}
            action={
              <button className="text-[11.5px] font-medium text-studio-violet hover:underline">
                Ajouter
              </button>
            }
          >
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {portfolioItems.map((item) => (
                <button
                  key={item.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl text-left"
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br ${item.tone} transition-transform duration-500 group-hover:scale-105`}
                  />
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_60%)]" />
                  <span className="absolute right-2 top-2 rounded-md bg-white/80 px-1.5 py-0.5 text-[9px] font-semibold text-studio-ink/70 backdrop-blur">
                    {item.type}
                  </span>
                  <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="grid size-9 place-items-center rounded-full bg-white/90 text-studio-ink shadow">
                      <Play className="size-4 fill-current" />
                    </span>
                  </span>
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-2.5 pb-2 pt-6">
                    <span className="block text-[11px] font-semibold text-white">
                      {item.label}
                    </span>
                    <span className="block text-[9.5px] text-white/75">{item.brand}</span>
                  </span>
                </button>
              ))}
            </div>
          </SectionCard>

          {/* Services */}
          <SectionCard
            title="Services et tarifs"
            subtitle="Tarifs indicatifs, négociables selon le brief"
            action={
              <button className="text-[11.5px] font-medium text-studio-violet hover:underline">
                Modifier
              </button>
            }
            bodyClassName="p-0 sm:p-0"
          >
            <ul className="divide-y divide-studio-border">
              {studioProfile.services.map((service) => (
                <li
                  key={service.name}
                  className="flex items-center justify-between px-4 py-3 sm:px-5"
                >
                  <span className="flex items-center gap-2 text-[12.5px] font-medium">
                    <span className="grid size-7 place-items-center rounded-lg bg-studio-soft text-studio-muted">
                      <Star className="size-3.5" />
                    </span>
                    {service.name}
                  </span>
                  <span className="text-[12px] text-studio-muted">
                    {service.note}{" "}
                    <span className="font-semibold text-studio-ink">
                      {formatFcfa(service.price)} FCFA
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        {/* Colonne latérale */}
        <div className="space-y-4">
          <SectionCard title="Visibilité de la page">
            <div className="divide-y divide-studio-border">
              <VisibilityToggle
                label="Page publique"
                description="Visible par tous via ton lien Kreator."
              />
              <VisibilityToggle
                label="Afficher mes tarifs"
                description="Désactive pour négocier au cas par cas."
              />
              <VisibilityToggle
                label="Indexation Google"
                description="Autoriser les moteurs de recherche à référencer ta page."
                defaultOn={false}
              />
            </div>
          </SectionCard>

          <SectionCard title="Lien de partage">
            <CopyLink slug={studioProfile.slug} />
            <p className="mt-2.5 text-[10.5px] leading-relaxed text-studio-muted">
              Ce lien est permanent. Ajoute-le en bio TikTok ou Instagram pour convertir
              tes abonnés en clients.
            </p>
          </SectionCard>

          <SectionCard title="Complétude">
            <div className="flex items-baseline justify-between">
              <span className="text-[12px] text-studio-muted">Portfolio</span>
              <span className="text-[14px] font-semibold">92 %</span>
            </div>
            <Progress value={92} className="mt-2" />
            <ul className="mt-3 space-y-2 text-[11.5px] text-studio-muted">
              <li className="flex items-center gap-2">
                <Sparkles className="size-3.5 text-studio-violet" />
                Ajoute 2 créations pour atteindre 100 %.
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="size-3.5 text-studio-violet" />
                Les profils complets reçoivent 3× plus d&apos;invitations.
              </li>
            </ul>
            <Link
              href="/studio/profile"
              className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-medium text-studio-violet hover:underline"
            >
              Compléter mon profil
              <ArrowUpRight className="size-3.5" />
            </Link>
          </SectionCard>

          <div className="rounded-2xl bg-studio-ink p-4 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Reputation Score
            </p>
            <p className="mt-1.5 flex items-baseline gap-1">
              <span className="text-[28px] font-semibold leading-none">
                {studioProfile.reputation}
              </span>
              <span className="text-[11px] text-white/60">/ 100</span>
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-white/70">
              Basé sur la qualité des livrables, les délais et la satisfaction des marques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
