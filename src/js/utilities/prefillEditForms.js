import { API_SOCIAL_SELECTED_POST } from "../api/constants";
import { headers } from "../api/headers";
import { readSinglePost } from "../api/post/read";

export async function prefillEditForms() {
  const data = await readSinglePost();
  console.log(data);

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

// export async function prefillEditForms() {
//   try {
//     const fetchPost = await fetch(API_SOCIAL_SELECTED_POST, {
//       method: "GET",
//       headers: headers(),
//     });

//     if (fetchPost.ok) {
//       const data = await fetchPost.json();
//       const postData = data.data;

//       const urlForm = document.getElementById("urlForm");
//       const postTitleForm = document.getElementById("titleForm");
//       const postContentForm = document.getElementById("bodyContent");
//       const tagsForm = document.getElementById("tagsForm");
//       const imageDescriptionForm = document.getElementById("altTagForm");

//       urlForm.defaultValue = postData.media?.url || "";
//       postTitleForm.defaultValue = postData.title;
//       postContentForm.defaultValue = postData?.body || "";
//       tagsForm.defaultValue = postData?.tags || "";
//       imageDescriptionForm.defaultValue = postData.media?.alt || "";

//       return postData;
//     }
//   } catch (error) {
//     alert(error, "Failed to read single post");
//   }
// }
