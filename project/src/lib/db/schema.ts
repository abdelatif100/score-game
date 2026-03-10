import { pgTable, text, timestamp, uuid, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const statusEnum = pgEnum("status", ["available", "reserved"]);

export const consoles = pgTable("consoles", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  status: text("status").notNull().default("available"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const games = pgTable("games", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  imageUrl: text("image_url"),
  description: text("description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const consoleGames = pgTable("console_games", {
  id: uuid("id").primaryKey().defaultRandom(),
  consoleId: uuid("console_id")
    .notNull()
    .references(() => consoles.id, { onDelete: "cascade" }),
  gameId: uuid("game_id")
    .notNull()
    .references(() => games.id, { onDelete: "cascade" }),
});

export const consolesRelations = relations(consoles, ({ many }) => ({
  consoleGames: many(consoleGames),
}));

export const gamesRelations = relations(games, ({ many }) => ({
  consoleGames: many(consoleGames),
}));

export const consoleGamesRelations = relations(consoleGames, ({ one }) => ({
  console: one(consoles, {
    fields: [consoleGames.consoleId],
    references: [consoles.id],
  }),
  game: one(games, {
    fields: [consoleGames.gameId],
    references: [games.id],
  }),
}));
