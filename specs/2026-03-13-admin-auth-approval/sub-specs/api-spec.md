# API Specification

This is the API specification for the Admin Authentication & Approval flow.

## Auth.js Routes

Auth.js handles the following endpoints automatically at `/api/auth/*`.

### GET /api/auth/signin

Redirects the user to the Google Login page.

### POST /api/auth/signout

Terminates the current session and redirects the user to the homepage.

### GET /api/auth/session

Returns the current session JSON. This will include our custom `isApproved` flag.

## Protected Routes (Middleware)

The following UI routes are protected:

- `/admin`: Dashboard homepage.
- `/admin/consoles`: Console management.
- `/admin/games`: Game management.
- `/admin/pricing`: Pricing explanation management.

### Redirect Logic

1. **Unauthenticated**: Redirect to `/api/auth/signin?callbackUrl=/admin`.
2. **Authenticated but NOT `isApproved`**: Redirect to `/admin/pending`.
3. **Authenticated AND `isApproved`**: Allow access to dashboard routes.
