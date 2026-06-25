/**
 * ============================================================
 *  OPValue+ — Pré-rendu statique (étape de build, exécutée en CI)
 * ============================================================
 *  Exécute le JavaScript de chaque page dans un DOM (jsdom) et
 *  réécrit le HTML avec le contenu déjà rempli (enjeux, missions,
 *  équipe, chiffres...). Objectif : SEO + vitesse d'affichage (LCP),
 *  sans renoncer au JS — les <script> sont conservés pour que le
 *  site reste interactif côté client (filtres, menu, etc.).
 *
 *  Principe :
 *   1. On "inline" les scripts locaux (js/...) pour que jsdom les
 *      exécute exactement comme un navigateur (portée partagée,
 *      ordre conservé : tous-les-membres -> membres -> components).
 *   2. On stubbe IntersectionObserver pour que les éléments .reveal
 *      reçoivent .visible : le contenu est visible même sans JS.
 *   3. On retire la nav, le footer et le lien d'évitement injectés
 *      par le JS : le client les recrée (sinon ils seraient en double).
 *   4. On restaure les balises <script src> d'origine avant d'écrire.
 *
 *  Idempotence : les conteneurs sont remplis via innerHTML = ...
 *  (remplacement), donc la ré-exécution côté client ne duplique rien.
 *
 *  Usage : node prerender.js <dossier_du_bundle>
 *  Tolérant aux pannes : si une page échoue, elle conserve sa version
 *  actuelle (rendu client) et le build continue.
 * ============================================================
 */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const DIR = process.argv[2] || '.';
const PAGES = fs.readdirSync(DIR).filter(f => f.endsWith('.html'));

// Déclenche immédiatement l'IntersectionObserver -> .reveal devient visible.
const IO_STUB = `
window.IntersectionObserver = class {
  constructor(cb){ this._cb = cb; }
  observe(el){ this._cb([{ isIntersecting:true, target:el }]); }
  unobserve(){} disconnect(){} takeRecords(){ return []; }
};`;

function prerenderPage(file) {
  const full = path.join(DIR, file);
  let html = fs.readFileSync(full, 'utf8');

  // 1) Inline les scripts locaux pour exécution par jsdom
  html = html.replace(
    /<script\s+src="(js\/[^"]+)"><\/script>/g,
    (m, src) => {
      const p = path.join(DIR, src);
      if (!fs.existsSync(p)) return m;
      return `<script data-pr-src="${src}">\n${fs.readFileSync(p, 'utf8')}\n</script>`;
    }
  );
  // 2) Stub IntersectionObserver en tête de <head>
  html = html.replace(/<head>/i, `<head>\n<script data-pr-stub>${IO_STUB}</script>`);

  // 3) Exécution
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    url: 'https://opvalueplus.com/' + file,
  });
  const doc = dom.window.document;

  // 4) Retire les éléments recréés côté client (évite les doublons)
  doc.querySelectorAll('#navbar, footer, a.skip-link, script[data-pr-stub]')
     .forEach(n => n.remove());

  // 5) Sérialise + restaure les <script src> d'origine
  let out = dom.serialize();
  out = out.replace(
    /<script data-pr-src="([^"]+)">[\s\S]*?<\/script>/g,
    (m, src) => `<script src="${src}"></script>`
  );

  dom.window.close();
  return out;
}

let ok = 0, ko = 0;
for (const file of PAGES) {
  try {
    const before = fs.readFileSync(path.join(DIR, file), 'utf8');
    const after = prerenderPage(file);
    fs.writeFileSync(path.join(DIR, file), after, 'utf8');
    console.log(`  ✓ ${file.padEnd(30)} ${before.length} -> ${after.length} o`);
    ok++;
  } catch (e) {
    console.warn(`  ⚠ ${file} : pré-rendu ignoré (${e.message}). Version client conservée.`);
    ko++;
  }
}
console.log(`Pré-rendu terminé : ${ok} page(s) OK, ${ko} ignorée(s).`);
