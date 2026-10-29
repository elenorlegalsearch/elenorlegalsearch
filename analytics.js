/* ELS – Besucherstatistik (Pirsch, cookielos, Server in Deutschland).
   Solange PIRSCH_CODE leer ist, wird NICHTS geladen und es werden keine Daten erhoben.
   Aktivierung: Pirsch-Konto anlegen, Website hinzufügen, den "Identification Code" hier eintragen
   und den Abschnitt zur Webanalyse in datenschutz.html freischalten. */
(function () {
  var PIRSCH_CODE = "";
  if (!PIRSCH_CODE) return;
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://api.pirsch.io/pa.js";
  s.id = "pianjs";
  s.setAttribute("data-code", PIRSCH_CODE);
  document.head.appendChild(s);
})();
