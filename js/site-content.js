/**
 * ============================================================
 *  OPValue+ — Fichier de contenu éditorial
 *  Modifiez ce fichier pour mettre à jour les textes du site
 *  sans toucher au HTML ni au CSS.
 * ============================================================
 *
 *  INSTRUCTIONS :
 *  1. Modifiez les valeurs entre guillemets (" ") ou (` `)
 *  2. Ne supprimez pas les clés (les noms à gauche du ":")
 *  3. Ne modifiez pas la structure (accolades, virgules, etc.)
 *  4. Sauvegardez, puis rechargez le site dans le navigateur
 * ============================================================
 */

const SITE_CONTENT = {

  // ──────────────────────────────────────────────
  // MÉTADONNÉES
  // ──────────────────────────────────────────────
  meta: {
    title:       "OPValue+ | Operating Partners – Des dirigeants au service des dirigeants",
    description: "OPValue+ réunit des dirigeants expérimentés qui interviennent comme Operating Partners pour aider les entreprises à décider, transformer et exécuter.",
    copyright:   "© 2025 OPValue+. Tous droits réservés.",
  },

  // ──────────────────────────────────────────────
  // NAVIGATION
  // ──────────────────────────────────────────────
  nav: {
    links: [
      { label: "Notre promesse",  anchor: "#promesse"  },
      { label: "Notre offre",     anchor: "#solution"  },
      { label: "Cas d'usage",     anchor: "#resultats" },
      { label: "L'équipe",        anchor: "#equipe"    },
      { label: "Contact",         anchor: "#contact"   },
    ],
    cta: "Prendre rendez-vous",
  },

  // ──────────────────────────────────────────────
  // SECTION HERO (bandeau d'accueil)
  // ──────────────────────────────────────────────
  hero: {
    tagline:    "Operating Partners",
    headline:   "Des dirigeants au service des dirigeants",
    subheadline:"Nous concevons. Nous agissons. Nous accompagnons.",
    cta_primary:   "Découvrir notre approche",
    cta_secondary: "Prendre rendez-vous",
  },

  // ──────────────────────────────────────────────
  // SECTION ENJEUX
  // ──────────────────────────────────────────────
  enjeux: {
    title:    "Vos enjeux actuels",
    subtitle: "Complexité. Incertitude. Isolement.",
    dirigeants: {
      label: "DIRIGEANTS",
      items: [
        "Comment franchir un cap stratégique (croissance, pivot, transmission) ?",
        "Comment retrouver de la maîtrise dans une phase de tension ?",
        "Comment avancer avec lucidité sans s'épuiser ?",
        "Comment avoir un sparring-partner localement proche ?",
      ],
    },
    investisseurs: {
      label: "INVESTISSEURS",
      items: [
        "Comment sécuriser un investissement ?",
        "Comment gagner 12 à 24 mois sur l'exécution du plan ?",
        "Comment renforcer la capacité du management à tenir la trajectoire ?",
      ],
    },
  },

  // ──────────────────────────────────────────────
  // SECTION COMPARATIF (tableau)
  // ──────────────────────────────────────────────
  comparatif: {
    title:    "Les accompagnements traditionnels",
    subtitle: "Pourquoi ça ne suffit pas ?",
    colonnes: [
      "Cabinets de conseil",
      "Coachs",
      "Managers de transition",
      "Board members",
      "Operating Partner",
    ],
    lignes: [
      "Diagnostic stratégique",
      "Décisions opérationnelles",
      "Pilotage de la performance",
      "Transformation du modèle",
      "Engagement dans la durée",
      "Engagement sur les résultats",
    ],
  },

  // ──────────────────────────────────────────────
  // SECTION PROMESSE
  // ──────────────────────────────────────────────
  promesse: {
    title:    "Notre promesse",
    subtitle: "Décider vite. Exécuter juste. Tenir le cap avec vous.",
    items: [
      {
        icon:  "💡",
        titre: "Clarté stratégique",
        texte: "Nous révélons l'essentiel pour rendre les décisions évidentes.",
      },
      {
        icon:  "⚙️",
        titre: "Exécution robuste",
        texte: "Nous agissons concrètement pour adapter immédiatement la trajectoire.",
      },
      {
        icon:  "🤝",
        titre: "Sérénité du dirigeant",
        texte: "Nous devenons des partenaires de confiance pour partager les décisions difficiles.",
      },
      {
        icon:  "🌱",
        titre: "Création de valeur durable",
        texte: "Nous transformons les actions en résultats mesurables, sécurisés et pérennes.",
      },
      {
        icon:  "🎯",
        titre: "Engagement total",
        texte: "Nous nous impliquons au quotidien avec un alignement réel sur les résultats.",
      },
    ],
  },

  // ──────────────────────────────────────────────
  // SECTION DÉFINITION OP
  // ──────────────────────────────────────────────
  definition_op: {
    title:    "Une relation de pair à pair, dans les moments importants",
    subtitle: "Nous sommes des Operating Partners",
    label:    "Un métier exigeant, une posture unique",
    items: [
      {
        titre: "Des expériences vécues",
        texte: "Nous avons déjà tenu la barre.",
      },
      {
        titre: "Stratège opérationnel",
        texte: "Nous aidons à concevoir puis à exécuter.",
      },
      {
        titre: "Vision 360°",
        texte: "Nous adressons tous les aspects de l'entreprise.",
      },
      {
        titre: "Partenaire engagé",
        texte: "Nous nous engageons financièrement sur les résultats.",
      },
    ],
  },

  // ──────────────────────────────────────────────
  // SECTION COLLECTIF
  // ──────────────────────────────────────────────
  collectif: {
    title:    "Notre collectif",
    subtitle: "Un groupe de dirigeants aguerris, alignés, complémentaires",
    blocs: [
      {
        titre: "Notre origine",
        texte: "Un collectif d'anciens dirigeants, tous certifiés au métier d'operating partner par l'<a href=\"https://operatingpartnersacademy.com\" target=\"_blank\" rel=\"noopener\">Operating Partner Academy</a> (programme CAPOP), réunis par des parcours complémentaires et une même culture de l'action.",
      },
      {
        titre: "Notre diversité",
        texte: "Des parcours en direction générale, finance, transformation, industrie, tech, IA et marketing : une complémentarité rare pour couvrir l'ensemble des enjeux des dirigeants et des fonds.",
      },
      {
        titre: "Notre écosystème",
        texte: "Avec nous, un réseau d'experts spécialisés renforce et complète nos interventions selon vos besoins.",
      },
    ],
  },

  // ──────────────────────────────────────────────
  // SECTION SOLUTION (DIAGNOSTIC → EXECUTION)
  // ──────────────────────────────────────────────
  solution: {
    title:    "La solution OPValue+",
    subtitle: "Une solution qui relie stratégie, exécution et engagement.",
    phases: [
      {
        code:  "DIAGNOSTIC",
        titre: "Sécuriser le point de départ",
        duree: "2 à 4 semaines",
        items: [
          "Identifier les leviers immédiats",
          "Prioriser les actions à fort impact",
          "Décider vite dans la complexité",
        ],
      },
      {
        code:  "EXECUTION",
        titre: "Exécuter, transformer, ancrer",
        duree: "3 à 9 mois",
        items: [
          "Concrétiser les décisions et mobiliser les équipes",
          "Installer un pilotage efficace, co-piloter avec le dirigeant",
          "Sécuriser la trajectoire et ancrer la performance",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // SECTION SITUATIONS
  // ──────────────────────────────────────────────
  situations: {
    title: "Les situations que nous adressons",
    items: [
      "Gouvernance & Actionnariat",
      "Stratégie & Modèle économique",
      "Croissance & Scalabilité",
      "International & Partenariat",
      "Innovation & Digitalisation",
      "Résilience & Retournement",
      "Leadership & Organisation",
      "Finance & Pilotage",
      "Transmission & Cession",
    ],
  },

  // ──────────────────────────────────────────────
  // SECTION RÉFÉRENCES & IMPACTS
  // ──────────────────────────────────────────────
  references: {
    title:    "Références & impacts",
    subtitle: "+ 100 M€ de valeur générée, captée, ou sécurisée en 25 missions",
    categories: [
      {
        titre: "Transformations & redressements",
        items: [
          "14 entreprises remises sur une trajectoire viable",
          "Retour à l'équilibre en 12–18 mois",
          "Refonte opérationnelle avec amélioration significative des KPIs clés",
        ],
      },
      {
        titre: "Croissance & création de valeur",
        items: [
          "EBITDA : de –50k€ à +150k€/mois",
          "Passage de 6 à 24 M€ de chiffre d'affaires en 3 ans",
          "Revenus x2 et valorisation x3 dans des projets IA / data",
        ],
      },
      {
        titre: "Financement & M&A",
        items: [
          "50 M€ levés",
          "3 opérations de cession, 5 opérations d'acquisition, 2 levées de fonds",
          "Optimisation des prix de transaction (entre +25% et +50%) et des GAP",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // SECTION ÉQUIPE (membres du collectif)
  // ──────────────────────────────────────────────
  equipe: {
    title:    "Tous nos operating partners",
    membres: [],
  },

  // ──────────────────────────────────────────────
  // SECTION DÉMARRAGE / OFFRES
  // ──────────────────────────────────────────────
  demarrage: {
    title:    "Comment démarrer ?",
    subtitle: "Une conversation peut suffire à débloquer une situation complexe",
    diagnostic: {
      titre:  "Diagnostic OPValue+",
      texte:  "2 à 4 semaines pour diagnostiquer, prioriser et définir un plan d'actions précis",
    },
    execution: {
      titre:  "Execution OPValue+",
      texte:  "3 à 9 mois pour exécuter, transformer et sécuriser la trajectoire",
    },
    etapes: [
      "Premiers échanges pour comprendre vos enjeux",
      "Diagnostic de 2-4 semaines pour prioriser",
      "Execution de 3 à 9 mois",
    ],
    cta: "Prendre rendez-vous →",
  },

  // ──────────────────────────────────────────────
  // SECTION CONTACT
  // ──────────────────────────────────────────────
  contact: {
    title:    "Et contactez-le !",
    subtitle: "Premiers échanges : 2 × 1h pour comprendre vos enjeux. C'est rapide et c'est gratuit.",
    email_general: "contact@opvalueplus.com",
  },

};

// ──────────────────────────────────────────────────────────────
//  Export (ne pas modifier)
// ──────────────────────────────────────────────────────────────
if (typeof module !== "undefined") module.exports = SITE_CONTENT;
