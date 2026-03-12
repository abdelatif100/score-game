# Stitch UI Prompt: Consoles & Availability Page

## Core Concept
A high-performance, information-focused "Consoles & Availability" page for a local video game store. The design should be clean, industrial, and mobile-friendly, prioritizing operational transparency and quick information retrieval.

## Layout Structure
- **Header:** Simple navigation with a logo and links to "Home" and "Games".
- **Hero Section:** A prominent, permanently visible "Pricing Information" section.
    - **Vibe:** Clear, informative, and high-contrast.
    - **Content:** 
        - Title: "Pricing & Billing"
        - Tiers: 10 minutes → 50 DZD, 30 minutes → 100 DZD, 1 hour → 200 DZD.
        - Note: "Sessions exceeding 10 minutes follow standard pricing tiers. Prices vary by game/console generation."
- **Console Grid:** A responsive grid layout of console cards.
- **Console Card Component:**
    - **Title:** Console Name (e.g., "PlayStation 5 #1").
    - **Status Badge:** A highly visible status indicator.
        - **Available:** Forest green background with white text, "Available".
        - **Reserved:** Crimson red background with white text, "Reserved".
    - **Pricing Tag:** "Starting from 50 DZD".
    - **Game Preview:** A clean list of the first 5 installed games (e.g., FIFA 23, Call of Duty, etc.) with small, high-quality thumbnails.
    - **Primary Action:** A "See More" button that is secondary in visual weight to the status badge.

## Visual Style & Vibe
- **Style:** Industrial, minimalist, and functional. Use a neutral color palette (whites, grays, and deep blacks) to make the green/red status badges pop.
- **Typography:** Clean sans-serif font (e.g., Inter or Geist). Bold headers for console names.
- **Components:** Use `shadcn/ui` inspired card layouts with subtle borders (1px solid gray) and slight rounded corners (8px).
- **Imagery:** High-quality, macro-style console icons or photos. Ensure game thumbnails are sharp and uniform in size.

## Iteration Note
Ensure the mobile view stacks the cards vertically while maintaining the permanent visibility of the pricing section at the top.
