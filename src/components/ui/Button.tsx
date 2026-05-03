'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const base =
  'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants = {
  primary: 'bg-[#1B2A4A] text-white hover:bg-[#243561] focus:ring-[#1B2A4A] shadow-lg',
  secondary: 'bg-[#38BDF8] text-[#1B2A4A] hover:bg-[#0EA5E9] focus:ring-[#38BDF8] shadow-lg',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-[#1B2A4A] focus:ring-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  size = 'md',
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
