import React from 'react';
import { SolutionsCta as SolutionsCtaData } from '@/types/solutions';
import { Button } from '@/components/ui/Button';
import styles from './SolutionsCta.module.css';

export interface SolutionsCtaProps {
  data: SolutionsCtaData;
}

export function SolutionsCta({ data }: SolutionsCtaProps) {
  return (
    <section className={styles.ctaWrap} aria-label="Solutions Call to Action">
      <div className={styles.ctaBox}>
        <h2 className={styles.ctaHeading}>{data.title}</h2>
        <p className={styles.ctaDescription}>{data.description}</p>
        <div className={styles.btnRow}>
          <Button href={data.cta.href} size="lg" className={styles.ctaBtn}>
            {data.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
