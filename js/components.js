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
      { id: "accueil",   label: "Accueil",            href: "index.html" },
      { id: "op",        label: "Operating Partner",   href: "operating-partner.html" },
      { id: "offre",     label: "Notre offre",         href: "offre.html" },
      { id: "references",label: "Cas d'usage",         href: "references.html" },
      { id: "equipe",    label: "L'équipe",            href: "equipe.html" },
      { id: "contact",   label: "Contact",             href: "contact.html" },
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
      <div class="nav-burger" id="navBurger">
        <span></span><span></span><span></span>
      </div>
    `;

    document.body.prepend(nav);

    // Scroll effect
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    // Burger menu
    document.getElementById('navBurger').addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('open');
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
        <div class="footer-brand">OPValue<span>+</span></div>
        <div class="footer-links">
          <a href="index.html">Accueil</a>
          <a href="operating-partner.html">Operating Partner</a>
          <a href="offre.html">Notre offre</a>
          <a href="references.html">Cas d'usage</a>
          <a href="equipe.html">Équipe</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-copy">${C ? C.meta.copyright : '© 2025 OPValue+. Tous droits réservés.'}</div>
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
   * Initialisation complète d'une page
   * @param {string} activePage - identifiant de la page active
   */
  init(activePage) {
    this.renderNav(activePage);
    this.renderFooter();
    this.initReveal();
    this.injectPortraits();
  }
};
