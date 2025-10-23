"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Books", href: "/books" },
  { name: "Notebook", href: "/notebook" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.nav
      className="fixed top-4 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`mx-auto w-full max-w-7xl backdrop-blur-md rounded-2xl px-20 py-3 transition-colors ${
          isLight
            ? "bg-white/10 border border-black/5"
            : "bg-black/10 border border-white/5"
        }`}
        style={{
          boxShadow: isLight
            ? "0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(0, 0, 0, 0.03)"
            : "0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                src="/images/Logo White.png"
                alt="Logo"
                width={80}
                height={80}
                className="h-12 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.div
                  className={`transition-colors text-sm font-medium ${
                    isLight
                      ? "text-gray-700 hover:text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Social Media & Theme Toggle - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/khashayar-azadpour/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className={`w-6 h-6 transition-colors ${
                  isLight
                    ? "text-gray-700 hover:text-black"
                    : "text-neutral-400 hover:text-white"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Kazadpour"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className={`w-6 h-6 transition-colors ${
                  isLight
                    ? "text-gray-700 hover:text-black"
                    : "text-neutral-400 hover:text-white"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            {/* Divider */}
            <div
              className={`w-px h-6 ${
                isLight ? "bg-neutral-400/50" : "bg-neutral-600/50"
              }`}
            />

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`transition-colors ${
                isLight
                  ? "text-gray-700 hover:text-black"
                  : "text-neutral-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              boxShadow:
                "0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-white rounded"
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded"
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
        >
          <div className="pt-4 pb-2 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  className="px-4 py-3 rounded-lg bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm font-medium"
                  initial={{ x: -20, opacity: 0 }}
                  animate={
                    isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                  }
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
