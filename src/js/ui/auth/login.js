import { login } from "../../api/auth/login";

/**
 * Handles the login form submission and calls the {@link login} function.
 *
 * @async
 * @function onLogin
 * @param {Event} event - The event object from the form submission.
 *
 * @description
 * This function is used as an event listener for a login button. When the button is clicked,
 * the form data is collected and passed to the {@link login} function for authentication.
 * It prevents the default form submission and sends the form data (email and password)
 * to the `login` function for further processing.
 *
 * @returns {void} - There is no return value from using this function. The effect that occurs is triggering the 'login' function.
 *
 * @see {@link login} for handling the actual login process and the API call.
 */

export async function onLogin(event) {
  event.preventDefault();

  const form = event.target;

  const loggedInUserData = Object.fromEntries(new FormData(form));

  login(loggedInUserData);
}
