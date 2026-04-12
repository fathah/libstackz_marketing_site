'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CONSOLE_URL } from '@/constants/constants';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="download" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium tracking-widest uppercase text-primary mb-4"
          >
            Get Started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-on-surface mb-6 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Ready to transform your library?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-on-surface-variant mb-10 leading-relaxed"
          >
            Try our latest version now — completely free, no strings attached.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href={CONSOLE_URL}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-on-primary rounded-md transition-all duration-300 hover:brightness-110"
              style={{
                background: 'linear-gradient(180deg, var(--primary) 0%, var(--primary-container) 100%)',
              }}
            >
              Go to Dashboard
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
