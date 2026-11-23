import type { Metadata } from "next";
import { MessagesClient } from "@/components/studio/messages-client";

export const metadata: Metadata = { title: "Messages" };

export default function StudioMessagesPage() {
  return <MessagesClient />;
}
