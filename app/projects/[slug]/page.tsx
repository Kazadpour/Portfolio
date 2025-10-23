"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import AmbientLights from "@/components/AmbientLights";
import Footer from "@/components/Footer";
import Link from "next/link";

interface ProjectSection {
  title: string;
  content: string;
}

interface ProjectData {
  title: string;
  emoji: string;
  tagline: string;
  coverImage: string;
  logo?: string;
  sections: ProjectSection[];
  techStack: string[];
  link?: string;
}

const projectsData: Record<string, ProjectData> = {
  "object-formatter": {
    title: "Object Formatter",
    emoji: "🧩",
    tagline: "A fast, modern web app for formatting, validating, and viewing JSON, XML, and YAML data",
    coverImage: "/images/ObjectFormatter Screenshot.png",
    logo: "/images/ObjectFormatter Logo.svg",
    link: "https://objectformatter.com",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Prettier", "js-yaml", "xml-formatter"],
    sections: [
      {
        title: "Overview",
        content: "Object Formatter started as a small side project to simplify one of the most common annoyances in development — viewing, formatting, and comparing JSON, XML, and YAML data. I built it to solve a personal pain point: switching between multiple tools and tabs just to inspect different data structures. The goal was simple — create a fast, modern, and visually clean web app that lets users format, validate, and view objects instantly in any format, all within a single, minimal interface.\n\nI envisioned Object Formatter as more than just a \"pretty printer.\" I wanted it to feel like a developer's everyday companion — something lightweight enough to open in a browser within seconds but powerful enough to handle complex, deeply nested objects.",
      },
      {
        title: "Tech Stack",
        content: "I built the application using React for the front end and hosted it on Vercel for performance and simplicity. The app leverages Next.js for its hybrid static-dynamic rendering, ensuring fast load times and efficient SEO handling.\n\nFor the formatting and parsing logic, I used Prettier and js-yaml for JSON and YAML conversions, and xml-formatter for XML beautification.\n\nStyling was inspired by the clean, dark aesthetics of Vercel's own site — sleek typography, subtle animations, and an auto dark/light theme switcher built with Tailwind CSS. The design goal was to make it visually elegant yet distraction-free.",
      },
      {
        title: "Challenges",
        content: "Early on, one of the biggest challenges was managing large data payloads. Many formatters freeze or lag when processing files over a few megabytes, especially when performing bi-directional conversions (like YAML ↔ JSON). I had to optimize the rendering process using React.memo and Web Workers to keep the interface smooth and responsive.\n\nAnother challenge was maintaining formatting accuracy when converting between formats. YAML in particular introduced difficulties due to indentation sensitivity and anchors. Ensuring that data wasn't lost or altered during transformation required a lot of testing and comparison logic.\n\nFinally, I wanted the tool to feel modern — not like a basic textarea with a \"format\" button. Designing an intuitive split-view interface where users could visualize raw and formatted data simultaneously took several iterations in Figma.",
      },
      {
        title: "Solution",
        content: "After refining the UI and performance, I implemented a three-panel layout: input, output, and a format selector. Users can paste or upload data, choose a format, and instantly view the parsed output. I also added smart detection — the app automatically recognizes the structure type (JSON, XML, or YAML) and formats it accordingly.\n\nTo make it even more practical, I integrated copy, download, and share options, plus a future-ready mode for diff comparison between two objects. The goal was not just a viewer, but a developer utility that feels effortless to use.",
      },
      {
        title: "Impact",
        content: "Object Formatter has become a daily driver for me and several developers in my network. It's fast, dependable, and elegant — the kind of tool that feels invisible when you use it because it just works. Building it taught me the importance of combining performance and UX — a clean experience is as valuable as functionality.\n\nThis project also reinforced my interest in designing developer tools with strong visual polish and simplicity — something I plan to continue expanding, possibly adding AI-powered structure explanations and schema detection in future versions.",
      },
    ],
  },
  "ld-crimson-inspector": {
    title: "LD Crimson Inspector",
    emoji: "🧮",
    tagline: "A specialized desktop application for analyzing large Crimson POS log files",
    coverImage: "/images/Crimson Inspector Screenshot.png",
    logo: "/images/LondonDrugs.png",
    techStack: ["Python", "Tkinter", "ttkbootstrap", "Pandas", "Threading", "Regex"],
    sections: [
      {
        title: "Overview",
        content: "LD Crimson Inspector is a specialized desktop application I developed to help London Drugs' IT team analyze large Crimson POS log files quickly and accurately. The tool was born out of necessity — during the company's nationwide Dynamics 365 rollout, our support team often dealt with massive 200–700 MB log files containing crucial transaction data. Manual inspection was slow, error-prone, and frustrating.\n\nI created LD Crimson Inspector to transform that process. The idea was to make log analysis as simple as searching a web page — with instant filtering, pattern detection, and intelligent grouping of events.",
      },
      {
        title: "Tech Stack",
        content: "The application was built using Python with Tkinter (later enhanced with ttkbootstrap for a modern UI). It supports offline operation, meaning it can analyze logs without network access — critical for secure store environments.\n\nKey libraries include re (regex) for pattern recognition, threading for performance, and Pandas for data handling. I also integrated custom parsers that identify timestamps, SAF (Store And Forward) codes, and transaction threads.",
      },
      {
        title: "Challenges",
        content: "The main challenge was performance. A typical Crimson log could exceed 500 MB, and naive line-by-line parsing would take minutes. I had to rewrite the parser to process data in chunks using memory-efficient generators.\n\nAnother challenge was the diversity of log structures. Each file had slightly different message patterns and timestamps, requiring flexible pattern detection instead of fixed rules.\n\nFinally, the UI design — balancing readability with dense data — was a struggle. I wanted a modern, dark-mode-friendly interface that technicians could use comfortably for hours.",
      },
      {
        title: "Solution",
        content: "I built a multithreaded parsing engine that could scan gigabytes of data in under two minutes. It automatically identifies transaction boundaries, error codes, and SAF events, then organizes them into a searchable timeline.\n\nThe interface lets users jump between transactions, view failure summaries, and filter by keywords or timestamps. I also added export features to CSV and HTML so findings could be shared in reports.",
      },
      {
        title: "Impact",
        content: "The LD Crimson Inspector drastically improved support workflows. What once took 30–40 minutes of manual log review can now be done in less than 2 minutes. It became an internal essential tool for diagnosing store issues and verifying transaction flows.\n\nBuilding it also sparked ideas for extending it into an AI-powered version capable of suggesting root causes based on log patterns — something I'm currently exploring for future iterations.",
      },
    ],
  },
  "microsoft-fabric-pipeline": {
    title: "Microsoft Fabric Data Engineering Pipeline",
    emoji: "☁️",
    tagline: "A real-time data pipeline connecting Kibo Commerce to Microsoft Fabric for unified analytics",
    coverImage: "/images/MS Fabric Screenshot.png",
    logo: "/images/MS Fabric Logo.png",
    techStack: ["Azure Functions", ".NET 8", "Azure Data Factory", "Microsoft Fabric", "PySpark", "Delta Lake", "Power BI", "OneLake"],
    sections: [
      {
        title: "Overview",
        content: "At London Drugs, I designed and implemented a data engineering pipeline that connects Kibo Commerce webhooks and APIs to Microsoft Fabric (OneLake) for unified analytics. The goal was to modernize how e-commerce data — including orders, payments, shipments, and returns — flows into our analytics environment.\n\nPreviously, data was siloed, manually exported, and hard to keep consistent across systems. My project automated the ingestion, transformation, and storage of this data in real-time, laying the foundation for the company's future data platform.",
      },
      {
        title: "Tech Stack",
        content: "The solution is built on Azure Functions (.NET 8 isolated worker) to process incoming webhook events, Azure Data Factory (ADF) pipelines for orchestration, and Microsoft Fabric for data storage and analytics.\n\nI used PySpark notebooks inside Fabric for transformation and deduplication, Delta Lake for schema evolution and partitioning, and Power BI for reporting. Data is stored in OneLake and organized by domain (Orders, Shipments, Returns, Payments).",
      },
      {
        title: "Challenges",
        content: "The biggest challenge was handling schema evolution and large payloads. Kibo's APIs occasionally changed structure, causing ingestion failures. To fix that, I implemented dynamic deserialization using Newtonsoft.Json and designed a flexible schema auto-merge pattern in PySpark.\n\nAnother issue was token refresh and API pagination — ensuring continuous synchronization without data loss. Building robust retry and checkpoint logic was key to maintaining reliability.",
      },
      {
        title: "Solution",
        content: "The architecture uses an event-driven pattern: each webhook triggers an Azure Function that normalizes and stores the event into OneLake in Delta format. ADF pipelines handle periodic syncs and archival, while PySpark notebooks perform transformations and aggregations for semantic models.\n\nI also built semantic datasets in Fabric — \"OrdersNBA\", \"ShipmentsNBA\", \"PaymentsNBA\", and \"ReturnsNBA\" — for Power BI and executive dashboards.",
      },
      {
        title: "Impact",
        content: "The new pipeline replaced hours of manual exports with automated, near-real-time analytics. It provided better visibility into e-commerce performance, fulfillment delays, and refund trends.\n\nThis project solidified my expertise in data engineering and cloud integration and gave me hands-on experience connecting enterprise commerce systems with Microsoft's latest data platform technologies. It also reinforced my love for building reliable, scalable systems that directly improve how businesses operate.",
      },
    ],
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { theme } = useTheme();
  const isLight = theme === "light";

  const project = projectsData[slug];

  if (!project) {
    return (
      <main className="relative pt-24 min-h-screen px-6 py-20">
        <AmbientLights />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <p className="text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            href="/projects"
            className="text-blue-500 hover:text-blue-400 underline"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative pt-24">
      <AmbientLights />
      <article className="px-6 py-20 max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className={`inline-flex items-center gap-2 text-sm transition-colors ${
              isLight
                ? "text-gray-600 hover:text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-start gap-4 mb-6">
            {project.logo && (
              <div className="flex-shrink-0">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={80}
                  height={80}
                  className={`rounded-xl ${
                    isLight ? "bg-gray-100 p-2" : "bg-neutral-800 p-2"
                  }`}
                />
              </div>
            )}
            <div className="flex-1">
              <h1
                className={`text-4xl md:text-5xl font-bold mb-3 ${
                  isLight ? "text-black" : "text-white"
                }`}
              >
                {project.emoji} {project.title}
              </h1>
              <p
                className={`text-lg md:text-xl ${
                  isLight ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  isLight
                    ? "bg-gray-100 text-gray-700"
                    : "bg-neutral-800 text-gray-300"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Project Button */}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                isLight
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live Project
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          )}
        </motion.div>

        {/* Cover Image with Float Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="float-right ml-8 mb-8 w-full md:w-[500px] lg:w-[600px]"
        >
          <div
            className={`relative rounded-2xl overflow-hidden border ${
              isLight ? "border-gray-200" : "border-neutral-800"
            }`}
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12 clear-none">
          {project.sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${
                  isLight ? "text-black" : "text-white"
                }`}
              >
                {section.title}
              </h2>
              <div
                className={`text-base leading-relaxed whitespace-pre-line ${
                  isLight ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={`mt-16 pt-12 border-t text-center clear-both ${
            isLight ? "border-gray-200" : "border-neutral-800"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            Interested in working together?
          </h3>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all ${
              isLight
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Get in touch
          </Link>
        </motion.div>
      </article>
      <Footer />
    </main>
  );
}
