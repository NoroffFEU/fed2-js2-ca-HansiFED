import { blogPostBuilder } from "../../utilities/buildPosts";
import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "GET",
      headers: headers(),
    });

    const resultJson = await response.json();
    const postObjects = resultJson.data;
    const postObjectsToRender = postObjects.slice(0, limit);

    console.log(postObjects);

    blogPostBuilder(postObjectsToRender);
  } catch (error) {
    console.error(error);
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
