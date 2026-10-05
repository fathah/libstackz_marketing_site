import React from 'react';
import Image from 'next/image';
import { FeatureItem } from '@/types/home';
import { Chip } from '@/components/ui/Chip';
import styles from './FeatureCard.module.css';

export interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          className={styles.cardImage}
          src={feature.image}
          alt={feature.title}
          width={410}
          height={160}
          loading="lazy"
        />
      </div>
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.description}>{feature.description}</p>
      <div className={styles.chips}>
        {feature.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </article>
  );
}
