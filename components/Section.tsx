import Image from 'next/image';
import Link from 'next/link';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: 'white' | 'light' | 'dark' | 'primary' | 'secondary';
  children?: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  imageUrl,
  imagePosition = 'right',
  backgroundColor = 'white',
  children,
  className = '',
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-sand-100',
    dark: 'bg-cocoa-900 text-white',
    primary: 'bg-cocoa-700 text-white',
    secondary: 'bg-navy-700 text-white',
  };

  const titleClasses = {
    white: 'text-cocoa-900',
    light: 'text-cocoa-900',
    dark: 'text-white',
    primary: 'text-white',
    secondary: 'text-white',
  };

  const subtitleClasses = {
    white: 'text-navy-600',
    light: 'text-navy-600',
    dark: 'text-navy-300',
    primary: 'text-sand-200',
    secondary: 'text-sand-200',
  };

  const descriptionClasses = {
    white: 'text-cocoa-700',
    light: 'text-cocoa-700',
    dark: 'text-sand-200',
    primary: 'text-sand-200',
    secondary: 'text-sand-200',
  };

  return (
    <section
      id={id}
      className={`section-padding ${bgClasses[backgroundColor]} ${className}`}
    >
      <div className="container-custom">
        {imageUrl ? (
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text Content */}
            <div className={imagePosition === 'left' ? 'lg:order-2' : ''}>
              {subtitle && (
                <p
                  className={`font-medium mb-2 ${subtitleClasses[backgroundColor]}`}
                >
                  {subtitle}
                </p>
              )}
              <h2
                className={`text-3xl md:text-4xl font-bold mb-6 ${titleClasses[backgroundColor]}`}
              >
                {title}
              </h2>
              {description && (
                <div
                  className={`prose prose-lg max-w-none ${descriptionClasses[backgroundColor]}`}
                >
                  {description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              {children}
            </div>

            {/* Image */}
            <div className={imagePosition === 'left' ? 'lg:order-1' : ''}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center max-w-3xl mx-auto">
            {subtitle && (
              <p
                className={`font-medium mb-2 ${subtitleClasses[backgroundColor]}`}
              >
                {subtitle}
              </p>
            )}
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${titleClasses[backgroundColor]}`}
            >
              {title}
            </h2>
            {description && (
              <p
                className={`text-lg mb-8 ${descriptionClasses[backgroundColor]}`}
              >
                {description}
              </p>
            )}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

// Sub-component for CTA sections
interface CTASectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function CTASection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-cocoa-800 to-navy-900">
      <div className="container-custom text-center">
        {subtitle && (
          <p className="text-navy-300 font-medium mb-2">{subtitle}</p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-sand-200 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={primaryCta.href} className="btn-primary text-lg">
            {primaryCta.text}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-outline-light text-lg">
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
