import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSiteData } from '@/lib/api';

export const metadata: Metadata = {
  title: {
    default: 'Elimidia - Premium Kakaohandel & Transport',
    template: '%s | Elimidia',
  },
  description:
    'Elimidia ist Ihr zuverlässiger Partner für hochwertigen Kakaohandel und professionelle Transportdienstleistungen. Qualität und Zuverlässigkeit aus einer Hand.',
  keywords: [
    'Kakaobohnen',
    'Kakaohandel',
    'Transport',
    'Logistik',
    'Lebensmittelhandel',
    'Köln',
    'B2B',
    'Premium Kakao',
  ],
  authors: [{ name: 'Elimidia' }],
  creator: 'Elimidia',
  publisher: 'Elimidia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Elimidia',
    title: 'Elimidia - Premium Kakaohandel & Transport',
    description:
      'Elimidia ist Ihr zuverlässiger Partner für hochwertigen Kakaohandel und professionelle Transportdienstleistungen.',
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
      </body>
    </html>
  );
}
