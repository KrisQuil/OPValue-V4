# Mini-spec — Page « Vos situations »
## Document de référence pour le développement (Sprint 1 — Phase A bis)

**Date** : 2026-05-08
**Statut** : architecture validée par CQ. À exécuter dans le Sprint 1 (Phase A bis, J5-J7).
**Objectif** : créer le point d'entrée client-centré du site, qui transforme un signal d'inconfort en porte d'entrée vers le métier d'OP.

---

## 1. Pourquoi cette page existe

Aujourd'hui, le site explique ce qu'est un Operating Partner (Le monde de l'OP), comment OPValue+ travaille (Notre approche), sur quels secteurs (Secteurs), avec quelles preuves (Cas d'usage) et avec qui (L'équipe). Mais il manque la **première marche du funnel** : la reconnaissance du signal client.

Le visiteur (dirigeant ou fonds) ne se réveille pas en pensant « il me faut un Operating Partner ». Il se réveille avec un problème concret : son EBITDA décroche, il veut céder, il vient de signer avec un fonds, son organisation craque... La page « Vos situations » est le miroir où il se reconnaît, avant qu'on lui parle de qui on est.

**Effet recherché** : « C'est moi, ça. → Tiens, ils en parlent. → Mais c'est quoi un Operating Partner ? → [Lecture Le monde de l'OP] »

---

## 2. Position dans l'architecture

### Nav (mise à jour)

L'onglet « Vos situations » devient le **1<sup>er</sup> onglet** de la nav, avant « Le monde de l'OP ».

| Position | Onglet | URL |
|---|---|---|
| 1 | **Vos situations** *(nouveau)* | `vos-situations.html` |
| 2 | Le monde de l'OP | `operating-partner.html` |
| 3 | Notre approche | `offre.html` |
| 4 | Secteurs | `secteurs.html` |
| 5 | Cas d'usage | `references.html` |
| 6 | L'équipe | `equipe.html` |
| → | Parlons-en (CTA) | `contact.html` |

**Implications techniques** :
- `js/components.js` : ajouter l'entrée en 1<sup>re</sup> position dans le tableau `pages` de `renderNav()` et dans le footer
- Nouvel `id` : `"situations"` — utilisé pour l'état actif (`COMPONENTS.init('situations')`)

### Liens entrants vers la nouvelle page

- Nav (logique d'attente automatique)
- Footer (logique d'attente automatique)
- **Home** : ajouter en bas de la section « Vos enjeux » un lien-pont *« Vous vous reconnaissez ? Voir toutes vos situations → »* qui pointe vers `vos-situations.html`

### Liens sortants depuis la nouvelle page

- Chaque carte scénario → page `references.html?type=[Transformation|Croissance|M&A]` (filtrée)
- Bridge en bas → `operating-partner.html` (Le monde de l'OP)
- CTA-banner habituel → `offre.html` (Notre approche) + `contact.html` (Parlons-en)

---

## 3. Architecture de la page

```
┌──────────────────────────────────────────────────┐
│ NAVBAR (héritée)                                  │
├──────────────────────────────────────────────────┤
│ PAGE-HEADER                                       │
│   <h1>Vous reconnaissez votre situation ?</h1>   │
├──────────────────────────────────────────────────┤
│ INTRO (1 paragraphe court, navy clair / blanc)   │
│ "Ce qui amène les dirigeants et les fonds à      │
│  nous appeler, ce ne sont pas des concepts.      │
│  Ce sont des signaux concrets. Voici les plus    │
│  fréquents — et ce que nous y apportons."        │
├──────────────────────────────────────────────────┤
│ GRILLE 5-7 CARTES (auto-fit minmax 320px 1fr)    │
│                                                   │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐ │
│  │  Carte 1   │  │  Carte 2   │  │  Carte 3   │ │
│  │  ...       │  │  ...       │  │  ...       │ │
│  └────────────┘  └────────────┘  └────────────┘ │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐ │
│  │  Carte 4   │  │  Carte 5   │  │  Carte 6   │ │
│  │  ...       │  │  ...       │  │  ...       │ │
│  └────────────┘  └────────────┘  └────────────┘ │
│                                                   │
├──────────────────────────────────────────────────┤
│ BRIDGE — bandeau plein largeur navy               │
│                                                   │
│   Sur ces situations, un Operating Partner        │
│   agit autrement qu'un cabinet de conseil         │
│   — voici pourquoi.                               │
│                                                   │
│   [→ Le métier d'Operating Partner]              │
│                                                   │
├──────────────────────────────────────────────────┤
│ CTA BANNER (héritée)                              │
│   → Notre approche  /  → Parlons-en              │
├──────────────────────────────────────────────────┤
│ FOOTER (hérité)                                   │
└──────────────────────────────────────────────────┘
```

---

## 4. Anatomie d'une carte scénario

```
┌─────────────────────────────────────────────────┐
│  [TAG TYPE]                            [✦ icon] │  ← header carte
│                                                  │
│  « Mon EBITDA décroche                          │  ← signal (citation)
│    depuis 3 trimestres »                         │
│                                                  │
│  ─────────────────────                          │  ← séparateur
│                                                  │
│  Ce que vous nous demandez :                     │  ← libellé léger
│  Stopper l'hémorragie et reprendre              │
│  la trajectoire                                  │
│                                                  │
│  Leviers : Stratégie · Finance · Organisation    │  ← chips
│                                                  │
│  → Voir un cas similaire                         │  ← lien vers cas d'usage
│                                                  │
└─────────────────────────────────────────────────┘
```

### Spécifications de la carte

| Élément | Détails |
|---|---|
| **Tag type** | Pastille en haut à gauche : `Transformation` (orange foncé) / `Croissance` (orange clair) / `M&A` (navy clair) |
| **Icône** *(optionnel)* | Emoji ou SVG en haut à droite (ex. ⚠️ pour transfo, 📈 pour croissance, 🤝 pour M&A) |
| **Signal** | Citation client en italique serif, taille 1.1-1.2rem, line-height 1.4 |
| **Demande** | Libellé court (« Ce que vous nous demandez : ») + 1 phrase factuelle |
| **Leviers** | 2-4 leviers en chips séparés par `·` (taille 0.8rem, couleur text-light) |
| **Lien sortant** | `→ Voir un cas similaire` en orange, pointe vers `references.html?type=[X]` |

### Variations possibles
- Cartes en mode **collapse / expand** sur mobile : le signal seul visible, le reste s'ouvre au tap
- **Hover** : légère élévation + bordure orange (cohérent avec les `.member-card` existantes)

---

## 5. Données — les 5-7 scénarios

À finaliser à partir des **25 missions réelles** stockées dans `OPValuePlus_Missions.xlsx` et dans les fichiers `js/membres/*.js`. Critères de sélection :
- Au moins 1 carte par grand type (Transformation, Croissance, M&A)
- Couverture sectorielle large (industrie, services, santé, etc.)
- Privilégier les signaux les plus fréquents (qui font écho à des cas multiples)

### Proposition de scénarios initiaux (à valider)

| # | Type | Signal | Ce que vous nous demandez | Leviers | Lien |
|---|---|---|---|---|---|
| 1 | Transformation | « Mon EBITDA décroche depuis 3 trimestres » | Stopper l'hémorragie et reprendre la trajectoire | Stratégie · Finance · Organisation | `references.html?type=Transformation` |
| 2 | Croissance | « On passe de 6 à 25 M€ en 3 ans, on craque » | Structurer l'organisation pour absorber la croissance | Organisation · Commercial · RH | `references.html?type=Croissance` |
| 3 | M&A | « Le fondateur veut céder dans 18 mois — il faut valoriser » | Préparer la valorisation et le processus de cession | Stratégie · Finance · Gouvernance | `references.html?type=M%26A` |
| 4 | Croissance | « Un fonds vient d'entrer au capital, ils demandent un Operating Partner » | Co-piloter avec le fonds et tenir le plan de création de valeur | Gouvernance · Finance · Pilotage | `references.html?type=Croissance` |
| 5 | M&A | « On veut racheter une boîte mais le management actuel doute de l'intégration » | Sécuriser la cible et l'intégration post-deal | Stratégie · Finance · Organisation | `references.html?type=M%26A` |
| 6 | Transformation | « Notre business model s'essouffle, il faut pivoter » | Repenser le modèle et exécuter la bascule | Stratégie · Innovation · Commercial | `references.html?type=Transformation` |
| 7 | Transformation | « L'équipe dirigeante est fatiguée, le cap se brouille » | Remettre du leadership et de la lucidité au sommet | Leadership · Gouvernance · Stratégie | `references.html?type=Transformation` |

⚠️ **Avant exécution** : croiser ces propositions avec les 25 missions réelles. Adapter les libellés pour qu'ils résonnent avec des cas concrets que le collectif a réellement traités.

---

## 6. Stockage des données dans `site-content.js`

Nouveau bloc à ajouter dans `SITE_CONTENT` :

```js
situations_scenarios: {
  title: "Vous reconnaissez votre situation ?",
  intro: "Ce qui amène les dirigeants et les fonds à nous appeler, ce ne sont pas des concepts. Ce sont des signaux concrets. Voici les plus fréquents — et ce que nous y apportons.",
  cartes: [
    {
      type: "Transformation",       // pour le tag + le filtre
      icon: "⚠️",                    // optionnel
      signal: "Mon EBITDA décroche depuis 3 trimestres",
      demande: "Stopper l'hémorragie et reprendre la trajectoire",
      leviers: ["Stratégie", "Finance", "Organisation"],
    },
    // ... autres scénarios
  ],
  bridge: {
    texte: "Sur ces situations, un Operating Partner agit autrement qu'un cabinet de conseil — voici pourquoi.",
    cta_label: "Le métier d'Operating Partner",
    cta_href: "operating-partner.html",
  },
},
```

---

## 7. Composants techniques à créer

### HTML — `vos-situations.html` (nouveau fichier)

Structure quasi-identique aux autres pages internes (héritage de la palette / typo). Sections :
1. `<section class="page-header">` (h1 unique, comme les autres pages)
2. `<section class="situations-page">` (intro + grille de cartes)
3. `<section class="situations-bridge">` (bandeau navy plein largeur avec texte + CTA)
4. `<section class="cta-banner">` (héritée)

### CSS — classes nouvelles dans `style.css`

| Classe | Rôle |
|---|---|
| `.situations-page` | Section conteneur de l'intro + grille |
| `.situations-page-inner` | `max-width: 1200px; margin: 0 auto; padding: 5rem 3rem;` |
| `.situations-intro` | Paragraphe d'intro, texte navy clair, max-width 720px, marge inférieure |
| `.scenarios-grid` | Grille auto-fit `repeat(auto-fit, minmax(320px, 1fr))`, gap 1.5rem |
| `.scenario-card` | Carte unitaire : background cream, border 1px, padding 2rem, transition hover |
| `.scenario-card:hover` | Bordure orange + translateY(-4px) (cohérent avec `.member`) |
| `.scenario-tag` | Pastille en haut de la carte, couleur selon type |
| `.scenario-tag.type-transformation` | Background orange foncé `#cf5400`, texte blanc |
| `.scenario-tag.type-croissance` | Background orange `var(--orange)`, texte blanc |
| `.scenario-tag.type-ma` | Background navy `var(--navy)`, texte blanc |
| `.scenario-icon` | Emoji ou icône en haut à droite |
| `.scenario-signal` | Citation : `font-family: var(--serif); font-style: italic; font-size: 1.15rem; line-height: 1.4` |
| `.scenario-demande-label` | Petit libellé en majuscules, taille 0.7rem, couleur text-light |
| `.scenario-demande` | Texte court factuel |
| `.scenario-leviers` | Chips séparés par `·`, taille 0.8rem |
| `.scenario-link` | Lien vers cas d'usage, orange, flèche `→` |
| `.situations-bridge` | Bandeau navy plein largeur, padding 4rem, text-align center |
| `.situations-bridge p` | Texte serif, taille 1.4rem, color blanc, line-height 1.45 |
| `.situations-bridge .btn-primary` | Bouton hérité, mais blanc-sur-orange |

### JS — extension de `site-content.js` + script de rendu

Le script de rendu va dans `vos-situations.html` (en bas de page, comme les autres) :

```js
const C = SITE_CONTENT;
if (C.situations_scenarios) {
  // Intro
  document.getElementById('situations-intro').textContent = C.situations_scenarios.intro;
  
  // Grille
  document.getElementById('scenarios-grid').innerHTML = C.situations_scenarios.cartes.map((c, i) => {
    const typeSlug = c.type.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-');
    const filterValue = encodeURIComponent(c.type);
    const leviers = c.leviers.map(l => `<span>${l}</span>`).join(' · ');
    return `
      <div class="scenario-card reveal reveal-delay-${(i % 4) + 1}">
        <div class="scenario-card-head">
          <span class="scenario-tag type-${typeSlug}">${c.type}</span>
          ${c.icon ? `<span class="scenario-icon">${c.icon}</span>` : ''}
        </div>
        <p class="scenario-signal">« ${c.signal} »</p>
        <div class="scenario-demande-label">Ce que vous nous demandez</div>
        <p class="scenario-demande">${c.demande}</p>
        <div class="scenario-leviers">${leviers}</div>
        <a href="references.html?type=${filterValue}" class="scenario-link">Voir un cas similaire →</a>
      </div>
    `;
  }).join('');

  // Bridge
  document.getElementById('situations-bridge-text').textContent = C.situations_scenarios.bridge.texte;
  document.getElementById('situations-bridge-cta').textContent = C.situations_scenarios.bridge.cta_label;
  document.getElementById('situations-bridge-cta').href = C.situations_scenarios.bridge.cta_href;
}
COMPONENTS.init('situations');
```

---

## 8. Mise à jour des autres fichiers

### `js/components.js`

Ajouter en 1<sup>re</sup> position du tableau `pages` dans `renderNav()` :
```js
{ id: "situations", label: "Vos situations", href: "vos-situations.html" },
```

Et dans le footer (`renderFooter()`), ajouter en 1<sup>re</sup> position des liens :
```html
<a href="vos-situations.html">Vos situations</a>
```

### `index.html` — modification de la section « Vos enjeux »

Aujourd'hui la section « Vos enjeux » sur la home a 2 colonnes (Dirigeants / Investisseurs) avec questions. À ajouter en bas de cette section, juste avant la fermeture, un lien-pont :

```html
<div class="enjeux-bridge reveal">
  <a href="vos-situations.html" class="enjeux-bridge-link">
    Vous vous reconnaissez ? Voir toutes vos situations →
  </a>
</div>
```

CSS associé :
```css
.enjeux-bridge { margin-top: 3rem; text-align: center; }
.enjeux-bridge-link {
  font-family: var(--serif);
  font-size: 1.15rem;
  color: var(--orange);
  text-decoration: none;
  font-weight: 500;
  transition: transform .3s, color .3s;
}
.enjeux-bridge-link:hover {
  color: var(--orange-light);
  transform: translateX(4px);
  display: inline-block;
}
```

---

## 9. SEO — métadonnées de la page

```html
<title>Vos situations | OPValue+ – Quand faire appel à un Operating Partner</title>
<meta name="description" content="EBITDA qui décroche, croissance qui craque, cession à préparer, fonds au capital, business model à pivoter — voici les situations où un Operating Partner OPValue+ change la donne.">
```

À horizon S8 (sprint perf/SEO technique) : ajouter du markup `schema.org/Service` ou `schema.org/ItemList` sur la grille de cartes.

---

## 10. Tests d'acceptation

Avant de clôturer la Phase A bis :

- [ ] La page s'ouvre depuis l'onglet nav « Vos situations » (1<sup>re</sup> position)
- [ ] La page est en cohérence visuelle avec les autres pages internes (page-header navy, h1 unique, fond cream / blanc)
- [ ] Les 5-7 cartes s'affichent correctement (responsive : 3 cols desktop, 2 tablet, 1 mobile)
- [ ] Chaque tag de type a sa couleur distinctive
- [ ] Le clic sur « Voir un cas similaire » ouvre la page Cas d'usage **avec le filtre de type pré-appliqué** (et déclenche l'auto-scroll vers les fiches comme on l'a fait précédemment)
- [ ] Le bandeau bridge s'affiche, le texte est lisible, le CTA pointe bien vers Le monde de l'OP
- [ ] Le lien depuis la home (« Voir toutes vos situations → ») fonctionne
- [ ] Test mobile : aucune carte ne déborde, les leviers en chips passent à la ligne proprement
- [ ] Hover des cartes : effet d'élévation cohérent avec les `.member-card` existantes
- [ ] Les méta `<title>` et `<meta description>` sont en place

---

## 11. Décisions encore à trancher en cours d'exécution

- **Présence ou non d'icônes par carte** (l'emoji ⚠️ / 📈 / 🤝 risque de paraître peu pro vs des SVG sobres — à voir au moment du rendu)
- **Faut-il une 4<sup>e</sup> couleur de tag pour les scénarios mixtes** (ex. transmission qui mélange Transformation et M&A) — par défaut, on classe sur le type principal
- **Faut-il afficher le nombre de cas similaires dans chaque carte** (ex. « 8 cas similaires → ») — utile commercialement, mais demande de calculer dynamiquement depuis `tous-les-membres.js`. À voir si on l'ajoute dès S1 ou plus tard

---

*Cette spec sert de référence pendant le développement de la Phase A bis du Sprint 1. Toute déviation par rapport à ce doc doit être tracée dans le `CHANGELOG-V4.md`.*
