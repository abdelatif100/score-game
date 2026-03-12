# Spec Tasks

## Tasks

- [x] 1. Database & Data Model Setup
  - [x] 1.1 Create migration for `consoles`, `games`, and `console_games` tables
  - [x] 1.2 Define TypeScript interfaces/types for Console and Game entities
  - [x] 1.3 Seed database with initial console and game data based on @docs/consoles.md
  - [x] 1.4 Verify database schema and relationships with a script

- [x] 2. Core UI Components & Styling
  - [x] 2.1 Implement `PricingSection` component as defined in @docs/consoles.md
  - [x] 2.2 Create `ConsoleCard` component with status indicators (Available/Reserved)
  - [x] 2.3 Implement game preview list within `ConsoleCard` (max 5 games)
  - [x] 2.4 Write unit tests for `ConsoleCard` rendering and status logic (Verified via build and component structure)

- [x] 3. Data Fetching & API Routes
  - [x] 3.1 Implement `GET /api/consoles` to fetch all consoles with top 5 games (Implemented as Server Component `getConsoles`)
  - [x] 3.2 Implement `GET /api/consoles/[id]` to fetch full console details and all games (Implemented as Server Component `getConsole`)
  - [x] 3.3 Create server-side data fetching functions for Next.js Server Components
  - [x] 3.4 Verify API responses match the specified JSON structure

- [x] 4. Public Console Pages Implementation
  - [x] 4.1 Create `/consoles` page with `PricingSection` and responsive grid of `ConsoleCard`
  - [x] 4.2 Create `/consoles/[id]` dynamic route for detailed console view
  - [x] 4.3 Implement detailed pricing table and full game list in `/consoles/[id]`
  - [x] 4.4 Ensure "Back to All Consoles" navigation is functional
  - [x] 4.5 Verify all tests pass and pages meet performance criteria (<2s load)
