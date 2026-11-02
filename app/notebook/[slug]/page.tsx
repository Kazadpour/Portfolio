"use client";

import { motion } from "motion/react";
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
  "ai-guardrails": {
    title: "Designing guardrails for AI: a layered approach",
    date: "1st Nov 2026",
    readTime: "7 min read",
    coverImage: "/images/ai-governance-banner.png",
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
  "microsoft-foundry-agents": {
    title: "Building agentic apps with Microsoft Foundry models",
    date: "1st Nov 2026",
    readTime: "8 min read",
    coverImage: "/images/ai-foundry-banner.png",
    content: [
      {
        type: "text",
        content:
          "Calling a model from an app is easy. Building an agent, something that plans, calls tools, remembers context, and acts on a user's behalf, is a different job: you suddenly care about identity, tool permissions, tracing, cost, and what happens when the model is confidently wrong. Microsoft Foundry (formerly Azure AI Foundry) is Microsoft's answer to that whole job. This note walks through how I'd go from \"pick a model\" to a production-ready agent on it.",
      },
      {
        type: "heading",
        content: "What Foundry actually is",
      },
      {
        type: "text",
        content:
          "Foundry puts models, agents, and tools under a single Azure resource, with one set of access control, networking, and policies. Inside a Foundry project you get three things that matter for agents:",
      },
      {
        type: "list",
        items: [
          {
            title: "Foundry Models:",
            content:
              "a catalog of more than 10,000 models from Microsoft, OpenAI, Anthropic, Meta, Mistral, DeepSeek, and others. Some are sold directly by Azure; others come from partners and the community.",
          },
          {
            title: "Foundry Agent Service:",
            content:
              "a managed runtime that hosts agents, manages conversations and tool calls, and gives each agent its own Microsoft Entra identity.",
          },
          {
            title: "Tools and observability:",
            content:
              "built-in tools like web search, file search, and code interpreter, support for your own functions and MCP servers, plus tracing and evaluations wired into Application Insights.",
          },
        ],
      },
      {
        type: "text",
        content:
          "If you already use Azure OpenAI, you can upgrade that resource to a Foundry resource and keep your endpoint and keys.",
      },
      {
        type: "heading",
        content: "Step 1: Pick and deploy a model",
      },
      {
        type: "text",
        content:
          "Agents make many model calls per user request (planning, tool selection, summarising tool results), so the deployment type affects latency and cost more than it does for a simple chatbot.",
      },
      {
        type: "list",
        items: [
          {
            title: "Start with Global Standard.",
            content:
              "Pay per token, the highest default quota, and new models arrive here first. It's the right default for prototypes and most production workloads.",
          },
          {
            title: "Use Data Zone or regional deployments for residency.",
            content:
              "Global deployments can process prompts in any Azure region. If your data has to stay in the US, the EU, or a specific geography, choose a Data Zone or Standard (regional) deployment instead.",
          },
          {
            title: "Move to Provisioned for steady, high volume.",
            content:
              "Provisioned throughput units (PTUs) reserve capacity and give more predictable latency, which matters when an agent chains several calls together. Spillover can send overflow traffic to a standard deployment.",
          },
          {
            title: "Use Batch for offline jobs.",
            content:
              "Large asynchronous jobs, such as classifying a backlog of documents, can run on Global or Data Zone Batch at roughly half the cost.",
          },
        ],
      },
      {
        type: "heading",
        content: "Step 2: Choose where the agent runs",
      },
      {
        type: "text",
        content:
          "Foundry offers a spectrum from fully managed to fully custom. The choice is about who owns the runtime, not about features: all of them reach the same models and tools through your project endpoint.",
      },
      {
        type: "list",
        items: [
          {
            title: "Prompt agents:",
            content:
              "define instructions, a model, and tools in the portal or through the SDK, and Foundry runs the agent. There is no runtime code to maintain. Best for getting started and for agents that don't need custom orchestration.",
          },
          {
            title: "Hosted agents:",
            content:
              "bring your own code built with Microsoft Agent Framework, LangGraph, the OpenAI Agents SDK, the Anthropic Agent SDK, or plain code, and Foundry runs it as a container with a managed endpoint, autoscaling, and a dedicated identity.",
          },
          {
            title: "Responses API (ephemeral agents):",
            content:
              "call the project's Responses API from an app you already run. The agent's definition lives in your code and ships with it, but you still get Foundry models, tools, content filters, and observability.",
          },
          {
            title: "Voice-based prompt agents:",
            content:
              "the same idea for real-time spoken conversations, with Foundry handling speech recognition and turn-taking.",
          },
        ],
      },
      {
        type: "heading",
        content: "Step 3: Write the agent",
      },
      {
        type: "text",
        content:
          "Microsoft Agent Framework is the recommended SDK. It's the successor to both Semantic Kernel and AutoGen, built by the same teams, and it runs the same code in-process or as a hosted agent. Here's a small Python agent with two tools: one that only reads data, and one that changes something and therefore needs a person to approve it.",
      },
      {
        type: "code",
        language: "python",
        content: `import asyncio
import os

from agent_framework import Agent, tool
from agent_framework.foundry import FoundryChatClient
from azure.identity import AzureCliCredential


@tool
def get_order_status(order_id: str) -> str:
    """Look up the current status of an order."""
    return orders.get_status(order_id)  # your own read-only service


@tool(approval_mode="always_require")
def issue_refund(order_id: str, amount: float) -> str:
    """Refund an order. A person must approve every call."""
    return payments.refund(order_id, amount)  # your own payments service


async def main() -> None:
    agent = Agent(
        client=FoundryChatClient(
            project_endpoint=os.environ["FOUNDRY_PROJECT_ENDPOINT"],
            model=os.environ["FOUNDRY_MODEL"],
            credential=AzureCliCredential(),
        ),
        instructions="You help customers check and resolve their orders.",
        tools=[get_order_status, issue_refund],
    )

    result = await agent.run("Where is order 1042?")
    print(result)


asyncio.run(main())`,
      },
      {
        type: "text",
        content:
          "A few things worth noticing. There are no API keys: the client authenticates with Microsoft Entra ID (here, your Azure CLI sign-in; in production, a managed identity). The model name comes from configuration, so you can swap models without touching the agent. And the refund tool is marked as requiring approval, so when the model decides to call it, the run comes back with an approval request instead of executing it. Your app shows that request to a person and sends back their decision.",
      },
      {
        type: "heading",
        content: "Step 4: Give it tools, carefully",
      },
      {
        type: "text",
        content:
          "Tools are what make an agent useful and what make it risky. Foundry's toolboxes let you curate a set of tools once (web search, file search, code interpreter, MCP servers, OpenAPI specs, your own functions) and expose them to any agent through one managed MCP endpoint, with authentication and versioning handled centrally.",
      },
      {
        type: "list",
        items: [
          {
            title: "Keep credentials out of agent code.",
            content:
              "Configure downstream keys and OAuth tokens on the project connection a tool uses. Tools can authenticate with the agent's managed identity, or on behalf of the signed-in user so the agent can only do what that user could.",
          },
          {
            title: "Prefer narrow tools.",
            content:
              "\"Get order status\" is safer and more reliable than \"run any SQL query.\" Models choose tools better when each one does one clear thing with a good description.",
          },
          {
            title: "Enforce approval in your runtime.",
            content:
              "A toolbox tool can be marked require_approval: always, but the MCP endpoint doesn't block the call on its own. Your agent runtime has to pause, ask, and only then invoke. An instruction in the system prompt is not enforcement.",
          },
        ],
      },
      {
        type: "heading",
        content: "Step 5: Know when you need a workflow instead",
      },
      {
        type: "text",
        content:
          "Not everything should be an agent. Microsoft's own guidance is blunt: if a plain function can handle the task, write the function. Use an agent when the task is open-ended and needs planning; use a workflow when the steps are known and you want explicit control over their order.",
      },
      {
        type: "list",
        items: [
          {
            title: "Start with one agent.",
            content:
              "Get a single, focused agent reliable before you orchestrate several of them.",
          },
          {
            title: "Then pick an orchestration pattern.",
            content:
              "Agent Framework workflows support sequential, concurrent, handoff, group chat, and \"Magentic\" (a lead agent directing others) patterns, and a finished workflow can itself be wrapped as an agent.",
          },
          {
            title: "Mix deterministic and AI steps.",
            content:
              "Validation, approvals, and data writes are usually better as normal code steps in a workflow, with agents handling only the parts that need judgment.",
          },
        ],
      },
      {
        type: "heading",
        content: "Step 6: Observe, evaluate, and govern",
      },
      {
        type: "text",
        content:
          "Agents fail in ways unit tests don't catch: picking the wrong tool, looping, or giving a fluent but wrong answer. Foundry covers this, but some of it is opt-in.",
      },
      {
        type: "list",
        items: [
          {
            title: "Turn on tracing in your app.",
            content:
              "Connecting Application Insights to the project doesn't automatically trace code running in your own process. Configure Agent Framework observability so every model call and tool call shows up as a trace.",
          },
          {
            title: "Evaluate before and after changes.",
            content:
              "Run evaluations against a fixed set of real conversations whenever you change the model, instructions, or tools, and watch quality metrics in production.",
          },
          {
            title: "Lean on platform guardrails.",
            content:
              "Project-level content filters, Entra identity and RBAC, and network isolation apply to every call through the project endpoint. They complement, not replace, the guardrails you design into the product.",
          },
        ],
      },
      {
        type: "heading",
        content: "Takeaways",
      },
      {
        type: "list",
        items: [
          {
            title: "Default to Global Standard",
            content: "and only change deployment type for residency, latency, or cost reasons you can name.",
          },
          {
            title: "Start with a prompt agent or the Responses API,",
            content: "and graduate to a hosted agent when you need custom code in the loop.",
          },
          {
            title: "Use Microsoft Agent Framework",
            content: "so the same agent code runs locally, in your app, or hosted in Foundry.",
          },
          {
            title: "Treat tools as the security boundary:",
            content: "narrow scope, managed credentials, and real approval for anything irreversible.",
          },
          {
            title: "Instrument from day one;",
            content: "you can't improve an agent you can't see.",
          },
        ],
      },
      {
        type: "text",
        content:
          "For the product-design side of this, how to make agent actions visible, reversible, and trustworthy for the people using them, see my note on designing guardrails for AI in the Design section.",
      },
      {
        type: "sources",
        items: [
          {
            title: "What is Microsoft Foundry?",
            href: "https://learn.microsoft.com/azure/foundry/what-is-foundry",
          },
          {
            title: "Agents in Microsoft Foundry",
            href: "https://learn.microsoft.com/azure/foundry/agents/overview",
          },
          {
            title: "Deployment types for Microsoft Foundry Models",
            href: "https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types",
          },
          {
            title: "Quickstart: Build agents using the Responses API",
            href: "https://learn.microsoft.com/azure/foundry/agents/quickstarts/responses-api",
          },
          {
            title: "Use a toolbox with a hosted agent (tool approval)",
            href: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/use-toolbox-hosted-agent",
          },
          {
            title: "Microsoft Agent Framework overview",
            href: "https://learn.microsoft.com/agent-framework/overview/",
          },
        ],
      },
    ],
  },
  "design-tokens": {
    title: "Design tokens: the contract between design and code",
    date: "1st Nov 2026",
    readTime: "5 min read",
    coverImage: "/images/design-tokens-banner.jpg",
    content: [
      {
        type: "text",
        content:
          "Every design system eventually hits the same wall: the blue in Figma, the blue in the CSS, and the blue in the iOS app are three slightly different blues, and nobody knows which one is right. Design tokens fix that by turning design decisions into data. Instead of hard-coding #0066CC in a dozen places, you name the decision once (color.action.primary) and let every platform read it from the same source.",
      },
      {
        type: "heading",
        content: "What a token actually is",
      },
      {
        type: "text",
        content:
          "A design token is a named value with a type: a colour, a spacing size, a font, a shadow, an animation curve. The name describes what the value is for, the value describes what it looks like, and tooling translates it into whatever each platform needs: CSS custom properties, a Tailwind theme, Swift, Kotlin, or Flutter.",
      },
      {
        type: "text",
        content:
          "For years every tool invented its own token format, which made moving tokens between Figma plugins and build tools painful. That changed on 28 October 2025, when the W3C Design Tokens Community Group published the first stable version of its specification (2025.10). It is already implemented by Style Dictionary, Tokens Studio, and Terrazzo, with support announced across tools like Figma, Penpot, Sketch, Framer, Supernova, and zeroheight.",
      },
      {
        type: "heading",
        content: "Anatomy of a token file",
      },
      {
        type: "text",
        content:
          "The standard format is plain JSON, ideally saved with a .tokens extension. Properties that start with $ belong to the format; everything else is a group or a token name. Types can be set on a group and inherited by every token inside it, and one token can reference another with curly braces.",
      },
      {
        type: "code",
        language: "json",
        content: `{
  "color": {
    "$type": "color",
    "blue-600": {
      "$value": {
        "colorSpace": "srgb",
        "components": [0, 0.4, 0.8],
        "hex": "#0066cc"
      }
    },
    "action": {
      "primary": {
        "$value": "{color.blue-600}",
        "$description": "Buttons and links that move the user forward"
      }
    }
  },
  "space": {
    "$type": "dimension",
    "small": { "$value": { "value": 8, "unit": "px" } },
    "medium": { "$value": { "value": 16, "unit": "px" } }
  }
}`,
      },
      {
        type: "text",
        content:
          "The spec defines basic types (color, dimension, fontFamily, fontWeight, duration, cubicBezier, number) and composite types that bundle several values together (border, shadow, gradient, transition, strokeStyle, typography). Colour is no longer limited to hex: wide-gamut spaces like Display P3 and OKLCH are supported directly.",
      },
      {
        type: "heading",
        content: "Three tiers keep it maintainable",
      },
      {
        type: "list",
        items: [
          {
            title: "Primitive tokens",
            content:
              "are the raw palette: color.blue-600, space.16, font.size.300. They describe what exists, not where it's used, and product code should rarely reference them directly.",
          },
          {
            title: "Semantic tokens",
            content:
              "describe intent: color.text.default, color.surface.raised, color.action.primary, color.border.danger. They point at primitives, and this is the layer most components should use.",
          },
          {
            title: "Component tokens",
            content:
              "are optional and scoped to one component: button.primary.background, card.padding. Add them only when a component genuinely needs to diverge from the semantic layer, or they multiply fast.",
          },
        ],
      },
      {
        type: "heading",
        content: "Name for purpose, not appearance",
      },
      {
        type: "text",
        content:
          "A token called color.blue becomes a lie the day the brand turns green. A token called color.action.primary survives a rebrand, a dark mode, and a high-contrast theme. Pick a consistent order (category, then property, then variant, then state, as in color.background.button.hover) and write it down. Good names are the part of a token system that is hardest to change later.",
      },
      {
        type: "heading",
        content: "Theming without duplicating everything",
      },
      {
        type: "text",
        content:
          "Tiers are what make theming cheap. Light mode, dark mode, a high-contrast mode, or a second brand don't need a second copy of every component. They only remap semantic tokens to different primitives: color.surface.default points at white in one theme and at a near-black in another, and every component that uses it follows. Theming and multi-brand support were headline features of the 2025.10 release for exactly this reason.",
      },
      {
        type: "heading",
        content: "From design file to production",
      },
      {
        type: "list",
        items: [
          {
            title: "Author in one place.",
            content:
              "Designers define variables in Figma (or Tokens Studio), exported in the standard format.",
          },
          {
            title: "Store tokens in git.",
            content:
              "The .tokens files live next to the code, so every change goes through a pull request with a diff people can review.",
          },
          {
            title: "Build for every platform.",
            content:
              "A tool like Style Dictionary or Terrazzo turns the same files into CSS variables, a Tailwind theme, and native code for mobile.",
          },
          {
            title: "Consume semantic names only.",
            content:
              "Components reference var(--color-action-primary) or a Tailwind class built from it, never a raw hex value.",
          },
        ],
      },
      {
        type: "code",
        language: "css",
        content: `/* Generated from the token files. Do not edit by hand. */
:root {
  --color-blue-600: #0066cc;
  --color-action-primary: var(--color-blue-600);
  --space-small: 8px;
  --space-medium: 16px;
}

[data-theme="dark"] {
  --color-action-primary: var(--color-blue-300);
}`,
      },
      {
        type: "heading",
        content: "Governance is the real work",
      },
      {
        type: "list",
        items: [
          {
            title: "Version the token package",
            content:
              "like any other dependency, and treat renamed or removed tokens as breaking changes.",
          },
          {
            title: "Deprecate before deleting.",
            content:
              "The spec's $deprecated property lets you mark a token as on its way out, with a message pointing to its replacement.",
          },
          {
            title: "Lint for hard-coded values.",
            content:
              "A stylelint or ESLint rule that flags raw hex codes and pixel values catches drift before it ships.",
          },
          {
            title: "Bake accessibility in.",
            content:
              "Check contrast between text and surface token pairs in every theme as part of the build, so an inaccessible combination can't be released.",
          },
        ],
      },
      {
        type: "text",
        content:
          "Design tokens aren't glamorous, but they're the difference between a design system that drifts and one that stays true. With a stable, shared format, the tooling has finally caught up with the idea.",
      },
      {
        type: "sources",
        items: [
          {
            title: "Design Tokens specification reaches first stable version (W3C)",
            href: "https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/",
          },
          {
            title: "Design Tokens Format Module 2025.10",
            href: "https://www.designtokens.org/TR/2025.10/format/",
          },
          {
            title: "Design Tokens Community Group on GitHub",
            href: "https://github.com/design-tokens/community-group",
          },
        ],
      },
    ],
  },
  "accessible-design-wcag-2-2": {
    title: "Accessibility is a design decision: designing for WCAG 2.2",
    date: "1st Nov 2026",
    readTime: "6 min read",
    coverImage: "/images/accessibility-banner.png",
    content: [
      {
        type: "text",
        content:
          "Accessibility usually gets treated as a QA step: build the thing, run an audit, fix the red items. By then most of the important decisions have already been made in the design file, such as colour pairs, focus states, touch target sizes, form flows, and how much motion a page uses. The cheapest place to make a product accessible is at the design stage, and the guidelines are more concrete than most designers expect.",
      },
      {
        type: "text",
        content:
          "It's also not a niche concern. The World Health Organization estimates that about 1.3 billion people, roughly one in six, live with a significant disability, and many more have temporary or situational limitations: a broken wrist, bright sunlight on a phone, a noisy train.",
      },
      {
        type: "heading",
        content: "The standard: WCAG 2.2",
      },
      {
        type: "text",
        content:
          "The Web Content Accessibility Guidelines (WCAG) are organised around four principles: content must be perceivable, operable, understandable, and robust. Each success criterion has a level (A, AA, or AAA), and AA is the target almost every law and policy points to. WCAG 2.2 became a W3C Recommendation in October 2023 and is the current version. It includes everything from 2.1, so designing to 2.2 AA keeps you covered wherever 2.1 AA is the legal baseline.",
      },
      {
        type: "heading",
        content: "What WCAG 2.2 added that designers own",
      },
      {
        type: "list",
        items: [
          {
            title: "Focus Not Obscured (AA).",
            content:
              "When something receives keyboard focus, it can't be completely hidden behind a sticky header, cookie banner, or chat widget.",
          },
          {
            title: "Dragging Movements (AA).",
            content:
              "Anything done by dragging (sliders, reordering lists, map panning) also needs a single-pointer alternative, such as buttons or a tap-to-select flow.",
          },
          {
            title: "Target Size (Minimum) (AA).",
            content:
              "Interactive targets need to be at least 24 by 24 CSS pixels, or spaced so that a 24-pixel circle around each doesn't overlap its neighbours. Tiny icon buttons in toolbars are the usual offenders.",
          },
          {
            title: "Consistent Help (A).",
            content:
              "If you offer help such as a contact link, chat, or FAQ, put it in the same relative place on every page.",
          },
          {
            title: "Redundant Entry (A).",
            content:
              "Don't make people type the same information twice in one process. Pre-fill it or let them select what they entered earlier.",
          },
          {
            title: "Accessible Authentication (Minimum) (AA).",
            content:
              "Logging in can't depend on a cognitive test like remembering a password or solving a puzzle, unless there's an alternative. Allowing paste and password managers, passkeys, or email links all satisfy it.",
          },
        ],
      },
      {
        type: "text",
        content:
          "WCAG 2.2 also added three AAA criteria about focus visibility and authentication, and it retired the old 4.1.1 Parsing criterion, which modern browsers made obsolete.",
      },
      {
        type: "heading",
        content: "The fundamentals still do most of the work",
      },
      {
        type: "list",
        items: [
          {
            title: "Contrast.",
            content:
              "Body text needs a contrast ratio of at least 4.5:1 against its background; large text and meaningful UI parts like input borders and icons need 3:1. Check every theme, including dark mode and hover states.",
          },
          {
            title: "Don't rely on colour alone.",
            content:
              "Errors, required fields, chart series, and status indicators need a second cue: an icon, a label, a pattern, or text.",
          },
          {
            title: "Design the focus state.",
            content:
              "Every interactive element needs a clearly visible focus indicator. Treat it as a first-class state in the design system, alongside hover and pressed.",
          },
          {
            title: "Plan for zoom and reflow.",
            content:
              "Content should work at 400% zoom, which is roughly a 320-pixel-wide viewport, without horizontal scrolling. Responsive layouts get you most of the way there.",
          },
          {
            title: "Respect reduced motion.",
            content:
              "Parallax, auto-playing animation, and large page transitions can make some people physically unwell. Honour the operating system's reduced-motion setting.",
          },
          {
            title: "Annotate structure.",
            content:
              "Mark headings, landmarks, reading and focus order, form labels, and alt text in the design file, so developers don't have to guess.",
          },
        ],
      },
      {
        type: "code",
        language: "css",
        content: `/* A visible, consistent focus ring for every interactive element */
:focus-visible {
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 2px;
}

/* Keep small icon buttons at or above the 24px minimum target */
.icon-button {
  min-width: 24px;
  min-height: 24px;
}

/* Turn off non-essential motion for people who ask for less */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`,
      },
      {
        type: "text",
        content:
          "If you animate with the Motion library (formerly Framer Motion), its useReducedMotion hook lets you swap large movements for simple fades when someone has asked for reduced motion.",
      },
      {
        type: "heading",
        content: "Where the law stands",
      },
      {
        type: "list",
        items: [
          {
            title: "European Union:",
            content:
              "the European Accessibility Act has applied since 28 June 2025 to many consumer products and services, including e-commerce, banking, and e-books. It relies on the EN 301 549 standard, which currently references WCAG 2.1 AA, with an update toward WCAG 2.2 in progress.",
          },
          {
            title: "United States:",
            content:
              "the 2024 ADA Title II rule requires state and local governments to meet WCAG 2.1 AA. In April 2026 the Department of Justice extended the deadlines to April 2027 for larger entities and April 2028 for smaller ones; the standard itself didn't change.",
          },
          {
            title: "Canada:",
            content:
              "Accessibility Standards Canada adopted EN 301 549 as CAN/ASC-EN 301 549:2024, which brings in WCAG 2.1 AA as the benchmark for ICT under the Accessible Canada Act. Provinces add their own rules; Ontario's AODA, for example, already requires WCAG 2.0 AA for many organisations.",
          },
          {
            title: "What's next:",
            content:
              "WCAG 3.0 is still a working draft (the latest was published in March 2026) and the W3C says it is years from being finished. WCAG 2.2 AA is the right target today.",
          },
        ],
      },
      {
        type: "heading",
        content: "Make it part of the process",
      },
      {
        type: "list",
        items: [
          {
            title: "Build it into the design system.",
            content:
              "Accessible components, accessible token pairs, and documented focus and error states mean every team inherits the work instead of redoing it.",
          },
          {
            title: "Test with a keyboard and a screen reader.",
            content:
              "Automated checkers catch real problems, but only a portion of them. Tab through every flow, and try VoiceOver or NVDA on the critical paths.",
          },
          {
            title: "Include disabled people in research.",
            content:
              "Guidelines describe a minimum. Watching someone use your product with assistive technology shows you what actually matters.",
          },
        ],
      },
      {
        type: "text",
        content:
          "Accessible design is mostly good design applied consistently: clear hierarchy, readable text, predictable behaviour, and more than one way to get things done. Deciding it up front costs far less than retrofitting it later, and everyone benefits.",
      },
      {
        type: "sources",
        items: [
          {
            title: "What's new in WCAG 2.2 (W3C WAI)",
            href: "https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/",
          },
          {
            title: "WCAG 3 Introduction (W3C WAI)",
            href: "https://www.w3.org/WAI/WCAG3",
          },
          {
            title: "ADA Title II compliance date extension (Federal Register)",
            href: "https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web",
          },
          {
            title: "Accessibility Standards Canada adopts EN 301 549",
            href: "https://accessible.canada.ca/news/accessibility-standards-canada-adopts-globally-recognized-accessibility-standard-ict-products",
          },
          {
            title: "WHO fact sheet: Disability",
            href: "https://www.who.int/news-room/fact-sheets/detail/disability-and-health",
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
            The note you&apos;re looking for doesn&apos;t exist.
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

              {section.type === "code" && (
                <pre
                  className={`text-sm leading-relaxed overflow-x-auto rounded-xl border p-5 ${
                    isLight
                      ? "bg-gray-50 border-gray-200 text-gray-800"
                      : "bg-neutral-900 border-neutral-800 text-gray-200"
                  }`}
                >
                  <code className={`language-${section.language}`}>
                    {section.content}
                  </code>
                </pre>
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
