/**
 * nav.js – Zentrale Navigation
 * Injiziert Desktop-Nav und Mobile-Nav; erkennt automatisch ob Root- oder Unterseite.
 */
(function () {
  const sub = window.location.pathname.includes('/leistungen/');
  const r   = sub ? '../' : '';      // Pfad zu Root
  const lp  = sub ? ''   : 'leistungen/'; // Pfad zu Leistungsseiten

  const LEISTUNGEN = [
    ['elektroinstallation.html',  'Elektroinstallation'],
    ['photovoltaik.html',         'Photovoltaik &amp; Speicher'],
    ['emobilitaet.html',          'E-Mobilit&auml;t &amp; Wallbox'],
    ['smarthome.html',            'Smart Home'],
    ['sicherheitstechnik.html',   'Sicherheitstechnik'],
    ['aussenbereich.html',        'Au&szlig;enbereich'],
    ['gewerbe.html',              'Gewerbe &amp; Industrie'],
    ['wartung-pruefung.html',     'Wartung &amp; Pr&uuml;fung'],
    ['notdienst.html',            'Notdienst 24/7'],
    ['beratung-foerderung.html',  'Beratung &amp; F&ouml;rderung'],
  ];

  /* ── Desktop-Dropdown ─────────────────────────────────── */
  const dropItems = LEISTUNGEN.map(([slug, label]) =>
    `<li><a href="${lp}${slug}">${label}</a></li>`
  ).join('');

  const mainNav = document.getElementById('main-nav');
  if (mainNav) {
    mainNav.innerHTML =
      `<ul>` +
        `<li><a href="${r}index.html">Startseite</a></li>` +
        `<li class="has-dropdown">` +
          `<a href="${r}leistungen.html">Leistungen</a>` +
          `<div class="nav-dropdown"><ul>${dropItems}</ul></div>` +
        `</li>` +
        `<li><a href="${r}kalkulator.html">Angebotsrechner</a></li>` +
        `<li><a href="${r}kontakt.html" class="nav-cta">Kontakt</a></li>` +
      `</ul>`;

    // Aktiven Link markieren
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    mainNav.querySelectorAll('a').forEach(function (a) {
      const href = a.getAttribute('href').split('/').pop();
      if (href === currentFile) a.setAttribute('aria-current', 'page');
    });
  }

  /* ── Mobile-Menü ──────────────────────────────────────── */
  const mobileItems = LEISTUNGEN.map(([slug, label]) =>
    `<a href="${lp}${slug}">${label}</a>`
  ).join('');

  const mobileNav = document.getElementById('mobile-menu');
  if (mobileNav) {
    mobileNav.innerHTML =
      `<ul>` +
        `<li><a href="${r}index.html">Startseite</a></li>` +
        `<li>` +
          `<span class="mob-toggle">Leistungen</span>` +
          `<div class="mob-sub">` +
            `<a href="${r}leistungen.html">Alle Leistungen</a>` +
            mobileItems +
          `</div>` +
        `</li>` +
        `<li><a href="${r}kalkulator.html">Angebotsrechner</a></li>` +
        `<li><a href="${r}kontakt.html">Kontakt</a></li>` +
      `</ul>`;
  }

  /* ── Events ───────────────────────────────────────────── */
  // Hamburger
  var hb = document.querySelector('.hamburger');
  var mm = document.getElementById('mobile-menu');
  if (hb && mm) {
    hb.addEventListener('click', function () {
      var o = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!o));
      mm.classList.toggle('is-open', !o);
    });
  }

  // Mobile Untermenü
  var mt = mobileNav && mobileNav.querySelector('.mob-toggle');
  var ms = mobileNav && mobileNav.querySelector('.mob-sub');
  if (mt && ms) {
    mt.addEventListener('click', function () {
      this.classList.toggle('is-open');
      ms.classList.toggle('is-open');
    });
  }
})();
