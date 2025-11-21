/**
 * Example API service file
 *
 * This file demonstrates the structure for API service functions.
 * Replace with your actual API calls organized by feature/domain.
 */

// Example: User API service
export async function getUser(id: string) {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
}

// Example: Create user
export async function createUser(data: unknown) {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return response.json();
}
