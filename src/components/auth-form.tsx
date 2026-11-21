"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.9-.1-1.7-.2-2.5H12v4.8h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2a7 7 0 0 1-6.6-4.8H1.4v3.1A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.5a7.2 7.2 0 0 1 0-4.6V6.8H1.4a12 12 0 0 0 0 10.7l4-3Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.4 6.8l4 3.1A7 7 0 0 1 12 4.8Z"
      />
    </svg>
  );
}

const fieldClass =
  "h-11 w-full rounded-xl border border-line bg-white px-3.5 text-[13.5px] text-ink placeholder:text-muted/50 transition-shadow focus:border-clay/60 focus:outline-none focus:ring-4 focus:ring-clay/10";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const isSignup = mode === "signup";
  const [role, setRole] = useState<"brand" | "creator">("brand");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-[400px]">
      <h1 className="text-[28px] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[32px]">
        {isSignup ? "Bienvenue sur Kreator." : "Content de te revoir."}
      </h1>
      <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
        {isSignup
          ? "Crée ton espace en 2 minutes. Aucune carte bancaire requise."
          : "Connecte-toi pour retrouver tes campagnes et tes créateurs."}
      </p>

      {isSignup && (
        <div className="mt-5 grid grid-cols-2 gap-1 rounded-full border border-line bg-white/60 p-1">
          {[
            { id: "brand" as const, label: "Je suis une marque" },
            { id: "creator" as const, label: "Je suis créateur" },
          ].map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setRole(option.id)}
              className={cn(
                "rounded-full py-2 text-[12px] font-medium transition-colors",
                role === option.id
                  ? "bg-ink text-cream"
                  : "text-muted hover:text-ink",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        className="mt-5 flex h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-line bg-white text-[13px] font-medium transition-colors hover:bg-cream-2"
      >
        <GoogleIcon className="size-4" />
        Continuer avec Google
      </button>

      <div className="my-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-line" />
        <span className="text-[10.5px] uppercase tracking-[0.12em] text-muted">
          ou
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {isSignup && (
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-[11.5px] font-medium text-ink/70"
            >
              {role === "brand" ? "Nom de la marque" : "Nom complet"}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={
                role === "brand" ? "Ex. Wave" : "Ex. Awa Diallo"
              }
              className={fieldClass}
            />
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-[11.5px] font-medium text-ink/70"
          >
            Email professionnel
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="toi@marque.com"
            className={fieldClass}
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-[11.5px] font-medium text-ink/70"
            >
              Mot de passe
            </label>
            {!isSignup && (
              <Link
                href="#"
                className="text-[11px] font-medium text-clay hover:text-clay-dark"
              >
                Mot de passe oublié ?
              </Link>
            )}
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete={isSignup ? "new-password" : "current-password"}
            placeholder={isSignup ? "8 caractères minimum" : "••••••••"}
            className={fieldClass}
          />
        </div>

        {isSignup && (
          <label className="flex items-start gap-2.5 pt-1 text-[11.5px] leading-relaxed text-muted">
            <input
              type="checkbox"
              required
              className="mt-0.5 size-3.5 rounded border-line accent-clay"
            />
            <span>
              J&apos;accepte les{" "}
              <Link href="#" className="text-ink underline underline-offset-2">
                conditions d&apos;utilisation
              </Link>{" "}
              et la politique de confidentialité de Kreator.
            </span>
          </label>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-clay text-[13.5px] font-semibold text-white transition-all hover:bg-clay-dark disabled:opacity-70"
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              {isSignup ? "Créer mon compte" : "Se connecter"}
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </form>

      {isSignup && (
        <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted">
          <Check className="size-3 text-forest" strokeWidth={3} />
          Gratuit · Sans engagement · Sans carte bancaire
        </p>
      )}

      <p className="mt-6 text-center text-[12.5px] text-muted">
        {isSignup ? "Tu as déjà un compte ?" : "Pas encore de compte ?"}{" "}
        <Link
          href={isSignup ? "/connexion" : "/inscription"}
          className="font-semibold text-ink underline decoration-line underline-offset-4 hover:text-clay"
        >
          {isSignup ? "Se connecter" : "Créer un compte"}
        </Link>
      </p>
    </div>
  );
}
