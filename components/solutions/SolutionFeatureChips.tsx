import React from 'react';
import { Chip } from '@/components/ui/Chip';
import styles from './SolutionFeatureChips.module.css';

export interface SolutionFeatureChipsProps {
  features: string[];
  className?: string;
}

export function SolutionFeatureChips({
  features,
  className = '',
}: SolutionFeatureChipsProps) {
  return (
    <div className={`${styles.chipsContainer} ${className}`} role="list">
      {features.map((feature, idx) => (
        <Chip key={idx} className={styles.chip} role="listitem">
          {feature}
        </Chip>
      ))}
    </div>
  );
}
