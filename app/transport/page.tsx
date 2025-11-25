import type { Metadata } from 'next';
import { getSiteData } from '@/lib/api';
import HeroSection from '@/components/HeroSection';
import Section, { CTASection } from '@/components/Section';
import CardGrid from '@/components/CardGrid';
import Timeline from '@/components/Timeline';

export const metadata: Metadata = {
  title: 'Transport & Logistik',
  description:
    'Zuverlässige Transportlösungen für Ihre Waren. Regional, national und international – mit Termintreue und Transparenz.',
};

export default async function TransportPage() {
  const siteData = await getSiteData();
  const { hero, overview, process, features, regions } = siteData.pages.transport;

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        variant="page"
      />

      {/* Overview Section */}
      <Section
        id={overview.id}
        title={overview.title}
        subtitle={overview.subtitle}
        description={overview.description}
        imageUrl={overview.imageUrl}
        imagePosition={overview.imagePosition}
      />

      {/* Process Timeline */}
      <Timeline
        title={process.title}
        subtitle={process.subtitle}
        steps={process.steps}
      />

      {/* Features Section */}
      <section
        className={`section-padding ${
          features.backgroundColor === 'light' ? 'bg-sand-100' : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            {features.subtitle && (
              <p className="text-navy-600 font-medium mb-2">{features.subtitle}</p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-cocoa-900">
              {features.title}
            </h2>
          </div>
          {features.items && (
            <CardGrid items={features.items} columns={4} variant="feature" />
          )}
        </div>
      </section>

      {/* Regions Section */}
      <Section
        id={regions.id}
        title={regions.title}
        subtitle={regions.subtitle}
        description={regions.description}
        imageUrl={regions.imageUrl}
        imagePosition={regions.imagePosition}
      />

      {/* CTA Section */}
      <CTASection
        title="Transport benötigt?"
        subtitle="Wir sind für Sie da"
        description="Fordern Sie jetzt ein individuelles Transportangebot an. Wir erstellen Ihnen ein Angebot, das genau auf Ihre Anforderungen zugeschnitten ist."
        primaryCta={{ text: 'Transport anfragen', href: '/kontakt' }}
        secondaryCta={{ text: 'Alle Leistungen', href: '/leistungen' }}
      />
    </>
  );
}
