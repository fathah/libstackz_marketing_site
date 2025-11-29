'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CONSOLE_URL } from '@/constants/constants';

const CallToAction = () => {
  return (
    <section id="download" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
          >
            Let's get into work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/80 mb-10"
          >
            Try our latest version now
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href={CONSOLE_URL}
              className="inline-block px-8 py-4 text-lg font-bold text-primary bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
             Go to Dashboard
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
