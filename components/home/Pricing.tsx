import React from 'react';
import { PricingData } from '@/types/home';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PricingPlan } from './PricingPlan';
import styles from './Pricing.module.css';

export interface PricingProps {
  data: PricingData;
}

export function Pricing({ data }: PricingProps) {
  return (
    <section className={styles.pricing} id="pricing" aria-labelledby="pricing-heading">
      <div className={styles.pricingInner}>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          lead={data.lead}
          className={styles.pricingHeading}
        />
        <div className={styles.plansList}>
          {data.plans.map((plan) => (
            <PricingPlan key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
