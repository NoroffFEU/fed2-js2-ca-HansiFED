/**
 * Clears local storage and redirects the window to the login page.
 *
 * @function onLogout
 * @description
 * This function clears all entries in local storage to log the user out
 * and then redirects the browser to the login page. It is
 * called when the user clicks the logout button.
 *
 * @example
 * // Example usage:
 * onLogout();
 *
 * @see {@link setLogoutListener} for details on how this function
 * is often used in an event listener.
 *
 *
 */

export function onLogout() {
  localStorage.clear();
  window.location.href = "/auth/login/";
}
