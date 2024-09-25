import { createPost } from "../../api/post/create";

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

  console.log("Created Post:", createNewPost);
  createPost(createNewPost);
}
