# Technical Specification

This is the technical specification for the spec detailed in `specs/2026-03-12-game-catalog-details/spec.md`.

## Technical Requirements

- **Framework:** Next.js 16 (App Router).
- **Data Fetching:** Use Server Components with Prisma to fetch games directly from PostgreSQL.
- **UI Components:**
  - `GameGrid`: Uses Tailwind CSS for a responsive grid (e.g., `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`).
  - `GameCard`: Features an `AspectRatio` (e.g., 2:3 or 3:4) to maintain consistent cover image sizing.
  - `GameDetails`: A layout with a large cover image, title, and rich-text description area.
- **Image Optimization:** Use Next.js `next/image` component for all game covers to ensure fast loading and proper scaling.
- **Navigation:**
  - Route `/games` should fetch and display all entries from the `games` table.
  - Route `/games/[id]` should fetch a single entry based on the UUID and return 404 if not found.
  - Links from the console details page (`/consoles/[id]`) should use the standard `<Link>` component for client-side navigation.
- **Performance:** Ensure all game listings use efficient database queries and optimize image sizes for mobile networks.

## External Dependencies (Conditional)

- **shadcn/ui AspectRatio:** For maintaining consistent game card proportions.
- **shadcn/ui Skeleton:** For displaying loading states if client-side filtering or pagination is added later.
- **Lucide Icons:** For back buttons and UI icons.
