import { formatDate } from "./formatDate";

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
      const fetchId = new URLSearchParams(window.location.search).get("id");
      window.location.href = `/post/edit/?id=${fetchId}`;
    });
  }
}
