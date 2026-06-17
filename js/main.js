// Einstiegspunkt – wird auf jeder Seite eingebunden
// Initialisiert Nav und Footer, setzt aktives Jahr

document.addEventListener("DOMContentLoaded", function () {
  // Aktiven Slug aus data-seite Attribut am <body> lesen
  const seite = document.body.dataset.seite || "";

  if (typeof renderNav === "function") renderNav(seite);
  if (typeof renderFooter === "function") renderFooter();
});
