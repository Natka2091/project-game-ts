import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#121212] px-6 text-white">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-[#FF7A00]">
          Error 404
        </p>

        <h1 className="mt-4 text-7xl font-black">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold">
          Page not found
        </h2>

        <p className="mt-3 text-sm text-zinc-400">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-[#FF7A00] px-8 py-3 text-sm font-bold uppercase transition-colors hover:bg-orange-500"
        >
          Back to quests
        </Link>
      </div>
    </main>
  );
}