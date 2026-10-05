import React from 'react';
import { FeaturesData } from '@/types/home';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from './FeatureCard';
import styles from './Features.module.css';

export interface FeaturesProps {
  data: FeaturesData;
}

export function Features({ data }: FeaturesProps) {
  return (
    <section className={styles.features} id="features" aria-label="Platform Features">
      <div className={styles.featuresInner}>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          lead={data.lead}
        />
        <div className={styles.grid}>
          {data.features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
