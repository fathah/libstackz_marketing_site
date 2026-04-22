"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-on-surface pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold text-white tracking-tight">
                Libstackz
              </span>
            </Link>
            <p className="text-sm text-white/40 mb-8 max-w-xs leading-relaxed">
              Your all-in-one solution for modern library management.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ziqx.cr/"
                className="text-white/30 hover:text-white transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://mobile.twitter.com/ziqx_cr"
                className="text-white/30 hover:text-white transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/ziqx_cr/"
                className="text-white/30 hover:text-white transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/ziqx/"
                className="text-white/30 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-start-3">
            <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-white/30 text-center">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://ziqx.in"
              className="hover:text-white/60 transition-colors duration-300"
            >
              Ziqx CC LLP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
