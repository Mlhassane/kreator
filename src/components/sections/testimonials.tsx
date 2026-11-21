import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const toneStyles: Record<string, string> = {
  clay: "from-[#D9502B] to-[#8E3117]",
  forest: "from-[#123A2C] to-[#0A211A]",
  gold: "from-[#EFA92F] to-[#B47613]",
};

export function Testimonials() {
  return (
    <section className="border-y border-line/70 bg-cream-2/60 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Ils ont créé avec nous"
          title={
            <>
              Des campagnes qui laissent{" "}
              <em className="font-serif italic font-normal text-clay">
                des traces.
              </em>
            </>
          }
          description="Marques et créateurs racontent ce qui change quand la collaboration devient enfin simple."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <figure className="flex h-full flex-col rounded-[24px] border border-line bg-[#fffdf9] p-6 shadow-soft">
                <div className="flex items-center gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="size-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty text-[15px] leading-relaxed tracking-[-0.01em] text-ink/85">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                  <span
                    className={cn(
                      "grid size-9 place-items-center rounded-full bg-gradient-to-br font-display text-[11px] font-semibold text-white",
                      toneStyles[testimonial.tone],
                    )}
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold leading-tight">
                      {testimonial.name}
                    </p>
                    <p className="text-[11.5px] text-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
