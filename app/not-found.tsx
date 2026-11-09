import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080b12] px-6 text-white">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          404
        </p>

        <h1 className="mt-6 text-5xl font-semibold sm:text-7xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
        >
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}