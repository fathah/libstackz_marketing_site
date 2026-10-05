import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlanData } from '@/types/home';
import { Button } from '@/components/ui/Button';
import styles from './PricingPlan.module.css';

export interface PricingPlanProps {
  plan: PricingPlanData;
}

export function PricingPlan({ plan }: PricingPlanProps) {
  const planClasses = [styles.plan, plan.isFeatured ? styles.featured : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article className={planClasses} aria-label={`${plan.name} plan`}>
      <div className={styles.planLeft}>
        {plan.badge && <span className={styles.badge}>{plan.badge}</span>}
        <h3 className={styles.planName}>{plan.name}</h3>
        <div className={styles.price}>
          <strong>{plan.priceMonthly}</strong>
          <span>{plan.billingPeriod}</span>
        </div>
        <small className={styles.annualNote}>{plan.annualNote}</small>
        <Button href={plan.cta.href} className={styles.planBtn}>
          {plan.cta.label}
        </Button>
        <span className={styles.fine}>{plan.finePrint}</span>
      </div>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.planRight}>
        <div className={styles.label}>{plan.featuresLabel}</div>
        <div className={styles.cols}>
          {plan.featureColumns.map((col, idx) => (
            <ul key={idx} className={styles.featureList}>
              {col.map((featureText) => (
                <li key={featureText} className={styles.featureItem}>
                  <Check size={14} strokeWidth={2.5} className={styles.checkIcon} aria-hidden="true" />
                  <span>{featureText}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </article>
  );
}
