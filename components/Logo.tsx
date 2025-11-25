'use client';

import Link from 'next/link';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'light';
}

export default function Logo({ className = '', showText = true, variant = 'default' }: LogoProps) {
  const primaryColor = variant === 'light' ? '#ffffff' : '#7d4b3a';
  const secondaryColor = variant === 'light' ? '#ffffff' : '#2a4e79';

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Kakaobohne stilisiert */}
        <ellipse
          cx="24"
          cy="24"
          rx="14"
          ry="18"
          fill={primaryColor}
          opacity="0.9"
        />
        {/* Linie in der Mitte der Bohne */}
        <path
          d="M24 8 C 20 16, 20 32, 24 40"
          stroke={variant === 'light' ? '#7d4b3a' : '#f9f6f1'}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M24 8 C 28 16, 28 32, 24 40"
          stroke={variant === 'light' ? '#7d4b3a' : '#f9f6f1'}
          strokeWidth="2"
          fill="none"
        />
        {/* Transport-Pfeil */}
        <path
          d="M34 36 L 42 36 L 38 32 M 42 36 L 38 40"
          stroke={secondaryColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Kleiner Kreis als Akzent */}
        <circle
          cx="38"
          cy="12"
          r="4"
          fill={secondaryColor}
        />
      </svg>
      {showText && (
        <span
          className={`text-2xl font-bold tracking-tight ${
            variant === 'light' ? 'text-white' : 'text-cocoa-800'
          }`}
        >
          Elimidia
        </span>
      )}
    </Link>
  );
}
