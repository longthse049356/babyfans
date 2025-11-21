# App Components

This folder contains route-specific components that are colocated with the app directory.

## Usage

Use this folder for components that are:

- Specific to certain routes
- Not reused across the application
- Closely tied to routing logic

## Private Folder Convention

The `_components` folder uses the private folder convention (underscore prefix), which:

- Indicates it's an implementation detail
- Is not considered by the routing system
- Helps organize internal files

## Best Practices

- Use for route-specific components
- Move to root `components/` folder if they become reusable
- Keep components focused on their specific route's needs
