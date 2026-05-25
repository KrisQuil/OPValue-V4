# OPValue+ — Roadmap site web
## Mode agile, sprints de 15 jours

**Date** : 2026-04-30
**Objectif global** : livrer une V1 publiée pour montrer l'existence d'OPValue+, puis itérer pour transformer le site en outil de capture d'opportunités.
**Méthode** : sprints de 15 jours, démo en fin de sprint, rétro courte (15 min), backlog re-priorisé entre chaque sprint.

---

## 1. Vision en 3 horizons

| Horizon | Titre | Objectif | Sprints |
|---|---|---|---|
| **H1** | « Le site existe et capte » | Bascule V5 client-first + V1 publiée + minimum lead capture mesurable | S1 |
| **H2** | « Le site convertit » | Densifier la conversion (humain, lead magnet, profondeur secteur) | S2-S4 |
| **H3** | « Le site rayonne » | Faire du site un actif SEO et un asset commercial actif | S5-S8 |

**Décision actée 2026-04-30** : la bascule éditoriale V5 (textes client-first) précède la mise en prod et est intégrée au Sprint 1. On ne publie pas avec le ton actuel (ratio nous/vous 2:1).

---

## 2. Definition of Done par sprint

Pour qu'un sprint soit considéré « DONE », il faut :
- Toutes les modifs poussées sur le repo et déployées (GitHub Pages ou autre)
- Démo de 15 min auprès d'un OP du collectif
- Mise à jour du `CHANGELOG-V4.md` (ou successeur)
- Backlog suivant re-priorisé

---

## 3. KPIs à suivre (à activer dès Sprint 1 avec Plausible)

| KPI | Cible 3 mois | Cible 6 mois |
|---|---|---|
| Visites uniques / mois | 200 | 500 |
| Pages vues / session | 2,5 | 3,5 |
| Taux de scroll > 75 % sur home | 40 % | 55 % |
| Clics sur « Parlons-en » | 8 / mois | 25 / mois |
| RDV pris (Calendly) | 2 / mois | 6 / mois |
| Téléchargements lead magnet | n/a | 10 / mois |

---

## 4. Backlog priorisé (vue large)

| Item | Sprint cible | Effort | Priorité |
|---|---|---|---|
| **Bascule éditoriale V5 (textes client-first)** | **S1** | **M** | **🔴** |
| **Nouvelle page « Vos situations »** (1<sup>er</sup> onglet, scénarios + bridge vers Le monde de l'OP) | **S1** | **M** | **🔴** |
| Calendly intégré (Contact + CTA) | S1 | S | 🔴 |
| Plausible (tracking privacy-first) | S1 | S | 🔴 |
| Open Graph + Twitter Cards | S1 | S | 🔴 |
| CTA sticky « Parlons-en » | S1 | S | 🔴 |
| Sitemap.xml + robots.txt | S1 | S | 🔴 |
| Test mobile complet (iPhone + Android) | S1 | M | 🔴 |
| Mise en ligne V1 publique | S1 | S | 🔴 |
| Template fiche OP dédiée + 7 fiches | S2 | L | 🟠 |
| Lead magnet « Diagnostic flash » | S3 | L | 🟠 |
| Form qualifiant sur Contact | S3 | M | 🟠 |
| **FAQ (10 questions)** *— upgradée P2, validée par CQ le 2026-05-08 (« très intéressante et nécessaire »)* | **S3** | **M** | **🟠** |
| 7 pages secteurs dédiées (contenu) | S4 | XL | 🟡 |
| Hub publications « Le monde de l'OP » + 3 articles | S5 | L | 🟡 |
| Bandeau « Pourquoi OPValue+ » | S6 | M | 🟡 |
| Témoignages clients (4-6 verbatims) | S6 | M (dépend collecte) | 🟡 |
| Logos clients | S6 | S (dépend autorisations) | 🟢 |
| Vidéo collectif / OP | S7 | XL (tournage) | 🟢 |
| Performance (bundling, lazy load) | S8 | M | 🟢 |
| Lighthouse audit + corrections | S8 | M | 🟢 |

*Effort : S = ½ j ; M = 1-2 j ; L = 3-5 j ; XL = > 5 j*

---

## 5. Plan sprint par sprint

### Sprint 0 — Baseline V4 (en cours / quasi terminé)

**Status** : ✅ presque DONE
**Périmètre** : structure du site V4 + dernières modifs
**Faits** :
- Onglet « Accueil » supprimé (logo = home)
- Hero accueil allégé (taille alignée sur les autres pages)
- CTA milieu retirés, footer cohérent (pas d'Accueil)
- Page Équipe simplifiée (compteur missions cliquable)
- Page « Le monde de l'OP » (renommée) avec sidebar « Revue de presse et actualité » centralisée et scrollable
- Auto-scroll sur cas d'usage filtrés (titre à 40 %)

**Reste à faire avant clôture** :
- [ ] Vérifier que tout le contenu est en place (relire chaque page)
- [ ] Identifier les 2-3 ajustements V4 qui pourraient encore arriver
- [ ] Backup / commit Git propre

---

### Sprint 1 — « Bascule V5 + V1 publiée et mesurable » (15 j)

**Objectif** : appliquer la bascule éditoriale client-first au site, puis le mettre en ligne avec le minimum de conversion / mesure activé.

**Phase A — Bascule éditoriale V5 (J1-J4)**
Application du doc `preconisations-textes-v5.md` (décisions déjà figées) :
- [ ] **Hero** : option B clivante (« Quand le conseil ne suffit plus » / « Un dirigeant aguerri à vos côtés. Au quotidien. Sur les résultats. »)
- [ ] **Promesse** : 5 items réécrits en « Vous gagnez X » (avec le dernier item « Nous nous engageons financièrement » conservé en miroir)
- [ ] **Définition OP** : titre « Pourquoi un Operating Partner change la donne pour vous » + 4 items reformulés
- [ ] **Situations** : titre « Les moments où nous intervenons à vos côtés » + mini-questions sur chaque thème
- [ ] **Collectif** : 3 blocs réécrits côté bénéfice client
- [ ] **Contact** : titre « Parlons de votre situation » + sous-titre simplifié
- [ ] **CTA** : remplacer toutes les variantes par « Parlons-en » (uniformisation)
- [ ] Relecture finale + comptage Nous/Vous (cible : ratio inversé, 1 nous pour 2-3 vous)

**Phase A bis — Nouvelle page « Vos situations » (J5-J7)**
Création du 1<sup>er</sup> onglet, scénarios + bridge vers Le monde de l'OP. Suit la spec dédiée `mini-spec-vos-situations.md`.
- [ ] Création de `vos-situations.html` (page-header + intro + grille de cartes + bridge + cta-banner)
- [ ] Ajout des données scénarios dans `site-content.js` (5-7 cartes basées sur les missions réelles du collectif)
- [ ] Ajout des classes CSS dédiées (`.scenario-card`, `.scenario-bridge`, etc.)
- [ ] Ajout de l'onglet « Vos situations » en 1<sup>re</sup> position dans `components.js` (nav + footer)
- [ ] Mise à jour de la home : section « Vos enjeux » conserve son contenu actuel + ajout d'un lien-pont « Voir toutes vos situations → » vers la nouvelle page
- [ ] Liens sortants depuis chaque carte → page Cas d'usage filtrée (`?type=Transformation` etc.)
- [ ] Bridge en bas de page → `operating-partner.html` avec wording validé (« Sur ces situations, un Operating Partner agit autrement qu'un cabinet de conseil — voici pourquoi. »)

**Phase B — Conversion + mesure (J8-J11)**
- [ ] **Calendly** : compte créé, lien posé sur page Contact + CTA principal
- [ ] **Plausible** : compte créé, snippet sur toutes les pages, événements custom sur clic « Parlons-en » et clic « Calendly »
- [ ] **Open Graph + Twitter Cards** : balises sur les 9 pages (image OG dédiée + titre + description par page) — *9 pages avec « Vos situations »*
- [ ] **CTA sticky** : bouton flottant « Parlons-en » (en bas à droite, masqué tant qu'on est dans le hero, visible ensuite)

**Phase C — Mise en ligne (J12-J15)**
- [ ] **Sitemap.xml + robots.txt** : générés et déposés à la racine
- [ ] **Test mobile** : revue complète sur iPhone (Safari) + Android (Chrome) → corrections
- [ ] **Test cross-browser** : Chrome, Safari, Firefox, Edge
- [ ] **Mise en ligne** : domaine `opvalueplus.com` (ou subdomain), DNS, certificat SSL
- [ ] **Annonce** : poster LinkedIn d'annonce de mise en ligne (CQ + relais collectif)

**Démo de fin de sprint** :
- Comparaison avant/après textes (1 page représentative)
- Naviguer le site sur mobile et desktop avec un OP du collectif
- Montrer le tableau Plausible (live)
- Prendre un RDV test sur Calendly de bout en bout

**Risques / dépendances** :
- Compte Calendly à créer (qui ? Christophe pour démarrer puis distribué par OP plus tard)
- Domaine `opvalueplus.com` à vérifier (déjà acheté ?)
- Image Open Graph à créer (1200×630 px) — peut être un visuel sobre logo + baseline « Le conseil ne suffit plus »
- La bascule V5 doit être validée par 1-2 OP du collectif avant publication (alignement collectif)

---

### Sprint 2 — Humanisation OP (15 j)

**Objectif** : chaque OP a sa page propre, accessible depuis l'extérieur (LinkedIn) avec son histoire propre.

**Items** :
- [ ] **Template fiche OP** : `/equipe/[slug].html` avec parcours, missions complètes, citation, contact direct (mailto + Calendly), lien LinkedIn, photo en situation
- [ ] **7 fiches rédigées** : 1 par OP du collectif (Christophe + 6 autres)
- [ ] **Liens entrants** : depuis grille Équipe + page Contact + cartes secteurs (l'OP référent du secteur lié à sa fiche)
- [ ] **Premier suivi des KPIs** : lecture des données Plausible sur 1 mois post-mise en ligne

**Démo de fin de sprint** :
- Montrer fiche OP de Christophe + 2-3 autres
- Lecture du dashboard Plausible avec les premiers chiffres

**Risques** :
- Récolte des contenus profil pour les 6 autres OP (peut bloquer)
- Si bloqué, livrer 3-4 fiches d'abord et compléter en S3

---

### Sprint 3 — Conversion / lead gen + FAQ (15 j)

**Objectif** : multiplier les portes d'entrée commerciales et lever les objections silencieuses.

**Items** :
- [ ] **Lead magnet « Diagnostic flash »** : questionnaire 5 questions (situation, taille, urgence, sujet, contexte) → score + reco par mail
- [ ] **Form qualifiant sur Contact** : 4 champs en plus du nom/email (taille entreprise, secteur, urgence, sujet)
- [ ] **FAQ — 10 questions fréquentes** *(promue de S5 à S3)* : durée, prix, format, NDA, alignement résultats, OP vs cabinet, OP vs manager de transition, taille d'entreprise cible, secteurs, démarrage. Section sur la home OU page dédiée selon volume final. Markup `schema.org/FAQPage` pour les rich snippets Google.
- [ ] **Optimisation CTA** : A/B test sur formulations « Parlons-en » vs « Réserver mon 1<sup>er</sup> échange »
- [ ] Première lecture des données Plausible / Calendly → réajustement priorités

**Démo** : remplir le diagnostic + vérifier le mail reçu + voir la FAQ avec markup Google rich snippet en preview.

---

### Sprint 4 — Profondeur SEO secteurs (15 j)

**Objectif** : 7 pages secteurs dédiées, capter du trafic longue traîne.

**Items** :
- [ ] **Template page secteur** : `/secteurs/[slug].html` avec angle éditorial (« L'OP dans l'industrie : 3 enjeux clés »), 2-3 cas d'usage embarqués, profil de l'OP référent du secteur, CTA contextuel
- [ ] **7 pages rédigées**
- [ ] **Maillage interne** : depuis la page Secteurs vers chaque page, et depuis chaque page vers les cas d'usage filtrés correspondants

**Démo** : ouvrir une recherche Google « operating partner industrie » et voir où on se classe.

---

### Sprint 5 — Hub « Le monde de l'OP » (15 j)

**Objectif** : faire de la page « Le monde de l'OP » un véritable hub de contenu.

**Items** :
- [ ] **Section publications** : ajout d'une zone « Articles & livres blancs » sous la sidebar, avec 3 premiers articles
  - Article 1 : « Pourquoi recourir à un Operating Partner ? » (positionnement, 600 mots)
  - Article 2 : « Retour Operating Partners Day 2025 » (compte-rendu, 400 mots)
  - Article 3 : « Lecture du livre blanc Deloitte / I&S Adviser » (analyse, 500 mots)
- [ ] **Enrichissement FAQ** *(la FAQ initiale a été livrée en S3)* : ajout de 5-10 questions supplémentaires si feedback prospects suggère qu'il en manque

**Démo** : 3 articles publiés, navigables, partage LinkedIn d'un article test.

---

### Sprint 6 — Différenciation premium + témoignages (15 j)

**Objectif** : armer le site face aux concurrents directs (Hekze, Klaak, I&S, Stratora).

**Items** :
- [ ] **Bandeau « Pourquoi OPValue+ »** : 3-4 différenciateurs revendiqués (CAPOP, collectif, alignement financier, 1<sup>er</sup> échange gratuit) — placé sur home et page « Notre approche »
- [ ] **Témoignages clients** : 4-6 verbatims courts (idéalement avec nom + fonction + photo, sinon semi-anonymisés)
- [ ] **Logos clients** (si autorisations OK) : mosaïque sur home et page Cas d'usage

**Démo** : home retravaillée + page Cas d'usage avec verbatims intégrés.

**Risques** :
- Collecte verbatims est le bloquant principal — démarrer la sollicitation dès S5

---

### Sprint 7 — Vidéo & contenu rich (15 j)

**Objectif** : capital narratif + différenciant émotionnel.

**Items** :
- [ ] **Vidéo collectif** (60-90 s) : 7 OP qui se présentent en 1 phrase, montage rythmé, posée sur home + page Équipe
- [ ] **Vidéos individuelles** (optionnel, 1 par OP, 60 s) : sur les fiches OP

**Démo** : vidéo collectif live sur le site.

**Risques** : tournage à organiser (peut décaler de 1 sprint).

---

### Sprint 8 — Performance & SEO technique (15 j)

**Objectif** : Lighthouse > 90 partout, pas d'angle SEO laissé au hasard.

**Items** :
- [ ] **Bundling / minification** JS et CSS
- [ ] **Lazy loading** des portraits OP et images de cas
- [ ] **`font-display: swap`** sur Google Fonts
- [ ] **Lighthouse audit** complet → corrections perfs / accessibilité / SEO
- [ ] **Schema.org JSON-LD** : Organization, BreadcrumbList, Article, Person

**Démo** : Lighthouse score avant / après par page.

---

## 6. Cérémonies (rituels agile)

| Cérémonie | Durée | Quand | Participants |
|---|---|---|---|
| **Sprint planning** | 30 min | Jour 1 du sprint | CQ + (assistant IA / dev) |
| **Daily** (asynchrone) | 5 min | Quand utile | CQ + assistant |
| **Démo sprint** | 30 min | Jour 15 | CQ + 1-2 OP du collectif |
| **Rétro** | 15 min | Jour 15 (après démo) | CQ + assistant |

---

## 7. Ce qui n'est pas dans la roadmap (volontairement)

- **App mobile / SaaS** : OPValue+ est un cabinet, le site web suffit
- **Refonte design complète** : la charte actuelle (navy/orange/serif) est tenable
- **Paiement en ligne** : pas pertinent pour ce business model (per diem, forfait, success fee jalons)
- **Multilangue** : pas avant que la cible française ne soit saturée

---

## 8. Backlog "exotique" / hors-roadmap (idées à parker)

- Newsletter mensuelle (« Le bulletin de l'OP »)
- Partenariat éditorial avec une publication PE
- Espace privé pour les fonds clients
- Sitemap visuel interactif (mapping des compétences x secteurs)
- Page « Carrière » si OPValue+ recrute des OP

---

*Ce doc est vivant : il évolue à chaque rétro. La priorité absolue reste S1 — sortir une V1 publiée et mesurable.*
