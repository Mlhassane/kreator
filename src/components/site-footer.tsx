import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.5 8.6H3.9V20h2.6V8.6ZM5.2 3.9a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1ZM20.1 20h-2.6v-5.9c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11s.1-9.9 0-11.4h2.6v1.6c.4-.6 1.1-1.5 2.7-1.5 2 0 3.8 1.3 3.8 4.2V20Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.6v4.8l4.2-2.4-4.2-2.4Z" fill="currentColor" />
    </svg>
  );
}

const columns = [
  {
    title: "Produit",
    links: [
      { label: "Pour les marques", href: "/marques" },
      { label: "Pour les créateurs", href: "/createurs" },
      { label: "Tarifs", href: "/tarifs" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Guide du creator marketing", href: "/#comment-ca-marche" },
      { label: "Études de cas", href: "/marques#cas" },
      { label: "Blog", href: "/#faq" },
      { label: "Centre d'aide", href: "/#faq" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/#mission" },
      { label: "Carrières", href: "/#mission" },
      { label: "Presse", href: "/#mission" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Conditions d'utilisation", href: "/#faq" },
      { label: "Confidentialité", href: "/#faq" },
      { label: "Cookies", href: "/#faq" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div
        className="pointer-events-none absolute -top-40 right-0 size-[520px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(217,80,43,0.9), transparent 65%)",
        }}
      />
      <div className="shell relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-[15px] leading-relaxed text-cream/60">
              L&apos;infrastructure du creator marketing en Afrique. Des marques
              qui trouvent leur voix, des créateurs qui vivent de leur talent.
            </p>

            <form className="mt-7 flex max-w-sm items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] p-1.5 pl-4">
              <label htmlFor="newsletter" className="sr-only">
                Adresse email
              </label>
              <input
                id="newsletter"
                type="email"
                placeholder="Ton email pro"
                className="min-w-0 flex-1 bg-transparent text-sm text-cream placeholder:text-cream/40 focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-cream px-4 text-[13px] font-semibold text-ink transition-colors hover:bg-gold"
              >
                S&apos;abonner
                <ArrowUpRight className="size-3.5" />
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: InstagramIcon, label: "Instagram" },
                { icon: LinkedinIcon, label: "LinkedIn" },
                { icon: YoutubeIcon, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-cream/40 hover:text-cream"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/40">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13.5px] text-cream/70 transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-cream/10 pt-8">
          <p className="font-display text-[13vw] leading-[0.8] font-semibold tracking-[-0.06em] text-cream/[0.07] md:text-[9rem]">
            kreator.
          </p>
          <div className="flex flex-col gap-3 text-[12.5px] text-cream/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Kreator. Tous droits réservés.</p>
            <p className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-gold" />
              For Brands. For Creators. Built for Africa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
