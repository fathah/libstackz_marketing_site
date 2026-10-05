'use client';

import React, { useEffect, useState, useRef } from 'react';

export interface AnimatedCounterProps {
  value: string;
  isTriggered: boolean;
  duration?: number;
}

export function AnimatedCounter({
  value,
  isTriggered,
  duration = 1600,
}: AnimatedCounterProps) {
  // Parse numeric target, commas, prefix, and suffix
  // e.g. "13,400+" -> numeric: 13400, hasCommas: true, suffix: "+"
  const hasCommas = value.includes(',');
  const match = value.match(/^([^0-9]*)([0-9,]+)([^0-9]*)$/);
  const prefix = match ? match[1] : '';
  const rawNumStr = match ? match[2].replace(/,/g, '') : '';
  const suffix = match ? match[3] : '';
  const target = rawNumStr ? parseInt(rawNumStr, 10) : 0;

  // Initialize with the real value for immediate SSR and slow 3G resilience
  const [displayValue, setDisplayValue] = useState<string>(value);
  const [prevTriggered, setPrevTriggered] = useState(false);
  const hasStartedAnimation = useRef(false);

  // When triggered, reset display to 0 during render so paint begins cleanly from 0
  if (isTriggered && !prevTriggered) {
    setPrevTriggered(true);
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (target && !prefersReducedMotion) {
      setDisplayValue(`${prefix}0${suffix}`);
    }
  }

  useEffect(() => {
    // Only start animation when triggered, and run it only once
    if (!isTriggered || hasStartedAnimation.current) return;
    hasStartedAnimation.current = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    if (!target) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const currentVal = Math.round(easedProgress * target);
      const formatted = hasCommas
        ? currentVal.toLocaleString('en-US')
        : currentVal.toString();

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isTriggered, value, target, duration, hasCommas, prefix, suffix]);

  return <>{displayValue}</>;
}
