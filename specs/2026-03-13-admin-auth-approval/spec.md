# Spec Requirements Document

> Spec: Admin Authentication & Approval
> Created: 2026-03-13

## Overview

Implement a secure, employee-only admin dashboard using Auth.js (v5) and Google OAuth. This feature ensures that while any Google account can *attempt* to log in, only those manually approved by the shop owner in the database can access sensitive management tools. This reduces the risk of unauthorized data modification and protects the store's operational integrity.

## User Stories

### Employee Login

As a store employee, I want to sign in using my Google account, so that I don't have to manage another password and can securely access the management tools.

**Workflow:**
1. User navigates to the hidden `/admin` route or clicks "Admin Login" in the footer (if visible).
2. User clicks "Sign in with Google".
3. User completes the Google OAuth flow.
4. If the user's email is already in the `AdminUser` table and `isApproved` is true, they are redirected to the Dashboard.
5. If the user is logged in but `isApproved` is false, they are redirected to a "Pending Approval" page.

### Admin Approval (Manual)

As a shop owner, I want to manually approve new employee accounts in the database, so that I have absolute control over who can modify my store's data.

**Workflow:**
1. A new employee logs in for the first time.
2. The system automatically creates a record in the `AdminUser` table with `isApproved: false`.
3. The employee sees a "Waiting for Approval" message.
4. The shop owner manually updates the `isApproved` flag to `true` in the database (e.g., via Prisma Studio or SQL).
5. On the next login, the employee gains full access.

## Spec Scope

1. **Auth.js v5 Integration** - Setup NextAuth with Google Provider and Prisma Adapter.
2. **Middleware Protection** - Secure all `/admin/*` routes. Unauthenticated users are redirected to login; unapproved users are redirected to `/admin/pending`.
3. **Pending Approval Page** - A simple, non-interactive page for users awaiting verification.
4. **Auto-Registration** - Automatically create `AdminUser` records upon the first successful Google authentication if they don't exist.
5. **Session Enrichment** - Include the `isApproved` flag in the Auth.js session object for easy client-side and server-side checks.

## Out of Scope

- A UI for the shop owner to approve users (handled manually in database for MVP).
- Role-based access control (all approved admins have equal permissions).
- Password-based login or registration.

## Expected Deliverable

1. Functional Google Login at `/api/auth/signin`.
2. Middleware-protected `/admin` dashboard.
3. `/admin/pending` page for unapproved accounts.
4. Updated Auth.js session with `isApproved` status.
5. Integration tests for route protection and approval logic.
