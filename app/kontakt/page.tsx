import type { Metadata } from 'next';
import { getSiteData } from '@/lib/api';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { IconComponent } from '@/components/CardGrid';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie Elimidia für Anfragen zu Kakaobohnen und Transportdienstleistungen. Wir freuen uns auf Ihre Nachricht.',
};

export default async function ContactPage() {
  const siteData = await getSiteData();
  const { hero, formSection, inquiryTypes } = siteData.pages.contact;
  const { contact } = siteData;

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        variant="page"
      />

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-cocoa-900 mb-4">
                {formSection.title}
              </h2>
              <p className="text-cocoa-600 mb-8">{formSection.description}</p>
              <ContactForm inquiryTypes={inquiryTypes} />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-sand-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-cocoa-900 mb-6">
                  Kontaktinformationen
                </h3>

                {/* Address */}
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 bg-cocoa-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent name="location" className="w-6 h-6 text-cocoa-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cocoa-900 mb-1">Adresse</h4>
                    <address className="not-italic text-cocoa-600 text-sm">
                      {contact.company}
                      <br />
                      {contact.street}
                      <br />
                      {contact.city}
                      <br />
                      {contact.country}
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 bg-cocoa-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent name="phone" className="w-6 h-6 text-cocoa-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cocoa-900 mb-1">Telefon</h4>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="text-cocoa-600 hover:text-navy-600 text-sm"
                    >
                      {contact.phone}
                    </a>
                    <p className="text-cocoa-400 text-xs mt-1">(Platzhalter)</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 bg-cocoa-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent name="message" className="w-6 h-6 text-cocoa-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cocoa-900 mb-1">E-Mail</h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-cocoa-600 hover:text-navy-600 text-sm"
                    >
                      {contact.email}
                    </a>
                    <p className="text-cocoa-400 text-xs mt-1">(Platzhalter)</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cocoa-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent name="clock" className="w-6 h-6 text-cocoa-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cocoa-900 mb-1">Erreichbarkeit</h4>
                    <p className="text-cocoa-600 text-sm">{contact.openingHours}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-sand-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-sand-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent name="map" className="w-8 h-8 text-cocoa-500" />
                </div>
                <h4 className="font-semibold text-cocoa-800 mb-2">Standort</h4>
                <p className="text-cocoa-600 text-sm">
                  Hier kann später eine interaktive Karte eingebunden werden (z.B. Google Maps oder OpenStreetMap).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-sand-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-cocoa-900 mb-6">
              Schnelle Antwort garantiert
            </h2>
            <p className="text-cocoa-600 text-lg mb-8">
              Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten. Bei dringenden Anliegen erreichen Sie uns auch telefonisch während unserer Geschäftszeiten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-navy-600 mb-2">&lt; 24h</div>
                <p className="text-cocoa-600 text-sm">Antwortzeit auf E-Mails</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-navy-600 mb-2">Kostenlos</div>
                <p className="text-cocoa-600 text-sm">Unverbindliche Beratung</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-navy-600 mb-2">Individuell</div>
                <p className="text-cocoa-600 text-sm">Maßgeschneiderte Angebote</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
