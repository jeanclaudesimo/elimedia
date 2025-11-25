# Elimedia Website

Website für **Elimedia** – Ihr Partner für Premium-Kakaobohnen und zuverlässige Transportdienstleistungen.

## Technologie-Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Schriftart:** Inter (Google Fonts)

## Projektstart

### Voraussetzungen

- Node.js 18.17 oder höher
- npm, yarn, pnpm oder bun

### Installation

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

### Produktion

```bash
# Produktions-Build erstellen
npm run build

# Produktionsserver starten
npm run start
```

## Projektstruktur

```
elimedia-website/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── site-data/           # API-Route für Site-Daten
│   │       └── route.ts
│   ├── ueber-uns/               # Über uns Seite
│   ├── leistungen/              # Leistungen Seite
│   ├── transport/               # Transport Seite
│   ├── kontakt/                 # Kontakt Seite
│   ├── layout.tsx               # Root Layout
│   ├── page.tsx                 # Startseite
│   └── globals.css              # Globale Styles
├── components/                   # React-Komponenten
│   ├── Header.tsx               # Navigation
│   ├── Footer.tsx               # Footer
│   ├── Logo.tsx                 # Logo-Komponente
│   ├── HeroSection.tsx          # Hero-Bereiche
│   ├── Section.tsx              # Generische Sektionen
│   ├── CardGrid.tsx             # Karten-Layouts
│   ├── Timeline.tsx             # Prozess-Timeline
│   ├── ContactForm.tsx          # Kontaktformular
│   └── Testimonials.tsx         # Kundenstimmen
├── lib/
│   └── api.ts                   # API-Hilfsfunktionen
├── types/
│   └── index.ts                 # TypeScript-Interfaces
├── public/
│   ├── logo.svg                 # Elimedia Logo
│   ├── logo-icon.svg            # Logo (nur Icon)
│   └── favicon.svg              # Favicon
└── tailwind.config.ts           # Tailwind-Konfiguration
```

## Seiten

| Route | Beschreibung |
|-------|-------------|
| `/` | Startseite mit Hero, Leistungsübersicht, Vorteile |
| `/ueber-uns` | Geschichte, Werte, Team |
| `/leistungen` | Kakaobohnen & Transport-Angebote |
| `/transport` | Transport-Details mit Prozess-Timeline |
| `/kontakt` | Kontaktformular & Kontaktdaten |

## API-Datenstruktur

Alle Inhalte werden über eine zentrale API-Route bereitgestellt:

```
GET /api/site-data
```

Diese Route liefert alle Website-Inhalte als JSON. Die Struktur umfasst:

- `meta` – Seitentitel, Beschreibung, Keywords
- `contact` – Kontaktdaten (Adresse, Telefon, E-Mail)
- `navigation` – Navigationseinträge
- `socialLinks` – Social Media (derzeit Platzhalter)
- `pages` – Inhalte aller Seiten
- `testimonials` – Kundenstimmen
- `footer` – Footer-Konfiguration

### Echte API anbinden

Um eine echte API anzubinden:

1. Ersetzen Sie in `lib/api.ts` die `API_BASE_URL` durch Ihren API-Endpunkt
2. Stellen Sie sicher, dass Ihre API die gleiche Datenstruktur wie in `types/index.ts` definiert zurückgibt
3. Optional: Passen Sie das Caching in `getSiteData()` an

```typescript
// lib/api.ts
const API_BASE_URL = 'https://ihre-api.de';
```

## Farbschema

Das Design verwendet ein professionelles Farbschema:

| Farbe | Verwendung | Hex |
|-------|-----------|-----|
| Cocoa (Braun) | Primärfarbe, Texte | `#7d4b3a` |
| Navy (Blau) | Akzentfarbe, Links | `#2a4e79` |
| Sand (Beige) | Hintergründe | `#f9f6f1` |

Die Farbpaletten sind in `tailwind.config.ts` definiert.

## Anpassungen

### Texte ändern

Alle Texte befinden sich in der API-Route:
```
app/api/site-data/route.ts
```

### Farben ändern

Farbdefinitionen in:
```
tailwind.config.ts
```

### Kontaktdaten aktualisieren

Die Kontaktdaten sind als Platzhalter markiert. Ersetzen Sie diese in der API-Route (`siteData.contact`):

```typescript
contact: {
  company: 'Elimedia',
  street: 'Josef-Wirth-Str. 10',
  city: '51067 Köln-Holweide',
  country: 'Deutschland',
  phone: '+49 (0)221 XXXXXXX',  // Echte Nummer
  email: 'info@elimedia.de',    // Echte E-Mail
  openingHours: 'Mo–Fr: 08:00–18:00 Uhr',
}
```

### Social Media hinzufügen

Social Links können in der API-Route ergänzt werden:

```typescript
socialLinks: [
  { id: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com/...', icon: 'linkedin' },
  { id: 'instagram', platform: 'Instagram', url: 'https://instagram.com/...', icon: 'instagram' },
],
```

## Kontaktformular

Das Kontaktformular simuliert derzeit nur den Absendeprozess. Für eine echte Implementierung:

1. Erstellen Sie eine API-Route `/api/contact`
2. Integrieren Sie einen E-Mail-Service (z.B. SendGrid, Resend)
3. Aktualisieren Sie `ContactForm.tsx` mit dem echten API-Aufruf

## Bilder

Die Bilder verwenden derzeit Unsplash-Platzhalter. Für die Produktion:

1. Ersetzen Sie die Bild-URLs in der API-Route durch eigene Bilder
2. Optimieren Sie Bilder für Web (WebP-Format empfohlen)
3. Verwenden Sie Next.js Image-Komponente für automatische Optimierung

## Deployment

### Vercel (empfohlen)

```bash
npx vercel
```

### Andere Plattformen

Der Build erstellt einen statischen Export, der auf jeder Plattform gehostet werden kann:

```bash
npm run build
```

## Lizenz

Dieses Projekt wurde speziell für Elimedia erstellt.

---

Erstellt für **Elimedia** – Handel mit Lebensmitteln & Transportunternehmen
