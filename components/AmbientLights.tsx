"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function AmbientLights() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <>
      {/* Top ambient light - Purple to Pink gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] pointer-events-none z-0"
        style={{
          background: isLight
            ? "linear-gradient(90deg, rgba(88, 28, 135, 0.6) 0%, rgba(219, 39, 119, 0.5) 50%, rgba(249, 115, 22, 0.4) 100%)"
            : "linear-gradient(90deg, rgba(88, 28, 135, 0.3) 0%, rgba(219, 39, 119, 0.25) 50%, rgba(249, 115, 22, 0.2) 100%)",
          filter: "blur(120px)",
          opacity: isLight ? 0.8 : 0.6,
        }}
      />

      {/* Bottom ambient light - Orange to Purple gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] pointer-events-none z-0"
        style={{
          background: isLight
            ? "linear-gradient(90deg, rgba(249, 115, 22, 0.4) 0%, rgba(219, 39, 119, 0.5) 50%, rgba(88, 28, 135, 0.6) 100%)"
            : "linear-gradient(90deg, rgba(249, 115, 22, 0.2) 0%, rgba(219, 39, 119, 0.25) 50%, rgba(88, 28, 135, 0.3) 100%)",
          filter: "blur(120px)",
          opacity: isLight ? 0.8 : 0.6,
        }}
      />
    </>
  );
}
