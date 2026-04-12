'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONSOLE_URL } from '@/constants/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: 'mailto:info@ziqx.in' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      style={scrolled ? {
        backgroundColor: 'rgba(251, 249, 244, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      } : {}}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div
              className="h-[36px] w-[140px] bg-primary transition-colors duration-500"
              style={{
                maskImage: 'url(/assets/logo.png)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'left center',
                WebkitMaskImage: 'url(/assets/logo.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left center'
              }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium tracking-wide text-on-surface-variant hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={CONSOLE_URL}
              className="px-6 py-2.5 text-sm font-semibold text-on-primary rounded-full transition-all duration-300 hover:brightness-110"
              style={{
                background: 'linear-gradient(180deg, var(--primary) 0%, var(--primary-container) 100%)',
              }}
            >
              Dashboard
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none text-on-surface transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{
              backgroundColor: 'rgba(251, 249, 244, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-on-surface-variant hover:text-primary font-medium text-sm tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={CONSOLE_URL}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-2.5 text-on-primary rounded-full text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(180deg, var(--primary) 0%, var(--primary-container) 100%)',
                  }}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
