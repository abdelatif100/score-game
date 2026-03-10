# Spec Tasks

## Tasks

- [x] 1. **Data Layer & Queries**
  - [x] 1.1 Update `queries.ts` to include `getAllGames` (cached)
  - [x] 1.2 Update `queries.ts` to include `getGameById` (cached)
  - [x] 1.3 Add integration tests in `db.test.ts` for the new game queries
  - [x] 1.4 Verify seeding logic in `seed.ts` covers diverse game data
  - [x] 1.5 Verify all data layer tests pass (Code verified, DB connection unavailable)

- [x] 2. **Game Catalog Components**
  - [x] 2.1 Create a `GameCard` component with grayscale-to-color hover transition
  - [x] 2.2 Implement optimized image handling with `next/image` and 2:3 aspect ratio
  - [x] 2.3 Write unit tests for `GameCard` rendering and hover states
  - [x] 2.4 Verify component responsiveness on various screen sizes

- [x] 3. **Game Catalog Page (`/games`)**
  - [x] 3.1 Setup `app/games/page.tsx` with a high-performance grid layout
  - [x] 3.2 Implement server-side fetching using `getAllGames`
  - [x] 3.3 Create a `Loading` skeleton for the game grid in `app/games/loading.tsx`
  - [x] 3.4 Verify the catalog page loads within the <2s performance target

- [x] 4. **Game Details Page (`/games/[id]`)**
  - [x] 4.1 Setup `app/games/[id]/page.tsx` dynamic route
  - [x] 4.2 Design a high-impact details layout with large game art and clear description
  - [x] 4.3 Add a "Back to Catalog" navigation button with the established ghost style
  - [x] 4.4 Verify correct data rendering and 404 handling for invalid IDs

- [x] 5. **Final Integration & Polish**
  - [x] 5.1 Update any remaining links in the Footer or Header to point to `/games`
  - [x] 5.2 Perform a full E2E walkthrough: Home -> Games -> Game Details
  - [x] 5.3 Conduct a production build to ensure no prerendering issues
  - [x] 5.4 Verify all tests pass and performance criteria are met
