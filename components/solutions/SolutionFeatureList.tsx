import React from 'react';
import { Check } from 'lucide-react';
import styles from './SolutionFeatureList.module.css';

export interface SolutionFeatureListProps {
  features: string[];
  isGrid?: boolean;
  isDetailed?: boolean;
  className?: string;
}

export function SolutionFeatureList({
  features,
  isGrid = false,
  isDetailed = false,
  className = '',
}: SolutionFeatureListProps) {
  const classes = [
    styles.featureList,
    isGrid ? styles.grid : '',
    isDetailed ? styles.detailed : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ul className={classes}>
      {features.map((feature, idx) => (
        <li key={idx} className={styles.featureItem}>
          <span className={styles.iconWrap} aria-hidden="true">
            <Check size={14} strokeWidth={2.5} className={styles.checkIcon} />
          </span>
          <span className={styles.featureText}>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
