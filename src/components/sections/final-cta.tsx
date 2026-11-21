import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-24 pb-20 md:pb-28">
      <div className="shell">
        <div className="grain relative overflow-hidden rounded-[32px] bg-clay px-6 py-14 text-center text-white sm:px-10 md:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -bottom-32 -right-16 size-96 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <span className="pointer-events-none absolute -bottom-10 right-4 select-none font-display text-[180px] font-semibold leading-none text-white/[0.07] sm:text-[240px]">
            k
          </span>

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] backdrop-blur">
              <span className="size-1.5 rounded-full bg-gold" />
              Built for Africa
            </span>
            <h2 className="mt-5 text-balance text-[34px] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-[50px]">
              Prêt à créer ta prochaine{" "}
              <em className="font-serif italic font-normal">campagne ?</em>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-[14.5px] leading-relaxed text-white/75 sm:text-[15.5px]">
              Rejoins les marques et les créateurs qui construisent le creator
              marketing africain de demain.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/inscription" variant="light" size="lg">
                Lancer une campagne
                <ArrowRight className="size-4" />
              </Button>
              <Button
                href="/createurs"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-white/60 hover:bg-white/10"
              >
                Devenir créateur
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
            <p className="mt-5 text-[11.5px] text-white/55">
              Sans engagement · Réponse en 24 h · 18 pays couverts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
