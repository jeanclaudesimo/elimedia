import type { Metadata } from 'next';
import { getSiteData } from '@/lib/api';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { IconComponent } from '@/components/CardGrid';

export const metadata: Metadata = {
  title: 'Kontakt | IMIDIA',
  description:
    'Kontaktieren Sie IMIDIA Handel, Vertrieb und Service für Anfragen zu Kakaobohnen, Kakaopulver und Transportdienstleistungen. Wir freuen uns auf Ihre Nachricht.',
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
                  </div>
                </div>

                {/* WhatsApp */}
                {contact.whatsapp && (
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cocoa-900 mb-1">WhatsApp</h4>
                      <a
                        href={`https://wa.me/${contact.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Jetzt schreiben
                      </a>
                    </div>
                  </div>
                )}

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
