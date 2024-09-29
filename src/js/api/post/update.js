import { API_SOCIAL_POSTS } from "../constants";
import { fetchId } from "../../api/constants";
import { headers } from "../headers";

/**
 * Updates an existing post with the provided title, body, tags, and media.
 *
 * @async
 * @function updatePost
 * @param {Object} postDetails - An object containing the post details.
 * @param {string} postDetails.title - The title of the post to be updated.
 * @param {string} postDetails.body - The body content of the post to be updated.
 * @param {Object} postDetails.media - An object containing media details for the post.
 * @param {Array<string>} postDetails.tags - An array of tags associated with the post.
 *
 * @description
 * This function retrieves the post ID from the URL, sends a PUT request
 * to update the post on the server with the new details provided in the
 * `postDetails` object. If the update is successful, it displays a success
 * message and redirects the user to the updated post. If the update fails,
 * it displays an error message on the page.
 *
 * @returns {Promise<object} A promise that resolves with the API response object, which contains
 * the result and information of the updated post.
 * @throws {Error} Throws an error if the update operation fails or if an unexpected error occurs.
 */

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

    const result = await response.json();

    if (!response.ok) {
      document.getElementById("errorMessage").innerHTML = result.errors[0].message;
    }

    if (response.ok) {
      document.getElementById("editPostButton").style.display = "none";
      document.getElementById("errorMessage").style.display = "none";
      document.getElementById(
        "userSuccess"
      ).innerText = `Post was updated successfully, we'll now redirect you to the post page`;
      setTimeout(() => {
        window.location.href = `/post/?id=${fetchId}`;
      }, 6000);
    }
  } catch (error) {
    alert(error);
    throw error;
  }
}
