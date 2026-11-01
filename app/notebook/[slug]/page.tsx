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
  "ai-guardrails": {
    title: "Designing guardrails for AI: a layered approach",
    date: "1st Nov 2026",
    readTime: "7 min read",
    coverImage: "/images/note-banner.png",
    content: [
      {
        type: "text",
        content:
          "Most conversations about AI guardrails start and end with a content filter: block the bad words, refuse the bad requests, ship it. That covers a small slice of what can actually go wrong. Once a model can read your documents, call your APIs, or act on someone's behalf, the risks move from \"it said something embarrassing\" to \"it did something nobody approved.\" Guardrails stop being a single filter and become a property of the whole product, which is why I think of them as a design problem first and a security problem second.",
      },
      {
        type: "text",
        content:
          "The model that works best is defense in depth: several independent layers, each assuming the one before it will sometimes fail. No single layer has to be perfect, but together they make failures rare, visible, and recoverable.",
      },
      {
        type: "heading",
        content: "1. Policy: decide what the system is for",
      },
      {
        type: "text",
        content:
          "Every other layer depends on a clear answer to \"what should this do, and what should it never do?\" Without that, filters get tuned by gut feel and edge cases get argued in production.",
      },
      {
        type: "list",
        items: [
          {
            title: "Write a scope statement.",
            content:
              "One paragraph describing the intended users, tasks, and data. Anything outside it is a refusal or a hand-off, not an improvisation.",
          },
          {
            title: "Classify the risk honestly.",
            content:
              "A tool that drafts internal meeting notes and a tool that influences hiring, credit, or health decisions need very different levels of control. Match the effort to the stakes.",
          },
          {
            title: "Name an owner.",
            content:
              "Someone is accountable for the system's behaviour, its incidents, and the decision to turn it off. Governance that belongs to everyone belongs to no one.",
          },
        ],
      },
      {
        type: "heading",
        content: "2. Input: treat everything the model reads as untrusted",
      },
      {
        type: "text",
        content:
          "Prompt injection has held the top spot in the OWASP Top 10 for LLM Applications since the list began, and for good reason: a model can't reliably tell the difference between instructions from you and instructions hidden in a web page, an email, or a PDF it was asked to summarise. The newer OWASP Top 10 for Agentic Applications puts the agent version of this, goal hijacking through content the agent reads, at number one.",
      },
      {
        type: "list",
        items: [
          {
            title: "Separate instructions from data.",
            content:
              "Keep system instructions, user messages, and retrieved content in clearly delimited channels, and never let retrieved content grant new permissions.",
          },
          {
            title: "Minimise what goes in.",
            content:
              "Strip or mask personal and sensitive data before it reaches a model or a third-party API. Data the model never sees is data it can never leak.",
          },
          {
            title: "Assume the system prompt will leak.",
            content:
              "OWASP added System Prompt Leakage as its own category in 2025. Never put credentials, connection strings, or business secrets in a prompt; enforce rules in code, not in prose.",
          },
        ],
      },
      {
        type: "heading",
        content: "3. Output: validate before it reaches a person or a system",
      },
      {
        type: "text",
        content:
          "Model output is user input with extra steps. If it is rendered as HTML, executed as code, sent as a query, or passed to another tool, it needs the same validation you would apply to anything typed into a public form.",
      },
      {
        type: "list",
        items: [
          {
            title: "Constrain the shape.",
            content:
              "Use structured outputs and schemas wherever possible. A response that must match a JSON schema is far easier to check than free text.",
          },
          {
            title: "Check the substance.",
            content:
              "Run classifiers or rules for harmful content, personal data, and off-scope answers. For factual tasks, ground responses in retrieved sources and show those sources.",
          },
          {
            title: "Escape and sandbox.",
            content:
              "Encode output before rendering it, and run any generated code in an isolated sandbox with no access to production credentials.",
          },
        ],
      },
      {
        type: "heading",
        content: "4. Action: give agents the least agency that works",
      },
      {
        type: "text",
        content:
          "\"Excessive Agency\" is the OWASP name for a model that has more tools, permissions, or autonomy than its task requires. It matters more every year as assistants turn into agents that send emails, edit records, and spend money.",
      },
      {
        type: "list",
        items: [
          {
            title: "Scope every tool.",
            content:
              "Give the agent narrow, purpose-built tools (\"look up order status\") rather than general ones (\"run any SQL\"), and run them with the user's permissions, not a super-user account.",
          },
          {
            title: "Gate irreversible actions.",
            content:
              "Deleting, paying, sending, and publishing should require explicit human confirmation that shows exactly what will happen. Reversible actions can be more autonomous.",
          },
          {
            title: "Set budgets and kill switches.",
            content:
              "Cap the number of steps, tokens, and dollars a run can use, and make it possible to stop an agent immediately without a deploy.",
          },
        ],
      },
      {
        type: "heading",
        content: "5. Interface: design guardrails people can see",
      },
      {
        type: "text",
        content:
          "This is the layer designers own, and the one most often skipped. A guardrail that silently blocks or silently fails erodes trust just as fast as one that lets bad output through. The NIST Generative AI Profile calls this out as \"human-AI configuration\": the risk that people over-rely on, or misread, what a system tells them.",
      },
      {
        type: "list",
        items: [
          {
            title: "Disclose clearly.",
            content:
              "People should know when they are talking to AI and when content was generated. In the EU this is a legal transparency duty under Article 50 of the AI Act, and it is good practice everywhere else.",
          },
          {
            title: "Show your work.",
            content:
              "Cite sources, show what the system was given, and preview actions before they run. Make it easy to check the answer rather than simply trust it.",
          },
          {
            title: "Refuse helpfully.",
            content:
              "When a request is out of scope, say why in plain language and offer a next step: a human contact, a different tool, or a rephrased request. A dead end teaches users to work around the guardrail.",
          },
          {
            title: "Make it undoable.",
            content:
              "Drafts instead of sends, version history instead of overwrites, and a visible way to report a bad output. Recoverability is a guardrail too.",
          },
        ],
      },
      {
        type: "heading",
        content: "6. Operations: test, monitor, and keep humans in the loop",
      },
      {
        type: "text",
        content:
          "Guardrails decay. Models get updated, prompts drift, and attackers find new phrasings. The NIST AI Risk Management Framework organises this ongoing work into four functions: Govern, Map, Measure, and Manage. In practice that means treating AI behaviour like any other production system.",
      },
      {
        type: "list",
        items: [
          {
            title: "Build an evaluation set.",
            content:
              "Collect real examples of good answers, bad answers, and attacks, and run them on every prompt or model change, the same way you run unit tests.",
          },
          {
            title: "Red team before launch.",
            content:
              "Have people actively try to break the system: jailbreaks, injected documents, attempts to extract data, and misuse of tools.",
          },
          {
            title: "Log and review.",
            content:
              "Record inputs, outputs, tool calls, and guardrail triggers (with sensitive data redacted), and look at them regularly. Spikes in refusals or overrides are early warnings.",
          },
          {
            title: "Plan for incidents.",
            content:
              "Know in advance how you will roll back a model, disable a feature, and tell affected people when something goes wrong.",
          },
        ],
      },
      {
        type: "heading",
        content: "Where regulation stands",
      },
      {
        type: "text",
        content:
          "The rules are still settling, but the direction is consistent: transparency, risk-based controls, and accountability. In the EU, the AI Act's bans and general-purpose model rules already apply, while the 2026 Digital Omnibus pushed most high-risk obligations to December 2027 (and August 2028 for AI embedded in regulated products). Transparency duties were not delayed. In Canada, the proposed Artificial Intelligence and Data Act lapsed in early 2025, and the federal AI for All strategy released in June 2026 leans on existing privacy, consumer, and online-harms law rather than a single AI statute. Voluntary frameworks like NIST's and standards like ISO/IEC 42001 fill the gap, and they are a sensible baseline regardless of where you operate.",
      },
      {
        type: "heading",
        content: "A starting checklist",
      },
      {
        type: "list",
        items: [
          {
            title: "Scope:",
            content: "a written statement of what the system does, doesn't do, and who owns it.",
          },
          {
            title: "Data:",
            content: "sensitive data masked before it reaches a model; no secrets in prompts.",
          },
          {
            title: "Inputs:",
            content: "retrieved and third-party content treated as untrusted data, never as instructions.",
          },
          {
            title: "Outputs:",
            content: "structured where possible, validated and escaped before use.",
          },
          {
            title: "Actions:",
            content: "narrow tools, user-level permissions, confirmation for anything irreversible.",
          },
          {
            title: "Interface:",
            content: "clear AI disclosure, visible sources, helpful refusals, and undo.",
          },
          {
            title: "Operations:",
            content: "evals on every change, red teaming before launch, logging, and an incident plan.",
          },
        ],
      },
      {
        type: "text",
        content:
          "None of these layers is novel on its own. Most are ideas we already apply to payments, authentication, and public forms. The shift is accepting that a language model is a powerful, unpredictable component that needs the same care, and that the people using it deserve to see and steer what it is doing.",
      },
      {
        type: "sources",
        items: [
          {
            title: "OWASP Top 10 for LLM Applications (2025)",
            href: "https://genai.owasp.org/llm-top-10/",
          },
          {
            title: "OWASP Top 10 for Agentic Applications (2026)",
            href: "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026",
          },
          {
            title: "NIST AI Risk Management Framework",
            href: "https://www.nist.gov/itl/ai-risk-management-framework",
          },
          {
            title: "NIST AI 600-1: Generative AI Profile",
            href: "https://doi.org/10.6028/NIST.AI.600-1",
          },
          {
            title: "EU AI Act Omnibus Agreement (Gibson Dunn)",
            href: "https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/",
          },
          {
            title: "Canada's refreshed national AI strategy (Baker McKenzie)",
            href: "https://www.bakermckenzie.com/en/insight/publications/2026/06/canada-federal-government-releases-refreshed-national-ai-strategy",
          },
        ],
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
              {section.type === "heading" && (
                <h2
                  className={`text-2xl md:text-3xl font-bold mt-12 ${
                    isLight ? "text-black" : "text-white"
                  }`}
                >
                  {section.content}
                </h2>
              )}

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

              {section.type === "sources" && (
                <div
                  className={`mt-12 pt-8 border-t ${
                    isLight ? "border-gray-200" : "border-neutral-800"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold mb-4 ${
                      isLight ? "text-black" : "text-white"
                    }`}
                  >
                    Sources
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item: any, itemIndex: number) => (
                      <li key={itemIndex} className="text-sm">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`underline underline-offset-4 ${
                            isLight
                              ? "text-gray-700 hover:text-black"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
