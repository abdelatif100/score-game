# Spec Requirements Document

> Spec: Console Listing and Details
> Created: 2026-03-12

## Overview

Implement the core public-facing console management views, including a comprehensive list of consoles with their real-time availability status and a detailed view for each console. This feature is critical for reducing phone inquiries and providing immediate transparency to customers regarding in-store equipment.

## User Stories

### Check Console Availability

As a customer planning to visit the store, I want to see a real-time list of all consoles and their current status (Available/Reserved), so that I can decide whether to visit now or wait.

**Workflow:**
1. User navigates to the "Consoles" page.
2. User sees a permanent pricing explanation at the top.
3. User browses a list of cards, each showing a console's name, its status, a "Price from 50 DZD" label, and a preview of 5 installed games.

### View Full Console Information

As a customer interested in a specific console, I want to see its full pricing breakdown and every game installed on it, so that I can ensure it meets my gaming needs.

**Workflow:**
1. User clicks "See More" or "View Full Console Details" on a console card.
2. User is taken to a dedicated console details page.
3. User views the console's name, its current status, a detailed pricing table, and a complete, browseable list of all installed games.

## Spec Scope

1. **Consoles Page (/consoles)** - A page featuring a persistent pricing explanation section followed by a list of console cards.
2. **Console Card Component** - A reusable UI component that displays console name, availability status (using clear visual indicators), starting price, and a preview of the first 5 installed games.
3. **Console Details Page (/consoles/[id])** - A detailed view for a single console showing its name, status, a full pricing breakdown table (10m, 30m, 1h, etc.), and the complete list of installed games.
4. **Data Integration** - Dynamic data fetching from the database to ensure statuses and game lists are accurate.

## Out of Scope

- Real-time "push" updates (manual refresh for MVP).
- Admin interface for changing statuses (handled in Phase 2).
- Clicking on a game in the list to see game details (handled in a separate Game Catalog spec).
- Online booking or reservation functionality.

## Expected Deliverable

1. A fully responsive `/consoles` route displaying all consoles and pricing info.
2. A fully responsive `/consoles/[id]` route for every console in the database.
3. Unit tests for console status logic and card rendering.
