import { API_KEY, accessToken } from "./constants";

/**
 * Constructs and returns a set of headers for use with API requests.
 *
 * @function headers
 * @description
 * This function creates a Headers object with the appropriate content type for JSON data.
 * If an API key is provided in the constants, it adds an `X-Noroff-API-Key` header.
 * Additionally, if an access token is available in localStorage, it includes an `Authorization` header
 * with a Bearer token for authentication.
 * This function is useful for preparing the headers needed for making API requests.
 *
 * @returns {Headers} A Headers object containing the required headers for API requests.
 */

export function headers() {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  return headers;
}
