/**
 * Shared TypeScript type definitions
 *
 * Export types that are used across multiple parts of the application.
 * Keep feature-specific types close to where they're used.
 */

// Example: User type
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// Example: API Response wrapper
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

// Example: Pagination
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
