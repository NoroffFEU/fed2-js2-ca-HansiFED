import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Creates a new post by sending a POST request to the social API.
 *
 * @async
 * @function createPost
 * @param {Object} postDetails - Object containing the details of the post.
 * @param {string} postDetails.title - The title of the post (required).
 * @param {string} postDetails.body - The body content of the post (optional).
 * @param {string} [postDetails.media] - URL to media (optional in the API, but in my case required because that's how I'd like my posts to be).
 * @param {Array<string>} [postDetails.tags] - Tags associated with the post (optional).
 *
 * @description
 * This function sends a new post request to the API with the provided title, body, media,
 * and tags. It handles both success and failure by updating the UI to display
 * success or error messages. If the operation succeeds, the user is redirected to the home page.
 *
 * @returns {Promise<Object>} A promise that resolves with the API response object, which contains
 * the result of the post creation data.
 *
 * @throws {Error} If the request fails, the error is thrown.
 */

export async function createPost({ title, body, media, tags }) {
  const postBody = JSON.stringify({
    title,
    body,
    media,
    tags,
  });

  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "POST",
      headers: headers(),
      body: postBody,
    });

    const result = await response.json();

    if (!response.ok) {
      const userError = (document.getElementById(
        "userError"
      ).innerHTML = `${result.errors[0].message}`);
    }

    if (response.ok) {
      userError.style.display = "none";
      document.getElementById("createPostButton").style.display = "none";
      document.getElementById(
        "userSuccess"
      ).innerHTML = `Post was created successfully, we'll now redirect you to the home page`;
      setTimeout(() => {
        window.location.href = "/";
      }, 6000);
    }

    return result;
  } catch (error) {
    throw error;
  }
}
