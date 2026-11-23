import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { statusMeta, type CampaignStatus, type CampaignType } from "@/lib/studio-data";

const toneClasses: Record<string, string> = {
  neutral: "bg-studio-soft text-studio-muted",
  accent: "bg-studio-accent-soft text-studio-accent",
  warning: "bg-studio-warning-soft text-studio-warning",
  success: "bg-studio-success-soft text-studio-success",
  info: "bg-studio-soft text-studio-ink",
};

export function StatusBadge({ status }: { status: CampaignStatus }) {
  const meta = statusMeta[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium",
        toneClasses[meta.tone],
      )}
    >
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {meta.label}
    </span>
  );
}

export function TypeBadge({
  type,
  className,
}: {
  type: CampaignType;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10.5px] font-semibold uppercase tracking-[0.04em]",
        type === "ugc"
          ? "bg-studio-accent-soft text-studio-accent"
          : "bg-studio-highlight-soft text-studio-warning",
        className,
      )}
    >
      {type === "ugc" ? "UGC Creator" : "Influencer"}
    </span>
  );
}

export function Progress({
  value,
  tone = "accent",
  className,
}: {
  value: number;
  tone?: "accent" | "highlight" | "ink";
  className?: string;
}) {
  const bar =
    tone === "highlight" ? "bg-studio-highlight" : tone === "ink" ? "bg-studio-ink" : "bg-studio-accent";
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-studio-soft", className)}>
      <div className={cn("h-full rounded-full", bar)} style={{ width: `${Math.min(value, 100)}%` }} />
    </div>
  );
}

export function StatCard({
  label,
  value,
  unit,
  delta,
  positive = true,
  icon,
  accent = "accent",
}: {
  label: string;
  value: string;
  unit?: string;
  delta?: string;
  positive?: boolean;
  icon?: ReactNode;
  accent?: "accent" | "highlight" | "ink" | "warning";
}) {
  const accentBg = {
    accent: "bg-studio-accent-soft text-studio-accent",
    highlight: "bg-studio-highlight-soft text-studio-warning",
    ink: "bg-studio-soft text-studio-ink",
    warning: "bg-studio-warning-soft text-studio-warning",
  }[accent];

  return (
    <div className="studio-card p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[12px] font-medium text-studio-muted">{label}</p>
        {icon && (
          <span className={cn("grid size-8 shrink-0 place-items-center rounded-lg", accentBg)}>
            {icon}
          </span>
        )}
      </div>
      <p className="mt-2.5 flex items-baseline gap-1.5">
        <span className="text-[24px] font-semibold tracking-[-0.03em] sm:text-[26px]">
          {value}
        </span>
        {unit && <span className="text-[11px] text-studio-muted">{unit}</span>}
      </p>
      {delta && (
        <p
          className={cn(
            "mt-2 inline-flex items-center gap-1 text-[11px] font-medium",
            positive ? "text-studio-success" : "text-studio-accent-dark",
          )}
        >
          {positive ? (
            <ArrowUpRight className="size-3.5" />
          ) : (
            <ArrowDownRight className="size-3.5" />
          )}
          {delta}
        </p>
      )}
    </div>
  );
}

export function SectionCard({
  title,
  subtitle,
  action,
  children,
  className,
  bodyClassName,
}: {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section className={cn("studio-card overflow-hidden", className)}>
      {(title || action) && (
        <div className="flex items-start justify-between gap-3 border-b border-studio-border px-4 py-3.5 sm:px-5">
          <div>
            {title && <h2 className="text-[14px] font-semibold">{title}</h2>}
            {subtitle && (
              <p className="mt-0.5 text-[11.5px] text-studio-muted">{subtitle}</p>
            )}
          </div>
          {action}
        </div>
      )}
      <div className={cn(!bodyClassName && "p-4 sm:p-5", bodyClassName)}>{children}</div>
    </section>
  );
}
