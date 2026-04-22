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
    linkedin: "https://www.linkedin.com/in/bertranddepoly/",
    missions: [
      {
        contexte: "Scale up Medtech",
        type: "Go to Market US",
        detail: "Positionnement stratégique du produit / Market entry / Mise en place d'un business model rentable / Structuration équipe US et commerciale",
        resultat: "Lancement commercial Medtech USA",
      },
      {
        contexte: "ETI deeptech",
        type: "Business launch",
        detail: "Mise en place et lancement d'une offre tech B2C / Distribution, Marketing, Coordination technique",
        resultat: "8M CA en 12 mois",
      },
      {
        contexte: "Medtech",
        type: "Levées et business development",
        detail: "Financements des tours de seed à serie B auprès d'investisseurs stratégiques, VC US et internationaux",
        resultat: "50M$ levés",
      },
      {
        contexte: "Startup Medtech",
        type: "Retournement",
        detail: "Repositionnement de la technologie et du BP / Renégociation des dettes",
        resultat: "Entrée d'un industriel d'envergure mondiale au capital",
      },
      {
        contexte: "Medtech",
        type: "M&A USA",
        detail: "Equity flip France vers USA / Négociation et partenariats avec des industriels leaders",
        resultat: "Lancement US, préparation exit",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
