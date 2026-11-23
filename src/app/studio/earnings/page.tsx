import type { Metadata } from "next";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Banknote,
  Clock,
  CreditCard,
  Info,
  ShieldCheck,
  Smartphone,
  Wallet,
} from "lucide-react";
import { earningRows, earningsSummary, payoutMethods } from "@/lib/studio-data";
import { formatFcfa } from "@/lib/utils";
import { SectionCard } from "@/components/studio/studio-ui";
import { StudioButton } from "@/components/studio/studio-shell";
import { WithdrawButton } from "@/components/studio/withdraw-button";

export const metadata: Metadata = { title: "Earnings" };

const statusStyles = {
  paid: "bg-[#e9f8e1] text-[#2f6b1f]",
  pending: "bg-[#fff4d6] text-[#8a5a00]",
  available: "bg-studio-violet-soft text-studio-violet",
} as const;

const statusLabels = {
  paid: "Payé",
  pending: "En attente",
  available: "Disponible",
} as const;

export default function StudioEarningsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-studio-violet">
            Earnings
          </p>
          <h1 className="mt-1.5 text-[26px] font-semibold tracking-[-0.03em] sm:text-[30px]">
            Tes revenus
          </h1>
          <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-studio-muted">
            Tout est transparent : ce que tu as gagné, ce qui est en attente et ce qui est
            disponible dès maintenant.
          </p>
        </div>
        <WithdrawButton available={earningsSummary.available} />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-studio-violet to-[#9d86ff] p-5 text-white shadow-[0_24px_60px_-30px_rgba(115,87,255,0.9)]">
          <div className="pointer-events-none absolute -right-8 -top-10 size-32 rounded-full bg-white/15 blur-xl" />
          <div className="relative">
            <p className="flex items-center gap-1.5 text-[11px] font-medium text-white/75">
              <Wallet className="size-3.5" />
              Solde disponible
            </p>
            <p className="mt-2 flex items-baseline gap-1.5">
              <span className="text-[28px] font-semibold tracking-[-0.03em]">
                {formatFcfa(earningsSummary.available)}
              </span>
              <span className="text-[11px] text-white/70">FCFA</span>
            </p>
            <p className="mt-2 text-[10.5px] text-white/60">
              Prêt à être retiré sur Mobile Money
            </p>
          </div>
        </div>

        <div className="studio-card p-5">
          <p className="flex items-center gap-1.5 text-[11px] font-medium text-studio-muted">
            <Clock className="size-3.5" />
            En attente
          </p>
          <p className="mt-2 flex items-baseline gap-1.5">
            <span className="text-[28px] font-semibold tracking-[-0.03em]">
              {formatFcfa(earningsSummary.pending)}
            </span>
            <span className="text-[11px] text-studio-muted">FCFA</span>
          </p>
          <p className="mt-2 text-[10.5px] text-studio-muted">
            1 paiement en cours de validation
          </p>
        </div>

        <div className="studio-card p-5">
          <p className="flex items-center gap-1.5 text-[11px] font-medium text-studio-muted">
            <Banknote className="size-3.5" />
            Revenus cumulés
          </p>
          <p className="mt-2 flex items-baseline gap-1.5">
            <span className="text-[28px] font-semibold tracking-[-0.03em]">
              {formatFcfa(earningsSummary.total)}
            </span>
            <span className="text-[11px] text-studio-muted">FCFA</span>
          </p>
          <p className="mt-2 inline-flex items-center gap-1 text-[10.5px] font-medium text-[#2f6b1f]">
            <ArrowUpRight className="size-3.5" />
            +18 % vs mois dernier
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <SectionCard
          title="Historique des paiements"
          subtitle="Toutes tes transactions Kreator"
          bodyClassName="p-0 sm:p-0"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left">
              <thead>
                <tr className="border-b border-studio-border text-[10.5px] uppercase tracking-[0.08em] text-studio-muted">
                  <th className="px-4 py-2.5 font-medium sm:px-5">Date</th>
                  <th className="px-3 py-2.5 font-medium">Marque</th>
                  <th className="px-3 py-2.5 font-medium">Statut</th>
                  <th className="px-4 py-2.5 text-right font-medium sm:px-5">Montant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-studio-border">
                {earningRows.map((row) => (
                  <tr key={`${row.date}-${row.brand}`} className="text-[12px]">
                    <td className="whitespace-nowrap px-4 py-3 text-studio-muted sm:px-5">
                      {row.date}
                    </td>
                    <td className="px-3 py-3">
                      <p className="font-medium">{row.brand}</p>
                      <p className="mt-0.5 text-[10.5px] text-studio-muted">{row.label}</p>
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10.5px] font-medium ${statusStyles[row.status]}`}
                      >
                        {statusLabels[row.status]}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right font-semibold sm:px-5">
                      {row.status === "paid" ? (
                        <span className="text-[#2f6b1f]">+{formatFcfa(row.amount)}</span>
                      ) : (
                        formatFcfa(row.amount)
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <div className="space-y-4">
          <SectionCard title="Moyens de retrait">
            <ul className="space-y-2">
              {payoutMethods.map((method) => (
                <li
                  key={method.name}
                  className="flex items-center gap-3 rounded-xl border border-studio-border bg-studio-bg px-3 py-2.5"
                >
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${method.tone} text-white`}
                  >
                    {method.name === "Banque" ? (
                      <CreditCard className="size-4" />
                    ) : (
                      <Smartphone className="size-4" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-medium">{method.name}</p>
                    <p className="text-[10.5px] text-studio-muted">{method.detail}</p>
                  </div>
                  <span className="text-[10.5px] text-studio-muted">{method.fee}</span>
                </li>
              ))}
            </ul>
            <StudioButton variant="outline" className="mt-3 w-full">
              Ajouter un moyen
            </StudioButton>
          </SectionCard>

          <SectionCard title="Transparence">
            <div className="flex items-start gap-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#e9f8e1] text-[#2f6b1f]">
                <ShieldCheck className="size-4" />
              </span>
              <p className="text-[11.5px] leading-relaxed text-studio-muted">
                {earningsSummary.feeNote}
              </p>
            </div>
            <div className="mt-3 flex items-start gap-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-studio-soft text-studio-muted">
                <Info className="size-4" />
              </span>
              <p className="text-[11.5px] leading-relaxed text-studio-muted">
                Les fonds sont débloqués après validation du livrable. Aucun paiement
                n&apos;est présenté comme garanti avant d&apos;être effectivement couvert.
              </p>
            </div>
          </SectionCard>

          <div className="studio-card p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-studio-muted">
              Prochain versement
            </p>
            <p className="mt-1.5 text-[20px] font-semibold tracking-[-0.02em]">
              75 000 FCFA
            </p>
            <p className="mt-1 text-[11px] text-studio-muted">
              Wave · en attente de validation
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[10.5px] text-studio-muted">
              <ArrowDownLeft className="size-3.5" />
              Versement estimé sous 48 h après validation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
