/**
 * ============================================================
 *  OPValue+ — Consentement cookies + Google Analytics (GA4)
 * ============================================================
 *  - Aucun cookie de mesure n'est déposé avant l'accord du visiteur.
 *  - « Accepter » et « Refuser » ont le même poids (recommandations CNIL).
 *  - Le choix est mémorisé 6 mois (localStorage), puis redemandé.
 *  - Lien « Gestion des cookies » dans le pied de page pour changer d'avis
 *    (tout élément portant l'attribut data-cookie-settings rouvre le bandeau).
 *  - Les cookies Google Analytics expirent au bout de 13 mois maximum.
 *
 *  Pour changer d'identifiant Google Analytics : modifier GA_ID ci-dessous.
 *  Chargé dans le <head> de chaque page avec l'attribut defer.
 * ============================================================
 */
(function () {
  'use strict';

  var GA_ID = 'G-7RBQSVYZKZ';
  var STORAGE_KEY = 'opv_consent';
  var VALIDITE_MS = 182 * 24 * 60 * 60 * 1000;   // 6 mois
  var GA_COOKIE_EXPIRES = 13 * 30 * 24 * 60 * 60; // 13 mois, en secondes

  // Pas de bandeau ni de mesure pendant le pré-rendu (jsdom) ni pour les robots
  if (/jsdom|bot|crawler|spider|lighthouse/i.test(navigator.userAgent || '')) return;

  function lireChoix() {
    try {
      var v = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (v && (v.c === 'accepte' || v.c === 'refuse') && Date.now() - v.t < VALIDITE_MS) return v.c;
    } catch (e) {}
    return null;
  }

  function enregistrerChoix(choix) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ c: choix, t: Date.now() })); } catch (e) {}
  }

  function chargerAnalytics() {
    if (window.__opvGaCharge) return;
    window.__opvGaCharge = true;
    window['ga-disable-' + GA_ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { cookie_expires: GA_COOKIE_EXPIRES });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function supprimerCookiesAnalytics() {
    window['ga-disable-' + GA_ID] = true;
    var hote = location.hostname.replace(/^www\./, '');
    document.cookie.split(';').forEach(function (c) {
      var nom = c.split('=')[0].trim();
      if (/^_ga/.test(nom)) {
        ['', '; domain=' + hote, '; domain=.' + hote].forEach(function (d) {
          document.cookie = nom + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
        });
      }
    });
  }

  function fermerBandeau() {
    var b = document.getElementById('opv-cookie-banner');
    if (b) b.remove();
  }

  function appliquer(choix) {
    var avant = lireChoix();
    enregistrerChoix(choix);
    fermerBandeau();
    if (choix === 'accepte') {
      chargerAnalytics();
    } else {
      supprimerCookiesAnalytics();
      // Si la mesure tournait déjà sur cette page, on recharge pour l'arrêter net
      if (avant === 'accepte' && window.__opvGaCharge) location.reload();
    }
  }

  function afficherBandeau() {
    if (document.getElementById('opv-cookie-banner')) return;
    var b = document.createElement('div');
    b.id = 'opv-cookie-banner';
    b.className = 'cookie-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-live', 'polite');
    b.setAttribute('aria-label', 'Gestion des cookies');
    b.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<p class="cookie-banner-text">' +
          'Avec votre accord, nous utilisons Google Analytics pour mesurer la fréquentation du site. ' +
          'Aucune donnée n\'est utilisée à des fins publicitaires. Vous pouvez changer d\'avis à tout moment ' +
          'via « Gestion des cookies » en bas de page. ' +
          '<a href="politique-confidentialite.html#cookies">En savoir plus</a>' +
        '</p>' +
        '<div class="cookie-banner-actions">' +
          '<button type="button" class="cookie-btn" data-choix="refuse">Refuser</button>' +
          '<button type="button" class="cookie-btn" data-choix="accepte">Accepter</button>' +
        '</div>' +
      '</div>';
    b.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-choix]');
      if (btn) appliquer(btn.getAttribute('data-choix'));
    });
    document.body.appendChild(b);
  }

  // Lien « Gestion des cookies » (pied de page ou politique de confidentialité)
  document.addEventListener('click', function (e) {
    var lien = e.target.closest('[data-cookie-settings]');
    if (lien) { e.preventDefault(); afficherBandeau(); }
  });

  function demarrer() {
    var choix = lireChoix();
    if (choix === 'accepte') chargerAnalytics();
    else if (choix === null) afficherBandeau();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer);
  else demarrer();

  window.OPV_CONSENT = { ouvrir: afficherBandeau };
})();
