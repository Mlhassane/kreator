"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  BarChart3,
  Bell,
  ChevronDown,
  ChevronRight,
  Compass,
  FolderKanban,
  Images,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { studioProfile } from "@/lib/studio-data";
import { Avatar } from "@/components/ui/avatar";
import { StudioLogo } from "@/components/studio/studio-logo";

const nav = [
  { label: "Overview", href: "/studio", icon: LayoutDashboard },
  { label: "Discover", href: "/studio/discover", icon: Compass },
  { label: "My Campaigns", href: "/studio/campaigns", icon: FolderKanban, badge: "8" },
  { label: "Portfolio", href: "/studio/portfolio", icon: Images },
  { label: "Analytics", href: "/studio/analytics", icon: BarChart3 },
  { label: "Earnings", href: "/studio/earnings", icon: Wallet },
  { label: "Messages", href: "/studio/messages", icon: MessageSquare, badge: "3" },
  { label: "Profile", href: "/studio/profile", icon: UserRound },
];

const mobileNav = [
  { label: "Accueil", href: "/studio", icon: LayoutDashboard },
  { label: "Découvrir", href: "/studio/discover", icon: Compass },
  { label: "Campagnes", href: "/studio/campaigns", icon: FolderKanban },
  { label: "Revenus", href: "/studio/earnings", icon: Wallet },
  { label: "Messages", href: "/studio/messages", icon: MessageSquare },
];

const pageTitles: Record<string, string> = {
  "/studio": "Overview",
  "/studio/discover": "Discover",
  "/studio/campaigns": "My Campaigns",
  "/studio/portfolio": "Portfolio",
  "/studio/analytics": "Analytics",
  "/studio/earnings": "Earnings",
  "/studio/messages": "Messages",
  "/studio/profile": "Profile",
};

function useActive() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/studio" ? pathname === "/studio" : pathname.startsWith(href);
  return { pathname, isActive };
}

export function StudioShell({ children }: { children: ReactNode }) {
  const { pathname, isActive } = useActive();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const title =
    pageTitles[pathname] ??
    (pathname.startsWith("/studio/campaigns") ? "My Campaigns" : "Studio");

  return (
    <div className="studio min-h-dvh bg-studio-bg text-studio-ink">
      {/* ── Sidebar desktop ─────────────────────────────── */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[268px] flex-col border-r border-studio-border bg-studio-surface lg:flex">
        <div className="flex h-[76px] items-center px-6">
          <StudioLogo />
        </div>

        <div className="px-4">
          <button className="flex w-full items-center gap-3 rounded-xl border border-studio-border bg-studio-bg px-3 py-2.5 text-left transition-colors hover:border-studio-accent/30">
            <Avatar
              name={studioProfile.name}
              photo={studioProfile.avatar}
              gradient="from-[#d9502b] to-[#efa92f]"
              className="size-9 text-[11px]"
            />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-semibold">
                {studioProfile.name}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-studio-muted">
                <ShieldCheck className="size-3 text-studio-accent" />
                Créatrice vérifiée
              </span>
            </span>
            <ChevronDown className="size-4 shrink-0 text-studio-muted" />
          </button>
        </div>

        <nav className="mt-6 flex-1 overflow-y-auto px-3">
          <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-studio-muted">
            Espace de travail
          </p>
          <ul className="space-y-0.5">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13.5px] font-medium transition-colors",
                      active
                        ? "bg-studio-accent-soft text-studio-accent"
                        : "text-studio-ink/70 hover:bg-studio-soft hover:text-studio-ink",
                    )}
                  >
                    <item.icon
                      className={cn(
                        "size-[18px] shrink-0",
                        active ? "text-studio-accent" : "text-studio-muted group-hover:text-studio-ink/70",
                      )}
                      strokeWidth={active ? 2.2 : 1.9}
                    />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span
                        className={cn(
                          "grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-[10px] font-semibold",
                          active
                            ? "bg-studio-accent text-white"
                            : "bg-studio-soft text-studio-muted",
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-3">
          <div className="rounded-2xl bg-gradient-to-br from-studio-accent to-[#e07a4f] p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-white/80">
                Reputation Score
              </span>
              <Sparkles className="size-4 text-studio-highlight" />
            </div>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="text-[26px] font-semibold leading-none">
                {studioProfile.reputation}
              </span>
              <span className="text-[11px] text-white/70">/ 100</span>
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/25">
              <div
                className="h-full rounded-full bg-studio-highlight"
                style={{ width: `${studioProfile.reputation}%` }}
              />
            </div>
            <p className="mt-2 text-[10.5px] leading-snug text-white/70">
              Top 8 % des créateurs de ta ville.
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between px-1">
            <Link
              href="/studio/profile"
              className="flex items-center gap-2 text-[11.5px] text-studio-muted transition-colors hover:text-studio-ink"
            >
              <Settings2 className="size-3.5" />
              Paramètres
            </Link>
            <Link
              href="/connexion"
              className="flex items-center gap-2 text-[11.5px] text-studio-muted transition-colors hover:text-studio-ink"
            >
              <LogOut className="size-3.5" />
              Quitter
            </Link>
          </div>
        </div>
      </aside>

      {/* ── Zone principale ─────────────────────────────── */}
      <div className="lg:pl-[268px]">
        {/* Topbar desktop */}
        <header className="sticky top-0 z-30 hidden h-[76px] items-center gap-4 border-b border-studio-border bg-studio-bg/85 px-8 backdrop-blur-xl lg:flex">
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-studio-muted">Kreator Studio</span>
            <ChevronRight className="size-3.5 text-studio-muted/60" />
            <span className="font-medium text-studio-ink">{title}</span>
          </div>

          <div className="ml-auto flex items-center gap-2.5">
            <Link
              href="/studio/discover"
              className="flex h-10 w-[280px] items-center gap-2.5 rounded-xl border border-studio-border bg-studio-surface px-3.5 text-[13px] text-studio-muted transition-colors hover:border-studio-accent/30"
            >
              <Search className="size-4" />
              Rechercher une campagne…
              <kbd className="ml-auto rounded-md border border-studio-border bg-studio-bg px-1.5 py-0.5 text-[10px] font-medium text-studio-muted">
                ⌘K
              </kbd>
            </Link>

            <button
              aria-label="Notifications"
              className="relative grid size-10 place-items-center rounded-xl border border-studio-border bg-studio-surface text-studio-ink/70 transition-colors hover:text-studio-ink"
            >
              <Bell className="size-[18px]" />
              <span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-studio-accent ring-2 ring-studio-surface" />
            </button>

            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 rounded-xl border border-studio-border bg-studio-surface p-1 pr-2 transition-colors hover:border-studio-accent/30"
                aria-expanded={menuOpen}
                aria-label="Menu du compte"
              >
                <Avatar
                  name={studioProfile.name}
                  photo={studioProfile.avatar}
                  gradient="from-[#d9502b] to-[#efa92f]"
                  className="size-8 text-[10px]"
                />
                <ChevronDown className="size-3.5 text-studio-muted" />
              </button>

              {menuOpen && (
                <>
                  <button
                    aria-label="Fermer le menu"
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-2xl border border-studio-border bg-studio-surface p-1.5 shadow-studio-pop">
                    <div className="px-3 py-2">
                      <p className="text-[13px] font-semibold">{studioProfile.name}</p>
                      <p className="text-[11px] text-studio-muted">{studioProfile.handle}</p>
                    </div>
                    <div className="my-1 h-px bg-studio-border" />
                    {[
                      { label: "Portfolio", href: "/studio/portfolio", icon: Images },
                      { label: "Analytics", href: "/studio/analytics", icon: BarChart3 },
                      { label: "Profil", href: "/studio/profile", icon: UserRound },
                      { label: "Paramètres", href: "/studio/profile", icon: Settings2 },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12.5px] text-studio-ink/80 transition-colors hover:bg-studio-soft"
                      >
                        <item.icon className="size-4 text-studio-muted" />
                        {item.label}
                      </Link>
                    ))}
                    <div className="my-1 h-px bg-studio-border" />
                    <Link
                      href="/connexion"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12.5px] text-studio-ink/80 transition-colors hover:bg-studio-soft"
                    >
                      <LogOut className="size-4 text-studio-muted" />
                      Se déconnecter
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Topbar mobile */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-studio-border bg-studio-bg/90 px-4 backdrop-blur-xl lg:hidden">
          <StudioLogo />
          <div className="ml-auto flex items-center gap-2">
            <button
              aria-label="Notifications"
              className="relative grid size-9 place-items-center rounded-lg border border-studio-border bg-studio-surface text-studio-ink/70"
            >
              <Bell className="size-4" />
              <span className="absolute right-2 top-2 size-1.5 rounded-full bg-studio-accent" />
            </button>
            <Link href="/studio/profile" aria-label="Profil">
              <Avatar
                name={studioProfile.name}
                photo={studioProfile.avatar}
                gradient="from-[#d9502b] to-[#efa92f]"
                className="size-9 text-[10px]"
              />
            </Link>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1240px] px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-12 lg:pt-8">
          {children}
        </main>
      </div>

      {/* ── Navigation mobile ───────────────────────────── */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-studio-border bg-studio-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
        <ul className="mx-auto flex max-w-md items-stretch justify-between px-1">
          {mobileNav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors",
                    active ? "text-studio-accent" : "text-studio-muted",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-8 place-items-center rounded-lg transition-colors",
                      active && "bg-studio-accent-soft",
                    )}
                  >
                    <item.icon className="size-[18px]" strokeWidth={active ? 2.2 : 1.9} />
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export function StudioPageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-studio-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="text-[26px] font-semibold tracking-[-0.03em] sm:text-[30px]">
          {title}
        </h1>
        {description && (
          <p className="mt-1.5 max-w-xl text-[13.5px] leading-relaxed text-studio-muted">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}

export function StudioButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const variants = {
    primary:
      "bg-studio-accent text-white hover:bg-studio-accent-dark shadow-[0_10px_24px_-12px_rgba(217,80,43,0.9)]",
    secondary: "bg-studio-highlight text-studio-ink hover:bg-[#f0b84a]",
    outline:
      "border border-studio-border bg-studio-surface text-studio-ink hover:border-studio-accent/40 hover:text-studio-accent",
    ghost: "text-studio-ink/70 hover:bg-studio-soft hover:text-studio-ink",
    dark: "bg-studio-ink text-white hover:bg-[#2a2a2a]",
  } as const;

  const sizes = {
    sm: "h-9 px-3.5 text-[12.5px] gap-1.5",
    md: "h-10 px-4 text-[13px] gap-2",
  } as const;

  const classes = cn(
    "inline-flex select-none items-center justify-center rounded-xl font-medium transition-all duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
