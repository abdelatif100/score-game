# Spec Tasks

## Tasks

- [x] 1. **Database Schema & Data Layer**
  - [x] 1.1 Create Prisma/Drizzle schema (or SQL migrations) for `consoles`, `games`, and `console_games`
  - [x] 1.2 Seed the database with at least 3 consoles and 10 games for testing
  - [x] 1.3 Implement Server Actions/Functions to fetch console list with game previews
  - [x] 1.4 Implement Server Actions/Functions to fetch single console details
  - [x] 1.5 Write integration tests for data fetching logic

- [x] 2. **Shared UI Components**
  - [x] 2.1 Create a `StatusBadge` component using shadcn/ui Badge
  - [x] 2.2 Implement the `PricingHeader` component as defined in the PRD (50/100/200 DZD tiers)
  - [x] 2.3 Create a `ConsoleCard` component displaying status, pricing, and game preview icons
  - [x] 2.4 Verify components are responsive and accessible via unit tests/Storybook

- [x] 3. **Console Dashboard Page (`/consoles`)**
  - [x] 3.1 Setup `app/consoles/page.tsx` with a responsive grid layout
  - [x] 3.2 Integrate `PricingHeader` and map through fetched consoles to render `ConsoleCard`s
  - [x] 3.3 Implement a `Loading` skeleton for the console grid using Suspense
  - [x] 3.4 Verify the page loads in under 2 seconds on a simulated mobile connection

- [x] 4. **Console Details Page (`/consoles/[id]`)**
  - [x] 4.1 Setup `app/consoles/[id]/page.tsx` dynamic route
  - [x] 4.2 Design the layout for full pricing breakdown and the complete list of installed games
  - [x] 4.3 Add a "Back to Dashboard" navigation link
  - [x] 4.4 Verify correct data rendering for multiple console IDs

- [x] 5. **Final Integration & Performance Review**
  - [x] 5.1 Perform a full end-to-end (E2E) test of the user flow: Homepage -> Consoles -> Console Details
  - [x] 5.2 Optimize images and check Core Web Vitals (LCP, CLS)
  - [x] 5.3 Ensure all links in the header/footer are correctly pointed to `/consoles`
  - [x] 5.4 Conduct a final build check to ensure no production errors
