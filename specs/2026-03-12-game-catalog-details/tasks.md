# Spec Tasks

## Tasks

- [ ] 1. **Game Catalog Page & UI Components**
    - [ ] 1.1 Create `GameCard` component using `shadcn/ui` AspectRatio and `next/image`
    - [ ] 1.2 Create `GameGrid` component with responsive Tailwind grid settings
    - [ ] 1.3 Implement the `/games` page as a Server Component fetching all games via Prisma
    - [ ] 1.4 Add unit tests for `GameCard` and `GameGrid` rendering

- [ ] 2. **Game Details Page**
    - [ ] 2.1 Implement the `/games/[id]` dynamic route
    - [ ] 2.2 Fetch game details by UUID and implement 404 handling
    - [ ] 2.3 Create the `GameDetails` UI layout (Title, Hero Image, Description)
    - [ ] 2.4 Add unit tests for game details data fetching and rendering

- [ ] 3. **Navigation & Integration**
    - [ ] 3.1 Link the "Browse Games" button on the Homepage to `/games`
    - [ ] 3.2 Update the Console Details page (`/consoles/[id]`) to make installed games list items link to their respective `/games/[id]` pages
    - [ ] 3.3 Verify responsive design and image optimization across all new views
    - [ ] 3.4 Run final E2E verification of the game browsing flow
