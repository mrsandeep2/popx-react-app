# PopX React App

A modern React-based web application that replicates a mobile-first PopX user experience with seamless authentication, protected routing, and responsive UI design. The project focuses on clean frontend architecture, intuitive user interactions, and pixel-perfect implementation.

## Key Features

- Secure user registration flow
- Login with credential validation
- Searchable country code selector for phone input
- Password visibility toggle
- Real-time form validation with inline feedback
- Session persistence using local storage
- Protected account settings route
- Logout functionality
- Responsive mobile-centered interface
- Smooth routing and user navigation

## Tech Stack

- React
- Vite
- React Router
- CSS Modules
- localStorage

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deployment

This project is deployment-ready and works seamlessly on platforms like **Vercel**.

Live URL:

```text
https://popx-react-app-six.vercel.app/
```

### Vercel Deployment Steps

1. Push the project to GitHub
2. Login to Vercel
3. Click **New Project**
4. Import the GitHub repository
5. Select framework preset: **Vite**
6. Build command:

```bash
npm run build
```

7. Output directory:

```bash
dist
```

8. Click **Deploy**

After deployment, Vercel generates a shareable live URL:

```text
https://your-project-name.vercel.app
```

## Project Highlights

- Clean and reusable component-based architecture
- Authentication flow with credential matching
- Protected route handling
- User-friendly form validation
- Searchable country code selection
- Production-ready frontend structure
- Optimized for deployment and browser refresh-safe routing

## Environment Variables

No environment variables are required for this project.

## Routing Support

SPA route rewrites are configured for deployment, ensuring direct route access and browser refresh work correctly for pages like:

- `/login`
- `/register`
- `/account-settings`