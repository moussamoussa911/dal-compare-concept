const BRAND_NAME = "Dal Compare";

const translations = {
  de: {
    "nav.home": "Start", "nav.menu": "Speisekarte", "nav.booking": "Reservieren", "nav.restaurant": "Restaurant", "nav.legal": "Rechtliches",
    "common.reserve": "Tisch reservieren", "common.menu": "Speisekarte", "common.ourStory": "Unsere Geschichte", "common.continue": "Weiter", "common.back": "Zurück", "common.skip": "Zum Inhalt",
    "common.address": "Adresse", "common.hours": "Öffnungszeiten", "common.contact": "Kontakt", "common.closed": "Ruhetag", "footer.closedTuesday": "Dienstag Ruhetag",
    "home.eyebrow": "Ristorante · Pizzeria · Bar", "home.hero1": "Ciao,", "home.hero2": "Ochtrup.",
    "home.lead": "Das gute Leben beginnt am Kirchplatz: Steinofenpizza, frische Pasta und ein Abend, der ruhig länger dauern darf.",
    "home.sectionWelcome": "Willkommen", "home.welcomeTitle": "Ein Stück Italien. Direkt am Kirchplatz.",
    "home.welcomeCopy": "Dal Compare heißt „beim Freund“. Genau so fühlt sich ein Abend bei uns an: unkompliziert, herzlich und voller Geschmack.",
    "home.sectionMenu": "Aus der Karte", "home.favTitle": "Die Favoriten am Tisch.", "home.fullMenu": "Ganze Karte entdecken",
    "home.dishPizza": "Rucola, Parmaschinken und Parmesan.", "home.dishPasta": "Zucchini, Scampi und frische Tomaten.",
    "home.sectionExperience": "Dein Abend", "home.aperitivo": "Aperitivo bis Dolce", "home.experienceTitle": "Komm zum Essen. Bleib für den Abend.",
    "home.experienceCopy": "Ob kurzer Pizza-Stopp, Familienessen oder langer Abend mit Cocktails: Hier bestimmst du das Tempo.",
    "home.weekendLunch": "Mittag am Wochenende", "home.happyHour": "Cocktail Happy Hour*", "home.happyNote": "*laut aktueller Hausinformation",
    "home.ctaEyebrow": "Heute schon etwas vor?", "home.ctaTitle": "Dein Tisch wartet.",
    "menu.title": "Was kommt auf den Tisch?", "menu.lead": "Klassiker, Lieblingsgerichte und ein bisschen Lust auf mehr. Stelle euren Tisch zusammen und behalte den Überblick.",
    "menu.search": "Gericht suchen …", "menu.myTable": "Mein Tisch", "menu.tableEyebrow": "Euer Abend", "menu.tableTitle": "Baut euren Tisch.",
    "menu.tableIntro": "Gerichte vormerken, Personen wählen und gemeinsam planen.", "menu.people": "Personen", "menu.empty": "Noch ist der Tisch leer.",
    "menu.emptyHint": "Füge Lieblingsgerichte mit + hinzu.", "menu.total": "Gesamt", "menu.perPerson": "Pro Person", "menu.reserveThis": "Diesen Tisch reservieren",
    "menu.note": "Planungshilfe – keine Bestellung. Preise aus der veröffentlichten Karte 04/2024; bitte vor Ort bestätigen.", "menu.noResults": "Kein Gericht gefunden.",
    "booking.title": "Wann sehen wir uns?", "booking.lead": "Drei kurze Schritte bis zu deinem italienischen Abend.", "booking.phoneLabel": "Lieber persönlich?",
    "booking.locationLabel": "Mitten in Ochtrup", "booking.when": "Wann", "booking.where": "Wo & wer", "booking.details": "Details",
    "booking.step1": "Schritt 1 von 3", "booking.chooseMoment": "Wähle deinen Moment.", "booking.time": "Uhrzeit",
    "booking.step2": "Schritt 2 von 3", "booking.chooseCompany": "Mit wem kommst du?", "booking.guests": "Anzahl Gäste", "booking.area": "Lieblingsplatz",
    "booking.inside": "Im Restaurant", "booking.insideHint": "Warm, lebendig, mittendrin", "booking.outside": "Auf der Terrasse", "booking.outsideHint": "Wenn das Wetter mitspielt",
    "booking.step3": "Schritt 3 von 3", "booking.almost": "Fast geschafft.", "booking.name": "Name", "booking.phone": "Telefon", "booking.email": "E-Mail", "booking.namePlaceholder": "Vor- und Nachname", "booking.phonePlaceholder": "+49 …", "booking.emailPlaceholder": "name@beispiel.de",
    "booking.note": "Wunsch oder Anlass (optional)", "booking.notePlaceholder": "Geburtstag, Kinderstuhl, Allergie …",
    "booking.privacy": "Ich stimme der Verarbeitung meiner Angaben zur Reservierungsanfrage zu.", "booking.submit": "Reservierung anfragen",
    "booking.demo": "Konzeptvorschau: Dieses Formular sendet noch keine echte Reservierung.", "booking.quote": "„Der beste Tisch ist der, an dem noch jemand dazukommt.“",
    "booking.modalTitle": "Der Tisch ist vorgemerkt.", "booking.modalCopy": "In der echten Version würde die Anfrage jetzt direkt beim Restaurant ankommen.", "booking.modalButton": "Verstanden",
    "booking.summaryDate": "Datum", "booking.summaryTime": "Uhrzeit", "booking.summaryGuests": "Gäste", "booking.summaryArea": "Bereich",
    "restaurant.title": "Beim Freund.<br>Mitten in Ochtrup.", "restaurant.note": "Ein Ort für Pizza, Pasta und lange Gespräche.",
    "restaurant.storyLabel": "Unsere Idee", "restaurant.storyTitle": "Gastgeber sein, ohne viel Aufhebens.",
    "restaurant.storyCopy1": "„Dal Compare“ bedeutet „beim Freund“. Deshalb geht es hier nicht um steife Regeln, sondern um ehrliche italienische Küche und eine Atmosphäre, in der man gern sitzen bleibt.",
    "restaurant.storyCopy2": "Von Antipasti über Steinofenpizza und Pasta bis zu frischem Fisch, Fleisch und Dolce: Jeder findet seinen Lieblingsplatz auf der Karte.",
    "restaurant.galleryLabel": "Einblicke", "restaurant.galleryQuote": "Gutes Essen bringt Menschen zusammen.", "restaurant.visitLabel": "Besuch",
    "restaurant.visitTitle": "Wir sehen uns am Kirchplatz.", "restaurant.visitCopy": "Zum Abendessen, zur Feier oder einfach spontan auf eine Pizza.", "restaurant.route": "Route öffnen",
    "legal.title": "Rechtliches.<br>Klar serviert.", "legal.imprint": "Impressum", "legal.privacy": "Datenschutz", "legal.allergens": "Allergene",
    "legal.privacyIntro": "Diese Konzeptseite verwendet keine Analyse-, Werbe- oder Tracking-Cookies. Beim Aufruf verarbeitet der Hostinganbieter technisch notwendige Serverdaten wie IP-Adresse, Zeitpunkt, angeforderte Seite und Browserinformationen.",
    "legal.controller": "Verantwortliche Stelle", "legal.bookingData": "Reservierungsdaten",
    "legal.bookingCopy": "Das hier gezeigte Reservierungsformular ist eine Konzeptvorschau und übermittelt keine Daten. Vor dem produktiven Einsatz werden Übermittlungsweg, Speicherdauer, Empfänger und Rechtsgrundlage abschließend dokumentiert.",
    "legal.externalLinks": "Externe Links", "legal.externalCopy": "Links zu Instagram, Facebook und Google Maps werden erst nach einem Klick geöffnet. Dann gelten die Datenschutzbestimmungen des jeweiligen Anbieters.",
    "legal.rights": "Ihre Rechte", "legal.rightsCopy": "Sie haben – soweit die gesetzlichen Voraussetzungen vorliegen – Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.",
    "legal.allergenCopy": "Die Angaben in der digitalen Karte ersetzen nicht die persönliche Allergenberatung. Bei Allergien oder Unverträglichkeiten sprechen Sie bitte vor der Bestellung das Team an. Preise und Verfügbarkeit können sich ändern.",
    "legal.reviewNote": "Hinweis für die Übergabe: Rechtstexte und Betreiberangaben sind vor Veröffentlichung durch den Betrieb zu prüfen und zu bestätigen.",
    "days.mon": "Mo", "days.tue": "Di", "days.wedFri": "Mi–Fr", "days.sat": "Sa", "days.sun": "So",
    "footer.weekdays": "Mo, Mi–Fr 17:00–23:00", "footer.saturday": "Sa 12:00–14:30 · 17:00–23:00", "footer.sunday": "So 12:00–14:30 · 17:00–22:00", "footer.concept": "Website-Konzept"
  },
  nl: {
    "nav.home": "Home", "nav.menu": "Menukaart", "nav.booking": "Reserveren", "nav.restaurant": "Restaurant", "nav.legal": "Juridisch",
    "common.reserve": "Reserveer een tafel", "common.menu": "Menukaart", "common.ourStory": "Ons verhaal", "common.continue": "Verder", "common.back": "Terug", "common.skip": "Naar de inhoud",
    "common.address": "Adres", "common.hours": "Openingstijden", "common.contact": "Contact", "common.closed": "Gesloten", "footer.closedTuesday": "Dinsdag gesloten",
    "home.eyebrow": "Ristorante · Pizzeria · Bar", "home.hero1": "Ciao,", "home.hero2": "Ochtrup.",
    "home.lead": "Het goede leven begint aan de Kirchplatz: steenovenpizza, verse pasta en een avond die gerust langer mag duren.",
    "home.sectionWelcome": "Welkom", "home.welcomeTitle": "Een stukje Italië. Aan de Kirchplatz.",
    "home.welcomeCopy": "Dal Compare betekent ‘bij een vriend’. Precies zo voelt een avond bij ons: ontspannen, hartelijk en vol smaak.",
    "home.sectionMenu": "Van de kaart", "home.favTitle": "Favorieten voor op tafel.", "home.fullMenu": "Ontdek de hele kaart",
    "home.dishPizza": "Rucola, parmaham en Parmezaanse kaas.", "home.dishPasta": "Courgette, scampi en verse tomaten.",
    "home.sectionExperience": "Jouw avond", "home.aperitivo": "Van aperitivo tot dolce", "home.experienceTitle": "Kom om te eten. Blijf voor de avond.",
    "home.experienceCopy": "Een snelle pizza, een familiediner of een lange avond met cocktails: jij bepaalt het tempo.",
    "home.weekendLunch": "Lunch in het weekend", "home.happyHour": "Cocktail happy hour*", "home.happyNote": "*volgens de actuele huisinformatie",
    "home.ctaEyebrow": "Al plannen voor vanavond?", "home.ctaTitle": "Jouw tafel wacht.",
    "menu.title": "Wat komt er op tafel?", "menu.lead": "Klassiekers, favorieten en zin in iets extra’s. Stel jullie tafel samen en houd het overzicht.",
    "menu.search": "Zoek een gerecht …", "menu.myTable": "Mijn tafel", "menu.tableEyebrow": "Jullie avond", "menu.tableTitle": "Bouw jullie tafel.",
    "menu.tableIntro": "Gerechten bewaren, personen kiezen en samen plannen.", "menu.people": "Personen", "menu.empty": "De tafel is nog leeg.",
    "menu.emptyHint": "Voeg favorieten toe met +.", "menu.total": "Totaal", "menu.perPerson": "Per persoon", "menu.reserveThis": "Deze tafel reserveren",
    "menu.note": "Planhulp – geen bestelling. Prijzen uit de gepubliceerde kaart 04/2024; bevestig ze ter plaatse.", "menu.noResults": "Geen gerecht gevonden.",
    "booking.title": "Wanneer zien we elkaar?", "booking.lead": "Drie korte stappen naar jouw Italiaanse avond.", "booking.phoneLabel": "Liever persoonlijk?",
    "booking.locationLabel": "Midden in Ochtrup", "booking.when": "Wanneer", "booking.where": "Waar & wie", "booking.details": "Gegevens",
    "booking.step1": "Stap 1 van 3", "booking.chooseMoment": "Kies jouw moment.", "booking.time": "Tijd",
    "booking.step2": "Stap 2 van 3", "booking.chooseCompany": "Met wie kom je?", "booking.guests": "Aantal gasten", "booking.area": "Favoriete plek",
    "booking.inside": "In het restaurant", "booking.insideHint": "Warm, levendig, middenin", "booking.outside": "Op het terras", "booking.outsideHint": "Als het weer meewerkt",
    "booking.step3": "Stap 3 van 3", "booking.almost": "Bijna klaar.", "booking.name": "Naam", "booking.phone": "Telefoon", "booking.email": "E-mail", "booking.namePlaceholder": "Voor- en achternaam", "booking.phonePlaceholder": "+31 / +49 …", "booking.emailPlaceholder": "naam@voorbeeld.nl",
    "booking.note": "Wens of gelegenheid (optioneel)", "booking.notePlaceholder": "Verjaardag, kinderstoel, allergie …",
    "booking.privacy": "Ik ga akkoord met de verwerking van mijn gegevens voor de reserveringsaanvraag.", "booking.submit": "Reservering aanvragen",
    "booking.demo": "Conceptvoorbeeld: dit formulier verstuurt nog geen echte reservering.", "booking.quote": "‘De beste tafel is die waar nog iemand bij kan schuiven.’",
    "booking.modalTitle": "De tafel is genoteerd.", "booking.modalCopy": "In de echte versie zou de aanvraag nu direct bij het restaurant aankomen.", "booking.modalButton": "Begrepen",
    "booking.summaryDate": "Datum", "booking.summaryTime": "Tijd", "booking.summaryGuests": "Gasten", "booking.summaryArea": "Plaats",
    "restaurant.title": "Bij een vriend.<br>Midden in Ochtrup.", "restaurant.note": "Een plek voor pizza, pasta en lange gesprekken.",
    "restaurant.storyLabel": "Ons idee", "restaurant.storyTitle": "Gastvrij zijn, zonder gedoe.",
    "restaurant.storyCopy1": "‘Dal Compare’ betekent ‘bij een vriend’. Daarom draait het niet om stijve regels, maar om eerlijke Italiaanse keuken en een sfeer waarin je graag blijft zitten.",
    "restaurant.storyCopy2": "Van antipasti, steenovenpizza en pasta tot verse vis, vlees en dolce: iedereen vindt zijn favoriet.",
    "restaurant.galleryLabel": "Impressie", "restaurant.galleryQuote": "Goed eten brengt mensen samen.", "restaurant.visitLabel": "Bezoek",
    "restaurant.visitTitle": "Tot aan de Kirchplatz.", "restaurant.visitCopy": "Voor diner, een feest of spontaan een pizza.", "restaurant.route": "Route openen",
    "legal.title": "Juridisch.<br>Helder geserveerd.", "legal.imprint": "Colofon", "legal.privacy": "Privacy", "legal.allergens": "Allergenen",
    "legal.privacyIntro": "Deze conceptsite gebruikt geen analyse-, advertentie- of trackingcookies. Bij een bezoek verwerkt de host technisch noodzakelijke servergegevens, zoals IP-adres, tijdstip, opgevraagde pagina en browserinformatie.",
    "legal.controller": "Verantwoordelijke", "legal.bookingData": "Reserveringsgegevens",
    "legal.bookingCopy": "Het getoonde reserveringsformulier is een concept en verstuurt geen gegevens. Voor publicatie worden verzending, bewaartermijn, ontvangers en rechtsgrond volledig vastgelegd.",
    "legal.externalLinks": "Externe links", "legal.externalCopy": "Instagram, Facebook en Google Maps openen pas na een klik. Daarna gelden de privacyregels van de betreffende aanbieder.",
    "legal.rights": "Uw rechten", "legal.rightsCopy": "Voor zover wettelijk van toepassing hebt u recht op inzage, correctie, verwijdering, beperking, overdraagbaarheid en bezwaar, plus het recht een klacht in te dienen bij een toezichthouder.",
    "legal.allergenCopy": "De digitale kaart vervangt geen persoonlijk allergenenadvies. Meld allergieën of intoleranties vóór uw bestelling aan het team. Prijzen en beschikbaarheid kunnen veranderen.",
    "legal.reviewNote": "Voor overdracht: juridische teksten en exploitantgegevens moeten vóór publicatie door het restaurant worden gecontroleerd en bevestigd.",
    "days.mon": "Ma", "days.tue": "Di", "days.wedFri": "Wo–Vr", "days.sat": "Za", "days.sun": "Zo",
    "footer.weekdays": "Ma, wo–vr 17:00–23:00", "footer.saturday": "Za 12:00–14:30 · 17:00–23:00", "footer.sunday": "Zo 12:00–14:30 · 17:00–22:00", "footer.concept": "Websiteconcept"
  },
  en: {
    "nav.home": "Home", "nav.menu": "Menu", "nav.booking": "Book", "nav.restaurant": "Restaurant", "nav.legal": "Legal",
    "common.reserve": "Book a table", "common.menu": "View menu", "common.ourStory": "Our story", "common.continue": "Continue", "common.back": "Back", "common.skip": "Skip to content",
    "common.address": "Address", "common.hours": "Opening hours", "common.contact": "Contact", "common.closed": "Closed", "footer.closedTuesday": "Closed Tuesdays",
    "home.eyebrow": "Ristorante · Pizzeria · Bar", "home.hero1": "Ciao,", "home.hero2": "Ochtrup.",
    "home.lead": "The good life starts on Kirchplatz: stone-baked pizza, fresh pasta and an evening that is welcome to last.",
    "home.sectionWelcome": "Welcome", "home.welcomeTitle": "A taste of Italy. Right on Kirchplatz.",
    "home.welcomeCopy": "Dal Compare means ‘at a friend’s place’. That is exactly how an evening here feels: relaxed, warm and full of flavour.",
    "home.sectionMenu": "From the menu", "home.favTitle": "The table favourites.", "home.fullMenu": "Explore the full menu",
    "home.dishPizza": "Rocket, Parma ham and Parmesan.", "home.dishPasta": "Courgette, scampi and fresh tomatoes.",
    "home.sectionExperience": "Your evening", "home.aperitivo": "Aperitivo to dolce", "home.experienceTitle": "Come for dinner. Stay for the evening.",
    "home.experienceCopy": "A quick pizza, family dinner or a long cocktail evening: you set the pace.",
    "home.weekendLunch": "Weekend lunch", "home.happyHour": "Cocktail happy hour*", "home.happyNote": "*according to current restaurant information",
    "home.ctaEyebrow": "Plans for tonight?", "home.ctaTitle": "Your table is waiting.",
    "menu.title": "What is coming to the table?", "menu.lead": "Classics, favourites and room for more. Build your table together and keep an eye on the total.",
    "menu.search": "Search dishes …", "menu.myTable": "My table", "menu.tableEyebrow": "Your evening", "menu.tableTitle": "Build your table.",
    "menu.tableIntro": "Save dishes, choose guests and plan together.", "menu.people": "People", "menu.empty": "The table is still empty.",
    "menu.emptyHint": "Add favourites with +.", "menu.total": "Total", "menu.perPerson": "Per person", "menu.reserveThis": "Book this table",
    "menu.note": "Planning aid – not an order. Prices from the published 04/2024 menu; please confirm on site.", "menu.noResults": "No dishes found.",
    "booking.title": "When will we see you?", "booking.lead": "Three quick steps to your Italian evening.", "booking.phoneLabel": "Prefer to call?",
    "booking.locationLabel": "In central Ochtrup", "booking.when": "When", "booking.where": "Where & who", "booking.details": "Details",
    "booking.step1": "Step 1 of 3", "booking.chooseMoment": "Choose your moment.", "booking.time": "Time",
    "booking.step2": "Step 2 of 3", "booking.chooseCompany": "Who is joining you?", "booking.guests": "Number of guests", "booking.area": "Favourite spot",
    "booking.inside": "Inside the restaurant", "booking.insideHint": "Warm, lively, right in it", "booking.outside": "On the terrace", "booking.outsideHint": "Weather permitting",
    "booking.step3": "Step 3 of 3", "booking.almost": "Almost there.", "booking.name": "Name", "booking.phone": "Phone", "booking.email": "Email", "booking.namePlaceholder": "First and last name", "booking.phonePlaceholder": "+49 …", "booking.emailPlaceholder": "name@example.com",
    "booking.note": "Request or occasion (optional)", "booking.notePlaceholder": "Birthday, high chair, allergy …",
    "booking.privacy": "I agree to the processing of my details for this booking request.", "booking.submit": "Request reservation",
    "booking.demo": "Concept preview: this form does not send a real reservation yet.", "booking.quote": "“The best table is one where there is always room for one more.”",
    "booking.modalTitle": "Your table is pencilled in.", "booking.modalCopy": "In the live version, this request would now arrive directly at the restaurant.", "booking.modalButton": "Got it",
    "booking.summaryDate": "Date", "booking.summaryTime": "Time", "booking.summaryGuests": "Guests", "booking.summaryArea": "Area",
    "restaurant.title": "Among friends.<br>In the heart of Ochtrup.", "restaurant.note": "A place for pizza, pasta and long conversations.",
    "restaurant.storyLabel": "Our idea", "restaurant.storyTitle": "Hospitality without the fuss.",
    "restaurant.storyCopy1": "‘Dal Compare’ means ‘at a friend’s place’. So this is not about stiff rules, but honest Italian cooking and an atmosphere that makes you want to stay.",
    "restaurant.storyCopy2": "From antipasti, stone-baked pizza and pasta to fresh fish, meat and dolce: everyone finds a favourite.",
    "restaurant.galleryLabel": "A glimpse", "restaurant.galleryQuote": "Good food brings people together.", "restaurant.visitLabel": "Visit",
    "restaurant.visitTitle": "See you on Kirchplatz.", "restaurant.visitCopy": "For dinner, a celebration or a spontaneous pizza.", "restaurant.route": "Open directions",
    "legal.title": "Legal.<br>Clearly served.", "legal.imprint": "Imprint", "legal.privacy": "Privacy", "legal.allergens": "Allergens",
    "legal.privacyIntro": "This concept site uses no analytics, advertising or tracking cookies. The hosting provider processes technically necessary server data such as IP address, time, requested page and browser information.",
    "legal.controller": "Controller", "legal.bookingData": "Reservation data",
    "legal.bookingCopy": "The reservation form shown here is a concept preview and transmits no data. Before launch, transfer method, retention, recipients and legal basis will be documented.",
    "legal.externalLinks": "External links", "legal.externalCopy": "Instagram, Facebook and Google Maps open only after a click. The respective provider’s privacy policy then applies.",
    "legal.rights": "Your rights", "legal.rightsCopy": "Where the legal requirements apply, you have rights to access, correction, deletion, restriction, portability and objection, plus a right to lodge a complaint with a supervisory authority.",
    "legal.allergenCopy": "The digital menu does not replace personal allergen advice. Please tell the team about allergies or intolerances before ordering. Prices and availability may change.",
    "legal.reviewNote": "Handover note: legal copy and operator details must be reviewed and confirmed by the restaurant before publication.",
    "days.mon": "Mon", "days.tue": "Tue", "days.wedFri": "Wed–Fri", "days.sat": "Sat", "days.sun": "Sun",
    "footer.weekdays": "Mon, Wed–Fri 17:00–23:00", "footer.saturday": "Sat 12:00–14:30 · 17:00–23:00", "footer.sunday": "Sun 12:00–14:30 · 17:00–22:00", "footer.concept": "Website concept"
  }
};

const menuItems = [
  { id: 1, no: "001", cat: "antipasti", name: "Antipasto misto", price: 12.5, desc: { de: "Gemischte Vorspeisen für eine Person.", nl: "Gemengde voorgerechten voor één persoon.", en: "Mixed starters for one person." } },
  { id: 2, no: "002", cat: "antipasti", name: "Carpaccio di Manzo", price: 12.9, desc: { de: "Hauchdünnes Rindfleisch, Rucola und Parmesan.", nl: "Dun gesneden rundvlees, rucola en Parmezaan.", en: "Thinly sliced beef, rocket and Parmesan." } },
  { id: 3, no: "006", cat: "antipasti", name: "Bruschetta Classica", price: 6.5, veg: true, desc: { de: "Vier Scheiben Brot, Knoblauch und frische Tomaten.", nl: "Vier sneetjes brood, knoflook en verse tomaten.", en: "Four slices of bread, garlic and fresh tomatoes." } },
  { id: 4, no: "032", cat: "salate", name: "Insalata Caprese", price: 8.9, veg: true, desc: { de: "Tomaten, Mozzarella und frisches Basilikum.", nl: "Tomaat, mozzarella en verse basilicum.", en: "Tomato, mozzarella and fresh basil." } },
  { id: 5, no: "036", cat: "salate", name: "Insalata Dal Compare", price: 12.9, desc: { de: "Salat, Thunfisch, Ei, Käse und knackiges Gemüse.", nl: "Salade, tonijn, ei, kaas en knapperige groenten.", en: "Salad, tuna, egg, cheese and crisp vegetables." } },
  { id: 6, no: "047", cat: "pasta", name: "Spaghetti aglio olio", price: 8.5, veg: true, spicy: true, desc: { de: "Olivenöl, Knoblauch, Peperoni und frische Tomaten.", nl: "Olijfolie, knoflook, chili en verse tomaten.", en: "Olive oil, garlic, chilli and fresh tomatoes." } },
  { id: 7, no: "050", cat: "pasta", name: "Spaghetti Zafferano", price: 15.9, desc: { de: "Safransahnesauce, Lachs, Scampi und Spinat.", nl: "Saffraanroomsaus, zalm, scampi en spinazie.", en: "Saffron cream, salmon, scampi and spinach." } },
  { id: 8, no: "054", cat: "pasta", name: "Tagliatelle Compare", price: 13.9, desc: { de: "Frische Zucchini, Scampi und Tomaten.", nl: "Verse courgette, scampi en tomaten.", en: "Fresh courgette, scampi and tomatoes." } },
  { id: 9, no: "058", cat: "pasta", name: "Penne Ochtrup", price: 12.5, desc: { de: "Pilze in Gorgonzolasauce, umlegt mit Parmaschinken.", nl: "Paddenstoelen in gorgonzolasaus met parmaham.", en: "Mushrooms in Gorgonzola sauce with Parma ham." } },
  { id: 10, no: "086", cat: "pizza", name: "Margherita", price: 8.5, veg: true, desc: { de: "Tomatensauce, Mozzarella und Oregano.", nl: "Tomatensaus, mozzarella en oregano.", en: "Tomato sauce, mozzarella and oregano." } },
  { id: 11, no: "095", cat: "pizza", name: "Profumata", price: 13.5, desc: { de: "Rucola, Parmaschinken und Parmesan.", nl: "Rucola, parmaham en Parmezaan.", en: "Rocket, Parma ham and Parmesan." } },
  { id: 12, no: "099", cat: "pizza", name: "Dal Compare", price: 12.9, desc: { de: "Salami, Schinken und Thunfisch.", nl: "Salami, ham en tonijn.", en: "Salami, ham and tuna." } },
  { id: 13, no: "102", cat: "pizza", name: "Vegetariana", price: 12.5, veg: true, desc: { de: "Mit verschiedenem saisonalen Gemüse.", nl: "Met verschillende seizoensgroenten.", en: "With assorted seasonal vegetables." } },
  { id: 14, no: "200", cat: "pizza", name: "Bianco Verde fresco", price: 13.9, desc: { de: "Weiße Pizza mit Pesto, Scampi und Parmesan.", nl: "Witte pizza met pesto, scampi en Parmezaan.", en: "White pizza with pesto, scampi and Parmesan." } },
  { id: 15, no: "119", cat: "pesce", name: "Salmone speciale", price: 26.9, desc: { de: "Lachs, Tomaten-Hummerbuttersauce und Scampi.", nl: "Zalm, tomaat-kreeftenbotersaus en scampi.", en: "Salmon, tomato lobster-butter sauce and scampi." } },
  { id: 16, no: "122", cat: "pesce", name: "Pesce sorpresa", price: 29.9, desc: { de: "Gemischte Fischplatte mit Gemüse und Salat.", nl: "Gemengde visschotel met groenten en salade.", en: "Mixed fish platter with vegetables and salad." } },
  { id: 17, no: "132", cat: "carne", name: "Filetto alla Griglia", price: 28.5, desc: { de: "Gegrilltes Rinderfilet, Gemüsemix und Salat.", nl: "Gegrilde runderfilet, groenten en salade.", en: "Grilled beef fillet, vegetables and salad." } },
  { id: 18, no: "133", cat: "carne", name: "Filetto al Balsamico", price: 31.9, desc: { de: "Rinderfilet mit Balsamicosauce.", nl: "Runderfilet met balsamicosaus.", en: "Beef fillet with balsamic sauce." } },
  { id: 19, no: "161", cat: "dolce", name: "Tartufo Nero", price: 5.9, veg: true, desc: { de: "Schokoladeneis mit einem Herzen von Zabaione.", nl: "Chocolade-ijs met een hart van zabaione.", en: "Chocolate ice cream with a zabaglione centre." } },
  { id: 20, no: "163", cat: "dolce", name: "Tiramisu", price: 5.9, veg: true, desc: { de: "Löffelbiskuit, Kaffee, Mascarpone und Kakao.", nl: "Lange vingers, koffie, mascarpone en cacao.", en: "Ladyfingers, coffee, mascarpone and cocoa." } }
];

const categoryData = [
  ["all", "✦", { de: "Alle", nl: "Alles", en: "All" }],
  ["antipasti", "◌", { de: "Antipasti", nl: "Antipasti", en: "Antipasti" }],
  ["salate", "❧", { de: "Salate", nl: "Salades", en: "Salads" }],
  ["pasta", "≈", { de: "Pasta", nl: "Pasta", en: "Pasta" }],
  ["pizza", "◯", { de: "Pizza", nl: "Pizza", en: "Pizza" }],
  ["pesce", "⌁", { de: "Fisch", nl: "Vis", en: "Fish" }],
  ["carne", "♨", { de: "Fleisch", nl: "Vlees", en: "Meat" }],
  ["dolce", "◇", { de: "Dolce", nl: "Dolce", en: "Dolce" }]
];

let lang = localStorage.getItem("dal-language") || "de";
if (!translations[lang]) lang = "de";

function t(key) {
  return translations[lang][key] || translations.de[key] || key;
}

function icon(name) {
  const icons = {
    home: '<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M7 3v18M4 3v6c0 2 6 2 6 0V3M17 3v18M17 3c3 2 3 7 0 9"/></svg>',
    booking: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
    restaurant: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></svg>',
    legal: '<svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>'
  };
  return icons[name] || "";
}

function mountChrome() {
  const page = document.body.dataset.page;
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");
  const links = [
    ["home", "/", "nav.home"], ["menu", "/speisekarte", "nav.menu"], ["booking", "/reservieren", "nav.booking"], ["restaurant", "/restaurant", "nav.restaurant"]
  ];
  header.innerHTML = `
    <header class="site-header">
      <div class="nav-bar">
        <a class="brand" href="/" aria-label="${BRAND_NAME} Startseite" data-brand-static translate="no">
          <span class="brand-mark" aria-hidden="true">
            <img class="brand-mark__base" src="/assets/images/brand-original.png" alt="">
            <img class="brand-mark__color" src="/assets/images/brand-original.png" alt="">
          </span>
          <span class="sr-only">${BRAND_NAME}</span>
        </a>
        <nav class="desktop-nav" aria-label="Hauptnavigation">
          ${links.map(([id,url,key]) => `<a class="${page === id ? "is-active" : ""}" href="${url}" data-i18n="${key}">${t(key)}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <div class="lang-switch" aria-label="Sprache">
            ${["de","nl","en"].map(code => `<button type="button" class="${lang === code ? "is-active" : ""}" data-lang="${code}" aria-label="${code.toUpperCase()}">${code.toUpperCase()}</button>`).join("")}
          </div>
          <a class="button nav-reserve" href="/reservieren"><span data-i18n="common.reserve">${t("common.reserve")}</span><span>↗</span></a>
          <button class="menu-button" type="button" aria-label="Menü öffnen" aria-expanded="false"><span></span></button>
        </div>
      </div>
    </header>
    <div class="mobile-drawer" aria-hidden="true">
      <nav class="mobile-links" aria-label="Mobile Navigation">
        ${links.concat([["legal","/rechtliches","nav.legal"]]).map(([id,url,key],index) => `<a href="${url}"><b>0${index+1}</b><span data-i18n="${key}">${t(key)}</span><i>${icon(id)}</i></a>`).join("")}
      </nav>
      <div class="mobile-drawer__foot"><a href="tel:+4925537201040">02553 720 1040</a><a href="https://www.instagram.com/dal_compare/" target="_blank" rel="noopener">Instagram ↗</a></div>
    </div>`;
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-brand" data-brand-static translate="no">
          <span class="brand-mark brand-mark--footer" aria-hidden="true">
            <img class="brand-mark__base" src="/assets/images/brand-original.png" alt="">
            <img class="brand-mark__color" src="/assets/images/brand-original.png" alt="">
          </span>
          <strong class="sr-only">${BRAND_NAME}</strong>
          <span>Beim Freund · Ochtrup</span>
        </div>
        <div class="footer-col"><h3 data-i18n="common.contact">${t("common.contact")}</h3><a href="tel:+4925537201040">02553 720 1040</a><a href="mailto:info@dalcompare.de">info@dalcompare.de</a><a href="https://www.instagram.com/dal_compare/" target="_blank" rel="noopener">Instagram ↗</a></div>
        <div class="footer-col"><h3 data-i18n="common.hours">${t("common.hours")}</h3><p data-i18n="footer.weekdays">${t("footer.weekdays")}</p><p data-i18n="footer.saturday">${t("footer.saturday")}</p><p data-i18n="footer.sunday">${t("footer.sunday")}</p><p data-i18n="footer.closedTuesday">${t("footer.closedTuesday")}</p></div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} Dal Compare · Kirchplatz 1 · 48607 Ochtrup</span><div><a href="/rechtliches" data-i18n="nav.legal">${t("nav.legal")}</a><span class="concept-pill" data-i18n="footer.concept">${t("footer.concept")}</span></div></div>
    </footer>`;
}

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = t(el.dataset.i18n);
    if (value) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const value = t(el.dataset.i18nPlaceholder);
    if (value) el.placeholder = value;
  });
  document.querySelectorAll("[data-lang]").forEach(button => button.classList.toggle("is-active", button.dataset.lang === lang));
  document.querySelectorAll("[data-brand-static]").forEach(brand => {
    brand.setAttribute("translate", "no");
    if (brand.matches("a")) brand.setAttribute("aria-label", `${BRAND_NAME} Startseite`);
  });
  updateOpenLabel();
  if (document.body.dataset.page === "menu") renderMenu();
  if (document.body.dataset.page === "booking") {
    renderDates();
    renderBookingSummary();
  }
}

function setupChrome() {
  const menuButton = document.querySelector(".menu-button");
  const drawer = document.querySelector(".mobile-drawer");
  menuButton.addEventListener("click", () => {
    const open = drawer.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("is-locked", open);
  });
  document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => {
    lang = button.dataset.lang;
    localStorage.setItem("dal-language", lang);
    applyLanguage();
  }));
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 35);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });
}

function setupReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach(node => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });
  nodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    observer.observe(node);
  });
}

function updateOpenLabel() {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const ranges = day === 0 ? [[720,870],[1020,1320]] : day === 6 ? [[720,870],[1020,1380]] : day === 2 ? [] : [[1020,1380]];
  const isOpen = ranges.some(([start,end]) => minutes >= start && minutes < end);
  const labels = {
    de: isOpen ? "Jetzt geöffnet" : "Heute reservieren",
    nl: isOpen ? "Nu geopend" : "Reserveer vandaag",
    en: isOpen ? "Open now" : "Book for today"
  };
  document.querySelectorAll("[data-open-label]").forEach(el => el.textContent = labels[lang]);
}

let activeCategory = "all";
let menuQuery = "";
let cart = JSON.parse(localStorage.getItem("dal-table") || "{}");
let people = Math.max(1, Math.min(12, Number(localStorage.getItem("dal-people") || 2)));

function euro(value) {
  return new Intl.NumberFormat(lang === "en" ? "en-GB" : lang, { style: "currency", currency: "EUR" }).format(value);
}

function renderMenu() {
  const categoryRoot = document.querySelector("#menu-categories");
  const list = document.querySelector("#menu-list");
  if (!categoryRoot || !list) return;
  categoryRoot.innerHTML = categoryData.map(([id,symbol,label]) => `<button class="category-button ${activeCategory === id ? "is-active" : ""}" type="button" data-category="${id}"><span>${symbol}</span><span>${label[lang]}</span></button>`).join("");
  const filtered = menuItems.filter(item => {
    const categoryMatch = activeCategory === "all" || item.cat === activeCategory;
    const haystack = `${item.name} ${item.desc[lang]} ${item.desc.de}`.toLowerCase();
    return categoryMatch && haystack.includes(menuQuery.toLowerCase());
  });
  list.innerHTML = filtered.length ? filtered.map(item => `
    <article class="menu-item">
      <div class="menu-item__number">N° ${item.no}${item.veg ? " · V" : ""}${item.spicy ? " · 🌶" : ""}</div>
      <div class="menu-item__top"><h3>${item.name}</h3><strong class="menu-item__price">${euro(item.price)}</strong></div>
      <p>${item.desc[lang]}</p>
      <button class="menu-item__add ${cart[item.id] ? "is-added" : ""}" type="button" data-add-item="${item.id}" aria-label="${item.name} hinzufügen">${cart[item.id] ? "✓" : "+"}</button>
    </article>`).join("") : `<div class="menu-no-results">${t("menu.noResults")}</div>`;
  categoryRoot.querySelectorAll("[data-category]").forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    renderMenu();
  }));
  list.querySelectorAll("[data-add-item]").forEach(button => button.addEventListener("click", () => {
    const id = Number(button.dataset.addItem);
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    renderMenu();
    renderCart();
    const builder = document.querySelector("#table-builder");
    if (innerWidth > 1100) builder.animate([{ transform: "translateY(0)" }, { transform: "translateY(-6px)" }, { transform: "translateY(0)" }], { duration: 280 });
  }));
  renderCart();
}

function saveCart() {
  localStorage.setItem("dal-table", JSON.stringify(cart));
  localStorage.setItem("dal-people", String(people));
}

function renderCart() {
  const root = document.querySelector("[data-cart-items]");
  if (!root) return;
  const entries = Object.entries(cart).filter(([,qty]) => qty > 0);
  const total = entries.reduce((sum,[id,qty]) => sum + menuItems.find(item => item.id === Number(id)).price * qty, 0);
  root.innerHTML = entries.map(([id,qty]) => {
    const item = menuItems.find(entry => entry.id === Number(id));
    return `<div class="cart-row"><div><h4>${item.name}</h4><small>${euro(item.price * qty)}</small></div><div class="cart-row__controls"><button type="button" data-cart-minus="${id}" aria-label="Weniger">−</button><b>${qty}</b><button type="button" data-cart-plus="${id}" aria-label="Mehr">+</button></div></div>`;
  }).join("");
  document.querySelector("[data-cart-empty]").hidden = entries.length > 0;
  document.querySelector("[data-cart-count]").textContent = entries.reduce((sum,[,qty]) => sum + qty, 0);
  document.querySelector("[data-cart-total]").textContent = euro(total);
  document.querySelector("[data-per-person]").textContent = euro(total / people);
  document.querySelector("[data-people]").textContent = people;
  root.querySelectorAll("[data-cart-minus]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.cartMinus;
    cart[id] -= 1;
    if (cart[id] <= 0) delete cart[id];
    saveCart(); renderCart(); renderMenu();
  }));
  root.querySelectorAll("[data-cart-plus]").forEach(button => button.addEventListener("click", () => {
    cart[button.dataset.cartPlus] += 1; saveCart(); renderCart(); renderMenu();
  }));
}

function setupMenu() {
  const search = document.querySelector("#menu-search");
  if (!search) return;
  search.addEventListener("input", () => { menuQuery = search.value; renderMenu(); });
  const builder = document.querySelector("#table-builder");
  document.querySelector("[data-table-toggle]").addEventListener("click", () => {
    builder.classList.add("is-open"); document.body.classList.add("is-locked");
  });
  document.querySelector("[data-table-close]").addEventListener("click", () => {
    builder.classList.remove("is-open"); document.body.classList.remove("is-locked");
  });
  document.querySelector("[data-people-minus]").addEventListener("click", () => { people = Math.max(1,people-1); saveCart(); renderCart(); });
  document.querySelector("[data-people-plus]").addEventListener("click", () => { people = Math.min(12,people+1); saveCart(); renderCart(); });
  renderMenu();
}

const booking = {
  date: null,
  time: "18:30",
  guests: Math.max(1, Math.min(12, people || 2))
};

function dateOptions() {
  const dates = [];
  const cursor = new Date();
  cursor.setHours(12,0,0,0);
  while (dates.length < 12) {
    if (cursor.getDay() !== 2) dates.push(new Date(cursor));
    cursor.setDate(cursor.getDate()+1);
  }
  return dates;
}

function renderDates() {
  const root = document.querySelector("#date-strip");
  if (!root) return;
  const dates = dateOptions();
  if (!booking.date) booking.date = dates[0].toISOString().slice(0,10);
  root.innerHTML = dates.slice(0,7).map(date => {
    const iso = date.toISOString().slice(0,10);
    const weekday = new Intl.DateTimeFormat(lang, { weekday:"short" }).format(date);
    const month = new Intl.DateTimeFormat(lang, { month:"short" }).format(date);
    return `<button type="button" class="date-card ${booking.date === iso ? "is-active" : ""}" data-date="${iso}"><small>${weekday}</small><strong>${date.getDate()}</strong><small>${month}</small></button>`;
  }).join("");
  root.querySelectorAll("[data-date]").forEach(button => button.addEventListener("click", () => {
    booking.date = button.dataset.date;
    renderDates();
    renderTimes();
  }));
  renderTimes();
}

function renderTimes() {
  const root = document.querySelector("#time-grid");
  if (!root) return;
  const day = new Date(`${booking.date}T12:00:00`).getDay();
  const times = [0,6].includes(day) ? ["12:00","12:30","13:00","13:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30"] : ["17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"];
  if (!times.includes(booking.time)) booking.time = times.includes("18:30") ? "18:30" : times[0];
  root.innerHTML = times.map(time => `<button type="button" class="time-chip ${booking.time === time ? "is-active" : ""}" data-time="${time}">${time}</button>`).join("");
  root.querySelectorAll("[data-time]").forEach(button => button.addEventListener("click", () => {
    booking.time = button.dataset.time;
    renderTimes();
  }));
}

function setBookingStep(step) {
  document.querySelectorAll("[data-booking-step]").forEach(section => section.classList.toggle("is-active", Number(section.dataset.bookingStep) === step));
  document.querySelectorAll("[data-booking-tab]").forEach(button => {
    const value = Number(button.dataset.bookingTab);
    button.classList.toggle("is-active", value === step);
    button.classList.toggle("is-done", value < step);
  });
  if (step === 3) renderBookingSummary();
  document.querySelector(".booking-shell").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderGuests() {
  const count = document.querySelector("[data-guest-count]");
  const icons = document.querySelector("[data-guest-icons]");
  if (!count) return;
  count.textContent = booking.guests;
  icons.innerHTML = Array.from({ length: Math.min(booking.guests,8) }, () => "<span>●</span>").join("") + (booking.guests > 8 ? `<small> +${booking.guests-8}</small>` : "");
}

function renderBookingSummary() {
  const root = document.querySelector("[data-booking-summary]");
  if (!root || !booking.date) return;
  const date = new Intl.DateTimeFormat(lang, { weekday:"short", day:"2-digit", month:"short" }).format(new Date(`${booking.date}T12:00:00`));
  const areaValue = document.querySelector('input[name="area"]:checked')?.value || "restaurant";
  const area = areaValue === "terrace" ? t("booking.outside") : t("booking.inside");
  root.innerHTML = `
    <div><span>${t("booking.summaryDate")}</span><strong>${date}</strong></div>
    <div><span>${t("booking.summaryTime")}</span><strong>${booking.time}</strong></div>
    <div><span>${t("booking.summaryGuests")}</span><strong>${booking.guests}</strong></div>
    <div><span>${t("booking.summaryArea")}</span><strong>${area}</strong></div>`;
}

function setupBooking() {
  if (!document.querySelector("#booking-form")) return;
  renderDates();
  renderGuests();
  document.querySelectorAll("[data-next-step]").forEach(button => button.addEventListener("click", () => setBookingStep(Number(button.dataset.nextStep))));
  document.querySelectorAll("[data-prev-step]").forEach(button => button.addEventListener("click", () => setBookingStep(Number(button.dataset.prevStep))));
  document.querySelectorAll("[data-booking-tab]").forEach(button => button.addEventListener("click", () => setBookingStep(Number(button.dataset.bookingTab))));
  document.querySelector("[data-guest-minus]").addEventListener("click", () => { booking.guests = Math.max(1,booking.guests-1); renderGuests(); });
  document.querySelector("[data-guest-plus]").addEventListener("click", () => { booking.guests = Math.min(12,booking.guests+1); renderGuests(); });
  document.querySelectorAll('input[name="area"]').forEach(input => input.addEventListener("change", renderBookingSummary));
  const modal = document.querySelector("#booking-modal");
  document.querySelector("#booking-form").addEventListener("submit", event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden","false");
    document.body.classList.add("is-locked");
  });
  document.querySelectorAll("[data-modal-close]").forEach(button => button.addEventListener("click", () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden","true");
    document.body.classList.remove("is-locked");
  }));
}

mountChrome();
setupChrome();
applyLanguage();
setupReveal();
setupMenu();
setupBooking();
