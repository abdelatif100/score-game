import { db } from "./index";
import { consoles, games, consoleGames } from "./schema";

async function seed() {
  console.log("Seeding database...");

  // Clear existing data
  await db.delete(consoleGames);
  await db.delete(consoles);
  await db.delete(games);

  // Insert Consoles
  const [ps5_1, xbox_1, switch_1] = await db.insert(consoles).values([
    { name: "PS5 #1", status: "available" },
    { name: "Xbox Series X #1", status: "reserved" },
    { name: "Nintendo Switch #1", status: "available" },
  ]).returning();

  // Insert Games
  const gameData = [
    { name: "FIFA 24", imageUrl: "https://example.com/fifa.jpg", description: "The beautiful game." },
    { name: "God of War Ragnarok", imageUrl: "https://example.com/gow.jpg", description: "Norse mythology epic." },
    { name: "Spider-Man 2", imageUrl: "https://example.com/sm2.jpg", description: "Friendly neighborhood hero." },
    { name: "The Last of Us Part II", imageUrl: "https://example.com/tlou2.jpg", description: "Emotional journey." },
    { name: "Elden Ring", imageUrl: "https://example.com/elden.jpg", description: "Challenging RPG." },
    { name: "Halo Infinite", imageUrl: "https://example.com/halo.jpg", description: "Sci-fi shooter." },
    { name: "Forza Horizon 5", imageUrl: "https://example.com/forza.jpg", description: "Racing simulator." },
    { name: "Super Mario Odyssey", imageUrl: "https://example.com/mario.jpg", description: "Platforming fun." },
    { name: "Zelda: Tears of the Kingdom", imageUrl: "https://example.com/zelda.jpg", description: "Epic adventure." },
    { name: "Mario Kart 8 Deluxe", imageUrl: "https://example.com/mk8.jpg", description: "Fun racing." },
  ];

  const insertedGames = await db.insert(games).values(gameData).returning();

  // Link Games to Consoles
  // PS5 #1 gets first 4 games
  await db.insert(consoleGames).values(
    insertedGames.slice(0, 4).map((g) => ({
      consoleId: ps5_1.id,
      gameId: g.id,
    }))
  );

  // Xbox Series X #1 gets games 5-7
  await db.insert(consoleGames).values(
    insertedGames.slice(4, 7).map((g) => ({
      consoleId: xbox_1.id,
      gameId: g.id,
    }))
  );

  // Nintendo Switch #1 gets last 3 games
  await db.insert(consoleGames).values(
    insertedGames.slice(7, 10).map((g) => ({
      consoleId: switch_1.id,
      gameId: g.id,
    }))
  );

  console.log("Seeding complete!");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
