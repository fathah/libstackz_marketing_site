"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CONSOLE_URL } from "@/constants/constants";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-start overflow-hidden"
      style={{
        minHeight: "100svh",
        backgroundImage: "url(/assets/images/hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface/80 to-transparent z-0" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-34 lg:pt-38 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-on-surface mb-6 leading-[1.1]"
          style={{ letterSpacing: "-0.02em" }}
        >
          Every book deserves <br />
          <span className="text-primary">to be found</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base text-on-surface-variant mb-8 max-w-lg mx-auto leading-relaxed"
        >
          The simple, powerful system that keeps your catalog organized, your
          members happy, and your shelves running smoothly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href={CONSOLE_URL}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-on-primary rounded-full transition-all duration-300 hover:brightness-110"
            style={{
              background:
                "linear-gradient(180deg, var(--primary) 0%, var(--primary-container) 100%)",
            }}
          >
            Get started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
