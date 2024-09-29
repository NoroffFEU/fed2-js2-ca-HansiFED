/**
 * Builds and renders a list of blog posts on the home page for the user's posts.
 *
 * @function buildMyPosts
 * @param {Array} blogPost - An array of blog post objects to be displayed.
 * @param {Object} blogPost[].media - The media object associated with the post.
 * @param {string} blogPost[].media.url - The URL of the media for the post.
 * @param {string} blogPost[].media.alt - The alt text for the media.
 * @param {string} blogPost[].title - The title of the blog post.
 * @param {string} blogPost[].id - The unique identifier for the blog post.
 * @description
 * This function takes an array of blog post objects and dynamically creates
 * a list of blog posts in the DOM. Each post is clickable and redirects
 * the user to the corresponding post page when clicked. If a media URL or
 * alt text is missing, defaults are used.
 *
 */

export function buildMyPosts(blogPost) {
  let blogPostList = document.querySelector(".myBlogPosts-list");
  blogPostList.innerHTML = "";

  blogPost.forEach((element) => {
    let postContainer = document.createElement("div");
    let blogPostImage = document.createElement("img");
    let postContainerBottom = document.createElement("div");
    let postContainerBottomHeader = document.createElement("h2");

    postContainer.className = "post-container flex-c";
    blogPostImage.className = "blogpost-image";
    postContainerBottom.className = "postcontainer-bottom flex-c center-horizontal";
    postContainerBottomHeader.className = "postContainerHeader";

    blogPostImage.setAttribute("src", element.media?.url || "");
    blogPostImage.setAttribute("alt", element.media?.alt || "No description available");
    postContainerBottomHeader.innerHTML = `${element.title}`;

    postContainer.append(blogPostImage);
    postContainer.append(postContainerBottom);
    postContainerBottom.append(postContainerBottomHeader);
    blogPostList.append(postContainer);
    postContainer.addEventListener("click", async () => {
      window.location.href = `/post/?id=${element.id}`;
    });
  });
}
