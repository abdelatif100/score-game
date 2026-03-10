import { getAllGames } from "@/lib/db/queries";
import { GameCard } from "@/components/ui/game-card";
import { Suspense } from "react";
import LoadingGames from "./loading";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Game Catalog | Score Game",
  description: "Browse our complete collection of video game titles available to play.",
};

async function GameList() {
  const gamesList = await getAllGames();

  if (!gamesList || gamesList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center rounded-xl border-2 border-dashed bg-muted/20">
        <h3 className="text-xl font-bold">No games found</h3>
        <p className="text-muted-foreground">Our game catalog is currently being updated. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {gamesList.map((game, index) => (
        <GameCard
          key={game.id}
          id={game.id}
          name={game.name}
          imageUrl={game.imageUrl}
          priority={index < 10} // Priority load first 10 images
        />
      ))}
    </div>
  );
}

export default function GamesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-black tracking-tight uppercase">
          Full <span className="text-primary">Catalog</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Browse our complete collection of titles. From the latest blockbusters to all-time classics.
        </p>
      </div>

      <Suspense fallback={<div className="text-muted-foreground">Refreshing catalog...</div>}>
        <GameList />
      </Suspense>
    </main>
  );
}
