/**
 * OPValue+ — Profil de Bertrand Le Conte de Poly
 * Modifiez ce fichier pour mettre à jour le profil et les missions.
 *
 * Sync Phase 5 — 25/05/2026
 * Source : missions/Fiches-missions_Bertrand-Le-Conte-de-Poly.docx (V à jour)
 * Convention §10.2 INSTRUCTIONS-IA : à recetter par Bertrand avant déploiement
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
        resume:                 "Lancement commercial d'un produit de diagnostic médical du cancer en 2 minutes, sur le marché américain — du concept à l'enregistrement FDA, code de remboursement et business case rentable.",
        problematique_initiale: "Produit innovant à valider commercialement aux États-Unis, sans présence locale ni équipe US.",
        actions:                "Défini le positionnement stratégique : identifié et priorisé les usages, les utilisateurs, le besoin médical, le pain, le gain économique. Préparé le market entry : études cliniques nécessaires, KOL (Key Opinion Leaders), salons professionnels, optimisé les étapes, acteurs et coûts. Développé un business model rentable pour le client final (hôpitaux) avec ROI en 18 mois. Structuré et piloté l'équipe commerciale US.",
        resultat:               "Lancement commercial Medtech USA avec enregistrement FDA, code de remboursement et business case rentable pour le client.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "ETI deeptech",
        type:                   "Innovation & Digitalisation",
        secteur:                "Tech & IA",
        resume:                 "Lancement d'une business unit telecom B2C en 12 mois, 8 M€ de CA généré et 5 % de part de marché, en concurrence frontale avec l'opérateur historique.",
        problematique_initiale: "Technologie deeptech à valoriser sur le marché B2C, sans canal de distribution ni offre packagée, face à la concurrence déloyale de l'opérateur historique.",
        actions:                "Mis en place et lancé une offre tech telecom B2C. Négocié la distribution (GMS Darty et online). Défini le positionnement marketing. Assuré la coordination complète technique (hardware, réseau), support client et marketing.",
        resultat:               "8 M€ de CA en 12 mois, 5 % de part de marché.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Medtech",
        type:                   "Finance & Pilotage",
        secteur:                "Santé & Sciences de la vie",
        resume:                 "Tours de financement successifs d'une Medtech entre France et USA — 50 M$ levés du seed à la série B auprès d'investisseurs stratégiques et VC internationaux.",
        problematique_initiale: "Besoin de capitaux significatifs pour accélérer le développement, dispersion possible des investisseurs entre les marchés US et internationaux.",
        actions:                "Structuré et négocié les tours de financement du seed à la série B auprès d'investisseurs stratégiques, VC US et internationaux. Convaincu des investisseurs internationaux (US, Asie). Structuré et négocié les pactes d'actionnaires. Réalisé un equity flip France – USA.",
        resultat:               "50 M$ levés du seed à la série B.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Startup Medtech",
        type:                   "Résilience & Retournement",
        secteur:                "Santé & Sciences de la vie",
        resume:                 "Retournement d'une start-up Medtech proche du dépôt de bilan, permettant l'entrée d'un investisseur stratégique industriel d'envergure mondiale au capital.",
        problematique_initiale: "Technologie en difficulté commerciale, dette accumulée, technologie à repositionner pour relancer la dynamique.",
        actions:                "Repositionné la technologie. Fait passer la société de R&D à un actif monétisable pour une levée internationale. Renégocié les dettes.",
        resultat:               "2 mandats ad hoc réussis. Entrée d'un industriel d'envergure mondiale au capital.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Medtech",
        type:                   "Gouvernance & Actionnariat",
        secteur:                "Santé & Sciences de la vie",
        resume:                 "Simplification de la structure capitalistique en regroupant tous les actionnaires aux USA en 6 mois — équity flip France vers USA pour préparer l'accès au marché américain et l'exit.",
        problematique_initiale: "Société française à transitionner vers un véhicule US pour accéder au marché américain et préparer un exit.",
        actions:                "Réalisé l'equity flip France vers USA avec avocats US et français. Structuré la documentation juridique. Communiqué et convaincu les actionnaires français.",
        resultat:               "Actionnaires regroupés dans la maison mère américaine en 6 mois.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Medtech",
        type:                   "International & Partenariat",
        secteur:                "Santé & Sciences de la vie",
        resume:                 "Go to market Europe et USA d'une Medtech de diagnostic défini et prêt pour la levée de fonds, avec coordination du plan de développement produit et de la route réglementaire.",
        problematique_initiale: "CEO ne comprenant pas le marché US, hypothèses farfelues, go to market à reconstruire et à coordonner avec le développement technologique.",
        actions:                "Identifié les usages, clients, pricing et remboursement sur les différents marchés. Construit le go to market Europe et USA : étapes, clients, coûts, projection de revenus. Vérifié la roadmap réglementaire. Coordonné avec le développement produit.",
        resultat:               "Go to market défini et prêt pour la levée de fonds, coordination du plan de développement produit et de la route réglementaire.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Medtech",
        type:                   "Leadership & Organisation",
        secteur:                "Santé & Sciences de la vie",
        resume:                 "Création de l'entité américaine d'une PME Medtech, passage de 0 à 50 salariés en 24 mois, mise en place du manufacturing et enregistrement FDA réussi.",
        problematique_initiale: "Aucun soutien des actionnaires (non compétents), timing serré, pression du board.",
        actions:                "Mis en place toute l'équipe : production, R&D, commerciale, financière, RH. Mis en place le pilotage hebdomadaire. Mis en place le reporting financier au board et aux investisseurs. Mis en place les procédures structurantes : achats, frais, suivi RH, réglementaire FDA, manufacturing.",
        resultat:               "Passage de 0 à 50 salariés en 24 mois. Enregistrement FDA réussi. Manufacturing en place.",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
