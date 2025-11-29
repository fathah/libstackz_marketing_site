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
    description: 'Generate detailed reports, add modules, or customize workflows to fit your library’s specific needs without extra effort.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold text-lg mb-2"
          >
            Libstackz
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900"
          >
            Your all-in-one solution for modern library management
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-primary/10 rounded-xl hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
