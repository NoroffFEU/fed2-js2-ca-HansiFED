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
}
