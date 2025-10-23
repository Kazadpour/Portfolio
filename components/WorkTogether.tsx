"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WorkTogether() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl">
              Have a project in mind or want to collaborate? I'd love to hear
              from you.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-black text-lg font-semibold transition-all hover:scale-105 whitespace-nowrap"
              style={{
                background: "linear-gradient(to top, rgba(212, 212, 212, 1), rgba(255, 255, 255, 1))",
                boxShadow:
                  "0 10px 30px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(255, 255, 255, 0.1)",
              }}
            >
              Get in Touch
              <span className="text-xl">➤</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
