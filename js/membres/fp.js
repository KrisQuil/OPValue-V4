/**
 * OPValue+ — Profil de Frédéric Ploix
 * Modifiez ce fichier pour mettre à jour le profil et les missions.
 */
(function() {
  const data = {
    id: "fp",
    prenom: "Frédéric",
    nom: "Ploix",
    cibles: "PME, ETI, Startup",
    secteurs: "Agroalimentaire, Jouets, Tourisme, Logiciels IA, E-commerce",
    expertises: "Stratégie, IA, Marketing, Vente, E-commerce",
    email: "frederic.ploix@opvalueplus.com",
    tel: "+33 6 16 76 34 62",
    linkedin: "https://www.linkedin.com/in/fredericploix/",
    missions: [
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME industrielle",
        type:                   "Croissance & Scalabilité",
        secteur:                "Industrie & Ingénierie",
        problematique_initiale: "Marché global en recul, 3 filiales aux performances inégales, portefeuille de marques dispersé.",
        actions:                "Diagnostic activités de 3 filiales. Restructuration du portefeuille de marques et de l'organisation commerciale.",
        resultat:               "Retour à la croissance sur un marché en recul.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Start-up E-commerce",
        type:                   "Stratégie & Modèle économique",
        secteur:                "Commerce & Distribution",
        problematique_initiale: "Dépendance excessive aux marketplaces, marges érodées, manque d'autonomie commerciale.",
        actions:                "Passage d'une distribution via marketplaces à la vente en ligne directe. Structuration équipe.",
        resultat:               "CA x2 sur les nouveaux canaux d'acquisition.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Distribution spécialisée",
        type:                   "Croissance & Scalabilité",
        secteur:                "Commerce & Distribution",
        problematique_initiale: "CA stagnant, organisation désuète, absence de canal e-commerce, surface commerciale obsolète.",
        actions:                "Audit des ressources, process et équipes. Focus B2B. Refonte surface commerciale. Création site e-commerce.",
        resultat:               "CA : +30% en 24 mois.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Startup Logiciel IA",
        type:                   "Finance & Pilotage",
        secteur:                "Tech & IA",
        problematique_initiale: "Plateforme à industrialiser, absence de motion commerciale B2B, besoin de financement post-seed.",
        actions:                "Création et lancement plateforme de vente en mode SaaS. Développement ventes directes B2B Grands Groupes.",
        resultat:               "1,2M€ de CA récurrent. Levée post-seed 3M€.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "ETI Marché de gros",
        type:                   "Innovation & Digitalisation",
        secteur:                "Commerce & Distribution",
        problematique_initiale: "Pression concurrentielle, productivité interne stagnante, IA à intégrer mais sans roadmap claire.",
        actions:                "Construction de la roadmap IA au service des clients et de l'amélioration de la productivité interne.",
        resultat:               "1 projet en production.",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
