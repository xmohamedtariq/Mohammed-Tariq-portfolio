import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://mohammed-tariq-portfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mohammed Tariq | AI Solutions Developer",
    template: "%s | Mohammed Tariq",
  },

  description:
    "Portfolio of Mohammed Tariq, an AI Solutions Developer building AI agents, RAG systems, intelligent automation, machine learning solutions, and data-driven applications.",

  applicationName: "Mohammed Tariq Portfolio",

  keywords: [
    "Mohammed Tariq",
    "AI Solutions Developer",
    "AI Agent Developer",
    "Artificial Intelligence",
    "AI Agents",
    "RAG",
    "Retrieval Augmented Generation",
    "MCP",
    "Model Context Protocol",
    "Machine Learning",
    "Data Analytics",
    "Intelligent Automation",
    "Python",
  ],

  authors: [
    {
      name: "Mohammed Tariq",
      url: siteUrl,
    },
  ],

  creator: "Mohammed Tariq",
  publisher: "Mohammed Tariq",
  category: "technology",

  alternates: {
    canonical: "/",
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mohammed Tariq Portfolio",
    title: "Mohammed Tariq | AI Solutions Developer",
    description:
      "AI agents, RAG systems, MCP, intelligent automation, machine learning, and data-driven applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Tariq — AI Solutions Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammed Tariq | AI Solutions Developer",
    description:
      "AI agents, RAG systems, MCP, intelligent automation, machine learning, and data-driven applications.",
    images: ["/og-image.png"],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b12",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammed Tariq",
  url: siteUrl,
  jobTitle: "AI Solutions Developer",
  email: "mailto:x.mohamedtariq@gmail.com",
  sameAs: [
    "https://github.com/xmohamedtariq",
    "https://www.linkedin.com/in/mohammed-tariq-3a1a0824a/",
  ],
  knowsAbout: [
    "AI Agents",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
    "Intelligent Automation",
    "Machine Learning",
    "Data Analytics",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Science and Technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}