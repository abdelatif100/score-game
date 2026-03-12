# API Specification

This is the API specification for the spec detailed in `specs/2026-03-12-console-listing-details/spec.md`.

## Endpoints

### GET `/api/consoles`
**Purpose:** Retrieves a list of all consoles with a preview of installed games.
**Parameters:** None for MVP.
**Response:**
```json
[
  {
    "id": "uuid",
    "name": "PlayStation 5 #1",
    "status": "available",
    "preview_games": [
      { "id": "uuid", "name": "FIFA 23" },
      ...
    ]
  },
  ...
]
```

### GET `/api/consoles/[id]`
**Purpose:** Retrieves full details for a specific console, including the complete game list and status.
**Parameters:** `id` (UUID)
**Response:**
```json
{
  "id": "uuid",
  "name": "PlayStation 5 #1",
  "status": "available",
  "full_games": [
    { "id": "uuid", "name": "FIFA 23", "image_url": "..." },
    ...
  ]
}
```

## Controllers
- `ConsoleController.index`: Fetches all consoles and joins with `console_games` and `games` to get top 5 games.
- `ConsoleController.show`: Fetches a single console by ID with all its associated games.

## Errors
- `404 Not Found`: If the console ID does not exist.
- `500 Internal Server Error`: For database connection or query failures.
