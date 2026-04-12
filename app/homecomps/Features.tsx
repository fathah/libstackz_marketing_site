'use client';

import { motion } from 'framer-motion';
import { CloudUpload, Layout, Database, ShieldCheck, Zap, Layers } from 'lucide-react';

const featuresData = [
  {
    icon: CloudUpload,
    title: 'Cloud Backup & Restore',
    description: 'Securely backup your entire library database and restore anytime with just one click, ensuring your data is always safe.',
  },
  {
    icon: Layout,
    title: 'Flexible & Intuitive Interface',
    description: 'Manage books, members, and transactions easily with a user-friendly dashboard designed for librarians of all levels.',
  },
  {
    icon: Database,
    title: 'Powerful Database Support',
    description: 'Handle tens of thousands of books effortlessly with our optimized local and cloud database storage, fully scalable for multiple libraries.',
  },
  {
    icon: ShieldCheck,
    title: 'Advanced Security',
    description: 'Keep your library data protected with role-based access control, encrypted backups, and secure cloud storage options.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Experience instant search, quick check-in/out, and smooth database operations, even with thousands of records.',
  },
  {
    icon: Layers,
    title: 'In-App Addons & Reports',
    description: 'Generate detailed reports, add modules, or customize workflows to fit your library\u2019s specific needs without extra effort.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium tracking-widest uppercase text-primary mb-4"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl lg:text-4xl font-bold text-on-surface tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Your all-in-one solution for modern library management
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-8 bg-surface-lowest rounded-lg hover:shadow-[0_20px_40px_rgba(27,28,25,0.05)] transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-surface-container text-primary rounded-md flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-3">{feature.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
