# Technical Specification

This is the technical specification for the spec detailed in specs/2026-03-10-public-homepage/spec.md

## Technical Requirements

- **Framework:** Next.js 16 (App Router) with React 19.
- **Styling:** Tailwind CSS with Vanilla CSS for custom animations.
- **UI Components:** shadcn/ui (Button, Card, NavigationMenu).
- **Icons:** Lucide-React.
- **Layout:** Implement a global `layout.tsx` for the Header and Footer.
- **Typography:** Inter (via Next.js Google Fonts) as the primary typeface.
- **Responsive Design:** 
  - Mobile: Single column, hidden nav on small screens.
  - Desktop: 3-column grid for features, horizontal navigation.
- **Optimization:** Use Next.js `Image` component for any brand graphics or logos.
- **Accessibility:** Semantic HTML (header, main, footer, section) and ARIA roles for navigation.

## External Dependencies (Conditional)

- **shadcn/ui** - Used for rapid UI development with consistent styles.
- **lucide-react** - Used for iconography.
- **clsx / tailwind-merge** - Standard for shadcn/ui dynamic class management.
