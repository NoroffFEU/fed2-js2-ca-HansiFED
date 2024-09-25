import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

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

    console.log(response);

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    throw error;
  }
}
