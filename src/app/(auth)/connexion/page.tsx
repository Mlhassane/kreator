import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connecte-toi à ton espace Kreator.",
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
