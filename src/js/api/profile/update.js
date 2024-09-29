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

    const refreshLocalStorage = await response.json();

    localStorage.setItem("myUserData", JSON.stringify(refreshLocalStorage));
    if (response.ok) {
      document.getElementById("errorMessage").style.display = "none";
      document.getElementById("updateProfileButton").style.display = "none";
      document.getElementById("successMessage").innerHTML =
        "Profile has been updated, refreshing site";
      setTimeout(() => {
        window.location.href = "/profile/";
      }, 6000);
    }

    if (!response.ok) {
      console.log("Could not update", response.status, response.statusText);
      document.getElementById("errorMessage").innerHTML = response.errors[0].message;
    }

    // 22-29 should maybe be moved to when I start getting posts for my user on my userpage

    return response;
  } catch (error) {
    console.error(error);
  }
}
