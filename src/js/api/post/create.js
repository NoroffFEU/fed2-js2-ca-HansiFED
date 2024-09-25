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

    if (!response.ok) {
      const userError = (document.getElementById(
        "userError"
      ).innerHTML = `${result.errors[0].message}`);
    }

    if (response.ok) {
      userError.style.display = "none";
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
