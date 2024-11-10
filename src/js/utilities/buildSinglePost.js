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
  const postComments = post.comments;
  const postReactions = post.reactions;
  const commentsHeader = document.getElementById("commentsHeader");
  const imageAndTitleContainer = document.createElement("div");

  const main = document.querySelector("main");
  const blogpageImageContainer = document.querySelector(".blogpage-image-container");

  console.log(post);

  const createdAtFormatted = formatDate(createdAt);
  const updatedAtFormatted = formatDate(updatedAt);

  const blogPostImageBackground = document.createElement("img");
  const blogPostImage = document.querySelector(".blogpage-image");
  const header = document.getElementById("postHeaderTitle");
  const postAuthor = document.getElementById("postAuthor");
  const postText = document.getElementById("blogpost-text");
  const dateCreated = document.getElementById("publicationDate");
  const updatedTime = document.getElementById("updatedTime");

  main.prepend(blogPostImageBackground);
  blogpageImageContainer.prepend(imageAndTitleContainer);
  imageAndTitleContainer.append(blogPostImage, header);

  blogPostImageBackground.className =
    "absolute z-1 w-full max-h-[800px] object-cover mx-auto bg-cover bg-center opacity-30 hidden sm:block";
  imageAndTitleContainer.className = "z-10 sm:mt-20 ";

  blogPostImageBackground.src = post.media?.url || "";
  blogPostImage.src = post.media?.url || "";
  blogPostImage.setAttribute("alt", post.media?.alt || "Missing alt text");
  postAuthor.innerText = `Published by: ${post.author.name}`;
  header.innerText = post.title;
  postText.innerText = post.body;
  dateCreated.innerText = `Post Created: ${createdAtFormatted}`;
  updatedTime.innerText = `Post Updated: ${updatedAtFormatted}`;

  commentsHeader.innerText = post._count?.comments !== 0 ? "Comments:" : "";

  const commentContainer = document.getElementById("commentContainer");

  postComments.forEach((comment) => {
    const fullCommentContainer = document.createElement("div");
    const singleCommentContainer = document.createElement("div");
    const commentLeftContainer = document.createElement("div");
    const userContainer = document.createElement("div");
    const userImage = document.createElement("img");
    const userName = document.createElement("p");
    const userComment = document.createElement("p");
    const userCommentDate = document.createElement("p");

    console.log(comment);

    userImage.setAttribute("src", comment.author.avatar.url);
    userName.innerHTML = `${comment.author.name}:`;
    userComment.innerHTML = comment.body;
    userCommentDate.innerHTML = formatDate(comment.created);

    fullCommentContainer.append(userCommentDate, singleCommentContainer);
    singleCommentContainer.append(commentLeftContainer, userComment);
    commentLeftContainer.append(userContainer, userComment);
    userContainer.append(userImage, userName);
    commentContainer.append(fullCommentContainer);

    fullCommentContainer.className = "flex flex-col text-white w-full items-center justify-between";
    singleCommentContainer.className = "bg-[#151515] w-full rounded-xl";
    commentLeftContainer.className = "flex flex-wrap items-center gap-4 p-3";
    userContainer.className = "flex items-center gap-2";
    userImage.className = "w-10 h-10 object-cover rounded-full";
    userCommentDate.className = "text-right ml-auto text-xs mb-2";
  });

  postReactions.forEach((symbol) => {
    let reactionItem = document.createElement("div");
    let reactionSymbol = document.createElement("p");
    let reactionCount = document.createElement("p");
    let reactionsWrapper = document.createElement("div");
    const emojiRow = document.getElementById("emojiRow");

    reactionSymbol.innerHTML = symbol.symbol;
    reactionCount.innerHTML = symbol.count;

    reactionItem.append(reactionSymbol, reactionCount);

    reactionItem.className = "flex flex-col items-center";
    reactionsWrapper.className = "flex flex-row";

    emojiRow.append(reactionsWrapper);
    reactionsWrapper.append(reactionItem);

    console.log(reactionSymbol, reactionCount);
  });

  if (createdAt === updatedAt) {
    updatedTime.style.display = "none";
  }

  if (post.author.name === localStorage.getItem("userName")) {
    const buttonWrapper = document.createElement("div");
    const createDeleteButton = document.createElement("button");
    const createEditButton = document.createElement("button");

    createDeleteButton.innerHTML = "Delete Post";
    createEditButton.innerHTML = "Edit Post";

    createEditButton.className =
      "bg-[#151515] pt-3 pb-3 px-6 rounded-xl hover:scale-[1.10] cursor-pointer transition duration-200";
    createDeleteButton.className =
      "bg-[#151515] pt-3 pb-3 px-6 rounded-xl hover:scale-[1.10] cursor-pointer transition duration-200";

    buttonWrapper.className = "flex gap-10 my-10";

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
