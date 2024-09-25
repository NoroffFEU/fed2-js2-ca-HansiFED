import { API_SOCIAL_PROFILES_UPDATE } from "../constants";
import { headers } from "../headers";

export async function updateProfile(bio, { avatar, banner }) {
  const body = JSON.stringify({ bio: bio, banner: banner, avatar: avatar });

  try {
    const response = await fetch(API_SOCIAL_PROFILES_UPDATE, {
      method: "PUT",
      headers: headers(),
      body,
    });
  } catch (error) {}
}
