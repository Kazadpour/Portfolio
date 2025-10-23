"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

interface Note {
  id: string;
  title: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const notes: Note[] = [
  {
    id: "1",
    title: "Ultimate guide to the App Router in Next.js 13",
    coverImage: "/images/Image 59.png",
    date: "23rd Oct 2025",
    readTime: "7 min read",
    category: "Dev",
    slug: "nextjs-app-router-guide",
  },
  {
    id: "2",
    title: "Ultimate guide to the App Router in Next.js 13",
    coverImage: "/images/note banner.png",
    date: "23rd Oct 2025",
    readTime: "7 min read",
    category: "Design",
    slug: "design-systems-guide",
  },
];

// Group notes by category
const groupedNotes = notes.reduce((acc, note) => {
  if (!acc[note.category]) {
    acc[note.category] = [];
  }
  acc[note.category].push(note);
  return acc;
}, {} as Record<string, Note[]>);

export default function Notebook() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            Notebook
          </h1>
          <p
            className={`text-lg ${
              isLight ? "text-gray-600" : "text-gray-400"
            }`}
          >
            My thoughts, insights, and reflections.
          </p>
        </motion.div>

        {/* Categories with notes */}
        <div className="space-y-16">
          {Object.entries(groupedNotes).map(([category, categoryNotes], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <h2
                  className={`text-2xl md:text-3xl font-bold ${
                    isLight ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  {category}
                </h2>
                <span
                  className={`text-sm ${
                    isLight ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {categoryNotes.length} note{categoryNotes.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Notes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryNotes.map((note, noteIndex) => (
                  <motion.div
                    key={note.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + noteIndex * 0.1,
                    }}
                  >
                    <Link href={`/notebook/${note.slug}`}>
                      <div
                        className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] ${
                          isLight
                            ? "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
                            : "bg-neutral-900 border-neutral-800 hover:border-neutral-700 hover:shadow-2xl"
                        }`}
                      >
                        {/* Cover Image */}
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={note.coverImage}
                            alt={note.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <h3
                            className={`text-lg font-semibold mb-3 line-clamp-2 ${
                              isLight
                                ? "text-black group-hover:text-gray-700"
                                : "text-white group-hover:text-gray-300"
                            }`}
                          >
                            {note.title}
                          </h3>
                          <div
                            className={`flex items-center gap-2 text-sm ${
                              isLight ? "text-gray-600" : "text-gray-500"
                            }`}
                          >
                            <span>{note.date}</span>
                            <span>—</span>
                            <span>{note.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {Object.keys(groupedNotes).length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-center py-20 ${
              isLight ? "text-gray-500" : "text-gray-500"
            }`}
          >
            <p className="text-lg">No notes yet. Check back soon!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
