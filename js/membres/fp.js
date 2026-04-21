/**
 * OPValue+ — Profil de Frédéric Ploix
 * Modifiez ce fichier pour mettre à jour le profil et les missions.
 */
(function() {
  const data = {
    id: "fp",
    prenom: "Frédéric",
    nom: "Ploix",
    cibles: "PME, ETI, Startup",
    secteurs: "Agroalimentaire, Jouets, Tourisme, Logiciels IA, E-commerce",
    expertises: "Stratégie, IA, Marketing, Vente, E-commerce",
    email: "frederic.ploix@opvalueplus.com",
    tel: "+33 6 16 76 34 62",
    linkedin: "https://www.linkedin.com/in/fredericploix/",
    missions: [
      {
        contexte: "PME industrielle",
        type: "Efficacité commerciale",
        detail: "Diagnostic activités de 3 filiales / Restructuration du portefeuille de marques et de l'organisation commerciale",
        resultat: "Retour à la croissance sur un marché en recul",
      },
      {
        contexte: "Start-up E-commerce",
        type: "Pivot",
        detail: "Passage d'une distribution via marketplaces à la vente en ligne / Structuration équipe",
        resultat: "CA x2 sur les nouveaux canaux d'acquisition",
      },
      {
        contexte: "PME Distribution spécialisée",
        type: "Accélération",
        detail: "Audit des ressources, process et équipes / Focus B2B / Refonte surface commerciale / Création site e-commerce",
        resultat: "CA : +30% en 24 mois",
      },
      {
        contexte: "Startup Logiciel IA",
        type: "Levée et accélération",
        detail: "Création et lancement plateforme de vente en mode SaaS / Développement ventes directes B2B Grands Groupes",
        resultat: "1,2M€ de CA récurrent – Levée post seed 3M€",
      },
      {
        contexte: "ETI Marché de gros",
        type: "IA",
        detail: "Construction de la roadmap IA au service des clients et de l'amélioration de la productivité interne",
        resultat: "1 projet en production",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
