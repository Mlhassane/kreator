import Link from "next/link";
import { ArrowLeft, Check, Star } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
      <aside className="relative hidden overflow-hidden bg-forest p-10 text-cream lg:flex lg:flex-col lg:justify-between">
        <div
          className="pointer-events-none absolute -left-24 top-1/3 size-[420px] rounded-full opacity-30 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(239,169,47,0.8), transparent 65%)",
          }}
        />
        <div className="relative">
          <Link href="/" aria-label="Kreator — accueil">
            <Logo tone="light" />
          </Link>
        </div>

        <div className="relative max-w-md">
          <div className="flex items-center gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-3.5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-5 text-balance font-display text-[28px] leading-[1.12] font-medium tracking-[-0.03em] sm:text-[32px]">
            « On a lancé une campagne UGC sur trois marchés en dix jours. Avant
            Kreator, il nous fallait un mois. »
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-[#D9502B] to-[#7A2A14] font-display text-[12px] font-semibold text-white">
              AS
            </span>
            <div>
              <p className="text-[13px] font-semibold">Aminata Sow</p>
              <p className="text-[11.5px] text-cream/50">Head of Brand, Wave</p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-wrap gap-x-8 gap-y-4 border-t border-cream/10 pt-6">
          {[
            { value: "2 400+", label: "créateurs" },
            { value: "18", label: "pays" },
            { value: "4 200", label: "campagnes" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-[22px] font-semibold tracking-[-0.03em]">
                {stat.value}
              </p>
              <p className="text-[11px] text-cream/45">{stat.label}</p>
            </div>
          ))}
        </div>
      </aside>

      <div className="relative flex flex-col bg-cream">
        <div className="flex items-center justify-between p-5 sm:p-7">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-3.5" />
            Retour au site
          </Link>
          <Link href="/" className="lg:hidden">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center px-5 pb-12 sm:px-8">
          {children}
        </div>
        <div className="hidden items-center justify-center gap-2 pb-6 text-[11px] text-muted sm:flex">
          <Check className="size-3 text-forest" strokeWidth={3} />
          Données chiffrées · Hébergement conforme · Paiements sécurisés
        </div>
      </div>
    </div>
  );
}
