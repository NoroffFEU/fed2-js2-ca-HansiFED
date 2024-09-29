import { register } from "../../api/auth/register";

/**
 * Handles the registration form submission and calls the {@link register} function
 * @async
 * @function onRegister
 *
 * @param {Event} event - The event object from the form submission
 *
 * @description
 * This function handles collecting data from the event form, prevents default form behavior that would refresh the page, and sends that data to the {@link register} function for user registration.
 *
 * @returns {void} - There is no return value from using this function. The effect that occurs is triggering the 'register' function.
 *
 *
 * @see {@link register} for handling of the supplied registration data and the API request.
 */

export async function onRegister(event) {
  event.preventDefault();

  const form = event.target;
  const registeredUserData = Object.fromEntries(new FormData(form));
  register(registeredUserData);
}
