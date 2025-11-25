import { getSiteData } from '@/lib/api';
import HeroSection from '@/components/HeroSection';
import Section, { CTASection } from '@/components/Section';
import CardGrid from '@/components/CardGrid';
import Testimonials from '@/components/Testimonials';

export default async function HomePage() {
  const siteData = await getSiteData();
  const { hero, introduction, services, whyElimedia, cta } = siteData.pages.home;

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        variant="home"
      />

      {/* Introduction Section */}
      <Section
        id={introduction.id}
        title={introduction.title}
        subtitle={introduction.subtitle}
        description={introduction.description}
        imageUrl={introduction.imageUrl}
        imagePosition={introduction.imagePosition}
      />

      {/* Services Overview */}
      <section className="section-padding bg-sand-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            {services.subtitle && (
              <p className="text-navy-600 font-medium mb-2">{services.subtitle}</p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-cocoa-900">
              {services.title}
            </h2>
          </div>
          {services.items && (
            <CardGrid items={services.items} columns={3} variant="service" />
          )}
        </div>
      </section>

      {/* Why Elimedia */}
      <section
        className={`section-padding ${
          whyElimedia.backgroundColor === 'light' ? 'bg-white' : 'bg-sand-100'
        }`}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            {whyElimedia.subtitle && (
              <p className="text-navy-600 font-medium mb-2">
                {whyElimedia.subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-cocoa-900">
              {whyElimedia.title}
            </h2>
          </div>
          {whyElimedia.items && (
            <CardGrid items={whyElimedia.items} columns={4} variant="feature" />
          )}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={siteData.testimonials} />

      {/* CTA Section */}
      <CTASection
        title={cta.title}
        subtitle={cta.subtitle}
        description={cta.description}
        primaryCta={{ text: 'Jetzt anfragen', href: '/kontakt' }}
        secondaryCta={{ text: 'Mehr erfahren', href: '/leistungen' }}
      />
    </>
  );
}
