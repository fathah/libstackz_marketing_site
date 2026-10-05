import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SolutionsHero as SolutionsHeroType } from '@/types/solutions';
import { Eyebrow } from '@/components/ui/Eyebrow';
import styles from './SolutionsHero.module.css';

export interface SolutionsHeroProps {
  data: SolutionsHeroType;
}

export function SolutionsHero({ data }: SolutionsHeroProps) {
  return (
    <section className={styles.hero} aria-label="Solutions overview">
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          {data.eyebrow && <Eyebrow className={styles.heroEyebrow}>{data.eyebrow}</Eyebrow>}
          <h1 className={styles.heroHeading}>{data.title}</h1>
          <p className={styles.heroDescription}>{data.description}</p>
          <div className={styles.shortcuts} role="navigation" aria-label="Solution shortcuts">
            {data.links.map((link) => (
              <a key={link.label} href={link.href} className={styles.shortcutLink}>
                <ArrowUpRight size={15} strokeWidth={2} className={styles.shortcutIcon} aria-hidden="true" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src={data.image}
            alt={data.title}
            width={1536}
            height={1024}
            priority
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
}
