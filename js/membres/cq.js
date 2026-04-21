/**
 * OPValue+ — Profil de Christophe Quille
 * Modifiez ce fichier pour mettre à jour le profil et les missions.
 */
(function() {
  const data = {
    id: "cq",
    prenom: "Christophe",
    nom: "Quille",
    cibles: "ETI cotées, PME, TPE",
    secteurs: "ESN et Conseil, Restauration, Négoce",
    expertises: "Pilotage, M&A, Restructuring, Organisation",
    email: "christophe.quille@opvalueplus.com",
    tel: "+33 6 61 76 46 81",
    linkedin: "https://www.linkedin.com/in/christophequille/",
    missions: [
      {
        contexte: "ETI Négoce",
        type: "Retournement et cession",
        detail: "Gestion de crise (redressement), PSE, carve-out et ventes d'actifs, pivot du business model, pilotage",
        resultat: "Préservation de 90% des emplois",
      },
      {
        contexte: "TPE Restauration",
        type: "Retournement",
        detail: "Gestion de la crise en sauvegarde, redressement de l'activité et vente du fonds de commerce",
        resultat: "Apurement de 100% des dettes",
      },
      {
        contexte: "PME Conseil orga et IT",
        type: "Résilience",
        detail: "Restructuration de l'organisation, dynamique commerciale",
        resultat: "En 2 ans, CA : 21M€ → 25M€ et Résultat : -0,4M€ → +1M€",
      },
      {
        contexte: "PME Négoce matériel",
        type: "Actionnariat",
        detail: "Permettre au président de racheter 100% du capital. Business plan, négociation, financement.",
        resultat: "Négociation -50% du prix initial. Crédit vendeur 25%",
      },
      {
        contexte: "TPE Conseil",
        type: "Retournement et Gouvernance",
        detail: "Mise sous contrôle de la trésorerie, adaptation de la gouvernance, transformation du business model",
        resultat: "Passage de \"DCP à 3 mois\" à cashflow positif en 6 mois",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
