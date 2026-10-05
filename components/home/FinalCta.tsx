import React from 'react';
import { FinalCtaData } from '@/types/home';
import { Button } from '@/components/ui/Button';
import styles from './FinalCta.module.css';

export interface FinalCtaProps {
  data: FinalCtaData;
}

export function FinalCta({ data }: FinalCtaProps) {
  return (
    <section className={styles.ctaWrap} aria-label="Call to action">
      <div className={styles.ctaBox}>
        <h2 className={styles.ctaHeading}>{data.title}</h2>
        <p className={styles.ctaLead}>{data.description}</p>
        <div className={styles.btnRow}>
          <Button href={data.primaryCta.href} variant="white">
            {data.primaryCta.label}
          </Button>
          <Button href={data.secondaryCta.href} variant="ghost">
            {data.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
