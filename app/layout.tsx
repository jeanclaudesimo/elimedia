import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSiteData } from '@/lib/api';

export const metadata: Metadata = {
  title: {
    default: 'Elimedia - Premium Kakaohandel & Transport',
    template: '%s | Elimedia',
  },
  description:
    'Elimedia ist Ihr zuverlässiger Partner für hochwertigen Kakaohandel und professionelle Transportdienstleistungen. Qualität und Zuverlässigkeit aus einer Hand.',
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
  authors: [{ name: 'Elimedia' }],
  creator: 'Elimedia',
  publisher: 'Elimedia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Elimedia',
    title: 'Elimedia - Premium Kakaohandel & Transport',
    description:
      'Elimedia ist Ihr zuverlässiger Partner für hochwertigen Kakaohandel und professionelle Transportdienstleistungen.',
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
