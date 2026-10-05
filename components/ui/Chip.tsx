import React from 'react';

export interface ChipProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
}

export function Chip({ children, className = '', role }: ChipProps) {
  const combinedClasses = ['chip', className].filter(Boolean).join(' ');
  return (
    <span className={combinedClasses} role={role}>
      {children}
    </span>
  );
}
