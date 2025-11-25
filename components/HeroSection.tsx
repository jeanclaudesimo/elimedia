import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: 'home' | 'page';
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryCta,
  secondaryCta,
  variant = 'page',
}: HeroSectionProps) {
  const isHome = variant === 'home';

  return (
    <section
      className={`relative ${
        isHome ? 'min-h-screen' : 'min-h-[50vh]'
      } flex items-center`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom w-full">
        <div
          className={`max-w-3xl ${
            isHome ? 'py-32 md:py-40' : 'py-24 md:py-32'
          }`}
        >
          {subtitle && (
            <p className="text-navy-300 font-medium text-lg mb-4 animate-fade-in">
              {subtitle}
            </p>
          )}
          <h1
            className={`text-white font-bold mb-6 animate-slide-up ${
              isHome ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl'
            }`}
          >
            {title}
          </h1>
          {description && (
            <p className="text-sand-200 text-lg md:text-xl leading-relaxed mb-8 animate-slide-up">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary text-lg">
                  {primaryCta.text}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn-outline-light text-lg"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator (only for home) */}
      {isHome && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
