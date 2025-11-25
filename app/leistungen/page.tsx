import type { Metadata } from 'next';
import { getSiteData } from '@/lib/api';
import HeroSection from '@/components/HeroSection';
import { CTASection } from '@/components/Section';
import CardGrid from '@/components/CardGrid';

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Entdecken Sie unsere Leistungen: Premium-Kakaobohnen aus ausgewählten Anbaugebieten und professionelle Transportdienstleistungen.',
};

export default async function ServicesPage() {
  const siteData = await getSiteData();
  const { hero, cocoa, transport, additionalServices } = siteData.pages.services;

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        variant="page"
      />

      {/* Cocoa Section */}
      <section id="kakao" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={cocoa.imageUrl}
                alt={cocoa.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              {cocoa.subtitle && (
                <p className="text-navy-600 font-medium mb-2">{cocoa.subtitle}</p>
              )}
              <h2 className="text-3xl md:text-4xl font-bold text-cocoa-900 mb-6">
                {cocoa.title}
              </h2>
              {cocoa.description && (
                <div className="prose prose-lg text-cocoa-700 mb-8">
                  {cocoa.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cocoa Features */}
          {cocoa.items && (
            <div className="mt-16">
              <CardGrid items={cocoa.items} columns={4} variant="feature" />
            </div>
          )}
        </div>
      </section>

      {/* Transport Section */}
      <section id="transport" className="section-padding bg-sand-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="lg:order-1 order-2">
              {transport.subtitle && (
                <p className="text-navy-600 font-medium mb-2">
                  {transport.subtitle}
                </p>
              )}
              <h2 className="text-3xl md:text-4xl font-bold text-cocoa-900 mb-6">
                {transport.title}
              </h2>
              {transport.description && (
                <div className="prose prose-lg text-cocoa-700 mb-8">
                  {transport.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Image */}
            <div className="lg:order-2 order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={transport.imageUrl}
                alt={transport.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Transport Features */}
          {transport.items && (
            <div className="mt-16">
              <CardGrid items={transport.items} columns={4} variant="feature" />
            </div>
          )}
        </div>
      </section>

      {/* Additional Services */}
      <section
        className={`section-padding ${
          additionalServices.backgroundColor === 'light'
            ? 'bg-white'
            : 'bg-sand-100'
        }`}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            {additionalServices.subtitle && (
              <p className="text-navy-600 font-medium mb-2">
                {additionalServices.subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-cocoa-900">
              {additionalServices.title}
            </h2>
          </div>
          {additionalServices.items && (
            <CardGrid
              items={additionalServices.items}
              columns={4}
              variant="feature"
            />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Interesse geweckt?"
        subtitle="Wir freuen uns auf Ihre Anfrage"
        description="Kontaktieren Sie uns für ein unverbindliches Angebot – ob Kakaobohnen, Transport oder beides."
        primaryCta={{ text: 'Jetzt anfragen', href: '/kontakt' }}
        secondaryCta={{ text: 'Transport im Detail', href: '/transport' }}
      />
    </>
  );
}
