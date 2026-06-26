# LIFENICE

![LIFENICE Banner](./public/banner.png)

**LIFENICE** is a full-stack Next.js web application built to introduce a football club globally.
The platform presents the club identity, team story, players, fixtures, achievements, media, and contact information in a modern, responsive, and scalable web experience.

The project is designed as both a public-facing football club website and a maintainable full-stack system using **Next.js**, **React**, **TypeScript**, and **Neon PostgreSQL**.

---

## Table of Contents

* [Introduction](#introduction)
* [Banner](#banner)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Code Structure](#code-structure)
* [System Design](#system-design)
* [Database](#database)
* [Environment Variables](#environment-variables)
* [Getting Started](#getting-started)
* [Development Commands](#development-commands)
* [Deployment](#deployment)
* [License](#license)

---

## Introduction

LIFENICE is a football club introduction website created to help the club build a professional online presence and reach supporters globally.

The application focuses on:

* Introducing the LIFENICE football club brand
* Displaying club history, mission, and values
* Showcasing players, coaches, and team members
* Publishing fixtures, match results, and club news
* Sharing media content such as images, videos, and highlights
* Providing contact and social media information
* Supporting future admin features for content management

---

## Banner

The banner represents the visual identity of LIFENICE FC.

Recommended banner location:

```txt
public/banner.png
```

Example Markdown usage:

```md
![LIFENICE Banner](./public/banner.png)
```

Recommended banner size:

```txt
1920 x 600 px
```

---

## Features

### Public Website

* Home page with club introduction
* About page for club story and mission
* Team page for players and staff
* Fixtures and results page
* News or announcements page
* Gallery or media page
* Contact page
* Responsive layout for desktop, tablet, and mobile

### Full-Stack Capabilities

* Server-side rendering with Next.js
* API routes for backend logic
* PostgreSQL database using Neon
* Type-safe development with TypeScript
* Scalable folder structure
* SEO-friendly pages
* Optimized images and metadata
* Ready for future admin dashboard

### Future Enhancements

* Admin authentication
* Player management
* Match schedule management
* News management
* Image upload integration
* Multi-language support
* Email contact form
* Analytics dashboard

---

## Tech Stack

### Frontend

| Technology        | Purpose                    |
| ----------------- | -------------------------- |
| Next.js 16.2.7    | Full-stack React framework |
| React             | UI library                 |
| TypeScript        | Type-safe JavaScript       |
| Tailwind CSS      | Utility-first styling      |
| App Router        | Routing and layouts        |
| Server Components | Server-first rendering     |
| Client Components | Interactive UI behavior    |

### Backend

| Technology                          | Purpose                        |
| ----------------------------------- | ------------------------------ |
| Next.js API Routes / Route Handlers | Backend endpoints              |
| Server Actions                      | Server-side mutations          |
| Prisma ORM                          | Database access layer          |
| Neon PostgreSQL                     | Serverless PostgreSQL database |
| Zod                                 | Runtime validation             |

### Tooling

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| ESLint     | Code linting                    |
| Prettier   | Code formatting                 |
| npm / pnpm | Package management              |
| Vercel     | Recommended deployment platform |
| GitHub     | Version control                 |

---

## Code Structure

Recommended project structure:

```txt
lifenice/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── public/
│   ├── banner.png
│   ├── logo.png
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── team/
│   │   │   └── page.tsx
│   │   │
│   │   ├── fixtures/
│   │   │   └── page.tsx
│   │   │
│   │   ├── news/
│   │   │   └── page.tsx
│   │   │
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   └── api/
│   │       ├── players/
│   │       │   └── route.ts
│   │       ├── fixtures/
│   │       │   └── route.ts
│   │       └── news/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── team/
│   │   └── ui/
│   │
│   ├── features/
│   │   ├── players/
│   │   ├── fixtures/
│   │   ├── news/
│   │   └── gallery/
│   │
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── validators.ts
│   │   └── utils.ts
│   │
│   ├── services/
│   │   ├── player.service.ts
│   │   ├── fixture.service.ts
│   │   └── news.service.ts
│   │
│   ├── types/
│   │   ├── player.ts
│   │   ├── fixture.ts
│   │   └── news.ts
│   │
│   └── constants/
│       └── site.ts
│
├── .env
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
├── tsconfig.json
└── eslint.config.mjs
```

---

## System Design

LIFENICE follows a full-stack Next.js architecture where the frontend, backend, and server-rendered pages are managed inside a single application.

```txt
User Browser
    |
    v
Next.js App Router
    |
    |-- Server Components
    |-- Client Components
    |-- Layouts and Pages
    |
    v
Route Handlers / Server Actions
    |
    v
Service Layer
    |
    v
Prisma ORM
    |
    v
Neon PostgreSQL
```

### Architecture Layers

#### 1. Presentation Layer

Responsible for rendering pages and UI components.

Located mainly in:

```txt
src/app/
src/components/
```

Examples:

* Home page
* Team page
* Fixture page
* News page
* Gallery page
* Contact page

#### 2. Feature Layer

Groups business-related frontend and backend logic by domain.

Located in:

```txt
src/features/
```

Example domains:

```txt
players/
fixtures/
news/
gallery/
```

#### 3. API Layer

Handles HTTP requests using Next.js Route Handlers.

Located in:

```txt
src/app/api/
```

Example:

```txt
src/app/api/players/route.ts
src/app/api/fixtures/route.ts
src/app/api/news/route.ts
```

#### 4. Service Layer

Contains business logic and database operations.

Located in:

```txt
src/services/
```

Example:

```txt
player.service.ts
fixture.service.ts
news.service.ts
```

#### 5. Data Access Layer

Uses Prisma ORM to communicate with Neon PostgreSQL.

Located in:

```txt
src/lib/prisma.ts
prisma/schema.prisma
```

---

## Database

This project uses **Neon PostgreSQL** as the database.

Recommended core entities:

```txt
Club
Player
Coach
Fixture
MatchResult
News
GalleryImage
ContactMessage
```

Example database model direction:

```prisma
model Player {
  id          String   @id @default(cuid())
  name        String
  number      Int?
  position    String
  nationality String?
  imageUrl    String?
  bio         String?
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Fixture {
  id          String   @id @default(cuid())
  opponent    String
  location    String?
  matchDate   DateTime
  homeScore   Int?
  awayScore   Int?
  status      String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model News {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  excerpt     String?
  content     String
  coverImage  String?
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/lifenice?sslmode=require"

NEXT_PUBLIC_SITE_NAME="LIFENICE"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

Create `.env.example`:

```env
DATABASE_URL=""

NEXT_PUBLIC_SITE_NAME="LIFENICE"
NEXT_PUBLIC_SITE_URL=""
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/lifenice.git
cd lifenice
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Using pnpm:

```bash
pnpm install
```

### 3. Configure environment variables

Create `.env` and add your Neon PostgreSQL connection string.

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/lifenice?sslmode=require"
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run database migration

```bash
npx prisma migrate dev --name init
```

### 6. Start development server

```bash
npm run dev
```

Or:

```bash
pnpm dev
```

Open the application:

```txt
http://localhost:3000
```

---

## Development Commands

```bash
npm run dev
```

Start the development server.

```bash
npm run build
```

Create a production build.

```bash
npm run start
```

Start the production server.

```bash
npm run lint
```

Run ESLint.

```bash
npx prisma studio
```

Open Prisma Studio for database management.

```bash
npx prisma migrate dev
```

Create and apply database migrations.

```bash
npx prisma generate
```

Generate Prisma Client.

---

## Deployment

Recommended deployment platform:

```txt
Vercel
```

Recommended database platform:

```txt
Neon PostgreSQL
```

Deployment checklist:

* Add `DATABASE_URL` to Vercel environment variables
* Add `NEXT_PUBLIC_SITE_NAME`
* Add `NEXT_PUBLIC_SITE_URL`
* Run Prisma migration before production release
* Confirm image paths are valid
* Confirm metadata and SEO settings
* Confirm responsive layout on mobile devices

---

## Project Goals

The main goals of LIFENICE are:

* Build a professional football club website
* Introduce the club globally
* Improve online brand presence
* Provide supporters with club information
* Create a scalable foundation for future admin features
* Keep the codebase clean, modular, and maintainable

---

## License

This project is private and maintained by the LIFENICE team.

```txt
Copyright © LIFENICE.
All rights reserved.
```
