# API Specification

This is the API specification for the spec detailed in `specs/2026-03-12-game-catalog-details/spec.md`.

## Endpoints

### GET /api/games

**Purpose:** Retrieve all games in the catalog.
**Parameters:** None (for MVP).
**Response:**
```json
[
  {
    "id": "uuid",
    "name": "FIFA 23",
    "image_url": "/images/fifa-23.jpg",
    "description": "Short description...",
    "created_at": "timestamp",
    "updated_at": "timestamp"
  },
  ...
]
```
**Errors:**
- 500: Database error.

### GET /api/games/[id]

**Purpose:** Retrieve details for a specific game.
**Parameters:**
- `id` (path): UUID of the game.
**Response:**
```json
{
  "id": "uuid",
  "name": "FIFA 23",
  "image_url": "/images/fifa-23.jpg",
  "description": "Full description with multiple paragraphs...",
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```
**Errors:**
- 404: Game not found.
- 400: Invalid UUID format.
- 500: Database error.

## Integration Note
While the primary implementation will use Next.js Server Components for direct data fetching, these API endpoints are documented for potential future client-side enhancements like filtering or dynamic search.
