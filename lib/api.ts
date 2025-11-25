import type { SiteData } from '@/types';

// Base URL for API calls - can be changed to external API later
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Fetches the complete site data from the API
 * In production, this can be replaced with a real API endpoint
 */
export async function getSiteData(): Promise<SiteData> {
  const baseUrl = API_BASE_URL || (typeof window === 'undefined'
    ? process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    : '');

  const res = await fetch(`${baseUrl}/api/site-data`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch site data');
  }

  return res.json();
}

/**
 * Fetches specific page data
 * Helper function for when you only need one page's data
 */
export async function getPageData<T extends keyof SiteData['pages']>(
  page: T
): Promise<SiteData['pages'][T]> {
  const siteData = await getSiteData();
  return siteData.pages[page];
}

/**
 * Fetches navigation data
 */
export async function getNavigationData(): Promise<SiteData['navigation']> {
  const siteData = await getSiteData();
  return siteData.navigation;
}

/**
 * Fetches contact information
 */
export async function getContactData(): Promise<SiteData['contact']> {
  const siteData = await getSiteData();
  return siteData.contact;
}

/**
 * Fetches testimonials
 */
export async function getTestimonials(): Promise<SiteData['testimonials']> {
  const siteData = await getSiteData();
  return siteData.testimonials;
}
