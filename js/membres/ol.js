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
        resume:                 "Pas de fatalité - La valeur est souvent “occultée” par le modèle ou le contexte - Ici briques technologiques et expertises existaient - Il “suffisait” de bien les recomposer face aux attendus marché.",
        problematique_initiale: "Stagnation du CA (15M€), Nouveaux produits en échec, Structuration R&D et développement international questionné.",
        actions:                "Refonte et pivot du plan produit, restructuration R&D et projets. Focus client et prise de leadership. Développement à l’international (ventes et opérations).",
        resultat:               "CA x3 en 3 ans (45M€), 95% de part de marché en Allemagne.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "ETI familiale – Start-up",
        type:                   "Croissance & Scalabilité",
        secteur:                "Tech & IA",
        resume:                 "Un autre aspect de la création de valeur et transformation : l’approche bottom / up avec essaimage des bonnes pratiques et création d’un nouvel écosystème.",
        problematique_initiale: "Érosion structurelle du marché historique (prix/volume). Diversification par lancement d'une activité tech hors cœur de métier. Prix moyen x400, ambition de 100 M€ de CA à 6 ans.",
        actions:                "Elaboration de la stratégie et pivot vers les cibles à forte valeur ajoutée (mobilité électrique). Structuration des équipes, développement technologique scratch. Solutions IOT, Cloud avec service + écosystème externe.",
        resultat:               "Levée de 10.4M€ prototype pré-indus en 24 mois Tentative de rachat par un acteur majeur.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "BU Industrielle Groupe",
        type:                   "Résilience & Retournement",
        secteur:                "Industrie & Ingénierie",
        resume:                 "“Ils ne savaient pas que c'était impossible, alors ils l’ont fait”.",
        problematique_initiale: "Rachat post LBO - Performance ingénierie dégradée, opérations industrielles complexes et internationales, pricing marché très tendu (Ebit <0).",
        actions:                "Structuration et amélioration de la performance ingénierie. Complexification des opérations industrielle (international). Repricing marché (2 digits).",
        resultat:               "EBITDA +10,9% en 36 mois. Retard projet réduit de 78%",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Start-up Drones",
        type:                   "Stratégie & Modèle économique",
        secteur:                "Industrie & Ingénierie",
        resume:                 "La force du regard externe : accompagner dirigeant et organisation en corrigeant les faiblesses et capitalisant sur les forces.",
        problematique_initiale: "CA en régression (+ risque fonds propres) - Organisation peu structurée - Cibles marché questionnables",
        actions:                "Double pivot, sectoriel (industrie Oil & Gas / Pétrochimie) et modèle (Capex vers Services). Structuration des équipes et méthodologies (marketing, qualité). Partenariats aux US, structuration pricing.",
        resultat:               "CA x2 en 8 mois. Forte accélération du ROI (Service)",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Distribution",
        type:                   "Gouvernance & Actionnariat",
        secteur:                "Commerce & Distribution",
        resume:                 "L’ operating partner et son rôle éclairant sur le sujet clef de la gouvernance - Un vrai révélateur",
        problematique_initiale: "17 sites avec difficultés de coordination, gouvernance et pacte associés non alignés, structures dissidentes, charges questionnables.",
        actions:                "Diagnostic multi-sites avec audit terrain. Plan de refonte gouvernance + Direction Générale. Opportunité de centralisation (achats).",
        resultat:               "Plan validé Option pour cession d'actif Opportunité pour un plan d’économie achat (1M€ sous 18 mois).",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
