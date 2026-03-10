# API Specification

This is the API specification for the Game Catalog.

## Endpoints

### GET `/api/games`
**Purpose:** Fetch all games for the catalog grid.
**Response:** `Array<{ id, name, imageUrl }>`

### GET `/api/games/[id]`
**Purpose:** Fetch detailed information for a specific game.
**Response:** `{ id, name, imageUrl, description }`

## Implementation Note
Queries will be implemented as cached server-side functions in `src/lib/db/queries.ts` to minimize client-side overhead.
