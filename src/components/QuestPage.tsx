import { Link, useParams, useLocation } from 'react-router-dom';
import { quests } from '../data/quests';

export function QuestPage() {
  const { id } = useParams();

  const quest = quests.find(
    (quest) => quest.id === Number(id)
  );

  const location = useLocation();

  if (!quest) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#121212] text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Quest not found
          </h1>

          <Link
            to="/"
            className="mt-4 inline-block text-[#FF7A00]"
          >
            Back to quests
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${quest.imageBig})`,
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto flex w-full max-w-7xl px-6 pt-28 pb-16">
          <div className="ml-auto max-w-2xl">

            <p className="mb-3 text-sm text-zinc-300">
              {quest.category}
            </p>

            <h1 className="text-6xl font-black uppercase leading-none">
              {quest.title}
            </h1>

            <div className="mt-5 flex gap-6 text-sm text-zinc-300">
              <span>{quest.players}</span>
              <span>{quest.difficulty}</span>
              <span>{quest.duration}</span>
            </div>

            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-200">
              {quest.description}
            </p>

            <Link
              to="/booking"
              state={{ backgroundLocation: location }}
              className="relative top-4 inline-block rounded-full bg-[#FF7A00] px-8 py-3 text-sm font-bold uppercase transition-colors hover:bg-orange-500"
            >
              Book a quest
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}