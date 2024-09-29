import { createPost } from "../../api/post/create";

/**
 * Handles the submission of the post creation form and triggers the {@link createPost} function.
 *
 * @async
 * @function onCreatePost
 * @param {Event} event - The event object triggered by the form submission.
 *
 * @description
 * This function is an event handler for a form submission. It prevents the default form submission behavior,
 * extracts form data using `FormData`, and structures it into an object that works with the {@link createPost} function.
 * The form data includes a title, body, media (with URL and alt text), and tags, which are split and trimmed if provided.
 *
 * @returns {void} No return value, but triggers the `createPost` function.
 */

export async function onCreatePost(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const createNewPost = {
    title: formData.get("title"),
    body: formData.get("body"),
    media: {
      url: formData.get("url"),
      alt: formData.get("altTag"),
    },
    tags: formData.get("tags")
      ? formData
          .get("tags")
          .split(", ")
          .map((tags) => tags.trim())
      : [],
  };

  createPost(createNewPost);
}
