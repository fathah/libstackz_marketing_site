'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CONSOLE_URL } from '@/constants/constants';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0">
            <div className="hero-content text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Lightweight & Scalable library management system.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg text-white/50 mb-8"
              >
                For uses in schools, colleges, public libraries, and everywhere there's some books.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link
                  href={CONSOLE_URL}
                  className="px-8 py-3 text-base font-medium text-primary bg-white rounded-lg hover:bg-white/80 transition-colors duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="#features"
                  className="px-8 py-3 text-base font-medium bg-white/30 text-white rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  Features
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="w-full lg:w-7/12 px-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hero-image relative z-10 text-center"
            >
              <img
                src="/assets/images/hero/phone.png"
                alt="App Screenshot"
                className="max-w-full h-auto mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;