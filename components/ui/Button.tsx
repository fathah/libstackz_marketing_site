import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type ButtonVariant = 'primary' | 'outline' | 'white' | 'ghost';
export type ButtonSize = 'default' | 'lg' | 'sm';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  className = '',
  onClick,
  type = 'button',
  target,
  rel,
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClass = variant !== 'primary' ? `btn-${variant}` : '';
  const sizeClass = size !== 'default' ? `btn-${size}` : '';
  const combinedClasses = [baseClasses, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  const content =
    typeof children === 'string' && children.includes('→') ? (
      <>
        <span>{children.replace('→', '').trim()}</span>
        <ArrowRight size={15} strokeWidth={2} className="btn-arrow" aria-hidden="true" />
      </>
    ) : (
      children
    );

  if (href && !disabled) {
    const isAnchor = href.startsWith('#');
    const isExternal =
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:');

    if (isAnchor || isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={target}
          rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
