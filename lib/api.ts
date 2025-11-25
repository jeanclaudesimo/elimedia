import type { SiteData } from '@/types';
import { siteData } from '@/data/site-data';

/**
 * Returns the complete site data
 * Imports directly from the data file to work at build time
 */
export async function getSiteData(): Promise<SiteData> {
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
