import { fetchId } from "../../api/constants";
import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const formData = Object.fromEntries(new FormData(event.target));
  console.log(formData, "adwadw");

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

  document.getElementById("editPostButton").style.display = "none";

  setTimeout(() => {
    window.location.href = `/post/?id=${fetchId}`;
  }, 2000);
}
