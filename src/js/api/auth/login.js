import { API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";

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

    if (!response.ok) {
      const userError = (document.getElementById(
        "userError"
      ).innerHTML = `${result.errors[0].message}`);
      throw new Error(`Error: ${response.status} ${response.statusText}`);
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

    const data = await response.json();
    console.log(data);

    localStorage.setItem("accessToken", `${data.data.accessToken}`);
    localStorage.setItem("userName", `${data.data.name}`);
  } catch (error) {
    console.log(error);
  }
}
