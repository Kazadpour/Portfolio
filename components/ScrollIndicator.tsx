"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Home" },
  { id: "selected-works", label: "Selected Works" },
  { id: "get-to-know-me", label: "Get to Know Me" },
  { id: "work-together", label: "Contact" },
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Debounce the scroll handler to avoid conflicts with click navigation
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sectionElements = sections.map((section) =>
          document.getElementById(section.id)
        );

        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const viewportMiddle = scrollPosition + windowHeight / 2;

        // Find which section contains the viewport middle
        let currentIndex = 0;

        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const element = sectionElements[i];
          if (element) {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;

            // Check if viewport middle is within this section
            if (viewportMiddle >= elementTop && viewportMiddle <= elementBottom) {
              currentIndex = i;
              break;
            }
          }
        }

        setActiveSection(currentIndex);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const sectionId = sections[index].id;
    const element = document.getElementById(sectionId);

    if (element) {
      const offsetTop = element.offsetTop;
      const navbarHeight = 80; // Approximate navbar height

      window.scrollTo({
        top: Math.max(0, offsetTop - navbarHeight),
        behavior: "smooth",
      });

      // Set active section immediately after clicking
      setTimeout(() => setActiveSection(index), 100);
    }
  };

  return (
    <div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex items-center gap-4 py-8 px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Labels (shown on hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className={`flex flex-col transition-all duration-300 ${isHovered ? "gap-4" : "gap-2"}`}
          >
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="flex items-center justify-end"
                style={{ height: isHovered ? "32px" : "16px" }}
              >
                <button
                  onClick={() => scrollToSection(index)}
                  className={`text-sm font-medium text-right px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                    isLight
                      ? index === activeSection
                        ? "text-black bg-gray-200"
                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                      : index === activeSection
                      ? "text-white bg-neutral-800"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`}
                >
                  {section.label}
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lines */}
      <div className={`flex flex-col transition-all duration-300 ${isHovered ? "gap-4" : "gap-2"}`}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="flex items-center justify-center"
            style={{ height: isHovered ? "32px" : "16px" }}
          >
            <button
              onClick={() => scrollToSection(index)}
              className="px-3 py-4 flex items-center justify-center"
              aria-label={`Scroll to ${section.label}`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  isHovered ? "h-6 w-0.5" : "h-4 w-0.5"
                } ${
                  index === activeSection
                    ? isLight
                      ? "bg-black w-1"
                      : "bg-white w-1"
                    : isLight
                    ? "bg-gray-400"
                    : "bg-neutral-600"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
