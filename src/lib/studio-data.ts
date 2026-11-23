export type CampaignType = "ugc" | "influencer";

export type CampaignStatus =
  | "applied"
  | "accepted"
  | "contract"
  | "production"
  | "submitted"
  | "revision"
  | "approved"
  | "payment"
  | "paid";

export const statusMeta: Record<
  CampaignStatus,
  { label: string; step: number; tone: "neutral" | "accent" | "warning" | "success" | "info" }
> = {
  applied: { label: "Candidature envoyée", step: 1, tone: "neutral" },
  accepted: { label: "Candidature acceptée", step: 2, tone: "accent" },
  contract: { label: "Contrat à signer", step: 3, tone: "warning" },
  production: { label: "Production en cours", step: 4, tone: "accent" },
  submitted: { label: "Contenu soumis", step: 5, tone: "info" },
  revision: { label: "Révision demandée", step: 6, tone: "warning" },
  approved: { label: "Contenu validé", step: 7, tone: "success" },
  payment: { label: "Paiement en traitement", step: 8, tone: "info" },
  paid: { label: "Paiement effectué", step: 9, tone: "success" },
};

export const statusOrder: CampaignStatus[] = [
  "applied",
  "accepted",
  "contract",
  "production",
  "submitted",
  "revision",
  "approved",
  "payment",
  "paid",
];

export type StudioProfile = {
  firstName: string;
  name: string;
  handle: string;
  slug: string;
  city: string;
  country: string;
  flag: string;
  title: string;
  bio: string;
  avatar: string;
  niches: string[];
  services: { name: string; price: number; note: string }[];
  socials: { tiktok: number; instagram: number; youtube: number };
  completion: number;
  reputation: number;
  verified: boolean;
  responseRate: number;
  onTime: number;
  satisfaction: number;
  collaborationType: "ugc" | "influencer" | "both";
};

export const studioProfile: StudioProfile = {
  firstName: "Aïcha",
  name: "Aïcha Sani",
  handle: "@aichasani",
  slug: "aicha-sani",
  city: "Niamey",
  country: "Niger",
  flag: "🇳🇪",
  title: "UGC Creator · Beauty · Lifestyle",
  bio: "Je crée des contenus authentiques qui aident les marques à raconter leur histoire.",
  avatar: "/creators/aicha.jpg",
  niches: ["Beauté", "Skincare", "Lifestyle"],
  services: [
    { name: "Vidéo UGC", price: 25_000, note: "à partir de" },
    { name: "Product Review", price: 35_000, note: "à partir de" },
    { name: "Unboxing", price: 30_000, note: "à partir de" },
    { name: "Testimonial", price: 40_000, note: "à partir de" },
  ],
  socials: { tiktok: 120_000, instagram: 58_000, youtube: 12_000 },
  completion: 85,
  reputation: 92,
  verified: true,
  responseRate: 98,
  onTime: 96,
  satisfaction: 4.9,
  collaborationType: "both",
};

export type MyCampaign = {
  id: string;
  brand: string;
  brandInitials: string;
  brandTone: string;
  title: string;
  type: CampaignType;
  status: CampaignStatus;
  budget: number;
  deliverables: string[];
  deadline: string;
  progress: number;
  unread: number;
  brief: string;
  requirements: string[];
  files: { name: string; type: string; size: string }[];
  comments: { author: string; initials: string; time: string; text: string }[];
  payments: { label: string; amount: number; date: string; status: "paid" | "pending" }[];
};

export const myCampaigns: MyCampaign[] = [
  {
    id: "beaute-naturelle",
    brand: "Beauty Africa",
    brandInitials: "BA",
    brandTone: "from-[#d9502b] to-[#efa92f]",
    title: "Beauté Naturelle",
    type: "ugc",
    status: "production",
    budget: 75_000,
    deliverables: ["3 vidéos UGC", "Format vertical 9:16", "Sous-titres FR"],
    deadline: "28 nov. 2026",
    progress: 62,
    unread: 2,
    brief:
      "Lancement de la nouvelle gamme skincare « Éclat Naturel ». On veut des vidéos authentiques, lumière naturelle, pas de studio. Montre la texture des produits et parle de ta routine réelle.",
    requirements: [
      "3 vidéos de 20 à 35 secondes",
      "Hook dans les 3 premières secondes",
      "Voix off en français, sous-titres inclus",
      "Montrer le packaging et la texture",
      "Aucune musique soumise à droits",
    ],
    files: [
      { name: "brief-beauty-africa.pdf", type: "PDF", size: "2,4 Mo" },
      { name: "moodboard-eclat-naturel.zip", type: "ZIP", size: "18,1 Mo" },
      { name: "logo-beauty-africa.svg", type: "SVG", size: "42 Ko" },
    ],
    comments: [
      {
        author: "Nadia · Beauty Africa",
        initials: "NB",
        time: "Il y a 12 min",
        text: "La première vidéo est top ! Sur la deuxième, on aimerait voir le produit dès la 2e seconde.",
      },
      {
        author: "Aïcha",
        initials: "AS",
        time: "Il y a 8 min",
        text: "Noté, je réajuste le montage ce soir et je te renvoie une version.",
      },
    ],
    payments: [
      { label: "Acompte 50 %", amount: 37_500, date: "14 nov. 2026", status: "paid" },
      { label: "Solde à validation", amount: 37_500, date: "28 nov. 2026", status: "pending" },
    ],
  },
  {
    id: "tech-lifestyle",
    brand: "Digital Store",
    brandInitials: "DS",
    brandTone: "from-[#123a2c] to-[#3f8f6b]",
    title: "Tech & Lifestyle",
    type: "ugc",
    status: "submitted",
    budget: 50_000,
    deliverables: ["2 vidéos UGC", "Démo produit", "Format 9:16"],
    deadline: "26 nov. 2026",
    progress: 80,
    unread: 1,
    brief:
      "Présente notre nouvelle enceinte connectée dans un contexte lifestyle. Montre le son, l'autonomie et le design. Ton naturel, comme une recommandation à une amie.",
    requirements: [
      "2 vidéos de 25 à 40 secondes",
      "Démo du produit en situation réelle",
      "Un plan macro sur les détails",
      "Sous-titres FR obligatoires",
    ],
    files: [
      { name: "fiche-produit-enceinte.pdf", type: "PDF", size: "1,1 Mo" },
      { name: "visuels-packshot.zip", type: "ZIP", size: "9,6 Mo" },
    ],
    comments: [
      {
        author: "Yann · Digital Store",
        initials: "YD",
        time: "Il y a 1 h",
        text: "Reçu les deux vidéos, merci ! Peux-tu ajuster le hook de la vidéo 2 pour parler de l'autonomie ?",
      },
    ],
    payments: [
      { label: "Paiement à validation", amount: 50_000, date: "26 nov. 2026", status: "pending" },
    ],
  },
  {
    id: "collection-fete",
    brand: "Fashion House",
    brandInitials: "FH",
    brandTone: "from-[#b23e1e] to-[#e07a4f]",
    title: "Collection Fête",
    type: "influencer",
    status: "approved",
    budget: 25_000,
    deliverables: ["2 reels", "3 stories", "Lien en bio 7 jours"],
    deadline: "18 nov. 2026",
    progress: 100,
    unread: 0,
    brief:
      "Campagne influence pour la collection de fête. Deux reels publiés sur ton compte et trois stories avec swipe-up. Garde ton ton et ton style.",
    requirements: [
      "2 reels sur Instagram",
      "3 stories avec lien",
      "Mention @fashionhouse + #FHCollection",
      "Statistiques à J+7",
    ],
    files: [{ name: "lookbook-fete.pdf", type: "PDF", size: "6,2 Mo" }],
    comments: [
      {
        author: "Awa · Fashion House",
        initials: "AF",
        time: "Hier",
        text: "Merci pour ton travail 🙌 Les deux reels ont dépassé nos attentes.",
      },
    ],
    payments: [
      { label: "Paiement effectué", amount: 25_000, date: "19 nov. 2026", status: "paid" },
    ],
  },
  {
    id: "wave-cash",
    brand: "Wave",
    brandInitials: "W",
    brandTone: "from-[#8a5a00] to-[#d9a24a]",
    title: "Campagne Wave Cash",
    type: "influencer",
    status: "payment",
    budget: 60_000,
    deliverables: ["1 reel", "2 stories", "Code promo"],
    deadline: "15 nov. 2026",
    progress: 100,
    unread: 0,
    brief:
      "Promouvoir Wave Cash auprès de ton audience. Un reel explicatif, deux stories avec ton code promo personnel. Suivi des conversions sur 14 jours.",
    requirements: [
      "1 reel explicatif de 30 s",
      "2 stories avec code promo",
      "Lien de suivi fourni",
      "Rapport à J+14",
    ],
    files: [{ name: "kit-wave-cash.pdf", type: "PDF", size: "3,3 Mo" }],
    comments: [
      {
        author: "Aminata · Wave",
        initials: "AS",
        time: "Hier",
        text: "Paiement lancé, tu le recevras sous 48 h. Merci pour la qualité !",
      },
    ],
    payments: [
      { label: "Paiement en traitement", amount: 60_000, date: "22 nov. 2026", status: "pending" },
    ],
  },
  {
    id: "black-friday",
    brand: "Jumia",
    brandInitials: "J",
    brandTone: "from-[#f59e0b] to-[#fbbf24]",
    title: "Black Friday Teaser",
    type: "ugc",
    status: "contract",
    budget: 45_000,
    deliverables: ["1 vidéo UGC", "Format 9:16", "Version 15 s"],
    deadline: "30 nov. 2026",
    progress: 30,
    unread: 0,
    brief:
      "Teaser Black Friday pour nos offres électronique. Une vidéo punchy, énergie positive, qui donne envie de cliquer. Le contrat est prêt à signer.",
    requirements: [
      "1 vidéo de 15 à 30 secondes",
      "Annonce claire des offres",
      "Sous-titres FR",
      "Signature du contrat avant production",
    ],
    files: [{ name: "contrat-jumia.pdf", type: "PDF", size: "840 Ko" }],
    comments: [],
    payments: [{ label: "Paiement à validation", amount: 45_000, date: "30 nov. 2026", status: "pending" }],
  },
  {
    id: "data-streaming",
    brand: "Orange",
    brandInitials: "O",
    brandTone: "from-[#ea580c] to-[#fb923c]",
    title: "Data & Streaming",
    type: "influencer",
    status: "applied",
    budget: 80_000,
    deliverables: ["2 reels", "1 story"],
    deadline: "5 déc. 2026",
    progress: 10,
    unread: 0,
    brief:
      "Campagne autour des nouveaux forfaits data. Deux reels montrant ton usage réel du streaming, une story avec le lien de souscription.",
    requirements: [
      "2 reels de 30 s",
      "1 story avec lien",
      "Mention @orange + #OrangeData",
    ],
    files: [],
    comments: [],
    payments: [{ label: "En attente de sélection", amount: 80_000, date: "—", status: "pending" }],
  },
  {
    id: "panier-malin",
    brand: "Shoprite",
    brandInitials: "S",
    brandTone: "from-[#dc2626] to-[#f87171]",
    title: "Panier Malin",
    type: "ugc",
    status: "revision",
    budget: 35_000,
    deliverables: ["2 vidéos UGC", "Format 9:16"],
    deadline: "22 nov. 2026",
    progress: 85,
    unread: 0,
    brief:
      "Montre comment composer un panier malin avec nos produits du quotidien. Deux vidéos courtes, rythme rapide, ton complice.",
    requirements: [
      "2 vidéos de 20 à 30 secondes",
      "Produits bien identifiables",
      "Sous-titres FR",
    ],
    files: [{ name: "liste-produits.xlsx", type: "XLSX", size: "120 Ko" }],
    comments: [
      {
        author: "Moussa · Shoprite",
        initials: "MS",
        time: "Il y a 3 h",
        text: "Presque parfait. Peux-tu raccourcir l'intro de 2 secondes sur la vidéo 2 ?",
      },
    ],
    payments: [{ label: "Paiement à validation", amount: 35_000, date: "22 nov. 2026", status: "pending" }],
  },
  {
    id: "momo-promo",
    brand: "MTN",
    brandInitials: "M",
    brandTone: "from-[#facc15] to-[#fde047]",
    title: "MoMo Promo",
    type: "influencer",
    status: "paid",
    budget: 55_000,
    deliverables: ["1 reel", "1 story"],
    deadline: "10 nov. 2026",
    progress: 100,
    unread: 0,
    brief:
      "Promotion de MoMo. Un reel de démonstration et une story avec le lien d'activation. Campagne terminée et payée.",
    requirements: ["1 reel de 30 s", "1 story avec lien"],
    files: [],
    comments: [],
    payments: [{ label: "Paiement effectué", amount: 55_000, date: "12 nov. 2026", status: "paid" }],
  },
];

export type Opportunity = {
  id: string;
  brand: string;
  brandInitials: string;
  brandTone: string;
  title: string;
  sector: string;
  city: string;
  country: string;
  type: CampaignType;
  deliverables: string;
  budget: number;
  deadline: string;
  applicants: number;
  verified: boolean;
  tags: string[];
  match: number;
  posted: string;
  description: string;
  access?: "open" | "private";
};

export const opportunities: Opportunity[] = [
  {
    id: "beauty-africa-skincare",
    brand: "Beauty Africa",
    brandInitials: "BA",
    brandTone: "from-[#d9502b] to-[#efa92f]",
    title: "Nouvelle collection skincare",
    sector: "Beauté & Lifestyle",
    city: "Niamey",
    country: "Niger",
    type: "ugc",
    deliverables: "3 vidéos",
    budget: 75_000,
    deadline: "30 nov. 2026",
    applicants: 24,
    verified: true,
    tags: ["Beauté", "Skincare", "UGC"],
    match: 96,
    posted: "Il y a 2 h",
    description:
      "Lancement d'une gamme skincare naturelle. On cherche des créateurs capables de montrer la texture et de raconter une routine authentique.",
  },
  {
    id: "digital-store-tech",
    brand: "Digital Store",
    brandInitials: "DS",
    brandTone: "from-[#123a2c] to-[#3f8f6b]",
    title: "Tech & Lifestyle — lancement",
    sector: "Technologie",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    type: "ugc",
    deliverables: "2 vidéos",
    budget: 50_000,
    deadline: "28 nov. 2026",
    applicants: 18,
    verified: true,
    tags: ["Tech", "Tests", "Tutoriels"],
    match: 91,
    posted: "Il y a 5 h",
    description:
      "Présentation d'une enceinte connectée en situation lifestyle. Démonstration du son, de l'autonomie et du design.",
  },
  {
    id: "glowlab-routine",
    brand: "GlowLab",
    brandInitials: "GL",
    brandTone: "from-[#9d3b5b] to-[#d98aa3]",
    title: "Routine éclat 7 jours",
    sector: "Beauté & Lifestyle",
    city: "Dakar",
    country: "Sénégal",
    type: "influencer",
    deliverables: "3 posts + 1 reel",
    budget: 120_000,
    deadline: "5 déc. 2026",
    applicants: 41,
    verified: true,
    tags: ["Beauté", "Soins", "Influence"],
    match: 88,
    posted: "Hier",
    description:
      "Campagne influence autour d'une routine éclat de 7 jours. Publication sur ton compte principal et stories quotidiennes.",
  },
  {
    id: "teranga-food",
    brand: "Teranga Foods",
    brandInitials: "TF",
    brandTone: "from-[#c2410c] to-[#fdba74]",
    title: "Street food challenge",
    sector: "Food",
    city: "Dakar",
    country: "Sénégal",
    type: "ugc",
    deliverables: "1 vidéo",
    budget: 40_000,
    deadline: "24 nov. 2026",
    applicants: 12,
    verified: false,
    tags: ["Food", "Restaurants", "Vlog"],
    match: 84,
    posted: "Il y a 1 j",
    description:
      "Challenge street food autour de nos sauces. Une vidéo courte, énergique, tournée sur le terrain.",
  },
  {
    id: "zuri-tech-lagos",
    brand: "Zuri Tech",
    brandInitials: "ZT",
    brandTone: "from-[#3f4a2e] to-[#d9a24a]",
    title: "Test smartphone nouvelle génération",
    sector: "Technologie",
    city: "Lagos",
    country: "Nigeria",
    type: "influencer",
    deliverables: "1 vidéo + 2 stories",
    budget: 180_000,
    deadline: "8 déc. 2026",
    applicants: 57,
    verified: true,
    tags: ["Tech", "Review", "Influence"],
    match: 79,
    posted: "Il y a 2 j",
    description:
      "Test complet du nouveau smartphone. Publication sur YouTube et stories Instagram avec lien affilié.",
    access: "private",
  },
  {
    id: "sahel-style",
    brand: "Sahel Style",
    brandInitials: "SS",
    brandTone: "from-[#a16207] to-[#fcd34d]",
    title: "Collection saison sèche",
    sector: "Mode",
    city: "Niamey",
    country: "Niger",
    type: "ugc",
    deliverables: "4 vidéos",
    budget: 95_000,
    deadline: "2 déc. 2026",
    applicants: 9,
    verified: true,
    tags: ["Mode", "Lifestyle", "Shopping"],
    match: 93,
    posted: "Il y a 3 h",
    description:
      "Collection capsule inspirée du Sahel. On cherche des vidéos UGC lumineuses, en extérieur, avec un ton élégant et moderne.",
  },
  {
    id: "novapay-demo",
    brand: "NovaPay",
    brandInitials: "NP",
    brandTone: "from-[#2f6b5e] to-[#7fbfae]",
    title: "Démo app de paiement",
    sector: "Fintech",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    type: "ugc",
    deliverables: "2 vidéos",
    budget: 65_000,
    deadline: "27 nov. 2026",
    applicants: 31,
    verified: true,
    tags: ["Tech", "Finance", "Tutoriels"],
    match: 86,
    posted: "Hier",
    description:
      "Démonstration simple et pédagogique de l'application. On veut des vidéos claires, sans jargon, qui rassurent.",
  },
  {
    id: "kora-unboxing",
    brand: "Kora Beauty",
    brandInitials: "KB",
    brandTone: "from-[#6b3f2a] to-[#b98a6a]",
    title: "Unboxing coffret",
    sector: "Beauté & Lifestyle",
    city: "Bamako",
    country: "Mali",
    type: "ugc",
    deliverables: "1 vidéo",
    budget: 35_000,
    deadline: "21 nov. 2026",
    applicants: 7,
    verified: true,
    tags: ["Beauté", "Unboxing", "UGC"],
    match: 90,
    posted: "Il y a 6 h",
    description:
      "Unboxing du coffret de fin d'année. Ouverture, découverte produit par produit, réaction authentique.",
  },
  {
    id: "orange-data",
    brand: "Orange",
    brandInitials: "O",
    brandTone: "from-[#ea580c] to-[#fb923c]",
    title: "Campagne Data & Streaming",
    sector: "Télécom",
    city: "Niamey",
    country: "Niger",
    type: "influencer",
    deliverables: "2 reels",
    budget: 150_000,
    deadline: "12 déc. 2026",
    applicants: 63,
    verified: true,
    tags: ["Tech", "Divertissement", "Influence"],
    match: 74,
    posted: "Il y a 4 j",
    description:
      "Mise en avant des forfaits data. Deux reels montrant ton usage réel du streaming et des appels vidéo.",
    access: "private",
  },
];

export type EarningRow = {
  date: string;
  brand: string;
  label: string;
  amount: number;
  status: "paid" | "pending" | "available";
};

export const earningsSummary = {
  available: 125_000,
  pending: 75_000,
  total: 450_000,
  thisMonth: 285_000,
  feeNote: "Aucun frais sur les retraits Mobile Money. Les virements bancaires sont facturés 1 000 FCFA.",
};

export const earningRows: EarningRow[] = [
  { date: "22 nov. 2026", brand: "Wave", label: "Campagne Wave Cash", amount: 60_000, status: "pending" },
  { date: "19 nov. 2026", brand: "Fashion House", label: "Collection Fête", amount: 25_000, status: "paid" },
  { date: "12 nov. 2026", brand: "MTN", label: "MoMo Promo", amount: 55_000, status: "paid" },
  { date: "08 nov. 2026", brand: "Digital Store", label: "Acompte Tech & Lifestyle", amount: 50_000, status: "available" },
  { date: "02 nov. 2026", brand: "Beauty Africa", label: "Acompte Beauté Naturelle", amount: 37_500, status: "available" },
  { date: "28 oct. 2026", brand: "Shoprite", label: "Panier Malin", amount: 35_000, status: "paid" },
];

export const payoutMethods = [
  { name: "Airtel Money", detail: "+227 •• 42", tone: "from-[#dc2626] to-[#f87171]", fee: "0 FCFA" },
  { name: "Moov Money", detail: "+227 •• 87", tone: "from-[#2563eb] to-[#d9a24a]", fee: "0 FCFA" },
  { name: "Banque", detail: "BIA Niger •• 3041", tone: "from-[#123a2c] to-[#3f8f6b]", fee: "1 000 FCFA" },
];

export type Conversation = {
  id: string;
  brand: string;
  initials: string;
  tone: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  messages: { from: "me" | "them"; text: string; time: string }[];
};

export const conversations: Conversation[] = [
  {
    id: "beauty-africa",
    brand: "Beauty Africa",
    initials: "BA",
    tone: "from-[#d9502b] to-[#efa92f]",
    lastMessage: "Parfait, on valide la vidéo 1 !",
    time: "2 min",
    unread: 2,
    online: true,
    messages: [
      { from: "them", text: "Bonjour Aïcha 👋 On a regardé la première vidéo, elle est superbe.", time: "09:12" },
      { from: "me", text: "Merci beaucoup ! J'ai essayé de garder un ton naturel, comme une vraie routine.", time: "09:15" },
      { from: "them", text: "C'est exactement ce qu'on cherchait. Sur la deuxième, on aimerait voir le produit dès la 2e seconde.", time: "09:18" },
      { from: "me", text: "Noté, je réajuste le montage ce soir et je te renvoie une version.", time: "09:21" },
      { from: "them", text: "Parfait, on valide la vidéo 1 !", time: "09:22" },
    ],
  },
  {
    id: "digital-store",
    brand: "Digital Store",
    initials: "DS",
    tone: "from-[#123a2c] to-[#3f8f6b]",
    lastMessage: "Tu peux ajuster le hook ?",
    time: "1 h",
    unread: 1,
    online: true,
    messages: [
      { from: "them", text: "Salut ! Les deux vidéos sont bien reçues.", time: "08:40" },
      { from: "me", text: "Super, dis-moi si tu veux des ajustements.", time: "08:44" },
      { from: "them", text: "Tu peux ajuster le hook ? On veut insister sur l'autonomie.", time: "08:52" },
    ],
  },
  {
    id: "fashion-house",
    brand: "Fashion House",
    initials: "FH",
    tone: "from-[#b23e1e] to-[#e07a4f]",
    lastMessage: "Merci pour ton travail 🙌",
    time: "Hier",
    unread: 0,
    online: false,
    messages: [
      { from: "them", text: "Les reels ont dépassé nos attentes. Merci pour ton travail 🙌", time: "18:02" },
      { from: "me", text: "Avec plaisir ! N'hésitez pas à me recontacter pour la prochaine collection.", time: "18:10" },
    ],
  },
  {
    id: "wave",
    brand: "Wave",
    initials: "W",
    tone: "from-[#8a5a00] to-[#d9a24a]",
    lastMessage: "Paiement envoyé ✅",
    time: "Hier",
    unread: 0,
    online: false,
    messages: [
      { from: "them", text: "Paiement envoyé ✅ Tu le recevras sous 48 h.", time: "16:30" },
      { from: "me", text: "Merci ! Je vous envoie le rapport à J+14 comme prévu.", time: "16:34" },
    ],
  },
  {
    id: "jumia",
    brand: "Jumia",
    initials: "J",
    tone: "from-[#f59e0b] to-[#fbbf24]",
    lastMessage: "Bienvenue dans la campagne Black Friday",
    time: "2 j",
    unread: 0,
    online: false,
    messages: [
      { from: "them", text: "Bienvenue dans la campagne Black Friday ! Le contrat est dans ton espace campagne.", time: "11:00" },
    ],
  },
];

export type ActivityItem = {
  id: string;
  icon: "invite" | "payment" | "campaign" | "approved";
  title: string;
  detail: string;
  time: string;
  tone: "accent" | "success" | "warning" | "info";
};

export const recentActivity: ActivityItem[] = [
  {
    id: "a1",
    icon: "invite",
    title: "Nouvelle invitation d'une marque",
    detail: "Beauty Africa t'invite sur la campagne Beauté Naturelle.",
    time: "Il y a 12 min",
    tone: "accent",
  },
  {
    id: "a2",
    icon: "payment",
    title: "Paiement reçu",
    detail: "Wave · Campagne Wave Cash · 60 000 FCFA.",
    time: "Il y a 2 h",
    tone: "success",
  },
  {
    id: "a3",
    icon: "campaign",
    title: "Nouvelle campagne disponible",
    detail: "Sahel Style recrute des UGC creators à Niamey.",
    time: "Il y a 5 h",
    tone: "warning",
  },
  {
    id: "a4",
    icon: "approved",
    title: "Contenu validé",
    detail: "Fashion House a validé tes 2 reels.",
    time: "Hier",
    tone: "info",
  },
];

export const analyticsData = {
  followers: [
    { month: "Juin", value: 96 },
    { month: "Juil", value: 101 },
    { month: "Août", value: 106 },
    { month: "Sep", value: 111 },
    { month: "Oct", value: 116 },
    { month: "Nov", value: 120 },
  ],
  platforms: [
    { name: "TikTok", value: 120_000, share: 62, tone: "bg-[#131110]" },
    { name: "Instagram", value: 58_000, share: 30, tone: "bg-[#d9502b]" },
    { name: "YouTube", value: 12_000, share: 8, tone: "bg-[#efa92f]" },
  ],
  geography: [
    { country: "Niger", share: 42 },
    { country: "Côte d'Ivoire", share: 18 },
    { country: "Sénégal", share: 12 },
    { country: "Mali", share: 9 },
    { country: "Ghana", share: 7 },
    { country: "Autres", share: 12 },
  ],
  campaignPerformance: [
    { brand: "Fashion House", campaign: "Collection Fête", views: "240K", engagement: "7,4 %", result: "validé" },
    { brand: "Beauty Africa", campaign: "Beauté Naturelle", views: "186K", engagement: "6,2 %", result: "en cours" },
    { brand: "Digital Store", campaign: "Tech & Lifestyle", views: "92K", engagement: "5,1 %", result: "soumis" },
    { brand: "MTN", campaign: "MoMo Promo", views: "78K", engagement: "4,8 %", result: "payé" },
  ],
};

export const onboardingSteps = [
  { label: "Nom, prénom et photo", done: true },
  { label: "Pays et ville", done: true },
  { label: "Type de créateur", done: true },
  { label: "Niches et spécialités", done: true },
  { label: "Réseaux sociaux", done: true },
  { label: "Statistiques d'audience", done: true },
  { label: "Portfolio", done: true },
  { label: "Services et tarifs", done: false },
  { label: "Informations de paiement", done: false },
];

export const portfolioItems = [
  { id: "p1", label: "Routine Éclat", brand: "GlowLab", tone: "from-[#d98aa3] to-[#fbcfe8]", type: "UGC" },
  { id: "p2", label: "Unboxing Coffret", brand: "Kora Beauty", tone: "from-[#b98a6a] to-[#f3d9c4]", type: "UGC" },
  { id: "p3", label: "Street Food", brand: "Teranga Foods", tone: "from-[#fdba74] to-[#fed7aa]", type: "UGC" },
  { id: "p4", label: "Collection Fête", brand: "Fashion House", tone: "from-[#e07a4f] to-[#f3b79c]", type: "Influence" },
  { id: "p5", label: "Tech & Lifestyle", brand: "Digital Store", tone: "from-[#3f8f6b] to-[#9ad4b8]", type: "UGC" },
  { id: "p6", label: "Saison Sèche", brand: "Sahel Style", tone: "from-[#fcd34d] to-[#fde68a]", type: "UGC" },
];
