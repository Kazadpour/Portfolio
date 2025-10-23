"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, MailIcon } from "./icons/CustomIcons";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Books", href: "/books" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Kazadpour",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khashayar-azadpour/",
    icon: LinkedInIcon,
  },
  {
    name: "Email",
    href: "mailto:kazadpdour25@gmail.com",
    icon: MailIcon,
  },
];

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <footer
      className={`border-t px-6 py-12 mt-20 ${
        isLight ? "border-gray-200" : "border-neutral-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr_1fr] gap-12 mb-12">
          {/* Logo and Tagline */}
          <div>
            <Link href="/">
              <Image
                src={
                  isLight ? "/images/Logo Black.png" : "/images/Logo White.png"
                }
                alt="Logo"
                width={200}
                height={200}
                className="h-20 w-auto mb-4"
              />
            </Link>
            <p
              className={`text-sm italic ${
                isLight ? "text-black" : "text-neutral-400"
              }`}
            >
              "Building the future, one line of code at a time."
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                isLight ? "text-black" : "text-white"
              }`}
            >
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isLight
                        ? "text-black hover:text-gray-700"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                isLight ? "text-black" : "text-white"
              }`}
            >
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-colors ${
                      isLight
                        ? "bg-gray-100 hover:bg-gray-200"
                        : "bg-neutral-950 hover:bg-neutral-800"
                    }`}
                    style={
                      isLight
                        ? {
                            boxShadow:
                              "0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(0, 0, 0, 0.03)",
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
                              "0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(0, 0, 0, 0.05)",
                            scale: 1.05,
                          }
                        : {
                            boxShadow:
                              "0 8px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                            scale: 1.05,
                          }
                    }
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon
                      className={`w-6 h-6 ${isLight ? "" : "invert"}`}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`pt-8 border-t ${
            isLight ? "border-gray-200" : "border-neutral-800"
          }`}
        >
          <p
            className={`text-sm text-left ${
              isLight ? "text-black" : "text-neutral-500"
            }`}
          >
            © {new Date().getFullYear()} Khashayar Azadpour. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
