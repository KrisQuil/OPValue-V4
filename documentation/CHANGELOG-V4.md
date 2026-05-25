# Changelog OPValue+ Site V4

Suivi des évolutions appliquées sur la V4, par phase.

---

## Phase 5 — Sync fiches Word → JS membres (25/05/2026)

Synchronisation complète des 4 fiches missions Word fraîchement uploadées (Ploix, Galliath, Lasseigne, Quille) vers leurs `.js` respectifs. Ajout systématique du champ `resume` sur toutes les missions (5 par OP = 20 missions au total). Convention §10.2 INSTRUCTIONS-IA : Christophe a recueilli les 3 Word et pilote l'update ; les 3 OPs concernés (Ploix, Galliath, Lasseigne) recetteront leurs missions sur le site après déploiement.

| # | Changement | Fichier | Validation |
|---|---|---|---|
| 60 | Christophe Quille — 2 missions retirées : Groupe Ares (#1 docx) et TPE Conseil restructuring DCP (#7 docx). 2 nouvelles missions intégrées : Orata (PME Logiciels, cession M&A, Tech & IA) et Confidentiel TPE Conseil audit stratégique (Services & Conseil). Résumés et résultats des missions conservées (Croc Saveur, PME Conseil orga, PME Négoce matériel) mis à jour depuis docx (versions plus narratives, voix Christophe). Correction : PME Négoce, le président a racheté **95%** (pas 100%) | `js/membres/cq.js` | ⏳ recette Christophe |
| 61 | Frédéric Ploix — résumés ajoutés sur 5 missions. Mission #4 (Startup Logiciel IA) : type **Finance & Pilotage → Croissance & Scalabilité**. Mission #1 (PME industrielle) : correction "3 filiales → 2 filiales". Actions et résultats enrichis sur toutes les missions | `js/membres/fp.js` | ⏳ recette Frédéric Ploix |
| 62 | Frédéric Galliath — résumés ajoutés sur 5 missions. Résultats enrichis : #1 "Objectif CA x3 d'ici à 2029", #4 "70 M€ de renégociation en 9 mois. +70 cents sur le CA par convive. Retour à la rentabilité en 30 mois". Actions toutes plus détaillées | `js/membres/fg.js` | ⏳ recette Frédéric Galliath |
| 63 | Olivier Lasseigne — résumés ajoutés sur 5 missions. **Correction** : Mission #4 (Start-up Drones) résultat "CA x3 en 8 mois → CA x2 en 8 mois" (typo dans l'ancien js). Résultat #3 enrichi : "EBITDA +10,9% en 36 mois. Retard projet réduit de 78%" | `js/membres/ol.js` | ⏳ recette Olivier Lasseigne |

**Conventions appliquées partout** :
- Pas de champ `objectif` dans les `.js` (décision V4 figée — reste discipline interne dans les Word)
- Résumés tels que rédigés par chaque OP dans son docx (chacun garde son style — la consigne "impersonnel direct" reste pour les rédactions assistées, pas pour les résumés propres)
- Actions concaténées en string unique, avec point final automatique sur chaque action
- Logo client conservé uniquement pour Croc Saveur (cq) — Groupe Ares retiré avec la mission

**Reste à faire** (cycle suivant) :
- Champ `statut` Brouillon/Non Active/Active sur chaque mission (demandé par Christophe, à spécifier ensemble : sémantique, UI, filtre)
- Profils des 3 OPs restants : Bertrand Le Conte de Poly (bdp), Nicolas Bally (nb), Badr Hjiaj (bh) — pas encore mis à jour, leurs cartes restent en mode fallback (problématique en tête de carte au lieu du résumé)

---

## Phase 4 — Refonte cartes mission (25/05/2026)

Restructuration du rendu des fiches missions sur `references.html` pour mettre en avant un Résumé OCAR en tête de carte et améliorer le scan visiteur. Décisions arbitrées avec Christophe les 24-25/05/2026, après 3 itérations de maquette (v1 sur-conçue, v2 sobre + fade, v3 vocabulaire ajusté).

| # | Changement | Fichier | Validation |
|---|---|---|---|
| 40 | Ajout du champ `resume` sur les 5 missions de Christophe Quille — format impersonnel direct, lexique terrain (DCP / cessation de paiement, PSE, sauvegarde, crédit vendeur, carve-out) | `js/membres/cq.js` | ⏳ à valider visuellement |
| 41 | Refonte du template `renderCards` : Résumé en tête, Résultat avec fade vertical doux, expand révèle Problématique + Plan d'actions + Operating Partner. Bouton "Voir le détail" conservé. **Fallback gracieux** : si `mission.resume` absent, la `problematique_initiale` prend sa place en tête (pas de régression pour les 6 autres OPs) | `references.html` | ⏳ à valider visuellement |
| 42 | Refonte CSS case-card : nouvelles classes `.case-resume`, `.case-result` + `.case-result-text` (avec pseudo `::after` pour le fade), `.case-detail`, `.case-op`. Anciennes classes `.case-body`, `.case-text-clamp`, `.case-expand-only` retirées (template ne les utilise plus). Ajout `align-items:start` sur `.cases-grid` pour que les cartes ouvertes ne stretch pas leurs voisines | `css/style.css` | ⏳ à valider visuellement |
| 43 | Lien Operating Partner depuis carte mission → ancre `equipe.html#fiche-<id>` : ajout `card.id = 'fiche-' + m.id` dans la team grid d'`equipe.html`, et `scroll-margin-top:6rem` sur `.member` pour ne pas être caché par la nav fixe | `equipe.html` + `css/style.css` | ⏳ à valider visuellement |

**Convention figée** : champ "Objectif" écarté du site public (redondant avec Résumé+Résultat sur les missions Christophe), reste comme discipline interne dans les `.docx`.

**Vocabulaire arbitré** : label "Plan d'actions" (vs "Méthode" ou "Actions menées") car plus concret et cohérent avec les fiches Word. Bouton "Voir le détail" conservé (terme Web standard, plus concret que "Voir la méthode").

**Reste à faire** (cycle suivant) : les 6 autres OPs ont aujourd'hui leur carte en mode fallback (`problematique_initiale` affichée en tête). Quand chaque OP rédigera son `resume` selon les conventions OCAR, on injectera dans son `.js` après validation §10.2.

### Ajustements post-déploiement (25/05/2026)

| # | Changement | Fichier | Validation |
|---|---|---|---|
| 44 | Fade vertical du Résultat remplacé par clamp 2 lignes + ellipsis CSS automatique. Le fade dynamique donnait un rendu incohérent selon la longueur du Résultat (coupait au milieu de la phrase sur certaines cartes). Rendu maintenant prévisible : 1 ligne complète si court, 2 lignes max avec "…" automatique si long | `css/style.css` `.case-result-text` | ⏳ à valider |
| 45 | Tag type de mission rendu cliquable (button) : applique le filtre `type` et scroll vers la grille filtrée. Hover : fond orange-pale → orange plein avec texte blanc | `references.html` + `css/style.css` `.case-type-tag` | ⏳ à valider |
| 46 | Nom Operating Partner rendu cliquable (button) : applique le filtre `op` et scroll vers la grille filtrée. Remplace l'ancien lien vers `equipe.html#fiche-<id>` (intérêt faible selon Christophe — un filtre direct est plus utile) | `references.html` + `css/style.css` `.case-op-filter` | ⏳ à valider |
| 47 | Factorisation : nouvelle fonction `scrollToCases()` réutilisée par l'init URL et par les filtres au clic | `references.html` | ⏳ à valider |
| 48 | Fade Résultat réactivé en mode **cohérent universel** : hauteur fixe `3em` (2 lignes) + fade systématique `1.5em` en bas. Toutes les cartes ont désormais la même hauteur de zone Résultat, le fade s'applique au même endroit qu'il y ait ou non du contenu à fader. Sur l'ouverture (`.open`), hauteur passe à `auto` et fade disparaît | `css/style.css` `.case-result-text` | ⏳ à valider |
| 49 | Correction de l'espace manquant entre prénom et nom de l'OP (ex "OlivierLASSEIGNE") : `display: inline-flex` du bouton avalait les espaces entre les inline children. Retour au `display` par défaut (inline-block) | `css/style.css` `.case-op-filter` | ⏳ à valider |
| 50 | Typo du nom OP alignée sur `.case-section-text` : `color: var(--text-light)` (gris), `font-weight: 400` (normal au lieu de 500 gras). Flèche : `color: inherit` pour suivre le nom (gris par défaut, orange au hover via la transition de couleur du parent) | `css/style.css` `.case-op-filter` + `.arrow` | ⏳ à valider |
| 51 | Fade du Résultat : hauteur fixe **1 ligne** (`1.5em`) + fade **vertical bas** (linear-gradient `to bottom` transparent 30% → blanc 95%). La ligne reste lisible dans sa partie haute mais le bas s'efface, donnant le sentiment d'inachevé qui invite au clic | `css/style.css` `.case-result-text` | ⏳ à valider |

**Note** : l'ancre `equipe.html#fiche-<id>` reste fonctionnelle (id sur chaque carte membre + scroll-margin), elle n'est juste plus utilisée depuis les cartes mission. Disponible si besoin futur.

---

## Phase 3 — Restructuration sections existantes (partielle — 22/04/2026)

| # | Changement | Fichier | Validation |
|---|---|---|---|
| 5 | Bouton hero : « Échangeons → » → « Parlons-en → » | `index.html` l.23 | ⏳ à valider |
| 7 | Section « Vos enjeux » : 2 colonnes Dirigeants / Investisseurs avec questions détaillées (hydratée depuis `SITE_CONTENT.enjeux`) | `index.html` (section + script) + CSS `.enjeux-two` / `.enjeu-col` / `.enjeu-questions` | ⏳ à valider |
| 9 | Section Promesse : label « Ce que nous apportons » → « Notre promesse » + titre → motto « Décider vite. Exécuter juste. Tenir le cap avec vous. » + icône alignée au titre (flex `.promise-head`) | `index.html` + `css/style.css` | ⏳ à valider |
| 11 | Tableau comparatif mobile : tailles réduites, scroll hint, min-width 620px | `css/style.css` @media 768 | ⏳ à valider |
| 27 | Notre collectif : 3 blocs version v6.4 (Origine / Diversité / Écosystème) | déjà en place dans `site-content.js` l.168-181 | ✅ (rien à faire) |
| 32 | Contact : suppression bloc « Comment démarrer ? » (H3 + steps + CTA) | `contact.html` | ⏳ à valider |
| 33 | Contact : remplacement par texte FP (« Prenons 1h pour échanger… ») + styles `.contact-box-lead` | `contact.html` + `css/style.css` | ⏳ à valider |

### Ajouts suite arbitrages (22/04/2026)

| # | Changement | Fichier | Validation |
|---|---|---|---|
| 12 | Comparatif OP : « Diagnostic stratégique » passe de ✓ → ◐ (diag fait *avec* le client). Ajout d'une note sous le tableau : « Le diagnostic stratégique se construit toujours avec le dirigeant. Sur nos secteurs de référence, notre apport est total. » | `operating-partner.html` l.121 + `.comp-note` dans `css/style.css` | ⏳ à valider |
| 15 | Offre restructurée en 2 étapes **DIAGNOSTIC → EXECUTION** (ex-SCAN / BUILD / BOOST) avec durées 2-4 semaines puis 3-9 mois. Day Click définitivement retiré du contenu. Titre « Trois phases » → « Deux étapes », tag « Phase » → « Étape », grille 3 cols → 2 cols. Cartes démarrage (Diagnostic OPValue+ / Execution OPValue+) alignées. | `js/site-content.js` solution+demarrage, `offre.html` (meta, titre, script), `css/style.css` `.solution-cards` | ⏳ à valider |

**Restent en standby — décisions à valider** :
- **#17** 2-3 items de regroupement avant les 9 situations — standby (à voir plus tard)
- **#22** Mélange ordre des cas d'usage — standby (alternative à proposer par Christophe)

---

## Phase 2 — Harmonisation éditoriale ✅ (21/04/2026)

| # | Changement | Fichier | Validation |
|---|---|---|---|
| 3 / 26 | « Qui nous sommes » → « Qui sommes-nous ? » | `equipe.html` l.27 | ✅ |
| 29 | « Choisissez votre Operating Partner » → « Tous nos operating partners » | `site-content.js` l.277 + `equipe.html` l.44 | ✅ |
| 13 | Mise en gras : « …propose des solutions enracinées dans la réalité terrestre, et prend part aux résultats » | `operating-partner.html` l.38 | ✅ |
| 14 | « Une posture rare et complémentaire. » → « Une posture rare et complète. » | `operating-partner.html` l.100 | ✅ |
| 21 | ETI Marché de gros (FP) : « 2 projets en production » → « 1 projet en production » | `js/membres/fp.js` l.45 | ✅ |
| 28 | Reformulation CAPOP + lien Operating Partner Academy dans le bloc « Notre origine » | `site-content.js` l.171 | ✅ |
| 31 | FP — ajout « E-commerce » dans secteurs (à la fin) | `js/membres/fp.js` l.11 | ✅ |

**Points restants pour Phase 2 : aucun.**

---

## Phase 1 — Socle visuel et identité (partielle — 21/04/2026)

| # | Changement | Fichier | Validation |
|---|---|---|---|
| 1 | Typographie globale : 16px → 18px | `css/style.css` l.21 | ✅ |
| 2 | Logo texte remplacé par image (fond bleu) | `images/logo-opv-fond-bleu.png` (nouveau) + `js/components.js` + `css/style.css` | ✅ |
| 2b | Bandeau de nav aligné sur la couleur du logo (`#132441`) — variable `--logo-bg` | `css/style.css` | ✅ |
| 30 | Noms de famille en MAJ sur cartes équipe, contact et cas d'usage | CSS `.nom-fam` + `equipe.html` / `contact.html` / `references.html` | ✅ |
| 23 | Test thème cas d'usage : orange sur blanc (fond cream, cards blanches, accents orange) | `css/style.css` sections RESULTS + CASE STUDIES | ✅ (1ère itération — variante orange) |

### Fix correctif

- Page Équipe : suppression du paragraphe descriptif redondant (`collectif-desc`) qui affichait la concaténation brute des 3 blocs avec le HTML du lien visible en clair. Le lien CAPOP reste proprement rendu dans le bloc « Notre origine » uniquement.

**Restent en standby** (en attente d'inputs) :

- **#7 Visuel vague** section « Vos enjeux » — image ou SVG à fournir
- **#8 Icônes « Vos enjeux »** — style à choisir (emojis / line-icons / Lucide / FA)
- **#9 Icônes 5 piliers** — même choix que #8
