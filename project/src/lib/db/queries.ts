import { db } from "./index";
import { consoles, games, consoleGames } from "./schema";
import { eq } from "drizzle-orm";
import { cache } from "react";

/**
 * Fetches all consoles with their installed games (previews).
 * Cached for request-level deduplication.
 */
export const getConsoles = cache(async () => {
  return await db.query.consoles.findMany({
    with: {
      consoleGames: {
        with: {
          game: true,
        },
      },
    },
  });
});

/**
 * Fetches a single console by ID with its full list of installed games.
 * Cached for request-level deduplication.
 */
export const getConsoleById = cache(async (id: string) => {
  return await db.query.consoles.findFirst({
    where: eq(consoles.id, id),
    with: {
      consoleGames: {
        with: {
          game: true,
        },
      },
    },
  });
});

/**
 * Fetches all games for the catalog.
 * Cached for request-level deduplication.
 */
export const getAllGames = cache(async () => {
  return await db.query.games.findMany({
    orderBy: (games, { asc }) => [asc(games.name)],
  });
});

/**
 * Fetches a single game by its ID.
 * Cached for request-level deduplication.
 */
export const getGameById = cache(async (id: string) => {
  return await db.query.games.findFirst({
    where: eq(games.id, id),
  });
});
