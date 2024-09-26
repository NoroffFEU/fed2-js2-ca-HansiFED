import { updateProfile } from "../../api/profile/update";

export async function onUpdateProfile(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const profileUpdate = {
    bio: formData.get("bio") ?? "",
    banner: {
      url: formData.get("banner") ?? "",
      alt: "",
    },
    avatar: {
      url: formData.get("pfp") ?? "",
      alt: "",
    },
  };

  updateProfile(profileUpdate);
}
