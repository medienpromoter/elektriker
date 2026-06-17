#!/usr/bin/env node
// Generiert leistungen/*.html aus content/content.js
// Aufruf: node scripts/generate.js

const fs = require("fs");
const path = require("path");

const { LEISTUNGEN } = require("../content/content.js");

const outDir = path.join(__dirname, "../leistungen");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

function renderLeistungPage(l) {
  const abschnitte = l.abschnitte
    .map(
      (a, i) => `
    <section aria-labelledby="abschnitt-${i}-titel">
      <h2 id="abschnitt-${i}-titel">${a.titel}</h2>
      <p>${a.text}</p>
    </section>`
    )
    .join("\n");

  const foerderung =
    l.foerderung && l.foerderung.length
      ? `<section aria-labelledby="foerderung-titel">
      <h2 id="foerderung-titel">Förderung</h2>
      <ul>${l.foerderung.map((f) => `<li>${f}</li>`).join("")}</ul>
    </section>`
      : "";

  const hinweis = l.hinweis
    ? `<aside><p><strong>Hinweis:</strong> ${l.hinweis}</p></aside>`
    : "";

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${l.titel} – [Firmenname] [Stadt]</title>
  <meta name="description" content="${l.kurztext.slice(0, 155)}">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body data-seite="leistungen">

  <header>
    <a href="../index.html"><img src="../images/logo.png" alt="[Firmenname] Logo" width="200"></a>
    <p>Tel.: <a href="tel:[Telefonnummer]">[Telefonnummer]</a></p>
    <div id="nav-placeholder"></div>
  </header>

  <main>
    <nav aria-label="Brotkrume">
      <ol>
        <li><a href="../index.html">Startseite</a></li>
        <li><a href="../leistungen.html">Leistungen</a></li>
        <li aria-current="page">${l.titel}</li>
      </ol>
    </nav>

    <h1>${l.titel} in [Stadt]</h1>
    <p>${l.kurztext}</p>

    ${abschnitte}
    ${foerderung}
    ${hinweis}

    <section aria-labelledby="cta-titel">
      <h2 id="cta-titel">${l.cta}</h2>
      <a href="../kontakt.html">${l.cta}</a>
      <a href="tel:[Telefonnummer]">[Telefonnummer]</a>
    </section>
  </main>

  <div id="footer-placeholder"></div>

  <script src="../content/content.js"></script>
  <script src="../js/nav.js"></script>
  <script src="../js/footer.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>`;
}

let count = 0;
for (const l of LEISTUNGEN) {
  const filePath = path.join(outDir, `${l.slug}.html`);
  // Bereits manuell gepflegte Seiten nicht überschreiben
  if (fs.existsSync(filePath)) {
    console.log(`Übersprungen (existiert): ${l.slug}.html`);
    continue;
  }
  fs.writeFileSync(filePath, renderLeistungPage(l), "utf-8");
  console.log(`Generiert: ${l.slug}.html`);
  count++;
}

console.log(`\n${count} Seite(n) generiert.`);
