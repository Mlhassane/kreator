import type { Metadata } from "next";
import { StudioShell } from "@/components/studio/studio-shell";

export const metadata: Metadata = {
  title: {
    default: "Studio",
    template: "%s · Kreator Studio",
  },
  description:
    "Kreator Studio — l'espace de travail des créateurs : opportunités, campagnes, portfolio, analytics et revenus.",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StudioShell>{children}</StudioShell>;
}
