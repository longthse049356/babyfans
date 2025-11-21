/**
 * Application-wide constants
 *
 * Store constants that are used across multiple parts of the application.
 */

// Example: API endpoints
export const API_ENDPOINTS = {
  USERS: "/api/users",
  AUTH: "/api/auth",
} as const;

// Example: Configuration values
export const CONFIG = {
  APP_NAME: "BabyFans",
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  DEFAULT_PAGE_SIZE: 20,
} as const;

// Example: Status values
export const STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];
