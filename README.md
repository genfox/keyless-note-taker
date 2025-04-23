# Keyless Note Taker

A note-taking app built with modern web tech.

---

## 💡 Overview

Keyless Note Taker is a minimalist note-taking application designed for simplicity and speed. It leverages:

- **Next.js 15** with the App Router for server-side rendering and file-based routing
- **Tailwind CSS** for utility-first styling
- **Semantic HTML** for accessibility and SEO
- **Lit** Web Component (`<note-card>`) wrapped with `lit/react` for reusable, framework-agnostic UI
- **Turso** (SQLite driver) for a lightweight, serverless database backend
- **Vercel** for seamless CI/CD and hosting

For the sake of brevity in this test project, we assume a signed-in user with `id = 1` (no auth logic implemented).

---

## 🔧 Features

- Create, edit, and delete notes
- Each note includes a **title**, **body text**, and **last-updated timestamp**
- Responsive, mobile-first layout
- Fast, server-rendered pages with Next.js
- Reusable Web Component for note cards

---

## 🛠️ Tech Stack

| Layer         | Technology                                     |
| ------------- | ---------------------------------------------- |
| Framework     | Next.js 15 (App Router)                        |
| Styling       | Tailwind CSS                                   |
| Components    | Semantic HTML + Lit Web Component + lit/react  |
| Database      | Turso (SQLite driver) + Drizzle (ORM)          |
| Hosting       | Vercel                                         |
| Language      | TypeScript                                     |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+ (recommended)
- Yarn or npm
- Turso CLI (for local dev/migrations)

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/genfox/keyless-note-taker.git
   cd keyless-note-taker
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the project root:

   ```env
   TURSO_DATABASE_URL=libsql://<your-turso-instance>.turso.io
   TURSO_AUTH_TOKEN=<your-turso-auth-token>
   ```

4. **Run database migrations**

   ```bash
   npx drizzle-kit generate
   npx drizzle-kit push
   ```

5. **Run the dev server**

   ```bash
   yarn dev
   # or npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## 📦 Project Structure

```text
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page (list of notes)
│   ├── notes/                # Notes actions (create, edit, delete)
│       └── actions.ts
├── authentication/           # Mock authentication
├── components/               # App components
│   └── note-card             # Note Card component
│       └── note-card-wc.ts   # `<note-card>` web component definition
│       └── note-card.tsx     # `<note-card>` react component wrapper
├── db/                       # Turso Database init & API utility functions
├── public/                   # Static assets
```

---

## ✨ Lit Note Card Component

The `<note-card>` Web Component is defined in `components/note-card/note-card-wc.ts` using **Lit**. We integrate it in React via `lit/react`:

```tsx
"use client";

import React from 'react';
import {createComponent} from '@lit/react';
import {NoteCard as NoteCardWC} from './note-card-wc';

const NoteCard = createComponent({
  react: React,
  tagName: 'note-card',
  elementClass: NoteCardWC,
  displayName: "NoteCard",
});

export default NoteCard;
```

Then use it like any React component:

```tsx
<NoteCard
    noteId={...}
    title={...}
    content={...}
    lastUpdate={...}
    onDeleteNote={...}
    onUpdateNote={...}
/>
```

---

## 🔒 Authentication

_No auth logic implemented._ For demo purposes, the app assumes a logged-in user with `id = 1`. 

---

## 📦 Deployment

This project is hosted on **Vercel**. Push to `main` and Vercel automatically builds and deploys.

1. Connect your GitHub repo to Vercel.
2. Add the same environment variables in the Vercel dashboard.
3. Redeploy or push changes.

---

## 📝 License

MIT © Gennaro D'Urso

---
