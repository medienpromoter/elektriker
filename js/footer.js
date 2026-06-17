// Footer in jede Seite injizieren
// footer-placeholder muss im HTML vorhanden sein

function renderFooter() {
  const isTopLevel = !window.location.pathname.includes("/leistungen/");
  const prefix = isTopLevel ? "" : "../";

  const footer = document.getElementById("footer-placeholder");
  if (!footer) return;

  footer.innerHTML = `
<footer>
  <p>
    <strong>[Firmenname]</strong> &mdash;
    [Straße] [Nr.], [PLZ] [Stadt] &mdash;
    Tel.: <a href="tel:[Telefonnummer]">[Telefonnummer]</a> &mdash;
    <a href="mailto:[E-Mail]">[E-Mail]</a>
  </p>
  <p>
    <a href="${prefix}impressum.html">Impressum</a> &mdash;
    <a href="${prefix}datenschutz.html">Datenschutz</a>
  </p>
  <p>&copy; <span id="footer-jahr"></span> [Firmenname] &mdash; Alle Rechte vorbehalten</p>
</footer>`;

  document.getElementById("footer-jahr").textContent = new Date().getFullYear();
}
