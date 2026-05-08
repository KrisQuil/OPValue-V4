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
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME d'innovation",
        type:                   "Croissance & Scalabilité",
        secteur:                "Industrie & Ingénierie",
        problematique_initiale: "Plan produit dépassé, R&D peu structurée, croissance internationale à organiser (notamment Allemagne).",
        actions:                "Refonte plan produit, structuration R&D, opérations, ventes. Go to market international.",
        resultat:               "CA x3 en 3 ans, 95% de PDM en Allemagne.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "ETI familiale – Start-up",
        type:                   "Croissance & Scalabilité",
        secteur:                "Tech & IA",
        problematique_initiale: "Lancement d'une activité tech from scratch sans expertise interne, ambition de 100 M€ de CA à 6 ans.",
        actions:                "Développement technologique scratch, prototype en 24 mois, IOT, Cloud avec service + écosystème externe.",
        resultat:               "Tentative de rachat par un acteur majeur.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "BU Industrielle Groupe",
        type:                   "Résilience & Retournement",
        secteur:                "Industrie & Ingénierie",
        problematique_initiale: "Performance ingénierie dégradée, opérations complexes, pricing marché inadapté.",
        actions:                "Amélioration de la performance ingénierie, simplification des opérations, repricing marché.",
        resultat:               "EBITDA +10,9%.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Start-up Drones",
        type:                   "Stratégie & Modèle économique",
        secteur:                "Industrie & Ingénierie",
        problematique_initiale: "Modèle Capex pur peu rentable, secteurs initiaux saturés, partenariats US à monter.",
        actions:                "Pivot Capex vers Services, bascules sectorielles industrie, pricing, partenariats US, structuration.",
        resultat:               "CA x3 en 8 mois. Forte accélération du ROI.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Distribution",
        type:                   "Gouvernance & Actionnariat",
        secteur:                "Commerce & Distribution",
        problematique_initiale: "Multi-sites mal coordonnés, gouvernance défaillante, charges trop élevées.",
        actions:                "Stratégie et plan de restructuration de la gouvernance (multi-sites).",
        resultat:               "CODIR, cession d'actif, 1M€ d'économie.",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
