import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CircleDollarSign,
  Download,
  FileText,
  MessageSquare,
  Send,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import {
  myCampaigns,
  statusMeta,
  statusOrder,
  studioProfile,
} from "@/lib/studio-data";
import { formatFcfa, cn } from "@/lib/utils";
import { BrandMark } from "@/components/studio/campaign-card";
import {
  Progress,
  SectionCard,
  StatusBadge,
  TypeBadge,
} from "@/components/studio/studio-ui";
import { StudioButton } from "@/components/studio/studio-shell";
import { CampaignActions } from "@/components/studio/campaign-actions";

export function generateStaticParams() {
  return myCampaigns.map((campaign) => ({ id: campaign.id }));
}

// Cette page dépend de `params` : on autorise le rendu bloquant.
export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const campaign = myCampaigns.find((c) => c.id === id);
  return { title: campaign ? campaign.title : "Campagne" };
}

export default async function CampaignDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campaign = myCampaigns.find((c) => c.id === id);
  if (!campaign) notFound();

  const currentStep = statusMeta[campaign.status].step;

  return (
    <div className="space-y-5">
      <Link
        href="/studio/campaigns"
        className="inline-flex items-center gap-1.5 text-[12px] font-medium text-studio-muted transition-colors hover:text-studio-ink"
      >
        <ArrowLeft className="size-3.5" />
        Mes campagnes
      </Link>

      {/* En-tête campagne */}
      <div className="studio-card p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-3.5">
            <BrandMark
              initials={campaign.brandInitials}
              tone={campaign.brandTone}
              size="lg"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-[20px] font-semibold tracking-[-0.03em] sm:text-[24px]">
                  {campaign.title}
                </h1>
                <TypeBadge type={campaign.type} />
              </div>
              <p className="mt-1 text-[12.5px] text-studio-muted">
                {campaign.brand} · {campaign.deliverables[0]}
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <StatusBadge status={campaign.status} />
                <span className="inline-flex items-center gap-1 rounded-full bg-studio-soft px-2.5 py-1 text-[11px] font-medium text-studio-muted">
                  <CalendarDays className="size-3.5" />
                  Échéance {campaign.deadline}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-studio-accent-soft px-2.5 py-1 text-[11px] font-semibold text-studio-accent">
                  <Wallet className="size-3.5" />
                  {formatFcfa(campaign.budget)} FCFA
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <StudioButton href="/studio/messages" variant="outline">
              <MessageSquare className="size-4" />
              Message
            </StudioButton>
            <CampaignActions brand={campaign.brand} />
          </div>
        </div>

        <div className="mt-4 border-t border-studio-border pt-4">
          <div className="mb-1.5 flex items-center justify-between text-[11px] text-studio-muted">
            <span>Progression de la collaboration</span>
            <span className="font-medium text-studio-ink/70">
              Étape {currentStep} / 9
            </span>
          </div>
          <Progress value={(currentStep / 9) * 100} tone={campaign.status === "paid" ? "highlight" : "accent"} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        {/* Colonne principale */}
        <div className="space-y-4">
          <SectionCard title="Brief de la marque" subtitle="Contexte et objectifs de la campagne">
            <p className="text-[12.5px] leading-relaxed text-studio-ink/75">
              {campaign.brief}
            </p>

            <h3 className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-studio-muted">
              Consignes créatives
            </h3>
            <ul className="mt-2 space-y-2">
              {campaign.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-[12.5px]">
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-studio-accent-soft text-studio-accent">
                    <Check className="size-2.5" strokeWidth={3.5} />
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard
            title="Fichiers de la marque"
            subtitle={`${campaign.files.length} fichier${campaign.files.length > 1 ? "s" : ""} partagé${campaign.files.length > 1 ? "s" : ""}`}
            bodyClassName="p-0 sm:p-0"
          >
            {campaign.files.length === 0 ? (
              <p className="px-4 py-6 text-center text-[12px] text-studio-muted sm:px-5">
                Aucun fichier pour le moment.
              </p>
            ) : (
              <ul className="divide-y divide-studio-border">
                {campaign.files.map((file) => (
                  <li key={file.name} className="flex items-center gap-3 px-4 py-3 sm:px-5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-studio-soft text-studio-muted">
                      <FileText className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-medium">{file.name}</p>
                      <p className="text-[10.5px] text-studio-muted">
                        {file.type} · {file.size}
                      </p>
                    </div>
                    <button
                      aria-label={`Télécharger ${file.name}`}
                      className="grid size-8 shrink-0 place-items-center rounded-lg text-studio-muted transition-colors hover:bg-studio-soft hover:text-studio-ink"
                    >
                      <Download className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </SectionCard>

          <SectionCard
            title="Commentaires"
            subtitle="Échanges avec la marque sur cette campagne"
          >
            {campaign.comments.length === 0 ? (
              <p className="text-[12px] text-studio-muted">
                Aucun commentaire pour l&apos;instant. Lance la conversation.
              </p>
            ) : (
              <ul className="space-y-3.5">
                {campaign.comments.map((comment, index) => (
                  <li key={`${comment.author}-${index}`} className="flex items-start gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-studio-soft text-[10px] font-semibold text-studio-ink/70">
                      {comment.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-[12px] font-semibold">{comment.author}</p>
                        <span className="text-[10.5px] text-studio-muted">{comment.time}</span>
                      </div>
                      <p className="mt-1 rounded-xl rounded-tl-sm bg-studio-bg px-3 py-2 text-[12px] leading-relaxed text-studio-ink/75">
                        {comment.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex items-center gap-2">
              <input
                placeholder="Écrire un commentaire…"
                className="h-10 flex-1 rounded-xl border border-studio-border bg-studio-bg px-3 text-[12px] outline-none transition-colors placeholder:text-studio-muted/70 focus:border-studio-accent/50 focus:bg-studio-surface"
              />
              <button
                aria-label="Envoyer le commentaire"
                className="grid size-10 shrink-0 place-items-center rounded-xl bg-studio-accent text-white transition-colors hover:bg-studio-accent-dark"
              >
                <Send className="size-4" />
              </button>
            </div>
          </SectionCard>
        </div>

        {/* Colonne latérale */}
        <div className="space-y-4">
          <SectionCard title="Étapes de la collaboration">
            <ol className="space-y-0">
              {statusOrder.map((status, index) => {
                const step = index + 1;
                const done = step < currentStep;
                const current = step === currentStep;
                return (
                  <li key={status} className="relative flex gap-3 pb-4 last:pb-0">
                    {index < statusOrder.length - 1 && (
                      <span
                        className={cn(
                          "absolute left-[11px] top-6 h-full w-px",
                          done ? "bg-studio-accent/40" : "bg-studio-border",
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "relative z-10 grid size-6 shrink-0 place-items-center rounded-full border text-[10px] font-semibold",
                        done && "border-studio-accent bg-studio-accent text-white",
                        current &&
                          "border-studio-accent bg-studio-accent-soft text-studio-accent ring-4 ring-studio-accent/10",
                        !done && !current && "border-studio-border bg-studio-surface text-studio-muted",
                      )}
                    >
                      {done ? <Check className="size-3" strokeWidth={3.5} /> : step}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p
                        className={cn(
                          "text-[12px]",
                          current ? "font-semibold text-studio-ink" : "text-studio-muted",
                        )}
                      >
                        {statusMeta[status].label}
                      </p>
                      {current && (
                        <p className="mt-0.5 text-[10.5px] text-studio-accent">
                          Étape actuelle
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </SectionCard>

          <SectionCard title="Paiement">
            <div className="flex items-baseline justify-between">
              <span className="text-[11.5px] text-studio-muted">Budget total</span>
              <span className="text-[18px] font-semibold">
                {formatFcfa(campaign.budget)} FCFA
              </span>
            </div>

            <ul className="mt-3 space-y-2">
              {campaign.payments.map((payment) => (
                <li
                  key={payment.label}
                  className="flex items-center justify-between rounded-lg bg-studio-bg px-2.5 py-2 text-[11.5px]"
                >
                  <span className="flex items-center gap-1.5">
                    {payment.status === "paid" ? (
                      <ShieldCheck className="size-3.5 text-studio-success" />
                    ) : (
                      <CircleDollarSign className="size-3.5 text-studio-muted" />
                    )}
                    {payment.label}
                  </span>
                  <span className="font-medium">
                    {formatFcfa(payment.amount)} FCFA
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-3 text-[10.5px] leading-relaxed text-studio-muted">
              Les fonds sont sécurisés par Kreator et versés après validation du livrable.
            </p>
          </SectionCard>

          <SectionCard title="Ta marque">
            <div className="flex items-center gap-3">
              <BrandMark
                initials={campaign.brandInitials}
                tone={campaign.brandTone}
              />
              <div>
                <p className="text-[12.5px] font-semibold">{campaign.brand}</p>
                <p className="text-[11px] text-studio-muted">Chargé de campagne</p>
              </div>
            </div>
            <p className="mt-3 text-[11.5px] leading-relaxed text-studio-muted">
              Réponse moyenne sous 4 h. Pour toute question sur le brief, utilise la
              messagerie de la campagne.
            </p>
            <StudioButton href="/studio/messages" variant="outline" className="mt-3 w-full">
              <MessageSquare className="size-4" />
              Ouvrir la conversation
            </StudioButton>
          </SectionCard>

          <div className="rounded-xl border border-dashed border-studio-border bg-studio-surface/60 px-3.5 py-3 text-[10.5px] leading-relaxed text-studio-muted">
            <span className="font-semibold text-studio-ink/70">Rappel :</span>{" "}
            {studioProfile.firstName}, ton contrat et les droits d&apos;utilisation sont
            disponibles dans l&apos;onglet documents de la campagne.
          </div>
        </div>
      </div>
    </div>
  );
}
