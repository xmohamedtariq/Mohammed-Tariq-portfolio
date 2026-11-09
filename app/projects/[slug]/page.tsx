import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  const url =
    `https://mohammed-tariq-portfolio.netlify.app/projects/${project.slug}/`;

  return {
    title: project.title,
    description: project.summary,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "article",
      url,
      title: `${project.title} | Mohammed Tariq`,
      description: project.summary,
      images: [
        {
          url: `/projects/${project.slug}.png`,
          width: 1600,
          height: 900,
          alt: `${project.title} — project by Mohammed Tariq`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Mohammed Tariq`,
      description: project.summary,
      images: [`/projects/${project.slug}.png`],
    },
  };
}

export const dynamicParams = false;

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080b12] text-white">

      {/* Navigation */}
      <header className="border-b border-white/5 bg-[#080b12]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

          <Link
            href="/"
            className="font-semibold tracking-tight transition hover:text-cyan-400"
          >
            Mohammed Tariq
          </Link>

          <Link
            href="/#projects"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            &#8592; Back to Projects
          </Link>

        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">

        <div className="pointer-events-none absolute right-[-150px] top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span>{project.number}</span>
            <span>&bull;</span>
            <span>{project.category}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            {project.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
              >
                Live Demo &#8599;
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-white/40 hover:bg-white/5"
            >
              GitHub &#8599;
            </a>

          </div>

          {/* Metrics */}
          <div className="mt-16 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">

            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-[#080b12] p-7"
              >
                <p className="text-3xl font-semibold">
                  {metric.value}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  {metric.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Project Visual */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={`/projects/${project.slug}.png`}
            alt={`${project.title} project visual`}
            width={1600}
            height={900}
            priority
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </section>
      <CaseSection number="01" title="The Problem">
        <p>{project.problem}</p>
      </CaseSection>

      <CaseSection number="02" title="The Solution">
        <p>{project.solution}</p>
      </CaseSection>

      <CaseSection number="03" title="My Role">
        <p>{project.role}</p>
      </CaseSection>

      <CaseSection number="04" title="Architecture">
        <div className="space-y-3">

          {project.architecture.map((step, index) => (
            <div
              key={step}
              className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <span className="font-mono text-sm text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-gray-300">
                {step}
              </p>
            </div>
          ))}

        </div>
      </CaseSection>

      <CaseSection number="05" title="Key Highlights">
        <div className="grid gap-3 sm:grid-cols-2">

          {project.highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-gray-300"
            >
              {item}
            </div>
          ))}

        </div>
      </CaseSection>

      <CaseSection number="06" title="Results">
        <div className="space-y-4">

          {project.results.map((result) => (
            <div
              key={result}
              className="flex gap-4 border-b border-white/5 pb-4"
            >
              <span className="text-cyan-400">
                &#10003;
              </span>

              <p>{result}</p>
            </div>
          ))}

        </div>
      </CaseSection>

      <CaseSection number="07" title="Challenges">
        <div className="space-y-4">

          {project.challenges.map((challenge) => (
            <p
              key={challenge}
              className="rounded-2xl border border-white/10 p-5"
            >
              {challenge}
            </p>
          ))}

        </div>
      </CaseSection>

      <CaseSection number="08" title="What I Learned">
        <div className="space-y-5">

          {project.lessons.map((lesson) => (
            <p key={lesson}>
              {lesson}
            </p>
          ))}

        </div>
      </CaseSection>

      {/* Tech Stack */}
      <section className="border-t border-white/5 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Tech Stack
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">

            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-12">

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Explore
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold sm:text-5xl">
              Explore the implementation.
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
              >
                GitHub &#8599;
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:bg-white/5"
                >
                  Live Demo &#8599;
                </a>
              )}

              <Link
                href="/#projects"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:bg-white/5"
              >
                More Projects
              </Link>

            </div>

          </div>

        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-8 lg:px-8">

        <div className="mx-auto flex max-w-7xl justify-between text-sm text-gray-400">

          <p>
            &copy; 2026 Mohammed Tariq
          </p>

          <Link
            href="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

        </div>

      </footer>

    </main>
  );
}

function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-white/5 px-6 py-24 lg:px-8">

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.55fr_1.45fr]">

        <div>

          <p className="font-mono text-sm text-gray-400">
            {number}
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            {title}
          </h2>

        </div>

        <div className="max-w-3xl text-lg leading-8 text-gray-400">
          {children}
        </div>

      </div>

    </section>
  );
}