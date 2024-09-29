import { updatePost } from "../../api/post/update";

/**
 * Handles the form submission for updating a blog post.
 *
 * @async
 * @function onUpdatePost
 * @param {Event} event - The event object from the form submission.
 * @description
 * This function prevents the default form submission behavior and collects
 * the updated post data from the form in browser. It constructs
 * an updated post object containing the title, body, media information,
 * and tags. Finally, it calls the `updatePost` function to send the
 * updated post data to the Noroff API.
 *
 * @returns {Promise<void>} Returns a promise that resolves when the
 * updatePost function is called.
 *
 * @see {@link updatePost} for how the update API request is handled.
 */

export async function onUpdatePost(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const formData = Object.fromEntries(new FormData(event.target));

  const updatedPost = {
    title: formData.title,
    body: formData.body,
    media: {
      url: formData.url,
      alt: formData.altTag,
    },
    tags: formData.tags ? formData.tags.split(", ").map((tag) => tag.trim()) : [],
  };

  updatePost(updatedPost);
}
