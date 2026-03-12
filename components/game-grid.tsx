import React from 'react';
import { GameCard, GameCardProps } from './game-card';
import { cn } from '@/lib/utils';

interface GameGridProps {
  games: GameCardProps[];
  className?: string;
}

export function GameGrid({ games, className }: GameGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6",
      className
    )}>
      {games.length > 0 ? (
        games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))
      ) : (
        <div className="col-span-full py-20 text-center">
          <p className="text-zinc-500 font-medium">لم يتم العثور على أي ألعاب في الكتالوج.</p>
        </div>
      )}
    </div>
  );
}
