import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Deletes a post after a user confirmation from browser.
 *
 * @async
 * @function deletePost
 * @description
 * This function prompts the user for confirmation before deleting a post.
 * If confirmed, it sends a DELETE request to the API with the post's ID obtained
 * from the URL parameters. Upon deletion, it redirects the user
 * to the homepage and logs a success message. If the deletion fails or an error occurs,
 * it logs the corresponding error message.
 *
 * @returns {Promise<boolean>} Returns a promise that resolves to `true` if the post
 * was deleted successfully, or `false` if the deletion failed or was canceled.
 */

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
