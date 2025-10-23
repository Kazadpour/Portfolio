"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    title: "Object Formatter",
    description: "ML-powered web app for formatting data objects",
    type: "browser" as const,
    image: "/images/ObjectFormatter Screenshot.png",
    link: "https://www.objectformatter.com/",
    tags: ["React", "Node.js", "ML"],
    logo: "/images/ObjectFormatter Logo.svg",
    secondaryLogo: null,
  },
  {
    id: 2,
    title: "LD Crimson Inspector",
    description: "Automated code quality & compliance tool",
    type: "browser" as const,
    image: "/images/Crimson Inspector Screenshot.png",
    link: "https://github.com/Kazadpour/LD_Crimson_Inspector",
    tags: ["Python", "DevOps", "CI/CD"],
    logo: "/images/LondonDrugs.png",
    secondaryLogo: null,
  },
  {
    id: 3,
    title: "Azure Fabric Data Pipelines",
    description: "Scalable data ingestion & ETL workflows",
    type: "ipad" as const,
    image: "/images/MS Fabric Screenshot.png",
    link: "#",
    tags: ["Azure", "Databricks", "ETL"],
    logo: "/images/MS Fabric Logo.png",
    secondaryLogo: "/images/Microsoft Logo.jpg",
  },
];

const BrowserMockup = ({ image, title }: { image: string; title: string }) => (
  <div className="relative w-full">
    {/* Browser chrome */}
    <div className="bg-neutral-900 rounded-t-xl border border-neutral-800 p-3">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex-1 bg-neutral-800 rounded px-3 py-1 text-xs text-neutral-400 ml-2">
          {title}
        </div>
      </div>
    </div>
    {/* Browser content */}
    <div className="relative aspect-[16/10] bg-neutral-950 border-x border-b border-neutral-800 rounded-b-xl overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover object-top" />
    </div>
  </div>
);

const IPadMockup = ({ image, title }: { image: string; title: string }) => (
  <div className="relative w-full max-w-2xl mx-auto">
    {/* iPad frame */}
    <div className="bg-neutral-900 rounded-3xl p-4 border border-neutral-800">
      {/* iPad screen */}
      <div className="relative aspect-[4/3] bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
);

export default function SelectedWorks() {
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
            Selected Works
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            A curated showcase of impactful projects spanning enterprise
            systems, data engineering, and web applications.
          </p>
        </motion.div>

        <div className="space-y-16">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-800 overflow-visible"
              style={{
                boxShadow:
                  "0 10px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                perspective: "2500px",
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center overflow-visible">
                {/* Project Info */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex gap-2 mb-4">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(work.logo || work.secondaryLogo) && (
                    <div className="mb-4 flex items-center gap-4">
                      {work.logo && (
                        <Image
                          src={work.logo}
                          alt="Company Logo"
                          width={200}
                          height={80}
                          className="h-16 w-auto"
                        />
                      )}
                      {work.secondaryLogo && (
                        <Image
                          src={work.secondaryLogo}
                          alt="Secondary Logo"
                          width={200}
                          height={80}
                          className="h-16 w-auto"
                        />
                      )}
                    </div>
                  )}
                  <h3 className="text-3xl font-bold mb-4">{work.title}</h3>
                  <p className="text-neutral-400 text-lg mb-6">
                    {work.description}
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium"
                      style={{
                        background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(39, 39, 42, 1))",
                        boxShadow:
                          "0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      View Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>

                {/* Device Mockup */}
                <motion.div
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                  initial={{
                    rotateY: index % 2 === 0 ? -15 : 15,
                    rotateX: 5,
                    rotateZ: index % 2 === 0 ? 2 : -2,
                    z: 0,
                  }}
                  whileInView={{
                    rotateY: index % 2 === 0 ? -10 : 10,
                    rotateX: 5,
                    rotateZ: index % 2 === 0 ? 3 : -3,
                    z: 100,
                  }}
                  whileHover={{
                    rotateY: index % 2 === 0 ? -5 : 5,
                    rotateX: 2,
                    rotateZ: 0,
                    z: 150,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow:
                      "0 40px 100px rgba(0, 0, 0, 0.7), 0 20px 50px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {work.type === "browser" ? (
                    <BrowserMockup image={work.image} title={work.title} />
                  ) : (
                    <IPadMockup image={work.image} title={work.title} />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
