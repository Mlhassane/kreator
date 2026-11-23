"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { StudioButton } from "@/components/studio/studio-shell";

export function SharePortfolioButton({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = `${window.location.origin}/p/${slug}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Mon portfolio Kreator", url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      // L'utilisateur a annulé le partage natif.
    }
  };

  return (
    <StudioButton onClick={share} variant="outline">
      {copied ? (
        <>
          <Check className="size-4 text-studio-success" />
          Lien copié
        </>
      ) : (
        <>
          <Share2 className="size-4" />
          Partager
        </>
      )}
    </StudioButton>
  );
}

export function CopyLink({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 min-w-0 flex-1 items-center rounded-lg border border-studio-border bg-studio-bg px-2.5 text-[11.5px] text-studio-muted">
        <span className="truncate">kreator.africa/p/{slug}</span>
      </div>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(`${window.location.origin}/p/${slug}`);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        }}
        className={cn(
          "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg px-2.5 text-[11.5px] font-medium transition-colors",
          copied
            ? "bg-studio-success-soft text-studio-success"
            : "bg-studio-soft text-studio-ink/70 hover:text-studio-ink",
        )}
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        {copied ? "Copié" : "Copier"}
      </button>
    </div>
  );
}

export function VisibilityToggle({
  label,
  description,
  defaultOn = true,
}: {
  label: string;
  description: string;
  defaultOn?: boolean;
}) {
  const [on, setOn] = useState(defaultOn);

  return (
    <div className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0">
      <div>
        <p className="text-[12px] font-medium">{label}</p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-studio-muted">{description}</p>
      </div>
      <button
        role="switch"
        aria-checked={on}
        aria-label={label}
        onClick={() => setOn((v) => !v)}
        className={cn(
          "relative mt-0.5 h-5 w-9 shrink-0 rounded-full transition-colors",
          on ? "bg-studio-accent" : "bg-studio-soft",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-all",
            on ? "left-[18px]" : "left-0.5",
          )}
        />
      </button>
    </div>
  );
}
