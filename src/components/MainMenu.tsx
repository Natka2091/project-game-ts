import { useSearchParams } from 'react-router-dom';
import { categories, quests } from '../data/quests';
import { QuestCard } from './QuestCard';

export function MainMenu() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get('category');

  const selectedCategory =
    categories.find(
      (category) => category.name === categoryParam
    )?.name || 'All Quests';

  const filteredQuests =
    selectedCategory === 'All Quests'
      ? quests
      : quests.filter(
          (quest) => quest.category === selectedCategory
        );

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#121212] text-white">
      <div className="mx-auto flex h-full max-w-7xl flex-col px-6 pt-24 pb-6">
        <section className="shrink-0">
          <p className="mb-2 text-xs text-[#FF7A00]">
            Quests in London
          </p>

          <h1 className="text-5xl font-bold">
            Choose a Theme
          </h1>

          <div className="mt-8 flex w-full items-center">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => {
                  if (category.name === 'All Quests') {
                    setSearchParams({});
                  } else {
                    setSearchParams({
                      category: category.name,
                    });
                  }
                }}
                className="flex flex-1 items-center justify-center gap-3 border-r border-zinc-700 pb-5 text-sm text-zinc-300 transition-colors hover:text-white last:border-r-0"
              >
                <img
                  src={category.icon}
                  alt=""
                  className="h-9 w-9 object-contain"
                />

                <span className="relative">
                  {category.name}

                  {selectedCategory === category.name ? (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#FF7A00]" />
                  ) : null}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="min-h-0 flex-1 overflow-y-auto pt-5 scrollbar-thumb-zinc-700/60 scrollbar-track-transparent">
          <div className="grid grid-cols-3 gap-4 pb-10">
            {filteredQuests.map((quest) => (
              <QuestCard key={quest.id} quest={quest} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}