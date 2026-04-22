/**
 * OPValue+ — Profil de Olivier Lasseigne
 * Modifiez ce fichier pour mettre à jour le profil et les missions.
 */
(function() {
  const data = {
    id: "ol",
    prenom: "Olivier",
    nom: "Lasseigne",
    cibles: "PME, ETI, Startup B2B",
    secteurs: "Industrie tech, Ingénierie, Services",
    expertises: "Scale-up, Perfo R&D, Opérations, Vente",
    email: "olivier.lasseigne@opvalueplus.com",
    tel: "+33 6 26 94 62 30",
    linkedin: "https://www.linkedin.com/in/olivierlasseigne/",
    missions: [
      {
        contexte: "PME d'innovation",
        type: "Accélération",
        detail: "Refonte plan produit, structuration R&D, Opérations, Ventes – Go to market international",
        resultat: "CA x3 en 3 ans, 95% de PDM en Allemagne",
      },
      {
        contexte: "ETI familiale – Start-up",
        type: "Diversification",
        detail: "Développement technologique scratch, objectif de 100M€ de CA sur 6 ans, prototype en 24 mois, IOT, Cloud avec service + écosystème externe",
        resultat: "Tentative de rachat par un acteur majeur",
      },
      {
        contexte: "BU Industrielle Groupe",
        type: "Retournement",
        detail: "Amélioration de la performance ingénierie, simplification des opérations, repricing marché",
        resultat: "EBITDA +10,9%",
      },
      {
        contexte: "Start-up Drones",
        type: "Pivot et croissance",
        detail: "Pivot Capex vers Services, bascules sectorielles industrie, pricing, partenariats US, structuration",
        resultat: "CA x3 en 8 mois – Forte accélération du ROI",
      },
      {
        contexte: "PME Distribution",
        type: "Gouvernance",
        detail: "Stratégie et plan de restructuration de la gouvernance (multi-sites)",
        resultat: "CODIR, Cession d'actif, 1M€ d'économie",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
