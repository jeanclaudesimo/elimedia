import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';
import { getSiteData } from '@/lib/api';

export const metadata: Metadata = {
  title: {
    default: 'IMIDIA - Kakaobohnen, Kakaopulver & Transport',
    template: '%s | IMIDIA',
  },
  description:
    'IMIDIA Handel, Vertrieb und Service ist Ihr zuverlässiger Partner für hochwertige Kakaobohnen, Kakaopulver und professionelle Transportdienstleistungen. Qualität und Zuverlässigkeit aus einer Hand.',
  keywords: [
    'Kakaobohnen',
    'Kakaopulver',
    'Kakaohandel',
    'Transport',
    'Logistik',
    'Lebensmittelhandel',
    'Köln',
    'B2B',
    'Premium Kakao',
    'Schokolade',
  ],
  authors: [{ name: 'IMIDIA Handel, Vertrieb und Service' }],
  creator: 'IMIDIA',
  publisher: 'IMIDIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'IMIDIA',
    title: 'IMIDIA - Kakaobohnen, Kakaopulver & Transport',
    description:
      'IMIDIA Handel, Vertrieb und Service ist Ihr zuverlässiger Partner für hochwertige Kakaobohnen, Kakaopulver und professionelle Transportdienstleistungen.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteData = await getSiteData();

  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <Header navigation={siteData.navigation} />
        <main className="flex-1 pt-20">{children}</main>
        <Footer
          contact={siteData.contact}
          description={siteData.footer.description}
          quickLinks={siteData.footer.quickLinks}
          legalLinks={siteData.footer.legalLinks}
          socialLinks={siteData.socialLinks}
        />
        {siteData.contact.whatsapp && (
          <WhatsAppButton phoneNumber={siteData.contact.whatsapp} />
        )}
        <CookieConsent />
      </body>
    </html>
  );
}
