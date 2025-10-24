import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollIndicator from "@/components/ScrollIndicator";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Khashayar Azadpour - Software Engineer & Data Professional",
  description: "Personal portfolio showcasing software engineering and data-driven projects. Building scalable solutions with Next.js, React, TypeScript, and Azure.",
  keywords: ["Software Engineer", "Data Engineer", "Web Developer", "Next.js", "React", "TypeScript", "Azure"],
  authors: [{ name: "Khashayar Azadpour" }],
  creator: "Khashayar Azadpour",
  openGraph: {
    title: "Khashayar Azadpour - Software Engineer",
    description: "Building scalable solutions and data-driven experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="antialiased">
        <ThemeProvider>
          <CursorSpotlight />
          <ScrollIndicator />
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
