"use client";

import { useState } from "react";
import { Check, Wallet, X } from "lucide-react";
import { formatFcfa } from "@/lib/utils";
import { payoutMethods } from "@/lib/studio-data";
import { StudioButton } from "@/components/studio/studio-shell";

export function WithdrawButton({ available }: { available: number }) {
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState(payoutMethods[0].name);
  const [amount, setAmount] = useState(String(available));
  const [done, setDone] = useState(false);

  const close = () => {
    setOpen(false);
    setDone(false);
    setAmount(String(available));
  };

  return (
    <>
      <StudioButton variant="dark" onClick={() => setOpen(true)}>
        <Wallet className="size-4" />
        Demander un retrait
      </StudioButton>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-studio-ink/40 backdrop-blur-sm sm:items-center sm:p-6">
          <button aria-label="Fermer" className="absolute inset-0 cursor-default" onClick={close} />
          <div className="relative z-10 w-full max-w-md rounded-t-2xl border border-studio-border bg-studio-surface p-5 shadow-studio-pop sm:rounded-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-[17px] font-semibold tracking-[-0.02em]">
                  Demander un retrait
                </h2>
                <p className="mt-1 text-[12px] text-studio-muted">
                  Solde disponible : {formatFcfa(available)} FCFA
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

            {done ? (
              <div className="mt-5 flex flex-col items-center rounded-xl bg-studio-success-soft px-4 py-6 text-center">
                <span className="grid size-10 place-items-center rounded-full bg-studio-surface text-studio-success">
                  <Check className="size-5" strokeWidth={3} />
                </span>
                <p className="mt-3 text-[13px] font-semibold text-studio-success">
                  Demande de retrait envoyée
                </p>
                <p className="mt-1 text-[11.5px] text-studio-success/80">
                  {formatFcfa(Number(amount) || 0)} FCFA via {method}. Traitement sous 48 h.
                </p>
                <StudioButton variant="outline" size="sm" className="mt-4" onClick={close}>
                  Fermer
                </StudioButton>
              </div>
            ) : (
              <>
                <label className="mt-4 block text-[11.5px] font-medium text-studio-ink/70">
                  Montant (FCFA)
                </label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/[^\d]/g, ""))}
                  inputMode="numeric"
                  className="mt-1.5 h-11 w-full rounded-xl border border-studio-border bg-studio-bg px-3 text-[15px] font-semibold outline-none transition-colors focus:border-studio-accent/50 focus:bg-studio-surface"
                />

                <p className="mt-4 text-[11.5px] font-medium text-studio-ink/70">
                  Moyen de retrait
                </p>
                <div className="mt-1.5 space-y-1.5">
                  {payoutMethods.map((option) => (
                    <button
                      key={option.name}
                      onClick={() => setMethod(option.name)}
                      className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left transition-colors ${
                        method === option.name
                          ? "border-studio-accent bg-studio-accent-soft"
                          : "border-studio-border bg-studio-bg hover:border-studio-accent/30"
                      }`}
                    >
                      <span>
                        <span className="block text-[12.5px] font-medium">{option.name}</span>
                        <span className="block text-[10.5px] text-studio-muted">
                          {option.detail}
                        </span>
                      </span>
                      <span className="text-[10.5px] text-studio-muted">
                        Frais {option.fee}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl bg-studio-bg px-3 py-2.5 text-[11.5px]">
                  <span className="text-studio-muted">Tu recevras</span>
                  <span className="font-semibold">
                    {formatFcfa(Number(amount) || 0)} FCFA
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <StudioButton variant="outline" className="flex-1" onClick={close}>
                    Annuler
                  </StudioButton>
                  <StudioButton className="flex-1" onClick={() => setDone(true)}>
                    Confirmer
                  </StudioButton>
                </div>
                <p className="mt-2 text-center text-[10.5px] text-studio-muted">
                  Traitement sous 48 h ouvrées. Aucun frais sur Mobile Money.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
