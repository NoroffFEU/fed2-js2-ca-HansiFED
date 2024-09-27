import { API_SOCIAL_POSTS, API_SOCIAL_SELECTED_POST } from "../constants";
import { headers } from "../headers";

export async function updatePost(id, { title, body, tags, media }) {
  try {
    const response = await fetch(API_SOCIAL_SELECTED_POST, {
      method: "PUT",
      headers: headers(),
    });
  } catch (error) {}
}
