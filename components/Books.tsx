"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const books = [
  { title: "Atomic Habits", cover: "/images/books/atomic-habits.png" },
  { title: "Deep Work", cover: "/images/books/deep-work.png" },
  { title: "The Pragmatic Programmer", cover: "/images/books/pragmatic-programmer.png" },
  { title: "Sapiens", cover: "/images/books/sapiens.png" },
  { title: "Thinking, Fast and Slow", cover: "/images/books/thinking-fast-slow.png" },
  { title: "Principles", cover: "/images/books/principles.png" },
  { title: "The Naval Almanack", cover: "/images/books/naval-almanack.png" },
  { title: "Build", cover: "/images/books/build.png" },
  { title: "Grokking Algorithms", cover: "/images/books/grokking-algorithms.png" },
  { title: "Refactoring UI", cover: "/images/books/refactoring-ui.png" },
  { title: "Meditations", cover: "/images/books/meditations.png" },
  { title: "The Obstacle Is the Way", cover: "/images/books/obstacle-is-the-way.png" },
  { title: "Ego Is the Enemy", cover: "/images/books/ego-is-the-enemy.png" },
  { title: "Man's Search for Meaning", cover: "/images/books/mans-search-for-meaning.png" },
  { title: "Rework", cover: "/images/books/rework.png" },
  { title: "Show Your Work", cover: "/images/books/show-your-work.png" },
  { title: "Steal Like an Artist", cover: "/images/books/steal-like-an-artist.png" },
  { title: "The War of Art", cover: "/images/books/war-of-art.png" },
  { title: "Make Something Wonderful", cover: "/images/books/make-something-wonderful.png" },
  { title: "Atomic Design", cover: "/images/books/atomic-design.png" },
  { title: "1984", cover: "/images/books/1984.png" },
  { title: "Animal Farm", cover: "/images/books/animal-farm.png" },
  { title: "Snow Crash", cover: "/images/books/snow-crash.png" },
  { title: "Ready Player One", cover: "/images/books/ready-player-one.png" },
];

export default function Books() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Reading List</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Books that have shaped my thinking and approach to work and life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="group relative"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-600 transition-all duration-300">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500 text-center group-hover:text-gray-400 transition-colors line-clamp-2">
                {book.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
