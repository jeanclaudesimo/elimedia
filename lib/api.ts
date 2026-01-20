import type { SiteData } from '@/types';
import { siteData } from '@/data/site-data';
import { getPortalConfig, mapPortalConfigToContact } from './portal';

/**
 * Returns the complete site data
 * Merges hardcoded data with Portal config (if available)
 */
export async function getSiteData(): Promise<SiteData> {
  // Versuche Portal-Daten zu laden
  const portalConfig = await getPortalConfig();

  if (portalConfig) {
    const portalContact = mapPortalConfigToContact(portalConfig);

    if (portalContact) {
      // Merge Portal-Daten mit hardcoded Daten (Portal hat Priorität)
      return {
        ...siteData,
        contact: {
          ...siteData.contact,
          ...(portalContact.company && { company: portalContact.company }),
          ...(portalContact.street && { street: portalContact.street }),
          ...(portalContact.city && { city: portalContact.city }),
          ...(portalContact.country && { country: portalContact.country }),
          ...(portalContact.phone && { phone: portalContact.phone }),
          ...(portalContact.email && { email: portalContact.email }),
          ...(portalContact.whatsapp && { whatsapp: portalContact.whatsapp }),
          ...(portalContact.openingHours && { openingHours: portalContact.openingHours }),
        },
      };
    }
  }

  // Fallback auf hardcoded Daten
  return siteData;
}

/**
 * Fetches specific page data
 * Helper function for when you only need one page's data
 */
export async function getPageData<T extends keyof SiteData['pages']>(
  page: T
): Promise<SiteData['pages'][T]> {
  const data = await getSiteData();
  return data.pages[page];
}

/**
 * Fetches navigation data
 */
export async function getNavigationData(): Promise<SiteData['navigation']> {
  const data = await getSiteData();
  return data.navigation;
}

/**
 * Fetches contact information
 */
export async function getContactData(): Promise<SiteData['contact']> {
  const data = await getSiteData();
  return data.contact;
}

/**
 * Fetches testimonials
 */
export async function getTestimonials(): Promise<SiteData['testimonials']> {
  const data = await getSiteData();
  return data.testimonials;
}
