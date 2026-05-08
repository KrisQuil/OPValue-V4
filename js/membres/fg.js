/**
 * OPValue+ — Profil de Frédéric Galliath
 * Modifiez ce fichier pour mettre à jour le profil et les missions.
 */
(function() {
  const data = {
    id: "fg",
    prenom: "Frédéric",
    nom: "Galliath",
    cibles: "Grands Groupes",
    secteurs: "Catering, services BtoCtoB, environnement",
    expertises: "Stratégie, Management, Finance, Vente",
    email: "frederic.galliath@opvalueplus.com",
    tel: "+33 6 74 58 09 79",
    linkedin: "https://www.linkedin.com/in/fredericgalliath-130b814a/",
    missions: [
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Food Tech",
        type:                   "Croissance & Scalabilité",
        secteur:                "Agroalimentaire & CHR",
        problematique_initiale: "Stratégie floue, segments mal ciblés, croissance bloquée malgré un fort potentiel marché.",
        actions:                "Clarification stratégique, ciblage segments. Plateforme de marques. Plan de croissance.",
        resultat:               "Objectif CA x3 en 3 ans.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Grand Groupe – Start-up",
        type:                   "Finance & Pilotage",
        secteur:                "Agroalimentaire & CHR",
        problematique_initiale: "Start-up rachetée à intégrer, portefeuille à rationaliser, ROI sous-performant.",
        actions:                "Rachat d'une start-up de la foodtech. Rationalisation du portefeuille. Réorganisation. Réorientation stratégique.",
        resultat:               "Redressement rentabilité, nouveaux marchés.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "BU Groupe",
        type:                   "Résilience & Retournement",
        secteur:                "Agroalimentaire & CHR",
        problematique_initiale: "BU non rentable, opérations désorganisées, contrats fournisseurs défavorables, équipes terrain démobilisées.",
        actions:                "Réorganisation opérationnelle. Renégociation des contrats. Mise en place KPI. Management des équipes terrain.",
        resultat:               "Retour à la rentabilité en 18 mois.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Grand groupe",
        type:                   "Stratégie & Modèle économique",
        secteur:                "Agroalimentaire & CHR",
        problematique_initiale: "Modèle d'affaires daté, pricing non aligné sur la valeur, contrats à renégocier en masse.",
        actions:                "Transformation du modèle d'affaires. Revue de pricing. Renégociation de tous les contrats.",
        resultat:               "70 M€ de renégociation en 9 mois. +70 cents sur le CA par convive.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Groupe de service (Petite enfance)",
        type:                   "Gouvernance & Actionnariat",
        secteur:                "Services & Conseil",
        problematique_initiale: "Turn-over élevé, gouvernance complexe avec couches opérationnelles redondantes, organisation à simplifier.",
        actions:                "Restructuration de la gouvernance, renforcement de l'organisation. Suppression d'un échelon opérationnel.",
        resultat:               "Priorisation sur la limitation du turn-over.",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
