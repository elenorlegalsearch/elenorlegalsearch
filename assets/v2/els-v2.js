/* ELS – Elenor Legal Search · Interaktion & Motion (v2)
   GSAP + ScrollTrigger + Lenis. Funktioniert ohne Motion (reduced motion / JS-Fehler) vollständig. */
(function () {
  "use strict";
  var doc = document, root = doc.documentElement;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;
  var hasGSAP = !!(window.gsap && window.ScrollTrigger);
  if (reduced) root.classList.add("reduced");

  /* ---------------- Toast / Copy (immer aktiv) ---------------- */
  var toast = $(".toast"), toastT;
  function say(msg) { if (!toast) return; toast.textContent = msg; toast.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(function () { toast.classList.remove("show"); }, 2600); }
  $$("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var v = b.getAttribute("data-copy");
      var done = function () { say("E-Mail-Adresse kopiert: " + v); };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(done, function () { fallbackCopy(v) ? done() : say(v); });
        else fallbackCopy(v) ? done() : say(v);
      } catch (e) { say(v); }
    });
  });
  function fallbackCopy(v) { try { var t = doc.createElement("textarea"); t.value = v; t.style.position = "fixed"; t.style.opacity = "0"; doc.body.appendChild(t); t.select(); var ok = doc.execCommand("copy"); t.remove(); return ok; } catch (e) { return false; } }

  /* ---------------- Formular (Formward, Logik der bestehenden Seite) ---------------- */
  (function () {
    var form = $('form.f[action*="formward.eu"]');
    if (!form) return;
    var box = $(".f-status", form), btn = $('button[type="submit"]', form), lbl = $(".bt", btn);
    function show(kind, title, text) {
      box.className = "f-status " + kind; box.innerHTML = "";
      var t = doc.createElement("strong"); t.textContent = title; box.appendChild(t);
      box.appendChild(doc.createTextNode(text)); box.hidden = false;
      box.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (!window.fetch) { form.submit(); return; }
      var label = lbl.textContent; btn.disabled = true; lbl.textContent = "Wird gesendet …"; box.hidden = true;
      fetch(form.action, { method: "POST", headers: { "Accept": "application/json" }, body: new URLSearchParams(new FormData(form)) })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { status: r.status, data: d }; }); })
        .then(function (res) {
          if (res.data && res.data.ok) {
            form.reset(); $$("details[open]", form).forEach(function (d) { d.open = false; });
            show("ok", "Vielen Dank für Ihre Anfrage!", "Ich melde mich innerhalb von 24 Stunden an Werktagen bei Ihnen.");
            return;
          }
          var msg;
          if (res.status === 429) msg = "Zu viele Anfragen in kurzer Zeit. Bitte warten Sie einen Moment und versuchen Sie es erneut.";
          else if (res.status === 402) msg = "Das Formular nimmt gerade keine Anfragen an. Bitte schreiben Sie mir direkt an info@elenorlegalsearch.de.";
          else msg = (res.data && res.data.error ? res.data.error + " " : "") + "Bitte versuchen Sie es erneut oder schreiben Sie an info@elenorlegalsearch.de.";
          show("err", "Ihre Anfrage konnte nicht gesendet werden.", msg);
        })
        .catch(function () { show("err", "Ihre Anfrage konnte nicht gesendet werden.", "Bitte prüfen Sie Ihre Internetverbindung oder schreiben Sie an info@elenorlegalsearch.de."); })
        .finally(function () { btn.disabled = false; lbl.textContent = label; });
    });
  })();

  /* ---------------- FAQ (funktioniert auch ohne GSAP) ---------------- */
  $$(".qa").forEach(function (qa) {
    var b = $("button", qa), a = $(".ans", qa);
    b.addEventListener("click", function () {
      var open = !qa.classList.contains("open");
      $$(".qa.open").forEach(function (o) { if (o !== qa) toggleQA(o, false); });
      toggleQA(qa, open);
    });
  });
  function toggleQA(qa, open) {
    var b = $("button", qa), a = $(".ans", qa);
    qa.classList.toggle("open", open); b.setAttribute("aria-expanded", open);
    if (hasGSAP && !reduced) gsap.to(a, { height: open ? "auto" : 0, duration: .7, ease: "expo.inOut", onComplete: function () { if (window.ScrollTrigger) ScrollTrigger.refresh(); } });
    else a.style.height = open ? "auto" : "0px";
  }

  /* ---------------- Menü ---------------- */
  var hdr = $("#hdr"), menu = $("#menu"), menuBtn = $(".menu-btn"), lenis = null, menuOpen = false;
  function circ(r) { var b = menuBtn.getBoundingClientRect(); return "circle(" + r + "% at " + Math.round(b.left + b.width - 24) + "px " + Math.round(b.top + b.height / 2) + "px)"; }
  function setMenu(open) {
    menuOpen = open; doc.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", open); $(".mb-label", menuBtn).textContent = open ? "Schließen" : "Menü";
    menu.setAttribute("aria-hidden", !open);
    if (lenis) open ? lenis.stop() : lenis.start();
    if (hasGSAP && !reduced) {
      if (open) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(menu, { clipPath: circ(0) }, { clipPath: circ(150), duration: 1, ease: "expo.inOut" });
        gsap.fromTo($$(".menu-links a", menu), { yPercent: 110 }, { yPercent: 0, duration: 1, ease: "expo.out", stagger: .06, delay: .35 });
        gsap.fromTo($$(".menu-side > div", menu), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: .8, stagger: .1, delay: .6 });
      } else {
        gsap.to(menu, { clipPath: circ(0), duration: .8, ease: "expo.inOut", onComplete: function () { gsap.set(menu, { visibility: "hidden" }); } });
      }
    } else { menu.style.visibility = open ? "visible" : "hidden"; menu.style.clipPath = open ? "none" : ""; }
    if (open) hdr.classList.remove("is-hidden");
  }
  menuBtn.addEventListener("click", function () { setMenu(!menuOpen); });
  doc.addEventListener("keydown", function (e) { if (e.key === "Escape" && menuOpen) { setMenu(false); menuBtn.focus(); } });

  /* ---------------- Anker (Smooth via Lenis) ---------------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href"); if (id.length < 2) return;
      var t = $(id); if (!t) return;
      e.preventDefault();
      var go = function () {
        if (lenis) lenis.scrollTo(t, { offset: id === "#top" ? 0 : -20, duration: 1.6 });
        else t.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        if (id !== "#top") { t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: true }); }
      };
      if (menuOpen) { setMenu(false); setTimeout(go, 450); } else go();
    });
  });

  /* ---------------- Seitenübergang (andere Seiten der Domain) ---------------- */
  var onSite = /elenorlegalsearch\.(com|de)$/.test(location.hostname);
  if (hasGSAP && !reduced && onSite) {
    $$("a[href]").forEach(function (a) {
      var u; try { u = new URL(a.href, location.href); } catch (e) { return; }
      if (u.hostname !== location.hostname || a.target === "_blank" || (u.pathname === location.pathname && u.hash)) return;
      a.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
        e.preventDefault();
        gsap.to(".curtain span", { scaleY: 1, transformOrigin: "bottom", duration: .7, ease: "expo.inOut", stagger: .06, onComplete: function () { location.href = a.href; } });
      });
    });
    window.addEventListener("pageshow", function (e) { if (e.persisted) gsap.set(".curtain span", { scaleY: 0 }); });
  }

  /* ================= Ohne GSAP / reduced motion: hier Ende ================= */
  var pre = $(".preloader");
  if (!hasGSAP || reduced) {
    if (pre) pre.remove();
    initRollStatic();
    headerStates(null);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------------- Lenis Smooth Scroll ---------------- */
  if (window.Lenis) {
    lenis = new Lenis({ lerp: .095, wheelMultiplier: 1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    lenis.stop();
  }

  /* ---------------- Split helper ---------------- */
  function splitWords(el, cls) {
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = doc.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(doc.createTextNode(" ")); return; }
            var o = doc.createElement("span"); o.className = cls || "sw";
            if (!cls) { var i = doc.createElement("span"); i.className = "swi"; i.textContent = p; o.appendChild(i); } else o.textContent = p;
            frag.appendChild(o);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
      });
    })(el);
  }

  /* ---------------- Cursor ---------------- */
  var cursor = $(".cursor");
  if (finePointer && cursor) {
    root.classList.add("has-cursor");
    var dot = $(".c-dot", cursor), ring = $(".c-ring", cursor), lab = $("span", ring);
    var dx = gsap.quickTo(dot, "x", { duration: .12, ease: "power3" }), dy = gsap.quickTo(dot, "y", { duration: .12, ease: "power3" });
    var rx = gsap.quickTo(ring, "x", { duration: .55, ease: "power3" }), ry = gsap.quickTo(ring, "y", { duration: .55, ease: "power3" });
    gsap.set(cursor, { autoAlpha: 0 });
    window.addEventListener("pointermove", function (e) { gsap.to(cursor, { autoAlpha: 1, duration: .3, overwrite: "auto" }); dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); }, { passive: true });
    doc.addEventListener("pointerleave", function () { gsap.to(cursor, { autoAlpha: 0, duration: .3 }); });
    doc.addEventListener("pointerover", function (e) {
      var t = e.target.closest("[data-cursor], a, button, summary, label, .pos, .chips li");
      var txt = e.target.closest("input[type=text],input[type=email],input[type=tel],textarea");
      cursor.classList.toggle("is-text", !!txt);
      if (t && t.hasAttribute("data-cursor")) { lab.textContent = t.getAttribute("data-cursor"); cursor.classList.add("is-label"); cursor.classList.remove("is-hover"); }
      else if (t) { cursor.classList.add("is-hover"); cursor.classList.remove("is-label"); }
      else cursor.classList.remove("is-hover", "is-label");
    });
  }

  /* ---------------- Magnetic ---------------- */
  if (finePointer) $$(".magnetic").forEach(function (m) {
    var xT = gsap.quickTo(m, "x", { duration: .6, ease: "elastic.out(1,.4)" }), yT = gsap.quickTo(m, "y", { duration: .6, ease: "elastic.out(1,.4)" });
    m.addEventListener("pointermove", function (e) { var r = m.getBoundingClientRect(); xT((e.clientX - r.left - r.width / 2) * .28); yT((e.clientY - r.top - r.height / 2) * .38); });
    m.addEventListener("pointerleave", function () { xT(0); yT(0); });
  });

  /* ---------------- Progress ---------------- */
  gsap.to(".progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: .3 } });

  /* ---------------- Header states ---------------- */
  headerStates(true);
  function headerStates(withST) {
    var setScrolled = function (y) { hdr.classList.toggle("is-scrolled", y > 40); };
    if (!withST) {
      var last = 0;
      window.addEventListener("scroll", function () { var y = window.scrollY; setScrolled(y); hdr.classList.toggle("is-hidden", y > last && y > 500 && !menuOpen); last = y; updateTheme(); }, { passive: true });
      var updateTheme = function () { var y = 40; var light = false; $$("[data-theme]").forEach(function (s) { var r = s.getBoundingClientRect(); if (r.top <= y && r.bottom > y) light = s.getAttribute("data-theme") === "light"; }); hdr.classList.toggle("on-light", light); };
      updateTheme(); return;
    }
    ScrollTrigger.create({ start: 0, end: "max", onUpdate: function (self) {
      var y = self.scroll(); setScrolled(y);
      if (!menuOpen) hdr.classList.toggle("is-hidden", self.direction === 1 && y > 500);
    } });
    $$("[data-theme]").forEach(function (s) {
      ScrollTrigger.create({ trigger: s, start: "top 40px", end: "bottom 40px", onToggle: function (self) { if (self.isActive) hdr.classList.toggle("on-light", s.getAttribute("data-theme") === "light"); } });
    });
  }

  /* ---------------- Rotating words ---------------- */
  function initRollStatic() { var r = $(".roll"); if (r) { var f = r.children[0]; r.style.width = f.offsetWidth + "px"; Array.prototype.slice.call(r.children).forEach(function (w, i) { if (i) w.style.visibility = "hidden"; }); } }
  function initRoll() {
    var roll = $(".roll"); if (!roll) return;
    var words = Array.prototype.slice.call(roll.children), i = 0;
    gsap.set(words, { yPercent: 115 }); gsap.set(words[0], { yPercent: 0 });
    roll.style.width = words[0].offsetWidth + "px";
    (function next() {
      gsap.delayedCall(2.4, function () {
        var cur = words[i]; i = (i + 1) % words.length; var nx = words[i];
        gsap.to(cur, { yPercent: -115, duration: .8, ease: "expo.inOut" });
        gsap.fromTo(nx, { yPercent: 115 }, { yPercent: 0, duration: .8, ease: "expo.inOut" });
        gsap.to(roll, { width: nx.offsetWidth, duration: .8, ease: "expo.inOut" });
        next();
      });
    })();
  }

  /* ---------------- Hero intro ---------------- */
  function heroIntro() {
    var tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from(".hero h1 .li", { yPercent: 110, rotate: 2.5, duration: 1.4, stagger: .1 })
      .from(".h-in", { y: 34, autoAlpha: 0, duration: 1.1, stagger: .08 }, "-=1.05")
      .from(".h-card", { y: 80, autoAlpha: 0, rotateX: -14, duration: 1.4 }, "-=1.2")
      .from(".hero-para", { autoAlpha: 0, scale: .9, duration: 2 }, "-=1.6")
      .from(".hdr .wrap", { yPercent: -60, autoAlpha: 0, duration: 1, stagger: .1, clearProps: "transform" }, "-=1.8")
      .add(initRoll, "-=.6");
    return tl;
  }

  /* ---------------- Preloader ---------------- */
  var seen = false; try { seen = sessionStorage.getItem("els-seen") === "1"; sessionStorage.setItem("els-seen", "1"); } catch (e) {}
  function start() { if (lenis) lenis.start(); ScrollTrigger.refresh(); }
  if (pre && !seen) {
    var cnt = { v: 0 }, num = $(".pl-num", pre);
    var pl = gsap.timeline();
    pl.to(".pl-mark circle", { strokeDashoffset: 0, duration: .8, ease: "power2.inOut" })
      .to(cnt, { v: 100, duration: .8, ease: "power2.inOut", onUpdate: function () { num.textContent = String(Math.round(cnt.v)).padStart(3, "0"); } }, 0)
      .fromTo(".pl-mark image", { opacity: 0, scale: .85, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: .45, ease: "power2.out" }, .25)
      .to(".pl-inner", { y: -30, autoAlpha: 0, duration: .4, ease: "power3.in" }, "+=.05")
      .to(pre, { yPercent: -100, duration: .85, ease: "expo.inOut" }, "-=.15")
      .call(function () { pre.remove(); start(); })
      .add(heroIntro(), "-=.65");
  } else {
    if (pre) pre.remove();
    gsap.fromTo(".curtain span", { scaleY: 1, transformOrigin: "top" }, { scaleY: 0, duration: .9, ease: "expo.inOut", stagger: .05 });
    heroIntro().delay(.45); start();
  }

  /* ---------------- Hero interactions ---------------- */
  var hero = $(".hero"), card = $(".pcard"), glow = $(".hero-glow");
  if (finePointer && hero) {
    var cX = gsap.quickTo(card, "rotationY", { duration: .8, ease: "power3" }), cY = gsap.quickTo(card, "rotationX", { duration: .8, ease: "power3" });
    var gX = gsap.quickTo(glow, "x", { duration: 1.2, ease: "power3" }), gY = gsap.quickTo(glow, "y", { duration: 1.2, ease: "power3" });
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      cX(px * 14); cY(-py * 12); gX(e.clientX - r.left); gY(e.clientY - r.top);
      gsap.to(glow, { opacity: 1, duration: .6, overwrite: "auto" });
    });
    hero.addEventListener("pointerleave", function () { cX(0); cY(0); gsap.to(glow, { opacity: 0, duration: .8 }); });
  }
  gsap.to(".hero-para", { yPercent: -28, rotate: 8, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero-grid", { yPercent: 10, autoAlpha: .2, ease: "none", scrollTrigger: { trigger: ".hero", start: "40% top", end: "bottom top", scrub: true } });
  gsap.to(".pcard", { y: -16, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });

  /* ---------------- Generic reveals ---------------- */
  gsap.set(".rv", { autoAlpha: 0 });
  ScrollTrigger.batch(".rv", { start: "top 88%", once: true,
    onEnter: function (els) { gsap.fromTo(els, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.2, ease: "expo.out", stagger: .08, overwrite: true }); } });

  $$(".split").forEach(function (h) {
    splitWords(h);
    gsap.from($$(".swi", h), { yPercent: 115, rotate: 3, duration: 1.3, ease: "expo.out", stagger: .045,
      scrollTrigger: { trigger: h, start: "top 85%", once: true } });
  });

  /* ---------------- Marquee (scroll-velocity driven) ---------------- */
  var mqTweens = [];
  $$(".mq-row").forEach(function (row, idx) {
    var inner = $(".mq-inner", row); row.appendChild(inner.cloneNode(true));
    var parts = $$(".mq-inner", row);
    var tw = gsap.fromTo(parts, { xPercent: idx % 2 ? -100 : 0 }, { xPercent: idx % 2 ? 0 : -100, duration: 38, ease: "none", repeat: -1 });
    mqTweens.push(tw);
  });
  if (mqTweens.length) ScrollTrigger.create({ trigger: ".mq", start: "top bottom", end: "bottom top",
    onUpdate: function (self) {
      var boost = gsap.utils.clamp(1, 7, 1 + Math.abs(self.getVelocity()) / 260), d = self.direction;
      mqTweens.forEach(function (tl) { gsap.to(tl, { timeScale: boost * d, duration: .2, overwrite: true }); gsap.to(tl, { timeScale: d, duration: 1.4, delay: .3, ease: "power2.out" }); });
    } });
  mqTweens.forEach(function (tl) { tl.totalTime(tl.duration() * 200); });

  /* ---------------- Audience cards: cursor-origin fill ---------------- */
  $$(".aud-card").forEach(function (c) {
    var f = $(".fill", c);
    function enter(e) { var r = c.getBoundingClientRect(), x = e.clientX ? e.clientX - r.left : r.width / 2, y = e.clientY ? e.clientY - r.top : r.height / 2;
      var size = Math.hypot(Math.max(x, r.width - x), Math.max(y, r.height - y)) * 2.1 / 10;
      gsap.set(f, { left: x, top: y }); gsap.to(f, { scale: size, duration: .9, ease: "expo.out" }); }
    function leave(e) { var r = c.getBoundingClientRect(); gsap.set(f, { left: e.clientX - r.left, top: e.clientY - r.top }); gsap.to(f, { scale: 0, duration: .7, ease: "expo.inOut" }); }
    c.addEventListener("pointerenter", enter); c.addEventListener("pointerleave", leave);
    c.addEventListener("focus", enter); c.addEventListener("blur", function () { gsap.to(f, { scale: 0, duration: .5 }); });
  });

  /* ---------------- Quote word reveal ---------------- */
  $$(".reveal-words").forEach(function (q) {
    splitWords(q, "w");
    gsap.to($$(".w", q), { opacity: 1, stagger: .1, ease: "none", scrollTrigger: { trigger: q, start: "top 80%", end: "bottom 40%", scrub: true } });
  });

  /* ---------------- Problem numbers fill ---------------- */
  $$(".prob").forEach(function (p) {
    gsap.to($(".n", p), { backgroundSize: "100% 100%", duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: p, start: "top 75%", once: true } });
    gsap.from(p, { y: 80, autoAlpha: 0, duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: p, start: "top 90%", once: true } });
  });

  var mm = gsap.matchMedia();

  /* ---------------- Horizontal services (desktop) ---------------- */
  mm.add("(min-width: 1181px)", function () {
    var sec = $(".hs"), track = $(".hs-track"), bar = $(".hs-bar i"), cur = $(".hs-cur"), panels = $$(".hs-panel", track);
    var dist = function () { return track.scrollWidth - window.innerWidth; };
    var tw = gsap.to(track, { x: function () { return -dist(); }, ease: "none",
      scrollTrigger: { trigger: sec, start: "top top", end: function () { return "+=" + dist(); }, pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
        onUpdate: function (self) { gsap.set(bar, { scaleX: self.progress }); cur.textContent = "0" + Math.min(panels.length, Math.round(self.progress * (panels.length - 1)) + 1); } } });
    panels.forEach(function (p) {
      var n = $(".num", p);
      if (n) gsap.from(n, { xPercent: 40, ease: "none", scrollTrigger: { trigger: p, containerAnimation: tw, start: "left right", end: "center center", scrub: true } });
      gsap.from(p, { rotate: 2, y: 50, ease: "none", scrollTrigger: { trigger: p, containerAnimation: tw, start: "left right", end: "left 55%", scrub: true } });
    });
  });
  mm.add("(max-width: 1180px)", function () {
    $$(".hs-panel").forEach(function (p) { gsap.from(p, { y: 60, autoAlpha: 0, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: p, start: "top 88%", once: true } }); });
  });

  /* ---------------- Positions / chips ---------------- */
  gsap.from(".chips li", { y: 30, autoAlpha: 0, scale: .9, duration: .9, ease: "expo.out", stagger: { each: .035, from: "random" }, scrollTrigger: { trigger: ".chips", start: "top 80%", once: true } });

  /* ---------------- Why: stacking cards ---------------- */
  var cards = $$(".why-card");
  cards.forEach(function (c, i) {
    if (i === cards.length - 1) return;
    gsap.to(c, { scale: .9 + i * .015, filter: "brightness(.8)", ease: "none",
      scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top 25%", scrub: true } });
  });

  /* ---------------- Band text scrub ---------------- */
  gsap.fromTo(".band-text", { xPercent: 5 }, { xPercent: -42, ease: "none", scrollTrigger: { trigger: ".band", start: "top bottom", end: "bottom top", scrub: true } });

  /* ---------------- Timeline ---------------- */
  gsap.to(".tl-line i", { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".tl", start: "top 60%", end: "bottom 60%", scrub: true } });
  $$(".step").forEach(function (s) {
    ScrollTrigger.create({ trigger: s, start: "top 62%", onEnter: function () { s.classList.add("is-on"); }, onLeaveBack: function () { s.classList.remove("is-on"); } });
    gsap.from($(".body", s), { x: s.classList.contains("r") ? 60 : -60, autoAlpha: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: s, start: "top 82%", once: true } });
  });

  /* ---------------- Honorar ---------------- */
  var rtl = gsap.timeline({ scrollTrigger: { trigger: ".rates", start: "top 75%", once: true } });
  rtl.to(".rates-line i", { scaleX: 1, duration: 1.8, ease: "expo.inOut" })
     .from(".rate", { y: 50, autoAlpha: 0, duration: 1.1, ease: "expo.out", stagger: .22 }, 0)
     .from(".rate .node", { scale: 0, duration: .9, ease: "back.out(2)", stagger: .22 }, .1);

  /* ---------------- Portrait ---------------- */
  var pt = $(".portrait");
  if (pt) {
    gsap.fromTo(pt, { clipPath: "inset(100% 0 0 0 round 24px)" }, { clipPath: "inset(0% 0 0 0 round 24px)", duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: pt, start: "top 80%", once: true } });
    var img = $("img", pt);
    if (img) gsap.fromTo(img, { yPercent: -12 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: pt, start: "top bottom", end: "bottom top", scrub: true } });
  }

  /* ---------------- Footer wordmark ---------------- */
  var wm = $(".wordmark");
  if (wm) {
    splitWords(wm);
    gsap.from($$(".swi", wm), { yPercent: 110, duration: 1.4, ease: "expo.out", stagger: .08, scrollTrigger: { trigger: wm, start: "top 92%", once: true } });
  }

  /* ---------------- Refresh after fonts/images ---------------- */
  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
})();
