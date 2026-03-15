# Coby Learn AI Frontend

Frontend web app for Coby Learn AI, an AI-assisted learning platform where students can upload study materials, generate quizzes and flashcards, chat with an AI tutor, and track progress.

**Website Name:** Coby Learn AI (also shown in UI as CobyLearnAi)

**Team Name:** hmm, apa ya

**With Backend:** Not in code base, in seperate service

**Main Features:**
- Authentication flow with protected/public routes (sign up, sign in, forgot/reset password).
- Personalized dashboard with daily quiz status, streak, tasks summary, quick actions, and onboarding modal state.
- Library management for study packages/folders.
- Material upload and management for PDF, text, and YouTube sources.
- AI-generated summary display and AI Tutor chat tied to a specific material.
- AI quiz generation, quiz attempt submission, and detailed quiz result view.
- AI flashcard generation and flashcard play mode.
- Daily quiz mode with claim flow and streak support.
- Task planner with list and calendar views, filtering, grouping, and Google Calendar shortcut.
- Progress analytics with heatmap, streak card, and key learning stats.
- Responsive navigation for desktop and mobile.
- PWA support via Vite PWA plugin and web app manifest.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- MUI 7 (Material UI) + Emotion
- React Router 7
- TanStack React Query
- Axios
- Zustand
- Framer Motion
- Vite PWA plugin
- Vercel Analytics


## Project Structure

```text
src/
  components/
    auth/            # Route protection middleware
    dashboard/       # Dashboard widgets and onboarding
    landing-page/    # Marketing landing sections
    library/         # Folder/material dialogs and items
    progress/        # Stat cards and heatmap
    tasks/           # Task dialogs, list items, calendar
    common/          # Shared UI widgets/dialogs
  pages/             # Route-level pages
  services/          # API service layer by domain
  stores/            # Zustand stores
  theme/             # MUI theme customization
  lib/               # Axios client and app-level utilities
  utils/             # Helper utilities
public/
  manifest.webmanifest
  *.lottie assets
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

App runs on Vite dev server (host enabled).

### Build Production

```bash
npm run build
```

## API and Proxy Setup

This frontend uses relative API base path:
- Axios base URL: `/api/v1`

### Local Development
- Vite proxy forwards `/api/v1/*` to backend target configured in [vite.config.ts](vite.config.ts).

### Deployment
- Vercel rewrites `/api/v1/:path*` to backend target configured in [vercel.json](vercel.json).

## PWA Support

- Installation for Mobile Support by Vite PWA
- Manifest available at [public/manifest.webmanifest](public/manifest.webmanifest).

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Type-check and build
- `npm run preview` - Preview build output
- `npm run lint` - Run ESLint
