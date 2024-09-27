import { buildMyPosts } from "../../utilities/buildMyPosts";
import { blogPostsBuilder } from "../../utilities/buildPosts";
import { API_SOCIAL_MYUSER_POSTS, API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function readSinglePost() {
  const pageId = new URLSearchParams(window.location.search).get("id");
  try {
    const fetchInfo = await fetch(`${API_SOCIAL_POSTS}/${pageId}?_author=true`, {
      method: "GET",
      headers: headers(),
    });

    if (fetchInfo.ok) {
      const data = await fetchInfo.json();
      const postData = data.data;
      console.log("Data being read:", data);
      return postData;
    }
  } catch (error) {
    alert(error, "Failed to build single post");
  }
}

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

    blogPostsBuilder(postObjectsToRender);
  } catch (error) {
    console.error(error);
  }
}

export async function readMyPosts(limit = 6, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_MYUSER_POSTS, {
      method: "GET",
      headers: headers(),
    });

    const resultJson = await response.json();
    const postObjects = resultJson.data;
    const postObjectsToRender = postObjects.slice(0, limit);

    console.log(postObjects);

    buildMyPosts(postObjectsToRender);
  } catch (error) {
    console.error(error);
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
