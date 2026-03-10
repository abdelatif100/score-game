# Spec Requirements Document

> Spec: Console Availability Dashboard
> Created: 2026-03-10

## Overview

Implement a high-performance console availability dashboard that allows customers to view real-time status, pricing, and installed games for each console unit. This feature aims to reduce phone inquiries by providing transparent, up-to-date information before a customer visits the store.

## User Stories

### View Availability
As a customer, I want to see which consoles are currently available or reserved, so that I can decide when to visit the store.

### Check Pricing
As a customer, I want to see a clear breakdown of pricing tiers (10m, 30m, 1h), so that I understand the cost before I arrive.

### Browse Console Games
As a customer, I want to see which games are installed on a specific console, so that I know if my favorite game is ready to play on that unit.

## Spec Scope

1. **Pricing Header** - A permanent section at the top of the page explaining the 50/100/200 DZD pricing tiers.
2. **Console Grid/List** - A responsive display of all console units with their current status (Available/Reserved).
3. **Console Card** - Displaying console name, status badge, "Starting from 50 DZD" text, and a preview of up to 5 installed games.
4. **Console Details Page** - A dedicated page for each unit showing the full list of installed games and the status.

## Out of Scope

- Online reservations or booking.
- User accounts or registration for customers.
- Real-time WebSocket updates (refresh-based or manual update is sufficient for MVP).
- Filtering or searching consoles.

## Expected Deliverable

1. A `/consoles` page displaying the pricing header and console cards.
2. A `/consoles/[id]` dynamic route for detailed console information.
3. Mobile-optimized layout ensuring fast load times on slow connections.
