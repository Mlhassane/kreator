import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  ExternalLink,
  MapPin,
  MessageCircle,
  Play,
  Star,
} from "lucide-react";
import { creators } from "@/lib/data";
import { portfolioItems, studioProfile } from "@/lib/studio-data";
import { formatFcfa, formatFollowers } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import {
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";
import { StudioLogo } from "@/components/studio/studio-logo";

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

// Cette page dépend de `params` : on autorise le rendu bloquant.
export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const creator = creators.find((c) => c.slug === slug);
  if (!creator) return { title: "Portfolio" };
  return {
    title: `${creator.name} — Portfolio`,
    description: `${creator.name}, créateur${creator.name.endsWith("a") ? "rice" : ""} ${creator.niche} basé${creator.name.endsWith("a") ? "e" : ""} à ${creator.city}. Découvre son portfolio et collabore via Kreator.`,
  };
}

export default async function PublicPortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const creator = creators.find((c) => c.slug === slug);
  if (!creator) notFound();

  const bio =
    creator.slug === studioProfile.slug
      ? studioProfile.bio
      : "Je crée des contenus authentiques qui aident les marques africaines à raconter leur histoire.";

  const services =
    creator.slug === studioProfile.slug
      ? studioProfile.services
      : [
          { name: "Vidéo UGC", price: creator.price, note: "à partir de" },
          { name: "Product Review", price: creator.price + 10_000, note: "à partir de" },
          { name: "Unboxing", price: creator.price - 5_000, note: "à partir de" },
        ];

  const socials = [
    { name: "TikTok", value: creator.socials.tiktok, icon: TikTokIcon, href: "https://tiktok.com" },
    { name: "Instagram", value: creator.socials.instagram, icon: InstagramIcon, href: "https://instagram.com" },
    { name: "YouTube", value: creator.socials.youtube, icon: YoutubeIcon, href: "https://youtube.com" },
  ];

  return (
    <div className="studio min-h-dvh bg-studio-bg">
      <header className="border-b border-studio-border bg-studio-surface">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-4 sm:px-6">
          <StudioLogo />
          <Link
            href="/inscription"
            className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-studio-accent px-3.5 text-[12px] font-medium text-white transition-colors hover:bg-studio-accent-dark"
          >
            Créer mon portfolio
            <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-6 sm:px-6">
        {/* Profil */}
        <section className="studio-card overflow-hidden">
          <div className="relative h-32 bg-gradient-to-br from-studio-accent via-[#e07a4f] to-[#efa92f]/70 sm:h-40">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:18px_18px]" />
          </div>
          <div className="px-4 pb-6 sm:px-6">
            <div className="-mt-11 flex flex-wrap items-end justify-between gap-3">
              <Avatar
                name={creator.name}
                photo={creator.photo}
                gradient={creator.gradient}
                className="size-24 border-4 border-studio-surface text-xl"
              />
              <div className="mb-1 flex flex-wrap gap-2">
                <Link
                  href="/inscription"
                  className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-studio-accent px-4 text-[12.5px] font-medium text-white transition-colors hover:bg-studio-accent-dark"
                >
                  <MessageCircle className="size-4" />
                  Collaborer avec {creator.name.split(" ")[0]}
                </Link>
                <Link
                  href="/connexion"
                  className="inline-flex h-10 items-center rounded-xl border border-studio-border bg-studio-surface px-4 text-[12.5px] font-medium text-studio-ink transition-colors hover:border-studio-accent/40 hover:text-studio-accent"
                >
                  Contacter
                </Link>
              </div>
            </div>

            <h1 className="mt-4 flex items-center gap-2 text-[24px] font-semibold tracking-[-0.03em] sm:text-[28px]">
              {creator.name}
              {creator.verified && <BadgeCheck className="size-5 text-studio-accent" />}
            </h1>
            <p className="mt-1 text-[12.5px] font-medium text-studio-accent">
              {creator.niche} Creator · {creator.tags.slice(0, 2).join(" · ")}
            </p>
            <p className="mt-1.5 flex items-center gap-1 text-[12px] text-studio-muted">
              <MapPin className="size-3.5" />
              {creator.city}, {creator.country} {creator.flag}
            </p>
            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-studio-ink/75">
              « {bio} »
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {creator.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-studio-accent-soft px-2.5 py-1 text-[10.5px] font-medium text-studio-accent"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-studio-border pt-4">
              {[
                { label: "Abonnés", value: formatFollowers(creator.followers) },
                { label: "Engagement", value: `${creator.engagement} %` },
                { label: "Collaborations", value: "24" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[17px] font-semibold tracking-[-0.02em]">{stat.value}</p>
                  <p className="mt-0.5 text-[10.5px] text-studio-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="mt-4 studio-card p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-semibold">Mon portfolio</h2>
            <span className="text-[11px] text-studio-muted">
              {portfolioItems.length} créations
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl"
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
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mt-4 studio-card p-4 sm:p-5">
          <h2 className="text-[15px] font-semibold">Services et tarifs</h2>
          <ul className="mt-3 divide-y divide-studio-border">
            {services.map((service) => (
              <li
                key={service.name}
                className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
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
          <p className="mt-3 text-[10.5px] text-studio-muted">
            Tarifs indicatifs — chaque brief est étudié au cas par cas.
          </p>
        </section>

        {/* Réseaux */}
        <section className="mt-4 studio-card p-4 sm:p-5">
          <h2 className="text-[15px] font-semibold">Réseaux sociaux</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-studio-border bg-studio-bg px-3 py-2 text-[12px] font-medium text-studio-ink/80 transition-colors hover:border-studio-accent/40 hover:text-studio-accent"
              >
                <social.icon className="size-4" />
                {social.name}
                <span className="text-studio-muted">{formatFollowers(social.value)}</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-8 flex flex-col items-center gap-2 border-t border-studio-border pt-6 text-center">
          <StudioLogo />
          <p className="text-[11px] text-studio-muted">
            Portfolio propulsé par Kreator — la plateforme panafricaine des créateurs.
          </p>
        </footer>
      </main>
    </div>
  );
}
