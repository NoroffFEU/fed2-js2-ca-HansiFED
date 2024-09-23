import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

export async function register({ name, email, password }) {
  const body = JSON.stringify({
    name,
    email,
    password,
    // bio: bio || "",
    // banner: banner || "",
    // avatar: avatar || "",
  });

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(),
      body,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
      alert(`${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error during registration:", error);
    throw error;
  }
}
