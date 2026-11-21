"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 pb-20 md:pb-28">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="eyebrow">
            <span className="h-px w-6 bg-current opacity-60" />
            Questions
          </span>
          <h2 className="mt-4 text-balance text-[32px] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-[42px]">
            Tout ce que tu te{" "}
            <em className="font-serif italic font-normal text-clay">
              demandes.
            </em>
          </h2>
          <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-muted">
            Une question qui n&apos;est pas là ? Écris-nous, une vraie personne
            te répond sous 24 h.
          </p>

          <div className="mt-7 rounded-2xl border border-line bg-[#fffdf9] p-5">
            <p className="text-[13px] font-semibold">Parler à l&apos;équipe</p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
              hello@kreator.africa
            </p>
            <a
              href="mailto:hello@kreator.africa"
              className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-clay hover:text-clay-dark"
            >
              Envoyer un message →
            </a>
          </div>
        </div>

        <div className="divide-y divide-line border-t border-line">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "text-[15px] font-medium tracking-[-0.015em] transition-colors",
                      isOpen ? "text-ink" : "text-ink/80",
                    )}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border transition-colors",
                      isOpen
                        ? "border-clay bg-clay text-white"
                        : "border-line text-muted",
                    )}
                  >
                    {isOpen ? (
                      <Minus className="size-3.5" />
                    ) : (
                      <Plus className="size-3.5" />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 pr-8 text-[13.5px] leading-relaxed text-muted">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
