import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

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
      const userError = (document.getElementById(
        "userError"
      ).innerHTML = `${result.errors[0].message}`);
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
