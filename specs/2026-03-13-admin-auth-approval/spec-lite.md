# Spec Summary (Lite)

Implement secure admin dashboard access using Auth.js (v5) and Google OAuth with a manual approval step. All employees must log in via Google, but access is only granted to those with a manually set `isApproved: true` flag in the `AdminUser` table. Unapproved users are automatically registered and redirected to a "Pending" page, while `/admin/*` routes are protected via Next.js Middleware.
