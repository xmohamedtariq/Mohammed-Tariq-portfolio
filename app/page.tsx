import Image from "next/image";
import FeaturedProjects from "../components/FeaturedProjects";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineDocumentText } from "react-icons/hi2";

const expertise = [
  {
    number: "01",
    title: "AI Agents",
    description:
      "Tool-using AI agents with memory, controlled execution, human approval, cost tracking, and auditable workflows.",
  },
  {
    number: "02",
    title: "RAG Systems",
    description:
      "Semantic search, hybrid retrieval, reranking, citations, and systematic RAG evaluation.",
  },
  {
    number: "03",
    title: "Intelligent Automation",
    description:
      "AI-powered workflows connecting reasoning with operational tools and repeatable business processes.",
  },
  {
    number: "04",
    title: "Machine Learning",
    description:
      "Supervised learning, regression, preprocessing, evaluation, and predictive modeling.",
  },
  {
    number: "05",
    title: "Data Analytics",
    description:
      "Data exploration, analysis, visualization, reporting, and decision-support workflows.",
  },
  {
    number: "06",
    title: "AI Applications",
    description:
      "Taking AI systems from architecture and implementation through testing, evaluation, deployment, and user experience.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#080b12]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight transition hover:text-cyan-400"
            aria-label="Mohammed Tariq — Home"
          >
            <Image
              src="/mt-icon.svg"
              alt=""
              width={36}
              height={36}
              priority
              className="h-8 w-8 sm:h-9 sm:w-9"
            />
            <span>Mohammed Tariq</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#expertise" className="transition hover:text-white">
              Expertise
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#background" className="transition hover:text-white">
              Background
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=x.mohamedtariq@gmail.com&su=Portfolio%20Contact"
              className="rounded-full border border-white/15 px-5 py-2.5 font-medium text-white transition hover:bg-white hover:text-black"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Navigation */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer rounded-full border border-white/15 px-4 py-2 text-sm">
              Menu
            </summary>

            <div className="absolute right-0 top-14 w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#10141f] p-2 shadow-2xl">
              <a
                href="#projects"
                className="block rounded-xl px-4 py-3 text-sm text-gray-300 hover:bg-white/5"
              >
                Projects
              </a>

              <a
                href="#expertise"
                className="block rounded-xl px-4 py-3 text-sm text-gray-300 hover:bg-white/5"
              >
                Expertise
              </a>

              <a
                href="#about"
                className="block rounded-xl px-4 py-3 text-sm text-gray-300 hover:bg-white/5"
              >
                About
              </a>

              <a
                href="#background"
                className="block rounded-xl px-4 py-3 text-sm text-gray-300 hover:bg-white/5"
              >
                Background
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=x.mohamedtariq@gmail.com&su=Portfolio%20Contact"
                className="block rounded-xl px-4 py-3 text-sm text-cyan-400 hover:bg-white/5"
              >
                Contact
              </a>
            </div>
          </details>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center overflow-hidden px-6 pt-24 lg:px-8"
      >
        <div className="pointer-events-none absolute right-[-150px] top-[180px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-7 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            AI Solutions Developer
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[90px]">
            Building intelligent
            <span className="block text-gray-400">AI solutions.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            I build AI agents, RAG systems, intelligent automation,
            machine learning solutions, and data-driven applications designed
            to solve real-world problems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
            >
              View My Work
            </a>

            <a
              href="/Mohammed-Tariq-Resume.pdf"
              download
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold transition hover:border-white/40 hover:bg-white/5"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
            <span>AI Agents</span>
            <span>RAG Systems</span>
            <span>MCP</span>
            <span>Automation</span>
            <span>Machine Learning</span>
            <span>Data Analytics</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span>Aden, Yemen</span>
            <span>&bull;</span>
            <span>Open to Remote Opportunities</span>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      {/* Expertise */}
      <section
        id="expertise"
        className="scroll-mt-24 border-t border-white/5 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Expertise
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            What I work with.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Building reliable AI systems across agents, retrieval, automation,
            machine learning, and data-driven application development.
          </p>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group bg-[#080b12] p-8 transition hover:bg-white/[0.025] lg:p-10"
              >
                <span className="font-mono text-xs text-gray-400">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold transition group-hover:text-cyan-400">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/5 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Engineering thinking applied to intelligent systems.
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-gray-400">
              <p>
                I&apos;m Mohammed Tariq, an AI Solutions Developer with a
                background in Mechatronics Engineering, focused on building
                practical AI systems around real-world problems.
              </p>

              <p>
                My work spans AI agents, retrieval-augmented generation,
                intelligent automation, machine learning, data analytics,
                evaluation, safety, and deployment.
              </p>

              <p>
                I&apos;m especially interested in systems that go beyond
                generating text &mdash; systems that retrieve knowledge, reason over
                data, use tools, maintain state, execute controlled workflows,
                and produce measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section
        id="background"
        className="scroll-mt-24 border-t border-white/5 px-6 py-28 lg:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Background
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Engineering foundation.
            <span className="block text-gray-400">
              AI-focused execution.
            </span>
          </h2>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                Education
              </p>

              <h3 className="mt-7 text-2xl font-semibold">
                B.Sc. in Mechatronics Engineering
              </h3>

              <p className="mt-3 text-gray-400">
                University of Science and Technology
              </p>

              <p className="mt-8 text-sm text-gray-400">
                Aden, Yemen &middot; 2026
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                Relevant Experience
              </p>

              <h3 className="mt-7 text-2xl font-semibold">
                AI Model Evaluation & Training
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Project-based experience in prompt engineering, LLM output
                evaluation, technical accuracy verification, and logic
                auditing for engineering and technical tasks.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.025] p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              Selected Certifications
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Google Advanced Data Analytics Professional",
                "IBM AI Fundamentals",
                "Cisco Introduction to Modern AI",
                "Elements of AI \u00B7 2 ECTS",
                "Claude 101",
                "Gemini Certified Educator & Student",
              ].map((certificate) => (
                <span
                  key={certificate}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
                >
                  {certificate}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden border-t border-white/5 px-6 py-28 lg:px-8 lg:py-40"
      >
        <div className="pointer-events-none absolute bottom-[-200px] left-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-7xl">
            Let&apos;s build something
            <span className="block text-gray-400">intelligent.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Open to opportunities in AI solutions development, AI agents,
            intelligent automation, applied machine learning, and data-driven
            systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=x.mohamedtariq@gmail.com&su=Portfolio%20Contact"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
            >
              <HiOutlineEnvelope className="mr-2 inline-block text-lg align-[-2px]" /> Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-tariq-3a1a0824a/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold transition hover:border-white/40 hover:bg-white/5"
            >
              <FaLinkedinIn className="mr-2 inline-block text-lg align-[-2px]" /> LinkedIn &#8599;
            </a>

            <a
              href="https://github.com/xmohamedtariq"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold transition hover:border-white/40 hover:bg-white/5"
            >
              <FaGithub className="mr-2 inline-block text-lg align-[-2px]" /> GitHub &#8599;
            </a>

            <a
              href="/Mohammed-Tariq-Resume.pdf"
              target="_blank"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold transition hover:border-white/40 hover:bg-white/5"
            >
              <HiOutlineDocumentText className="mr-2 inline-block text-lg align-[-2px]" /> View Resume &#8599;
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>&copy; 2026 Mohammed Tariq</p>
            <p className="mt-1 text-xs text-gray-400">
              AI Solutions Developer
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="#home" className="transition hover:text-white">
              Back to Top &#8593;
            </a>

            <a
              href="https://github.com/xmohamedtariq"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              <FaGithub className="mr-2 inline-block text-lg align-[-2px]" /> GitHub &#8599;
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-tariq-3a1a0824a/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              <FaLinkedinIn className="mr-2 inline-block text-lg align-[-2px]" /> LinkedIn &#8599;
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=x.mohamedtariq@gmail.com&su=Portfolio%20Contact"
              className="transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}