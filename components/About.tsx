"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Full-stack development with modern frameworks and best practices. Experience with React, Next.js, TypeScript, Node.js, and enterprise application architecture.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Building scalable data pipelines and ETL workflows. Proficient in Azure Data Factory, Databricks, SQL, and data warehouse design.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Expertise in Azure cloud services, CI/CD automation, infrastructure as code, and containerization with Docker and Kubernetes.",
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description:
      "Leveraging ML algorithms for recommendation systems, predictive analytics, and intelligent automation solutions.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl leading-relaxed">
            I'm a software engineer with a passion for building scalable
            systems and data-driven solutions. Currently working on enterprise
            commerce platforms and cloud infrastructure, I combine technical
            expertise with a focus on delivering measurable business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gray-900 border border-gray-800">
                    <Icon className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border border-gray-800 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-200">
                Software Engineer
              </h4>
              <p className="text-gray-400 text-sm mb-2">London Drugs</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Leading D365 Commerce implementation and Azure cloud
                infrastructure development. Building data pipelines and internal
                tooling to support enterprise-scale retail operations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
