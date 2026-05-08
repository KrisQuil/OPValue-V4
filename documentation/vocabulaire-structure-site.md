# OPValue+ — Vocabulaire de structure du site
## Référentiel partagé pour parler la même langue

---

## 1. Carte mentale (vue d'une page type)

Voici une page type du site (par exemple `operating-partner.html`), de haut en bas :

```
┌────────────────────────────────────────────────────────┐
│  NAVBAR  (logo + menu + bouton "Parlons-en")           │  ← fixe en haut
├────────────────────────────────────────────────────────┤
│                                                         │
│  PAGE HEADER  (zone navy : section-label + h1)         │  ← intro page
│                                                         │
├────────────────────────────────────────────────────────┤
│                                                         │
│  SECTION 1  (contenu principal)                         │
│                                                         │
├────────────────────────────────────────────────────────┤
│  SECTION 2  (autre bloc)                                │
├────────────────────────────────────────────────────────┤
│  SECTION 3  ...                                         │
├────────────────────────────────────────────────────────┤
│  CTA BANNER  (bandeau d'appels à l'action)              │  ← avant-dernier
├────────────────────────────────────────────────────────┤
│  FOOTER  (logo + liens + mentions légales)              │  ← en bas
└────────────────────────────────────────────────────────┘
```

Sur la page d'accueil (`index.html`), le **page-header** est remplacé par un **hero** plus dramatique (background image, stats, etc.).

---

## 2. Glossaire — termes principaux

### 2.1 Zones de la page

| Terme | Aussi appelé | Sur OPValue+ | Rôle |
|---|---|---|---|
| **Navbar** | Barre de navigation, menu, *navigation bar* | `<nav>` (généré par `components.js → renderNav()`) | Menu fixe en haut, toujours visible. Logo + onglets + CTA. |
| **Header** *(au sens large)* | En-tête de page | Tout le haut de la page, **incluant la navbar et le page-header** | Le terme « header » est ambigu. Je l'utilise au sens HTML5 quand c'est précis, sinon je dis explicitement « navbar » ou « page-header ». |
| **Page-header** | Bandeau de page, *page intro section* | `<section class="page-header">` (sur op, offre, secteurs, references, equipe, contact) | Bandeau navy juste sous la navbar, contient le `section-label` + le `h1` de la page. |
| **Hero** | *Hero section, hero banner* | `<section class="hero">` (uniquement sur `index.html`) | Bandeau d'accueil dramatique. Plus grand, plus immersif, avec image de fond, stats. C'est le « gros bandeau » de la home. |
| **Section** | Bloc, *section* | `<section class="...">` | Tout bloc horizontal de contenu. Le site a typiquement 4-7 sections par page. Chaque section a son propre fond (alterné navy / blanc / cream). |
| **Sidebar** | Panneau latéral, *sidebar, aside* | `<div class="sidebar-press">` (sur la page « Le monde de l'OP ») | Colonne latérale à droite (ou gauche). Sur OPValue+, il y a la box « Revue de presse et actualité » en sidebar. |
| **CTA banner** | Bandeau d'appel à l'action | `<section class="cta-banner">` | Avant le footer, propose 2-3 prochains pas (« Découvrir notre offre », « Rencontrez l'équipe », etc.). |
| **Footer** | Pied de page | `<footer>` (généré par `components.js → renderFooter()`) | Tout en bas, contient logo + liens nav + copyright + mentions légales. |

### 2.2 Éléments visuels dans une section

| Terme | Équivalent FR | Sur OPValue+ | Exemple |
|---|---|---|---|
| **Section-label** | Étiquette / sur-titre | `<div class="section-label">` | Petit texte orange en majuscules au-dessus du `h1` (ex. « Le monde de l'OP », « Nos résultats »). |
| **Section-title** | Titre de section | `<h2 class="section-title">` | Le grand titre serif d'une section interne (pas le h1 de la page). |
| **Tag** | Étiquette, *tag, label* | `<div class="hero-tag">`, `<span class="case-tag">` | Petit texte court servant à catégoriser (ex. « Operating Partners » au-dessus du h1 du hero). |
| **Badge** | Pastille, *badge* | `<span class="sol-badge">` | Capsule arrondie qui annote (ex. « Gratuit », « Optionnel » sur les phases de l'offre). |
| **Card** | Carte, *card* | `<div class="member">`, `<div class="case-card">`, `<div class="result-card">` | Bloc rectangulaire encadré qui contient une unité de contenu (un OP, un cas, un résultat). |
| **Grid** | Grille, *grid* | `<div class="team-grid">`, `<div class="cases-grid">` | Conteneur qui dispose plusieurs cards en grille (typiquement 2/3/4 colonnes selon largeur). |
| **CTA** | Appel à l'action | `<a class="btn-primary">`, `<a class="nav-cta">` | Bouton ou lien qui pousse à une action commerciale (« Parlons-en », « Réserver un RDV »). |
| **Breadcrumb** | Fil d'Ariane | (supprimé du site V4 — voir doc analyse) | Chemin de navigation « Accueil > Page courante ». |
| **Quote / Blockquote** | Citation | `<blockquote>` dans `.quote-section` | Citation mise en exergue avec fond image + overlay sombre. |

### 2.3 Concepts de positionnement / comportement

| Terme | Définition simple | Exemple sur OPValue+ |
|---|---|---|
| **Fixed** | Élément qui reste collé à un endroit du **viewport** (l'écran), même en scrollant. | La **navbar** (`position: fixed; top: 0`). |
| **Sticky** | Élément qui scrolle normalement avec la page, puis se colle quand il atteint un seuil. | La **sidebar** « Revue de presse » (`position: sticky; top: 100px`). |
| **Absolute** | Élément positionné par rapport à son parent positionné. Sort du flux normal. | Le `.hero-bg` (image de fond, positionnée dans le hero). |
| **Relative** | Élément qui reste dans le flux mais peut être décalé / sert de référence à des absolus. | Souvent le parent du hero, qui contient des éléments absolus dedans. |
| **Above the fold** | Au-dessus de la ligne de flottaison (visible sans scroller). | Sur la home : la nav + le haut du hero. |
| **Below the fold** | Sous la ligne de flottaison (nécessite de scroller). | Le reste : enjeux, promesse, etc. |
| **Viewport** | La zone d'écran visible. | Sur desktop : ~1920×900 ; sur mobile : ~390×800. |
| **Inset** | Raccourci pour `top right bottom left`. `inset: 0` = collé aux 4 bords. `inset: 90px 0 0 0` = 90px du haut, 0 ailleurs. | Le `.hero-bg` est en `inset: 90px 0 0 0` (commence sous la navbar). |
| **Z-index** | Ordre d'empilement (qui passe devant qui). Plus c'est haut, plus c'est devant. | La navbar est en `z-index: 1000` pour être devant tout. |

---

## 3. Concepts UX / commerciaux

| Terme | Définition | Exemple |
|---|---|---|
| **Funnel** | Entonnoir de conversion : étapes par lesquelles passe un visiteur, de la découverte à l'action. | Découverte (Accueil) → Compréhension (Le monde de l'OP) → Choix (Notre approche) → Preuve (Cas d'usage) → Humain (L'équipe) → Action (Contact). |
| **Lead** | Contact commercial qualifié (prospect ayant donné ses coordonnées). | Un dirigeant qui remplit le form Contact ou réserve un RDV via Calendly. |
| **Lead magnet** | Contenu gratuit en échange des coordonnées (bait pour récolter des leads). | Le futur « Diagnostic flash 5 questions » prévu en S3. |
| **CTA** | Call To Action — élément poussant à passer à l'étape suivante. | Bouton « Parlons-en », lien « Voir nos cas d'usage ». |
| **Hero** *(au sens marketing)* | La promesse principale faite en haut de la page d'accueil. | « Des dirigeants au service des dirigeants ». |
| **Pitch** | Discours commercial court qui pose la promesse. | Sub-headline du hero + 3 stats clés. |
| **Preuve sociale** | Éléments qui rassurent par l'exemple. | Les 100 M€ de valeur générée, les 25 missions, les futurs témoignages clients. |

---

## 4. Termes spécifiques au code OPValue+

| Terme | Signification | Fichier |
|---|---|---|
| **`SITE_CONTENT`** | L'objet JS centralisant tous les textes du site. | `js/site-content.js` |
| **`MEMBRE_DATA` / `enregistrerMembre`** | Le format des fiches OP individuelles + la fonction d'enregistrement. | `js/membres/*.js` + `js/tous-les-membres.js` |
| **`COMPONENTS`** | L'objet JS qui contient les fonctions de rendu (nav, footer, animations, portraits). | `js/components.js` |
| **`COMPONENTS.init('xxx')`** | L'appel qui initialise la nav + le footer + les animations sur une page. Le paramètre est l'ID de l'onglet actif. | Appelé en bas de chaque HTML page. |
| **`reveal`** | Classe CSS qui déclenche une animation d'apparition au scroll. | Utilisée sur de nombreux `<div>` (`reveal reveal-delay-1`, `reveal-delay-2`, etc.). |
| **`monde_op`** | La nouvelle section dans `SITE_CONTENT` pour la sidebar « Revue de presse et actualité ». | `js/site-content.js` |

---

## 5. Conventions de nommage utilisées

- **Classes en kebab-case** : `.hero-bg`, `.sidebar-press`, `.cta-banner`
- **IDs unique par élément** : `id="enjeux-two"`, `id="prom-grid"` (utilisés par le JS pour injecter du contenu)
- **Préfixes** :
  - `.hero-*` = éléments du hero accueil
  - `.page-header-*` = éléments du bandeau d'intro des pages internes
  - `.member-*` = éléments des fiches OP
  - `.cta-*` = éléments d'appel à l'action
  - `.cm-*` = éléments « contact-membres » (page contact)
  - `.case-*` = éléments des cas d'usage
  - `.sol-*` = éléments de la solution (offre)

---

## 6. À retenir pour nos discussions

- Quand je dis **« navbar »**, je parle uniquement de la barre du haut avec le menu, jamais de la zone d'intro de la page.
- Quand je dis **« page-header »**, c'est le bandeau navy juste en-dessous de la navbar (avec le `section-label` + `h1`) — ce n'est PAS le `<head>` HTML.
- Quand je dis **« hero »**, c'est uniquement le grand bandeau d'accueil avec image, stats, etc. — il n'existe que sur `index.html`.
- Quand je dis **« section »**, je parle d'un bloc horizontal de contenu (sans préciser lequel — il faut alors que je précise « la section Promesse », « la section CTA banner », etc.).
- Quand je dis **« footer »**, c'est uniquement le pied de page tout en bas — pas le « bas de la page » au sens visuel.

*Doc vivant : à enrichir au fur et à mesure que de nouveaux concepts émergent dans nos échanges.*
