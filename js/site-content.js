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
    title:       "OPValue+ | Operating Partners – Décider, exécuter, tenir le cap",
    description: "OPValue+ réunit des dirigeants expérimentés qui interviennent comme Operating Partners pour aider les entreprises à décider, exécuter et rebondir.",
    copyright:   "© 2025 OPValue+. Tous droits réservés.",
  },

  // ──────────────────────────────────────────────
  // NAVIGATION
  // ──────────────────────────────────────────────
  nav: {
    links: [
      { label: "Notre promesse",  anchor: "#promesse"  },
      { label: "Notre offre",     anchor: "#solution"  },
      { label: "Nos missions",    anchor: "#resultats" },
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
    headline:   "Décider vite. Exécuter juste. Tenir le cap avec vous.",
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
    // icon = clé d'icône SVG (mappée dans offre.html) — ne pas mettre d'emoji
    items: [
      {
        icon:  "lightbulb",
        titre: "Clarté stratégique",
        texte: "Nous révélons l'essentiel pour prioriser les décisions évidentes.",
      },
      {
        icon:  "zap",
        titre: "Exécution robuste",
        texte: "Nous agissons concrètement pour adapter immédiatement la trajectoire.",
      },
      {
        icon:  "shield",
        titre: "Sérénité du dirigeant",
        texte: "Nous devenons des partenaires de confiance pour partager les décisions difficiles.",
      },
      {
        icon:  "sprout",
        titre: "Création de valeur durable",
        texte: "Nous transformons les actions en résultats mesurables, sécurisés et pérennes.",
      },
      {
        icon:  "anchor",
        titre: "Engagement total",
        texte: "Nous nous impliquons au quotidien et dans la durée, avec un alignement réel sur les résultats.",
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
    lead:     "Un collectif d'anciens dirigeants, tous certifiés au métier d'operating partner, réunis par des parcours complémentaires et une même culture de l'action.",
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
  // SECTION SOLUTION (4 phases)
  // ──────────────────────────────────────────────
  solution: {
    title:    "La solution OPValue+",
    subtitle: "Une solution qui relie stratégie, exécution et engagement.",
    phases: [
      {
        code:  "1<sup>er</sup> échange",
        titre: "L'opportunité d'un conseil gratuit",
        badge: "Gratuit",
        items: [
          "Comprendre vos enjeux",
          "Évaluer l'adéquation avec nos profils",
          "Échanger sur votre problématique",
        ],
      },
      {
        code:  "Diag Flash",
        titre: "Un premier regard structuré sur votre situation",
        badge: "Optionnel",
        items: [
          "Immersion rapide et ciblée",
          "Identification des signaux critiques",
          "Livrable : recommandations actionnables",
        ],
      },
      {
        code:  "Création de valeur",
        titre: "Sécuriser le point de départ",
        badge: "Sur devis",
        items: [
          "Identifier les leviers immédiats",
          "Prioriser les actions à fort impact",
          "Décider vite dans la complexité",
        ],
      },
      {
        code:  "Garantir l'exécution",
        titre: "Transformer et ancrer la performance",
        badge: "Sur devis",
        items: [
          "Concrétiser les décisions",
          "Co-piloter avec le dirigeant",
          "Sécuriser la trajectoire",
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
    // Le nombre de missions est injecté dynamiquement par COMPONENTS.injectMissionsCount()
    // (jeton {n} remplacé au rendu). Modifier dans les .html porteurs (references.html big-stat-sub)
    // qui utilisent l'attribut data-missions-count-text.
    subtitle: "+ 100 M€ de valeur générée, captée, ou sécurisée en {n} missions",
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
  // SECTION "VOS SITUATIONS" (page vos-situations.html)
  //
  // Cartes-scénarios servant de point d'entrée client-centré.
  // Chaque carte = un signal d'alerte + un type d'intervention + leviers + lien
  // vers les missions filtrées.
  //
  // Pour ajouter / modifier un scénario :
  //   - Copier un objet { type, signal, demande, leviers, ... }
  //   - Le champ "type" doit valoir : "Transformation", "Croissance" ou "M&A"
  //     (utilisé pour la couleur du tag ET pour le filtre URL vers Nos missions)
  // ──────────────────────────────────────────────
  situations_scenarios: {
    title: "Vous reconnaissez votre situation ?",
    intro: "Ce qui vous amène, dirigeants et fonds d'investissement, à nous contacter, ce ne sont pas des concepts. Ce sont des signaux concrets. Voici les plus fréquents, et ce que nous y apportons.",
    cartes: [
      {
        type:    "Transformation",
        theme:   "Résilience & Retournement",
        signal:  "Mon EBITDA décroche depuis 3 trimestres",
        demande: "Stopper l'hémorragie et reprendre la trajectoire",
      },
      {
        type:    "Croissance",
        theme:   "Croissance & Scalabilité",
        signal:  "On passe de 6 à 25 M€ en 3 ans, on craque",
        demande: "Structurer l'organisation pour absorber la croissance",
      },
      {
        type:    "M&A",
        theme:   "Transmission & Cession",
        signal:  "Le fondateur veut céder dans 18 mois, il faut valoriser",
        demande: "Préparer la valorisation et le processus de cession",
      },
      {
        type:    "Croissance",
        theme:   "Gouvernance & Actionnariat",
        signal:  "Un fonds vient d'entrer au capital, ils demandent un Operating Partner",
        demande: "Établir la confiance, co-piloter avec le dirigeant et tenir le plan de création de valeur",
      },
      {
        type:    "M&A",
        theme:   "Finance & Pilotage",
        signal:  "On veut racheter une boîte, le management actuel doute de l'intégration",
        demande: "Sécuriser la cible et l'intégration post-deal",
      },
      {
        type:    "Transformation",
        theme:   "Stratégie & Modèle économique",
        signal:  "Notre business model s'essouffle, il faut pivoter",
        demande: "Repenser le modèle et exécuter la bascule",
      },
      {
        type:    "Transformation",
        theme:   "Leadership & Organisation",
        signal:  "L'équipe dirigeante est fatiguée, le cap se brouille",
        demande: "Remettre du leadership et de la lucidité au sommet",
      },
    ],
    bridge: {
      texte:    "Sur ces situations, un Operating Partner agit autrement qu'un cabinet de conseil. Voici pourquoi.",
      cta_label:"Le métier d'Operating Partner",
      cta_href: "operating-partner.html",
    },
  },

  // ──────────────────────────────────────────────
  // SECTION ÉQUIPE (membres du collectif)
  // ──────────────────────────────────────────────
  equipe: {
    title:    "Tous nos operating partners",
    membres: [],
  },

  // ──────────────────────────────────────────────
  // SECTION "LE MONDE DE L'OP" (sidebar page Operating Partner)
  //
  // Pour ajouter une publication / une actualité :
  //   1. Copier un objet { ... } de la liste items ci-dessous
  //   2. Mettre actif: true pour l'afficher, false pour le masquer (sans supprimer)
  //   3. Renseigner source / titre / date / url
  //   4. Optionnel : op_intervient = "Prénom Nom" si un OP OPValue+ est intervenu
  //      (apparaît en badge orange "Avec [Nom], OPValue+")
  // ──────────────────────────────────────────────
  monde_op: {
    title: "Le monde de l'OP",
    revue_presse: {
      titre: "Revue de presse et actualités",
      items: [
        // Ordre : du plus récent au plus ancien (ou "à venir" en tête)
        {
          actif:        true,
          source:       "La Tribune",
          titre:        "Operating Partners Day 2026 (à venir)",
          date:         "Juin 2026",
          url:          "https://operatingpartnersday.com/",
          op_intervient:"Christophe Quille",
        },
        {
          actif:        true,
          source:       "Deloitte",
          titre:        "Operating Partners : Deloitte et I&S Adviser publient leur référence sur la transformation et la performance",
          date:         "Avril 2026",
          url:          "https://www.deloitte.com/fr/fr/about/press-room/operating-partners.html",
          op_intervient:"Frédéric Ploix",
        },
        {
          actif:  true,
          source: "Consultor",
          titre:  "Operating partners : un métier proche du conseil en stratégie ?",
          date:   "Octobre 2025",
          url:    "https://www.consultor.fr/articles/loperating-partner-descend-il-du-consultant-en-strategie",
        },
        {
          actif:        true,
          source:       "Le Figaro",
          titre:        "Qui sont les operating partners, ces conseillers de l'ombre des chefs d'entreprise ?",
          date:         "Septembre 2025",
          url:          "https://www.lefigaro.fr/decideurs/management/qui-sont-les-operating-partners-ces-conseillers-de-l-ombre-des-chefs-d-entreprise-20250926",
          op_intervient:"Frédéric Galliath",
        },
        {
          actif:        true,
          source:       "Option Finance",
          titre:        "Les operating partners, passeurs de bonnes pratiques auprès des entreprises",
          date:         "Août 2025",
          url:          "https://www.optionfinance.fr/carrieres/les-operating-partners-passeurs-de-bonnes-pratiques-aupres-des-entreprises.html",
          op_intervient:"Frédéric Ploix",
        },
        {
          actif:        true,
          source:       "Operating Partners Day",
          titre:        "Operating partner : un métier, plusieurs manières de l'aborder",
          date:         "Juin 2025",
          url:          "https://evenements.optionfinance.fr/e/operating-partners-day-2025/session/e97f3005-97dc-ef11-88f8-6045bd89b60c/c-operating-partner-un-metier-plusieurs-manieres-de-l-aborder-",
          op_intervient:"Frédéric Ploix et Frédéric Galliath",
        },
      ],
    },
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
