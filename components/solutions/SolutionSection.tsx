import React from 'react';
import Image from 'next/image';
import { Solution } from '@/types/solutions';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { SolutionFeatureList } from './SolutionFeatureList';
import { SolutionFeatureChips } from './SolutionFeatureChips';
import styles from './SolutionSection.module.css';

export interface SolutionSectionProps {
  solution: Solution;
}

export function SolutionSection({ solution }: SolutionSectionProps) {
  const layoutClass = solution.layout === 'image-left' ? styles.imageLeft : styles.imageRight;
  const bgClass = solution.background === 'white' ? styles.white : styles.light;

  return (
    <section
      id={solution.id}
      className={`${styles.section} ${bgClass} ${layoutClass}`}
      aria-labelledby={`${solution.id}-heading`}
    >
      <div className={styles.sectionInner}>
        <div className={styles.visualCol}>
          <div className={styles.imgWrap}>
            <Image
              src={solution.image}
              alt={solution.title}
              width={1536}
              height={1024}
              className={styles.solutionImg}
            />
          </div>
        </div>

        <div className={styles.contentCol}>
          {solution.eyebrow && <Eyebrow className={styles.eyebrow}>{solution.eyebrow}</Eyebrow>}
          <h2 id={`${solution.id}-heading`} className={styles.title}>
            {solution.title}
          </h2>
          <p className={styles.description}>{solution.description}</p>

          <div className={styles.featuresWrap}>
            {solution.featureType === 'chips' ? (
              <SolutionFeatureChips features={solution.features} />
            ) : (
              <SolutionFeatureList
                features={solution.features}
                isGrid={solution.featureVariant === 'grid'}
                isDetailed={solution.featureVariant === 'detailed'}
              />
            )}
          </div>

          <div className={styles.ctaWrap}>
            <Button href={solution.cta.href} className={styles.ctaBtn}>
              {solution.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
