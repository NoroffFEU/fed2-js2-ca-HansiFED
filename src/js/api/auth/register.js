import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

/**
 * Registers a user by sending their name, email, and password to the designated API.
 *
 * @async
 * @function register
 *
 * @param {object} objectFromForms - Object containing user input from an HTML form.
 * @param {string} objectFromForms.name - The username that the user wishes to register with.
 * @param {string} objectFromForms.email - The user's email address for registration, which must end with '@stud.noroff.no' for API validation.
 * @param {string} objectFromForms.password - The user's password for registration.
 *
 * @description
 * This function sends the provided user details to the API for registration. If the registration
 * is successful, a success message is displayed and the user is redirected to the login page.
 * If the registration fails, an error message from the API is displayed on the webpage.
 *
 * @returns {Promise<object>} A promise that resolves with the API response object, which contains
 * the result of the registration process.
 *
 * @throws {Error} If the API call fails, an error is thrown. The error message from the API is also displayed
 * in the 'userError' element of the HTML. Any thrown error is logged to the console.
 */

export async function register({ name, email, password }) {
  const body = JSON.stringify({
    name,
    email,
    password,
  });

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(),
      body,
    });

    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      document.getElementById("userError").innerHTML = `${result.errors[0].message}`;
    }

    if (response.ok) {
      userError.style.display = "none";
      document.getElementById(
        "userSuccess"
      ).innerHTML = `User was created successfully, we'll now redirect you to the login page`;
      setTimeout(() => {
        window.location.href = "/auth/login/";
      }, 6000);
    }

    return result;
  } catch (error) {
    throw error;
  }
}
