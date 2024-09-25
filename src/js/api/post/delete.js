import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function deletePost(id) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "DELETE",
      headers: headers(),
    });

    if (response.ok) {
      console.log("Post Deleted Successfully");
      return true;
    } else {
      console.error("Failed to delete post:", response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error Deleting post:", error);
    return false;
  }
}
