import type { Metadata } from "next";
import { CampaignsClient } from "@/components/studio/campaigns-client";

export const metadata: Metadata = { title: "My Campaigns" };

export default function StudioCampaignsPage() {
  return <CampaignsClient />;
}
