# Spec Tasks

## Tasks

- [ ] 1. **Game Catalog Page & UI Components**
    - [x] 1.1 Create `GameCard` component using `shadcn/ui` AspectRatio and `next/image`
    - [x] 1.2 Create `GameGrid` component with responsive Tailwind grid settings
    - [x] 1.3 Implement the `/games` page as a Server Component fetching all games via Prisma
    - [ ] 1.4 Add unit tests for `GameCard` and `GameGrid` rendering (Skipped: No test runner configured)

- [ ] 2. **Game Details Page**
    - [x] 2.1 Implement the `/games/[id]` dynamic route
    - [x] 2.2 Fetch game details by UUID and implement 404 handling
    - [x] 2.3 Create the `GameDetails` UI layout (Title, Hero Image, Description)
    - [ ] 2.4 Add unit tests for game details data fetching and rendering (Skipped: No test runner configured)

- [x] 3. **Navigation & Integration**
    - [x] 3.1 Link the "Browse Games" button on the Homepage to `/games`
    - [x] 3.2 Update the Console Details page (`/consoles/[id]`) to make installed games list items link to their respective `/games/[id]` pages
    - [x] 3.3 Verify responsive design and image optimization across all new views
    - [x] 3.4 Run final E2E verification of the game browsing flow
