'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/elimedia-logo.svg"
        alt="Elimedia"
        width={showText ? 60 : 40}
        height={showText ? 63 : 42}
        className="h-auto"
        priority
      />
    </Link>
  );
}
