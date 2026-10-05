import React from 'react';
import Image from 'next/image';
import { HeroData } from '@/types/home';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import styles from './Hero.module.css';

export interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section className={styles.hero} aria-label="Hero Introduction">
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          {data.eyebrow && <Eyebrow className={styles.heroEyebrow}>{data.eyebrow}</Eyebrow>}
          <h1 className={styles.heroHeading}>{data.title}</h1>
          <p className={styles.heroBody}>{data.body}</p>
          <div className={styles.btnRow}>
            <Button href={data.primaryCta.href} size="lg">
              {data.primaryCta.label}
            </Button>
            <Button href={data.secondaryCta.href} variant="outline" size="lg">
              {data.secondaryCta.label}
            </Button>
          </div>
          <p className={styles.heroNote}>{data.note}</p>
        </div>
        <div className={styles.heroImgWrap}>
          <Image
            className={styles.heroImg}
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            priority={true}
            sizes="(max-width: 860px) 100vw, (max-width: 1280px) 624px, 624px"
          />
        </div>
      </div>
    </section>
  );
}
