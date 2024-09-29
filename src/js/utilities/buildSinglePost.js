import { fetchId } from "../api/constants";
import { deletePost } from "../api/post/delete";
import { formatDate } from "./formatDate";

/**
 * Builds and displays a single blog post on the page.
 *
 * @async
 * @function buildSinglePost
 * @param {Object} post - The post object containing all relevant post data.
 * @param {string} post.title - The title of the blog post.
 * @param {string} post.body - The content of the blog post.
 * @param {string} post.media.url - The URL of the post's image.
 * @param {string} post.media.alt - The alt text for the post's image.
 * @param {string} post.author.name - The name of the author of the post.
 * @param {string} post.created - The date the post was created.
 * @param {string} post.updated - The date the post was last updated.
 *
 * @description
 * This function takes a post object and updates the HTML elements on the page
 * to display the post's title, content, author, and publication dates.
 * If the post was created by the currently logged-in user, it also displays
 * buttons for editing and deleting the post. The function uses `formatDate`
 * to format the created and updated dates, and handles the click events
 * for the edit and delete buttons.
 *
 * @returns {Promise<void>} Returns a promise that resolves when the post
 * has been successfully built and displayed.
 */

export async function buildSinglePost(post) {
  const createdAt = post.created;
  const updatedAt = post.updated;

  const createdAtFormatted = formatDate(createdAt);
  const updatedAtFormatted = formatDate(updatedAt);

  const blogPostImage = document.querySelector(".blogpage-image");
  const header = document.getElementById("postHeaderTitle");
  const postAuthor = document.getElementById("postAuthor");
  const postText = document.getElementById("blogpost-text");
  const dateCreated = document.getElementById("publicationDate");
  const updatedTime = document.getElementById("updatedTime");

  blogPostImage.src = post.media?.url || "";
  blogPostImage.setAttribute("alt", post.media?.alt || "Missing alt text");
  postAuthor.innerText = `Published by: ${post.author.name}`;
  header.innerText = post.title;
  postText.innerText = post.body;
  dateCreated.innerText = `Post Created: ${createdAtFormatted}`;
  updatedTime.innerText = `Post Updated: ${updatedAtFormatted}`;

  if (post.author.name === localStorage.getItem("userName")) {
    const buttonWrapper = document.createElement("div");
    const createDeleteButton = document.createElement("button");
    const createEditButton = document.createElement("button");

    createDeleteButton.innerHTML = "Delete Post";
    createEditButton.innerHTML = "Edit Post";

    buttonWrapper.append(createEditButton, createDeleteButton);

    document.querySelector("main").append(buttonWrapper);

    createEditButton.addEventListener("click", async () => {
      window.location.href = `/post/edit/?id=${fetchId}`;
    });

    createDeleteButton.addEventListener("click", async () => {
      await deletePost();
    });
  }
}
