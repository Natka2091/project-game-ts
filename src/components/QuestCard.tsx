import { Link } from 'react-router-dom';
import type { QuestCardProps} from '../data/quests';

export function QuestCard({ quest }: QuestCardProps) {
  return (
    <Link
      to={`/quests/${quest.id}`}
      className="group relative block aspect-[1.65] overflow-hidden"
    >
      <img
        src={quest.image}
        alt={quest.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-top from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-lg font-bold">
          {quest.title}
        </h2>

        <div className="mt-1 flex gap-4 text-xs text-zinc-300">
          <span>{quest.players}</span>
          <span>{quest.difficulty}</span>
        </div>

      </div>
    </Link>
  );
}