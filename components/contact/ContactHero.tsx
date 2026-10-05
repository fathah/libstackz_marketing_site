import React from 'react';
import { ContactHero as ContactHeroType } from '@/types/contact';
import { Eyebrow } from '@/components/ui/Eyebrow';
import styles from './ContactHero.module.css';

export interface ContactHeroProps {
  data: ContactHeroType;
}

export function ContactHero({ data }: ContactHeroProps) {
  return (
    <section className={styles.hero} aria-label="Contact introduction">
      <div className={styles.heroInner}>
        {data.eyebrow && <Eyebrow className={styles.heroEyebrow}>{data.eyebrow}</Eyebrow>}
        <h1 className={styles.heroHeading}>{data.title}</h1>
        <p className={styles.heroDescription}>{data.description}</p>
      </div>
    </section>
  );
}
