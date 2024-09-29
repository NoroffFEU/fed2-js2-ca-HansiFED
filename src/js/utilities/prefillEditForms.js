import { API_SOCIAL_SELECTED_POST } from "../api/constants";
import { headers } from "../api/headers";
import { readSinglePost } from "../api/post/read";

/**
 * Prefills the edit form fields with data from a single blog post.
 *
 * @async
 * @function prefillEditForms
 * @description
 * This function fetches the data for a single post using the `readSinglePost` function.
 * If the data is successfully retrieved, it populates the corresponding form fields
 * with the post's media URL, title, body content, tags, and alternative text.
 * This is used to allow users to edit their existing blog posts more easily.
 *
 * @returns {Promise<void>} A promise that resolves when the form fields have been populated.
 *
 * @example
 * prefillEditForms();
 */

export async function prefillEditForms() {
  const data = await readSinglePost();

  if (data) {
    document.getElementById("urlForm").value = data.media?.url || "";
    document.getElementById("titleForm").value = data.title;
    document.getElementById("bodyContent").value = data?.body || "";
    document.getElementById("tagsForm").value = data?.tags || "";
    document.getElementById("altTagForm").value = data.media?.alt || "";
  }

  console.log("Form pre-filled with:", {
    title: document.getElementById("titleForm").value,
    body: document.getElementById("bodyContent").value,
    url: document.getElementById("urlForm").value,
    alt: document.getElementById("altTagForm").value,
    tags: document.getElementById("tagsForm").value,
  });
}
