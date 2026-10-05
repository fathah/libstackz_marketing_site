import React from 'react';
import { Eyebrow } from './Eyebrow';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  align?: 'center' | 'left';
  eyebrowTheme?: 'green' | 'light';
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className = '',
  align = 'center',
  eyebrowTheme = 'green',
}: SectionHeadingProps) {
  const alignClass = align === 'left' ? 'heading-left' : 'heading';
  const combinedClasses = [alignClass, className].filter(Boolean).join(' ');

  return (
    <div className={combinedClasses}>
      {eyebrow && <Eyebrow theme={eyebrowTheme}>{eyebrow}</Eyebrow>}
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
