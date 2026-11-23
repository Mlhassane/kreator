import Link from "next/link";
import { ArrowUpRight, CalendarDays, MessageSquare } from "lucide-react";
import { cn, formatFcfa } from "@/lib/utils";
import type { MyCampaign } from "@/lib/studio-data";
import { Progress, StatusBadge, TypeBadge } from "@/components/studio/studio-ui";

export function BrandMark({
  initials,
  tone,
  size = "md",
}: {
  initials: string;
  tone: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "size-8 rounded-lg text-[10px]",
    md: "size-10 rounded-xl text-[11px]",
    lg: "size-12 rounded-xl text-[13px]",
  } as const;
  return (
    <span
      className={cn(
        "relative grid shrink-0 place-items-center overflow-hidden bg-gradient-to-br font-semibold text-white",
        tone,
        sizes[size],
      )}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
      <span className="relative">{initials}</span>
    </span>
  );
}

export function CampaignCard({
  campaign,
  className,
}: {
  campaign: MyCampaign;
  className?: string;
}) {
  return (
    <Link
      href={`/studio/campaigns/${campaign.id}`}
      className={cn(
        "group studio-card flex flex-col p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-studio-violet/35 hover:shadow-studio-pop",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <BrandMark initials={campaign.brandInitials} tone={campaign.brandTone} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13.5px] font-semibold tracking-[-0.01em]">
            {campaign.title}
          </p>
          <p className="mt-0.5 truncate text-[11.5px] text-studio-muted">
            {campaign.brand}
          </p>
        </div>
        <ArrowUpRight className="size-4 shrink-0 text-studio-muted opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <TypeBadge type={campaign.type} />
        <StatusBadge status={campaign.status} />
      </div>

      <p className="mt-3 line-clamp-2 text-[11.5px] leading-relaxed text-studio-muted">
        {campaign.deliverables.join(" · ")}
      </p>

      <div className="mt-3 flex items-center justify-between text-[11.5px]">
        <span className="font-semibold">{formatFcfa(campaign.budget)} FCFA</span>
        <span className="flex items-center gap-1 text-studio-muted">
          <CalendarDays className="size-3.5" />
          {campaign.deadline}
        </span>
      </div>

      <div className="mt-3.5">
        <div className="mb-1.5 flex items-center justify-between text-[10.5px] text-studio-muted">
          <span>Progression</span>
          <span className="font-medium text-studio-ink/70">{campaign.progress}%</span>
        </div>
        <Progress value={campaign.progress} tone={campaign.status === "paid" ? "lime" : "violet"} />
      </div>

      {campaign.unread > 0 && (
        <div className="mt-3 flex items-center gap-1.5 text-[10.5px] font-medium text-studio-violet">
          <MessageSquare className="size-3.5" />
          {campaign.unread} nouveau{campaign.unread > 1 ? "x" : ""} message
          {campaign.unread > 1 ? "s" : ""}
        </div>
      )}
    </Link>
  );
}
