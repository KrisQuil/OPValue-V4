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
    linkedin: "https://www.linkedin.com/in/badrhjiaj/",
    missions: [
      {
        contexte: "PME FMCG",
        type: "Restructuring",
        detail: "Restructuration des processus, Culture de pilotage, Transformation IT",
        resultat: "Retour à la rentabilité en 12 mois",
      },
      {
        contexte: "TPE Restauration",
        type: "Déploiement multi-sites",
        detail: "Mise en place de process opérationnels, Gestion RH, Ouverture nouveaux points de vente",
        resultat: "Optimisation des marges par point de vente",
      },
      {
        contexte: "Groupe Immobilier",
        type: "Création de Valeur",
        detail: "Audit financier et juridique – Arbitrages d'actifs immobiliers – Renégociation des engagements",
        resultat: "Augmentation de la valorisation du groupe de 15%",
      },
      {
        contexte: "PME commerce de gros",
        type: "Restructuring",
        detail: "Réorganisation opérationnelle – Mise en place KPI – Management des équipes terrain – Cash Management",
        resultat: "Réduction du DSO de 17%",
      },
      {
        contexte: "Société d'investissement",
        type: "Discipline Financière",
        detail: "Mise sous contrôle de la trésorerie, Renégociation des contrats, Mise à jour du budget",
        resultat: "Réduction des charges de 20%",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
