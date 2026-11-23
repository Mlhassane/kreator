"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Camera,
  Check,
  CheckCircle2,
  CreditCard,
  Globe,
  Palette,
  Save,
  Smartphone,
  Sparkles,
  UserRound,
  Video,
  Wallet,
} from "lucide-react";
import { cn, formatFcfa } from "@/lib/utils";
import { onboardingSteps, studioProfile } from "@/lib/studio-data";
import { Progress, SectionCard } from "@/components/studio/studio-ui";
import { StudioButton } from "@/components/studio/studio-shell";
import { Avatar } from "@/components/ui/avatar";

const niches = [
  "Beauté",
  "Skincare",
  "Lifestyle",
  "Mode",
  "Tech",
  "Food",
  "Voyage",
  "Fitness",
  "Gaming",
  "Business",
  "Cuisine",
  "Musique",
];

const collaborationOptions = [
  {
    id: "ugc",
    icon: Video,
    title: "Créer des vidéos UGC",
    description: "Je produis des contenus pour les réseaux et publicités des marques.",
  },
  {
    id: "influencer",
    icon: Globe,
    title: "Promouvoir des marques",
    description: "Je publie sur mes propres réseaux et prête mon audience.",
  },
  {
    id: "both",
    icon: Sparkles,
    title: "Les deux",
    description: "Je veux les deux types de collaboration.",
  },
] as const;

type Collaboration = (typeof collaborationOptions)[number]["id"];

export function ProfileClient() {
  const [collaboration, setCollaboration] = useState<Collaboration>(
    studioProfile.collaborationType,
  );
  const [selectedNiches, setSelectedNiches] = useState<string[]>(studioProfile.niches);
  const [bio, setBio] = useState(studioProfile.bio);
  const [city, setCity] = useState(studioProfile.city);
  const [saved, setSaved] = useState(false);

  const toggleNiche = (niche: string) => {
    setSelectedNiches((prev) =>
      prev.includes(niche) ? prev.filter((n) => n !== niche) : [...prev, niche],
    );
  };

  const save = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2800);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-studio-violet">
            Profile
          </p>
          <h1 className="mt-1.5 text-[26px] font-semibold tracking-[-0.03em] sm:text-[30px]">
            Ton identité professionnelle
          </h1>
          <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-studio-muted">
            Un profil complet, c&apos;est plus d&apos;invitations et de meilleures
            campagnes. Remplis à ton rythme.
          </p>
        </div>
        <StudioButton onClick={save}>
          {saved ? (
            <>
              <Check className="size-4" />
              Enregistré
            </>
          ) : (
            <>
              <Save className="size-4" />
              Enregistrer
            </>
          )}
        </StudioButton>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">
          {/* Identité */}
          <SectionCard
            title="Identité"
            subtitle="Ce que les marques voient en premier"
            action={
              <span className="inline-flex items-center gap-1 rounded-full bg-[#e9f8e1] px-2.5 py-1 text-[10.5px] font-semibold text-[#2f6b1f]">
                <BadgeCheck className="size-3.5" />
                Vérifié
              </span>
            }
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Avatar
                name={studioProfile.name}
                photo={studioProfile.avatar}
                gradient="from-[#7357ff] to-[#a78bfa]"
                className="size-16 text-base"
              />
              <div className="flex-1">
                <p className="text-[13px] font-semibold">{studioProfile.name}</p>
                <p className="text-[11.5px] text-studio-muted">
                  {studioProfile.handle} · {studioProfile.flag} {studioProfile.city}
                </p>
                <button className="mt-2 text-[11.5px] font-medium text-studio-violet hover:underline">
                  Changer la photo
                </button>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Field label="Prénom" defaultValue={studioProfile.firstName} />
              <Field label="Nom" defaultValue={studioProfile.name.split(" ")[1]} />
              <Field label="Nom d'utilisateur" defaultValue={studioProfile.handle} />
              <Field label="Titre professionnel" defaultValue={studioProfile.title} />
            </div>

            <label className="mt-3 block text-[11.5px] font-medium text-studio-ink/70">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="mt-1.5 w-full resize-none rounded-xl border border-studio-border bg-studio-bg px-3 py-2.5 text-[12px] leading-relaxed outline-none transition-colors focus:border-studio-violet/50 focus:bg-studio-surface"
            />
          </SectionCard>

          {/* Type de collaboration */}
          <SectionCard
            title="Quel type de collaboration recherches-tu ?"
            subtitle="Cette réponse personnalise les campagnes que tu vois"
          >
            <div className="grid gap-2.5 sm:grid-cols-3">
              {collaborationOptions.map((option) => {
                const active = collaboration === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setCollaboration(option.id)}
                    className={cn(
                      "rounded-xl border p-3 text-left transition-all",
                      active
                        ? "border-studio-violet bg-studio-violet-soft"
                        : "border-studio-border bg-studio-bg hover:border-studio-violet/30",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-8 place-items-center rounded-lg",
                        active
                          ? "bg-studio-violet text-white"
                          : "bg-studio-surface text-studio-muted",
                      )}
                    >
                      <option.icon className="size-4" />
                    </span>
                    <span className="mt-2 block text-[12px] font-semibold">
                      {option.title}
                    </span>
                    <span className="mt-0.5 block text-[10.5px] leading-relaxed text-studio-muted">
                      {option.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </SectionCard>

          {/* Localisation + niches */}
          <SectionCard title="Localisation et niches">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="text-[11.5px] font-medium text-studio-ink/70">Pays</span>
                <select className="mt-1.5 h-10 w-full rounded-xl border border-studio-border bg-studio-bg px-3 text-[12px] outline-none focus:border-studio-violet/50">
                  <option>Niger</option>
                  <option>Côte d&apos;Ivoire</option>
                  <option>Sénégal</option>
                  <option>Mali</option>
                  <option>Ghana</option>
                  <option>Nigeria</option>
                </select>
              </label>
              <Field label="Ville" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>

            <p className="mt-4 text-[11.5px] font-medium text-studio-ink/70">
              Niches et spécialités
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {niches.map((niche) => {
                const active = selectedNiches.includes(niche);
                return (
                  <button
                    key={niche}
                    onClick={() => toggleNiche(niche)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-medium transition-colors",
                      active
                        ? "bg-studio-violet text-white"
                        : "bg-studio-soft text-studio-muted hover:text-studio-ink",
                    )}
                  >
                    {active && <Check className="size-3" strokeWidth={3} />}
                    {niche}
                  </button>
                );
              })}
            </div>
          </SectionCard>

          {/* Réseaux sociaux */}
          <SectionCard title="Réseaux sociaux" subtitle="Tes comptes principaux">
            <div className="space-y-2.5">
              {[
                { name: "TikTok", icon: UserRound, value: "@aichasani", followers: "120K" },
                { name: "Instagram", icon: Camera, value: "@aichasani", followers: "58K" },
                { name: "YouTube", icon: Video, value: "Aicha Sani", followers: "12K" },
              ].map((social) => (
                <div key={social.name} className="flex items-center gap-2.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-studio-soft text-studio-muted">
                    <social.icon className="size-4" />
                  </span>
                  <div className="flex-1">
                    <input
                      defaultValue={social.value}
                      className="h-9 w-full rounded-lg border border-studio-border bg-studio-bg px-2.5 text-[12px] outline-none focus:border-studio-violet/50 focus:bg-studio-surface"
                    />
                  </div>
                  <span className="w-14 shrink-0 text-right text-[11px] text-studio-muted">
                    {social.followers}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Services et tarifs */}
          <SectionCard
            title="Services et tarifs"
            subtitle="Tarifs indicatifs, modifiables à tout moment"
          >
            <div className="space-y-2">
              {studioProfile.services.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between gap-2 rounded-xl bg-studio-bg px-3 py-2.5"
                >
                  <span className="flex items-center gap-2 text-[12px] font-medium">
                    <Palette className="size-3.5 text-studio-muted" />
                    {service.name}
                  </span>
                  <span className="text-[12px] font-semibold">
                    {formatFcfa(service.price)} FCFA
                  </span>
                </div>
              ))}
            </div>
            <StudioButton variant="outline" size="sm" className="mt-3">
              Ajouter un service
            </StudioButton>
          </SectionCard>

          {/* Paiement */}
          <SectionCard
            title="Informations de paiement"
            subtitle="Pour recevoir tes revenus"
          >
            <div className="grid gap-2.5 sm:grid-cols-2">
              <div className="flex items-center gap-2.5 rounded-xl border border-studio-border bg-studio-bg px-3 py-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-studio-violet-soft text-studio-violet">
                  <Smartphone className="size-4" />
                </span>
                <div>
                  <p className="text-[11.5px] font-medium">Airtel Money</p>
                  <p className="text-[10.5px] text-studio-muted">+227 •• 42</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-studio-border bg-studio-bg px-3 py-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-studio-soft text-studio-muted">
                  <CreditCard className="size-4" />
                </span>
                <div>
                  <p className="text-[11.5px] font-medium">Banque</p>
                  <p className="text-[10.5px] text-studio-muted">BIA Niger •• 3041</p>
                </div>
              </div>
            </div>
            <p className="mt-2.5 text-[10.5px] leading-relaxed text-studio-muted">
              Tes informations sont chiffrées et utilisées uniquement pour les versements.
            </p>
          </SectionCard>
        </div>

        {/* Colonne latérale */}
        <div className="space-y-4">
          <SectionCard
            title="Complétude du profil"
            action={
              <span className="rounded-full bg-studio-violet-soft px-2.5 py-1 text-[11px] font-semibold text-studio-violet">
                {studioProfile.completion} %
              </span>
            }
          >
            <Progress value={studioProfile.completion} />
            <ul className="mt-3.5 space-y-2.5">
              {onboardingSteps.map((step) => (
                <li key={step.label} className="flex items-center gap-2.5 text-[11.5px]">
                  {step.done ? (
                    <CheckCircle2 className="size-4 shrink-0 text-[#2f6b1f]" />
                  ) : (
                    <span className="grid size-4 shrink-0 place-items-center rounded-full border border-dashed border-studio-border">
                      <span className="size-1.5 rounded-full bg-studio-muted/50" />
                    </span>
                  )}
                  <span className={step.done ? "text-studio-ink/60" : "font-medium text-studio-ink"}>
                    {step.label}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[10.5px] leading-relaxed text-studio-muted">
              Les profils complets apparaissent 3× plus souvent dans les shortlists.
            </p>
          </SectionCard>

          <SectionCard title="Ta réputation">
            <div className="flex items-baseline gap-1">
              <span className="text-[30px] font-semibold tracking-[-0.03em]">
                {studioProfile.reputation}
              </span>
              <span className="text-[11px] text-studio-muted">/ 100</span>
            </div>
            <div className="mt-3 space-y-2.5 text-[11.5px]">
              <Metric label="Taux de réponse" value={`${studioProfile.responseRate} %`} />
              <Metric label="Livrables à temps" value={`${studioProfile.onTime} %`} />
              <Metric label="Satisfaction marques" value={`${studioProfile.satisfaction} / 5`} />
            </div>
            <p className="mt-3 rounded-lg bg-studio-bg px-2.5 py-2 text-[10.5px] leading-relaxed text-studio-muted">
              Un score élevé rassure les marques — mais les petits créateurs ne sont jamais
              pénalisés automatiquement.
            </p>
          </SectionCard>

          <div className="rounded-2xl border border-dashed border-studio-border bg-studio-surface/60 p-4">
            <div className="flex items-center gap-2">
              <Wallet className="size-4 text-studio-violet" />
              <p className="text-[12px] font-semibold">Paiements sécurisés</p>
            </div>
            <p className="mt-1.5 text-[10.5px] leading-relaxed text-studio-muted">
              Kreator sécurise les budgets des campagnes et déclenche le versement après
              validation du livrable.
            </p>
          </div>
        </div>
      </div>

      {saved && (
        <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-studio-ink px-4 py-2.5 text-[12px] font-medium text-white shadow-studio-pop lg:bottom-6">
          <span className="inline-flex items-center gap-2">
            <Check className="size-4 text-studio-lime" />
            Profil enregistré
          </span>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  defaultValue,
  value,
  onChange,
}: {
  label: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block">
      <span className="text-[11.5px] font-medium text-studio-ink/70">{label}</span>
      <input
        defaultValue={value === undefined ? defaultValue : undefined}
        value={value}
        onChange={onChange}
        className="mt-1.5 h-10 w-full rounded-xl border border-studio-border bg-studio-bg px-3 text-[12px] outline-none transition-colors focus:border-studio-violet/50 focus:bg-studio-surface"
      />
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-studio-muted">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
