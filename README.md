# ARC Design Archive

A minimalist, production-ready ARC Design Archive built with Next.js (App Router) and Tailwind CSS. The site prioritizes fast scanning of UI sections, cards, and systems rated 7/10 or higher.

## Features
- Home page with positioning statement and latest work grid.
- Archive with tag filters (Sections, Cards, Systems, Experiments) and sorting (Newest, Oldest, Best).
- Detail pages with gallery, tags, rating, and concise notes.
- Contact page with direct email link and profile placeholders.
- Local data only; no external CMS or APIs.

## Tech stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- TypeScript

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 in your browser.
4. Build for production:
   ```bash
   npm run build
   npm start
   ```

## How to add a new design item
1. Open `src/data/work.ts`.
2. Add a new object to the `workItems` array with the following shape:
   ```ts
   {
     id: 'unique-slug',
     title: 'Title',
     date: '2024-05-10', // ISO string
     tags: ['Sections'], // any of 'Sections' | 'Cards' | 'Systems' | 'Experiments'
     rating: 8, // integer 7-10
     thumbnail: '/placeholders/new-item.svg',
     images: ['/placeholders/new-item.svg'], // one or more local paths
     shortDescription: 'One or two sentences.',
     tools: ['Figma'], // optional
     notes: ['Optional bullet up to four items'],
   }
   ```
3. Add your thumbnail and gallery assets under `public/placeholders/` (or another folder inside `public`).
4. Save the file; the new item automatically appears on Home, Archive, and its detail route `/work/<id>`.

## Assumptions
- Archive items use local placeholder imagery stored under `public/`.
- Ratings stay within the required 7–10 range.
- No external data sources or CMS are used; updates happen via `src/data/work.ts`.

