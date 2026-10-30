/* ELS – Besucherstatistik mit Umami Cloud (cookielos, Datenregion EU).
   Lädt das Umami-Skript auf allen Seiten. Browser mit aktivem „Do Not Track“ werden nicht erfasst.
   Zum Abschalten: UMAMI_ID leeren – dann wird nichts geladen und der Abschnitt in datenschutz.html anpassen. */
(function () {
  var UMAMI_ID = "6320ab2a-14e1-4d5d-b8ca-97e6df544de8";
  if (!UMAMI_ID) return;
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://cloud.umami.is/script.js";
  s.setAttribute("data-website-id", UMAMI_ID);
  s.setAttribute("data-do-not-track", "true");
  s.setAttribute("data-domains", "www.elenorlegalsearch.com,elenorlegalsearch.com");
  document.head.appendChild(s);
})();
