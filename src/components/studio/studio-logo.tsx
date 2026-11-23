import Link from "next/link";
import { cn } from "@/lib/utils";

export function StudioLogo({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/studio"
      className={cn("flex items-center gap-2.5", className)}
      aria-label="Kreator Studio — accueil"
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-studio-violet text-white shadow-[0_8px_20px_-8px_rgba(115,87,255,0.9)]">
        <span className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent" />
        <svg viewBox="0 0 24 24" className="relative size-[18px]" fill="none" aria-hidden="true">
          <path
            d="M7 4v16M7 12.5 16.5 4M7 12.5 17 20"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-studio-ink">
            Kreator
          </span>
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-studio-muted">
            Studio
          </span>
        </span>
      )}
    </Link>
  );
}
