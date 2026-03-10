# Technical Specification

This is the technical specification for the Game Catalog.

## Technical Requirements

- **Server-Side Rendering (SSR):** Use Next.js Server Components for the catalog and detail pages to ensure high performance and SEO.
- **Responsive Grid:** Implement a CSS grid that scales from 2 columns on mobile to 4-5 columns on desktop.
- **Image Optimization:** Use `next/image` with appropriate aspect ratios (e.g., 2:3 for game covers) and priority loading for the first fold.
- **Grayscale Hover Effect:** To match the store's aesthetic, game covers should be grayscale by default and transition to color on hover.

## UI/UX Specifications

- **Game Card:** 
  - Vertical layout optimized for box art.
  - Game title below the image in bold typography.
  - Subtle border or shadow on hover.
- **Details Page:** 
  - Hero-style layout with the game image on one side and text on the other.
  - High-contrast typography for the game title.
  - "Back to Catalog" navigation button.
