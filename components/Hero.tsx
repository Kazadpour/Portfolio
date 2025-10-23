"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  ArrowDownIcon,
} from "./icons/CustomIcons";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/Signature White.png"
              alt="Khashayar's Signature"
              width={800}
              height={300}
              className="h-48 md:h-64 w-auto invert brightness-0 contrast-200 signature-draw"
              priority
            />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-neutral-400">Khashayar</span>{" "}
            <span className="inline-block animate-wave">👋</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-2xl">
            Software Engineer & Data Professional building scalable solutions
            and data-driven experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-52 px-8 py-4 rounded-xl text-white font-medium text-center"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(39, 39, 42, 1))",
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
              }}
              whileHover={{
                background:
                  "linear-gradient(to top, rgba(24, 24, 27, 1), rgba(63, 63, 70, 1))",
                boxShadow:
                  "0 20px 35px -5px rgba(0, 0, 0, 0.6), 0 12px 15px -6px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              See my resume
            </motion.a>

            <motion.a
              href="mailto:kazadpdour25@gmail.com"
              className="w-full sm:w-52 px-8 py-4 rounded-xl text-neutral-950 font-medium text-center"
              style={{
                background:
                  "linear-gradient(to top, rgba(39, 39, 42, 1), rgba(115, 115, 115, 1))",
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
              }}
              whileHover={{
                background:
                  "linear-gradient(to top, rgba(82, 82, 91, 1), rgba(163, 163, 163, 1))",
                boxShadow:
                  "0 20px 35px -5px rgba(0, 0, 0, 0.6), 0 12px 15px -6px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Get in touch
            </motion.a>
          </div>

          <div className="flex gap-4 mb-12">
            <motion.a
              href="https://github.com/Kazadpour"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-neutral-950 hover:bg-neutral-800 transition-colors"
              style={{
                boxShadow:
                  "0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
              whileHover={{
                boxShadow:
                  "0 8px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon className="w-6 h-6 brightness-200" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/khashayar-azadpour/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-neutral-950 hover:bg-neutral-800 transition-colors"
              style={{
                boxShadow:
                  "0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
              whileHover={{
                boxShadow:
                  "0 8px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedInIcon className="w-6 h-6 brightness-200" />
            </motion.a>

            <motion.a
              href="mailto:kazadpdour25@gmail.com"
              className="p-3 rounded-lg bg-neutral-950 hover:bg-neutral-800 transition-colors"
              style={{
                boxShadow:
                  "0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
              whileHover={{
                boxShadow:
                  "0 8px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MailIcon className="w-6 h-6 brightness-200" />
            </motion.a>
          </div>

          <motion.div
            className="inline-flex items-center gap-2 text-neutral-500 text-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Scroll to explore</span>
            <ArrowDownIcon className="w-4 h-4 brightness-150" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
