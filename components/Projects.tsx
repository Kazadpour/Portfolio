"use client";

import { motion } from "framer-motion";
import { GithubIcon, SendIcon } from "./icons/CustomIcons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "London Drugs – D365 Commerce Rollout",
    description:
      "Led enterprise-wide implementation of Microsoft Dynamics 365 Commerce platform, modernizing retail operations across 80+ stores with seamless integration of POS systems, inventory management, and customer analytics.",
    tags: ["D365", "Azure", "Retail", "Enterprise"],
    link: "#",
  },
  {
    title: "Azure Fabric Data Ingestion Pipelines",
    description:
      "Architected and deployed scalable data ingestion pipelines using Azure Data Factory and Databricks, processing millions of records daily with automated ETL workflows and real-time monitoring.",
    tags: ["Azure", "Data Engineering", "ETL", "Databricks"],
  },
  {
    title: "LD Crimson Inspector",
    description:
      "Developed internal tool for automated code quality and compliance checking across microservices architecture, reducing manual review time by 70% and improving deployment reliability.",
    tags: ["DevOps", "CI/CD", "Quality Assurance", "Python"],
    github: "https://github.com/Kazadpour/LD_Crimson_Inspector",
  },
  {
    title: "Object Formatter Web App",
    description:
      "Built full-stack web application leveraging machine learning algorithms to format all types of data objects, enhancing data consistency and usability for end-users.",
    tags: ["Machine Learning", "React", "Node.js", "MongoDB"],
    github: "https://github.com/Kazadpour/Object_Formatter",
    link: "https://www.objectformatter.com/",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            A selection of work spanning enterprise systems, data engineering,
            and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-gray-900 text-gray-400 border border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <GithubIcon className="w-5 h-5 brightness-200" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <SendIcon className="w-5 h-5 brightness-200" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
