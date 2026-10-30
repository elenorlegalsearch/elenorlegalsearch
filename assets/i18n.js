/* ELS – Sprachumschalter DE/EN.
   Die Seite lädt immer auf Deutsch. Englisch erscheint erst, wenn jemand auf „EN“ tippt.
   Die Wahl gilt für die aktuelle Browser-Sitzung (sessionStorage, keine Cookies). */
(function () {
  var EN = {
    // Kopf, Reiter, Navigation
    "ELS – Elenor Legal Search | Personalvermittlung für Kanzleien und Rechtsabteilungen": "ELS – Elenor Legal Search | Legal recruitment for law firms and in-house legal teams",
    "Legal Recruiting durch eine Diplomjuristin: ReFa/ReNo, wissenschaftliche Mitarbeiter:innen, Volljurist:innen, Counsel und juristische Freelancer:innen für Kanzleien und Rechtsabteilungen – bundesweit, bei der Erstbesetzung Restbetrag erst nach bestandener Probezeit.": "Legal recruitment by a law graduate: paralegals, research associates, fully qualified lawyers, counsel and legal freelancers for law firms and in-house legal teams – across Germany; for the first placement, the balance is only due after the probation period.",
    "Bereich wählen": "Choose section",
    "Für Kanzleien & Unternehmen": "For law firms & companies",
    "Für Bewerber:innen": "For candidates",
    "Für": "For",
    "Kanzleien &": "law firms &",
    "Für Kanzleien &": "For law firms &",
    "Unternehmen": "companies",
    "Sprache wählen": "Choose language",
    "Hauptnavigation": "Main navigation",
    "Leistungen": "Services",
    "Ablauf": "Process",
    "Honorar": "Fees",
    "FAQ": "FAQ",
    "Erstgespräch buchen": "Book an intro call",

    // Hero
    "Legal Recruiting von einer Diplomjuristin · bundesweit": "Legal recruitment by a law graduate (Diplomjuristin) · across Germany",
    "Jurist:innen, vermittelt von einer Diplomjuristin.": "Legal talent, placed by a law graduate.",
    "Mit Fachkenntnis statt Stichwortsuche.": "Legal expertise instead of keyword matching.",
    "Als Diplomjuristin mit Kanzleipraxis vermittle ich juristisches Personal – von ReFa/ReNo bis Counsel. Examen, Prädikat, Schwerpunkt und Rechtsgebiet ordne ich fachlich ein, bevor ich Ihnen jemanden vorstelle. So erhalten Kanzleien und Rechtsabteilungen Kandidat:innen, die wirklich passen.": "As a law graduate (Diplomjuristin) with law-firm experience, I place legal professionals – from paralegals to counsel. I assess state exams, grades, specialisations and practice areas with a jurist’s eye before I introduce anyone. That is how law firms and legal departments get candidates who truly fit.",
    "Juristisch geprüft": "Legally assessed",
    "Unterlagen liest eine Diplomjuristin – kein Keyword-Filter.": "Applications are read by a law graduate (Diplomjuristin) – not a keyword filter.",
    "Praxis aus Kanzlei & HR": "Law-firm & HR experience",
    "Ich kenne den Alltag juristischer Teams aus eigener Arbeit.": "I know how legal teams work from first-hand experience.",
    "Risiko geteilt": "Shared risk",
    "Die Stelle ist ausgeschrieben, das Team arbeitet die Lücke mit – und die passende Bewerbung bleibt aus. Meist aus diesen Gründen.": "The position is advertised, the team is covering the gap – and the right application never arrives. Usually for these reasons.",
    "Angebot für die Erstbesetzung": "Offer for your first placement",
    "Den vollen Preis zahlen Sie erst, wenn die vermittelte Person die Probezeit bestanden hat.": "You only pay the full price once the placed person has passed the probation period.",
    "Gilt für die erste Besetzung je Kanzlei bzw. Unternehmen.": "Applies to the first placement per law firm or company.",
    "Mehr zum Honorar": "More about fees",
    "anonymisierte Kurzprofile aus meinem wachsenden Pool wechselbereiter Kandidat:innen.": "anonymised profiles from my growing pool of candidates open to a move.",
    "Ich baue laufend einen Pool wechselbereiter Kandidat:innen auf und ergänze ihn durch gezielte Direktansprache. Passt jemand aus dem Pool, kommen erste Profile früh – die Time to Hire bleibt kurz.": "I am continuously building a pool of candidates open to a move and complement it with targeted direct search. If someone in the pool fits, first profiles arrive early – keeping time to hire short.",
    "Das hängt von Position, Rechtsgebiet und Standort ab. Passt jemand aus meinem wachsenden Talentpool, kann ich früh erste anonymisierte Kurzprofile vorstellen. Andernfalls starte ich direkt mit der gezielten Direktansprache.": "That depends on the position, practice area and location. If someone in my growing talent pool fits, I can present first anonymised profiles early. Otherwise I start targeted direct search right away.",
    "Rückmeldung innerhalb von 24 Stunden an Werktagen": "Reply within 24 hours on working days",
    "Schildern Sie mir die Position, ich gleiche sie mit dem Talentpool ab und melde mich innerhalb von 24 Stunden an Werktagen.": "Describe the position – I will match it against my talent pool and get back to you within 24 hours on working days.",
    "– ich antworte innerhalb von 24 Stunden an Werktagen.": "– I reply within 24 hours on working days.",
    "Schildern Sie mir Ihre Vakanz – ich melde mich innerhalb von 24 Stunden an Werktagen.": "Tell me about your vacancy – I will get back to you within 24 hours on working days.",
    "Fachkraft unverbindlich anfragen": "Request a candidate – no obligation",
    "Schwerpunkte": "Focus areas",
    "ReFa / ReNo finden": "Find paralegals",
    "Headhunter für Jurist:innen": "Headhunter for lawyers",
    "Unternehmensjurist:innen": "In-house lawyers",
    "Kanzleien in Berlin": "Law firms in Berlin",
    "Personalvermittlung für Kanzleien & Rechtsabteilungen": "Legal recruitment for law firms & in-house legal teams",
    "Als Diplomjuristin lese ich Examen, Prädikat und Schwerpunkt so wie Sie – nicht wie ein KI-Filter, der Stichwörter abgleicht. Sie erhalten nur fachlich geprüfte Profile, von ReFa/ReNo bis Counsel.": "As a law graduate (Diplomjuristin), I read state exams, grades and specialisations the way you do – not like an AI filter that matches keywords. You only receive profiles assessed from a legal perspective, from paralegals to counsel.",
    "Mit ELS": "With ELS",
    "Unterlagen liest eine Diplomjuristin – kein KI-Filter.": "Applications are read by a law graduate – not an AI filter.",
    "Direktansprache erreicht auch, wer gerade nicht sucht.": "Direct search also reaches those who aren’t actively looking.",
    "Erstbesetzung: Restbetrag erst nach bestandener Probezeit.": "First placement: balance only after the probation period.",
    "Personalvermittlung für Kanzleien & Rechtsabteilungen · bundesweit": "Legal recruitment for law firms & in-house legal teams · across Germany",
    "Ihre Stelle bleibt offen, weil keiner die Unterlagen fachlich lesen kann?": "Is your vacancy still open because nobody can assess the applications from a legal perspective?",
    "Mit Fachkenntnis statt KI-Stichwortsuche.": "Legal expertise instead of AI keyword matching.",
    "Ich habe selbst Jura studiert.": "I studied law myself.",
    "Als Diplomjuristin lese ich Examen, Prädikat, Schwerpunkt und Rechtsgebiet so, wie Sie es tun – nicht wie ein KI-Filter, der nur Stichwörter im Lebenslauf abgleicht. Sie erhalten nur Profile, die ich fachlich geprüft habe – von ReFa/ReNo bis Counsel.": "As a law graduate (Diplomjuristin), I read state exams, grades, specialisations and practice areas the way you do – not like an AI filter that only matches keywords in a CV. You only receive profiles I have assessed from a legal perspective – from paralegals to counsel.",
    "Kommt Ihnen das bekannt vor?": "Sound familiar?",
    "Die Stelle ist seit Monaten ausgeschrieben – das Team arbeitet die Lücke mit.": "The position has been advertised for months – and the team is covering the gap.",
    "Bewerbungen passen auf dem Papier, aber nicht fachlich.": "Applications look good on paper but don’t fit from a legal perspective.",
    "Personalvermittler schicken Lebensläufe nach Stichwörtern statt nach Qualifikation.": "Recruiters send CVs based on keywords instead of qualifications.",
    "Diplomjuristin, selbst Jura studiert": "Law graduate – studied law myself",
    "Erstbesetzung: Restbetrag erst nach bestandener Probezeit": "First placement: balance only after the probation period",
    "Vertraulich & bundesweit": "Confidential & across Germany",
    "Stellenausschreibung auf Anfrage:": "Job posting on request:",
    "Auf Wunsch teile ich Ihre Stelle auf gängigen Jobportalen und in meinem Netzwerk – und veröffentliche sie auf dieser Seite.": "On request, I share your vacancy on common job portals and in my network – and publish it on this website.",
    "Auf Anfrage: Ihre Stelle auf gängigen Jobportalen und in meinem Netzwerk": "On request: your vacancy on common job portals and in my network",
    "Risiko geteilt bei der Erstbesetzung": "Shared risk on your first placement",
    "Restbetrag erst nach bestandener Probezeit – weil ich auf langfristige Zusammenarbeit setze.": "Balance only after the probation period – because I aim for a long-term partnership.",
    "Nur für Ihre erste Besetzung über ELS: Teilbeträge bei Auftrag und Vorstellung, den Rest erst nach bestandener Probezeit.": "For your first placement through ELS only: instalments at engagement and introduction, the balance only after the probation period.",
    "Mein Ziel ist eine langfristige Zusammenarbeit": "My goal is a long-term partnership",
    "– ich plane die Partnerschaft, nicht den Einzelauftrag.": "– I plan for the partnership, not the single assignment.",
    "Restbetrag erst nach bestandener Probezeit – inklusive kostenloser Nachbesetzung.": "Balance only after the probation period – including a free replacement.",
    "Kostenloses Erstgespräch buchen": "Book a free intro call",
    "Fachkraft anfragen": "Request a candidate",
    "Vertraulich & diskret": "Confidential & discreet",
    "Bundesweit, auf Wunsch remote": "Across Germany, remote on request",
    "Rückmeldung innerhalb eines Werktags": "Reply within one business day",
    "Anonymisiertes Kurzprofil": "Anonymised profile",
    "Beispiel": "Example",
    "Volljurist:in, Associate": "Qualified lawyer, associate",
    "Kennung ELS-0427 · Region Berlin": "ID ELS-0427 · Berlin region",
    "Wechselbereit": "Open to move",
    "Rechtsgebiete": "Practice areas",
    "Arbeitsrecht, Datenschutz": "Employment law, data protection",
    "Erfahrung": "Experience",
    "4 Jahre, Kanzlei": "4 years, law firm",
    "Examen": "State exams",
    "2 × Prädikat": "2 × distinction (Prädikat)",
    "Arbeitsmodell": "Work model",
    "Hybrid, Vollzeit": "Hybrid, full-time",
    "Verfügbar": "Available",
    "Mit 3 Monaten Frist": "With 3 months’ notice",
    "Englisch": "English",
    "Verhandlungssicher": "Business fluent",
    "Name, Kontaktdaten und Lebenslauf erst nach Zustimmung der Person.": "Name, contact details and CV only with the person’s consent.",
    "So sehen die Kurzprofile aus, die Sie nach einer Anfrage erhalten.": "This is what the profiles you receive after a request look like.",

    // Wegweiser
    "Wegweiser": "Where to go",
    "Wofür sind Sie hier?": "What brings you here?",
    "Für Kanzleien, Rechtsabteilungen & Unternehmen": "For law firms, legal departments & companies",
    "Sie suchen juristisches Personal?": "Looking for legal staff?",
    "Vakanz schildern, anonymisierte Kurzprofile erhalten, faire Honorarstaffel.": "Describe your vacancy, receive anonymised profiles, fair fee structure.",
    "Leistungen & Ablauf ansehen": "See services & process",
    "Für ReFa/ReNo, Jurist:innen & Counsel": "For paralegals, lawyers & counsel",
    "Sie suchen eine neue Stelle?": "Looking for a new position?",
    "Profil anlegen – kostenlos und vertraulich. Ich melde mich bei passenden Positionen.": "Create a profile – free and confidential. I’ll get in touch about suitable positions.",
    "Zum Bereich für Bewerber:innen": "Go to the candidate section",

    // Eckdaten
    "Eckdaten": "Key facts",
    "Diplomjuristin, LL.B.": "Law graduate (Diplomjuristin), LL.B.",
    "Fachliche Einordnung statt Stichwortsuche": "Legal assessment instead of keyword search",
    "Recht & HR": "Law & HR",
    "Erfahrung aus Kanzleien, HR und Recruiting": "Experience in law firms, HR and recruitment",
    "Berlin · bundesweit": "Berlin · across Germany",
    "Vollständig remote möglich": "Fully remote possible",
    "ReFa bis Counsel": "Paralegal to counsel",
    "Festanstellung und freie Mitarbeit": "Permanent and freelance",

    // Problem
    "Das Problem": "The problem",
    "Warum juristische Vakanzen monatelang offen bleiben": "Why legal vacancies stay open for months",
    "Die Stelle ist ausgeschrieben, das Team arbeitet die Lücke mit – und die passende Bewerbung bleibt aus. Meist aus drei Gründen.": "The job is advertised, the team covers the gap – and the right application never arrives. Usually for three reasons.",
    "Anzeigen erreichen nur, wer aktiv sucht": "Job ads only reach active job seekers",
    "Die besten Jurist:innen sind in Festanstellung und lesen keine Stellenbörsen. Ohne Direktansprache bleibt der größte Teil des Marktes für Sie unsichtbar.": "The best lawyers are employed and don’t read job boards. Without direct approach, most of the market stays invisible to you.",
    "Niemand kann die Unterlagen fachlich lesen": "Nobody can assess applications legally",
    "Prädikat, Schwerpunktbereich, Rechtsgebiet: Wer das nicht einordnen kann, lädt die Falschen ein – und übersieht die Richtigen.": "Exam grades, specialisation, practice area: if you can’t assess them, you invite the wrong people – and overlook the right ones.",
    "Der Prozess dauert, die Kandidat:innen springen ab": "The process drags on, candidates drop out",
    "Zwischen Ausschreibung und Vertrag vergehen oft Monate. Wechselbereite nehmen in dieser Zeit das nächste Angebot an.": "Months often pass between job ad and contract. Candidates accept another offer in the meantime.",

    // Leistungen
    "Die Lösung": "The solution",
    "So besetze ich Ihre Stelle": "How I fill your position",
    "Drei Wege, je nach Position und Dringlichkeit. In allen Fällen prüfe ich Unterlagen und Qualifikation selbst – als Diplomjuristin, nicht als Vermittlerin mit Stichwortliste.": "Three approaches, depending on position and urgency. In every case I review documents and qualifications myself – as a law graduate (Diplomjuristin), not as a recruiter with a keyword list.",
    "Welcher Weg passt zu Ihnen? Kurz besprechen": "Which approach suits you? Let’s talk",
    "Der Klassiker": "The classic",
    "Personalvermittlung in Festanstellung": "Permanent placement",
    "Ich suche, prüfe und stelle Ihnen passende Bewerber:innen vor – in Voll- oder Teilzeit, von ReFa/ReNo bis Counsel.": "I search, assess and introduce suitable candidates – full-time or part-time, from paralegals to counsel.",
    "Vorauswahl mit Interview und Prüfung der Unterlagen": "Pre-selection with interview and document review",
    "Candidate Summary zu jeder vorgestellten Person": "Candidate summary for every person introduced",
    "Begleitung bis zur Vertragsunterzeichnung": "Support until the contract is signed",
    "Für schwer besetzbare Positionen": "For hard-to-fill positions",
    "Direktansprache & Active Sourcing": "Direct search & active sourcing",
    "Ich spreche passende Fachkräfte gezielt und diskret an – über LinkedIn und mein Netzwerk. So erreichen Sie auch, wer gerade nicht sucht.": "I approach suitable professionals directly and discreetly – via LinkedIn and my network. This way you also reach people who aren’t actively looking.",
    "Gezielte Ansprache statt Streuanzeige": "Targeted approach instead of mass ads",
    "Diskret gegenüber dem aktuellen Arbeitgeber": "Discreet towards the current employer",
    "Executive Summary zum Stand der Suche": "Executive summary on search progress",
    "Für Projekte & Spitzenzeiten": "For projects & peak periods",
    "Freelancer & Projektjurist:innen": "Freelance & project lawyers",
    "Für Vertretungen, Projekte oder spezielle Rechtsgebiete vermittle ich juristische Freelancer:innen in die freie Mitarbeit – auch auf Zeit oder beratend.": "For cover, projects or specialist areas I place legal freelancers – also temporarily or in an advisory capacity.",
    "Kurzfristig einsetzbar": "Available at short notice",
    "Freie Mitarbeit, keine Arbeitnehmerüberlassung": "Freelance, no temporary agency work",
    "Auch für Nischen-Rechtsgebiete": "Including niche practice areas",
    "Talentpool-Anfrage:": "Talent pool request:",
    "anonymisierte Kurzprofile wechselbereiter Kandidat:innen, oft schon in den ersten Tagen.": "anonymised profiles of candidates open to a move, often within the first few days.",
    "WiMis & studentische Kräfte:": "Research associates & student assistants:",
    "Recherche- und Unterstützungsstellen, auch mehrere gleichzeitig.": "research and support roles, several at once if needed.",
    "Stellenausschreibung:": "Job posting:",
    "Veröffentlichung auf dieser Seite, in meinem Netzwerk und auf gängigen Jobportalen.": "published on this site, in my network and on major job boards.",

    // Positionen & Rechtsgebiete
    "Positionen": "Positions",
    "Wen ich vermittle": "Who I place",
    "Rechtsanwaltsfachangestellte (ReFa / ReNo)": "Paralegals / legal secretaries (ReFa / ReNo)",
    "Rechtsfachwirt:innen": "Senior paralegals (Rechtsfachwirt:innen)",
    "Wissenschaftliche Mitarbeiter:innen": "Research associates",
    "Diplom- & Wirtschaftsjurist:innen": "Law graduates & business lawyers",
    "Volljurist:innen / Associates": "Fully qualified lawyers / associates",
    "Syndikusrechtsanwält:innen": "In-house counsel (Syndikusrechtsanwält:innen)",
    "Counsel": "Counsel",
    "Juristische Freelancer:innen": "Legal freelancers",
    "Rechtsexpert:innen für Nischen": "Specialists for niche areas",
    "Für Kanzleien und Sozietäten jeder Größe, Rechtsabteilungen in Unternehmen, Verbände, Kammern, Behörden und Legal-Tech-Teams.": "For law firms of every size, corporate legal departments, associations, chambers, public authorities and legal tech teams.",
    "Recruiting mit fachlichem Verständnis": "Recruitment with legal understanding",
    "Gesellschaftsrecht / M&A": "Corporate / M&A",
    "Arbeitsrecht": "Employment law",
    "Datenschutz / DSGVO": "Data protection / GDPR",
    "IT-Recht & Legal Tech": "IT law & legal tech",
    "Compliance": "Compliance",
    "Vertragsrecht": "Contract law",
    "Bank- & Kapitalmarktrecht": "Banking & capital markets",
    "Insolvenz / Restrukturierung": "Insolvency / restructuring",
    "Steuerrecht": "Tax law",
    "Vergaberecht": "Public procurement",
    "Verwaltungsrecht": "Administrative law",
    "Immobilien- & Baurecht": "Real estate & construction",
    "Prozessführung": "Litigation",
    "Wirtschaftsstrafrecht": "White-collar crime",
    "IP / Wettbewerbsrecht": "IP / competition law",
    "Medizin- & Pharmarecht": "Medical & pharma law",
    "und weitere – auch Nischen": "and more – including niches",
    "Ob Kartellrecht oder Vergaberecht: Ich kann Schwerpunkte und Qualifikationen fachlich einordnen und suche gezielt nach der passenden Spezialisierung.": "Whether antitrust or procurement law: I can assess specialisations and qualifications and search specifically for the right expertise.",
    "Ihr Rechtsgebiet fehlt? Sprechen Sie mich an.": "Your practice area is missing? Get in touch.",

    // Warum ELS
    "Warum ELS": "Why ELS",
    "Fünf Gründe, die Suche abzugeben": "Five reasons to hand over your search",
    "Diplomjuristin vermittelt Jurist:innen": "A law graduate placing legal professionals",
    "Ich lese Abschlüsse, Noten und Schwerpunkte richtig. Sie sprechen mit jemandem, der Ihre Sprache spricht.": "I read degrees, grades and specialisations correctly. You talk to someone who speaks your language.",
    "Praxis aus eigener Erfahrung": "First-hand practical experience",
    "Ich kenne Kanzleialltag und Rechtsabteilung und weiß, worauf es in juristischen Teams wirklich ankommt.": "I know daily life in law firms and legal departments and what really matters in legal teams.",
    "Talentpool statt Kaltstart": "Talent pool instead of a cold start",
    "Die mühsame Arbeit, einen Pool wechselbereiter Kandidat:innen aufzubauen, ist erledigt. Erste Profile kommen oft früh – die Time to Hire bleibt kurz.": "The hard work of building a pool of candidates open to a move is done. First profiles often arrive early – time to hire stays short.",
    "Bei Ihrer ersten Besetzung: Teilbeträge bei Auftrag und Vorstellung, den Rest erst nach bestandener Probezeit. Ich plane die Partnerschaft, nicht den Einzelauftrag.": "For your first placement: part payments when you commission the search and when candidates are introduced, the balance only after the probation period. I plan for a partnership, not a one-off job.",
    "Volle Transparenz": "Full transparency",
    "Executive Summary zum Suchstand, Candidate Summary zu jeder Person. Sie wissen jederzeit, wo wir stehen.": "Executive summary on search progress, candidate summary for every person. You always know where we stand.",
    "Sie haben eine konkrete Vakanz?": "Do you have a specific vacancy?",
    "Schildern Sie mir die Position, ich gleiche sie mit dem Talentpool ab und melde mich innerhalb eines Werktags.": "Describe the position, I’ll match it against the talent pool and get back to you within one business day.",

    // Ablauf
    "Vom Bedarf bis zur Unterschrift in fünf Schritten": "From requirement to signature in five steps",
    "Klar strukturiert, jederzeit nachvollziehbar. Sie entscheiden, ich übernehme den Rest.": "Clearly structured, always transparent. You decide, I handle the rest.",
    "Bedarfsgespräch": "Briefing call",
    "Profil, Rechtsgebiet, Team und Konditionen – persönlich oder per Video. Kostenlos.": "Profile, practice area, team and terms – in person or by video. Free of charge.",
    "Suche": "Search",
    "Abgleich mit dem Talentpool, Netzwerk und gezielte Direktansprache.": "Matching with the talent pool, network and targeted direct approach.",
    "Vorauswahl": "Pre-selection",
    "Interviews und fachliche Prüfung der Unterlagen durch mich.": "Interviews and legal review of documents by me.",
    "Vorstellung": "Introduction",
    "Candidate Summary, Gespräche, Feedback. Den Suchstand fasst die Executive Summary zusammen.": "Candidate summary, interviews, feedback. The executive summary sums up search progress.",
    "Abschluss": "Closing",
    "Begleitung bis zur Vertragsunterzeichnung – und darüber hinaus bis zur bestandenen Probezeit.": "Support until the contract is signed – and beyond, until the probation period is passed.",

    // Honorar
    "Bei Ihrer ersten Besetzung trage ich das Risiko mit.": "For your first placement, I share the risk.",
    "Ich plane eine langfristige Zusammenarbeit – deshalb ist das Honorar bei Ihrer ersten Besetzung über ELS in drei Teilbeträge gestaffelt. Den letzten Teil zahlen Sie erst, wenn die vermittelte Person die Probezeit bestanden hat.": "I aim for long-term cooperation – that is why the fee for your first placement through ELS is split into three instalments. You pay the last instalment only once the placed person has passed the probation period.",
    "Individuelles Angebot anfragen": "Request an individual quote",
    "Gilt für die erste Besetzung je Kanzlei bzw. Unternehmen. Bei weiteren Aufträgen zahlen Sie 50 % vor Beginn der Suche und 50 % bei Einstellung – die kostenlose Nachbesetzung gilt auch hier. Einzelheiten regeln Angebot und AGB.": "Applies to the first placement per law firm or company. For further mandates you pay 50 % before the search starts and 50 % upon hiring – the free replacement applies here too. Details are set out in the quote and terms and conditions.",
    "Teilbetrag bei Auftragserteilung": "Part payment when commissioning",
    "Mit Abschluss des Vermittlungsvertrags beginne ich mit der Suche in Talentpool und Netzwerk.": "When the placement contract is signed, I start searching the talent pool and my network.",
    "Teilbetrag bei Vorstellung": "Part payment upon introduction",
    "Fällig mit Übermittlung des ersten geprüften Kandidatenprofils.": "Due when the first vetted candidate profile is sent.",
    "Restbetrag nach bestandener Probezeit": "Balance after the probation period",
    "Den letzten Teil verlange ich erst, wenn die vermittelte Person in Ihrem Team angekommen ist – und passt es doch nicht, suche ich kostenlos nach.": "I only charge the last instalment once the placed person has settled into your team – and if it doesn’t work out, I search for a replacement free of charge.",
    "Die Höhe richtet sich nach Position und Bruttojahresgehalt der eingestellten Person und wird vorab im Angebot festgelegt. Keine Arbeitnehmerüberlassung – die Person wird direkt bei Ihnen angestellt oder beauftragt.": "The amount depends on the position and the gross annual salary of the person hired and is fixed in advance in the quote. No temporary agency work – the person is employed or engaged directly by you.",

    // Über mich
    "[Foto: Nikola Elenor Poljaric vor der Senatsverwaltung für Justiz, Berlin]": "[Photo: Nikola Elenor Poljaric in front of the Berlin Senate Department for Justice]",
    "Ihre Ansprechpartnerin": "Your contact",
    "Vor der Senatsverwaltung für Justiz und Verbraucherschutz, Berlin": "In front of the Berlin Senate Department for Justice and Consumer Protection",
    "Nikola Elenor Poljaric, Diplomjuristin, Inhaberin von ELS – Elenor Legal Search": "Nikola Elenor Poljaric, law graduate (Diplomjuristin), owner of ELS – Elenor Legal Search",
    "Diplomjuristin, LL.B. · Inhaberin ELS – Elenor Legal Search": "Law graduate (Diplomjuristin), LL.B. · Owner of ELS – Elenor Legal Search",
    "„Ich habe selbst in der Kanzlei gearbeitet und weiß, wie lange eine offene Stelle ein Team bremst. Deshalb spreche ich mit Ihnen über Rechtsgebiete und Prädikate – nicht über Stichwörter im Lebenslauf.“": "“I have worked in a law firm myself and know how long an open position slows a team down. That’s why I talk with you about practice areas and exam grades – not about keywords in a CV.”",
    "Abschluss ": "Degree ",
    "Aktuelle Weiterbildung": "Current studies",
    "LL.M. Europäisches Wirtschaftsrecht, Europa-Universität Viadrina": "LL.M. European Business Law, European University Viadrina",
    "Schwerpunkte": "Focus areas",
    "Verfassungs- und Verwaltungsrecht, Datenschutz und Digitalrecht": "Constitutional and administrative law, data protection and digital law",
    "Während und nach dem Studium: operatives HR, HR-Management, Kanzleien und Recruiting": "During and after my law studies: operational HR, HR management, law firms and recruitment",
    "Während und nach meinem Jurastudium habe ich im operativen HR, im HR-Management, in Kanzleien und im Recruiting gearbeitet. Mit ELS bringe ich beides zusammen: Ich arbeite genau an der Schnittstelle von Recruiting und Recht – und verstehe dadurch Kandidat:innen und Kanzleien gleichermaßen.": "During and after my law studies I worked in operational HR, HR management, law firms and recruitment. With ELS I bring both worlds together: I work right at the interface of recruitment and law – and therefore understand candidates and law firms alike.",
    "Sitz": "Based in",
    "Berlin, Vermittlung bundesweit": "Berlin, placements across Germany",
    "Zusammenarbeit": "Working together",
    "Auf Wunsch persönlich vor Ort, sonst vollständig remote": "In person on request, otherwise fully remote",
    "LinkedIn-Profil": "LinkedIn profile",

    // FAQ
    "Häufige Fragen": "Frequently asked questions",
    "Was Kanzleien und Rechtsabteilungen vorab wissen wollen": "What law firms and legal departments want to know",
    "Ihre Frage ist nicht dabei?": "Your question isn’t listed?",
    "Schreiben Sie mir": "Write to me",
    "– ich antworte innerhalb eines Werktags.": "– I reply within one business day.",
    "Was kostet die Personalvermittlung?": "What does the placement cost?",
    "Das Honorar richtet sich nach Position und Bruttojahresgehalt der eingestellten Person und wird vorab in einem individuellen Angebot festgelegt. Bei Ihrer ersten Besetzung zahlen Sie in drei Teilbeträgen: bei Auftragserteilung, bei Übermittlung des ersten Kandidatenprofils und – den letzten Teil – erst nach bestandener Probezeit. Bei weiteren Aufträgen gilt: 50 % vor Beginn der Suche, 50 % bei Einstellung.": "The fee depends on the position and the gross annual salary of the person hired and is set in advance in an individual quote. For your first placement you pay in three instalments: when commissioning the search, when the first candidate profile is sent and – the last instalment – only after the probation period. For further mandates: 50 % before the search starts, 50 % upon hiring.",
    "Wie schnell erhalte ich erste Profile?": "How quickly will I receive first profiles?",
    "Das hängt von Position, Rechtsgebiet und Standort ab. Weil der Talentpool wechselbereiter Kandidat:innen bereits besteht, kann ich häufig früh erste anonymisierte Kurzprofile vorstellen – oft innerhalb der ersten Tage.": "That depends on position, practice area and location. Because the talent pool of candidates open to a move already exists, I can often present first anonymised profiles early – frequently within the first few days.",
    "Bieten Sie Arbeitnehmerüberlassung an?": "Do you offer temporary agency staffing?",
    "Nein. Ich vermittle in Festanstellung und in die freie Mitarbeit (Freelancer:innen und Projektjurist:innen). Die vermittelte Person wird direkt bei Ihnen angestellt oder beauftragt.": "No. I place people in permanent positions and in freelance work (freelancers and project lawyers). The placed person is employed or engaged directly by you.",
    "Vermitteln Sie nur in Berlin?": "Do you only place in Berlin?",
    "Mein Sitz ist Berlin, ich vermittle aber bundesweit. Die Zusammenarbeit ist vollständig remote möglich – auf Wunsch komme ich gern persönlich vorbei.": "I’m based in Berlin but place candidates across Germany. We can work together fully remotely – I’m happy to visit in person on request.",
    "Wie vertraulich ist der Talentpool?": "How confidential is the talent pool?",
    "Der Pool ist nicht öffentlich – nur ich sehe die Profile. Sie erhalten zunächst anonymisierte Kurzprofile ohne Namen und Kontaktdaten. Den vollständigen Lebenslauf leite ich erst weiter, wenn die Person im Einzelfall zugestimmt hat.": "The pool is not public – only I can see the profiles. You first receive anonymised profiles without names or contact details. I only forward the full CV once the person has agreed in the specific case.",
    "Erbringen Sie Rechtsberatung?": "Do you provide legal advice?",
    "Nein. ELS – Elenor Legal Search ist eine private Personalvermittlung und erbringt keine Rechtsdienstleistungen im Sinne des Rechtsdienstleistungsgesetzes.": "No. ELS – Elenor Legal Search is a private recruitment agency and does not provide legal services within the meaning of the German Legal Services Act (RDG).",

    // Kontakt
    "Schildern Sie mir Ihre Vakanz – ich melde mich innerhalb eines Werktags.": "Describe your vacancy – I’ll get back to you within one business day.",
    "Zwei Minuten für das Formular genügen. Ich gleiche Ihre Anforderungen vertraulich mit dem Talentpool ab und sage Ihnen ehrlich, was realistisch ist.": "Two minutes for the form are enough. I’ll confidentially match your requirements with the talent pool and tell you honestly what is realistic.",
    "Lieber direkt sprechen?": "Prefer to talk directly?",
    "Kostenloses Erstgespräch, 30 Minuten": "Free intro call, 30 minutes",
    "Wir klären Position, Rechtsgebiet und Konditionen – unverbindlich, per Video oder Telefon.": "We clarify position, practice area and terms – without obligation, by video or phone.",
    "Termin über Calendly buchen": "Book via Calendly",
    "Kanzlei / Unternehmen": "Law firm / company",
    "Muster Rechtsanwälte PartG mbB": "Example Law Firm LLP",
    "Ihr Name": "Your name",
    "Vor- und Nachname": "First and last name",
    "E-Mail": "Email",
    "name@kanzlei.de": "name@lawfirm.com",
    "Telefon": "Phone",
    "(optional)": "(optional)",
    "Gesuchte Position": "Position sought",
    "Bitte wählen": "Please select",
    "Wissenschaftliche Mitarbeiter:in": "Research associate",
    "Diplom- / Wirtschaftsjurist:in": "Law graduate / business lawyer",
    "Volljurist:in / Associate": "Qualified lawyer / associate",
    "Syndikusrechtsanwält:in": "In-house counsel",
    "Freelancer:in / Projektjurist:in": "Freelancer / project lawyer",
    "Andere Position": "Other position",
    "Andere Position / eigene Angabe": "Other position / your own entry",
    "Oder selbst eintragen, z. B. Legal Counsel": "Or enter your own, e.g. legal counsel",
    "Oder selbst eintragen …": "Or enter your own …",
    "Weitere Rechtsgebiete / eigene Angabe": "Other practice areas / your own entry",
    "Bitte wählen Sie eine Position aus oder tragen Sie sie selbst ein.": "Please choose a position or enter your own.",
    "Rechtsgebiet(e)": "Practice area(s)",
    "z. B. Arbeitsrecht, Datenschutz": "e.g. employment law, data protection",
    "Kurz zur Stelle": "About the position",
    "(Standort, Arbeitsmodell, Umfang, Start – optional)": "(location, work model, hours, start – optional)",
    "Berlin, hybrid, Vollzeit, Start ab Januar …": "Berlin, hybrid, full-time, start in January …",
    "Ich habe die": "I have read the",
    "Datenschutzerklärung": "privacy policy",
    "gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.": "and agree to my details being processed to handle my request.",
    "Fachkraft anfragen – Rückmeldung in einem Werktag": "Request a candidate – reply within one business day",
    "Verschlüsselte Übertragung · Unverbindlich · Anfrage kostenfrei": "Encrypted transfer · No obligation · Free enquiry",

    // Bewerber-Teaser & Footer
    "Sie suchen selbst den nächsten Schritt im Recht?": "Looking for your own next step in law?",
    "Profil anlegen, Lebenslauf per E-Mail senden, passende Angebote erhalten. Für Sie kostenlos, vertraulich auch gegenüber Ihrem aktuellen Arbeitgeber – Ihre Unterlagen gehen nur mit Ihrer Zustimmung weiter.": "Create a profile, send your CV by email, receive suitable offers. Free for you, confidential also towards your current employer – your documents are only shared with your consent.",
    "Profil anlegen": "Create profile",
    "Offene Vakanzen ansehen": "View open vacancies",
    "Personalvermittlung für juristisches Personal – Kanzleien und Rechtsabteilungen, bundesweit. Keine Rechtsdienstleistung im Sinne des RDG.": "Recruitment of legal professionals – law firms and legal departments across Germany. No legal services within the meaning of the RDG.",
    "Kontakt": "Contact",
    "Inh. Nikola Elenor Poljaric": "Owner: Nikola Elenor Poljaric",
    "Rechtliches": "Legal",
    "Impressum": "Legal notice (Impressum)",
    "AGB": "Terms",
    "Datenschutz": "Privacy",
    "Personalvermittlung · Berlin · bundesweit": "Legal recruitment · Berlin · across Germany",

    "Über mich": "About me",
    "Über mich | ELS – Elenor Legal Search": "About me | ELS – Elenor Legal Search",
    "Nikola Elenor Poljaric, Diplomjuristin: Personalvermittlung an der Schnittstelle von Recruiting und Recht.": "Nikola Elenor Poljaric, law graduate: legal recruitment at the interface of recruiting and law.",

    "Offene": "Open",
    "Vakanzen": "vacancies",
    "Bewerber:innen": "candidates",
    "Offene Vakanzen": "Open vacancies",
    "Offene Vakanzen | ELS – Elenor Legal Search": "Open vacancies | ELS – Elenor Legal Search",
    "Offene Vakanzen bei ELS – Elenor Legal Search: Stellenportal im Aufbau, Anfragen gerne persönlich.": "Open vacancies at ELS – Elenor Legal Search: job portal under construction, enquiries welcome in person.",
    "Unser Stellenportal befindet sich derzeit im Aufbau.": "Our job portal is currently under construction.",
    "Viele Mandate besetze ich vertraulich und ohne öffentliche Ausschreibung – von ReFa/ReNo über wissenschaftliche Mitarbeit bis zu Volljurist:innen und Counsel. Sprechen Sie mich gerne persönlich an: Ich informiere Sie diskret über aktuelle Vakanzen, die zu Ihrem Profil passen.": "I fill many mandates confidentially and without public advertisement – from paralegals and research associates to qualified lawyers and counsel. Feel free to contact me personally: I will discreetly inform you about current vacancies that match your profile.",
    "Viele Mandate besetze ich vertraulich und ohne öffentliche Ausschreibung. Sprechen Sie mich gerne persönlich an – ich informiere Sie diskret über aktuelle Vakanzen, die zu Ihrem Profil passen.": "I fill many mandates confidentially and without public advertisement. Feel free to contact me personally – I will discreetly inform you about current vacancies that match your profile.",
    "Aktuelle Vakanzen anfragen": "Ask about current vacancies",
    "Profil anlegen": "Create profile",
    "Sie suchen als Kanzlei oder Unternehmen Verstärkung?": "Are you a law firm or company looking for support?",
    "Vakanz vertraulich besprechen": "Discuss your vacancy confidentially",

    "Unterlagen einreichen": "Submit your documents",
    "Vorlage öffnen": "Open the template",
    "Klicken Sie auf „Unterlagen per E-Mail senden“. Ihr E-Mail-Programm öffnet sich mit einer vorbereiteten Nachricht.": "Click “Send documents by email”. Your email program opens with a prepared message.",
    "Eckdaten ergänzen": "Add key details",
    "Position, Rechtsgebiete, Wunschort, Verfügbarkeit – die Felder sind schon angelegt.": "Position, practice areas, preferred location, availability – the fields are already set up.",
    "Dateien anhängen und senden": "Attach files and send",
    "Lebenslauf als PDF; gern auch Zeugnisse und Examensurkunden.": "CV as a PDF; references and exam certificates are welcome too.",
    "Unterlagen per E-Mail senden": "Send documents by email",
    "E-Mail-Adresse kopieren": "Copy email address",
    "Kein E-Mail-Programm eingerichtet? Senden Sie Ihre Unterlagen einfach aus Ihrem Webmail (z. B. Gmail, GMX, Outlook) an": "No email program set up? Simply send your documents from your webmail (e.g. Gmail, GMX, Outlook) to",
    ". Bitte nach Möglichkeit PDF-Dateien, insgesamt höchstens ca. 20 MB.": ". Please use PDF files where possible, up to approx. 20 MB in total.",
    "Sie möchten Ihre Unterlagen zurückziehen?": "Want to withdraw your documents?",
    "Löschung beantragen": "Request deletion",
    "– ich entferne Ihre Daten umgehend und bestätige Ihnen die Löschung.": "– I will delete your data promptly and confirm the deletion.",

    "Kundenfreundlicher als branchenüblich": "More client-friendly than the industry standard",
    "Vergleich mit dem Branchenstandard": "Comparison with the industry standard",
    "Üblich in der Branche": "Industry standard",
    "Volles Honorar bereits bei Vertragsunterschrift": "Full fee as soon as the contract is signed",
    "Das Risiko in der Probezeit tragen Sie allein": "You bear the probation risk alone",
    "Springt die Person ab, beginnt die Suche von vorn": "If the person leaves, the search starts from scratch",
    "Bei ELS": "With ELS",
    "Erstbesetzung: Restbetrag erst nach bestandener Probezeit": "First placement: balance only after the probation period",
    "Erstbesetzung: Ich trage das Risiko in der Probezeit mit": "First placement: I share the probation risk",
    "Kostenlose Nachbesetzung bei jedem Auftrag, falls es nicht passt": "Free replacement on every mandate if it doesn’t work out",
    "Was passiert, wenn die vermittelte Person die Probezeit nicht besteht?": "What happens if the placed person does not pass the probation period?",
    "Bei Ihrer ersten Besetzung entfällt dann der Restbetrag – vorausgesetzt, die Person geht selbst oder Sie trennen sich aus Gründen, die in ihrer Person oder ihrem Verhalten liegen. Zusätzlich suche ich einmalig kostenlos eine Nachfolgerin oder einen Nachfolger für dieselbe Position. Den Restbetrag zahlen Sie erst, wenn diese Person die Probezeit besteht. Bei weiteren Aufträgen bleibt das Honorar zwar geschuldet, die kostenlose Nachbesetzung erhalten Sie aber ebenfalls.": "For your first placement, the balance is then waived – provided the person leaves of their own accord or you part ways for reasons relating to their person or conduct. In addition, I search once, free of charge, for a successor for the same position. You pay the balance only once that person passes the probation period. For further mandates the fee remains due, but you also receive the free replacement.",
    "Vertrags- und Zivilrecht": "Contract & civil law",
    "Immobilien-, Bau- & Mietrecht": "Real estate, construction & tenancy",
    "Familien- & Erbrecht": "Family & inheritance law",
    "Öffentliches Recht / Verwaltungsrecht": "Public / administrative law",
    "Kartell- & Wettbewerbsrecht": "Antitrust & competition law",
    "Gewerblicher Rechtsschutz / IP": "IP / intellectual property",
    "Straf- & Wirtschaftsstrafrecht": "Criminal & white-collar crime",
    "Migrations- & Ausländerrecht": "Immigration law",
    "Prozessführung / Litigation": "Litigation",
    "Versicherungsrecht": "Insurance law",
    "Energie- & Umweltrecht": "Energy & environmental law",
    "Sozialrecht": "Social security law",
    "Verkehrsrecht": "Traffic law",
    "Europa- & Völkerrecht": "EU & international law",
    "Ausbildung ReFa / ReNo": "Paralegal training (ReFa / ReNo)",
    "Rechtsfachwirt:in": "Senior paralegal",
    "Bachelor of Laws (LL.B.)": "Bachelor of Laws (LL.B.)",
    "Master of Laws (LL.M.)": "Master of Laws (LL.M.)",
    "Wirtschaftsjurist:in (Diplom / FH)": "Business lawyer (degree)",
    "Erstes Staatsexamen / Diplomjurist:in": "First state exam / law graduate",
    "Zweites Staatsexamen (Volljurist:in)": "Second state exam (fully qualified)",
    "Anwaltszulassung": "Admitted to the bar",
    "Fachanwaltstitel": "Specialist lawyer title (Fachanwalt)",
    "Promotion (Dr. iur.)": "Doctorate (Dr. iur.)",
    "Berufseinstieg": "Entry level",
    "1–3 Jahre": "1–3 years",
    "3–5 Jahre": "3–5 years",
    "5–10 Jahre": "5–10 years",
    "über 10 Jahre": "over 10 years",
    "Vor Ort": "On site",
    "Hybrid": "Hybrid",
    "Remote": "Remote",
    "Vollzeit": "Full-time",
    "Teilzeit": "Part-time",
    "Freie Mitarbeit": "Freelance",
    "keine Vorgabe": "no requirement",
    "ab „befriedigend“ (6,5 P.)": "from “befriedigend” (6.5 pts)",
    "ab „vollbefriedigend“ (9,0 P.)": "from “vollbefriedigend” (9.0 pts)",
    "ab „gut“ (11,5 P.)": "from “gut” (11.5 pts)",
    "Erstes Examen – staatlicher Pflichtfachteil": "First exam – state compulsory part",
    "Erstes Examen – Schwerpunktbereich": "First exam – specialisation",
    "Erstes Examen – Gesamtnote": "First exam – overall grade",
    "Zweites Staatsexamen": "Second state exam",
    "Englisch verhandlungssicher": "Business-fluent English",
    "Weitere Fremdsprachen": "Other foreign languages",
    "Anforderungsprofil schärfen": "Sharpen your requirements",
    "(optional – zum Ankreuzen)": "(optional – tick boxes)",
    "Weitere oder Nischen-Rechtsgebiete": "Other or niche practice areas",
    "z. B. Lebensmittelrecht, Presserecht": "e.g. food law, media law",
    "Erforderliche Qualifikation": "Required qualification",
    "Notenanforderungen": "Grade requirements",
    "Berufserfahrung": "Professional experience",
    "Arbeitsmodell & Umfang": "Work model & hours",
    "Sprachen": "Languages",
    "Ihr Profil in zwei Minuten": "Your profile in two minutes",
    "Kreuzen Sie an, was auf Sie zutrifft. Mit einem Klick entsteht daraus eine vorbereitete E-Mail an mich – Sie hängen nur noch Ihren Lebenslauf an. Es wird nichts auf dieser Website gespeichert.": "Tick what applies to you. One click turns it into a prepared email to me – you only need to attach your CV. Nothing is stored on this website.",
    "Name": "Name",
    "Abschlüsse & Qualifikationen": "Degrees & qualifications",
    "Noten (optional)": "Grades (optional)",
    "Punkte, z. B. 9,5": "Points, e.g. 9.5",
    "Wunschort / Region": "Preferred location / region",
    "z. B. Berlin, Potsdam, bundesweit": "e.g. Berlin, Potsdam, nationwide",
    "Verfügbar ab": "Available from",
    "z. B. sofort, 01.03.2027": "e.g. immediately, 01.03.2027",
    "Gehaltsvorstellung (brutto / Jahr)": "Salary expectation (gross / year)",
    "z. B. 55.000 €": "e.g. €55,000",
    "Wechselbereitschaft": "Willingness to move",
    "Aktiv auf der Suche": "Actively looking",
    "Offen für passende Angebote": "Open to suitable offers",
    "Standort der Stelle": "Job location",
    "z. B. Berlin, hybrid": "e.g. Berlin, hybrid",
    "Start ab Januar, Teamgröße, Besonderheiten …": "Start in January, team size, specifics …",
    "Profil ankreuzen": "Tick your profile",
    "Rechtsgebiete, Abschlüsse, Noten und Wünsche – alles optional.": "Practice areas, degrees, grades and preferences – all optional.",
    "E-Mail erzeugen": "Create the email",
    "Ein Klick auf „Unterlagen per E-Mail senden“ öffnet Ihr E-Mail-Programm mit Ihrem Profil als Text.": "Clicking “Send documents by email” opens your email program with your profile as text.",
    "Lebenslauf anhängen und senden": "Attach your CV and send",
    "Seite nicht gefunden | ELS – Elenor Legal Search": "Page not found | ELS – Elenor Legal Search",
    "Fehler 404": "Error 404",
    "Diese Seite wurde leider nicht gefunden.": "Sorry, this page could not be found.",
    "Möglicherweise hat sich die Adresse geändert oder es liegt ein Tippfehler vor. Über die folgenden Links finden Sie schnell zum Ziel.": "The address may have changed or contain a typo. The links below will quickly take you where you want to go.",
    "Zur Startseite": "Go to homepage",
    "Kontakt": "Contact",
    // bewerber.html
    "Für Bewerber:innen | ELS – Elenor Legal Search": "For candidates | ELS – Elenor Legal Search",
    "Jobs im Rechtsbereich: Profil anlegen bei ELS – Elenor Legal Search. Kostenlos, vertraulich, persönlich begleitet.": "Legal jobs: create your profile with ELS – Elenor Legal Search. Free, confidential, personally supported.",
    "Offene Stellen": "Open positions",
    "Ihr nächster Schritt im Recht – kostenlos, vertraulich, persönlich begleitet.": "Your next step in law – free, confidential, personally supported.",
    "Ob ReFa, wissenschaftliche Mitarbeit, Volljurist:in oder Counsel: Senden Sie mir Ihr Profil, ich melde mich, sobald eine Kanzlei oder Rechtsabteilung jemanden mit Ihrem Hintergrund sucht – auch initiativ, wenn gerade keine passende Stelle ausgeschrieben ist.": "Whether paralegal, research associate, qualified lawyer or counsel: send me your profile and I’ll get in touch as soon as a law firm or legal department is looking for someone with your background – even if no suitable position is currently advertised.",
    "Für Bewerber:innen immer kostenlos": "Always free for candidates",
    "Vertraulich, auch gegenüber Ihrem aktuellen Arbeitgeber": "Confidential, also towards your current employer",
    "Weitergabe Ihrer Unterlagen nur nach Ihrer Zustimmung im Einzelfall": "Your documents are only shared with your consent in each case",
    "Ansprechpartnerin mit juristischem Hintergrund": "A contact with a legal background",
    "So geht es:": "How it works:",
    "Schicken Sie mir eine E-Mail mit Ihrem Lebenslauf (PDF) und ein paar Eckdaten. Die Mail-Vorlage ist bereits vorbereitet:": "Send me an email with your CV (PDF) and a few key details. The email template is already prepared:",
    "Profil per E-Mail senden": "Send profile by email",
    "Öffnet Ihr E-Mail-Programm mit vorausgefülltem Text. Alternativ einfach formlos an": "Opens your email program with pre-filled text (in German). Alternatively, simply write to",
    "Was mit Ihren Daten passiert": "What happens to your data",
    "Ihr Profil sieht nur die Inhaberin von ELS – weder Kanzleien noch Unternehmen. Bei einer passenden Anfrage erhält das Unternehmen zunächst nur ein anonymisiertes Kurzprofil ohne Namen und Kontaktdaten. Ihren Lebenslauf leite ich erst weiter, wenn Sie im Einzelfall zugestimmt haben. Einwilligungen können Sie jederzeit per E-Mail widerrufen. Einzelheiten in der": "Only the owner of ELS sees your profile – neither law firms nor companies. For a matching request, the company first receives only an anonymised profile without name or contact details. I only forward your CV once you have agreed in the specific case. You can withdraw your consent at any time by email. Details in the",
    "Position": "Position",
    "Rechtsgebiet": "Practice area",
    "Ort / Modell": "Location / model",
    "Kennziffer": "Reference",
    "Auf diese Stelle bewerben": "Apply for this position",
    "Derzeit keine weiteren öffentlichen Ausschreibungen – viele Positionen besetze ich diskret aus dem Talentpool. Legen Sie Ihr Profil an, dann melde ich mich bei passenden Stellen.": "Currently no further public postings – I fill many positions discreetly from the talent pool. Create your profile and I’ll contact you about suitable positions.",
    "Kostet mich die Vermittlung etwas?": "Does the placement cost me anything?",
    "Nein. Für Bewerber:innen ist die Vermittlung immer kostenlos.": "No. Placement is always free for candidates.",
    "Erfährt mein aktueller Arbeitgeber von meiner Suche?": "Will my current employer find out about my search?",
    "Nein. Ich behandle Ihre Angaben vertraulich und gebe Unterlagen nur nach Ihrer Zustimmung im Einzelfall weiter.": "No. I treat your details confidentially and only share documents with your consent in each case.",
    "Für welche Positionen vermitteln Sie?": "Which positions do you place?",
    "Rechtsanwaltsfachangestellte (ReFa/ReNo), Rechtsfachwirt:innen, wissenschaftliche Mitarbeiter:innen, Diplom- und Wirtschaftsjurist:innen, Volljurist:innen, Syndikusrechtsanwält:innen, Counsel sowie juristische Freelancer:innen – in Festanstellung oder freier Mitarbeit.": "Paralegals and legal secretaries (ReFa/ReNo), senior paralegals, research associates, law graduates and business lawyers, fully qualified lawyers, in-house counsel, counsel and legal freelancers – permanent or freelance.",
    "© 2026 ELS – Elenor Legal Search · Inh. Nikola Elenor Poljaric · Marie-Curie-Allee 38 · 10315 Berlin": "© 2026 ELS – Elenor Legal Search · Owner: Nikola Elenor Poljaric · Marie-Curie-Allee 38 · 10315 Berlin"
  };

  // Einträge mit gleichem deutschen Wort in verschiedenem Kontext
  var EN_DT = { "Abschluss": "Degree", "Erfahrung": "Experience" };

  var KEY = "els-lang";
  var orig = new Map();      // Textknoten -> Originaltext
  var origAttr = [];         // [Element, Attribut, Original]
  var origTitle = document.title;
  var metaDesc = document.querySelector('meta[name="description"]');
  var origDesc = metaDesc ? metaDesc.getAttribute("content") : null;

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  function translateText(de, node) {
    var p = node.parentNode;
    if (p && p.tagName === "DT" && EN_DT[de]) return EN_DT[de];
    return EN[de];
  }

  function collect() {
    if (orig.size) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest("svg,.els-lang")) return NodeFilter.FILTER_REJECT;
        return norm(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = walker.nextNode())) orig.set(n, n.nodeValue);
    document.querySelectorAll("[placeholder],[aria-label],[title],img[alt]").forEach(function (el) {
      ["placeholder", "aria-label", "title", "alt"].forEach(function (a) {
        if (el.hasAttribute(a) && !el.closest(".els-lang")) origAttr.push([el, a, el.getAttribute(a)]);
      });
    });
  }

  function apply(lang) {
    collect();
    var en = lang === "en";
    orig.forEach(function (de, node) {
      if (!en) { node.nodeValue = de; return; }
      var t = translateText(norm(de), node);
      if (t) {
        var lead = de.match(/^\s*/)[0], trail = de.match(/\s*$/)[0];
        node.nodeValue = lead + t + trail;
      }
    });
    origAttr.forEach(function (r) {
      var t = en ? EN[norm(r[2])] : null;
      r[0].setAttribute(r[1], t || r[2]);
    });
    document.title = en ? (EN[norm(origTitle)] || origTitle) : origTitle;
    if (metaDesc && origDesc) metaDesc.setAttribute("content", en ? (EN[norm(origDesc)] || origDesc) : origDesc);
    document.documentElement.lang = en ? "en" : "de";
    document.querySelectorAll(".els-lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function save(lang) { try { sessionStorage.setItem(KEY, lang); } catch (e) {} }
  function load() { try { return sessionStorage.getItem(KEY); } catch (e) { return null; } }

  function init() {
    document.querySelectorAll(".els-lang button").forEach(function (b) {
      b.addEventListener("click", function () {
        var l = b.getAttribute("data-lang");
        save(l);
        apply(l);
      });
    });
    // Nur wenn in dieser Sitzung bereits aktiv „EN“ gewählt wurde – sonst immer Deutsch.
    if (load() === "en") apply("en");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
