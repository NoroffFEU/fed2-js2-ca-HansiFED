import { onLogout } from "../../ui/auth/logout";

/**
 * Sets up an event listener for the logout button.
 *
 * @function setLogoutListener
 * @description
 * This function retrieves the logout button from the DOM using its ID and attaches an
 * event listener that triggers the `onLogout` function when the button is clicked.
 *
 * This is called to ensure that the user can log out of the application
 *
 *
 */

export function setLogoutListener() {
  const button = document.getElementById("logout-button");

  button.addEventListener("click", onLogout);
}
