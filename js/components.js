/**
 * ============================================================
 *  OPValue+ — Composants partagés (navigation + footer)
 *  Ce fichier génère le header et le footer sur toutes les pages.
 *  Modifiez-le une fois, c'est appliqué partout.
 * ============================================================
 */

const COMPONENTS = {

  /**
   * Génère la barre de navigation
   * @param {string} activePage - identifiant de la page active (ex: "accueil", "equipe", "offre"...)
   */
  renderNav(activePage = "") {
    const pages = [
      { id: "situations",label: "Vos situations",       href: "vos-situations.html" },
      { id: "op",        label: "Le monde de l'OP",     href: "operating-partner.html" },
      { id: "offre",     label: "Approche",             href: "offre.html" },
      { id: "secteurs",  label: "Secteurs",             href: "secteurs.html" },
      { id: "references",label: "Missions",             href: "references.html" },
      { id: "equipe",    label: "L'équipe",             href: "equipe.html" },
    ];

    const links = pages.map(p =>
      `<a href="${p.href}" class="${p.id === activePage ? 'active' : ''}">${p.label}</a>`
    ).join('');

    const nav = document.createElement('nav');
    nav.id = 'navbar';
    nav.innerHTML = `
      <a href="index.html" class="nav-logo" aria-label="OPValue+ – Accueil">
        <img src="images/logo-opv-fond-bleu.png" alt="OPValue+">
      </a>
      <div class="nav-links" id="navLinks">
        ${links}
        <a href="contact.html" class="nav-cta">Parlons-en</a>
      </div>
      <button type="button" class="nav-burger" id="navBurger"
              aria-label="Ouvrir le menu de navigation"
              aria-expanded="false"
              aria-controls="navLinks">
        <span></span><span></span><span></span>
      </button>
    `;

    document.body.prepend(nav);

    // Scroll effect
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    // Burger menu — accessible (button + aria-expanded synchronisé)
    const burger = document.getElementById('navBurger');
    const navLinks = document.getElementById('navLinks');
    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      burger.setAttribute('aria-label', isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation');
    });

    // Smooth scroll for anchor links on same page
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.getElementById('navLinks').classList.remove('open');
        }
      });
    });
  },

  /**
   * Génère le footer
   */
  renderFooter() {
    const C = typeof SITE_CONTENT !== 'undefined' ? SITE_CONTENT : null;

    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="index.html" aria-label="OPValue+ – Accueil">
            <img src="images/logo-opv-fond-bleu.png" alt="OPValue+" class="footer-logo">
          </a>
        </div>
        <div class="footer-links">
          <a href="vos-situations.html">Vos situations</a>
          <a href="operating-partner.html">Le monde de l'OP</a>
          <a href="offre.html">Approche</a>
          <a href="secteurs.html">Secteurs</a>
          <a href="references.html">Missions</a>
          <a href="equipe.html">L'équipe</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-copy">
          ${C ? C.meta.copyright : '© 2025 OPValue+. Tous droits réservés.'}
          &nbsp;·&nbsp; <a href="mentions-legales.html" style="color:inherit;text-decoration:none;opacity:.7">Mentions légales</a>
          &nbsp;·&nbsp; <a href="politique-confidentialite.html" style="color:inherit;text-decoration:none;opacity:.7">Politique de confidentialité</a>
        </div>
      </div>
    `;

    document.body.appendChild(footer);
  },

  /**
   * Active les animations reveal (scroll)
   */
  initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(el => {
        if (el.isIntersecting) el.target.classList.add('visible');
      });
    }, { threshold: .1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  /**
   * Injecte les portraits depuis SITE_IMAGES
   */
  injectPortraits() {
    if (typeof SITE_IMAGES !== 'undefined') {
      document.querySelectorAll('img[data-portrait]').forEach(img => {
        const id = img.getAttribute('data-portrait');
        if (SITE_IMAGES[id]) {
          img.src = SITE_IMAGES[id];
          img.style.display = '';
        }
      });
    }
  },

  /**
   * Charge tous les fichiers membres et retourne un tableau
   * Les fichiers membres définissent chacun MEMBRE_DATA
   */
  getAllMembres() {
    if (typeof TOUS_LES_MEMBRES !== 'undefined') return TOUS_LES_MEMBRES;
    return [];
  },

  /**
   * Retourne le nombre total de missions cumulées sur l'ensemble du collectif.
   * Calculé dynamiquement à partir des fichiers `js/membres/*.js`.
   * Sert à éviter les "35 missions" en dur dans le HTML.
   */
  getTotalMissionsCount() {
    return this.getAllMembres().reduce((acc, m) => acc + ((m.missions || []).length), 0);
  },

  /**
   * Injecte le compteur de missions dans tous les éléments du DOM marqués :
   *   - [data-missions-count]      → remplace le contenu par le nombre brut (ex: 37)
   *   - [data-missions-count-text] → remplace les jetons `{n}` du contenu par le nombre
   *
   * Exemple HTML :
   *   <h3 data-missions-count>—</h3>
   *   <p data-missions-count-text>de valeur générée en {n} missions</p>
   */
  injectMissionsCount() {
    const n = this.getTotalMissionsCount();
    document.querySelectorAll('[data-missions-count]').forEach(el => {
      el.textContent = String(n);
    });
    document.querySelectorAll('[data-missions-count-text]').forEach(el => {
      // Remplacement dans textContent pour préserver le HTML environnant si pas de balises imbriquées,
      // sinon remplacement de innerHTML (les valeurs du dataset sont contrôlées côté dev, pas XSS).
      const tpl = el.dataset.tpl || el.innerHTML;
      if (!el.dataset.tpl) el.dataset.tpl = el.innerHTML; // mémorise le template pour re-render éventuel
      el.innerHTML = tpl.replace(/\{n\}/g, String(n));
    });
  },

  /**
   * Initialisation complète d'une page
   * @param {string} activePage - identifiant de la page active
   */
  init(activePage) {
    this.renderNav(activePage);
    this.renderFooter();
    this.initReveal();
    this.injectPortraits();
    this.injectMissionsCount();
  }
};
