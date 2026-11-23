"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCheck,
  Paperclip,
  Send,
  Smile,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { conversations, myCampaigns, type Conversation } from "@/lib/studio-data";
import { BrandMark } from "@/components/studio/campaign-card";

type LocalMessage = { from: "me" | "them"; text: string; time: string };

const campaignByConversation: Record<string, string> = {
  "beauty-africa": "beaute-naturelle",
  "digital-store": "tech-lifestyle",
  "fashion-house": "collection-fete",
  wave: "wave-cash",
  jumia: "black-friday",
};

export function MessagesClient() {
  const [selectedId, setSelectedId] = useState(conversations[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [threads, setThreads] = useState<Record<string, LocalMessage[]>>(() =>
    Object.fromEntries(conversations.map((c) => [c.id, c.messages])),
  );
  const listRef = useRef<HTMLDivElement>(null);

  const selected = useMemo(
    () => conversations.find((c) => c.id === selectedId) ?? conversations[0],
    [selectedId],
  );
  const messages = threads[selected.id] ?? [];
  const campaignId = campaignByConversation[selected.id];
  const campaign = campaignId
    ? myCampaigns.find((c) => c.id === campaignId)
    : undefined;

  const openConversation = (conversation: Conversation) => {
    setSelectedId(conversation.id);
    setMobileOpen(true);
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
    });
  };

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setThreads((prev) => ({
      ...prev,
      [selected.id]: [
        ...(prev[selected.id] ?? []),
        { from: "me", text, time: "Maintenant" },
      ],
    }));
    setDraft("");
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
    });
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-studio-accent">
          Messages
        </p>
        <h1 className="mt-1.5 text-[26px] font-semibold tracking-[-0.03em] sm:text-[30px]">
          Tes conversations
        </h1>
        <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-studio-muted">
          Tous tes échanges avec les marques, centralisés par campagne. Fini les DM
          perdus.
        </p>
      </div>

      <div className="studio-card grid overflow-hidden lg:grid-cols-[320px_1fr]">
        {/* Liste des conversations */}
        <div
          className={cn(
            "flex min-h-[520px] flex-col border-studio-border lg:border-r",
            mobileOpen ? "hidden lg:flex" : "flex",
          )}
        >
          <div className="border-b border-studio-border px-4 py-3">
            <p className="text-[12px] font-semibold">
              Boîte de réception
              <span className="ml-1.5 rounded-full bg-studio-accent-soft px-1.5 py-0.5 text-[10px] text-studio-accent">
                {conversations.reduce((total, c) => total + c.unread, 0)} non lus
              </span>
            </p>
          </div>
          <ul className="flex-1 divide-y divide-studio-border overflow-y-auto">
            {conversations.map((conversation) => {
              const active = conversation.id === selected.id;
              const unread = conversation.unread;
              return (
                <li key={conversation.id}>
                  <button
                    onClick={() => openConversation(conversation)}
                    className={cn(
                      "flex w-full items-start gap-3 px-4 py-3 text-left transition-colors",
                      active ? "bg-studio-accent-soft/60" : "hover:bg-studio-soft/70",
                    )}
                  >
                    <span className="relative shrink-0">
                      <BrandMark
                        initials={conversation.initials}
                        tone={conversation.tone}
                      />
                      {conversation.online && (
                        <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-studio-online ring-2 ring-studio-surface" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="truncate text-[12.5px] font-semibold">
                          {conversation.brand}
                        </span>
                        <span className="shrink-0 text-[10px] text-studio-muted">
                          {conversation.time}
                        </span>
                      </span>
                      <span className="mt-0.5 flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            "truncate text-[11px]",
                            unread ? "font-medium text-studio-ink/80" : "text-studio-muted",
                          )}
                        >
                          {conversation.lastMessage}
                        </span>
                        {unread > 0 && (
                          <span className="grid size-4 shrink-0 place-items-center rounded-full bg-studio-accent text-[9px] font-semibold text-white">
                            {unread}
                          </span>
                        )}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Fil de conversation */}
        <div
          className={cn(
            "flex min-h-[520px] flex-col",
            mobileOpen ? "flex" : "hidden lg:flex",
          )}
        >
          <div className="flex items-center gap-3 border-b border-studio-border px-4 py-3">
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Retour aux conversations"
              className="grid size-8 place-items-center rounded-lg text-studio-muted hover:bg-studio-soft hover:text-studio-ink lg:hidden"
            >
              <ArrowLeft className="size-4" />
            </button>
            <BrandMark initials={selected.initials} tone={selected.tone} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold">{selected.brand}</p>
              <p className="text-[10.5px] text-studio-muted">
                {selected.online ? "En ligne" : "Répond en moyenne sous 4 h"}
              </p>
            </div>
            {campaign && (
              <Link
                href={`/studio/campaigns/${campaign.id}`}
                className="hidden items-center gap-1 rounded-lg bg-studio-soft px-2.5 py-1.5 text-[10.5px] font-medium text-studio-ink/70 transition-colors hover:text-studio-accent sm:inline-flex"
              >
                {campaign.title}
              </Link>
            )}
          </div>

          {campaign && (
            <div className="flex items-center justify-between border-b border-studio-border bg-studio-bg px-4 py-2">
              <p className="truncate text-[10.5px] text-studio-muted">
                Campagne · <span className="font-medium text-studio-ink/75">{campaign.title}</span>
              </p>
              <Link
                href={`/studio/campaigns/${campaign.id}`}
                className="shrink-0 text-[10.5px] font-medium text-studio-accent hover:underline"
              >
                Voir la campagne
              </Link>
            </div>
          )}

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-studio-bg/50 px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex",
                  message.from === "me" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[78%] rounded-2xl px-3 py-2 text-[12px] leading-relaxed",
                    message.from === "me"
                      ? "rounded-br-md bg-studio-accent text-white"
                      : "rounded-bl-md border border-studio-border bg-studio-surface text-studio-ink/80",
                  )}
                >
                  <p>{message.text}</p>
                  <p
                    className={cn(
                      "mt-1 flex items-center justify-end gap-1 text-[9.5px]",
                      message.from === "me" ? "text-white/60" : "text-studio-muted",
                    )}
                  >
                    {message.time}
                    {message.from === "me" && <CheckCheck className="size-3" />}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-studio-border p-3">
            <div className="flex items-end gap-2">
              <button
                aria-label="Joindre un fichier"
                className="grid size-9 shrink-0 place-items-center rounded-lg text-studio-muted transition-colors hover:bg-studio-soft hover:text-studio-ink"
              >
                <Paperclip className="size-4" />
              </button>
              <div className="relative flex-1">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send();
                    }
                  }}
                  placeholder={`Écrire à ${selected.brand}…`}
                  className="h-10 w-full rounded-xl border border-studio-border bg-studio-bg pl-3 pr-9 text-[12px] outline-none transition-colors placeholder:text-studio-muted/70 focus:border-studio-accent/50 focus:bg-studio-surface"
                />
                <button
                  aria-label="Emoji"
                  className="absolute right-2 top-1/2 grid size-6 -translate-y-1/2 place-items-center text-studio-muted hover:text-studio-ink"
                >
                  <Smile className="size-4" />
                </button>
              </div>
              <button
                onClick={send}
                aria-label="Envoyer"
                className="grid size-10 shrink-0 place-items-center rounded-xl bg-studio-accent text-white transition-colors hover:bg-studio-accent-dark"
              >
                <Send className="size-4" />
              </button>
            </div>
            <p className="mt-1.5 text-[9.5px] text-studio-muted">
              Les fichiers partagés sont automatiquement liés à la campagne.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
