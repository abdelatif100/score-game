# Database Schema

This is the database schema implementation for the Console Availability Dashboard.

## Tables

### `consoles`
- `id`: UUID (Primary Key)
- `name`: VARCHAR(255) (e.g., "PS5 #1")
- `status`: VARCHAR(50) (Enum: 'available', 'reserved')
- `created_at`: TIMESTAMP
- `updated_at`: TIMESTAMP

### `games`
- `id`: UUID (Primary Key)
- `name`: VARCHAR(255)
- `image_url`: TEXT
- `description`: TEXT
- `created_at`: TIMESTAMP
- `updated_at`: TIMESTAMP

### `console_games` (Many-to-Many)
- `id`: UUID (Primary Key)
- `console_id`: UUID (Foreign Key -> consoles.id)
- `game_id`: UUID (Foreign Key -> games.id)

## Rationale
Using a relational structure allows the Admin to update a single game's details (like description or image) and have it reflected across all consoles that have it installed. The `status` field is indexed for fast lookups on the main dashboard.
