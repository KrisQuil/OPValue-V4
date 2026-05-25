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
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME industrielle",
        type:                   "Croissance & Scalabilité",
        secteur:                "Industrie & Ingénierie",
        resume:                 "Diagnostic de l’organisation commerciale et du portefeuille de marques d’un groupe industriel B2C / B2B, recommandation d’une nouvelle organisation et accompagnement de la mise en oeuvre",
        problematique_initiale: "Marché global en recul, 2 filiales aux performances inégales, portefeuille de marques inégales.",
        actions:                "Diagnostic de l’organisation commerciale des 3 filiales et des stratégies de marques. Restructuration du portefeuille de marques et nouvelle plateforme de marque. Optimisation de l’organisation commerciale Groupe et Filiales. Accompagnement de l’équipe dirigeante d’une filiale dans l’élaboration de son plan d’action.",
        resultat:               "Retour à la croissance sur un marché en recul.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Start-up E-commerce",
        type:                   "Stratégie & Modèle économique",
        secteur:                "Commerce & Distribution",
        resume:                 "Pivot réalisé en 9 mois pour retrouver 40% de croissance et atteindre la rentabilité opérationnelle, après avoir perdu un canal de distribution représentant 65% du CA.",
        problematique_initiale: "Perte d’un canal de distribution représentant 65% de CA 2 mois après une levée de fonds, et avoir structuré la société pour une croissance de 100%",
        actions:                "Passage d'une distribution via marketplaces à la vente en ligne directe. Diversification de l’acquisition de trafic vers le SEO et le bouche à oreille suite à un focus de tous sur la qualité de l’expérience client. Structuration équipe et refonte gouvernance interne.",
        resultat:               "CA x2 sur les nouveaux canaux d'acquisition et le site e-commerce Rentabilité opérationnelle atteinte",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Distribution spécialisée",
        type:                   "Croissance & Scalabilité",
        secteur:                "Commerce & Distribution",
        resume:                 "Suite au rachat de l’activité, élaboration et accompagnement de la réalisation d’un plan d’optimisation de l’organisation et de développement commercial ayant généré 30% de croissance sur 2 ans",
        problematique_initiale: "Suite au rachat de la société, le CA stagne, le repreneur constate que l’ organisation est désuète, et que la performance n’est pas en ligne avec ses ambitions",
        actions:                "Redéfinition Vision, Mission, Ambition avec les dirigeants. Optimisation de la production et du commercial pour alléger les coûts et gagner en réactivité. Identification des cibles commerciales clés et mise en place d’un CRM. Refonte de la surface commerciale (magasin et zone de stockage/exposition). Lancement d’un site e-commerce.",
        resultat:               "CA : +30% en 24 mois.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Startup Logiciel IA",
        type:                   "Croissance & Scalabilité",
        secteur:                "Tech & IA",
        resume:                 "Sur un marché nouveau (logiciel d’analyse prédictive small data), création et mise en oeuvre des process de vente en ligne et en B2B.",
        problematique_initiale: "Start-up exclusivement composée d’ingénieurs, de codeurs et de docteurs en IA, sans expérience business.",
        actions:                "Création et lancement plateforme web de vente en mode SaaS (2000 inscrits en 6 mois pour un coût d'acquisition < à 25€). Suite à un changement du produit : développement des ventes directes B2B Grands Groupes (Thales, Renault, Schneider…) en 18 mois.",
        resultat:               "1,2M€ de CA récurrent. Levée post-seed 3M€.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "ETI Marché de gros",
        type:                   "Innovation & Digitalisation",
        secteur:                "Commerce & Distribution",
        resume:                 "Formation du COMEX à l’IA, construction d’une roadmap IA sur 24 mois et mise en production d’un premier projet",
        problematique_initiale: "Un besoin de mise à niveau du COMEX sur l’IA et une difficulté de l’organisation à identifier des projets à potentiel.",
        actions:                "Formation des 40 cadres clés à ce qu’est l’IA et travail collaboratif pour identifier les projets potentiels. Construction de la roadmap IA au service des clients et de l'amélioration de la productivité interne. Réalisation d’un appel d’offre marché public. Mise en production d’un projet d’automatisation IA de contrôle de documents permettant une économie de 12 ETP, redirigées vers des activités à plus forte valeur ajoutée.",
        resultat:               "1 projet en production en 9 mois",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
