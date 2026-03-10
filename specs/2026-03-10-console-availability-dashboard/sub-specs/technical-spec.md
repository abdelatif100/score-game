# Technical Specification

This is the technical specification for the Console Availability Dashboard.

## Technical Requirements

- **Server-Side Rendering (SSR):** Use Next.js Server Components to fetch and display console data for optimal SEO and performance.
- **Responsive Design:** Use Tailwind CSS to ensure the grid layout shifts from 1 column (mobile) to 2-3 columns (desktop).
- **Status Badges:** Implement a `StatusBadge` component using shadcn/ui colors (e.g., Green for Available, Amber/Red for Reserved).
- **Image Optimization:** Use `next/image` for game previews and console icons to meet the <2s load time requirement.
- **Dynamic Routing:** Implement `app/consoles/[id]/page.tsx` for console details.

## UI/UX Specifications

- **Pricing Header:** A card-like container at the top with clear typography.
- **Console Card:** 
  - Bordered card with a subtle shadow.
  - Large status indicator.
  - "Starting from 50 DZD" prominently displayed.
  - Horizontal list of game icons/names as a preview.
- **Loading States:** Implement Suspense boundaries with skeleton loaders for the console grid.
