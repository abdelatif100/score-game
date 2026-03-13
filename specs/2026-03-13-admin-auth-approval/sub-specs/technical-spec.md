# Technical Specification

This is the technical specification for the Admin Authentication & Approval flow.

## Technical Requirements

- **Framework**: Next.js 15 (App Router).
- **Authentication**: Auth.js (NextAuth.js v5 Beta).
- **OAuth Provider**: Google.
- **Session Management**: JWT (Stateless) for fast performance on mobile.
- **Middleware Integration**: Custom `middleware.ts` to protect `/admin/*`.
- **Authorization Logic**:
  - Middleware checks for an active session.
  - If a session exists, the custom `isApproved` flag (retrieved via Prisma) is checked.
  - Users with `isApproved: false` are only allowed to see `/admin/pending`.

## Auth.js Configuration

- **Adapter**: `@auth/prisma-adapter`.
- **Strategy**: `jwt`.
- **Callbacks**:
  - `signIn`: If a user doesn't exist in the `AdminUser` table, create a new record with `isApproved: false`.
  - `jwt`: Attach `isApproved` status to the token.
  - `session`: Map `isApproved` from the token to the session object.

## External Dependencies

- `next-auth@beta`: Core Auth.js v5.
- `@auth/prisma-adapter`: To sync users/accounts with our PostgreSQL database.

## Protected Pages

- `/admin`: The main dashboard (requires `isApproved: true`).
- `/admin/consoles`: Console management (requires `isApproved: true`).
- `/admin/games`: Game management (requires `isApproved: true`).
- `/admin/pending`: Access for logged-in but unapproved users (requires `isApproved: false`).
