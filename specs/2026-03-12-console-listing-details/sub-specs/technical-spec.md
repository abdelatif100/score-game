# Technical Specification

This is the technical specification for the spec detailed in `specs/2026-03-12-console-listing-details/spec.md`.

## Technical Requirements

- **Framework:** Next.js 16 (App Router) using Server Components for initial data fetching.
- **UI Components:** Use `shadcn/ui` for the console cards and tables.
- **Styling:** Tailwind CSS for responsive layouts. Ensure status indicators use distinct colors (e.g., green for Available, red for Reserved).
- **Data Fetching:** Fetch console data on the server to ensure SEO and performance. Use `next/cache` for efficient revalidation.
- **Responsive Design:** Mobile-first approach. Console cards should stack on mobile and use a grid layout on larger screens.
- **Icons:** Use `lucide-react` for status indicators and navigation icons.

## Performance Criteria

- Page load time < 2 seconds.
- Cumulative Layout Shift (CLS) < 0.1.
- Optimized images for game previews using `next/image`.
