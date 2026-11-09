export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  github: string;
  live: string | null;
  featured: boolean;

  problem: string;
  solution: string;
  role: string;
  architecture: string[];
  highlights: string[];
  results: string[];
  challenges: string[];
  lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "aquamind-ai",
    number: "01",
    title: "AquaMind AI",
    category: "Autonomous AI Agent",
    year: "2026",

    summary:
      "An autonomous AI agent for reverse osmosis plant operations that investigates anomalies, retrieves engineering knowledge, evaluates interventions, and supports controlled maintenance decisions.",

    tags: [
      "AI Agents",
      "Python",
      "Gemini",
      "MCP",
      "SQLite",
      "Automation",
    ],

    metrics: [
      {
        value: "572",
        label: "Tests Passed",
      },
      {
        value: "100%",
        label: "Test Coverage",
      },
      {
        value: "7",
        label: "Tool Calls / Trace",
      },
    ],

    github: "https://github.com/xmohamedtariq/AquaMindAI-Agent",

    live:
      "https://aquamindai-agent-mohammed-tariq1.vercel.app/",

    featured: true,

    problem:
      "Reverse osmosis systems generate operational data continuously, but detecting degradation, investigating its cause, and selecting an appropriate response often requires manual engineering analysis across multiple sources and tools.",

    solution:
      "AquaMind AI explores how an autonomous but controlled AI agent can investigate RO operational scenarios end to end. The system combines LLM reasoning with engineering tools, verified knowledge retrieval, persistent memory, permission controls, cost tracking, and auditability.",

    role:
      "Creator and sole developer. I designed the agent architecture, implementation, MCP integration, memory layer, permission system, safety controls, evaluation traces, automated tests, deployment, and technical documentation.",

    architecture: [
      "Operational data or investigation request",
      "Plan–Act–Reflect agent loop",
      "Approved engineering tools",
      "MCP knowledge retrieval",
      "Persistent SQLite memory",
      "Permission and human-approval layer",
      "Cost tracking and audit logging",
      "Final investigation result or controlled action",
    ],

    highlights: [
      "Single-agent Plan–Act–Reflect architecture",
      "Live Gemini model integration",
      "Model Context Protocol knowledge search",
      "Persistent SQLite memory",
      "Human-in-the-loop permission tiers",
      "Task-level cost controls",
      "Hash-chained audit logging",
      "Prompt-injection protections",
      "Reproducible success and failure traces",
      "Public Vercel deployment",
    ],

    results: [
      "572 automated tests passed",
      "100% test coverage in final verification",
      "Verified seven-turn / seven-tool-call agent execution",
      "Persistent memory verified across runtime restart",
      "MCP client/server integration verified",
      "Task-level token and cost tracking validated",
    ],

    challenges: [
      "Balancing autonomous reasoning with deterministic operational safety controls",
      "Maintaining reproducible traces while using a live language model",
      "Separating genuine task failure from successful safety enforcement",
      "Preserving state across runtime restarts",
    ],

    lessons: [
      "Agent reliability requires more than strong prompting; permissions, termination conditions, auditability, evaluation, and deterministic safeguards matter.",
      "Human approval should be part of the architecture for consequential actions rather than added as an afterthought.",
      "Evaluation traces are essential for proving agent behavior instead of merely describing it.",
    ],
  },

  {
    slug: "yemen-opportunity-navigator",
    number: "02",
    title: "Yemen Opportunity Navigator",
    category: "Multilingual RAG Platform",
    year: "2026",

    summary:
      "A bilingual retrieval-augmented generation system for discovering opportunities using semantic retrieval, BM25, hybrid ranking, reranking, citations, and systematic evaluation.",

    tags: [
      "RAG",
      "E5 Embeddings",
      "Chroma",
      "BM25",
      "Cohere",
      "Streamlit",
    ],

    metrics: [
      {
        value: "100%",
        label: "Recall@5",
      },
      {
        value: "0.9526",
        label: "RAGAS Score",
      },
      {
        value: "5,802",
        label: "Knowledge Chunks",
      },
    ],

    github:
      "https://github.com/xmohamedtariq/Yemen_Opportunity_Navigator_RAG",

    live:
      "https://yemen-opportunity-navigator.streamlit.app/",

    featured: false,

    problem:
      "Opportunities relevant to Yemeni students and professionals are distributed across many sources, making discovery slow and requiring users to search repeatedly across different websites.",

    solution:
      "A multilingual RAG application that indexes structured opportunity content and combines dense semantic retrieval with lexical retrieval, reciprocal-rank fusion, reranking, and source-backed answer generation.",

    role:
      "Sole developer. I built the ingestion and retrieval pipeline, multilingual embeddings, hybrid search, reranking, RAG evaluation, authentication features, bilingual interface, and deployment.",

    architecture: [
      "Opportunity sources",
      "Document processing and chunking",
      "5,802 indexed knowledge chunks",
      "E5 multilingual embeddings",
      "Chroma vector retrieval",
      "BM25 lexical retrieval",
      "Hybrid RRF fusion",
      "Cohere reranking",
      "Top retrieved evidence",
      "Answer generation with citations",
    ],

    highlights: [
      "Multilingual Arabic and English retrieval",
      "E5 multilingual embeddings",
      "Chroma vector database",
      "BM25 lexical search",
      "Hybrid Reciprocal Rank Fusion",
      "Cohere reranking",
      "Source citations",
      "Authentication",
      "Favorites and search history",
      "Streamlit deployment",
    ],

    results: [
      "5,802 knowledge chunks indexed",
      "30-question evaluation golden set",
      "Recall@5 = 100%",
      "RAGAS average = 0.9526",
      "Context precision = 1.000",
      "Context recall = 1.000",
      "Faithfulness = 0.9875",
    ],

    challenges: [
      "Supporting both Arabic and English retrieval consistently",
      "Balancing semantic and keyword-based retrieval",
      "Ensuring answers remain grounded in retrieved evidence",
      "Measuring retrieval quality separately from answer quality",
    ],

    lessons: [
      "Hybrid retrieval can outperform relying on dense search alone.",
      "Evaluation must test retrieval and generation independently.",
      "High-quality citations significantly improve trust in RAG systems.",
    ],
  },

  {
    slug: "house-price-prediction-aden",
    number: "03",
    title: "House Price Prediction — Aden City",
    category: "Machine Learning · Data Analytics",
    year: "2025",

    summary:
      "A supervised machine learning regression project for estimating residential property prices in Aden using structured housing features and a reproducible scikit-learn pipeline.",

    tags: [
      "Machine Learning",
      "Python",
      "pandas",
      "scikit-learn",
      "Regression",
    ],

    metrics: [
      {
        value: "0.984",
        label: "R² Score",
      },
      {
        value: "120",
        label: "Properties",
      },
      {
        value: "5",
        label: "Features",
      },
    ],

    github:
      "https://github.com/xmohamedtariq/House-Price-Prediction-in-Aden-City",

    live: null,

    featured: false,

    problem:
      "Property price estimation is influenced by multiple features including size, rooms, age, and location. This project explores a structured machine learning approach using locally relevant housing data from Aden.",

    solution:
      "An end-to-end supervised regression workflow that loads and preprocesses housing data, encodes categorical information, trains a Linear Regression baseline, evaluates predictions, and visualizes actual versus predicted prices.",

    role:
      "Sole developer. I developed the Python data-processing, regression, evaluation, prediction, and visualization workflow.",

    architecture: [
      "Aden housing dataset",
      "Data cleaning",
      "Feature preparation",
      "District encoding",
      "80/20 train-test split",
      "Linear Regression",
      "Test-set predictions",
      "MAE / MSE / RMSE / R² evaluation",
      "Actual vs predicted visualization",
    ],

    highlights: [
      "120-property dataset",
      "Five predictive features",
      "Reproducible train/test split",
      "Regression evaluation with multiple metrics",
      "Actual vs predicted visualization",
      "Locally relevant Aden dataset",
    ],

    results: [
      "R² ≈ 0.98395 on the project test split",
      "MAE ≈ 3,836.66",
      "RMSE ≈ 4,416.94",
      "96 training records",
      "24 test records",
    ],

    challenges: [
      "Working with a relatively small dataset",
      "Representing categorical district information",
      "Avoiding overclaiming performance from a limited dataset",
    ],

    lessons: [
      "Strong test-set metrics do not automatically imply production-level real-estate valuation accuracy.",
      "A baseline model provides a useful reference before comparing more complex algorithms.",
      "Real-world deployment would require larger datasets, stronger categorical encoding, cross-validation, and external validation.",
    ],
  },

  {
    slug: "yemen-opportunities-portal",
    number: "04",
    title: "Yemen Opportunities Portal",
    category: "Bilingual Web Application · PWA",
    year: "2026",

    summary:
      "A bilingual opportunity discovery platform with search, filtering, favorites, deadline information, Arabic RTL support, responsive design, and offline PWA capabilities.",

    tags: [
      "JavaScript",
      "PWA",
      "Responsive Design",
      "Bilingual UI",
      "RTL",
      "GitHub Pages",
    ],

    metrics: [
      {
        value: "50",
        label: "Opportunities",
      },
      {
        value: "43",
        label: "Unique Sources",
      },
      {
        value: "360px",
        label: "Mobile Ready",
      },
    ],

    github:
      "https://github.com/xmohamedtariq/yemen-opportunities-portal",

    live:
      "https://xmohamedtariq.github.io/yemen-opportunities-portal/",

    featured: false,

    problem:
      "Opportunity information is often scattered and difficult to browse efficiently, especially when users need bilingual content, filtering, deadlines, and mobile access.",

    solution:
      "A responsive Arabic/English Progressive Web Application that organizes curated opportunities into a searchable and filterable interface with favorites, deadlines, RTL support, and offline access.",

    role:
      "Sole developer. I built the opportunity data structure, bilingual user experience, search and filtering, favorites, deadline presentation, responsive design, offline PWA behavior, and GitHub Pages deployment.",

    architecture: [
      "Curated opportunity dataset",
      "Structured opportunity metadata",
      "Search and filtering",
      "Favorites",
      "Deadline handling",
      "Arabic / English interface",
      "RTL / LTR presentation",
      "PWA and offline layer",
      "GitHub Pages deployment",
    ],

    highlights: [
      "Arabic and English interface",
      "RTL support",
      "Responsive mobile experience",
      "Search and filtering",
      "Favorites",
      "Deadline information",
      "Offline PWA support",
      "No unsafe innerHTML usage",
    ],

    results: [
      "50 curated opportunities",
      "43 unique sources",
      "Responsive behavior verified at 360px",
      "Offline PWA functionality",
      "Public GitHub Pages deployment",
    ],

    challenges: [
      "Maintaining a consistent interface across Arabic RTL and English LTR layouts",
      "Designing for small mobile screens",
      "Providing useful offline behavior",
    ],

    lessons: [
      "Product quality includes accessibility, responsiveness, offline behavior, and localization—not only application logic.",
      "Bilingual interfaces require structural RTL considerations rather than simple text translation.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}