import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function updatePost({ title, body, tags, media }) {
  const id = new URLSearchParams(window.location.search).get("id");

  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({
        title,
        body,
        media,
        tags,
      }),
    });

    if (!response.ok) {
      console.log(response.status, response.statusText);
      console.log(response);
    }

    if (response.ok) {
      alert("Post updated successfully");
    }

    console.log(await response.json());
  } catch (error) {
    alert(error);
    throw error;
  }
}
