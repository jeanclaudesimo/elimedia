'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'light';
}

export default function Logo({ className = '', showText = true, variant = 'default' }: LogoProps) {
  const logoSrc = variant === 'light' ? '/logo-imidia-white.svg' : '/logo-imidia.svg';

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="IMIDIA Handel & Transport"
        width={showText ? 180 : 48}
        height={showText ? 60 : 48}
        className="h-auto"
        priority
      />
    </Link>
  );
}
