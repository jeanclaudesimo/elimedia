import type { Metadata } from 'next';
import { getSiteData } from '@/lib/api';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import CardGrid from '@/components/CardGrid';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Erfahren Sie mehr über Elimedia – Ihre Partner für Premium-Kakaobohnen und zuverlässige Transportdienstleistungen seit 2025.',
};

export default async function AboutPage() {
  const siteData = await getSiteData();
  const { hero, story, values, team, quality } = siteData.pages.about;

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        variant="page"
      />

      {/* Story Section */}
      <Section
        id={story.id}
        title={story.title}
        subtitle={story.subtitle}
        description={story.description}
        imageUrl={story.imageUrl}
        imagePosition={story.imagePosition}
      />

      {/* Values Section */}
      <section
        className={`section-padding ${
          values.backgroundColor === 'light' ? 'bg-sand-100' : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            {values.subtitle && (
              <p className="text-navy-600 font-medium mb-2">{values.subtitle}</p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-cocoa-900">
              {values.title}
            </h2>
          </div>
          {values.items && (
            <CardGrid items={values.items} columns={4} variant="feature" />
          )}
        </div>
      </section>

      {/* Team Section */}
      <Section
        id={team.id}
        title={team.title}
        subtitle={team.subtitle}
        description={team.description}
        imageUrl={team.imageUrl}
        imagePosition={team.imagePosition}
      />

      {/* Quality Section */}
      <Section
        id={quality.id}
        title={quality.title}
        subtitle={quality.subtitle}
        description={quality.description}
        imageUrl={quality.imageUrl}
        imagePosition={quality.imagePosition}
        backgroundColor={quality.backgroundColor}
      />
    </>
  );
}
