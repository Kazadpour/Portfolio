"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

const sections = [
  {
    id: 1,
    title: "About Me",
    description: "Learn about my journey as a developer and problem solver.",
    image: "/images/Widget Image/About me.png",
    link: "/about",
  },
  {
    id: 2,
    title: "Notebook",
    description: "Thoughts, insights, and lessons from my experiences.",
    image: "/images/Widget Image/Notebook.png",
    link: "/notebook",
  },
  {
    id: 3,
    title: "Bookshelf",
    description: "Books that have shaped my thinking and development philosophy.",
    image: "/images/Widget Image/Bookshelf.png",
    link: "/books",
  },
  {
    id: 4,
    title: "Tech Stack",
    description: "Tools and technologies I use to build great products.",
    image: "/images/Widget Image/Tech Stack.png",
    link: "/tech-stack",
  },
];

export default function GetToKnowMe() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            Get to Know Me
          </h2>
          <p
            className={`text-lg max-w-2xl ${
              isLight ? "text-gray-700" : "text-neutral-400"
            }`}
          >
            Explore different facets of my work, interests, and experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={section.link}
                className={`group block rounded-3xl border overflow-hidden transition-all ${
                  isLight
                    ? "bg-white border-gray-200 hover:border-gray-300"
                    : "bg-neutral-900 border-neutral-800 hover:border-neutral-700"
                }`}
                style={
                  isLight
                    ? {
                        boxShadow:
                          "0 10px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(0, 0, 0, 0.03)",
                      }
                    : {
                        boxShadow:
                          "0 10px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                      }
                }
              >
                <div className="p-6 text-center">
                  <h3
                    className={`text-2xl font-bold mb-2 transition-colors ${
                      isLight
                        ? "text-gray-800 group-hover:text-gray-600"
                        : "text-white group-hover:text-neutral-300"
                    }`}
                  >
                    {section.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isLight ? "text-gray-700" : "text-neutral-400"
                    }`}
                  >
                    {section.description}
                  </p>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
