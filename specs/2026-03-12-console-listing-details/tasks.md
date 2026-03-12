# Spec Tasks

## Tasks

- [ ] 1. Database & Data Model Setup
  - [ ] 1.1 Create migration for `consoles`, `games`, and `console_games` tables
  - [ ] 1.2 Define TypeScript interfaces/types for Console and Game entities
  - [ ] 1.3 Seed database with initial console and game data based on @docs/consoles.md
  - [ ] 1.4 Verify database schema and relationships with a script

- [ ] 2. Core UI Components & Styling
  - [ ] 2.1 Implement `PricingSection` component as defined in @docs/consoles.md
  - [ ] 2.2 Create `ConsoleCard` component with status indicators (Available/Reserved)
  - [ ] 2.3 Implement game preview list within `ConsoleCard` (max 5 games)
  - [ ] 2.4 Write unit tests for `ConsoleCard` rendering and status logic

- [ ] 3. Data Fetching & API Routes
  - [ ] 3.1 Implement `GET /api/consoles` to fetch all consoles with top 5 games
  - [ ] 3.2 Implement `GET /api/consoles/[id]` to fetch full console details and all games
  - [ ] 3.3 Create server-side data fetching functions for Next.js Server Components
  - [ ] 3.4 Verify API responses match the specified JSON structure

- [ ] 4. Public Console Pages Implementation
  - [ ] 4.1 Create `/consoles` page with `PricingSection` and responsive grid of `ConsoleCard`
  - [ ] 4.2 Create `/consoles/[id]` dynamic route for detailed console view
  - [ ] 4.3 Implement detailed pricing table and full game list in `/consoles/[id]`
  - [ ] 4.4 Ensure "Back to All Consoles" navigation is functional
  - [ ] 4.5 Verify all tests pass and pages meet performance criteria (<2s load)
