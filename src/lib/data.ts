export type Creator = {
  slug: string;
  name: string;
  handle: string;
  city: string;
  country: string;
  flag: string;
  niche: string;
  tags: string[];
  followers: number;
  engagement: number;
  price: number;
  gradient: string;
  accent: string;
  photo: string;
  verified: boolean;
  socials: {
    tiktok: number;
    instagram: number;
    youtube: number;
  };
};

export const creators: Creator[] = [
  {
    slug: "aicha-sani",
    name: "Aicha Sani",
    handle: "@aichasani",
    city: "Niamey",
    country: "Niger",
    flag: "🇳🇪",
    niche: "Beauté",
    tags: ["Beauté", "Mode", "Lifestyle"],
    followers: 190_000,
    engagement: 6.8,
    price: 185_000,
    gradient: "from-[#D9502B] via-[#B23E1E] to-[#3B1B12]",
    accent: "#F7D9CE",
    photo: "/creators/aicha.jpg",
    verified: true,
    socials: { tiktok: 120_000, instagram: 58_000, youtube: 12_000 },
  },
  {
    slug: "moussa-tech",
    name: "Moussa Tech",
    handle: "@moussatech",
    city: "Niamey",
    country: "Niger",
    flag: "🇳🇪",
    niche: "Tech",
    tags: ["Tech", "Tests", "Tutoriels"],
    followers: 155_000,
    engagement: 4.6,
    price: 220_000,
    gradient: "from-[#123A2C] via-[#1A4D3B] to-[#081C15]",
    accent: "#CDE8D8",
    photo: "/creators/moussa.jpg",
    verified: true,
    socials: { tiktok: 85_000, instagram: 42_000, youtube: 28_000 },
  },
  {
    slug: "hawa-moda",
    name: "Hawa Moda",
    handle: "@hawamoda",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    niche: "Mode",
    tags: ["Mode", "Lifestyle", "Shopping"],
    followers: 382_000,
    engagement: 5.2,
    price: 320_000,
    gradient: "from-[#EFA92F] via-[#D98A1E] to-[#5C3A08]",
    accent: "#FBE7BD",
    photo: "/creators/hawa.jpg",
    verified: true,
    socials: { tiktok: 210_000, instagram: 135_000, youtube: 37_000 },
  },
  {
    slug: "ibrahim-food",
    name: "Ibrahim Food",
    handle: "@ibrahimfood",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    niche: "Food",
    tags: ["Food", "Restaurants", "Vlog"],
    followers: 317_000,
    engagement: 7.4,
    price: 280_000,
    gradient: "from-[#8B3A62] via-[#5E2544] to-[#2A0F1F]",
    accent: "#F3D3E3",
    photo: "/creators/ibrahim.jpg",
    verified: true,
    socials: { tiktok: 180_000, instagram: 96_000, youtube: 41_000 },
  },
  {
    slug: "fatima-wellness",
    name: "Fatima Wellness",
    handle: "@fatimawellness",
    city: "Niamey",
    country: "Niger",
    flag: "🇳🇪",
    niche: "Bien-être",
    tags: ["Santé", "Bien-être", "Sport"],
    followers: 126_000,
    engagement: 8.1,
    price: 140_000,
    gradient: "from-[#2B5F8A] via-[#1C4263] to-[#0A1B2A]",
    accent: "#CFE6F7",
    photo: "/creators/fatima.jpg",
    verified: true,
    socials: { tiktok: 62_000, instagram: 49_000, youtube: 15_000 },
  },
  {
    slug: "abdou-voyage",
    name: "Abdou Voyage",
    handle: "@abdou.voyage",
    city: "Dakar",
    country: "Sénégal",
    flag: "🇸🇳",
    niche: "Voyage",
    tags: ["Voyage", "Découverte", "Culture"],
    followers: 323_000,
    engagement: 5.9,
    price: 300_000,
    gradient: "from-[#4A3B8F] via-[#322768] to-[#150F33]",
    accent: "#DED8FB",
    photo: "/creators/abdou.jpg",
    verified: true,
    socials: { tiktok: 190_000, instagram: 88_000, youtube: 45_000 },
  },
  {
    slug: "rayanatou-beauty",
    name: "Rayanatou Beauty",
    handle: "@rayanatou.beauty",
    city: "Niamey",
    country: "Niger",
    flag: "🇳🇪",
    niche: "Beauté",
    tags: ["Beauté", "Soins", "Conseils"],
    followers: 275_000,
    engagement: 6.5,
    price: 240_000,
    gradient: "from-[#B23E1E] via-[#8B3A62] to-[#2A0F1F]",
    accent: "#F7D9CE",
    photo: "/creators/rayanatou.jpg",
    verified: true,
    socials: { tiktok: 145_000, instagram: 97_000, youtube: 33_000 },
  },
  {
    slug: "oumar-business",
    name: "Oumar Business",
    handle: "@oumar.business",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    niche: "Business",
    tags: ["Entrepreneuriat", "Business", "Finance"],
    followers: 149_000,
    engagement: 4.2,
    price: 210_000,
    gradient: "from-[#2B5F8A] via-[#1C4263] to-[#0A1B2A]",
    accent: "#CFE6F7",
    photo: "/creators/oumar.jpg",
    verified: true,
    socials: { tiktok: 78_000, instagram: 52_000, youtube: 19_000 },
  },
  {
    slug: "zara-cuisine",
    name: "Zara Cuisine",
    handle: "@zara.cuisine",
    city: "Niamey",
    country: "Niger",
    flag: "🇳🇪",
    niche: "Cuisine",
    tags: ["Cuisine", "Recettes", "Astuces"],
    followers: 203_000,
    engagement: 7.8,
    price: 190_000,
    gradient: "from-[#EFA92F] via-[#D98A1E] to-[#5C3A08]",
    accent: "#FBE7BD",
    photo: "/creators/zara.jpg",
    verified: true,
    socials: { tiktok: 105_000, instagram: 71_000, youtube: 27_000 },
  },
  {
    slug: "idriss-gaming",
    name: "Idriss Gaming",
    handle: "@idriss.gaming",
    city: "Niamey",
    country: "Niger",
    flag: "🇳🇪",
    niche: "Gaming",
    tags: ["Gaming", "Tech", "Divertissement"],
    followers: 198_000,
    engagement: 9.1,
    price: 250_000,
    gradient: "from-[#4A3B8F] via-[#322768] to-[#150F33]",
    accent: "#DED8FB",
    photo: "/creators/idriss.jpg",
    verified: true,
    socials: { tiktok: 92_000, instagram: 46_000, youtube: 60_000 },
  },
];

export const brandLogos = [
  "Wave",
  "Jumia",
  "Orange",
  "MTN",
  "Flutterwave",
  "Ecobank",
  "Shoprite",
  "Paystack",
  "BICIS",
  "KFC",
];

export const stats = [
  { value: "2 400+", label: "créateurs vérifiés" },
  { value: "18", label: "pays couverts" },
  { value: "4 200", label: "campagnes livrées" },
  { value: "92 %", label: "de marques satisfaites" },
];

export const steps = [
  {
    number: "01",
    title: "Décris ta campagne",
    body: "Objectif, budget, audience, livrables. Un brief clair en 5 minutes, pas un appel de 2 heures.",
  },
  {
    number: "02",
    title: "Reçois une shortlist",
    body: "Notre algorithme et nos talent managers te proposent les créateurs les plus pertinents, par marché et par niche.",
  },
  {
    number: "03",
    title: "Collabore et valide",
    body: "Brief, contenus, allers-retours et validation directement dans la plateforme. Zéro DM perdu.",
  },
  {
    number: "04",
    title: "Paie et mesure",
    body: "Paiement sécurisé en FCFA ou en devise locale, puis reporting consolidé sur chaque contenu publié.",
  },
];

export const testimonials = [
  {
    quote:
      "On a lancé une campagne UGC sur trois marchés en dix jours. Avant Kreator, il nous fallait un mois et une équipe d'agences.",
    name: "Aminata Sow",
    role: "Head of Brand, Wave",
    initials: "AS",
    tone: "clay",
  },
  {
    quote:
      "Je gère mes collaborations, mes briefs et mes paiements au même endroit. J'ai doublé mes revenus en six mois.",
    name: "Ibrahim Food",
    role: "Créateur food, Abidjan",
    initials: "IF",
    tone: "forest",
  },
  {
    quote:
      "Le reporting est enfin lisible par notre comité de direction. On sait exactement quel créateur a fait bouger la marque.",
    name: "Kofi Mensah",
    role: "Marketing Director, Jumia",
    initials: "KM",
    tone: "gold",
  },
];

export const pricing = [
  {
    name: "Découverte",
    price: "0",
    period: "pour toujours",
    description: "Pour tester la plateforme et lancer une première campagne.",
    cta: "Commencer gratuitement",
    features: [
      "Accès à 40 profils créateurs",
      "1 campagne active",
      "Briefs et livrables illimités",
      "Paiement sécurisé à la main",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "149 000",
    period: "FCFA / mois",
    description: "Pour les marques qui font du contenu un canal de croissance.",
    cta: "Passer à Growth",
    features: [
      "Créateurs illimités, 18 pays",
      "Campagnes et équipes illimitées",
      "Shortlist assistée par Kreator AI",
      "Analytics et reporting exportable",
      "Paiements FCFA, GHS, NGN, KES",
      "Chargé de compte dédié",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Sur devis",
    period: "annuel",
    description: "Pour les groupes et les agences multi-marchés.",
    cta: "Parler à l'équipe",
    features: [
      "Tout Growth, sans limite",
      "Accès API et SSO",
      "Gestion de plusieurs marques",
      "Talent managers dédiés",
      "Contrats et conformité locale",
      "SLA et support prioritaire",
    ],
    highlight: false,
  },
];

export const faqs = [
  {
    q: "Dans quels pays Kreator est-il disponible ?",
    a: "Kreator couvre aujourd'hui 18 pays africains, avec une forte présence au Sénégal, en Côte d'Ivoire, au Nigeria, au Ghana, au Kenya, au Maroc et en Afrique du Sud. Les paiements sont disponibles en FCFA, GHS, NGN, KES, MAD et ZAR.",
  },
  {
    q: "Comment les créateurs sont-ils vérifiés ?",
    a: "Chaque profil passe un contrôle manuel : identité, audience réelle, qualité des contenus et historique de collaboration. Les profils qui gonflent leurs chiffres sont écartés. Tu vois toujours les statistiques sur les 90 derniers jours.",
  },
  {
    q: "Combien de temps pour lancer une campagne ?",
    a: "Un brief prend 5 minutes. La shortlist arrive en moins de 48 heures. En moyenne, une campagne est live en 7 à 10 jours, contre 4 à 6 semaines avec le processus classique.",
  },
  {
    q: "Qui possède les droits sur les contenus ?",
    a: "Les droits d'usage sont définis dans le brief et le contrat généré par Kreator. Par défaut, la marque obtient une licence organique et paid media de 12 mois sur les marchés sélectionnés.",
  },
  {
    q: "Comment fonctionnent les paiements ?",
    a: "Kreator sécurise le budget, verse les créateurs à la validation des livrables et gère les factures. Plus de virements internationaux, plus de captures d'écran WhatsApp comme preuve de paiement.",
  },
  {
    q: "Et si je suis une agence ?",
    a: "Le plan Scale est fait pour toi : plusieurs marques, accès API, rôles personnalisés et reporting en marque blanche pour tes clients.",
  },
];

export const navLinks = [
  { label: "Comment ça marche", href: "/#comment-ca-marche" },
  { label: "Marques", href: "/marques" },
  { label: "Créateurs", href: "/createurs" },
  { label: "Tarifs", href: "/tarifs" },
];
