"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, MailIcon, ArrowRightIcon } from "./icons/CustomIcons";

const contacts = [
  {
    icon: MailIcon,
    label: "Email",
    value: "kazadpdour25@gmail.com",
    href: "mailto:kazadpdour25@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Kazadpour",
    href: "https://github.com/Kazadpour",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/khashayar-azadpour/",
    href: "https://www.linkedin.com/in/khashayar-azadpour/",
  },
];

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            I'm always open to discussing new opportunities, collaborations, or
            just chatting about technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-gray-700 transition-colors">
                    <Icon className="w-6 h-6 brightness-200" />
                  </div>
                  <ArrowRightIcon className="w-5 h-5 brightness-150 group-hover:brightness-200 transition-all" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{contact.label}</h3>
                <p className="text-gray-400 text-sm">{contact.value}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>
            Built with Next.js, Tailwind CSS, and Framer Motion
            <br />© {new Date().getFullYear()} Khashayar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
