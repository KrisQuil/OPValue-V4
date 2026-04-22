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
    linkedin: "https://www.linkedin.com/in/fredericgalliath/",
    missions: [
      {
        contexte: "PME Food Tech",
        type: "Accélération",
        detail: "Clarification stratégique – ciblage segments / Plateforme de marques – Plan de croissance",
        resultat: "Objectif CA x3 en 3 ans",
      },
      {
        contexte: "Grand Groupe – Start-up",
        type: "Intégration",
        detail: "Rachat d'une start-up de la foodtech – rationalisation du portefeuille – réorganisation – réorientation stratégique",
        resultat: "Redressement rentabilité, nouveaux marchés",
      },
      {
        contexte: "BU Groupe",
        type: "Restructuring",
        detail: "Réorganisation opérationnelle – renégociation des contrats / Mise en place KPI – management des équipes terrain",
        resultat: "Retour à la rentabilité en 18 mois",
      },
      {
        contexte: "Grand groupe",
        type: "Transformation",
        detail: "Transformation du modèle d'affaires – revue de pricing – Renégociation de tous les contrats",
        resultat: "70 M€ de renégociation en 9 mois / +70 cents sur le CA par convive",
      },
      {
        contexte: "Groupe de service (Petite enfance)",
        type: "Gouvernance",
        detail: "Restructuration de la gouvernance, renforcement de l'organisation / Suppression d'un échelon opérationnel",
        resultat: "Priorisation sur la limitation du turn-over",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
