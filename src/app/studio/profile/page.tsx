import type { Metadata } from "next";
import { ProfileClient } from "@/components/studio/profile-client";

export const metadata: Metadata = { title: "Profile" };

export default function StudioProfilePage() {
  return <ProfileClient />;
}
