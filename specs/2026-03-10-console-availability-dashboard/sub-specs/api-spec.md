# API Specification

This is the API specification for the Console Availability Dashboard.

## Endpoints

### GET `/api/consoles`
**Purpose:** Fetch all consoles and their current status for the dashboard.
**Response:** `Array<{ id, name, status, games_preview: Array<{ id, name, image_url }> }>`

### GET `/api/consoles/[id]`
**Purpose:** Fetch detailed information for a specific console.
**Response:** `{ id, name, status, full_games_list: Array<{ id, name, description, image_url }> }`

## Implementation Note
Since we are using Next.js 16, these will be implemented primarily as **Server Actions** or direct database calls within **Server Components** to minimize client-side JS and maximize speed.
