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
        resume:                 "Structurer et accélérer la croissance après deux acquisitions",
        problematique_initiale: "Stratégie floue, segments mal ciblés, croissance bloquée malgré un fort potentiel marché.",
        actions:                "Clarification de la stratégie et ciblage segments. Optimisation de la Plateforme de marques. Préparation et pilotage du Plan de croissance.",
        resultat:               "Objectif CA x3 d’ici à 2029",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Grand Groupe – Start-up",
        type:                   "Finance & Pilotage",
        secteur:                "Agroalimentaire & CHR",
        resume:                 "Intégrer une start up dans un grand groupe pour accélérer la transformation du business model",
        problematique_initiale: "Modèle de restauration à faire évoluer / digitalisation / rationaliser le P&L , portefeuille à rationaliser,",
        actions:                "Rachat d'une start-up de la foodtech. Rationalisation du portefeuille client. Réorganisation des opérations. Réorientation stratégique.",
        resultat:               "Redressement du P&L, Pivot sur le business model",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "BU Groupe",
        type:                   "Résilience & Retournement",
        secteur:                "Agroalimentaire & CHR",
        resume:                 "2 ans pour redresser une Direction Régionale",
        problematique_initiale: "BU non rentable, opérations désorganisées, contrats fournisseurs défavorables, équipes terrain démobilisées.",
        actions:                "Réorganisation des opérations. Renégociation des contrats clients. Mis en place des KPI de suivi. Alignement et motivation du middle management.",
        resultat:               "Retour à la rentabilité en 18 mois.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Grand groupe",
        type:                   "Stratégie & Modèle économique",
        secteur:                "Agroalimentaire & CHR",
        resume:                 "Du choc à la relance - transformation du modèle économique de la restauration collective",
        problematique_initiale: "Modèle d'affaires daté, pricing non aligné sur la valeur, contrats à renégocier en masse.",
        actions:                "Transformation le modèle d'affaires. Revue de pricing. Renégociation des contrats. Création d’une nouvelle offre de prestation.",
        resultat:               "70 M€ de renégociation en 9 mois. +70 cents sur le CA par convive. Retour à la rentabilité en 30 mois",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Groupe de service (Petite enfance)",
        type:                   "Gouvernance & Actionnariat",
        secteur:                "Services & Conseil",
        resume:                 "Simplifier la gouvernance pour gagner en efficacité opérationnelle et garantir la pérennité de la rentabilité",
        problematique_initiale: "Turn-over élevé, gouvernance complexe avec couches opérationnelles redondantes, organisation à simplifier.",
        actions:                "Conseil de simplifier l’organisation opérationnelle en supprimant un échelon hiérarchique. Construction des bases d’un projet d’entreprise autour de la diminution du turn over. Revue de l’ensemble des missions et process des services centraux.",
        resultat:               "Priorisation sur la limitation du turn-over - suppression d’une ligne hiérarchique",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
