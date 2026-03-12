# Product Roadmap

## Phase 1: Core MVP Functionality

**Goal:** Establish the public-facing information site with console and game listings.
**Success Criteria:** Users can browse consoles, see statuses, and view the game catalog.

### Features

- [x] **Homepage Setup** - Simple landing page with @docs/homepage use /stitch. `[S]`
- [x] **Console Listing & Status** - Display consoles with "Available/Reserved" status and pricing preview. `[M]`
- [ ] **Pricing Section** - Permanently visible pricing explanation on the consoles page. `[XS]`
- [ ] **Game Catalog Grid** - Browseable grid of all games in the store. `[S]`
- [ ] **Console/Game Detail Pages** - Deep dive into specific console games and game descriptions. `[M]`

### Dependencies
- Basic database schema (Consoles, Games, Relations).

## Phase 2: Admin Dashboard & Authentication

**Goal:** Enable store employees to manage data and status updates.
**Success Criteria:** Approved employees can securely log in and update console statuses.

### Features

- [ ] **Google OAuth Integration** - Restricted login for employees. `[M]`
- [ ] **Admin Approval System** - Manual database-level approval for new admin accounts. `[S]`
- [ ] **Console Management** - Add/Edit/Delete consoles and toggle status. `[M]`
- [ ] **Game Management** - Add/Edit/Delete games in the catalog. `[M]`
- [ ] **Relation Management** - Update which games are installed on which consoles. `[S]`
- [ ] **Pricing Text Editor** - Allow admins to update the public pricing explanation. `[XS]`

### Dependencies
- Phase 1 completed.
- Authentication middleware.

## Phase 3: Scale and Polish

**Goal:** Optimize for performance and mobile experience.
**Success Criteria:** Website loads in <2 seconds on mobile networks.

### Features

- [ ] **Image Optimization** - Implement Next.js Image component and CDN caching. `[S]`
- [ ] **Performance Audit** - Ensure minimal animations and lightweight bundles. `[S]`
- [ ] **Final UI/UX Polish** - Mobile-friendly refinements for all pages. `[M]`

### Dependencies
- Phase 2 completed.
