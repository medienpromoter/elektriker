// Zentrale Content-Datei – alle Inhalte der Website
// Platzhalter in [eckigen Klammern] vor dem Launch ersetzen

const FIRMA = {
  name: "[Firmenname]",
  inhaber: "[Inhabername]",
  strasse: "[Straße] [Nr.]",
  plz: "[PLZ]",
  ort: "[Stadt]",
  telefon: "[Telefonnummer]",
  email: "[E-Mail]",
  gegruendet: "[Gründungsjahr]",
  einzugsgebiet: "[Stadt und Umgebung]",
  oeffnungszeiten: "Mo–Fr 7:00–17:00 Uhr",
  notdienst: true,
  googleBewertung: { sterne: 4.9, anzahl: 87 },
  zertifikate: ["Meisterbetrieb", "VDE-Mitglied", "Innungsbetrieb"],
};

const LEISTUNGEN = [
  {
    slug: "elektroinstallation",
    titel: "Elektroinstallation",
    kurztext:
      "Von der Neuinstallation im Neubau bis zur Nachrüstung im Bestand – wir übernehmen die komplette Elektroinstallation für Privat- und Gewerbekunden in [Stadt].",
    cta: "Jetzt Installationstermin anfragen",
    abschnitte: [
      {
        titel: "Neuinstallation im Neubau",
        text: "Wir begleiten Ihren Neubau von der Rohbauinstallation bis zur fertigen Elektrik – Leitungsverlegung, Unterverteilung, Beleuchtung und alle Steckdosen nach Ihrem Grundriss und Bedarf.",
      },
      {
        titel: "Nachrüstung und Erweiterung im Bestand",
        text: "Alte Elektrik ist ein häufig unterschätztes Brandrisiko. Wir prüfen Ihre bestehende Anlage, erweitern Stromkreise und modernisieren den Sicherungskasten – sauber, normgerecht und dokumentiert.",
      },
      {
        titel: "Sicherungskasten erneuern oder erweitern",
        text: "Schraubsicherungen gehören längst abgelöst. Wir rüsten auf Leitungsschutzschalter und FI-Schutzschalter um – Pflicht für Bäder und Außensteckdosen, sinnvoll überall.",
      },
      {
        titel: "Steckdosen, Schalter und Beleuchtung",
        text: "Zusätzliche Steckdosen in Küche, Bad, Keller oder Garage, spritzwassergeschützte Außensteckdosen (IP44/IP65), Dimmschalter und Bewegungsmelder – alles aus einer Hand.",
      },
      {
        titel: "Haushaltsgeräte anschließen",
        text: "Herd, Backofen, Waschmaschine, Trockner, Geschirrspüler – wir legen die richtigen Stromkreise und Drehstromanschlüsse normgerecht an.",
      },
    ],
    hinweis:
      "Nur konzessionierte Elektrobetriebe dürfen Arbeiten am Netz durchführen. Pfusch am Bau ist hier nicht nur illegal, sondern ein Sicherheitsrisiko.",
  },
  {
    slug: "photovoltaik",
    titel: "Photovoltaik & Energiespeicher",
    kurztext:
      "Mit einer eigenen PV-Anlage produzieren Sie Ihren Strom selbst und senken Ihre Stromrechnung dauerhaft. Wir übernehmen Planung, Installation, Netzanmeldung und den Förderantrag.",
    cta: "Jetzt PV-Anlage berechnen lassen",
    abschnitte: [
      {
        titel: "PV-Anlage für das Einfamilienhaus",
        text: "Wir analysieren Ihre Dachfläche (Ausrichtung, Neigung, Verschattung) und legen die optimale Anlage für Ihren Jahresstromverbrauch aus – mit realistischer Amortisationszeit von typisch 8–14 Jahren.",
      },
      {
        titel: "Batteriespeicher",
        text: "Ein Speicher erhöht Ihren Eigenverbrauch deutlich. Als Orientierung gilt: 1 kWh Speicher je 1.000 kWh Jahresverbrauch. Wir erklären den Unterschied zwischen LFP- und NMC-Systemen und welches für Sie sinnvoll ist.",
      },
      {
        titel: "PV auf Flachdach und Gewerbe",
        text: "Aufständerung auf Flachdach in Ost-West- oder Südausrichtung, größere Anlagen ab 30 kWp mit Direktvermarktung – wir planen und installieren gewerbliche Solaranlagen.",
      },
      {
        titel: "Balkonkraftwerk / Steckersolaranlage",
        text: "Geeignet für Mieter und Eigentümer ohne eigenes Dach. Aktuelle Einspeiseleistung bis 800 W (2.000 W Peak). Wir übernehmen die Anmeldung im Marktstammdatenregister.",
      },
      {
        titel: "Netzanmeldung und Inbetriebnahme",
        text: "Einspeisezusage, Zweirichtungszähler, Marktstammdatenregister – das alles erledigen wir. Sie bekommen die fertige Anlage und müssen sich um nichts kümmern.",
      },
    ],
    foerderung: [
      "KfW 270 – zinsgünstiger Kredit für PV-Anlagen und Speicher",
      "Seit 2023: 0 % Mehrwertsteuer auf Kauf und Installation (direkt im Angebot ausgewiesen)",
      "Regionale Förderprogramme – wir prüfen individuell für Ihr Vorhaben",
    ],
    hinweis:
      "Förderantrag muss VOR Auftragsvergabe gestellt werden – wer das nicht weiß, verliert bares Geld. Wir begleiten Sie durch den Antragsprozess.",
    cta: "Kostenloses Solardach-Angebot anfordern",
  },
  {
    slug: "emobilitaet",
    titel: "E-Mobilität & Ladeinfrastruktur",
    kurztext:
      "Wallbox zu Hause, Ladeinfrastruktur für Firmen und Flotten – wir installieren normgerecht, melden beim Netzbetreiber an und kombinieren die Ladestation auf Wunsch mit Ihrer PV-Anlage.",
    cta: "Jetzt Wallbox-Termin anfragen",
    abschnitte: [
      {
        titel: "Wallbox für das Einfamilienhaus",
        text: "3,7 kW (einphasig) laden ein E-Auto über Nacht. 11 kW dreiphasig laden in ca. 4–6 Stunden. 22 kW ist nur sinnvoll, wenn Fahrzeug und Netzanschluss das erlauben. Wir legen den Kabelweg vom Zählerschrank zur Garage normgerecht an.",
      },
      {
        titel: "Wallbox im Mehrfamilienhaus und WEG",
        text: "Mehrere Ladepunkte benötigen Lastmanagement, damit das Netz nicht überlastet wird. Für Mietverhältnisse empfehlen wir MID-geeichte Wallboxen zur korrekten Abrechnung.",
      },
      {
        titel: "Ladeinfrastruktur für Gewerbe und Flotten",
        text: "AC-Laden mit 11 oder 22 kW für Firmenparkplätze, DC-Schnellladen für Flotten mit hohem Bedarf. Backend-Systeme für Zugangskontrolle und Abrechnung inklusive.",
      },
      {
        titel: "PV + Wallbox + Speicher kombinieren",
        text: "Mit PV-optimiertem Laden speisen Sie Sonnenüberschuss direkt ins Auto – statt ins Netz. Wir planen die Kombination aus PV-Anlage, Speicher und Wallbox für maximalen Eigenverbrauch.",
      },
    ],
    foerderung: [
      "KfW 442 – Solarstrom für Elektroautos (Kombination PV + Wallbox + Speicher)",
      "Regionale Förderprogramme – wir prüfen individuell",
    ],
    hinweis:
      "Wallboxen ab 12 kW müssen beim Netzbetreiber angemeldet werden – das erledigen wir. Nicht jeder Elektriker darf das.",
    cta: "Angebot für Ladestation anfordern",
  },
  {
    slug: "smarthome",
    titel: "Smart Home & Gebäudeautomation",
    kurztext:
      "Intelligente Lichtsteuerung, automatische Rollläden, smarte Heizungsregelung – Smart Home muss nicht alles auf einmal sein. Wir starten mit dem, was Ihnen im Alltag wirklich nützt.",
    cta: "Jetzt Smart-Home-Beratung anfragen",
    abschnitte: [
      {
        titel: "KNX – der Standard für Neubau und Sanierung",
        text: "KNX ist kabelgebunden, herstellerunabhängig und extrem zuverlässig. Ideal für Neubauten und umfangreiche Sanierungen. Einmal installiert, funktioniert es auch ohne Internet.",
      },
      {
        titel: "Funk-Systeme für die Nachrüstung",
        text: "Homematic IP, EnOcean, Zigbee – Funk-Systeme lassen sich ohne Stemmen nachrüsten. Geeignet für Bestandsgebäude, bei denen keine Kabel verlegt werden sollen.",
      },
      {
        titel: "Intelligente Lichtsteuerung",
        text: "Dimmer, Zeitschaltuhren, Präsenzmelder (reagieren auch auf ruhende Personen), Lichtszenen per App oder Taster. DALI-Systeme für gewerbliche Nutzung.",
      },
      {
        titel: "Jalousie- und Rollladensteuerung",
        text: "Vorhandene Rollläden motorisieren, per App, Zeitsteuerung oder automatisch nach Sonnenstand und Wind steuern – und in die Smart-Home-Zentrale einbinden.",
      },
      {
        titel: "Smarte Sicherheitstechnik",
        text: "Türklingel mit Kamera und App-Anbindung, smarte Türschlösser, Sprachsteuerung via Alexa, Google Home oder Apple HomeKit.",
      },
    ],
    hinweis:
      "Lokale Systeme funktionieren auch ohne Internetverbindung – wichtig für Datenschutz und Ausfallsicherheit. Wir empfehlen Systeme, die Sie nicht dauerhaft von einem Cloud-Anbieter abhängig machen.",
    cta: "Kostenlos beraten lassen, was bei Ihnen möglich ist",
  },
  {
    slug: "sicherheitstechnik",
    titel: "Sicherheitstechnik",
    kurztext:
      "Einbruchmeldeanlage, Videoüberwachung, Brandmeldeanlage, Zutrittskontrolle – wir planen und installieren Sicherheitstechnik für Privat- und Gewerbekunden in [Stadt].",
    cta: "Jetzt Sicherheitsberatung anfragen",
    abschnitte: [
      {
        titel: "Einbruchmeldeanlage (EMA)",
        text: "Zentrale, Bewegungsmelder, Öffnungsmelder, Glasbruchmelder und Sirene – wir planen und installieren nach VdS-Standard. VdS-anerkannte Anlagen werden von vielen Versicherungen mit Rabatt honoriert.",
      },
      {
        titel: "Videoüberwachung",
        text: "IP-Kameras innen und außen, PoE-Verkabelung, lokale Speicherung auf NAS oder NVR. Was gefilmt werden darf und was nicht – wir weisen Sie auf die wesentlichen DSGVO-Punkte hin.",
      },
      {
        titel: "Brandmeldeanlage (BMA)",
        text: "Vernetzte Brandmeldeanlagen für Gewerbe – alle Melder schlagen gleichzeitig Alarm. Aufschaltung auf die Feuerwehr-Leitstelle für Objekte, bei denen das vorgeschrieben ist.",
      },
      {
        titel: "Rauchwarnmelder",
        text: "Rauchwarnmelder sind in allen Bundesländern Pflicht für Wohn- und Schlafräume. Wir installieren, vernetzen und übernehmen die jährliche Wartung per Wartungsvertrag.",
      },
      {
        titel: "Zutrittskontrolle",
        text: "Codeschlösser, Kartenleser, biometrische Systeme für Büros, Praxen und Mehrfamilienhäuser – mit Protokollierung, wer wann Zugang hatte.",
      },
      {
        titel: "Blitzschutz und Überspannungsschutz",
        text: "Äußerer Blitzschutz für exponierte Gebäude, innerer Überspannungsschutz für Elektrogeräte, PV-Anlagen und Smart-Home-Systeme. Kombiableiter lassen sich im Sicherungskasten nachrüsten.",
      },
    ],
    hinweis:
      "VdS-anerkannte Anlagen dürfen nur von zertifizierten Betrieben installiert werden. Das ist kein Marketingargument, sondern Voraussetzung für den Versicherungsrabatt.",
    cta: "Kostenlose Einbruchschutz-Beratung vereinbaren",
  },
  {
    slug: "aussenbereich",
    titel: "Außenbereich & Gartenbeleuchtung",
    kurztext:
      "Außensteckdosen, Gartenbeleuchtung, Einfahrtsbeleuchtung und Pool-Elektrik – im Außenbereich gelten besondere Schutzanforderungen. Wir installieren normgerecht und dokumentieren die Kabelwege.",
    cta: "Jetzt Außeninstallation anfragen",
    abschnitte: [
      {
        titel: "Außensteckdosen und Verteiler",
        text: "Für Terrasse, Garten, Carport und Pool installieren wir spritzwassergeschützte Steckdosen (IP44 für überdachte Bereiche, IP65 für freie Montage). Bodensteckdosen für Rasenflächen auf Anfrage.",
      },
      {
        titel: "Gartenbeleuchtung",
        text: "Wegbeleuchtung, Terrassenbeleuchtung, Akzentbeleuchtung. Erdkabel werden in der vorgeschriebenen Mindesttiefe mit Schutzrohr verlegt – wir erstellen einen Kabelplan für spätere Umbauarbeiten.",
      },
      {
        titel: "Einfahrt, Carport und Garage",
        text: "Bewegungsmelder-Außenleuchten für Sicherheit und Komfort, ausreichende Beleuchtungsstärke für sicheres Rangieren. Steuerung per Zeitschaltuhr, Dämmerungsschalter oder App.",
      },
      {
        titel: "Pool- und Teichbeleuchtung",
        text: "Unterwasserbeleuchtung erfordert Schutzkleinspannung (SELV) und zugelassene Leuchten nach IP68. Das ist kein optionales Extra, sondern sicherheitsrelevante Vorschrift.",
      },
    ],
    hinweis:
      "Feuchtigkeit, Frost und UV-Strahlung machen Außeninstallationen anspruchsvoller als Innenarbeiten. Falsch installierte Außenelektrik ist ein echtes Brandrisiko.",
    cta: "Gartenbeleuchtung planen lassen",
  },
  {
    slug: "gewerbe",
    titel: "Elektrik für Gewerbe & Industrie",
    kurztext:
      "Neuinstallation, Schaltschrankbau, Notbeleuchtung, DGUV-V3-Prüfung – wir sind zuverlässiger Elektropartner für Gewerbebetriebe, Büros, Praxen und Industrie in [Stadt].",
    cta: "Jetzt Gewerbeinstallation anfragen",
    abschnitte: [
      {
        titel: "Neuinstallation für Büro, Praxis und Ladenlokal",
        text: "Steckdosendichte nach Nutzungsanforderungen, Beleuchtungsstärke nach Norm, Datenkabel, Trennung von Beleuchtungs- und Gerätestromkreisen – alles nach VDE 0100.",
      },
      {
        titel: "Industrieinstallation",
        text: "Schaltschrankbau und -verdrahtung, Motorsteuerungen, Antriebstechnik, Maschineninstallation und -anschluss. Wir arbeiten sauber und termingerecht.",
      },
      {
        titel: "Notbeleuchtung und Sicherheitsbeleuchtung",
        text: "Pflicht in gewerblichen Gebäuden ab bestimmter Größe. Fluchtwegleuchten als Dauerlicht oder Bereitschaftslicht, mit dokumentierter Jahresprüfung.",
      },
      {
        titel: "Datenverkabelung und Netzwerk",
        text: "CAT6/CAT7 strukturiert verlegt, Patchfelder, Netzwerkschränke, WLAN-Ausleuchtung mit Access Points – damit das Netz funktioniert, wo Sie es brauchen.",
      },
      {
        titel: "DGUV V3 Prüfung (früher BGV A3)",
        text: "Gesetzliche Pflicht für Unternehmen: ortsveränderliche Betriebsmittel (Verlängerungskabel, Kaffeemaschinen, Bildschirme) und ortsfeste Anlagen müssen regelmäßig geprüft werden. Wir erstellen das Protokoll digital.",
      },
    ],
    hinweis:
      "Ohne Prüfnachweis kann die Versicherung im Schadensfall leistungsfrei werden. Wir erstellen Prüfberichte als PDF – jederzeit abrufbar.",
    cta: "DGUV-Prüfung beauftragen",
  },
  {
    slug: "wartung-pruefung",
    titel: "Wartung & Prüfung",
    kurztext:
      "Regelmäßige Prüfungen sind gesetzlich vorgeschrieben und schützen vor Haftungsrisiken. Wir prüfen, dokumentieren und kündigen uns rechtzeitig vor dem nächsten Termin an.",
    cta: "Jetzt Prüftermin anfragen",
    abschnitte: [
      {
        titel: "Wiederholungsprüfung ortsfester Anlagen (VDE 0105)",
        text: "Sichtprüfung, Isolationswiderstandsmessung, Schutzleiterwiderstand, Schleifenimpedanz, Funktionsprüfung – je nach Anlage alle 1–4 Jahre. Prüfbericht als Nachweis für Versicherung und Berufsgenossenschaft.",
      },
      {
        titel: "Geräteprüfung nach DGUV V3",
        text: "Verlängerungskabel, Steckdosenleisten, Elektrowerkzeug, Bürogeräte. Prüffristen: Büro 24 Monate, Baustelle 3 Monate. Prüfplakette und digitales Protokoll inklusive.",
      },
      {
        titel: "Prüfung von PV-Anlagen",
        text: "Sichtprüfung der Module und Unterkonstruktion, Isolationswiderstand, Leerlaufspannung, Kurzschlussstrom. Thermografieaufnahme zur Hotspot-Erkennung auf Anfrage.",
      },
      {
        titel: "Rauchwarnmelder-Wartung",
        text: "Jährliche Funktionsprüfung, Austausch nach spätestens 10 Jahren. Wartungsvertrag: wir erinnern Sie rechtzeitig – kein Aufwand für Eigentümer oder Hausverwaltung.",
      },
      {
        titel: "Blitzschutzanlage prüfen (DIN EN 62305)",
        text: "Sichtprüfung und Erdungswiderstandsmessung je nach Schutzklasse alle 1–4 Jahre.",
      },
    ],
    hinweis:
      "Wartungsvertrag abschließen: einmal beauftragen – wir kündigen uns rechtzeitig vor dem Prüftermin an. Kein Aufwand, keine vergessenen Fristen.",
    cta: "Wartungsvertrag anfragen",
  },
  {
    slug: "notdienst",
    titel: "Reparatur & Notdienst",
    kurztext:
      "Stromausfall, ausgelöster FI, Brandgeruch aus der Steckdose – wir sind 24/7 erreichbar und in der Regel innerhalb von [Reaktionszeit] Stunden vor Ort.",
    cta: "Jetzt anrufen",
    abschnitte: [
      {
        titel: "Stromausfall und Sicherungsfall",
        text: "Defekte Sicherungen, ausgelöster FI-Schalter, Kabeldefekte – wir suchen den Fehler und beheben ihn. Auch wenn der FI immer wieder auslöst, steckt meist ein konkreter Defekt dahinter.",
      },
      {
        titel: "Reparatur defekter Installationen",
        text: "Defekte Steckdosen, Schalter, Außenleuchten, Kurzschlusssuche in der Wand – wir finden den Fehler und reparieren normgerecht.",
      },
      {
        titel: "24/7 Notdienst",
        text: "Stromausfall im Gebäude, Brandgeruch aus Steckdose oder Sicherungskasten, Sicherung lässt sich nicht wieder einschalten – wir sind auch am Wochenende und an Feiertagen erreichbar.",
      },
      {
        titel: "Notdienst für Gewerbe und Industrie",
        text: "Produktionsausfall durch Elektrik-Defekt, Ausfall sicherheitsrelevanter Anlagen (Notbeleuchtung, Brandmeldeanlage) – schnelle Reaktion, saubere Dokumentation.",
      },
    ],
    hinweis:
      "Wichtig: Bei Brandgeruch aus Steckdosen oder dem Sicherungskasten sofort den Hauptschalter ausschalten und die Feuerwehr rufen. Wir kommen danach zur Schadensaufnahme.",
    cta: "Jetzt anrufen",
  },
  {
    slug: "beratung-foerderung",
    titel: "Beratung & Förderung",
    kurztext:
      "Wir klären, welche Fördermittel für Ihr Vorhaben passen – und begleiten Sie durch den Antragsprozess, bevor der Auftrag erteilt wird.",
    cta: "Jetzt kostenlosen Beratungstermin anfragen",
    abschnitte: [
      {
        titel: "Energieberatung Elektrik vor Ort",
        text: "Wir analysieren Ihre bestehende Anlage: Was ist veraltet, was ist sicherheitsrelevant, wo liegen Einsparpotenziale durch LED-Umrüstung, smarte Steuerung oder PV-Anlage?",
      },
      {
        titel: "KfW 270 – Erneuerbare Energien Standard",
        text: "Zinsgünstiger Kredit für PV-Anlagen und Batteriespeicher. Antragstellung vor Auftragsvergabe – wir erklären den Ablauf und unterstützen bei den Unterlagen.",
      },
      {
        titel: "KfW 442 – Solarstrom für Elektroautos",
        text: "Förderung für die Kombination PV-Anlage, Wallbox und Speicher. Wir prüfen, ob Ihr Vorhaben die Voraussetzungen erfüllt.",
      },
      {
        titel: "Nullsteuersatz für PV-Anlagen",
        text: "Seit 2023 gilt 0 % Mehrwertsteuer auf Kauf und Installation von PV-Anlagen auf Wohngebäuden. Das weisen wir direkt im Angebot aus.",
      },
      {
        titel: "Regionale und kommunale Förderprogramme",
        text: "Je nach Bundesland und Kommune gibt es zusätzliche Förderungen. Wir prüfen individuell, was für Ihr Vorhaben und Ihren Standort gilt.",
      },
    ],
    hinweis:
      "Der Förderantrag muss VOR Auftragsvergabe gestellt werden. Wer das nicht weiß, verliert Geld. Wir klären das in der Beratung – kostenlos.",
    cta: "Kostenlosen Beratungstermin vereinbaren",
  },
];

// Export für Node.js (Build-Skript) und Browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { FIRMA, LEISTUNGEN };
}
