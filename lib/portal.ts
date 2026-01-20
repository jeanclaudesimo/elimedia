/**
 * Portal API Integration
 * Holt Konfigurationsdaten vom digitalssolutions Portal
 */

const PORTAL_API_URL = 'https://portal.digitalssolutions.de/api';
const PORTAL_EMAIL = 'contact@elimidia.de';
const PORTAL_PASSWORD = 'EL####2026';

interface PortalConfig {
  contact?: {
    company_name?: string;
    address_line1?: string;
    address_line2?: string | null;
    postal_code?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    support_email?: string;
    website?: string;
    opening_hours?: string | null;
    social_links?: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      twitter?: string;
    } | null;
  };
  tenant?: {
    id?: number;
    name?: string;
    domain?: string;
  };
}

// Token cache
let cachedToken: string | null = null;
let tokenExpiry: number = 0;

/**
 * Login zum Portal und JWT-Token holen
 */
async function getAuthToken(): Promise<string | null> {
  // Check if cached token is still valid (with 5 min buffer)
  if (cachedToken && tokenExpiry > Date.now() + 300000) {
    return cachedToken;
  }

  try {
    const response = await fetch(`${PORTAL_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: PORTAL_EMAIL,
        password: PORTAL_PASSWORD,
      }),
    });

    if (!response.ok) {
      console.error('Portal login failed:', response.status);
      return null;
    }

    const data = await response.json();

    if (data.token) {
      cachedToken = data.token;
      // Token ist 1 Stunde gültig (aus JWT exp)
      tokenExpiry = Date.now() + 3600000;
      return data.token;
    }

    return null;
  } catch (error) {
    console.error('Portal login error:', error);
    return null;
  }
}

/**
 * Konfigurationsdaten vom Portal abrufen
 */
export async function getPortalConfig(): Promise<PortalConfig | null> {
  try {
    const token = await getAuthToken();

    if (!token) {
      return null;
    }

    const response = await fetch(`${PORTAL_API_URL}/config`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      // Cache für 5 Minuten
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Portal config error:', errorData);
      return null;
    }

    const config = await response.json();

    // Prüfen ob Fehler zurückgegeben wurde
    if (config.error) {
      console.log('Portal config not available:', config.error);
      return null;
    }

    return config;
  } catch (error) {
    console.error('Portal config fetch error:', error);
    return null;
  }
}

/**
 * Konvertiert Portal-Config zu SiteData-Contact-Format
 */
export function mapPortalConfigToContact(config: PortalConfig) {
  const contact = config.contact;
  if (!contact) return null;

  return {
    company: contact.company_name,
    street: contact.address_line1,
    city: contact.postal_code && contact.city
      ? `${contact.postal_code} ${contact.city}`
      : undefined,
    country: contact.country,
    phone: contact.phone,
    email: contact.email,
    whatsapp: contact.phone, // Gleiche Nummer für WhatsApp
    openingHours: contact.opening_hours,
  };
}
