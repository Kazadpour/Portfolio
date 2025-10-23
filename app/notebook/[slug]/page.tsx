"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import AmbientLights from "@/components/AmbientLights";
import Footer from "@/components/Footer";

// This would typically come from a CMS or markdown files
const notesData: Record<string, any> = {
  "nextjs-app-router-guide": {
    title: "Ultimate guide to the App Router in Next.js 13",
    date: "23rd Oct 2025",
    readTime: "7 min read",
    coverImage: "/images/image-59.png",
    content: [
      {
        type: "text",
        content:
          "The App Router in Next.js is responsible for handling client-side routing within your application. It provides a declarative and intuitive way to define routes, handle navigation, and manage the URL structure. Here are some key features and concepts of the App Router in Next.js:",
      },
      {
        type: "list",
        items: [
          {
            title: "File-based Routing:",
            content:
              'Next.js uses a file-based routing system, where each page of your application is represented by a file in the "pages" directory. The name of the file determines the corresponding URL path. For example, a file named "about.js" in the "pages" directory will be accessible at the "/about" URL path.',
          },
          {
            title: "Dynamic Routing:",
            content:
              'Next.js supports dynamic routing by using square brackets in the file name or directory structure. For example, a file named "[id].js" can match routes like "/posts/1" or "/users/john". The dynamic segments are accessible as parameters in the page component through the router object.',
          },
          {
            title: "Link Component:",
            content:
              "Next.js provides the <Link> component, which enables client-side navigation between pages. It ensures that the page transition is handled gracefully, without full page reloads. The Link component is used to create navigation links within your Next.js application and offers better performance and user experience compared to traditional anchor tags.",
          },
          {
            title: "Programmatic Navigation:",
            content:
              "Next.js also offers programmatic navigation through the useRouter hook. It allows you to access the router object, which provides methods like push(), replace(), and back() to navigate programmatically within your application.",
          },
          {
            title: "Code Splitting:",
            content:
              "Next.js automatically performs code splitting, which means that only the JavaScript necessary for the current page is loaded. This approach enhances the initial page load time and improves performance.",
          },
        ],
      },
      {
        type: "text",
        content:
          "These are some of the fundamental features and concepts of the App Router in Next.js. However, Next.js is a rapidly evolving framework, and there may be additional features, enhancements or changes to the App Router. To stay updated on the latest features and changes, I recommend referring to the official Next.js documentation or the Next.js GitHub repository.",
      },
    ],
  },
  "design-systems-guide": {
    title: "Ultimate guide to Design Systems",
    date: "23rd Oct 2025",
    readTime: "7 min read",
    coverImage: "/images/note-banner.png",
    content: [
      {
        type: "text",
        content:
          "Design systems are comprehensive collections of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
      },
    ],
  },
};

export default function NotebookPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { theme } = useTheme();
  const isLight = theme === "light";

  const note = notesData[slug];

  if (!note) {
    return (
      <main className="relative pt-24 min-h-screen px-6 py-20">
        <AmbientLights />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Note not found</h1>
          <p className="text-gray-400">
            The note you're looking for doesn't exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative pt-24">
      <AmbientLights />
      <article className="px-6 py-20 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            {note.title}
          </h1>
          <div
            className={`flex items-center gap-3 text-sm ${
              isLight ? "text-gray-600" : "text-gray-400"
            }`}
          >
            <span>{note.date}</span>
            <span>—</span>
            <span>{note.readTime}</span>
          </div>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div
            className={`relative aspect-video rounded-2xl overflow-hidden border ${
              isLight ? "border-gray-200" : "border-neutral-800"
            }`}
          >
            <Image
              src={note.coverImage}
              alt={note.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-lg max-w-none"
        >
          {note.content.map((section: any, index: number) => (
            <div key={index} className="mb-8">
              {section.type === "text" && (
                <p
                  className={`text-base leading-relaxed ${
                    isLight ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  {section.content}
                </p>
              )}

              {section.type === "list" && (
                <ol className="space-y-6 mt-6">
                  {section.items.map((item: any, itemIndex: number) => (
                    <li
                      key={itemIndex}
                      className={`text-base ${
                        isLight ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      <strong
                        className={isLight ? "text-black" : "text-white"}
                      >
                        {item.title}
                      </strong>{" "}
                      {item.content}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`mt-12 pt-8 border-t text-sm italic ${
            isLight
              ? "border-gray-200 text-gray-600"
              : "border-neutral-800 text-gray-400"
          }`}
        >
          <p>Last updated: {note.date}</p>
        </motion.div>
      </article>
      <Footer />
    </main>
  );
}
