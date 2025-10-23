"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get to Know Me
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
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
                className="group block bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all"
              >
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-neutral-300 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">
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
