// Wird auf leistungen.html eingebunden
// Rendert die Übersichtskacheln aus content.js

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("leistungen-grid");
  if (!container || typeof LEISTUNGEN === "undefined") return;

  container.innerHTML = LEISTUNGEN.map((l) => `
    <article>
      <h2><a href="leistungen/${l.slug}.html">${l.titel}</a></h2>
      <p>${l.kurztext}</p>
      <a href="leistungen/${l.slug}.html">${l.cta}</a>
    </article>
  `).join("\n");
});
