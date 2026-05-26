/**
 * OPValue+ — Profil de Nicolas Bally
 * Modifiez ce fichier pour mettre à jour le profil et les missions.
 *
 * Sync Phase 5 — 26/05/2026
 * Source : missions/Fiches-missions_Nicolas-Bally.docx (V à jour)
 * Convention §10.2 INSTRUCTIONS-IA : à recetter par Nicolas avant déploiement
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
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Grand groupe industriel international",
        type:                   "Leadership & Organisation",
        secteur:                "Industrie & Ingénierie",
        resume:                 "Transformation stratégique et opérationnelle des activités françaises d'un grand groupe industriel international, avec croissance rentable, stabilisation sociale et ouverture vers les marchés de transition énergétique et défense.",
        problematique_initiale: "Activités industrielles confrontées à des enjeux d'obsolescence technologique, pression sur les marges et nécessité de transformation du modèle économique. Environnement social sensible avec forte exposition syndicale, multiples parties prenantes institutionnelles et pilotage multi-sites dans un contexte international complexe.",
        actions:                "Défini et déployé une stratégie à 3-5 ans intégrant les marchés marine, défense, énergie conventionnelle et nucléaire ainsi que les nouvelles solutions hydrogène et propulsion hybride. Restructuré l'organisation managériale et renforcé les équipes clés en nommant de nouveaux responsables pour les activités power, service, licensing et ventes gouvernementales. Conduit le repositionnement commercial international avec la signature de contrats stratégiques aux États-Unis, en Chine, en Afrique et dans le naval français. Piloté des opérations sensibles de transformation industrielle et sociale, incluant la fermeture d'une centrale en Guadeloupe et la négociation d'un plan social avec les partenaires sociaux locaux. Instauré un dialogue social régulier avec les organisations syndicales afin de restaurer un climat social stable et constructif. Supervisé des projets structurants de transformation opérationnelle : gestion proactive de l'obsolescence, sécurisation fournisseurs, mutualisation des équipes projets et déploiement SAP/4HANA. Piloté le rebranding du groupe en France et renforcé l'ancrage local auprès des acteurs industriels et institutionnels. Géré la continuité des opérations et la gestion de crise pendant la période COVID-19.",
        resultat:               "Croissance du CA de 186 M€ à 232 M€ (+25 %) et progression de l'EBIT de 25 M€ à 42 M€ (+70 %), avec stabilisation des opérations, amélioration durable du climat social et repositionnement réussi des activités vers des solutions à plus forte valeur ajoutée.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "ETI industrielle (Private Equity)",
        type:                   "Résilience & Retournement",
        secteur:                "Industrie & Ingénierie",
        resume:                 "Redressement rapide d'une business unit industrielle sous Private Equity, avec retour au cash positif, relance commerciale et transformation vers un modèle solutions dans un contexte de forte crise supply chain.",
        problematique_initiale: "Trésorerie tendue, opérations inefficaces, ventes en baisse et organisation à restructurer dans un contexte de crise mondiale de la supply chain. Nécessité d'améliorer rapidement la performance opérationnelle et commerciale sous contrainte forte d'actionnariat Private Equity.",
        actions:                "Défini et lancé un plan de transformation à 3 ans centré sur le cash, les processus, les compétences clés et la réorganisation commerciale. Instauré une gouvernance de division avec pilotage mensuel des KPIs, suivi du cash et communication régulière avec les équipes. Restructuré l'organisation en remplaçant plusieurs managers clés dans les fonctions commerciales, opérations, engineering et supply chain. Repris le pilotage commercial avec une refonte complète du processus de vente, l'introduction d'un système bid/no bid et une réorganisation des équipes par segments de marché. Repositionné l'activité d'une logique produit vers une approche solutions afin de pénétrer le marché industriel et commercial (C&I). Piloté les mesures d'urgence liées à la crise supply chain mondiale, incluant hausse tarifaire, sécurisation fournisseurs et amélioration du forecasting jusqu'à 18 mois. Restructuré les opérations et la gestion de projets afin de renforcer l'exécution industrielle et améliorer les marges après-vente. Supervisé le lancement du nouvel ERP Sage X3 et contribué aux réflexions stratégiques de carve-out et de croissance externe.",
        resultat:               "Retour à un cash-flow opérationnel positif en moins de 6 mois et augmentation de plus de 70 % des prises de commandes, avec remplissage des usines jusqu'à fin 2024. Transformation engagée avec succès vers un modèle orienté solutions à plus forte valeur ajoutée.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "ETI familiale internationale",
        type:                   "Leadership & Organisation",
        secteur:                "Industrie & Ingénierie",
        resume:                 "Transformation et industrialisation d'un groupe familial international en forte croissance, avec structuration multi-entreprises, accélération rentable et renforcement de la stratégie buy-and-build.",
        problematique_initiale: "Organisation en forte croissance composée de multiples PME internationales avec peu de pilotage consolidé, absence de KPIs harmonisés, portefeuille produits à rationaliser et image de marque à moderniser. Nécessité d'améliorer l'exécution opérationnelle, d'industrialiser les processus et de saisir des opportunités de croissance externe.",
        actions:                "Défini et lancé un programme de transformation pour structurer l'organisation autour des marchés stratégiques et d'une logique de groupe international intégré. Mis en place une organisation fonctionnelle transverse avec clarification des responsabilités, gouvernance mensuelle et pilotage par KPIs consolidés. Repositionné le marketing au cœur des décisions produits afin de rationaliser les portefeuilles et définir les roadmaps de développement avec les équipes engineering. Piloté le rebranding international et structuré les gammes produits autour de segments clairs. Introduit des processus S&OP, demand planning et revues grands projets afin d'améliorer la performance supply chain et la fiabilité des livraisons. Conduit plusieurs projets stratégiques d'innovation industrielle, notamment dans les équipements de sécurité électrique, l'intelligence artificielle et les services digitaux. Piloté l'intégration de sociétés acquises et conduit une acquisition stratégique pour renforcer le positionnement du groupe. Structuré la gouvernance internationale avec délégations d'autorité, compliance et harmonisation des pratiques entre entités.",
        resultat:               "Croissance du CA de +33 % et progression de l'EBIT de +92 %, avec structuration réussie d'une organisation internationale multi-entreprises et accélération de la stratégie de croissance externe.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME deeptech",
        type:                   "Leadership & Organisation",
        secteur:                "Industrie & Ingénierie",
        resume:                 "Stabilisation et structuration d'une PME deeptech sous tension financière, avec relance de la dynamique commerciale et renforcement du go-to-market via la distribution et l'innovation.",
        problematique_initiale: "PME deeptech confrontée à une liquidité fragile, un go-to-market peu structuré et une dynamique commerciale insuffisante pour soutenir la croissance. Nécessité de renforcer le pilotage opérationnel et de clarifier les priorités commerciales dans un environnement technologique exigeant.",
        actions:                "Réalisé un diagnostic opérationnel afin d'identifier les principaux leviers de stabilisation financière et commerciale. Mis en place un suivi régulier des KPIs afin de renforcer la visibilité sur l'activité, les ventes et la trésorerie. Repris l'animation des réunions commerciales et contrats afin d'améliorer le pilotage des opportunités et la discipline d'exécution. Revu la stratégie go-to-market en renforçant l'approche via les réseaux de distribution et partenaires commerciaux. Accompagné la direction dans la structuration des priorités commerciales et opérationnelles afin de soutenir la montée en puissance de l'entreprise. Contribué au pilotage d'un projet d'innovation structurant afin de soutenir le développement technologique et la création de valeur à long terme.",
        resultat:               "Stabilisation de la liquidité et croissance de +35 %, avec amélioration de la visibilité commerciale et renforcement du pilotage opérationnel.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "Société d'investissement",
        type:                   "Finance & Pilotage",
        secteur:                "Finance & Investissement",
        resume:                 "Structuration et lancement d'une stratégie buy-and-build dans l'industrie et les services aftermarket, avec sécurisation rapide d'une première acquisition et construction d'un pipeline M&A international.",
        problematique_initiale: "Société d'investissement indépendante souhaitant accélérer une stratégie buy-and-build sur des PME industrielles et de services. Nécessité de formaliser le positionnement d'investissement, identifier des cibles pertinentes et sécuriser rapidement un premier deal créateur de valeur.",
        actions:                "Contribué à la définition de l'equity story et des axes stratégiques de croissance externe du fonds. Identifié, qualifié et rencontré des cibles potentielles dans les secteurs industriels et aftermarket. Évalué les sociétés ciblées sous l'angle stratégique, opérationnel et financier afin d'identifier les leviers de création de valeur. Participé aux discussions de valorisation et aux négociations avec actionnaires et dirigeants de PME. Accompagné la structuration des scénarios de build-up et des synergies potentielles entre acquisitions futures. Apporté une expertise industrielle et opérationnelle afin de sécuriser l'adéquation stratégique des cibles avec le projet d'investissement.",
        resultat:               "Structuration de la stratégie M&A et concrétisation d'une première acquisition en moins d'un an, avec constitution d'un pipeline qualifié pour soutenir la stratégie de croissance externe.",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
