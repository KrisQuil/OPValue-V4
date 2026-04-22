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
        contexte: "Grand groupe",
        type: "Transformation filiale",
        detail: "Repositionnement stratégique, Vente, PSE et optimisation filiales, Gestion de crise",
        resultat: "Croissance CA +25% et EBIT +70%",
      },
      {
        contexte: "ETI industrielle",
        type: "Retournement BU",
        detail: "Cash Management, Réorganisation opérationnelle, Restructuring, Redressement de la vente",
        resultat: "Cash positif en 6 mois et +70% d'entrée de commandes",
      },
      {
        contexte: "ETI familiale",
        type: "Opérations",
        detail: "Mise en place de process opérationnels, Pilotage KPI's, Revue produits, Rebranding, Acquisition stratégique",
        resultat: "Croissance CA +33% et EBIT +92%",
      },
      {
        contexte: "PME deeptech",
        type: "Opérations",
        detail: "Diagnostic opérationnel, Suivi des KPI, Management de la vente et revue go-to-market via distribution",
        resultat: "Stabilisation liquidité et croissance +35%",
      },
      {
        contexte: "Société d'investissement",
        type: "Build-up",
        detail: "Définition equity story, Identification et rencontre cibles, Valorisation PME et négociation prix",
        resultat: "Première acquisition sous 1 année",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
