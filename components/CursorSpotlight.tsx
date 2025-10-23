"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Large spotlight glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: isLight
            ? `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(0, 0, 0, 0.08), transparent 40%)`
            : `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />

      {/* Medium spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-200"
        style={{
          opacity: isVisible ? 1 : 0,
          background: isLight
            ? `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(0, 0, 0, 0.05), transparent 60%)`
            : `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.04), transparent 60%)`,
        }}
      />
    </>
  );
}
