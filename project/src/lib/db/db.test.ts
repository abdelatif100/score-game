import "./jest-setup";
import { getConsoles, getConsoleById, getAllGames, getGameById } from "./queries";
import { db } from "./index";
import { consoles, games, consoleGames } from "./schema";

describe("Database Queries", () => {
  let consoleId: string;
  let gameId: string;

  beforeAll(async () => {
    // Setup test data
    const [c] = await db.insert(consoles).values({ name: "Test Console", status: "available" }).returning();
    const [g] = await db.insert(games).values({ name: "Test Game", description: "Test description" }).returning();
    await db.insert(consoleGames).values({ consoleId: c.id, gameId: g.id });
    consoleId = c.id;
    gameId = g.id;
  });

  afterAll(async () => {
    // Cleanup
    await db.delete(consoleGames);
    await db.delete(consoles);
    await db.delete(games);
  });

  describe("Console Queries", () => {
    test("getConsoles should return consoles with games", async () => {
      const results = await getConsoles();
      expect(results.length).toBeGreaterThan(0);
      expect(results[0]).toHaveProperty("consoleGames");
      expect(results[0].consoleGames[0].game).toBeDefined();
    });

    test("getConsoleById should return a single console with games", async () => {
      const result = await getConsoleById(consoleId);
      expect(result).toBeDefined();
      expect(result?.id).toBe(consoleId);
      expect(result?.consoleGames.length).toBeGreaterThan(0);
    });
  });

  describe("Game Queries", () => {
    test("getAllGames should return all games ordered by name", async () => {
      const results = await getAllGames();
      expect(results.length).toBeGreaterThan(0);
      expect(results.some(g => g.id === gameId)).toBe(true);
    });

    test("getGameById should return a specific game", async () => {
      const result = await getGameById(gameId);
      expect(result).toBeDefined();
      expect(result?.id).toBe(gameId);
      expect(result?.name).toBe("Test Game");
    });
  });
});
