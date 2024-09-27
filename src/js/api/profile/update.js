import { API_SOCIAL_PROFILES_UPDATE } from "../constants";
import { headers } from "../headers";

export async function updateProfile({ bio, avatar, banner }) {
  const body = JSON.stringify({
    bio,
    banner,
    avatar,
  });

  try {
    const userData = await fetch(API_SOCIAL_PROFILES_UPDATE, {
      method: "GET",
      headers: headers(),
    });

    const response = await fetch(API_SOCIAL_PROFILES_UPDATE, {
      method: "PUT",
      headers: headers(),
      body,
    });

    const refreshLocalStorage = await userData.json();

    localStorage.setItem("myUserData", JSON.stringify(refreshLocalStorage));

    if (response.ok) {
      window.location.href = "/profile/";
    }

    if (!response.ok) {
      alert(response.status, response.statusText);
      console.log("Could not update", response.status, response.statusText);
    }

    // 22-29 should maybe be moved to when I start getting posts for my user on my userpage

    return response;
  } catch (error) {
    console.error(error);
  }
}
