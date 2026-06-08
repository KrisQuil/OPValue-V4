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
        client:                 "Croc Saveur",
        client_logo:            "images/clients/croc-saveur.png",
        contexte:               "TPE Restauration",
        type:                   "Résilience & Retournement",
        secteur:                "Agroalimentaire & CHR",
        resume:                 "5 ans entre la décision de sauvegarde et la cession. Plan de continuation obtenu en 12 mois, 100% des emplois maintenus et 100% des dettes apurées, avec un remboursement substantiel des actionnaires.",
        problematique_initiale: "Activité en grave difficulté financière, dettes accumulées, besoin urgent d'un redressement et d'une stratégie de sortie viable.",
        actions:                "Appuyer le dirigeant dans le pilotage de la procédure de sauvegarde : relation avec les avocats, présence mensuelle au tribunal de commerce, aide à la négociation avec les fournisseurs. Travailler sur le pivot à opérer de l'activité, développement d’une activité en marque blanche pour dynamiser le volume des ventes. Préparer la cession de l’actif dans les années à venir.",
        resultat:               "Obtention du plan continuation au bout de 12 mois, redressement de l’activité et cession du fonds de commerce après 5 ans permettant un apurement de 100% des dettes avec un remboursement substantiel des actionnaires.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Conseil orga et IT",
        type:                   "Résilience & Retournement",
        secteur:                "Services & Conseil",
        resume:                 "Une PME du conseil passée en 24 mois de 21 à 25 M€ de CA, et d'un résultat de –0,4 M€ à +1 M€. Le déclic : refonte de l'organisation, dynamique commerciale réamorcée, alignement du Codir.",
        problematique_initiale: "Organisation déstructurée, dynamique commerciale en perte de vitesse, rentabilité négative.",
        actions:                "Travailler avec le dirigeant sur une structuration de l'organisation plus efficace avec un pilotage adapté. Mettre en place une dynamique commerciale. Mettre en place la cohésion au sein du codir.",
        resultat:               "En 2 ans, CA : 21M€ → 25M€ et Résultat : -0,4M€ → +1M€.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Négoce matériel",
        type:                   "Gouvernance & Actionnariat",
        secteur:                "Commerce & Distribution",
        resume:                 "Un dirigeant qui voulait reprendre 100% de sa société sans en avoir les moyens. Au final : 95% des parts à –50% du prix initial vendeur, financé par un crédit vendeur de 25%.",
        problematique_initiale: "Le président, détenteur de 20% du capital, veut racheter 100% du capital, sans cash suffisant et avec une attente élevée en termes de prix de la part des vendeurs",
        actions:                "Donner confiance au Président dans la faisabilité de l’opération. Valider la valorisation de l’entreprise (différence forte en les attentes des vendeurs et la capacité du Président). Accompagner le président à chaque étape de négociation. Monter un BP posant les bases d’une stratégique sur 5 ans. Trouver un partenaire financier capable de suivre l’opération.",
        resultat:               "Le président a racheté 95% de la société, 5% au management. Le prix a été de -50% du prix initial des vendeurs. Le financement s’est fait grâce à un crédit vendeur de 25% du prix.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "PME Logiciels (cession M&A)",
        type:                   "Transmission & Cession",
        secteur:                "Tech & IA",
        resume:                 "Accompagnement d'un dirigeant de la mise sur le marché à la signature : entreprise cédée en 9 mois, au prix réaliste, avec un cédant satisfait des conditions.",
        problematique_initiale: "Marché de niche, acquéreurs potentiels limités, et une société non préparée à la vente.",
        actions:                "Valorisation et alignement du dirigeant sur la vraie valeur de marché de l'entreprise. Préparation à la cession : organisation, nettoyage des comptes, mise en ordre juridique. Construction du deck et du teaser. Sourcing d'acquéreurs et d'avocats partenaires. Préparation et pilotage des négociations.",
        resultat:               "Cession actée en 9 mois. Cédant satisfait des conditions.",
      },
      {
        client:                 "Confidentiel",
        client_logo:            null,
        contexte:               "TPE Conseil (audit stratégique)",
        type:                   "Gouvernance & Actionnariat",
        secteur:                "Services & Conseil",
        resume:                 "2 semaines d'audit qui ont mis le doigt sur les 2 vrais leviers de création de valeur d'une TPE conseil, et révélé l'imminence d'un passage en procédure collective.",
        problematique_initiale: "Société en perte de vitesse, gouvernance à clarifier, pilotage défaillant, et une trésorerie extrêmement tendue.",
        actions:                "Cadrage avec le Président. Interviews des parties prenantes clés. Diagnostic croisé business, organisation, pilotage. Rapport et restitution avec recommandations actionnables et alerte majeure sur la trésorerie.",
        resultat:               "Moyen terme : 2 axes majeurs de création de valeur identifiés : repositionnement du business model et nécessité d'un pilotage business. Très court terme : un plan d’actions autour de la gestion de la trésorerie et de son pilotage.",
      },
    ],
  };
  if (typeof enregistrerMembre === 'function') enregistrerMembre(data);
})();
