import { API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";

/**
 * Logs in a user by sending their email and password to the designated API.
 *
 * @async
 * @function login
 * @param {object} params - The user's login info.
 * @param {string} params.email - The user's email address.
 * @param {string} params.password - The user's password.
 * @returns {Promise<object>} A promise object that resolves when the login process is complete.
 *
 *
 * @description
 * This function sends a `POST` request to the login API endpoint with the user's
 * email and password. If the login is successful, it receives data from the API and stores the access token and
 * user information in localStorage and redirects the user to the home page.
 * If the login fails, it displays an error message on the webpage in a 'P' html element.
 *
 * @throws {Error} If there is a problem with the API call.
 */

export async function login({ email, password }) {
  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(),
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      document.getElementById("userError").innerHTML = `${data.errors[0].message}`;
    }

    if (response.ok) {
      userError.style.display = "none";
      document.getElementById(
        "userSuccess"
      ).innerHTML = `User logged in successfully, we'll now redirect you to the home page`;
      setTimeout(() => {
        window.location.href = "/";
      }, 6000);
    }

    localStorage.setItem("accessToken", `${data.data.accessToken}`);
    localStorage.setItem("userName", `${data.data.name}`);
    localStorage.setItem("myUserData", `${JSON.stringify(data)}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
