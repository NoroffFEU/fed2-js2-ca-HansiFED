import { API_SOCIAL_POSTS } from "../constants";
import { fetchId } from "../../api/constants";
import { headers } from "../headers";

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
      console.log(response.status, response.statusText);
      console.log(response);
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
