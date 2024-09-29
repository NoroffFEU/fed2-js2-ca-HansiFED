import { buildMyPosts } from "../../utilities/buildMyPosts";
import { blogPostsBuilder } from "../../utilities/buildPosts";
import { API_SOCIAL_MY_USER_POSTS, API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Fetches a single post based on the ID provided in the browser URL.
 *
 * @async
 * @function readSinglePost
 * @returns {Promise<Object|null>} The post data if successful, or null if the fetch fails.
 *
 * @description
 * This function retrieves a single post from the API by extracting the post ID from the URL's query parameters.
 * It includes author and comments data in the API request, these can be removed if not wanted. If successful, it returns the post data;
 * otherwise, it alerts the user of the failure.
 */

export async function readSinglePost() {
  const pageId = new URLSearchParams(window.location.search).get("id");
  try {
    const fetchInfo = await fetch(`${API_SOCIAL_POSTS}/${pageId}?_author=true&_comments=true`, {
      method: "GET",
      headers: headers(),
    });

    if (fetchInfo.ok) {
      const data = await fetchInfo.json();
      const postData = data.data;

      return postData;
    }
  } catch (error) {
    alert(error, "Failed to read single post");
  }
}

/**
 * Fetches a list of posts from the API.
 *
 * @async
 * @function readPosts
 * @param {number} [limit=12] - The maximum number of posts to retrieve.
 * @param {number} [page=1] - The page number for pagination (not currently in use).
 * @param {string} [tag] - An optional tag to filter the posts (not currently in use).
 * @returns {Promise<void>} No return value.
 *
 * @description
 * This function fetches posts from the API, processes the response to extract the data,
 * and then calls the `blogPostsBuilder` function to render the posts. The number of posts
 * returned is limited by the `limit` parameter.
 */

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "GET",
      headers: headers(),
    });

    const resultJson = await response.json();
    const postObjects = resultJson.data;
    const postObjectsToRender = postObjects.slice(0, limit);

    blogPostsBuilder(postObjectsToRender);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fetches the user's posts from the API.
 *
 * @async
 * @function readMyPosts
 * @param {number} [limit=6] - The maximum number of posts to retrieve.
 * @param {number} [page=1] - The page number for pagination (not currently in use).
 * @param {string} [tag] - An optional tag to filter the posts (not currently in use).
 * @returns {Promise<void>} No return value.
 *
 * @description
 * This function retrieves posts belonging to the currently logged-in user from the API.
 * It limits the number of posts returned based on the `limit` parameter and calls the
 * `buildMyPosts` function to render the user's posts.
 */

export async function readMyPosts(limit = 6, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_MY_USER_POSTS, {
      method: "GET",
      headers: headers(),
    });

    const resultJson = await response.json();
    const postObjects = resultJson.data;
    const postObjectsToRender = postObjects.slice(0, limit);

    buildMyPosts(postObjectsToRender);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
