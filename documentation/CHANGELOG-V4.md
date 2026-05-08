# Changelog OPValue+ Site V4

Suivi des évolutions appliquées sur la V4, par phase.

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
