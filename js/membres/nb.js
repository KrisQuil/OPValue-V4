/**
 * OPValue+ — Profil de Nicolas Bally
 * Modifiez ce fichier pour mettre à jour le profil et les missions.
 */
(function() {
  const data = {
    id: "nb",
    prenom: "Nicolas",
    nom: "Bally",
    cibles: "Groupes, ETI, PME",
    secteurs: "Industrie tech, Energie, Marine",
    expertises: "Opérations, Scale-up, M&A, International",
    email: "nicolas.bally@opvalueplus.com",
    tel: "+41 782 10 13 15",
    linkedin: "https://www.linkedin.com/in/nicolasbally/",
    missions: [
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Grand groupe",
        type:                   "Leadership & Organisation",
        secteur:                "Industrie & Ingénierie",
        problematique_initiale: "Filiales à repositionner stratégiquement, marges dégradées, gestion de crise nécessaire avec impact social.",
        actions:                "Repositionnement stratégique, vente, PSE et optimisation filiales, gestion de crise.",
        resultat:               "Croissance CA +25% et EBIT +70%.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "ETI industrielle",
        type:                   "Résilience & Retournement",
        secteur:                "Industrie & Ingénierie",
        problematique_initiale: "Trésorerie tendue, opérations inefficaces, ventes en chute, organisation à reprendre en main.",
        actions:                "Cash management, réorganisation opérationnelle, restructuring, redressement de la vente.",
        resultat:               "Cash positif en 6 mois et +70% d'entrée de commandes.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "ETI familiale",
        type:                   "Leadership & Organisation",
        secteur:                "Industrie & Ingénierie",
        problematique_initiale: "Pas de KPIs structurés, produits à arbitrer, image à moderniser, opportunité d'acquisition à saisir.",
        actions:                "Mise en place de process opérationnels, pilotage KPIs, revue produits, rebranding, acquisition stratégique.",
        resultat:               "Croissance CA +33% et EBIT +92%.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME deeptech",
        type:                   "Leadership & Organisation",
        secteur:                "Tech & IA",
        problematique_initiale: "Liquidité fragile, go-to-market inefficace, équipe commerciale en sous-régime.",
        actions:                "Diagnostic opérationnel, suivi des KPI, management de la vente et revue go-to-market via distribution.",
        resultat:               "Stabilisation liquidité et croissance +35%.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Société d'investissement",
        type:                   "Finance & Pilotage",
        secteur:                "Finance & Investissement",
        problematique_initiale: "Stratégie d'acquisition à formaliser, premier deal à concrétiser sous délai contraint.",
        actions:                "Définition equity story, identification et rencontre cibles, valorisation PME et négociation prix.",
        resultat:               "Première acquisition sous 1 année.",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
