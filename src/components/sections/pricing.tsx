import { Check, Sparkles } from "lucide-react";
import { pricing } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function PricingSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section
      id="tarifs"
      className={cn(
        "scroll-mt-24 pb-20 md:pb-28",
        showHeading && "pt-20 md:pt-28",
      )}
    >
      <div className="shell">
        {showHeading && (
          <SectionHeading
            eyebrow="Tarifs"
            title={
              <>
                Un prix clair, en{" "}
                <em className="font-serif italic font-normal text-clay">
                  FCFA.
                </em>
              </>
            }
            description="Pas de frais cachés, pas de commission surprise sur les créateurs. Tu paies pour la plateforme, pas pour respirer."
          />
        )}

        <div
          className={cn(
            "grid items-stretch gap-4 lg:grid-cols-3",
            showHeading && "mt-12",
          )}
        >
          {pricing.map((plan) => {
            const isQuote = plan.price === "Sur devis";

            return (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-[26px] p-6 sm:p-7",
                  plan.highlight
                    ? "bg-ink text-cream shadow-lift lg:-my-2"
                    : "border border-line bg-[#fffdf9] shadow-soft",
                )}
              >
                {plan.highlight && (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink">
                    <Sparkles className="size-3" />
                    Le plus choisi
                  </span>
                )}

                <h3
                  className={cn(
                    "font-display text-[19px] font-semibold tracking-[-0.03em]",
                    plan.highlight && "text-cream",
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 max-w-[240px] text-[12.5px] leading-relaxed",
                    plan.highlight ? "text-cream/50" : "text-muted",
                  )}
                >
                  {plan.description}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span
                    className={cn(
                      "font-display font-semibold leading-none tracking-[-0.045em]",
                      isQuote ? "text-[30px]" : "text-[42px]",
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "pb-1 text-[11px]",
                      plan.highlight ? "text-cream/45" : "text-muted",
                    )}
                  >
                    {plan.period}
                  </span>
                </div>

                <Button
                  href={plan.name === "Scale" ? "/#contact" : "/inscription"}
                  variant={plan.highlight ? "light" : "outline"}
                  size="md"
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>

                <ul className="mt-7 space-y-3 border-t border-current/10 pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full",
                          plan.highlight
                            ? "bg-gold/20 text-gold"
                            : "bg-clay/10 text-clay",
                        )}
                      >
                        <Check className="size-2.5" strokeWidth={3.5} />
                      </span>
                      <span
                        className={cn(
                          "text-[12.5px] leading-snug",
                          plan.highlight ? "text-cream/75" : "text-ink/75",
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[12px] text-muted">
          Sans engagement · Facture locale · Paiement par Mobile Money, carte ou
          virement
        </p>
      </div>
    </section>
  );
}
