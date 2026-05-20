# PopX React App

A React-based implementation of the PopX mobile UI design, built as an interview assignment. The application includes user registration, login, session handling, and protected account settings pages.

## Features

- User Registration
- User Login
- Searchable country code selector
- Session persistence
- Protected routes
- Password visibility toggle
- Form validation
- Responsive mobile-centered UI

## Tech Stack

- React
- Vite
- React Router (TanStack Router)
- CSS Modules
- localStorage

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Run Preview

```bash
npm run preview
```

## Environment Variables

No environment variables required.

## Deployment (Vercel)

1. Push the code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click **New Project**
4. Import the GitHub repository
5. Framework preset: **Vite**
6. Build command: `npm run build`
7. Output directory: `dist`
8. Click **Deploy**

After deployment, Vercel will generate a live link like:

```
https://your-project-name.vercel.app
```

You can rename the project in Vercel for a cleaner URL, e.g. `popx-react-app.vercel.app`.

## Notes

A `vercel.json` is included with SPA rewrites so that direct visits and refreshes on routes like `/login`, `/register`, and `/account` work correctly.
