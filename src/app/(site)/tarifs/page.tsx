import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingSection } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Des tarifs clairs en FCFA, sans frais cachés. Découvre les plans Kreator pour les marques, agences et créateurs.",
};

const included = [
  "Créateurs vérifiés manuellement",
  "Paiements sécurisés",
  "Support en français et en anglais",
  "Facturation locale",
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-4 pt-12 md:pt-20">
        <div
          className="pointer-events-none absolute left-1/2 top-0 size-[440px] -translate-x-1/2 rounded-full opacity-25 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(239,169,47,0.8), transparent 65%)",
          }}
        />
        <div className="shell relative text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-current opacity-60" />
            Tarifs
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-[40px] leading-[0.98] font-semibold tracking-[-0.045em] sm:text-[56px]">
            Tu paies pour la plateforme.{" "}
            <em className="font-serif font-normal italic text-clay">
              Pas pour respirer.
            </em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[15.5px] leading-relaxed text-muted">
            Des prix lisibles, en FCFA, sans commission cachée sur les
            créateurs. Change ou arrête quand tu veux.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {included.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 text-[12px] text-muted"
              >
                <Check className="size-3.5 text-forest" strokeWidth={3} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="pb-20 md:pb-24">
        <div className="shell">
          <div className="grid gap-6 rounded-[28px] border border-line bg-[#fffdf9] p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-[24px] font-semibold tracking-[-0.035em] sm:text-[28px]">
                Tu es créateur ?
              </h2>
              <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-muted">
                L&apos;accès à Kreator est 100 % gratuit pour les créateurs. Pas
                d&apos;abonnement, pas de commission sur tes cachets — seulement
                des campagnes qui te correspondent.
              </p>
            </div>
            <Button href="/inscription" size="lg" variant="dark">
              Créer mon profil
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      <Faq />
      <FinalCta />
    </>
  );
}
