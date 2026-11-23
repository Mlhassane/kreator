"use client";

import { useState } from "react";
import { Check, Link2, Upload, X } from "lucide-react";
import { StudioButton } from "@/components/studio/studio-shell";

export function CampaignActions({ brand }: { brand: string }) {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");
  const [sent, setSent] = useState(false);

  const close = () => {
    setOpen(false);
    setSent(false);
    setLink("");
  };

  return (
    <>
      <StudioButton onClick={() => setOpen(true)}>
        <Upload className="size-4" />
        Soumettre un contenu
      </StudioButton>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-studio-ink/40 backdrop-blur-sm sm:items-center sm:p-6">
          <button aria-label="Fermer" className="absolute inset-0 cursor-default" onClick={close} />
          <div className="relative z-10 w-full max-w-md rounded-t-2xl border border-studio-border bg-studio-surface p-5 shadow-studio-pop sm:rounded-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-[17px] font-semibold tracking-[-0.02em]">
                  Soumettre un livrable
                </h2>
                <p className="mt-1 text-[12px] text-studio-muted">
                  {brand} recevra une notification pour validation.
                </p>
              </div>
              <button
                onClick={close}
                aria-label="Fermer"
                className="grid size-8 place-items-center rounded-lg bg-studio-soft text-studio-muted hover:text-studio-ink"
              >
                <X className="size-4" />
              </button>
            </div>

            {sent ? (
              <div className="mt-5 flex flex-col items-center rounded-xl bg-[#e9f8e1] px-4 py-6 text-center">
                <span className="grid size-10 place-items-center rounded-full bg-white text-[#2f6b1f]">
                  <Check className="size-5" strokeWidth={3} />
                </span>
                <p className="mt-3 text-[13px] font-semibold text-[#2f6b1f]">
                  Livrable envoyé pour validation
                </p>
                <p className="mt-1 text-[11.5px] text-[#2f6b1f]/80">
                  Tu recevras une réponse sous 48 h.
                </p>
                <StudioButton variant="outline" size="sm" className="mt-4" onClick={close}>
                  Fermer
                </StudioButton>
              </div>
            ) : (
              <>
                <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-studio-border bg-studio-bg px-4 py-6 text-center transition-colors hover:border-studio-violet/40">
                  <span className="grid size-10 place-items-center rounded-full bg-studio-violet-soft text-studio-violet">
                    <Upload className="size-4" />
                  </span>
                  <span className="mt-2 text-[12.5px] font-medium">
                    Glisse ton fichier vidéo ici
                  </span>
                  <span className="mt-0.5 text-[11px] text-studio-muted">
                    MP4, MOV · 500 Mo max
                  </span>
                  <input type="file" className="sr-only" />
                </label>

                <div className="mt-3">
                  <label className="text-[11.5px] font-medium text-studio-ink/70">
                    Ou un lien de visionnage
                  </label>
                  <div className="relative mt-1.5">
                    <Link2 className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-studio-muted" />
                    <input
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      placeholder="https://drive.google.com/…"
                      className="h-10 w-full rounded-xl border border-studio-border bg-studio-bg pl-9 pr-3 text-[12px] outline-none transition-colors placeholder:text-studio-muted/70 focus:border-studio-violet/50 focus:bg-studio-surface"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <StudioButton variant="outline" className="flex-1" onClick={close}>
                    Annuler
                  </StudioButton>
                  <StudioButton className="flex-1" onClick={() => setSent(true)}>
                    Envoyer
                  </StudioButton>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
