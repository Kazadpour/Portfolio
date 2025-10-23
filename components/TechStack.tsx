"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const devTools = [
  { name: "Figma", image: "/images/Tools/Figma.png", category: "Design" },
  {
    name: "VS Code",
    image: "/images/Tools/VSCode.png",
    category: "Code Editor",
  },
  {
    name: "GitHub",
    image: "/images/Tools/Github.png",
    category: "Version Control",
  },
  { name: "Next.js", image: "/images/Tools/Nextjs.png", category: "Framework" },
  {
    name: "TypeScript",
    image: "/images/Tools/TypeScript.png",
    category: "Language",
  },
  {
    name: "Tailwind CSS",
    image: "/images/Tools/TailwindCSS.png",
    category: "Styling",
  },
  {
    name: "React Query",
    image: "/images/Tools/React Query.png",
    category: "Data Fetching",
  },
  {
    name: "Zustand",
    image: "/images/Tools/Zustand.png",
    category: "State Management",
  },
  { name: "Vercel", image: "/images/Tools/Vercel.png", category: "Hosting" },
  {
    name: "Framer",
    image: "/images/Tools/Framer.png",
    category: "Prototyping",
  },
  {
    name: "Azure",
    image: "/images/Tools/Microsoft_Azure.png",
    category: "Cloud",
  },
  { name: "Warp", image: "/images/Tools/Warp.png", category: "Terminal" },
];

const apps = [
  { name: "Arc", image: "/images/Apps/Arc.png", category: "Browser" },
  {
    name: "Raycast",
    image: "/images/Apps/Raycast.png",
    category: "Productivity",
  },
  { name: "Notion", image: "/images/Apps/Notion.png", category: "Notes" },
  { name: "Spotify", image: "/images/Apps/Spotify.png", category: "Music" },
  {
    name: "Discord",
    image: "/images/Apps/Discord.png",
    category: "Communication",
  },
  { name: "Slack", image: "/images/Apps/Slack.png", category: "Work" },
  { name: "ChatGPT", image: "/images/Apps/ChatGPT.png", category: "AI" },
  { name: "Todoist", image: "/images/Apps/Todoist.png", category: "Tasks" },
  { name: "Spark", image: "/images/Apps/Spark.png", category: "Email" },
  { name: "Amie", image: "/images/Apps/Amie.png", category: "Calendar" },
  { name: "Books", image: "/images/Apps/Books.png", category: "Reading" },
  { name: "Chrome", image: "/images/Apps/Chrome.png", category: "Browser" },
  {
    name: "Duolingo",
    image: "/images/Apps/Duolingo.png",
    category: "Learning",
  },
  { name: "Subbi", image: "/images/Apps/Subbi.png", category: "Subscriptions" },
  { name: "Twitch", image: "/images/Apps/Twitch.png", category: "Streaming" },
];

const games = [
  { name: "Game 1", image: "/images/Games/Web.png", category: "Action" },
  { name: "Game 2", image: "/images/Games/Web-2.png", category: "RPG" },
  { name: "Game 3", image: "/images/Games/Web-3.png", category: "Puzzle" },
  { name: "Game 4", image: "/images/Games/Web-4.png", category: "Adventure" },
  { name: "Game 5", image: "/images/Games/Web-5.png", category: "Sports" },
];

interface CardProps {
  name: string;
  image: string;
  category: string;
  index: number;
  isLight: boolean;
  imageOnly?: boolean;
}

const Card = ({
  name,
  image,
  category,
  index,
  isLight,
  imageOnly = false,
}: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className={`group relative rounded-2xl overflow-hidden border ${
      isLight
        ? "bg-white border-gray-200 hover:border-gray-400"
        : "bg-neutral-900 border-neutral-800 hover:border-neutral-600"
    } transition-all duration-300`}
    style={
      isLight
        ? {
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }
        : {
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }
    }
  >
    {/* Image Container */}
    <div
      className={`aspect-square ${
        imageOnly ? "p-0" : "p-12"
      } flex items-center justify-center ${
        isLight
          ? "bg-gradient-to-br from-gray-50 to-gray-100"
          : "bg-gradient-to-br from-neutral-800 to-neutral-900"
      }`}
    >
      <div
        className={`relative ${imageOnly ? "w-full h-full" : "w-2/3 h-2/3"}`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className={`${
            imageOnly ? "object-cover" : "object-contain"
          } group-hover:scale-110 transition-transform duration-300`}
        />
      </div>
    </div>

    {/* Info Bar */}
    {!imageOnly && (
      <div
        className={`p-3 flex items-center justify-between ${
          isLight ? "bg-white" : "bg-neutral-900"
        }`}
      >
        <span
          className={`text-sm font-medium ${
            isLight ? "text-black" : "text-white"
          }`}
        >
          {name}
        </span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full border ${
            isLight
              ? "text-gray-600 bg-gray-100 border-gray-300"
              : "text-neutral-400 bg-neutral-800 border-neutral-700"
          }`}
        >
          {category}
        </span>
      </div>
    )}
  </motion.div>
);

export default function TechStack() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            Tech Stacks
          </h2>
          <p
            className={`text-lg max-w-2xl ${
              isLight ? "text-gray-700" : "text-neutral-400"
            }`}
          >
            The dev tools, apps, and games I use and play everyday
          </p>
        </motion.div>

        {/* Dev and Design Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3
            className={`text-2xl font-semibold mb-6 ${
              isLight ? "text-neutral-700" : "text-gray-200"
            }`}
          >
            Dev and Design
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {devTools.map((tool, index) => (
              <Card
                key={tool.name}
                name={tool.name}
                image={tool.image}
                category={tool.category}
                index={index}
                isLight={isLight}
              />
            ))}
          </div>
        </motion.div>

        {/* Apps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3
            className={`text-2xl font-semibold mb-6 ${
              isLight ? "text-neutral-700" : "text-gray-200"
            }`}
          >
            Apps
          </h3>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {apps.map((app, index) => (
                <Card
                  key={app.name}
                  name={app.name}
                  image={app.image}
                  category={app.category}
                  index={index}
                  isLight={isLight}
                />
              ))}
            </div>

            {/* Shameless Plug - positioned to point at Framer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden xl:flex absolute top-[220px] -right-32 flex-col items-center justify-start"
            >
              <div className="relative mb-4">
                <Image
                  src="/images/Arrow Web.svg"
                  alt="Arrow"
                  width={60}
                  height={60}
                  className={`w-16 h-16 ${isLight ? "" : "invert"}`}
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/Shameless plug!.png"
                  alt="Shameless Plug"
                  width={200}
                  height={50}
                  className={`w-auto h-10 ${isLight ? "" : "invert"}`}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Games Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h3
            className={`text-2xl font-semibold mb-6 ${
              isLight ? "text-neutral-700" : "text-gray-200"
            }`}
          >
            Games
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {games.map((game, index) => (
              <Card
                key={game.name}
                name={game.name}
                image={game.image}
                category={game.category}
                index={index}
                isLight={isLight}
                imageOnly={true}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
