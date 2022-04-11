# Speechbert - Audio Player for a newspaper customer

## Mission
Ein fiktiver Kunde der Zeitung "TEIZ" braucht für die Entwicklung des Onlineformats ein Audio Widget.
Der Kunde hat bereits eine API: https://speech.zeit.de/api/feeds/playlist/neue-nachrichten-test, jedoch fehlt noch die Oberfläche. Das Widget soll getestet werden und soll dafür ohne Effekte auf den restlichen DOM zu produzieren zwischen zwei p-tags  1:1 eingefügt werden.

## Technische Implikationen
Für die Entwicklung leitet sich daraus ab, dass 
1. keine Ordner Struktur für das Projekt benutzt werden sollte, bzw keine source-referenzen benutzt werden sollten.
2. bestehende classes für den bestehenden DOM geprüft, vermieden und globale tags nicht gestyled werden dürfen.
3. der Stil des Widgets sich mit Schriftarten, Größen und CSS Styles in den Online-Auftritt der Zeitung einfügen muss.
4. die gleichen Icons des Kunden benutzt werden Material Design Icons Library https://fonts.google.com/icons?selected=Material+Icons
5. die Größe des Widgets dass Hauptprodukt - den Text, nicht übertrumpft.
6. diejenigen Informationen aus der API isoliert implementiert werden müssen, die der Zeitung ein relevantes Mapping zwischen
    Artikel-Inhalt und Feed erlauben (Thema, Ressort, Verschlagwortung)

## Grobes Design
coming soon

## Userstory
+ Als User:in finde ich den Player zwischen zwei Paragraphen beim Lesen eines Artikels. (p-tags)
+ Als User:in wird mir der Player unabhängig von meinem Endgerät funktional dargestellt. (Responsiv)
+ Als User:in bringt mich der Player designtechnisch nicht von meinem Lesefluss weg.
+ Als User:in sehe ich das zugeordnete Ressort, die headline und das Thema.
+ Als User:in sehe ich eine Auswahl der möglichen Beiträge als Liste auf einen Blick. (Liste)

+ Als User:in kann ich auf die Listeneinträge klicken und so einen Feed starten.
+ Als User:in kann ich mir den nächsten Feed mit einem Button-Click abspielen lassen.
+ Als User:in kann ich mir den vorherigen Feed mit einem Button-Click abspielen lassen.
+ Als User:in kann ich den Feed mit einem Button-Click Pausieren.
+ Als User:in sehe ich NICHT den Play-Progress.

## Userstory - weiterführender Kontext
Der Journalismus ist in Zeiten der Digitalisierung im Wandel und die Lerser:innen werden zunehmends User:innen interaktiver 
Medieninhalte. An Platformökonomie gewöhnte User:innen haben einen "click-on-demand" Serviceanspruch. Dementsprechend muss 
sich das Produkt nativ in das browse-Verhalten einfügen. Die Zeitung befindet sich mit ihrem Geschäftsmodell darüberhinaus im Feld der "Aufmerksamkeits-Ökonomie". Hier übersetzt sich Verweildauer auf der Seite in Revenues durch ausgespielte Werbung. Diese Werbeeinnahmen werden umso größer sein, je eher eine Übereinstimmung des User:innen-Profils mit dem angestrebten Käufer:innenprofil der Werbetreibenden besteht. Die für dieses matching relevanten Metadaten müssen der jeweiligen User:in als Service angeboten und technisch in weiterführender Userstories implementiert werden. Relevant werden hier jegliche Datenvorhaltungen, die thematische Vorlieben, Ressort-Präferenzen, oder Listening-histories persistieren. Für die Zeitung wäre es ein strategischer Vorteil selbst zu einer Platform zu werden, die Daten vorhält. Dafür muss der Tausch Daten-Service implementiert werden. Hier sollte es einen Opt-out geben durch ein Premium Modell. Strategisch wird so eine entkräftung der kapitalistischen man-in-the-middle-attack durch google angestrebt. Werbetreibende sollten direkt anhand der Userprofile TEIZ-Online Werbekosten zahlen. Perspektivisch dürfte dies die Einnahmen übersteigen, die daruas generiert werden, dass externe Adds eingespielt werden.
Daraus ergeben sich meiner Meinung nach die folgenden, über die Basis-Userstories hinausgehenden Userstories:

## Userstories 2.0 - Empfehlungen und Ausblick an Kunden
+ Als User:in kann ich mich ohne Abbonnement in ein Basis-Konto einloggen.
+ Als User:in des Basiskonto stimme ich automatisch einer Benutzung meiner Daten zu.
+ Als user:in des Basiskonto kann ich durch Bezahlung ein Upgrade durchführen.

+ Als User:in wird mir eine Liste meiner bisherigen gestreamten Titel präsentiert.
+ Als User:in kann ich aus diesem Accont heraus das Audio Widget starten.
+ Als User:in wird mir ein Ranking meiner "liebsten Ressorts" gezeigt, anhand eines internen Rankings.
+ Als User:in wird mir ein Ranking meiner "liebsten Themen" gezeigt, anhand der Feed-Verschlagwortung.
+ Als User:in wird mir ein Feed-Karussel mit "andere Leser mochten: " anhand ähnlicher Nutzer:innen-Profile angezeigt.