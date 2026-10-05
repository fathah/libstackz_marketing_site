import React from 'react';

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'green' | 'light';
}

export function Eyebrow({ children, className = '', theme = 'green' }: EyebrowProps) {
  const themeClass = theme === 'light' ? 'eyebrow-light' : '';
  const combinedClasses = ['eyebrow', themeClass, className].filter(Boolean).join(' ');

  return <p className={combinedClasses}>{children}</p>;
}
