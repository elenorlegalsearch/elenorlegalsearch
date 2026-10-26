# ELS – Elenor Legal Search · Website

Statische Website (reines HTML, keine Datenbank, kein Baukasten). Gehostet über GitHub Pages.

## Dateien

| Datei | Zweck |
| --- | --- |
| `index.html` | Landingpage |
| `impressum.html`, `datenschutz.html`, `agb.html` | Rechtsseiten – Platzhalter in `[eckigen Klammern]` ersetzen |
| `bewerber.html` | Seite für Bewerber:innen (Profil per E-Mail, offene Stellen) |
| `assets/fonts.css`, `assets/fonts/` | Selbst gehostete Schriften (Inter, Newsreader; OFL-Lizenz) |
| `.nojekyll` | GitHub liefert die Dateien unverändert aus |

## Vor dem Live-Gang – Platzhalter ersetzen

Alle Stellen findest du mit der Suche nach `PLATZHALTER` und `[`:

1. **Formular:** In `index.html` die Zeile `action="https://formspree.io/f/PLATZHALTER"` durch die eigene Formspree-Adresse ersetzen (kostenloses Konto auf formspree.io, Formular anlegen, Adresse kopieren).
2. **Calendly:** `https://calendly.com/PLATZHALTER` durch den eigenen Buchungslink ersetzen (kommt in `index.html` einmal vor).
3. **LinkedIn:** `https://www.linkedin.com/in/PLATZHALTER` durch das eigene Profil ersetzen (zweimal in `index.html`).
4. **Foto:** In `index.html` den grauen Platzhalter-Kasten `[Foto: Nikola Elenor Poljaric …]` durch ein `<img>` ersetzen – Bild als `assets/nikola.jpg` ablegen (Hochformat 4:5, ca. 1200 px breit, unter 300 KB).
5. **Rechtstexte:** Impressum, Datenschutzerklärung und AGB von der bisherigen Website übernehmen; die gelb markierten Hinweiskästen danach löschen.

Jeden dieser Schritte kann Claude Code für dich erledigen, zum Beispiel:
`Ersetze in index.html den Calendly-Platzhalter durch https://calendly.com/…`

## Veröffentlichen

1. Änderung speichern.
2. In Claude Code: `Committe und pushe alle Änderungen mit einer passenden Nachricht.`
3. Nach etwa einer Minute ist die Seite aktualisiert.

## Eigene Domain

`Settings → Pages → Custom domain` im GitHub-Repository eintragen; DNS bei STRATO wie in der Anleitung setzen (A-Records auf 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; CNAME `www` auf `<github-nutzername>.github.io`). Danach **Enforce HTTPS** aktivieren.
