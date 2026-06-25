/**
 * ============================================================
 *  OPValue+ — Portraits des membres (chemins de fichiers)
 *
 *  Les portraits sont désormais de vrais fichiers .webp dans
 *  images/portraits/ (chargés en lazy), au lieu d'images base64
 *  intégrées au JS. Avantage : pages beaucoup plus légères et
 *  meilleur référencement / vitesse d'affichage.
 *
 *  INSTRUCTIONS :
 *  1. Pour remplacer une photo, déposez votre image dans
 *     images/portraits/ au format .webp (carré, ~300×300px),
 *     en gardant le même nom de fichier (ex: cq.webp).
 *  2. Ne changez pas les clés ci-dessous (fp, ol, cq, ...).
 * ============================================================
 */

const SITE_IMAGES = {
  fp:  "images/portraits/fp.webp",
  ol:  "images/portraits/ol.webp",
  cq:  "images/portraits/cq.webp",
  fg:  "images/portraits/fg.webp",
  bdp: "images/portraits/bdp.webp",
  nb:  "images/portraits/nb.webp",
  bh:  "images/portraits/bh.webp",
};

if (typeof module !== "undefined") module.exports = SITE_IMAGES;
