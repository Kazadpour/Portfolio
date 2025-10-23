"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  ArrowDownIcon,
} from "./icons/CustomIcons";
import { useTheme } from "@/contexts/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === "light";

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
              className={`h-48 md:h-64 w-auto signature-draw ${
                isLight ? "brightness-0" : "invert brightness-0 contrast-200"
              }`}
              priority
            />
          </motion.div>

          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            <span className={isLight ? "text-gray-500" : "text-neutral-400"}>
              Hi, I'm
            </span>{" "}
            <span className={isLight ? "text-black" : "text-white"}>
              Khashayar
            </span>{" "}
            <span className="inline-block animate-wave">👋</span>
          </h1>

          <p
            className={`text-xl md:text-2xl mb-8 max-w-2xl ${
              isLight ? "text-gray-700" : "text-neutral-400"
            }`}
          >
            Software Engineer & Data Professional building scalable solutions
            and data-driven experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-52 px-8 py-4 rounded-xl font-medium text-center ${
                isLight ? "text-white" : "text-white"
              }`}
              style={
                isLight
                  ? {
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(39, 39, 42, 1))",
                      boxShadow:
                        "0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 8px 15px -6px rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
                    }
                  : {
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(39, 39, 42, 1))",
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
                    }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                scale: { duration: 0.2 },
              }}
            >
              See my resume
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                scale: { duration: 0.2 },
              }}
            >
              <Link
                href="/contact"
                className={`block w-full sm:w-52 px-8 py-4 rounded-xl font-medium text-center ${
                  isLight ? "text-black" : "text-neutral-950"
                }`}
                style={
                  isLight
                    ? {
                        background:
                          "linear-gradient(to top, rgba(230, 230, 230, 1), rgba(255, 255, 255, 1))",
                        boxShadow:
                          "0 10px 30px -5px rgba(0, 0, 0, 0.25), 0 8px 15px -6px rgba(0, 0, 0, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)",
                      }
                    : {
                        background:
                          "linear-gradient(to top, rgba(39, 39, 42, 1), rgba(115, 115, 115, 1))",
                        boxShadow:
                          "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
                      }
                }
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          <div className="flex gap-4 mb-12">
            <motion.a
              href="https://github.com/Kazadpour"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-colors ${
                isLight
                  ? "bg-white hover:bg-gray-100"
                  : "bg-neutral-950 hover:bg-neutral-800"
              }`}
              style={
                isLight
                  ? {
                      boxShadow:
                        "0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(0, 0, 0, 0.05)",
                    }
                  : {
                      boxShadow:
                        "0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                    }
              }
              whileHover={
                isLight
                  ? {
                      boxShadow:
                        "0 8px 25px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(0, 0, 0, 0.08)",
                      scale: 1.05,
                    }
                  : {
                      boxShadow:
                        "0 8px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                      scale: 1.05,
                    }
              }
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon
                className={`w-6 h-6 ${isLight ? "" : "brightness-200"}`}
              />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/khashayar-azadpour/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-colors ${
                isLight
                  ? "bg-white hover:bg-gray-100"
                  : "bg-neutral-950 hover:bg-neutral-800"
              }`}
              style={
                isLight
                  ? {
                      boxShadow:
                        "0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(0, 0, 0, 0.05)",
                    }
                  : {
                      boxShadow:
                        "0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                    }
              }
              whileHover={
                isLight
                  ? {
                      boxShadow:
                        "0 8px 25px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(0, 0, 0, 0.08)",
                      scale: 1.05,
                    }
                  : {
                      boxShadow:
                        "0 8px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                      scale: 1.05,
                    }
              }
              whileTap={{ scale: 0.95 }}
            >
              <LinkedInIcon
                className={`w-6 h-6 ${isLight ? "" : "brightness-200"}`}
              />
            </motion.a>

            <motion.a
              href="mailto:kazadpdour25@gmail.com"
              className={`p-3 rounded-lg transition-colors ${
                isLight
                  ? "bg-white hover:bg-gray-100"
                  : "bg-neutral-950 hover:bg-neutral-800"
              }`}
              style={
                isLight
                  ? {
                      boxShadow:
                        "0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(0, 0, 0, 0.05)",
                    }
                  : {
                      boxShadow:
                        "0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                    }
              }
              whileHover={
                isLight
                  ? {
                      boxShadow:
                        "0 8px 25px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(0, 0, 0, 0.08)",
                      scale: 1.05,
                    }
                  : {
                      boxShadow:
                        "0 8px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                      scale: 1.05,
                    }
              }
              whileTap={{ scale: 0.95 }}
            >
              <MailIcon
                className={`w-6 h-6 ${isLight ? "" : "brightness-200"}`}
              />
            </motion.a>
          </div>

          <motion.div
            className={`inline-flex items-center gap-2 text-sm ${
              isLight ? "text-neutral-500" : "text-white"
            }`}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Scroll to explore</span>
            <ArrowDownIcon
              className={`w-4 h-4 ${isLight ? "brightness-150" : ""}`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
