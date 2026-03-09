# Score Game

A fast, simple, and transparent video game store information platform that helps customers check console availability and browse games before visiting.

## 🎮 About

**Score Game** is an information management platform designed to streamline customer inquiries and enhance the pre-visit experience for gaming enthusiasts. Rather than implementing complex booking systems, we prioritize delivering essential console availability and game catalog information with exceptional performance (<2 seconds load time on mobile).

### The Problem We Address

- **Operational Inefficiency:** Customers frequently call the store requesting console availability and pricing information
- **Information Asymmetry:** Customers lack visibility into installed games per console before arrival
- **Staff Burden:** Repetitive inquiries consume valuable staff time better spent on customer experience

### Our Solution

- Real-time status dashboard for console availability management
- Comprehensive game catalog mapped to specific consoles
- Optimized mobile experience designed for varying connection speeds
- Intuitive staff interface for rapid status updates

---

## 👥 Target Users

### Store Customers (15-40 years old)
- Verify console availability before visiting the store
- Review installed game selections per console
- Access transparent pricing and session duration options

### Store Employees (18-35 years old)
- Manage operational status and customer information requests
- Minimize repetitive phone inquiries through self-service platform
- Update console status and game catalog with minimal effort

---

## ✨ Core Features

### Customer Portal
- **Console Availability Dashboard:** Real-time status indicators (Available/Reserved) for each gaming console
- **Transparent Pricing:** Session-based pricing structure (10 min, 30 min, 1 hour sessions)
- **Game Catalog:** Browse complete game library with images, descriptions, and console mapping
- **Console Specifications:** Detailed breakdown of installed games per console

### Staff Management
- **Admin Dashboard:** Streamlined interface for status updates and catalog management
- **Secure Authentication:** Google OAuth integration for staff access
- **Real-Time Updates:** Instant public-facing platform synchronization

---

## 🛠️ Technical Architecture

### Frontend
- **Framework:** Next.js 16 (App Router) with React
- **Styling:** Tailwind CSS with responsive design
- **UI Component Library:** shadcn/ui
- **Icons:** Lucide React
- **Typography:** Google Fonts
- **Deployment:** Vercel with automated CI/CD

### Backend & Infrastructure
- **Database:** PostgreSQL (self-hosted)
- **Server Infrastructure:** Self-hosted deployment
- **Deployment Pipeline:** Vercel CI/CD integration

---

## 📋 Installation & Setup

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/abdelatif100/score-game.git
cd score-game

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

---

## 📝 License

This project is proprietary. All rights reserved.

## 🤝 Contributing

For inquiries or contributions, please contact the development team.

---

**Score Game** © 2026. All rights reserved.