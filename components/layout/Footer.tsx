import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterData } from '@/types/site';
import { siteFooter } from '@/data/site';
import styles from './Footer.module.css';

export interface FooterProps {
  data?: FooterData;
}

export function Footer({ data = siteFooter }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCols}>
        <div className={styles.footerBrand}>
          <Image
            src={data.brand.logo.src}
            alt={data.brand.logo.alt}
            width={data.brand.logo.width}
            height={data.brand.logo.height}
            className={styles.footerLogo}
          />
          <p className={styles.footerDesc}>{data.brand.description}</p>
          <a
            href={data.brand.social.href}
            className={styles.footerSocial}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.brand.social.label}
          </a>
        </div>
        <div className={styles.footerRight}>
          {data.linkGroups.map((group) => (
            <div key={group.title} className={styles.footerGroup}>
              <h4 className={styles.groupTitle}>{group.title}</h4>
              <ul className={styles.linkList}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') || link.href.startsWith('mailto:') || link.href.startsWith('http') ? (
                      <a href={link.href}>{link.label}</a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>{data.bottom.copyright}</span>
        <div className={styles.legalLinks}>
          {data.bottom.legalLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
