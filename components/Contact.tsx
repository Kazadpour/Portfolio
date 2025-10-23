"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

export default function Contact() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Using Web3Forms API for email sending
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ email: "", name: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="px-6 py-20 pb-8">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            Get in touch
          </h2>
          <p
            className={`text-lg ${
              isLight ? "text-neutral-600" : "text-neutral-400"
            }`}
          >
            Let's build something awesome
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`rounded-xl overflow-hidden shadow-2xl border ${
            isLight
              ? "bg-white border-neutral-300"
              : "bg-neutral-900 border-neutral-700"
          }`}
          style={{
            boxShadow: isLight
              ? "0 20px 60px rgba(0, 0, 0, 0.15)"
              : "0 20px 60px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* macOS Window Header */}
          <div
            className={`px-4 py-3 border-b flex items-center justify-between ${
              isLight
                ? "bg-neutral-50 border-neutral-200"
                : "bg-neutral-800 border-neutral-700"
            }`}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p
              className={`text-sm font-medium absolute left-1/2 -translate-x-1/2 ${
                isLight ? "text-neutral-700" : "text-neutral-300"
              }`}
            >
              New message
            </p>
            <div className="w-[52px]" /> {/* Spacer for symmetry */}
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="p-6">
            {/* Email Field */}
            <div
              className={`flex items-center gap-4 pb-3 border-b ${
                isLight ? "border-neutral-200" : "border-neutral-700"
              }`}
            >
              <label
                className={`text-sm font-medium min-w-[60px] ${
                  isLight ? "text-black" : "text-white"
                }`}
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                autoComplete="email"
                className={`flex-1 bg-transparent outline-none text-sm ${
                  isLight
                    ? "text-black placeholder-neutral-400"
                    : "text-white placeholder-neutral-500"
                }`}
                style={{
                  WebkitBoxShadow: "0 0 0 1000px transparent inset",
                  WebkitTextFillColor: isLight ? "black" : "white",
                  transition: "background-color 5000s ease-in-out 0s",
                }}
              />
            </div>

            {/* Name Field */}
            <div
              className={`flex items-center gap-4 py-3 border-b ${
                isLight ? "border-neutral-200" : "border-neutral-700"
              }`}
            >
              <label
                className={`text-sm font-medium min-w-[60px] ${
                  isLight ? "text-black" : "text-white"
                }`}
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                autoComplete="name"
                className={`flex-1 bg-transparent outline-none text-sm ${
                  isLight
                    ? "text-black placeholder-neutral-400"
                    : "text-white placeholder-neutral-500"
                }`}
                style={{
                  WebkitBoxShadow: "0 0 0 1000px transparent inset",
                  WebkitTextFillColor: isLight ? "black" : "white",
                  transition: "background-color 5000s ease-in-out 0s",
                }}
              />
            </div>

            {/* Subject Field */}
            <div
              className={`flex items-center gap-4 py-3 border-b ${
                isLight ? "border-neutral-200" : "border-neutral-700"
              }`}
            >
              <label
                className={`text-sm font-medium min-w-[60px] ${
                  isLight ? "text-black" : "text-white"
                }`}
              >
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
                className={`flex-1 bg-transparent outline-none text-sm ${
                  isLight
                    ? "text-black placeholder-neutral-400"
                    : "text-white placeholder-neutral-500"
                }`}
                style={{
                  WebkitBoxShadow: "0 0 0 1000px transparent inset",
                  WebkitTextFillColor: isLight ? "black" : "white",
                  transition: "background-color 5000s ease-in-out 0s",
                }}
              />
            </div>

            {/* Message Field */}
            <div className="pt-4 pb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                required
                rows={12}
                className={`w-full bg-transparent outline-none text-sm resize-none ${
                  isLight
                    ? "text-black placeholder-neutral-400"
                    : "text-white placeholder-neutral-500"
                }`}
              />
            </div>

            {/* Send Button */}
            <div className="flex justify-end">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  status === "sending" ? "opacity-50 cursor-not-allowed" : ""
                } ${
                  isLight
                    ? "bg-gray-900 hover:bg-black text-white shadow-lg"
                    : "bg-white hover:bg-gray-100 text-black shadow-lg"
                }`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Sent!"
                  : status === "error"
                  ? "Error - Try again"
                  : "Send"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
