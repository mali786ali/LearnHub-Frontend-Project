# LearnHub — Learning Management System

LearnHub is a responsive, frontend-only Learning Management System built with React, Vite and Tailwind CSS. Learners can browse courses, inspect course details, enroll, open lessons and track progress. Enrollment and completed lessons are saved in the browser with `localStorage`.

## Features

- Responsive home page with hero search, featured courses, categories and instructor highlights.
- Course catalogue with search, category and difficulty filters.
- Course details, learning outcomes, curriculum and enrollment.
- Student dashboard with course progress and continue-learning links.
- Lesson pages with previous/next navigation and mark-as-complete.
- Eight demo courses across multiple categories and difficulty levels.
- Enrollment de-duplication and persistent progress using `localStorage`.
- Reusable components, React Router and a custom localStorage hook.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4
- React Router 6
- Lucide React

## Getting Started

### Prerequisites

Install Node.js (LTS) and npm.

### Installation

```bash
git clone https://github.com/mali786ali/LearnHub-Frontend-Project.git
cd LearnHub-Frontend-Project
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
npm run preview
```

The production build is generated in the `dist/` directory.

## Deployment

The project includes a `vercel.json` rewrite for client-side routes. Import this repository into Vercel, select the Vite preset, use `npm run build` as the build command and `dist` as the output directory.

## Notes

This is a frontend demonstration project. It does not include a backend, database, server-side authentication, payment processing or server-side progress synchronization. Course images use remote Unsplash URLs and lesson resources link to external learning material. The lesson video area is currently a placeholder.
