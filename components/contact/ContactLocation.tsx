import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { ContactLocationConfig } from '@/types/contact';
import styles from './ContactLocation.module.css';

export interface ContactLocationProps {
  data: ContactLocationConfig;
}

export function ContactLocation({ data }: ContactLocationProps) {
  // Dynamically split address on newline for clean presentation
  const addressLines = data.address.includes('\n')
    ? data.address.split('\n')
    : [data.address];

  const directionsLabel = data.directions.label.replace('→', '').trim();

  return (
    <article className={styles.card} aria-labelledby="location-heading">
      <h3 id="location-heading" className={styles.title}>
        {data.title}
      </h3>

      <a
        href={data.directions.href}
        className={styles.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open directions for ${data.title}`}
      >
        <div className={styles.mapContainer}>
          {data.mapEmbedUrl ? (
            <iframe
              src={data.mapEmbedUrl}
              className={styles.mapIframe}
              loading="lazy"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map preview of ${data.mapPreviewText}`}
              tabIndex={-1}
            />
          ) : (
            <div className={styles.fallbackPreview}>
              <MapPin size={24} strokeWidth={2} className={styles.pin} aria-hidden="true" />
              <span className={styles.previewText}>{data.mapPreviewText}</span>
            </div>
          )}
        </div>
      </a>

      <p className={styles.address}>
        {addressLines.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < addressLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>

      <a
        href={data.directions.href}
        className={styles.directionsLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{directionsLabel}</span>
        <ArrowRight size={15} strokeWidth={2} className={styles.arrow} aria-hidden="true" />
      </a>
    </article>
  );
}
