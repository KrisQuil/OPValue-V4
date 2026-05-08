/**
 * OPValue+ — Profil de Badr Hjiaj
 * Modifiez ce fichier pour mettre à jour le profil et les missions.
 */
(function() {
  const data = {
    id: "bh",
    prenom: "Badr",
    nom: "Hjiaj",
    cibles: "PME, ETI, Startup",
    secteurs: "B2C, B2B, Produits",
    expertises: "Stratégie, Management, Finance, Vente",
    email: "badr.hjiaj@opvalueplus.com",
    tel: "+33 6 08 32 32 21",
    linkedin: "https://www.linkedin.com/in/badr-hjiaj/",
    missions: [
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME FMCG",
        type:                   "Résilience & Retournement",
        secteur:                "Commerce & Distribution",
        problematique_initiale: "Rentabilité dégradée, processus inefficaces, IT vieillissant, absence de culture pilotage.",
        actions:                "Restructuration des processus, culture de pilotage, transformation IT.",
        resultat:               "Retour à la rentabilité en 12 mois.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "TPE Restauration",
        type:                   "Croissance & Scalabilité",
        secteur:                "Agroalimentaire & CHR",
        problematique_initiale: "Plusieurs points de vente à structurer pour une croissance saine, RH à professionnaliser, marges hétérogènes.",
        actions:                "Mise en place de process opérationnels, gestion RH, ouverture nouveaux points de vente.",
        resultat:               "Optimisation des marges par point de vente.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Groupe Immobilier",
        type:                   "Finance & Pilotage",
        secteur:                "Finance & Investissement",
        problematique_initiale: "Portefeuille d'actifs sous-valorisé, engagements financiers à renégocier, audit financier et juridique incomplet.",
        actions:                "Audit financier et juridique. Arbitrages d'actifs immobiliers. Renégociation des engagements.",
        resultat:               "Augmentation de la valorisation du groupe de 15%.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME commerce de gros",
        type:                   "Résilience & Retournement",
        secteur:                "Commerce & Distribution",
        problematique_initiale: "Trésorerie tendue (DSO élevé), équipes terrain à manager, absence de KPI structurés.",
        actions:                "Réorganisation opérationnelle. Mise en place KPI. Management des équipes terrain. Cash management.",
        resultat:               "Réduction du DSO de 17%.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Société d'investissement",
        type:                   "Finance & Pilotage",
        secteur:                "Finance & Investissement",
        problematique_initiale: "Charges trop élevées, contrats fournisseurs non optimisés, budget à réviser de fond en comble.",
        actions:                "Mise sous contrôle de la trésorerie, renégociation des contrats, mise à jour du budget.",
        resultat:               "Réduction des charges de 20%.",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
