# Spec Tasks

## Tasks

- [x] 1. Auth.js Infrastructure & Dependencies
  - [x] 1.1 Install `next-auth@beta` and `@auth/prisma-adapter`
  - [x] 1.2 Update Prisma schema with Auth.js models (User, Account, Session) as defined in `database-schema.md`
  - [x] 1.3 Run Prisma migration and regenerate client
  - [x] 1.4 Create `auth.ts` configuration file with Google provider and Prisma adapter
  - [x] 1.5 Setup `api/auth/[...nextauth]/route.ts` handlers

- [x] 2. Authorization Logic & Session Enrichment
  - [x] 2.1 Implement `signIn` callback to handle auto-registration of unapproved users
  - [x] 2.2 Implement `jwt` and `session` callbacks to expose `isApproved` flag
  - [x] 2.3 Extend NextAuth types to include `isApproved` in the session object
  - [x] 2.4 Verify session object contains `isApproved` status via a temporary test route

- [x] 3. Middleware & Route Protection
  - [x] 3.1 Create `middleware.ts` to secure `/admin` routes
  - [x] 3.2 Implement redirect logic: unauthenticated -> signin, unapproved -> `/admin/pending`
  - [x] 3.3 Create the `/admin/pending` page with a "Waiting for Approval" message (Arabic UI)
  - [x] 3.4 Verify middleware correctly blocks unauthorized access to `/admin`

- [x] 4. Initial Admin Dashboard UI
  - [x] 4.1 Create a basic `/admin` page as a placeholder for the dashboard
  - [x] 4.2 Add a "Sign Out" button to the dashboard and pending page
  - [x] 4.3 Verify the end-to-end flow: Login -> Auto-register -> Pending Page -> Manual DB Update -> Dashboard Access
