import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kreator — Create. Connect. Grow.",
    template: "%s · Kreator",
  },
  description:
    "Kreator connecte les marques africaines aux créateurs de contenu du continent. Découvrez, collaborez et pilotez vos campagnes UGC depuis une seule plateforme.",
  keywords: [
    "creator marketing",
    "UGC",
    "Afrique",
    "marques",
    "créateurs",
    "campagnes",
    "influence",
  ],
  openGraph: {
    title: "Kreator — Create. Connect. Grow.",
    description:
      "La plateforme panafricaine qui connecte les marques aux créateurs de contenu.",
    siteName: "Kreator",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${inter.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
