"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            A little bit about me
          </h2>
          <p className="text-gray-400 text-lg">Who am I and What I do</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <div>
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isLight ? "text-neutral-700" : "text-gray-200"
                }`}
              >
                WHO I AM:
              </h3>
              <p
                className={`leading-relaxed ${
                  isLight ? "text-black" : "text-gray-400"
                }`}
              >
                Hey, I'm Khashayar Azadpour. I'm a software engineer who loves
                building things that actually make a difference — whether that's
                a data pipeline that runs smoother, a tool that saves hours of
                manual work, or a clean, modern interface that just feels right.
                I'm naturally curious and always learning something new, from
                backend systems to UI design. I like things that are fast,
                efficient, and well thought out — and I try to bring that same
                mindset into both my work and my personal projects.
              </p>
            </div>

            <div>
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isLight ? "text-neutral-700" : "text-gray-200"
                }`}
              >
                WHAT I DO:
              </h3>
              <p
                className={`leading-relaxed ${
                  isLight ? "text-black" : "text-gray-400"
                }`}
              >
                I spend most of my time building and improving systems that help
                businesses run smarter. Right now, I work with Microsoft
                Dynamics 365 Commerce, Azure, and Fabric, connecting different
                platforms together and making sure data flows seamlessly. I also
                create internal tools that make troubleshooting and automation
                easier for IT teams. On the side, I enjoy working on my own
                ideas — from AI-powered websites to small apps — where I get to
                experiment with new tech and creative design approaches. For me,
                coding isn't just a job — it's a way of thinking, solving
                problems, and expressing ideas.
              </p>
            </div>

            <div>
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isLight ? "text-neutral-700" : "text-gray-200"
                }`}
              >
                WHAT I DID:
              </h3>
              <p
                className={`leading-relaxed ${
                  isLight ? "text-black" : "text-gray-400"
                }`}
              >
                I've been lucky to work on some really interesting projects. I
                helped roll out Dynamics 365 Store Commerce across dozens of
                stores, built data integration pipelines that bring together
                real-time e-commerce insights, and created tools like LD Crimson
                Inspector, which helps teams analyze system logs faster. Outside
                of work, I've built personal apps and websites, explored
                AI-based ideas, and even started designing my own portfolio and
                brand. Every project — big or small — has taught me something
                new about technology, teamwork, and how to turn an idea into
                something real.
              </p>
            </div>

            <div
              className={`mt-8 pt-8 border-t ${
                isLight ? "border-gray-300" : "border-gray-800"
              }`}
            >
              <p
                className={`leading-relaxed ${
                  isLight ? "text-black" : "text-gray-400"
                }`}
              >
                Feel free to reach out to me via{" "}
                <a
                  href="mailto:kazadpdour25@gmail.com"
                  className={`underline transition-colors ${
                    isLight
                      ? "text-black hover:text-neutral-600 decoration-neutral-400 hover:decoration-neutral-600"
                      : "text-gray-200 hover:text-white decoration-gray-600 hover:decoration-white"
                  }`}
                >
                  email
                </a>
                , or follow me on{" "}
                <a
                  href="https://github.com/Kazadpour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline transition-colors ${
                    isLight
                      ? "text-black hover:text-neutral-600 decoration-neutral-400 hover:decoration-neutral-600"
                      : "text-gray-200 hover:text-white decoration-gray-600 hover:decoration-white"
                  }`}
                >
                  Github
                </a>
                . Want to see where I have worked? Check out my{" "}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline transition-colors ${
                    isLight
                      ? "text-black hover:text-neutral-600 decoration-neutral-400 hover:decoration-neutral-600"
                      : "text-gray-200 hover:text-white decoration-gray-600 hover:decoration-white"
                  }`}
                >
                  resume
                </a>
                , or connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/khashayar-azadpour/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline transition-colors ${
                    isLight
                      ? "text-black hover:text-neutral-600 decoration-neutral-400 hover:decoration-neutral-600"
                      : "text-gray-200 hover:text-white decoration-gray-600 hover:decoration-white"
                  }`}
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>

            <div className="mt-8">
              <p
                className={`leading-relaxed mb-4 ${
                  isLight ? "text-black" : "text-gray-400"
                }`}
              >
                Let's build something great,
              </p>
              <Image
                src="/images/Signature White.png"
                alt="Khashayar's Signature"
                width={800}
                height={300}
                className={`h-48 md:h-56 w-auto ${
                  isLight ? "brightness-0" : "invert brightness-0 contrast-200"
                }`}
              />
            </div>
          </motion.div>

          {/* Right Side - Portrait Image and Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-80 xl:w-96 flex flex-col items-center gap-6"
          >
            <div className="w-full aspect-square relative overflow-hidden rounded-2xl">
              <Image
                src="/images/Square Portrait.png"
                alt="Khashayar Azadpour"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.a
              href="/contact"
              className={`px-6 py-3 rounded-xl font-medium text-center text-sm ${
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
            >
              Get in touch! 📮
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
