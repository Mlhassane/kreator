import type { Metadata } from "next";
import { DiscoverClient } from "@/components/studio/discover-client";

export const metadata: Metadata = { title: "Discover" };

export default function StudioDiscoverPage() {
  return <DiscoverClient />;
}
