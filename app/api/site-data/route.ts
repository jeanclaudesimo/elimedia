import { NextResponse } from 'next/server';
import type { SiteData } from '@/types';

// ==========================================
// Elimedia Website - Complete Site Data
// ==========================================
// Diese Daten können später durch eine echte API/CMS ersetzt werden.
// Alle Texte, Bilder und Konfigurationen sind hier zentralisiert.

const siteData: SiteData = {
  // ==========================================
  // META INFORMATION
  // ==========================================
  meta: {
    siteName: 'Elimedia',
    slogan: 'Qualität verbindet – von der Bohne bis zur Lieferung',
    description: 'Elimedia ist Ihr zuverlässiger Partner für hochwertigen Kakaohandel und professionelle Transportdienstleistungen. Wir verbinden Qualität mit Zuverlässigkeit.',
    keywords: ['Kakaobohnen', 'Kakaohandel', 'Transport', 'Logistik', 'Lebensmittelhandel', 'Köln', 'B2B', 'Premium Kakao'],
    foundingDate: '2025-06-30',
  },

  // ==========================================
  // CONTACT & ADDRESS
  // ==========================================
  contact: {
    company: 'Elimedia',
    street: 'Josef-Wirth-Str. 10',
    city: '51067 Köln-Holweide',
    country: 'Deutschland',
    phone: '+49 (0)221 0000000', // Platzhalter
    email: 'info@elimedia.de', // Platzhalter
    openingHours: 'Mo–Fr: 08:00–18:00 Uhr',
  },

  // ==========================================
  // NAVIGATION
  // ==========================================
  navigation: [
    { id: 'home', label: 'Startseite', href: '/' },
    { id: 'about', label: 'Über uns', href: '/ueber-uns' },
    { id: 'services', label: 'Leistungen', href: '/leistungen' },
    { id: 'transport', label: 'Transport', href: '/transport' },
    { id: 'contact', label: 'Kontakt', href: '/kontakt', isButton: true },
  ],

  // ==========================================
  // SOCIAL MEDIA (Platzhalter für spätere Ergänzung)
  // ==========================================
  socialLinks: [
    // Später hier Links einfügen:
    // { id: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com/company/elimedia', icon: 'linkedin' },
    // { id: 'instagram', platform: 'Instagram', url: 'https://instagram.com/elimedia', icon: 'instagram' },
    // { id: 'facebook', platform: 'Facebook', url: 'https://facebook.com/elimedia', icon: 'facebook' },
  ],

  // ==========================================
  // PAGE CONTENT
  // ==========================================
  pages: {
    // ----------------------------------------
    // HOME PAGE
    // ----------------------------------------
    home: {
      hero: {
        title: 'Elimedia',
        subtitle: 'Ihr Partner für Premium-Kakao und zuverlässige Transporte',
        description: 'Wir verbinden erstklassigen Kakaohandel mit professioneller Logistik. Vertrauen Sie auf Qualität, Zuverlässigkeit und langjährige Expertise im Lebensmittelhandel.',
        primaryCta: {
          text: 'Jetzt anfragen',
          href: '/kontakt',
        },
        secondaryCta: {
          text: 'Mehr über Elimedia',
          href: '/ueber-uns',
        },
        backgroundImage: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1920&q=80',
      },
      introduction: {
        id: 'intro',
        title: 'Willkommen bei Elimedia',
        subtitle: 'Qualität und Zuverlässigkeit aus einer Hand',
        description: 'Elimedia vereint zwei Kernkompetenzen unter einem Dach: Den Handel mit hochwertigen Kakaobohnen und professionelle Transportdienstleistungen. Seit unserer Gründung am 30. Juni 2025 setzen wir auf Qualität, Transparenz und partnerschaftliche Zusammenarbeit – sowohl mit Geschäftskunden als auch mit Privatpersonen.',
        imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80',
        imagePosition: 'right',
      },
      services: {
        id: 'services-overview',
        title: 'Unsere Leistungen',
        subtitle: 'Was wir für Sie tun können',
        items: [
          {
            id: 'cocoa',
            icon: 'cocoa',
            title: 'Premium Kakaobohnen',
            description: 'Hochwertige Kakaobohnen aus ausgewählten Anbaugebieten. Für Röstereien, Hersteller und Genussmanufakturen.',
            imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&q=80',
            linkText: 'Mehr erfahren',
            linkHref: '/leistungen#kakao',
          },
          {
            id: 'transport',
            icon: 'truck',
            title: 'Transport & Logistik',
            description: 'Zuverlässige Transportlösungen für Ihre Waren. Regional, national und international.',
            imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
            linkText: 'Mehr erfahren',
            linkHref: '/transport',
          },
          {
            id: 'b2b',
            icon: 'handshake',
            title: 'B2B Partnerschaften',
            description: 'Individuelle Lösungen für Geschäftskunden. Von der Einzellieferung bis zum langfristigen Rahmenvertrag.',
            imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
            linkText: 'Kontaktieren Sie uns',
            linkHref: '/kontakt',
          },
        ],
      },
      whyElimedia: {
        id: 'why-elimedia',
        title: 'Warum Elimedia?',
        subtitle: 'Unsere Werte machen den Unterschied',
        backgroundColor: 'light',
        items: [
          {
            id: 'quality',
            icon: 'star',
            title: 'Premium-Qualität',
            description: 'Wir handeln ausschließlich mit hochwertigen Kakaobohnen aus kontrolliertem Anbau. Jede Charge wird sorgfältig geprüft.',
          },
          {
            id: 'reliability',
            icon: 'shield',
            title: 'Zuverlässigkeit',
            description: 'Termintreue und Verlässlichkeit sind für uns keine Worthülsen, sondern gelebte Praxis bei jedem Auftrag.',
          },
          {
            id: 'transparency',
            icon: 'eye',
            title: 'Transparenz',
            description: 'Vom Ursprung bis zur Lieferung: Bei uns wissen Sie immer, woher Ihre Ware kommt und wo sie sich befindet.',
          },
          {
            id: 'sustainability',
            icon: 'leaf',
            title: 'Nachhaltigkeit',
            description: 'Verantwortungsvoller Handel bedeutet für uns: faire Bedingungen für alle Beteiligten und Schutz der Umwelt.',
          },
        ],
      },
      cta: {
        id: 'cta-section',
        title: 'Bereit für eine Zusammenarbeit?',
        subtitle: 'Kontaktieren Sie uns noch heute',
        description: 'Ob Sie hochwertige Kakaobohnen suchen oder eine zuverlässige Transportlösung benötigen – wir sind für Sie da. Fordern Sie jetzt ein unverbindliches Angebot an.',
        backgroundColor: 'primary',
      },
    },

    // ----------------------------------------
    // ABOUT PAGE
    // ----------------------------------------
    about: {
      hero: {
        title: 'Über Elimedia',
        subtitle: 'Lernen Sie uns kennen',
        backgroundImage: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1920&q=80',
      },
      story: {
        id: 'our-story',
        title: 'Unsere Geschichte',
        subtitle: 'Aus Leidenschaft für Qualität',
        description: 'Elimedia wurde am 30. Juni 2025 in Köln-Holweide gegründet – mit einer klaren Vision: Erstklassigen Kakaohandel und zuverlässige Transportdienstleistungen aus einer Hand anzubieten.\n\nUnser Gründungsteam bringt umfassende Erfahrung im Lebensmittelhandel und in der Logistikbranche mit. Diese Expertise nutzen wir, um unseren Kunden einen Service zu bieten, der höchsten Ansprüchen gerecht wird.\n\nAls junges Unternehmen sind wir agil, kundenorientiert und stets offen für neue Partnerschaften. Wir glauben daran, dass Qualität und Zuverlässigkeit die Grundlage jeder erfolgreichen Geschäftsbeziehung sind.',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        imagePosition: 'right',
      },
      values: {
        id: 'our-values',
        title: 'Unsere Werte',
        subtitle: 'Wofür wir stehen',
        backgroundColor: 'light',
        items: [
          {
            id: 'quality-value',
            icon: 'medal',
            title: 'Qualität',
            description: 'Kompromisslose Qualität bei Produkten und Dienstleistungen ist unser oberstes Gebot. Wir geben uns nur mit dem Besten zufrieden.',
          },
          {
            id: 'trust-value',
            icon: 'handshake',
            title: 'Vertrauen',
            description: 'Vertrauen ist die Basis jeder Partnerschaft. Wir halten, was wir versprechen – bei jedem Auftrag, zu jeder Zeit.',
          },
          {
            id: 'transparency-value',
            icon: 'search',
            title: 'Transparenz',
            description: 'Offene Kommunikation und nachvollziehbare Prozesse. Bei uns wissen Sie immer, woran Sie sind.',
          },
          {
            id: 'sustainability-value',
            icon: 'globe',
            title: 'Nachhaltigkeit',
            description: 'Wir denken langfristig und handeln verantwortungsvoll – gegenüber unseren Partnern, der Gesellschaft und der Umwelt.',
          },
        ],
      },
      team: {
        id: 'our-team',
        title: 'Unser Team',
        subtitle: 'Menschen, die bewegen',
        description: 'Hinter Elimedia steht ein engagiertes Team mit Leidenschaft für Qualität und Service. Von der Beschaffung über die Logistik bis zum Kundenservice – wir arbeiten Hand in Hand, um Ihnen den besten Service zu bieten.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        imagePosition: 'left',
      },
      quality: {
        id: 'quality-focus',
        title: 'Qualität als Versprechen',
        subtitle: 'Unser Anspruch an uns selbst',
        description: 'Bei Elimedia ist Qualität kein Zufall, sondern das Ergebnis konsequenter Arbeit. Jede Kakaobohne, die wir handeln, wird auf Herkunft, Anbaumethoden und Geschmacksprofil geprüft. Jeder Transport wird sorgfältig geplant und überwacht.\n\nWir arbeiten nur mit Lieferanten zusammen, die unsere hohen Standards teilen. Und wir investieren kontinuierlich in die Weiterbildung unseres Teams, um Ihnen stets den besten Service zu bieten.',
        imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
        imagePosition: 'right',
        backgroundColor: 'light',
      },
    },

    // ----------------------------------------
    // SERVICES PAGE
    // ----------------------------------------
    services: {
      hero: {
        title: 'Unsere Leistungen',
        subtitle: 'Premium-Kakao und professionelle Transportlösungen',
        backgroundImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80',
      },
      cocoa: {
        id: 'cocoa-section',
        title: 'Premium Kakaobohnen',
        subtitle: 'Qualität, die man schmeckt',
        description: 'Unsere Kakaobohnen stammen aus sorgfältig ausgewählten Anbaugebieten weltweit. Wir legen größten Wert auf Qualität, nachhaltige Anbaumethoden und faire Handelsbedingungen.\n\nOb Sie eine Rösterei betreiben, Schokolade herstellen oder eine Manufaktur führen – wir liefern Ihnen die Rohstoffe, die Ihre Produkte besonders machen.',
        imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80',
        imagePosition: 'left',
        items: [
          {
            id: 'cocoa-origin',
            icon: 'map',
            title: 'Ausgewählte Herkunft',
            description: 'Kakaobohnen aus den besten Anbauregionen Westafrikas, Südamerikas und Asiens.',
          },
          {
            id: 'cocoa-quality',
            icon: 'check',
            title: 'Geprüfte Qualität',
            description: 'Jede Charge wird auf Reinheit, Feuchtigkeit und Geschmacksprofil getestet.',
          },
          {
            id: 'cocoa-variety',
            icon: 'layers',
            title: 'Vielfältige Sorten',
            description: 'Criollo, Forastero, Trinitario – wir bieten die passende Sorte für Ihr Produkt.',
          },
          {
            id: 'cocoa-quantity',
            icon: 'package',
            title: 'Flexible Mengen',
            description: 'Von der Kleinstmenge bis zur Containerladung – wir liefern, was Sie brauchen.',
          },
        ],
      },
      transport: {
        id: 'transport-section',
        title: 'Transport & Logistik',
        subtitle: 'Zuverlässig von A nach B',
        description: 'Unser Transportservice ist auf die besonderen Anforderungen des Lebensmittelhandels ausgerichtet. Wir gewährleisten sichere, pünktliche und temperaturgeführte Transporte – regional, national und international.\n\nMit unserem erfahrenen Logistikteam planen wir jeden Transport individuell und sorgen dafür, dass Ihre Waren sicher und termingerecht ankommen.',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
        imagePosition: 'right',
        items: [
          {
            id: 'transport-temp',
            icon: 'thermometer',
            title: 'Temperaturgeführt',
            description: 'Klimatisierte Transporte für empfindliche Lebensmittel.',
          },
          {
            id: 'transport-tracking',
            icon: 'location',
            title: 'Sendungsverfolgung',
            description: 'Echtzeit-Tracking für volle Transparenz während des Transports.',
          },
          {
            id: 'transport-flex',
            icon: 'refresh',
            title: 'Flexibel',
            description: 'Expresssendungen, Teilladungen oder komplette Container – wir passen uns an.',
          },
          {
            id: 'transport-safe',
            icon: 'shield',
            title: 'Sicher',
            description: 'Versicherte Transporte und geschultes Personal für maximale Sicherheit.',
          },
        ],
      },
      additionalServices: {
        id: 'additional-services',
        title: 'Weitere Leistungen',
        subtitle: 'Rundum-Service für unsere Kunden',
        backgroundColor: 'light',
        items: [
          {
            id: 'consulting',
            icon: 'message',
            title: 'Beratung',
            description: 'Individuelle Beratung zu Kakao-Sorten, Mengen und Lieferoptionen.',
          },
          {
            id: 'storage',
            icon: 'warehouse',
            title: 'Lagerung',
            description: 'Fachgerechte Zwischenlagerung unter optimalen Bedingungen.',
          },
          {
            id: 'sampling',
            icon: 'beaker',
            title: 'Muster',
            description: 'Kostenlose Muster unserer Kakaobohnen für Ihre Produktentwicklung.',
          },
          {
            id: 'documentation',
            icon: 'document',
            title: 'Dokumentation',
            description: 'Vollständige Herkunftsnachweise und Qualitätszertifikate.',
          },
        ],
      },
    },

    // ----------------------------------------
    // TRANSPORT PAGE
    // ----------------------------------------
    transport: {
      hero: {
        title: 'Transport & Logistik',
        subtitle: 'Professionelle Transportlösungen für Ihre Waren',
        backgroundImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80',
      },
      overview: {
        id: 'transport-overview',
        title: 'Unsere Transportleistungen',
        subtitle: 'Maßgeschneidert für Ihre Anforderungen',
        description: 'Bei Elimedia verstehen wir, dass zuverlässiger Transport das Rückgrat jeder erfolgreichen Lieferkette ist. Unser erfahrenes Logistikteam plant und koordiniert jeden Transport mit größter Sorgfalt.\n\nVon regionalen Lieferungen bis hin zu internationalen Transporten – wir bieten Ihnen die passende Lösung. Dabei achten wir stets auf Termintreue, Sicherheit und kosteneffiziente Routenplanung.',
        imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
        imagePosition: 'right',
      },
      process: {
        title: 'So läuft Ihr Auftrag ab',
        subtitle: 'Transparente Prozesse von Anfang bis Ende',
        steps: [
          {
            id: 'step-1',
            step: 1,
            title: 'Anfrage & Beratung',
            description: 'Sie kontaktieren uns mit Ihren Anforderungen. Wir beraten Sie zu den besten Transport­optionen und erstellen ein individuelles Angebot.',
            icon: 'phone',
          },
          {
            id: 'step-2',
            step: 2,
            title: 'Planung & Koordination',
            description: 'Nach Auftrags­bestätigung planen wir Route, Zeitplan und Ressourcen. Sie erhalten alle Details zur Sendung.',
            icon: 'calendar',
          },
          {
            id: 'step-3',
            step: 3,
            title: 'Abholung',
            description: 'Unsere Fahrer holen Ihre Waren zum vereinbarten Termin ab. Bei Bedarf mit spezieller Verpackung oder Temperaturführung.',
            icon: 'truck',
          },
          {
            id: 'step-4',
            step: 4,
            title: 'Transport & Tracking',
            description: 'Während des gesamten Transports können Sie Ihre Sendung verfolgen. Bei Fragen steht Ihnen unser Team jederzeit zur Verfügung.',
            icon: 'location',
          },
          {
            id: 'step-5',
            step: 5,
            title: 'Zustellung',
            description: 'Ihre Waren werden pünktlich und unbeschädigt am Zielort zugestellt. Sie erhalten eine Zustellbestätigung.',
            icon: 'check',
          },
        ],
      },
      features: {
        id: 'transport-features',
        title: 'Unsere Stärken',
        subtitle: 'Was uns auszeichnet',
        backgroundColor: 'light',
        items: [
          {
            id: 'feature-time',
            icon: 'clock',
            title: 'Termintreue',
            description: 'Pünktlichkeit ist für uns selbstverständlich. Wir halten unsere Zusagen – immer.',
          },
          {
            id: 'feature-security',
            icon: 'lock',
            title: 'Sicherheit',
            description: 'Moderne Fahrzeuge, geschultes Personal und lückenlose Dokumentation.',
          },
          {
            id: 'feature-trace',
            icon: 'search',
            title: 'Rückverfolgbarkeit',
            description: 'Jederzeit wissen, wo sich Ihre Sendung befindet. Volle Transparenz.',
          },
          {
            id: 'feature-individual',
            icon: 'settings',
            title: 'Individualität',
            description: 'Keine Lösung von der Stange. Wir passen uns Ihren Anforderungen an.',
          },
        ],
      },
      regions: {
        id: 'regions',
        title: 'Unsere Reichweite',
        subtitle: 'Wir liefern, wohin Sie es brauchen',
        description: 'Ob Nahverkehr im Großraum Köln, deutschlandweite Lieferungen oder internationale Transporte nach ganz Europa – Elimedia ist Ihr Partner für zuverlässige Logistik.\n\nUnsere Kernregionen umfassen das gesamte Bundesgebiet mit Schwerpunkt Nordrhein-Westfalen sowie die wichtigsten europäischen Wirtschaftszentren.',
        imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
        imagePosition: 'left',
      },
    },

    // ----------------------------------------
    // CONTACT PAGE
    // ----------------------------------------
    contact: {
      hero: {
        title: 'Kontakt',
        subtitle: 'Wir freuen uns auf Ihre Anfrage',
        backgroundImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80',
      },
      formSection: {
        title: 'Schreiben Sie uns',
        description: 'Haben Sie Fragen zu unseren Kakaobohnen oder benötigen Sie ein Transportangebot? Füllen Sie einfach das Formular aus – wir melden uns schnellstmöglich bei Ihnen.',
      },
      inquiryTypes: [
        { value: 'kakaobohnen', label: 'Kakaobohnen' },
        { value: 'transport', label: 'Transport' },
        { value: 'beides', label: 'Beides' },
        { value: 'sonstiges', label: 'Sonstiges' },
      ],
    },

    // ----------------------------------------
    // FAQ PAGE
    // ----------------------------------------
    faq: {
      hero: {
        title: 'Häufige Fragen',
        subtitle: 'Antworten auf Ihre wichtigsten Fragen',
      },
      categories: [
        {
          id: 'faq-cocoa',
          title: 'Fragen zu Kakaobohnen',
          items: [
            {
              id: 'faq-1',
              question: 'Woher stammen Ihre Kakaobohnen?',
              answer: 'Unsere Kakaobohnen stammen aus ausgewählten Anbaugebieten in Westafrika (Ghana, Elfenbeinküste), Südamerika (Ecuador, Peru) und Asien (Indonesien). Wir arbeiten mit zertifizierten Lieferanten zusammen, die nachhaltige Anbaumethoden praktizieren.',
            },
            {
              id: 'faq-2',
              question: 'Welche Kakaosorten bieten Sie an?',
              answer: 'Wir führen die drei Hauptsorten: Criollo (edelste Sorte, mild-aromatisch), Forastero (kräftig, am häufigsten angebaut) und Trinitario (Kreuzung aus beiden, ausgewogenes Aroma). Gerne beraten wir Sie zur passenden Sorte für Ihr Produkt.',
            },
            {
              id: 'faq-3',
              question: 'Ab welcher Menge kann ich bestellen?',
              answer: 'Wir sind flexibel: Von kleinen Mustermengen für die Produktentwicklung bis hin zu ganzen Containerladungen. Kontaktieren Sie uns einfach mit Ihrem Bedarf – wir finden eine Lösung.',
            },
            {
              id: 'faq-4',
              question: 'Sind Ihre Kakaobohnen zertifiziert?',
              answer: 'Je nach Herkunft bieten wir Kakaobohnen mit verschiedenen Zertifizierungen an (z.B. Fairtrade, Rainforest Alliance, Bio). Sprechen Sie uns auf Ihre spezifischen Anforderungen an.',
            },
          ],
        },
        {
          id: 'faq-transport',
          title: 'Fragen zu Transport & Logistik',
          items: [
            {
              id: 'faq-5',
              question: 'Welche Transportarten bieten Sie an?',
              answer: 'Wir bieten Straßentransporte per LKW (Voll- und Teilladungen), temperaturgeführte Transporte sowie Expresslieferungen. Für internationale Sendungen koordinieren wir auch multimodale Lösungen.',
            },
            {
              id: 'faq-6',
              question: 'Wie kann ich meine Sendung verfolgen?',
              answer: 'Sie erhalten von uns einen Tracking-Link, über den Sie Ihre Sendung in Echtzeit verfolgen können. Bei Fragen steht Ihnen außerdem unser Kundenservice jederzeit zur Verfügung.',
            },
            {
              id: 'faq-7',
              question: 'In welche Regionen liefern Sie?',
              answer: 'Wir liefern deutschlandweit und in alle europäischen Länder. Unser Schwerpunkt liegt auf NRW und den Benelux-Staaten, aber wir sind auch für weitere Strecken Ihr Partner.',
            },
            {
              id: 'faq-8',
              question: 'Wie schnell können Sie liefern?',
              answer: 'Das hängt von der Route und Verfügbarkeit ab. Standardlieferungen innerhalb Deutschlands dauern 2-4 Werktage. Für dringende Sendungen bieten wir auch Express-Optionen an.',
            },
          ],
        },
        {
          id: 'faq-general',
          title: 'Allgemeine Fragen',
          items: [
            {
              id: 'faq-9',
              question: 'Wie kann ich ein Angebot anfordern?',
              answer: 'Am einfachsten über unser Kontaktformular oder per E-Mail an info@elimedia.de. Nennen Sie uns Ihre Anforderungen (Produkt, Menge, Lieferort), und wir erstellen Ihnen ein individuelles Angebot.',
            },
            {
              id: 'faq-10',
              question: 'Bieten Sie auch Beratung an?',
              answer: 'Selbstverständlich. Gerade bei der Auswahl der richtigen Kakaosorte oder der optimalen Transportlösung stehen wir Ihnen beratend zur Seite – kostenlos und unverbindlich.',
            },
          ],
        },
      ],
    },
  },

  // ==========================================
  // TESTIMONIALS
  // ==========================================
  testimonials: [
    {
      id: 'testimonial-1',
      name: 'Thomas Müller',
      company: 'Schokoladenmanufaktur Rhein',
      role: 'Geschäftsführer',
      quote: 'Die Qualität der Kakaobohnen von Elimedia hat uns sofort überzeugt. Zuverlässig, transparent und immer pünktlich – genau der Partner, den wir gesucht haben.',
      rating: 5,
    },
    {
      id: 'testimonial-2',
      name: 'Sandra Weber',
      company: 'Café & Rösterei Kölner Dom',
      role: 'Inhaberin',
      quote: 'Wir beziehen unsere Kakaobohnen seit dem ersten Tag von Elimedia. Die Beratung ist hervorragend, die Lieferung immer pünktlich. Klare Empfehlung!',
      rating: 5,
    },
    {
      id: 'testimonial-3',
      name: 'Michael Becker',
      company: 'Lebensmittelgroßhandel Becker',
      role: 'Logistikleiter',
      quote: 'Die Transportdienstleistungen von Elimedia sind erstklassig. Flexibel, zuverlässig und mit einem Team, das immer eine Lösung findet.',
      rating: 5,
    },
  ],

  // ==========================================
  // FOOTER
  // ==========================================
  footer: {
    description: 'Elimedia ist Ihr zuverlässiger Partner für Premium-Kakaobohnen und professionelle Transportdienstleistungen. Qualität und Zuverlässigkeit aus einer Hand – seit 2025.',
    quickLinks: [
      { id: 'footer-about', label: 'Über uns', href: '/ueber-uns' },
      { id: 'footer-services', label: 'Leistungen', href: '/leistungen' },
      { id: 'footer-transport', label: 'Transport', href: '/transport' },
      { id: 'footer-contact', label: 'Kontakt', href: '/kontakt' },
    ],
    legalLinks: [
      { id: 'footer-imprint', label: 'Impressum', href: '/impressum' },
      { id: 'footer-privacy', label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
};

// ==========================================
// API ROUTE HANDLER
// ==========================================

export async function GET() {
  // Simuliere eine kleine Verzögerung wie bei einer echten API
  // await new Promise(resolve => setTimeout(resolve, 100));

  return NextResponse.json(siteData, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
