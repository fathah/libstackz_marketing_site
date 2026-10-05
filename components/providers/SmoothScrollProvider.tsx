'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

interface SmoothScrollContextType {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1, // Keep mobile touch responsive and natural
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global listener for smooth anchor navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Handle local on-page hash anchors: href="#..." or href="/#..." when on home page
      let targetSelector: string | null = null;
      if (href.startsWith('#') && href.length > 1) {
        targetSelector = href;
      } else if (window.location.pathname === '/' && href.startsWith('/#') && href.length > 2) {
        targetSelector = href.slice(1);
      }

      if (targetSelector) {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = window.innerWidth > 860 ? -88 : -68;
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: headerOffset,
            duration: 1.2,
          });

          // Update browser URL hash cleanly without abrupt jump
          if (history.pushState) {
            history.pushState(null, '', targetSelector);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Check for hash on initial load or cross-page navigation
    const checkHashScroll = () => {
      if (window.location.hash) {
        setTimeout(() => {
          const initialTarget = document.querySelector(window.location.hash);
          if (initialTarget) {
            const headerOffset = window.innerWidth > 860 ? -88 : -68;
            lenis.scrollTo(initialTarget as HTMLElement, {
              offset: headerOffset,
              duration: 1.0,
              immediate: false,
            });
          }
        }, 150);
      }
    };

    checkHashScroll();
    window.addEventListener('hashchange', checkHashScroll);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('hashchange', checkHashScroll);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
