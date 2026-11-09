import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mohammed Tariq | AI Solutions Developer",
    template: "%s | Mohammed Tariq",
  },

  description:
    "Portfolio of Mohammed Tariq, an AI Solutions Developer building AI agents, RAG systems, intelligent automation, machine learning solutions, and data-driven applications.",

  keywords: [
    "Mohammed Tariq",
    "AI Solutions Developer",
    "AI Agent Developer",
    "Artificial Intelligence",
    "AI Agents",
    "RAG",
    "MCP",
    "Machine Learning",
    "Data Analytics",
    "Intelligent Automation",
    "Python",
  ],

  authors: [
    {
      name: "Mohammed Tariq",
    },
  ],

  creator: "Mohammed Tariq",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: "Mohammed Tariq | AI Solutions Developer",
    description:
      "AI agents, RAG systems, intelligent automation, machine learning, and data-driven applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}