import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { steps } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="scroll-mt-24 bg-cream-2/50 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Comment ça marche"
          title={
            <>
              De l&apos;idée à la campagne live en{" "}
              <em className="font-serif italic font-normal text-clay">
                7 jours.
              </em>
            </>
          }
          description="Un flux simple, pensé pour aller vite. Sans agence intermédiaire, sans tableur, sans relance."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-[26px] hidden border-t border-dashed border-ink/15 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="relative z-10 grid size-13 place-items-center rounded-full border border-line bg-cream font-display text-[15px] font-semibold text-clay shadow-soft">
                      {step.number}
                    </span>
                    <span className="h-px flex-1 bg-ink/10 lg:hidden" />
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.025em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[260px] text-[13.5px] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-[#fffdf9] px-6 py-5 sm:flex-row">
          <p className="text-[14px] text-muted">
            <span className="font-semibold text-ink">Prêt à briefer ?</span> Un
            brief prend 5 minutes, la shortlist arrive en 48 h.
          </p>
          <Link
            href="/inscription"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-clay transition-colors hover:text-clay-dark"
          >
            Créer ma première campagne
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
