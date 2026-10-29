/* ELS – kleine Helfer: Profil-E-Mail für Bewerber:innen, E-Mail-Adresse kopieren.
   Es wird nichts auf dieser Website gespeichert oder übertragen. */
(function () {
  var MAIL = "info@elenorlegalsearch.de";

  function txt(el) { return (el.textContent || "").replace(/\s+/g, " ").trim(); }

  function buildBody(form) {
    var lines = [];
    var name = form.querySelector("[name=cand-name]");
    if (name && name.value.trim()) lines.push("Name: " + name.value.trim());
    form.querySelectorAll("fieldset").forEach(function (fs) {
      var leg = fs.querySelector("legend");
      var picks = [];
      fs.querySelectorAll("input[type=checkbox]:checked, input[type=radio]:checked").forEach(function (i) {
        var s = i.parentNode.querySelector("span");
        picks.push(s ? txt(s) : i.value);
      });
      fs.querySelectorAll("input[type=text], select").forEach(function (i) {
        if (i.value && i.value.trim()) {
          var l = form.querySelector('label[for="' + i.id + '"]');
          picks.push((l ? txt(l) + ": " : "") + i.value.trim());
        }
      });
      if (picks.length) lines.push((leg ? txt(leg) : "") + ": " + picks.join(", "));
    });
    form.querySelectorAll(".loose input[type=text]").forEach(function (i) {
      if (i.value && i.value.trim()) {
        var l = form.querySelector('label[for="' + i.id + '"]');
        lines.push((l ? txt(l) : i.name) + ": " + i.value.trim());
      }
    });
    var intro = "Guten Tag Frau Poljaric,\n\nanbei sende ich Ihnen meinen Lebenslauf und mein Profil für den Talentpool von ELS – Elenor Legal Search.\n\n";
    var outro = "\n\nMit Ihrer vertraulichen Behandlung meiner Unterlagen und einer Weitergabe nur nach meiner Zustimmung im Einzelfall bin ich einverstanden.\n\nViele Grüße";
    return intro + (lines.length ? lines.join("\n") : "[Position, Rechtsgebiete, Wunschort, Verfügbarkeit]") + outro;
  }

  document.querySelectorAll("[data-mail-profile]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var form = document.getElementById(btn.getAttribute("data-mail-profile"));
      if (!form) return;
      e.preventDefault();
      var subject = "Profil für den Talentpool – ELS";
      window.location.href = "mailto:" + MAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(buildBody(form));
    });
  });

  document.querySelectorAll("[data-copy-mail]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var label = btn.textContent;
      function done(ok) {
        btn.textContent = ok ? "✓ " + MAIL : MAIL;
        setTimeout(function () { btn.textContent = label; }, 2500);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(MAIL).then(function () { done(true); }, function () { done(false); });
      } else { done(false); }
    });
  });
})();
