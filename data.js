const MATRIX_CATEGORIES = [
  {
    id: "all",
    name: "All Hub Nodes",
    shortName: "All (54)",
    accentColor: "#4285F4",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>`,
    subparts: []
  },
  {
    id: "cat-1",
    name: "Consumer AI & Productivity",
    shortName: "Consumer & Productivity",
    accentColor: "#4285F4",
    tagline: "Consumer Assistants & Workspace Extensions",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    subparts: [
      { id: "sub-1a", name: "Conversational Assistants" },
      { id: "sub-1b", name: "Advanced Research & Discovery" },
      { id: "sub-1c", name: "Workspace Intelligent Extensions" },
      { id: "sub-1d", name: "Visual Search Systems" }
    ]
  },
  {
    id: "cat-2",
    name: "Creative & Entertainment",
    shortName: "Creative & Entertainment",
    accentColor: "#9b51e0",
    tagline: "Generative Video, Image & Audio Studios",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12L2.5 7.5"/><path d="M12 12v9.5"/></svg>`,
    subparts: [
      { id: "sub-2a", name: "Next-Gen Video Generators" },
      { id: "sub-2b", name: "High-Fidelity Image Suites" },
      { id: "sub-2c", name: "Neural Audio & Copywriting" }
    ]
  },
  {
    id: "cat-3",
    name: "Developer & Coding AI Tools",
    shortName: "Developer & Coding",
    accentColor: "#64748b",
    tagline: "Autonomous Agent IDEs, CI/CD & APIs",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    subparts: [
      { id: "sub-3a", name: "Autonomous Agent IDEs" },
      { id: "sub-3b", name: "UI Automation & CI/CD Pipelines" },
      { id: "sub-3c", name: "Coding Extensions & Analytics" }
    ]
  },
  {
    id: "cat-4",
    name: "Mobile Hardware & System AI",
    shortName: "Mobile Hardware & System AI",
    accentColor: "#34A853",
    tagline: "On-Device Vision, Audio & Telephony OS",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    subparts: [
      { id: "sub-4a", name: "Mobile Vision Architecture" },
      { id: "sub-4b", name: "Acoustic Processing & Local OS" }
    ]
  },
  {
    id: "cat-5",
    name: "Enterprise & Cloud AI Platforms",
    shortName: "Enterprise & Cloud AI",
    accentColor: "#FBBC05",
    tagline: "GCP MLOps, RAG Cloud & Business APIs",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    subparts: [
      { id: "sub-5a", name: "Enterprise MLOps & RAG Cloud" },
      { id: "sub-5b", name: "Analysis & Ingestion Business APIs" },
      { id: "sub-5c", name: "Audio Systems & Form Automation" }
    ]
  },
  {
    id: "cat-6",
    name: "Advanced Scientific Research Models",
    shortName: "Scientific Research",
    accentColor: "#4285F4",
    tagline: "DeepMind Biotech, Math & Generalist Agents",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31L4.75 20.5a2 2 0 0 0 1.7 3h11.1a2 2 0 0 0 1.7-3L14 9.31V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/></svg>`,
    subparts: [
      { id: "sub-6a", name: "Biotech & Atmospheric Simulations" },
      { id: "sub-6b", name: "Reasoning Theorem Engines" }
    ]
  },
  {
    id: "cat-7",
    name: "Educational, Labs & Infrastructure",
    shortName: "Labs & Infrastructure",
    accentColor: "#EA4335",
    tagline: "Classifiers, Web Agents & TPU Silicon",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    subparts: [
      { id: "sub-7a", name: "Visual Classifiers & Processing Silicon" }
    ]
  }
];

const MATRIX_NODES = [
  // --- CATEGORY 1: Consumer AI & Productivity ---
  // Subpart: Conversational Assistants
  {
    id: "node-1",
    catId: "cat-1",
    subpartId: "sub-1a",
    subpartName: "Conversational Assistants",
    name: "Gemini",
    tag: "Core Assistant",
    accentColor: "#4285F4",
    desc: "Google's core consumer assistant.",
    function: "Answers natural language queries, summarizes long PDFs, writes code, and links with real-time Google Search.",
    officialLink: "https://gemini.google.com",
    systemInfo: "CLIENT_LLM",
    avatar: "G"
  },
  {
    id: "node-2",
    catId: "cat-1",
    subpartId: "sub-1a",
    subpartName: "Conversational Assistants",
    name: "Gemini Advanced",
    tag: "Premium Compute",
    accentColor: "#4285F4",
    desc: "Premium reasoning compute framework.",
    function: "Access to Ultra tier models to execute complex logical tasks, deep multi-step coding, and massive math reasoning without loss of context window.",
    officialLink: "https://gemini.google.com/advanced",
    systemInfo: "ULTRA_COMPUTE",
    avatar: "GA"
  },

  // Subpart: Advanced Research & Discovery
  {
    id: "node-3",
    catId: "cat-1",
    subpartId: "sub-1b",
    subpartName: "Advanced Research & Discovery",
    name: "NotebookLM",
    tag: "Source Research",
    accentColor: "#4285F4",
    desc: "Source-grounded note-taking research engine.",
    function: "Interrogates uploaded PDFs and links accurately without hallucinations, creating dynamic 2-host audio podcast overviews.",
    officialLink: "https://notebooklm.google",
    systemInfo: "VECTOR_RAG",
    avatar: "LM"
  },
  {
    id: "node-4",
    catId: "cat-1",
    subpartId: "sub-1b",
    subpartName: "Advanced Research & Discovery",
    name: "AI Mode (Search Overviews)",
    tag: "SERP Layer",
    accentColor: "#4285F4",
    desc: "Generative framework inside Google core search.",
    function: "Synthesizes top internet results into a clean bulleted summary directly at the top of the SERP grid.",
    officialLink: "https://google.com",
    systemInfo: "SERP_SYNTH",
    avatar: "AM"
  },

  // Subpart: Workspace Intelligent Extensions
  {
    id: "node-5",
    catId: "cat-1",
    subpartId: "sub-1c",
    subpartName: "Workspace Intelligent Extensions",
    name: "Gemini Canvas",
    tag: "Document Tool",
    accentColor: "#4285F4",
    desc: "Content presentation transformer.",
    function: "Converts extensive data docs or text scripts automatically into stylized slideshow assets.",
    officialLink: "https://workspace.google.com",
    systemInfo: "DOC_STRUCT",
    avatar: "GC"
  },
  {
    id: "node-6",
    catId: "cat-1",
    subpartId: "sub-1c",
    subpartName: "Workspace Intelligent Extensions",
    name: "Gemini in Gmail",
    tag: "Inbox Extension",
    accentColor: "#4285F4",
    desc: "Integrated email assistant.",
    function: "Drafts rapid custom mails from prompts using 'Help me write', summarizes message threads, and suggests smart replies.",
    officialLink: "https://mail.google.com",
    systemInfo: "MAIL_AGENT",
    avatar: "MG"
  },
  {
    id: "node-7",
    catId: "cat-1",
    subpartId: "sub-1c",
    subpartName: "Workspace Intelligent Extensions",
    name: "Gemini in Docs",
    tag: "Creative Writer",
    accentColor: "#4285F4",
    desc: "Semantic text editor workspace.",
    function: "Drafts creative text structures and alters tones smoothly between formal, casual, or concise setups.",
    officialLink: "https://docs.google.com",
    systemInfo: "TEXT_WORKSPACE",
    avatar: "GD"
  },
  {
    id: "node-8",
    catId: "cat-1",
    subpartId: "sub-1c",
    subpartName: "Workspace Intelligent Extensions",
    name: "Gemini in Sheets",
    tag: "Data Analyst",
    accentColor: "#4285F4",
    desc: "Dynamic spreadsheet companion.",
    function: "Evaluates raw data matrices to build advanced formulas, automated pivot charts, and fill context columns.",
    officialLink: "https://sheets.google.com",
    systemInfo: "TABULAR_ANALYST",
    avatar: "GS"
  },
  {
    id: "node-9",
    catId: "cat-1",
    subpartId: "sub-1c",
    subpartName: "Workspace Intelligent Extensions",
    name: "Gemini in Slides",
    tag: "Automation Tool",
    accentColor: "#4285F4",
    desc: "Visual presentation layout builder.",
    function: "Arranges custom presentation deck architectures and creates diffusion images directly onto visual slides.",
    officialLink: "https://slides.google.com",
    systemInfo: "SLIDE_RENDER",
    avatar: "GL"
  },
  {
    id: "node-10",
    catId: "cat-1",
    subpartId: "sub-1c",
    subpartName: "Workspace Intelligent Extensions",
    name: "Gemini in Chrome",
    tag: "Browser Panel",
    accentColor: "#4285F4",
    desc: "Side-panel browser assistant.",
    function: "Summarizes active open tabs, translates articles, and drafts context text while browsing web spaces.",
    officialLink: "https://google.com/chrome",
    systemInfo: "DOM_MONITOR",
    avatar: "CH"
  },

  // Subpart: Visual Search Systems
  {
    id: "node-11",
    catId: "cat-1",
    subpartId: "sub-1d",
    subpartName: "Visual Search Systems",
    name: "Google Lens",
    tag: "Visual Engine",
    accentColor: "#4285F4",
    desc: "Computer vision visual analysis module.",
    function: "Real-time visual object, plant, and location identification with live textual translating and step-by-step math answers from camera snaps.",
    officialLink: "https://lens.google",
    systemInfo: "EDGE_VISION",
    avatar: "LN"
  },

  // --- CATEGORY 2: Creative & Entertainment ---
  // Subpart: Next-Gen Video Generators
  {
    id: "node-12",
    catId: "cat-2",
    subpartId: "sub-2a",
    subpartName: "Next-Gen Video Generators",
    name: "Google Flow (Flow Studio)",
    tag: "Engine Suite",
    accentColor: "#9b51e0",
    desc: "High-end multimodal creative narrative timeline workspace.",
    function: "Automation of multi-stage assets, large-scale video plotting, and absolute video timeline manipulation blocks.",
    officialLink: "https://labs.google",
    systemInfo: "TIMELINE_ENGINE",
    avatar: "GF"
  },
  {
    id: "node-13",
    catId: "cat-2",
    subpartId: "sub-2a",
    subpartName: "Next-Gen Video Generators",
    name: "Veo (Veo 3)",
    tag: "Production Video",
    accentColor: "#9b51e0",
    desc: "State-of-the-art cinematic video foundation model.",
    function: "Renders ultra-high-definition 4K video streams from text prompts, keeping spatial physics, zooming, and panning camera movements realistic.",
    officialLink: "https://deepmind.google/technologies/veo",
    systemInfo: "4K_KINETICS",
    avatar: "V3"
  },
  {
    id: "node-14",
    catId: "cat-2",
    subpartId: "sub-2a",
    subpartName: "Next-Gen Video Generators",
    name: "VideoFX",
    tag: "Labs Visual",
    accentColor: "#9b51e0",
    desc: "Lightweight experimental video looping platform inside Google Labs.",
    function: "Fast creation of short looping visuals and video asset clips across variable vertical/horizontal aspect scales.",
    officialLink: "https://aitestkitchen.withgoogle.com",
    systemInfo: "LABS_CLIPPER",
    avatar: "VF"
  },

  // Subpart: High-Fidelity Image Suites
  {
    id: "node-15",
    catId: "cat-2",
    subpartId: "sub-2b",
    subpartName: "High-Fidelity Image Suites",
    name: "Imagen 3",
    tag: "Diffusion Core",
    accentColor: "#9b51e0",
    desc: "Flagship text-to-image foundation model.",
    function: "Diffusion synthesis rendering detailed imagery, shadow physics, and correct typographical letter print alignments inside objects.",
    officialLink: "https://deepmind.google/technologies/imagen",
    systemInfo: "DIFFUSION_CORE",
    avatar: "I3"
  },
  {
    id: "node-16",
    catId: "cat-2",
    subpartId: "sub-2b",
    subpartName: "High-Fidelity Image Suites",
    name: "ImageFX",
    tag: "Labs Visual",
    accentColor: "#9b51e0",
    desc: "Standalone labs creation dashboard.",
    function: "Deploys Imagen 3 engine parameters using interactive tokenized 'expressive chips' for rapid style and prompt manipulation loops.",
    officialLink: "https://aitestkitchen.withgoogle.com",
    systemInfo: "TOKEN_CANVAS",
    avatar: "IF"
  },
  {
    id: "node-17",
    catId: "cat-2",
    subpartId: "sub-2b",
    subpartName: "High-Fidelity Image Suites",
    name: "Whisk",
    tag: "Editing Suite",
    accentColor: "#9b51e0",
    desc: "Multi-photo segment blender sandbox.",
    function: "Drags and drops primary subjects from one graphic structure into the composition, background grid, or design style of another.",
    officialLink: "https://labs.google",
    systemInfo: "IMAGE_SEGMENTER",
    avatar: "WH"
  },

  // Subpart: Neural Audio & Copywriting
  {
    id: "node-18",
    catId: "cat-2",
    subpartId: "sub-2c",
    subpartName: "Neural Audio & Copywriting",
    name: "Google Flow Music",
    tag: "Audio Studio",
    accentColor: "#9b51e0",
    desc: "Professional multi-track instrumental engine console.",
    function: "Constructs whole high-fidelity tracks with discrete instrumentation layer nodes and structural loops from text metrics.",
    officialLink: "https://labs.google",
    systemInfo: "AUDIO_CONSOLE",
    avatar: "FM"
  },
  {
    id: "node-19",
    catId: "cat-2",
    subpartId: "sub-2c",
    subpartName: "Neural Audio & Copywriting",
    name: "MusicFX",
    tag: "Labs Audio",
    accentColor: "#9b51e0",
    desc: "Rapid background score synthesizer.",
    function: "Processes raw phrases to yield looping non-vocal audio textures, beats, and specific acoustic atmospheres.",
    officialLink: "https://aitestkitchen.withgoogle.com",
    systemInfo: "ACOUSTIC_BEDS",
    avatar: "MF"
  },
  {
    id: "node-20",
    catId: "cat-2",
    subpartId: "sub-2c",
    subpartName: "Neural Audio & Copywriting",
    name: "Pomelo / Pomelli",
    tag: "Content Optimizer",
    accentColor: "#9b51e0",
    desc: "Target marketing copy optimization module.",
    function: "Ingests rigid corporate identity rules to execute ad variants, engaging captions, and optimized data snippets.",
    officialLink: "https://labs.google",
    systemInfo: "COPY_AUTOMATOR",
    avatar: "PM"
  },

  // --- CATEGORY 3: Developer & Coding AI Tools ---
  // Subpart: Autonomous Agent IDEs
  {
    id: "node-21",
    catId: "cat-3",
    subpartId: "sub-3a",
    subpartName: "Autonomous Agent IDEs",
    name: "Google AI Studio",
    tag: "Sandbox API",
    accentColor: "#64748b",
    desc: "Fast web framework for prompt prototyping and deployment keys.",
    function: "Instant deployment testing of prompt configurations and direct provisioning of production-grade Gemini API keys.",
    officialLink: "https://aistudio.google.com",
    systemInfo: "API_ROUTER",
    avatar: "AS"
  },
  {
    id: "node-22",
    catId: "cat-3",
    subpartId: "sub-3a",
    subpartName: "Autonomous Agent IDEs",
    name: "Google Antigravity",
    tag: "Agent IDE",
    accentColor: "#64748b",
    desc: "Agent-first multi-agent integrated development environment.",
    function: "Complete codebase structural comprehension using independent AI agent swarms to execute complex code refactoring, full stack feature builds, and massive version migrations autonomously.",
    officialLink: "https://labs.google",
    systemInfo: "REPO_SWARM",
    avatar: "AG"
  },

  // Subpart: UI Automation & CI/CD Pipelines
  {
    id: "node-23",
    catId: "cat-3",
    subpartId: "sub-3b",
    subpartName: "UI Automation & CI/CD Pipelines",
    name: "Stitch",
    tag: "UI codegen",
    accentColor: "#64748b",
    desc: "Automated structural responsive multi-page web interface designer.",
    function: "Compiles description strings into complete wireframe codes or exports design layers directly to production Figma file formats.",
    officialLink: "https://labs.google",
    systemInfo: "UI_CODEGEN",
    avatar: "ST"
  },
  {
    id: "node-24",
    catId: "cat-3",
    subpartId: "sub-3b",
    subpartName: "UI Automation & CI/CD Pipelines",
    name: "AI Studio Build",
    tag: "Prototyping",
    accentColor: "#64748b",
    desc: "Instance execution layout suite.",
    function: "Automatically grabs raw layouts from Stitch or localized repositories and builds micro-instance test servers with a live shareable evaluation URL.",
    officialLink: "https://aistudio.google.com",
    systemInfo: "RUNTIME_COMPILER",
    avatar: "AB"
  },
  {
    id: "node-25",
    catId: "cat-3",
    subpartId: "sub-3b",
    subpartName: "UI Automation & CI/CD Pipelines",
    name: "Jules",
    tag: "CI/CD Pipeline",
    accentColor: "#64748b",
    desc: "Continuous production code maintenance agent.",
    function: "Scans enterprise level code repositories to safely apply security patches, repair active production pipeline breaks, and auto-generate test script models.",
    officialLink: "https://labs.google",
    systemInfo: "CICD_MAINTAINER",
    avatar: "JU"
  },
  {
    id: "node-26",
    catId: "cat-3",
    subpartId: "sub-3b",
    subpartName: "UI Automation & CI/CD Pipelines",
    name: "Opel",
    tag: "Automation Tool",
    accentColor: "#64748b",
    desc: "User actions workflow compiler macro tool.",
    function: "Tracks browser manual repetitive behaviors to generate standalone macro engines and automatic workflow loops.",
    officialLink: "https://labs.google",
    systemInfo: "MACRO_RECORDER",
    avatar: "OP"
  },

  // Subpart: Coding Extensions & Analytics
  {
    id: "node-27",
    catId: "cat-3",
    subpartId: "sub-3c",
    subpartName: "Coding Extensions & Analytics",
    name: "Gemini Code Assist",
    tag: "IDE Extension",
    accentColor: "#64748b",
    desc: "Professional coding assistant plugin framework.",
    function: "Inline code generation autocomplete, algorithmic performance logic optimization, and console debugging within IDEs like VS Code and Android Studio.",
    officialLink: "https://cloud.google.com/code-assist",
    systemInfo: "IDE_PLUGIN",
    avatar: "CA"
  },
  {
    id: "node-28",
    catId: "cat-3",
    subpartId: "sub-3c",
    subpartName: "Coding Extensions & Analytics",
    name: "Google Colab (Colab Enterprise)",
    tag: "Compute Node",
    accentColor: "#64748b",
    desc: "Cloud computation data notebook cluster.",
    function: "Autocomplete array code block blocks for Python, localized data visualizations, and cloud GPU resource scaling metrics.",
    officialLink: "https://colab.research.google.com",
    systemInfo: "COMPUTE_NOTEBOOK",
    avatar: "CE"
  },
  {
    id: "node-29",
    catId: "cat-3",
    subpartId: "sub-3c",
    subpartName: "Coding Extensions & Analytics",
    name: "Gemini CLI",
    tag: "Terminal Shell",
    accentColor: "#64748b",
    desc: "Terminal shell prompt portal.",
    function: "Direct console entry point executing terminal queries for bash script formulations, server administration patterns, and system management parameters.",
    officialLink: "https://aistudio.google.com",
    systemInfo: "SHELL_ENDPOINT",
    avatar: "CL"
  },

  // --- CATEGORY 4: Mobile Hardware & System AI ---
  // Subpart: Mobile Vision Architecture
  {
    id: "node-30",
    catId: "cat-4",
    subpartId: "sub-4a",
    subpartName: "Mobile Vision Architecture",
    name: "Magic Eraser",
    tag: "On-Device Vision",
    accentColor: "#34A853",
    desc: "Edge vision photo asset pixel inpainter.",
    function: "Automatically strips selected photobombers or data wires out of images, using surrounding background textures to heal empty layers.",
    officialLink: "https://photos.google.com",
    systemInfo: "NPU_INPAINTER",
    avatar: "ER"
  },
  {
    id: "node-31",
    catId: "cat-4",
    subpartId: "sub-4a",
    subpartName: "Mobile Vision Architecture",
    name: "Magic Editor",
    tag: "On-Device Diffusion",
    accentColor: "#34A853",
    desc: "Semantic object layout shifting system.",
    function: "Re-scales or relocates structural photo subjects and recreates global layer vectors (like editing sky time matrices into golden hour lighting).",
    officialLink: "https://photos.google.com",
    systemInfo: "EDGE_DIFFUSION",
    avatar: "ED"
  },

  // Subpart: Acoustic Processing & Local OS
  {
    id: "node-32",
    catId: "cat-4",
    subpartId: "sub-4b",
    subpartName: "Acoustic Processing & Local OS",
    name: "Audio Magic Eraser",
    tag: "On-Device Sound",
    accentColor: "#34A853",
    desc: "Multi-channel acoustic isolation module.",
    function: "Separates video audio into independent channels (Voice, Wind, Traffic, Crowd) allowing manual reduction sliders to make voice tracks crisp.",
    officialLink: "https://photos.google.com",
    systemInfo: "ACOUSTIC_FILTER",
    avatar: "AE"
  },
  {
    id: "node-33",
    catId: "cat-4",
    subpartId: "sub-4b",
    subpartName: "Acoustic Processing & Local OS",
    name: "Live Translate (System Level)",
    tag: "Local Component",
    accentColor: "#34A853",
    desc: "Secure offline edge translate module running inside Android core framework.",
    function: "Immediate completely localized translations of phone call streams, live video caption assets, and text logs without cloud transmission.",
    officialLink: "https://google.com",
    systemInfo: "LOW_LATENCY_EDGE",
    avatar: "LT"
  },
  {
    id: "node-34",
    catId: "cat-4",
    subpartId: "sub-4b",
    subpartName: "Acoustic Processing & Local OS",
    name: "Call Assist / Hold for Me",
    tag: "Proxy System",
    accentColor: "#34A853",
    desc: "Telephony app proxy agent module.",
    function: "Continuous screening of active spam signals and automatically monitors automated helpline waiting queues, alerting the user when human operators join.",
    officialLink: "https://google.com",
    systemInfo: "TELEPHONY_PROXY",
    avatar: "CA"
  },

  // --- CATEGORY 5: Enterprise & Cloud AI Platforms ---
  // Subpart: Enterprise MLOps & RAG Cloud
  {
    id: "node-35",
    catId: "cat-5",
    subpartId: "sub-5a",
    subpartName: "Enterprise MLOps & RAG Cloud",
    name: "Vertex AI Platform",
    tag: "GCP MLOps",
    accentColor: "#FBBC05",
    desc: "Ultimate unified corporate machine learning workspace.",
    function: "Large scale neural net tracking, global model custom fine-tuning loops, secure cloud hosting pipelines, and complete distributed MLOps lifecycle tracking.",
    officialLink: "https://cloud.google.com/vertex-ai",
    systemInfo: "GCP_MLOPS",
    avatar: "VX"
  },
  {
    id: "node-36",
    catId: "cat-5",
    subpartId: "sub-5a",
    subpartName: "Enterprise MLOps & RAG Cloud",
    name: "Vertex AI Search and Conversation",
    tag: "Cloud RAG",
    accentColor: "#FBBC05",
    desc: "Corporate confidential RAG pipeline compiler.",
    function: "Indexes internal structural corporate documents into vector clusters, establishing secure search chatbots bounded by accurate company parameters.",
    officialLink: "https://cloud.google.com/vertex-ai-search",
    systemInfo: "BOUNDED_RAG",
    avatar: "VS"
  },

  // Subpart: Analysis & Ingestion Business APIs
  {
    id: "node-37",
    catId: "cat-5",
    subpartId: "sub-5b",
    subpartName: "Analysis & Ingestion Business APIs",
    name: "Cloud Vision AI",
    tag: "Cloud API",
    accentColor: "#FBBC05",
    desc: "Mass-scale high-throughput image recognition API.",
    function: "Structural manufacturing line component defect identification, automated OCR invoice readings, and explicit image moderation blocks.",
    officialLink: "https://cloud.google.com/vision",
    systemInfo: "VISION_API",
    avatar: "VA"
  },
  {
    id: "node-38",
    catId: "cat-5",
    subpartId: "sub-5b",
    subpartName: "Analysis & Ingestion Business APIs",
    name: "Video Intelligence API",
    tag: "Cloud API",
    accentColor: "#FBBC05",
    desc: "Context-aware mass video indexing platform.",
    function: "Generates timestamps for object presence, detects visual scene changes, and automates tracking of explicit tags inside uploaded video chunks.",
    officialLink: "https://cloud.google.com/video-intelligence",
    systemInfo: "TEMPORAL_TAGGER",
    avatar: "VI"
  },
  {
    id: "node-39",
    catId: "cat-5",
    subpartId: "sub-5b",
    subpartName: "Analysis & Ingestion Business APIs",
    name: "Natural Language API",
    tag: "Cloud API",
    accentColor: "#FBBC05",
    desc: "Linguistics and text semantics analysis tool.",
    function: "Scans extreme amounts of reviews or support channels to calculate dynamic client sentiment metrics and text vector splits.",
    officialLink: "https://cloud.google.com/natural-language",
    systemInfo: "SENTIMENT_PARSER",
    avatar: "NL"
  },
  {
    id: "node-40",
    catId: "cat-5",
    subpartId: "sub-5b",
    subpartName: "Analysis & Ingestion Business APIs",
    name: "Translation AI API",
    tag: "Cloud API",
    accentColor: "#FBBC05",
    desc: "Corporate multi-language localization processor.",
    function: "Mass database string transitions and automated deployment localized webpage translations across 100+ global languages securely.",
    officialLink: "https://cloud.google.com/translation",
    systemInfo: "CLOUD_LOCALIZER",
    avatar: "TR"
  },

  // Subpart: Audio Systems & Form Automation
  {
    id: "node-41",
    catId: "cat-5",
    subpartId: "sub-5c",
    subpartName: "Audio Systems & Form Automation",
    name: "Cloud Speech-to-Text (STT)",
    tag: "Cloud API",
    accentColor: "#FBBC05",
    desc: "High-volume verbatim audio transcription system.",
    function: "Converts call customer logs into structured scripts using Diarization Nodes to keep separate speaker channels distinct.",
    officialLink: "https://cloud.google.com/speech-to-text",
    systemInfo: "AUDIO_TRANSCRIPTOR",
    avatar: "ST"
  },
  {
    id: "node-42",
    catId: "cat-5",
    subpartId: "sub-5c",
    subpartName: "Audio Systems & Form Automation",
    name: "Cloud Text-to-Speech (TTS)",
    tag: "Cloud API",
    accentColor: "#FBBC05",
    desc: "DeepMind neural WaveNet sound voice synthesis core.",
    function: "Converts textual document arrays into realistic human streams complete with accent curves and micro-pauses.",
    officialLink: "https://cloud.google.com/text-to-speech",
    systemInfo: "WAVENET_SYNTH",
    avatar: "TT"
  },
  {
    id: "node-43",
    catId: "cat-5",
    subpartId: "sub-5c",
    subpartName: "Audio Systems & Form Automation",
    name: "Document AI",
    tag: "Cloud Suite",
    accentColor: "#FBBC05",
    desc: "Unstructured paperwork metric extractor.",
    function: "Parses tax forms, deeds, and physical loan documents to transform parameters into clear server database layouts.",
    officialLink: "https://cloud.google.com/document-ai",
    systemInfo: "METRIC_INGEST",
    avatar: "DA"
  },
  {
    id: "node-44",
    catId: "cat-5",
    subpartId: "sub-5c",
    subpartName: "Audio Systems & Form Automation",
    name: "Contact Center AI (CCAI)",
    tag: "Cloud Suite",
    accentColor: "#FBBC05",
    desc: "Omnichannel virtual support customer framework.",
    function: "Outdates standard robotic phone loops with multi-turn virtual bots that integrate directly into live agent triage pipelines.",
    officialLink: "https://cloud.google.com/contact-center/ai",
    systemInfo: "DIALOGFLOW_IVR",
    avatar: "CC"
  },
  {
    id: "node-45",
    catId: "cat-5",
    subpartId: "sub-5c",
    subpartName: "Audio Systems & Form Automation",
    name: "Google Ads Performance Max (PMax)",
    tag: "Advertising Core",
    accentColor: "#FBBC05",
    desc: "Programmatic advertising budget optimizer system.",
    function: "Automatically structures multi-format ad variations and balances dynamic asset allocations across YT, SERP, and Maps grids.",
    officialLink: "https://ads.google.com?subid=xs-ip-gemini-adlc",
    systemInfo: "BIDDING_MATRIX",
    avatar: "PM"
  },

  // --- CATEGORY 6: Advanced Scientific Research Models ---
  // Subpart: Biotech & Atmospheric Simulations
  {
    id: "node-46",
    catId: "cat-6",
    subpartId: "sub-6a",
    subpartName: "Biotech & Atmospheric Simulations",
    name: "AlphaFold (AlphaFold 3)",
    tag: "DeepMind Pure",
    accentColor: "#4285F4",
    desc: "DeepMind biological macromolecular structure layout predictor.",
    function: "Accelerates medicine discovery times by modeling highly precise 3D atomic link shapes across proteins, DNA, RNA, and ligands.",
    officialLink: "https://alphafold.ebi.ac.uk",
    systemInfo: "MOLECULAR_DYNAMICS",
    avatar: "AF"
  },
  {
    id: "node-47",
    catId: "cat-6",
    subpartId: "sub-6a",
    subpartName: "Biotech & Atmospheric Simulations",
    name: "GraphCast",
    tag: "DeepMind Weather",
    accentColor: "#4285F4",
    desc: "DeepMind spatial atmospheric medium-range storm grid forecaster.",
    function: "Formulates hyper-accurate 10-day weather event outputs in seconds, surpassing old supercomputing speeds to compute severe precipitation vectors.",
    officialLink: "https://deepmind.google/technologies/graphcast",
    systemInfo: "CLIMATE_GRID",
    avatar: "GC"
  },

  // Subpart: Reasoning Theorem Engines
  {
    id: "node-48",
    catId: "cat-6",
    subpartId: "sub-6b",
    subpartName: "Reasoning Theorem Engines",
    name: "AlphaCode (AlphaCode 2)",
    tag: "DeepMind Dev",
    accentColor: "#4285F4",
    desc: "Elite-tier algorithm reasoning and programming synthesis system.",
    function: "Interprets international competitive informatics rules to deploy optimized multi-layer scripts inside top human designer margins.",
    officialLink: "https://deepmind.google/discover/blog/alphacode-2-powering-next-generation-code-generation",
    systemInfo: "CODE_COMPILER",
    avatar: "AC"
  },
  {
    id: "node-49",
    catId: "cat-6",
    subpartId: "sub-6b",
    subpartName: "Reasoning Theorem Engines",
    name: "AlphaGeometry",
    tag: "DeepMind Math",
    accentColor: "#4285F4",
    desc: "Pure mathematical neuro-symbolic geometry theorem prover.",
    function: "Generates verifiable geometric logical structural proofs for Olympiad tasks where normal language models fail.",
    officialLink: "https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry",
    systemInfo: "INFERENCE_CORE",
    avatar: "AG"
  },
  {
    id: "node-50",
    catId: "cat-6",
    subpartId: "sub-6b",
    subpartName: "Reasoning Theorem Engines",
    name: "SIMA",
    tag: "DeepMind Agent",
    accentColor: "#4285F4",
    desc: "Multi-world generalist active behavioral embodiment agent frame.",
    function: "Tracks standard camera pixels to autonomously maneuver open-world 3D digital environments using standard input macro arrays without API code hooks.",
    officialLink: "https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments",
    systemInfo: "BEHAVIOR_SIMULATOR",
    avatar: "SM"
  },

  // --- CATEGORY 7: Educational, Labs & Infrastructure ---
  // Subpart: Visual Classifiers & Processing Silicon
  {
    id: "node-51",
    catId: "cat-7",
    subpartId: "sub-7a",
    subpartName: "Visual Classifiers & Processing Silicon",
    name: "Teachable Machine",
    tag: "Labs System",
    accentColor: "#EA4335",
    desc: "No-code foundational browser ML classification canvas.",
    function: "Allows students to train basic local models live using raw webcam frames, microphone sound bits, or posture alignments instantly.",
    officialLink: "https://teachablemachine.withgoogle.com",
    systemInfo: "LOCAL_CLASSIFIER",
    avatar: "TM"
  },
  {
    id: "node-52",
    catId: "cat-7",
    subpartId: "sub-7a",
    subpartName: "Visual Classifiers & Processing Silicon",
    name: "Project Mariner",
    tag: "Labs Agent",
    accentColor: "#EA4335",
    desc: "Autonomous web browser session pipeline operation agent.",
    function: "Direct browser DOM execution navigating multi-tab targets like verifying flights data matrices, filling fields, and running checkouts.",
    officialLink: "https://labs.google",
    systemInfo: "DOM_AGENT",
    avatar: "MR"
  },
  {
    id: "node-53",
    catId: "cat-7",
    subpartId: "sub-7a",
    subpartName: "Visual Classifiers & Processing Silicon",
    name: "Quick, Draw!",
    tag: "Labs Sandbox",
    accentColor: "#EA4335",
    desc: "Crowdsourced neural net visual classification verification setup.",
    function: "Real-time analysis of custom drawing strokes to collect data arrays for massive pattern recognition research databases.",
    officialLink: "https://quickdraw.withgoogle.com",
    systemInfo: "SHAPE_VALIDATOR",
    avatar: "QD"
  },
  {
    id: "node-54",
    catId: "cat-7",
    subpartId: "sub-7a",
    subpartName: "Visual Classifiers & Processing Silicon",
    name: "Cloud TPUs (Tensor Processing Units)",
    tag: "Silicon Hardware",
    accentColor: "#EA4335",
    desc: "Datacenter custom ASIC supercomputing accelerator hardware silicon.",
    function: "Runs massive matrix multiplications at hyper processing rates, serving as the physical chip foundation required to train and host Gemini models.",
    officialLink: "https://cloud.google.com/tpu",
    systemInfo: "MATRIX_SILICON",
    avatar: "TP"
  }
];
