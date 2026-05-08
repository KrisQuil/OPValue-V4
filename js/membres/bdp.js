/**
 * OPValue+ — Profil de Bertrand Le Conte de Poly
 * Modifiez ce fichier pour mettre à jour le profil et les missions.
 */
(function() {
  const data = {
    id: "bdp",
    prenom: "Bertrand",
    nom: "Le Conte de Poly",
    cibles: "PME, ETI, Startup",
    secteurs: "Biotech, Medtech, Deeptech",
    expertises: "International, Go To Market, Stratégie, M&A",
    email: "bertrand.depoly@opvalueplus.com",
    tel: "+33 7 52 06 02 04",
    linkedin: "https://www.linkedin.com/in/bertrand-de-poly/",
    missions: [
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Scale up Medtech",
        type:                   "International & Partenariat",
        secteur:                "Santé & Sciences de la vie",
        problematique_initiale: "Produit innovant à valider commercialement aux États-Unis, sans présence locale ni équipe US.",
        actions:                "Positionnement stratégique du produit. Market entry. Mise en place d'un business model rentable. Structuration équipe US et commerciale.",
        resultat:               "Lancement commercial Medtech USA.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "ETI deeptech",
        type:                   "Innovation & Digitalisation",
        secteur:                "Tech & IA",
        problematique_initiale: "Technologie deeptech à valoriser sur le marché B2C, sans canal de distribution ni offre packagée.",
        actions:                "Mise en place et lancement d'une offre tech B2C. Distribution, marketing, coordination technique.",
        resultat:               "8M CA en 12 mois.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Medtech",
        type:                   "Finance & Pilotage",
        secteur:                "Santé & Sciences de la vie",
        problematique_initiale: "Besoin de capitaux significatifs pour accélérer le développement, dispersion possible des investisseurs entre les marchés US et internationaux.",
        actions:                "Financements des tours de seed à série B auprès d'investisseurs stratégiques, VC US et internationaux.",
        resultat:               "50M$ levés.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Startup Medtech",
        type:                   "Résilience & Retournement",
        secteur:                "Santé & Sciences de la vie",
        problematique_initiale: "Technologie en difficulté commerciale, dette accumulée, business plan à repositionner pour relancer la dynamique.",
        actions:                "Repositionnement de la technologie et du BP. Renégociation des dettes.",
        resultat:               "Entrée d'un industriel d'envergure mondiale au capital.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Medtech",
        type:                   "International & Partenariat",
        secteur:                "Santé & Sciences de la vie",
        problematique_initiale: "Société française à transitionner vers un véhicule US pour accéder au marché américain et préparer un exit.",
        actions:                "Equity flip France vers USA. Négociation et partenariats avec des industriels leaders.",
        resultat:               "Lancement US, préparation exit.",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
