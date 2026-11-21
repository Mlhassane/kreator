"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/70 bg-cream/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="Kreator — accueil">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-ink/65 transition-colors hover:bg-ink/[0.05] hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <Button variant="ghost" size="sm" href="/connexion">
            Connexion
          </Button>
          <Button size="sm" href="/inscription">
            Lancer une campagne
            <ArrowUpRight className="size-3.5" />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-full border border-ink/10 text-ink lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-line/70 bg-cream transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="shell flex flex-col gap-1 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink/80 hover:bg-ink/[0.05]"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-2">
            <Button href="/connexion" variant="outline" size="md">
              Connexion
            </Button>
            <Button href="/inscription" size="md">
              Lancer une campagne
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
