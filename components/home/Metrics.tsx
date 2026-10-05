'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MetricsData } from '@/types/home';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider';
import styles from './Metrics.module.css';

export interface MetricsProps {
  data: MetricsData;
}

export function Metrics({ data }: MetricsProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const { lenis } = useSmoothScroll();

  useEffect(() => {
    const el = rowRef.current;
    if (!el) {
      setHasAnimated(true);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHasAnimated(true);
      return;
    }

    let hasTriggered = false;
    const triggerReveal = () => {
      if (hasTriggered) return;
      hasTriggered = true;
      setHasAnimated(true);
      setIsPending(false);
    };

    const checkPosition = () => {
      if (hasTriggered || !rowRef.current) return;
      const rect = rowRef.current.getBoundingClientRect();
      // On desktop at scrollY=0, rect.top is ~673px for a 776px viewport.
      // Trigger when the cards enter into the upper 80% of the viewport or user scrolls down.
      const triggerThreshold = window.innerHeight * 0.80;
      if ((rect.top <= triggerThreshold && rect.bottom > 0) || window.scrollY > 70) {
        triggerReveal();
      }
    };

    // If page is already scrolled down on initial load (e.g. reload or anchor link)
    const initialRect = el.getBoundingClientRect();
    if (window.scrollY > 70 && initialRect.top <= window.innerHeight * 0.85 && initialRect.bottom > 0) {
      triggerReveal();
      return;
    }

    // Element is waiting for user to scroll: arm pending state
    setIsPending(true);

    // 1. IntersectionObserver with -20% bottom margin (triggers when top reaches upper 80% of viewport)
    let observer: IntersectionObserver | null = null;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry && entry.isIntersecting) {
            triggerReveal();
            if (observer) observer.disconnect();
          }
        },
        {
          threshold: 0,
          rootMargin: '0px 0px -20% 0px',
        }
      );
      observer.observe(el);
    } catch {
      // IntersectionObserver fallback handled by scroll listeners
    }

    // 2. Native scroll & resize listeners (passive)
    window.addEventListener('scroll', checkPosition, { passive: true });
    window.addEventListener('resize', checkPosition, { passive: true });

    // 3. Lenis kinetic scroll listener
    if (lenis) {
      lenis.on('scroll', checkPosition);
    }

    // 4. Extended safety fallback timer (8 seconds) to prevent permanent stuck state on rare edge browsers
    const safetyTimer = setTimeout(() => {
      triggerReveal();
    }, 8000);

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
      if (lenis) {
        lenis.off('scroll', checkPosition);
      }
      if (observer) {
        observer.disconnect();
      }
      clearTimeout(safetyTimer);
    };
  }, [lenis]);

  return (
    <section
      className={styles.metrics}
      aria-label="Key Platform Metrics"
    >
      <div className={styles.metricsInner}>
        {data.eyebrow && (
          <Eyebrow theme="light" className={styles.eyebrow}>
            {data.eyebrow}
          </Eyebrow>
        )}
        <div ref={rowRef} className={styles.metricsRow}>
          {data.metrics.map((item) => {
            const cardStateClass = hasAnimated
              ? styles.revealed
              : isPending
              ? styles.pending
              : '';

            return (
              <div
                key={item.label}
                className={`${styles.metric} ${cardStateClass}`}
              >
                <strong className={styles.metricValue}>
                  <AnimatedCounter value={item.value} isTriggered={hasAnimated} />
                </strong>
                <span className={styles.metricLabel}>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
