# Product Requirements Document (PRD)
## Video Game Store Information Website
Version: 1.0  
Project Type: Single Store MVP  
Priority: High Performance  

---

# 1. Product Overview

## 1.1 Purpose
Build a fast, information-only website for a single physical video game store that allows customers to:

- View available consoles
- See console availability status
- Browse installed games per console
- Browse full game catalog
- Understand pricing structure
- Reduce unnecessary phone calls

The system does NOT support online booking.

---

# 2. Business Objectives

1. Marketing visibility
2. Operational transparency
3. Reduce phone calls
4. Improve pre-visit customer experience

Primary KPI:
- Reduced phone inquiries about availability
- Increased walk-in visits

---

# 3. Target Users

## 3.1 Primary Users
- Online customers (before visiting store)

## 3.2 Secondary Users
- Store employees (Admin dashboard users)

---

# 4. Scope (MVP)

## Included:
- Public website
- Console availability display
- Game catalog
- Console details page
- Game details page
- Admin dashboard
- Google login authentication
- Manual status updates

## Not Included:
- Online reservation
- Online payment
- Real-time automatic updates
- Multi-store support
- Advanced filtering
- Public registration

---

# 5. Functional Requirements

---

# 5.1 Public Website

## 5.1.1 Homepage

Simple landing page containing:

- Button: "View Consoles"
- Button: "Browse Games"

No complex design.
Lightweight and fast.

---

## 5.1.2 Consoles Page

### Layout Order:

1. Pricing Explanation Section (Always visible at top)
2. Console List

---

### 5.1.2.1 Pricing Explanation Section

Must clearly explain:

- 10 minutes → 50 DZD (price may vary depending on gameplay)
- 30 minutes → 100 DZD
- 1 hour → 200 DZD
- If session exceeds 10 minutes → normal pricing tiers apply

This explanation is permanently visible above console list.

---

### 5.1.2.2 Console Card

Each console card must display:

- Console name (e.g., PS5 #1)
- Status:
  - Available
  - Reserved
- Text: "Starting from 50 DZD"
- Installed games preview (maximum 5 games)
- Button: "See More"

No discount logic displayed on card.

---

### 5.1.2.3 Console Details Page

When user clicks console:

Display:

- Console name
- Current status
- Full pricing breakdown
- Full list of installed games

---

## 5.1.3 Game Catalog Page

Display:

- Grid layout
- Game image
- Game name

No filtering (MVP).

---

## 5.1.4 Game Details Page

Display:

- Game image
- Game name
- Short description

Do NOT display which consoles have this game installed.

---

# 6. Admin Dashboard

---

## 6.1 Access Control

- No public registration page
- Hidden registration link
- Registration known only by shop owner
- Account approval handled manually in database
- Only approved accounts can login
- Google Login required
- Multiple employees allowed
- All employees have same permissions

---

## 6.2 Admin Capabilities

Admin must be able to:

- Add/Edit/Delete consoles
- Change console status (Available / Reserved)
- Edit installed games list per console
- Add/Edit/Delete games
- Edit game description
- Edit pricing explanation text

All changes update immediately (manual update system).

---

# 7. Non-Functional Requirements

## 7.1 Performance (Top Priority)

- Fast loading (<2 seconds)
- Optimized images
- Minimal animations
- Lightweight frontend
- Efficient database queries
- Mobile-friendly
- Works well on slow internet

---

## 7.2 Security

- Google OAuth authentication
- Database-level approval validation
- No public admin access
- Protected admin routes
- HTTPS required

---

## 7.3 Scalability

- Single store architecture
- No multi-tenant logic
- Database designed for future expansion (optional)

---

# 8. Data Model (High-Level)

## Console

- id
- name
- status (available/reserved)
- created_at
- updated_at

## Game

- id
- name
- image_url
- description
- created_at
- updated_at

## ConsoleGames (Relation Table)

- id
- console_id
- game_id

## AdminUser

- id
- email
- is_approved (boolean)
- created_at

---

# 9. Technical Recommendations (Performance-Oriented)

Frontend:
- Lightweight framework (Next.js / React minimal setup)
- Static generation where possible
- Image optimization

Backend:
- REST API
- Simple relational database (PostgreSQL)
- Indexed status queries

Authentication:
- Google OAuth
- Middleware route protection

Hosting:
- VPS optimized for low latency

---

# 10. Future Enhancements (Not MVP)

- Online reservation system
- Real-time availability updates
- Push notifications
- Multi-store support
- Advanced filtering
- Analytics dashboard
- Customer accounts

---

# 11. Definition of Done

The product is considered complete when:

- Customers can view consoles and availability
- Customers can browse games
- Admin can manage data without developer help
- Website loads quickly on mobile networks
- System is secure and stable

---

END OF PRD