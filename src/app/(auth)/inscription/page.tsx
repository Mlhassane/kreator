import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = {
  title: "Créer un compte",
  description:
    "Crée ton compte Kreator en 2 minutes et lance ta première campagne.",
};

export default function SignupPage() {
  return <AuthForm mode="signup" />;
}
