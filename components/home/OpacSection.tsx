import React from 'react';
import Image from 'next/image';
import { OpacData } from '@/types/home';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import styles from './OpacSection.module.css';

export interface OpacSectionProps {
  data: OpacData;
}

export function OpacSection({ data }: OpacSectionProps) {
  return (
    <section className={styles.opac} aria-labelledby="opac-heading">
      <div className={styles.opacInner}>
        <div className={styles.opacCopy}>
          {data.eyebrow && (
            <Eyebrow theme="light" className={styles.opacEyebrow}>
              {data.eyebrow}
            </Eyebrow>
          )}
          <h2 id="opac-heading" className={styles.opacHeading}>
            {data.title}
          </h2>
          <p className={styles.opacBody}>{data.body}</p>
          <Button
            href={data.cta.href}
            variant="white"
            className={styles.btnOpac}
          >
            {data.cta.label}
          </Button>
        </div>
        <div className={styles.opacImgWrap}>
          <Image
            className={styles.opacImg}
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            loading="lazy"
            sizes="(max-width: 860px) 100vw, (max-width: 1280px) 656px, 656px"
          />
        </div>
      </div>
    </section>
  );
}
