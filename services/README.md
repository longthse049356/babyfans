# Services

This folder contains API service functions and data fetching logic.

## Structure

- `api/` - API service functions organized by feature/domain
- `types/` - Service-specific TypeScript types

## Usage

API services should be organized by feature or domain. For example:

```
services/
  api/
    auth.ts       # Authentication API calls
    user.ts       # User-related API calls
    room.ts       # Room-related API calls
  types/
    api.ts        # API response types
```

## Best Practices

- Keep API calls separate from page components
- Use TypeScript for type safety
- Handle errors appropriately
- Use consistent naming conventions
