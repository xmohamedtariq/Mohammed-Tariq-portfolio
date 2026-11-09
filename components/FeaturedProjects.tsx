import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 bg-[#080b12] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Featured Projects
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-gray-400">
            Selected work across AI agents, retrieval-augmented generation,
            machine learning, automation, and product development.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:border-cyan-400/25 hover:bg-white/[0.04] sm:p-9 ${
                project.featured ? "lg:col-span-2 lg:p-12" : ""
              }`}
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/0 blur-[90px] transition duration-500 group-hover:bg-cyan-500/10" />

              <div className="relative z-10">

                <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#080b12]">
                  <Image
                    src={`/projects/${project.slug}.png`}
                    alt={`${project.title} project cover`}
                    width={1600}
                    height={900}
                    priority={project.featured}
                    sizes={
                      project.featured
                        ? "(min-width: 1024px) 1200px, 100vw"
                        : "(min-width: 1024px) 600px, 100vw"
                    }
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mb-12 flex items-center justify-between gap-4">
                  <span className="font-mono text-sm text-gray-400">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400">
                    {project.category}
                  </span>
                </div>

                <h3
                  className={`font-semibold tracking-[-0.03em] ${
                    project.featured
                      ? "text-4xl sm:text-5xl lg:text-6xl"
                      : "text-3xl sm:text-4xl"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mt-6 leading-7 text-gray-400 ${
                    project.featured
                      ? "max-w-4xl text-lg"
                      : "max-w-2xl text-base"
                  }`}
                >
                  {project.summary}
                </p>

                <div className="mt-10 grid grid-cols-3 gap-4 border-y border-white/10 py-7">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl font-semibold sm:text-3xl">
                        {metric.value}
                      </p>

                      <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-400"
                  >
                    Case Study →
                  </Link>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition duration-300 hover:border-white/40 hover:bg-white/5"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition duration-300 hover:border-white/40 hover:bg-white/5"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}