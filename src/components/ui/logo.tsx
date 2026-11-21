import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
  compact = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-9 shrink-0 place-items-center rounded-[11px] bg-clay shadow-[0_6px_16px_-8px_rgba(217,80,43,0.9)]">
        <svg
          viewBox="0 0 24 24"
          className="size-[19px]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7.5 4.5v15M7.5 12l8.5-7.5M7.5 12l8.5 7.5"
            stroke="#FFFDF9"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-gold ring-2 ring-cream" />
      </span>
      {!compact && (
        <span
          className={cn(
            "font-display text-[23px] leading-none font-semibold tracking-[-0.045em]",
            tone === "light" ? "text-cream" : "text-ink",
          )}
        >
          kreator<span className="text-gold">.</span>
        </span>
      )}
    </span>
  );
}
