'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/site';
import { siteHeader } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider';
import styles from './Header.module.css';

export interface HeaderProps {
  data?: HeaderData;
}

export function Header({ data = siteHeader }: HeaderProps) {
  const pathname = usePathname();
  const { lenis } = useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  type ActiveSection = 'home' | 'features' | 'pricing';
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scrollspy observer for Home page sections
  useEffect(() => {
    if (pathname !== '/') return;

    const updateActiveSection = () => {
      const featuresEl = document.getElementById('features');
      const pricingEl = document.getElementById('pricing');

      const headerHeight = window.innerWidth > 860 ? 88 : 68;
      const threshold = headerHeight + 120; // 120px natural reading threshold
      const isAtBottom =
        window.innerHeight + window.scrollY >= (document.documentElement.scrollHeight - 60);

      if (pricingEl && (pricingEl.getBoundingClientRect().top <= threshold || isAtBottom)) {
        setActiveSection('pricing');
      } else if (featuresEl && featuresEl.getBoundingClientRect().top <= threshold) {
        setActiveSection('features');
      } else {
        setActiveSection('home');
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    if (lenis) {
      lenis.on('scroll', updateActiveSection);
    }

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      if (lenis) {
        lenis.off('scroll', updateActiveSection);
      }
    };
  }, [pathname, lenis]);

  const isLinkActive = (link: { href: string; isActive?: boolean }) => {
    if (link.isActive !== undefined) return link.isActive;

    // On Home page, resolve by active scrolled section
    if (pathname === '/') {
      if (link.href === '/' && activeSection === 'home') return true;
      if ((link.href === '/#features' || link.href === '#features') && activeSection === 'features') return true;
      if ((link.href === '/#pricing' || link.href === '#pricing') && activeSection === 'pricing') return true;
      return false;
    }

    // On /solutions and /contact
    return pathname === link.href;
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll and listen for Escape/Resize when menu is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsMenuOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const isLocalAnchor = (href: string) => {
    if (href.startsWith('#')) return true;
    if (pathname === '/' && href.startsWith('/#')) return true;
    return false;
  };

  const getAnchorTarget = (href: string) => {
    if (href.startsWith('#')) return href;
    if (href.startsWith('/#')) return href.slice(1);
    return href;
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, rawHref: string) => {
    setIsMenuOpen(false);
    const targetId = getAnchorTarget(rawHref);
    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = window.innerWidth > 860 ? -88 : -68;
        if (lenis) {
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: headerOffset,
            duration: 1.2,
          });
        } else {
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + headerOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }

        if (history.pushState) {
          history.pushState(null, '', targetId);
        }
      }
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.left}>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={styles.logoLink}
              aria-label="Libstackz Home"
            >
              <Image
                className={styles.logo}
                src={data.logo.src}
                alt={data.logo.alt}
                width={data.logo.width}
                height={data.logo.height}
                priority
              />
            </Link>
            <nav className={styles.nav} aria-label="Main Navigation">
              {data.navLinks.map((link) => {
                const isAnchor = isLocalAnchor(link.href);
                const isActive = isLinkActive(link);
                const linkClasses = [
                  styles.navLink,
                  isActive ? styles.navLinkActive : '',
                ]
                  .filter(Boolean)
                  .join(' ');

                if (isAnchor) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={linkClasses}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link key={link.label} href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className={styles.right}>
            <a href={data.signIn.href} className={styles.signInLink}>
              {data.signIn.label}
            </a>
            <Button href={data.cta.href} size="default" className={styles.headerBtn}>
              {data.cta.label}
            </Button>
            <button
              type="button"
              className={`${styles.hamburgerBtn} ${isMenuOpen ? styles.open : ''}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              <span className={`${styles.hamburgerLine} ${styles.lineTop}`} />
              <span className={`${styles.hamburgerLine} ${styles.lineMiddle}`} />
              <span className={`${styles.hamburgerLine} ${styles.lineBottom}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Sheet & Backdrop rendered via Portal directly to body */}
      {mounted &&
        isMenuOpen &&
        createPortal(
          <>
            <div
              className={styles.backdrop}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              className={styles.mobileMenu}
              role="dialog"
              aria-label="Mobile Navigation"
              aria-modal="true"
            >
              <nav className={styles.mobileNav} aria-label="Mobile Menu Links">
                {data.navLinks.map((link) => {
                  const isAnchor = isLocalAnchor(link.href);
                  const isActive = isLinkActive(link);
                  const linkClasses = [
                    styles.mobileNavLink,
                    isActive ? styles.mobileNavLinkActive : '',
                  ]
                    .filter(Boolean)
                    .join(' ');

                  if (isAnchor) {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className={linkClasses}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                      >
                        <span>{link.label}</span>
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={linkClasses}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className={styles.mobileDivider} />

              <div className={styles.mobileActions}>
                <Button
                  href={data.cta.href}
                  size="default"
                  className={styles.mobileCtaBtn}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {data.cta.label}
                </Button>
                <a
                  href={data.signIn.href}
                  className={styles.mobileSignInLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {data.signIn.label}
                </a>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
