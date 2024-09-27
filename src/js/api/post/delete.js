import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function deletePost() {
  try {
    const findId = new URLSearchParams(window.location.search).get("id");
    const userConfirmed = confirm("Do you wish to delete this post?");

    let response;

    if (userConfirmed) {
      response = await fetch(`${API_SOCIAL_POSTS}/${findId}`, {
        method: "DELETE",
        headers: headers(),
      });
    }

    if (response.ok) {
      console.log("Post Deleted Successfully");
      window.location.href = "/";
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
