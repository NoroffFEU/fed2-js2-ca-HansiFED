import { API_SOCIAL_PROFILES_UPDATE } from "../constants";
import { headers } from "../headers";

export async function updateProfile({ bio, avatar, banner }) {
  const body = JSON.stringify({
    bio,
    banner,
    avatar,
  });

  try {
    const response = await fetch(API_SOCIAL_PROFILES_UPDATE, {
      method: "PUT",
      headers: headers(),
      body,
    });

    if (!response.ok) {
      console.log("Could not update", response.status, response.statusText);
    }

    const userData = await fetch(API_SOCIAL_PROFILES_UPDATE, {
      method: "GET",
      headers: headers(),
    });

    const refreshLocalStorage = await userData.json();

    localStorage.setItem("myUserData", JSON.stringify(refreshLocalStorage));

    // 22-29 should maybe be moved to when I start getting posts for my user on my userpage

    return response;
  } catch (error) {
    console.error(error);
  }
}
