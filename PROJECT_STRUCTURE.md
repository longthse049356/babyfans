# Project Structure

This document outlines the project structure following Next.js best practices.

## Overview

This project follows the **"Store project files outside of app"** strategy, where shared application code lives in root-level folders and the `app` directory is primarily for routing.

## Folder Structure

```
babyfans/
├── app/                    # Next.js App Router
│   ├── _components/        # Route-specific components (private folder)
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable React components
│   ├── ui/                 # shadcn/ui components
│   └── ...                 # Feature-specific components
├── services/               # API services and data fetching
│   ├── api/                # API service functions by feature
│   └── types/              # Service-specific types
├── lib/                    # Utility functions and helpers
│   └── utils.ts            # Utility functions (cn, etc.)
├── hooks/                  # Custom React hooks
├── types/                  # Shared TypeScript type definitions
├── constants/              # Application-wide constants
├── public/                 # Static assets
└── ...                     # Config files (package.json, tsconfig.json, etc.)
```

## Directory Details

### `/app`

The `app` directory contains Next.js routing files and route-specific components.

**Conventions:**

- `page.tsx` - Makes a route publicly accessible
- `layout.tsx` - Shared UI that wraps routes
- `loading.tsx` - Loading UI (React Suspense boundary)
- `error.tsx` - Error UI (React error boundary)
- `route.ts` - API endpoints
- `_folder` - Private folders (not routable)

**Best Practices:**

- Keep routing logic in `app`
- Use `_components` for route-specific components
- Colocate files that are only used by specific routes

### `/components`

Reusable React components used across the application.

**Structure:**

- `ui/` - Base UI components (shadcn/ui)
- Feature components at root level

**Best Practices:**

- Keep components focused and single-purpose
- Use TypeScript for all components
- Export from index files when appropriate

### `/services`

API service functions and data fetching logic. [[memory:8173289]]

**Structure:**

- `api/` - API service functions organized by feature (e.g., `auth.ts`, `user.ts`, `room.ts`)
- `types/` - Service-specific TypeScript types

**Best Practices:**

- Keep API calls separate from page components
- Organize by feature/domain
- Use consistent error handling
- Type all API responses

### `/lib`

Utility functions and helpers.

**Current Files:**

- `utils.ts` - Utility functions including `cn` for className merging

**Best Practices:**

- Keep functions pure when possible
- Document complex functions
- Split into multiple files as needed

### `/hooks`

Custom React hooks for reusable state logic.

**Best Practices:**

- Follow React hooks naming (start with `use`)
- Keep hooks focused and single-purpose
- Document with JSDoc comments

### `/types`

Shared TypeScript type definitions.

**Best Practices:**

- Export types used across multiple features
- Use descriptive names
- Prefer `interface` for object shapes, `type` for unions/aliases

### `/constants`

Application-wide constants and configuration values.

**Best Practices:**

- Group related constants
- Use TypeScript enums or const objects for type safety
- Document complex constants

## File Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase (e.g., `User.ts`)
- **Constants**: UPPER_SNAKE_CASE or camelCase (e.g., `API_ENDPOINTS.ts`)

## Routing

Routes are defined by the folder structure in `app`:

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/blog/[slug]/page.tsx` → `/blog/:slug`
- `app/shop/[...slug]/page.tsx` → `/shop/*` (catch-all)

## Route Groups

Use parentheses to organize routes without affecting URLs:

- `app/(marketing)/page.tsx` → `/` (group omitted from URL)
- `app/(shop)/cart/page.tsx` → `/cart`

## Private Folders

Folders prefixed with `_` are private and not routable:

- `app/_components/` - Route-specific components
- `app/blog/_lib/` - Blog-specific utilities

## References

- [Next.js Project Structure Documentation](https://nextjs.org/docs/app/getting-started/project-structure)
- [Next.js Routing](https://nextjs.org/docs/app/building-your-application/routing)
