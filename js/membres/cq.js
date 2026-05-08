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
    linkedin: "https://www.linkedin.com/in/christophe-quille-55866a104/",
    missions: [
      {
        client:                 "Groupe Ares",
        client_logo:            "images/clients/groupe-ares.png",
        contexte:               "ETI Négoce",
        type:                   "Transmission & Cession",
        secteur:                "Commerce & Distribution",
        problematique_initiale: "Activité historique en perte de vitesse, dette structurelle, risque social majeur sur l'effectif, nécessité de céder en préservant les emplois.",
        actions:                "Gestion de crise (redressement), PSE, carve-out et ventes d'actifs, pivot du business model, pilotage.",
        resultat:               "Préservation de 90% des emplois.",
      },
      {
        client:                 "Croc Saveur",
        client_logo:            "images/clients/croc-saveur.png",
        contexte:               "TPE Restauration",
        type:                   "Résilience & Retournement",
        secteur:                "Agroalimentaire & CHR",
        problematique_initiale: "Activité en grave difficulté financière, dettes accumulées, besoin urgent d'un redressement et d'une stratégie de sortie viable.",
        actions:                "Gestion de la crise en sauvegarde, redressement de l'activité et vente du fonds de commerce.",
        resultat:               "Apurement de 100% des dettes.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Conseil orga et IT",
        type:                   "Résilience & Retournement",
        secteur:                "Services & Conseil",
        problematique_initiale: "Organisation déstructurée, dynamique commerciale en perte de vitesse, rentabilité négative.",
        actions:                "Restructuration de l'organisation, dynamique commerciale.",
        resultat:               "En 2 ans, CA : 21M€ → 25M€ et Résultat : -0,4M€ → +1M€.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Négoce matériel",
        type:                   "Gouvernance & Actionnariat",
        secteur:                "Commerce & Distribution",
        problematique_initiale: "Le président veut racheter 100% du capital, sans cash suffisant ni levier de négociation face aux actionnaires sortants.",
        actions:                "Permettre au président de racheter 100% du capital. Business plan, négociation, financement.",
        resultat:               "Négociation -50% du prix initial. Crédit vendeur 25%.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "TPE Conseil",
        type:                   "Gouvernance & Actionnariat",
        secteur:                "Services & Conseil",
        problematique_initiale: "Trésorerie hors de contrôle (DCP à 3 mois), gouvernance inadaptée, modèle économique à repenser de fond en comble.",
        actions:                "Mise sous contrôle de la trésorerie, adaptation de la gouvernance, transformation du business model.",
        resultat:               "Passage de \"DCP à 3 mois\" à cashflow positif en 6 mois.",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
