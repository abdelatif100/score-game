# Product Roadmap

## Phase 1: MVP Core
**Goal:** Establish the public website and admin dashboard with essential functionality.
**Success Criteria:** Customers can view availability; Admin can update status and games.

### Features
- [x] **Public Homepage:** Simple landing page with clear navigation. `[S]`
- [ ] **Console Availability Dashboard:** List showing real-time status and pricing. `[M]`
- [ ] **Game Catalog:** Browseable grid view of all available games. `[M]`
- [ ] **Admin Dashboard:** Interface for status updates and game/console management. `[L]`
- [ ] **Google Login Auth:** Secure admin-only access for staff. `[S]`

### Dependencies
- Next.js 16 environment
- PostgreSQL database
- Google OAuth configuration

## Phase 2: Performance & Polish
**Goal:** Ensure the site is extremely fast and mobile-friendly.
**Success Criteria:** Load time < 2 seconds on mobile; Optimized assets.

### Features
- [ ] **Image Optimization:** Automated compression for game covers and icons. `[S]`
- [ ] **SEO & Metadata:** Basic search engine optimization for store visibility. `[S]`
- [ ] **UI/UX Polishing:** Refining the interface with shadcn/ui components. `[M]`

### Dependencies
- Phase 1 core functionality

## Phase 3: Future Scale
**Goal:** Add advanced convenience features based on user demand.
**Success Criteria:** Successful pilot of a reservation system.

### Features
- [ ] **Online Reservation System:** Allow customers to book time slots. `[XL]`
- [ ] **Real-time Notifications:** Alert customers when a console becomes free. `[L]`

### Dependencies
- Customer demand for online booking
