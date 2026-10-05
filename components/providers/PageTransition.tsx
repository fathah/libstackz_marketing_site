'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useSmoothScroll } from './SmoothScrollProvider';
import styles from './PageTransition.module.css';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { lenis } = useSmoothScroll();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // Only animate when route actually transitions from one path to another
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      setIsTransitioning(true);

      // If no hash in URL, smoothly reset scroll to top on page change
      if (!window.location.hash) {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      }

      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 420);

      return () => clearTimeout(timer);
    }
  }, [pathname, lenis]);

  return (
    <>
      <div
        className={`${styles.topProgressBar} ${isTransitioning ? styles.animating : ''}`}
        aria-hidden="true"
      />
      <div key={pathname} className={styles.pageWrapper}>
        {children}
      </div>
    </>
  );
}
