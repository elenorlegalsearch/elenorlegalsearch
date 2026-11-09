/* ELS – Unterlagen direkt auf der Website hochladen (Bewerber:innen)
   ---------------------------------------------------------------
   Dienst: Forminit (kostenloser Tarif, Daten in der EU / AWS Irland).
   Einrichtung: unten FORM_ID eintragen – fertig.
   Solange FORM_ID nicht gesetzt ist, bleibt die bisherige E-Mail-Variante unverändert aktiv. */
(function () {
  "use strict";

  /* ======= EINSTELLUNGEN ======= */
  var FORM_ID   = "qgksxaqecpj";             // Forminit-Formular „Talentpool Bewerbungen“
  var ENDPOINT  = "https://forminit.com/f/";
  var MAIL      = "info@elenorlegalsearch.de";
  var MAX_FILES = 5;
  var MAX_FILE  = 10 * 1024 * 1024;           // 10 MB pro Datei
  var MAX_TOTAL = 20 * 1024 * 1024;           // 20 MB gesamt (Forminit erlaubt 25 MB)
  var EXT_OK    = ["pdf", "doc", "docx", "jpg", "jpeg", "png"];
  /* ============================= */

  if (!FORM_ID || FORM_ID.indexOf("DEINE_") === 0) return; // noch nicht eingerichtet → alte Variante bleibt

  var form = document.getElementById("cand-form");
  if (!form) return;
  var section = document.getElementById("profil");

  var TXT = {
    de: {
      lead: "Kreuzen Sie an, was auf Sie zutrifft, laden Sie Ihren Lebenslauf hoch und senden Sie alles mit einem Klick – direkt hier auf der Seite, ohne E-Mail-Programm.",
      s2t: "Unterlagen hochladen", s2d: "Lebenslauf als PDF hineinziehen oder auswählen; gern auch Zeugnisse und Examensurkunden.",
      s3t: "Absenden", s3d: "Ihre Unterlagen werden verschlüsselt übertragen. Ich melde mich innerhalb von 24 Stunden an Werktagen.",
      h: "Unterlagen hochladen & absenden",
      intro: "Ihr angekreuztes Profil wird automatisch mitgeschickt. Pflichtfelder sind mit * markiert.",
      email: "E-Mail", tel: "Telefon (optional)", msg: "Nachricht (optional)",
      emailPh: "name@beispiel.de", telPh: "+49 …", msgPh: "z. B. Kündigungsfrist, Wunschkanzlei, Fragen …",
      dropT: "Dateien hierher ziehen oder <u>auswählen</u>",
      dropS: "Lebenslauf (Pflicht), gern Zeugnisse · PDF, Word, JPG, PNG · max. 5 Dateien, je 10 MB, gesamt 20 MB",
      consent: 'Ich willige ein, dass ELS – Elenor Legal Search meine Angaben und Unterlagen zur Aufnahme in den Talentpool und zur Vermittlung speichert und verarbeitet. Eine Weitergabe an Unternehmen erfolgt nur nach meiner Zustimmung im Einzelfall. Die Einwilligung kann ich jederzeit per E-Mail widerrufen. Hinweise in der <a href="datenschutz.html">Datenschutzerklärung</a>. *',
      send: "Unterlagen sicher absenden", sending: "Wird hochgeladen …",
      note: "Verschlüsselte Übertragung · Speicherung in der EU · kostenlos",
      alt: 'Lieber per E-Mail? <a href="#" data-up-mail>Profil als E-Mail vorbereiten</a> oder direkt an <a href="mailto:' + MAIL + '">' + MAIL + "</a>.",
      meter: function (n, mb) { return n + (n === 1 ? " Datei" : " Dateien") + " · " + mb + " MB von 20 MB"; },
      eName: "Bitte geben Sie Ihren Namen an.", eMail: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
      eFile: "Bitte laden Sie mindestens Ihren Lebenslauf hoch.", eConsent: "Bitte bestätigen Sie die Einwilligung.",
      eType: function (f) { return "„" + f + "“ hat ein nicht unterstütztes Format (erlaubt: PDF, Word, JPG, PNG)."; },
      eBig: function (f) { return "„" + f + "“ ist größer als 10 MB."; },
      eTotal: "Zusammen sind die Dateien größer als 20 MB. Bitte verkleinern oder als PDF komprimieren.",
      eCount: "Bitte höchstens 5 Dateien hochladen.",
      okT: "Vielen Dank – Ihre Unterlagen sind angekommen!",
      okD: "Ich sehe mir Ihr Profil persönlich an und melde mich innerhalb von 24 Stunden an Werktagen bei Ihnen.",
      errT: "Ihre Unterlagen konnten nicht gesendet werden.",
      errNet: "Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
      errBusy: "Bitte warten Sie einen Moment und versuchen Sie es erneut.",
      errGen: "Bitte versuchen Sie es erneut oder senden Sie Ihre Unterlagen an ",
      remove: "Datei entfernen"
    },
    en: {
      lead: "Tick what applies to you, upload your CV and send everything with one click – right here on the page, no email program needed.",
      s2t: "Upload documents", s2d: "Drag in or select your CV as a PDF; certificates and exam diplomas are welcome too.",
      s3t: "Send", s3d: "Your documents are transmitted encrypted. I will get back to you within 24 hours on working days.",
      h: "Upload & send your documents",
      intro: "The profile you ticked above is sent automatically. Required fields are marked *.",
      email: "Email", tel: "Phone (optional)", msg: "Message (optional)",
      emailPh: "name@example.com", telPh: "+49 …", msgPh: "e.g. notice period, preferred firm, questions …",
      dropT: "Drag files here or <u>browse</u>",
      dropS: "CV (required), certificates welcome · PDF, Word, JPG, PNG · max. 5 files, 10 MB each, 20 MB total",
      consent: 'I consent to ELS – Elenor Legal Search storing and processing my details and documents for its talent pool and placement. They will only be shared with companies after my consent in each individual case. I can withdraw my consent at any time by email. See the <a href="datenschutz.html">privacy policy</a>. *',
      send: "Send documents securely", sending: "Uploading …",
      note: "Encrypted transfer · stored in the EU · free of charge",
      alt: 'Prefer email? <a href="#" data-up-mail>Prepare profile as email</a> or write directly to <a href="mailto:' + MAIL + '">' + MAIL + "</a>.",
      meter: function (n, mb) { return n + (n === 1 ? " file" : " files") + " · " + mb + " MB of 20 MB"; },
      eName: "Please enter your name.", eMail: "Please enter a valid email address.",
      eFile: "Please upload at least your CV.", eConsent: "Please confirm your consent.",
      eType: function (f) { return "“" + f + "” has an unsupported format (allowed: PDF, Word, JPG, PNG)."; },
      eBig: function (f) { return "“" + f + "” is larger than 10 MB."; },
      eTotal: "Together the files exceed 20 MB. Please reduce or compress them.",
      eCount: "Please upload no more than 5 files.",
      okT: "Thank you – your documents have arrived!",
      okD: "I will review your profile personally and get back to you within 24 hours on working days.",
      errT: "Your documents could not be sent.",
      errNet: "Please check your internet connection and try again.",
      errBusy: "Please wait a moment and try again.",
      errGen: "Please try again or send your documents to ",
      remove: "Remove file"
    }
  };
  function L() { return (document.documentElement.lang || "de").toLowerCase().indexOf("en") === 0 ? TXT.en : TXT.de; }

  /* ---------- Upload-Block einfügen ---------- */
  var box = document.createElement("div");
  box.className = "els-up";
  box.innerHTML =
    '<h3 data-up="h"></h3><p class="els-up-intro" data-up="intro"></p>' +
    '<div class="els-up-grid">' +
      '<div class="els-prof-field"><label for="up-email"><span data-up="email"></span> <span class="els-up-req">*</span></label><input id="up-email" type="email" autocomplete="email" required data-up-ph="emailPh"></div>' +
      '<div class="els-prof-field"><label for="up-tel" data-up="tel"></label><input id="up-tel" type="tel" autocomplete="tel" data-up-ph="telPh"></div>' +
      '<div class="els-prof-field" style="grid-column:1/-1"><label for="up-msg" data-up="msg"></label><textarea id="up-msg" rows="3" data-up-ph="msgPh" style="width:100%;font:inherit;padding:12px 14px;border:1px solid #C9D0DA;border-radius:6px;resize:vertical"></textarea></div>' +
    "</div>" +
    '<div class="els-drop" id="up-drop">' +
      '<input id="up-files" type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf">' +
      '<span class="els-drop-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"/></svg></span>' +
      '<strong data-up-html="dropT"></strong><small data-up="dropS"></small>' +
    "</div>" +
    '<ul class="els-files" id="up-list" aria-live="polite"></ul>' +
    '<p class="els-meter" id="up-meter" hidden></p>' +
    '<div class="els-hp" aria-hidden="true"><label>Website <input id="up-hp" type="text" tabindex="-1" autocomplete="off"></label></div>' +
    '<label class="els-consent"><input id="up-consent" type="checkbox" required><span data-up-html="consent"></span></label>' +
    '<div class="els-up-actions"><button type="button" class="els-up-submit" id="up-send"><span class="spin" aria-hidden="true"></span><span data-up="send"></span></button><span class="els-up-note" data-up="note"></span></div>' +
    '<div class="els-progress" id="up-prog" aria-hidden="true"><i></i></div>' +
    '<div class="els-status" id="up-status" role="status" aria-live="polite" hidden></div>' +
    '<p class="els-alt" data-up-html="alt"></p>';
  form.appendChild(box);

  // Name-Feld zur Pflicht machen
  var nameInput = form.querySelector("[name=cand-name]");
  if (nameInput) {
    nameInput.required = true;
    var nl = form.querySelector('label[for="' + nameInput.id + '"]');
    if (nl && !nl.querySelector(".els-up-req")) nl.insertAdjacentHTML("beforeend", ' <span class="els-up-req">*</span>');
  }

  // Alte E-Mail-Buttons ausblenden (bleiben als Fallback im Code)
  var oldActions = section && section.querySelector(".els-apply-actions");
  if (oldActions) oldActions.hidden = true;
  if (section) section.querySelectorAll(".els-apply-hint").forEach(function (p) {
    if (/Webmail|email program|E-Mail-Programm/i.test(p.textContent)) p.hidden = true;
  });

  /* ---------- Texte (DE/EN) ---------- */
  function applyTexts() {
    var t = L();
    box.querySelectorAll("[data-up]").forEach(function (el) { el.textContent = t[el.getAttribute("data-up")]; });
    box.querySelectorAll("[data-up-html]").forEach(function (el) { el.innerHTML = t[el.getAttribute("data-up-html")]; });
    box.querySelectorAll("[data-up-ph]").forEach(function (el) { el.placeholder = t[el.getAttribute("data-up-ph")]; });
    if (section) {
      var lead = section.querySelector(".head .lead"); if (lead) lead.textContent = t.lead;
      var steps = section.querySelectorAll(".els-apply-steps li");
      if (steps[1]) { steps[1].querySelector("strong").textContent = t.s2t; steps[1].querySelector("div span").textContent = t.s2d; }
      if (steps[2]) { steps[2].querySelector("strong").textContent = t.s3t; steps[2].querySelector("div span").textContent = t.s3d; }
    }
    renderList();
    var mailLink = box.querySelector("[data-up-mail]");
    if (mailLink) mailLink.addEventListener("click", function (e) {
      e.preventDefault(); var b = section && section.querySelector("[data-mail-profile]"); if (b) b.click();
    });
  }
  // Sprachumschaltung der Seite (i18n.js) beobachten
  new MutationObserver(function () { setTimeout(applyTexts, 30); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  /* ---------- Dateien ---------- */
  var files = [];
  var input = box.querySelector("#up-files"), drop = box.querySelector("#up-drop"),
      list = box.querySelector("#up-list"), meter = box.querySelector("#up-meter"),
      status = box.querySelector("#up-status");

  function ext(n) { var i = n.lastIndexOf("."); return i < 0 ? "" : n.slice(i + 1).toLowerCase(); }
  function mb(b) { return (b / 1048576).toFixed(b < 1048576 ? 2 : 1).replace(".", ","); }
  function size(b) { return b < 102400 ? Math.max(1, Math.round(b / 1024)) + " KB" : mb(b) + " MB"; }
  function total() { return files.reduce(function (s, f) { return s + f.size; }, 0); }

  function addFiles(fl) {
    var t = L(), errs = [];
    Array.prototype.forEach.call(fl, function (f) {
      if (files.some(function (x) { return x.name === f.name && x.size === f.size; })) return;
      if (EXT_OK.indexOf(ext(f.name)) < 0) { errs.push(t.eType(f.name)); return; }
      if (f.size > MAX_FILE) { errs.push(t.eBig(f.name)); return; }
      if (files.length >= MAX_FILES) { errs.push(t.eCount); return; }
      files.push(f);
    });
    if (total() > MAX_TOTAL) errs.push(t.eTotal);
    renderList();
    if (errs.length) showStatus("err", t.errT, errs.filter(function (v, i, a) { return a.indexOf(v) === i; }).join(" "));
    else hideStatus();
    input.value = "";
  }
  function renderList() {
    var t = L();
    list.innerHTML = "";
    files.forEach(function (f, i) {
      var li = document.createElement("li");
      li.innerHTML = '<span class="ic"></span><span class="nm"></span><span class="sz"></span><button type="button"><span aria-hidden="true">×</span></button>';
      li.querySelector(".ic").textContent = ext(f.name).toUpperCase().slice(0, 4);
      li.querySelector(".nm").textContent = f.name;
      li.querySelector(".sz").textContent = size(f.size);
      var b = li.querySelector("button");
      b.setAttribute("aria-label", t.remove + ": " + f.name);
      b.addEventListener("click", function () { files.splice(i, 1); renderList(); });
      list.appendChild(li);
    });
    meter.hidden = !files.length;
    meter.textContent = t.meter(files.length, mb(total()));
    meter.classList.toggle("over", total() > MAX_TOTAL);
    drop.classList.remove("is-error");
  }
  input.addEventListener("change", function () { addFiles(input.files); });
  ["dragenter", "dragover"].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add("is-over"); }); });
  ["dragleave", "drop"].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove("is-over"); }); });
  drop.addEventListener("drop", function (e) { if (e.dataTransfer && e.dataTransfer.files) addFiles(e.dataTransfer.files); });

  /* ---------- Profil aus dem Formular lesen ---------- */
  function txt(el) { return (el.textContent || "").replace(/\s+/g, " ").replace(/\*/g, "").trim(); }
  function slug(s) {
    return s.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 40) || "feld";
  }
  function collect() {
    var blocks = [], summary = [], used = {};
    function put(label, value) {
      if (!value) return;
      var key = slug(label); while (used[key]) key += "_2"; used[key] = 1;
      blocks.push(["fi-text-" + key, value]); summary.push(label + ": " + value);
    }
    if (nameInput) put("Name", nameInput.value.trim());
    form.querySelectorAll("fieldset").forEach(function (fs) {
      var leg = fs.querySelector("legend"); var picks = [];
      fs.querySelectorAll("input[type=checkbox]:checked, input[type=radio]:checked").forEach(function (i) {
        if (box.contains(i)) return;
        var s = i.parentNode.querySelector("span"); picks.push(s ? txt(s) : i.value);
      });
      fs.querySelectorAll("input[type=text], select").forEach(function (i) {
        if (!i.value || !i.value.trim()) return;
        var l = form.querySelector('label[for="' + i.id + '"]');
        picks.push((l ? txt(l) + ": " : "") + i.value.trim());
      });
      if (picks.length) put(leg ? txt(leg) : "Angaben", picks.join(", "));
    });
    return { blocks: blocks, summary: summary.join("\n") };
  }

  /* ---------- Status ---------- */
  function showStatus(kind, title, text, html) {
    status.className = "els-status " + kind; status.innerHTML = "";
    var s = document.createElement("strong"); s.textContent = title; status.appendChild(s);
    var p = document.createElement("span");
    if (html) p.innerHTML = html; else p.textContent = text;
    status.appendChild(p); status.hidden = false;
  }
  function hideStatus() { status.hidden = true; }

  /* ---------- Absenden ---------- */
  var btn = box.querySelector("#up-send"), prog = box.querySelector("#up-prog"), bar = prog.querySelector("i");
  var emailIn = box.querySelector("#up-email"), consent = box.querySelector("#up-consent");

  btn.addEventListener("click", function () {
    var t = L();
    if (box.querySelector("#up-hp").value) return; // Bot
    if (nameInput && !nameInput.value.trim()) { showStatus("err", t.errT, t.eName); nameInput.focus(); return; }
    if (!emailIn.value.trim() || !emailIn.checkValidity()) { showStatus("err", t.errT, t.eMail); emailIn.focus(); return; }
    if (!files.length) { showStatus("err", t.errT, t.eFile); drop.classList.add("is-error"); drop.scrollIntoView({ block: "center", behavior: "smooth" }); return; }
    if (total() > MAX_TOTAL) { showStatus("err", t.errT, t.eTotal); return; }
    if (!consent.checked) { showStatus("err", t.errT, t.eConsent); consent.focus(); return; }

    var data = collect(), fd = new FormData();
    fd.append("fi-sender-email", emailIn.value.trim());
    var tel = box.querySelector("#up-tel").value.trim(); if (tel) fd.append("fi-text-telefon", tel);
    var msg = box.querySelector("#up-msg").value.trim(); if (msg) fd.append("fi-text-nachricht", msg);
    data.blocks.forEach(function (b) { fd.append(b[0], b[1]); });
    fd.append("fi-text-profil_gesamt", data.summary || "—");
    fd.append("fi-text-einwilligung", "Ja – Talentpool & Vermittlung, Weitergabe nur nach Zustimmung im Einzelfall (" + new Date().toLocaleString("de-DE") + ")");
    fd.append("fi-text-quelle", "elenorlegalsearch.com/bewerber.html");
    files.forEach(function (f) { fd.append("fi-file-unterlagen[]", f, f.name); });

    btn.disabled = true; btn.classList.add("is-busy");
    var lbl = btn.querySelector("[data-up]"); lbl.textContent = t.sending;
    hideStatus(); prog.classList.add("on"); bar.style.width = "3%";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", ENDPOINT + encodeURIComponent(FORM_ID));
    xhr.setRequestHeader("Accept", "application/json");
    xhr.upload.onprogress = function (e) { if (e.lengthComputable) bar.style.width = Math.max(3, Math.round(e.loaded / e.total * 100)) + "%"; };
    xhr.onload = function () {
      var res = {}; try { res = JSON.parse(xhr.responseText || "{}"); } catch (e) {}
      if (xhr.status >= 200 && xhr.status < 300 && res.success !== false) {
        bar.style.width = "100%";
        showStatus("ok", t.okT, t.okD);
        form.reset(); files = []; renderList(); consent.checked = false;
        box.querySelector("#up-msg").value = ""; box.querySelector("#up-tel").value = ""; emailIn.value = "";
        status.scrollIntoView({ block: "center", behavior: "smooth" });
        try { if (window.umami) window.umami.track("bewerbung-upload"); } catch (e) {}
      } else {
        var m = xhr.status === 429 ? t.errBusy : null;
        showStatus("err", t.errT, null,
          (m ? m + " " : (res.message || (res.error && res.error.message) ? (res.message || res.error.message) + " " : "")) +
          t.errGen + '<a href="mailto:' + MAIL + '">' + MAIL + "</a>.");
      }
      done();
    };
    xhr.onerror = function () { showStatus("err", t.errT, null, t.errNet + " " + t.errGen + '<a href="mailto:' + MAIL + '">' + MAIL + "</a>."); done(); };
    xhr.send(fd);

    function done() {
      btn.disabled = false; btn.classList.remove("is-busy"); lbl.textContent = L().send;
      setTimeout(function () { prog.classList.remove("on"); bar.style.width = "0"; }, 800);
    }
  });

  applyTexts();
})();
