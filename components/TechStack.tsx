"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  { name: "Next.js", icon: "/images/Tools/Nextjs.png" },
  { name: "React", icon: "/images/Tools/React Hook Form.png" },
  { name: "TypeScript", icon: "/images/Tools/TypeScript.png" },
  { name: "Tailwind CSS", icon: "/images/Tools/TailwindCSS.png" },
  { name: "Figma", icon: "/images/Tools/Figma.png" },
  { name: "GitHub", icon: "/images/Tools/Github.png" },
  { name: "VS Code", icon: "/images/Tools/VSCode.png" },
  { name: "Vercel", icon: "/images/Tools/Vercel.png" },
  { name: "Framer", icon: "/images/Tools/Framer.png" },
  { name: "Sanity", icon: "/images/Tools/Sanity.png" },
  { name: "React Query", icon: "/images/Tools/React Query.png" },
  { name: "Zustand", icon: "/images/Tools/Zustand.png" },
  { name: "Warp", icon: "/images/Tools/Warp.png" },
  { name: "Expo", icon: "/images/Tools/Expo.png" },
  { name: "Zod", icon: "/images/Tools/Zod.png" },
];

export default function TechStack() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300 bg-gray-900/50"
            >
              <div className="relative w-16 h-16 mb-3">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-gray-400 text-center group-hover:text-gray-300 transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
