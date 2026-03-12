# Database Schema

This is the database schema implementation for the spec detailed in `specs/2026-03-12-console-listing-details/spec.md`.

## Changes

### New Tables

#### `consoles`
- `id`: UUID (Primary Key)
- `name`: VARCHAR(255)
- `status`: ENUM ('available', 'reserved') DEFAULT 'available'
- `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
- `updated_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

#### `games`
- `id`: UUID (Primary Key)
- `name`: VARCHAR(255)
- `image_url`: VARCHAR(255) (Optional)
- `description`: TEXT
- `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
- `updated_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

#### `console_games` (Relation Table)
- `id`: UUID (Primary Key)
- `console_id`: UUID (Foreign Key references `consoles.id` ON DELETE CASCADE)
- `game_id`: UUID (Foreign Key references `games.id` ON DELETE CASCADE)
- `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

## Rationale
Using a relational approach for `console_games` allows for easy management of game libraries across multiple consoles. Indexes on `status` in the `consoles` table and foreign keys in the relation table will ensure performant queries for the public listing.
